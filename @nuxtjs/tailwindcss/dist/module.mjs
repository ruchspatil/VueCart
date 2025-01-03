import { relative, join, resolve, dirname } from 'pathe';
import { joinURL, withTrailingSlash, withoutTrailingSlash, cleanDoubleSlashes } from 'ufo';
import { resolvePath, tryResolveModule, useNuxt, findPath, resolveAlias, useLogger, addTemplate, createResolver, updateTemplates, addTypeTemplate, isNuxtMajorVersion, addDevServerHandler, defineNuxtModule, getNuxtVersion, installModule, addImports } from '@nuxt/kit';
import defaultTailwindConfig from 'tailwindcss/stubs/config.simple.js';
import { existsSync } from 'node:fs';
import { defu, createDefu } from 'defu';
import { LogLevels } from 'consola';
import { getContext } from 'unctx';
import _loadConfig from 'tailwindcss/loadConfig.js';
import resolveConfig from 'tailwindcss/resolveConfig.js';
import { klona } from 'klona';
import { colors } from 'consola/utils';
import { eventHandler, sendRedirect, H3Event } from 'h3';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const name = "@nuxtjs/tailwindcss";
const version = "6.12.2";
const configKey = "tailwindcss";
const compatibility = {
	nuxt: "^2.9.0 || >=3.0.0-rc.1"
};

const resolveConfigPath = async (path, nuxtOptions = useNuxt().options) => Promise.all(
  (Array.isArray(path) ? path : [path]).filter(Boolean).map((path2) => path2.startsWith(nuxtOptions.buildDir) ? path2 : findPath(path2, { extensions: [".js", ".cjs", ".mjs", ".ts"] }))
).then((paths) => paths.filter((p) => Boolean(p)));
const resolveContentPaths = (srcDir, nuxtOptions = useNuxt().options) => {
  const r = (p) => p.startsWith(srcDir) ? p : resolve(srcDir, p);
  const extensionFormat = (s) => s.length > 1 ? `.{${s.join(",")}}` : `.${s.join("") || "vue"}`;
  const defaultExtensions = extensionFormat(["js", "ts", "mjs"]);
  const sfcExtensions = extensionFormat(Array.from(/* @__PURE__ */ new Set([".vue", ...nuxtOptions.extensions])).map((e) => e.replace(/^\.*/, "")));
  const importDirs = [...nuxtOptions.imports?.dirs || []].map(r);
  const [composablesDir, utilsDir] = [resolve(srcDir, "composables"), resolve(srcDir, "utils")];
  if (!importDirs.includes(composablesDir))
    importDirs.push(composablesDir);
  if (!importDirs.includes(utilsDir))
    importDirs.push(utilsDir);
  return [
    r(`components/**/*${sfcExtensions}`),
    ...(() => {
      if (nuxtOptions.components) {
        return (Array.isArray(nuxtOptions.components) ? nuxtOptions.components : typeof nuxtOptions.components === "boolean" ? ["components"] : nuxtOptions.components.dirs).map((d) => `${resolveAlias(typeof d === "string" ? d : d.path)}/**/*${sfcExtensions}`);
      }
      return [];
    })(),
    nuxtOptions.dir.layouts && r(`${nuxtOptions.dir.layouts}/**/*${sfcExtensions}`),
    ...[true, void 0].includes(nuxtOptions.pages) ? [r(`${nuxtOptions.dir.pages}/**/*${sfcExtensions}`)] : [],
    nuxtOptions.dir.plugins && r(`${nuxtOptions.dir.plugins}/**/*${defaultExtensions}`),
    ...importDirs.map((d) => `${d}/**/*${defaultExtensions}`),
    r(`{A,a}pp${sfcExtensions}`),
    r(`{E,e}rror${sfcExtensions}`),
    r(`app.config${defaultExtensions}`)
  ].filter(Boolean);
};
const resolveModulePaths = async (configPath, nuxt = useNuxt()) => {
  const mainPaths = [await resolveConfigPath(configPath), resolveContentPaths(nuxt.options.srcDir, nuxt.options)];
  if (Array.isArray(nuxt.options._layers) && nuxt.options._layers.length > 1) {
    const layerPaths = await Promise.all(
      nuxt.options._layers.slice(1).map(async (layer) => [
        await resolveConfigPath(layer?.config?.tailwindcss?.configPath || join(layer.cwd, "tailwind.config"), nuxt.options),
        resolveContentPaths(layer?.config?.srcDir || layer.cwd, defu(layer.config, nuxt.options))
      ])
    );
    layerPaths.forEach(([configPaths, contentPaths]) => {
      mainPaths[0].unshift(...configPaths);
      mainPaths[1].unshift(...contentPaths);
    });
  }
  return mainPaths;
};
async function resolveCSSPath(cssPath, nuxt = useNuxt()) {
  if (typeof cssPath === "string") {
    const _cssPath = await resolvePath(cssPath, { extensions: [".css", ".sass", ".scss", ".less", ".styl"] });
    return existsSync(_cssPath) ? [_cssPath, `Using Tailwind CSS from ~/${relative(nuxt.options.srcDir, _cssPath)}`] : await tryResolveModule("tailwindcss/package.json").then((twLocation) => twLocation ? [join(twLocation, "../tailwind.css"), "Using default Tailwind CSS file"] : Promise.reject("Unable to resolve tailwindcss. Is it installed?"));
  } else {
    return [
      false,
      "No Tailwind CSS file found. Skipping..."
    ];
  }
}
const resolveBoolObj = (config, fb) => defu(typeof config === "object" ? config : {}, fb);
const resolveViewerConfig = (config) => resolveBoolObj(config, { endpoint: "/_tailwind", exportViewer: false });
const resolveExposeConfig = (config) => resolveBoolObj(config, { alias: "#tailwind-config", level: 2 });
const resolveEditorSupportConfig = (config) => resolveBoolObj(config, { autocompleteUtil: true, generateConfig: false });
function resolveInjectPosition(css, position = "first") {
  if (typeof position === "number") {
    return ~~Math.min(position, css.length + 1);
  }
  if (typeof position === "string") {
    switch (position) {
      case "first":
        return 0;
      case "last":
        return css.length;
      default:
        throw new Error("invalid literal: " + position);
    }
  }
  if (position.after !== void 0) {
    const index = css.indexOf(position.after);
    if (index === -1) {
      throw new Error("`after` position specifies a file which does not exists on CSS stack: " + position.after);
    }
    return index + 1;
  }
  throw new Error("invalid position: " + JSON.stringify(position));
}

const logger = useLogger("nuxt:tailwindcss");

const isJSObject$1 = (value) => typeof value === "object" && !Array.isArray(value);
const configMerger = (base, ...defaults) => {
  if (!base) {
    return klona(defaults[0]);
  }
  return createDefu((obj, key, value) => {
    if (key === "content") {
      if (isJSObject$1(obj[key]) && Array.isArray(value)) {
        obj[key] = { ...obj[key], files: [...obj[key]["files"] || [], ...value] };
        return true;
      } else if (Array.isArray(obj[key]) && isJSObject$1(value)) {
        obj[key] = { ...value, files: [...obj[key], ...value.files || []] };
        return true;
      }
    }
    if (obj[key] && typeof value === "function") {
      obj[key] = value(Array.isArray(obj[key]) ? obj[key] : obj[key]["files"]);
      return true;
    }
  })(klona(base), ...defaults.map(klona));
};

const CONFIG_TEMPLATE_NAME = "tailwind.config.cjs";
const twCtx = getContext("twcss");
const { tryUse, set } = twCtx;
twCtx.tryUse = () => {
  const ctx = tryUse();
  if (!ctx) {
    try {
      return resolveConfig(_loadConfig(join(useNuxt().options.buildDir, CONFIG_TEMPLATE_NAME)));
    } catch {
    }
  }
  return ctx;
};
twCtx.set = (instance, replace = true) => {
  const resolvedConfig = instance && resolveConfig(instance);
  resolvedConfig && useNuxt().callHook("tailwindcss:resolvedConfig", resolvedConfig, twCtx.tryUse() ?? void 0);
  set(resolvedConfig, replace);
};
const unsafeInlineConfig = (inlineConfig) => {
  if (!inlineConfig)
    return;
  if ("plugins" in inlineConfig && Array.isArray(inlineConfig.plugins) && inlineConfig.plugins.find((p) => typeof p === "function" || typeof p?.handler === "function")) {
    return "plugins";
  }
  if (inlineConfig.content) {
    const invalidProperty = ["extract", "transform"].find((i) => i in inlineConfig.content && typeof inlineConfig.content[i] === "function");
    if (invalidProperty) {
      return `content.${invalidProperty}`;
    }
  }
  if (inlineConfig.safelist) {
    const invalidIdx = inlineConfig.safelist.findIndex((s) => typeof s === "object" && s.pattern instanceof RegExp);
    if (invalidIdx > -1) {
      return `safelist[${invalidIdx}]`;
    }
  }
};
const JSONStringifyWithRegex = (obj) => JSON.stringify(obj, (_, v) => v instanceof RegExp ? `__REGEXP ${v.toString()}` : v);
const createInternalContext = async (moduleOptions, nuxt = useNuxt()) => {
  const [configPaths, contentPaths] = await resolveModulePaths(moduleOptions.configPath, nuxt);
  const configUpdatedHook = {};
  const configResolvedPath = join(nuxt.options.buildDir, CONFIG_TEMPLATE_NAME);
  let enableHMR = true;
  if (moduleOptions.disableHMR) {
    enableHMR = false;
  }
  const unsafeProperty = unsafeInlineConfig(moduleOptions.config);
  if (unsafeProperty && enableHMR) {
    logger.warn(
      `The provided Tailwind configuration in your \`nuxt.config\` is non-serializable. Check \`${unsafeProperty}\`. Falling back to providing the loaded configuration inlined directly to PostCSS loader..`,
      "Please consider using `tailwind.config` or a separate file (specifying in `configPath` of the module options) to enable it with additional support for IntelliSense and HMR. Suppress this warning with `quiet: true` in the module options."
    );
    enableHMR = false;
  }
  const trackObjChanges = (configPath, path = []) => ({
    get: (target, key) => {
      return typeof target[key] === "object" && target[key] !== null ? new Proxy(target[key], trackObjChanges(configPath, path.concat(key))) : target[key];
    },
    set(target, key, value) {
      const cfgKey = path.concat(key).map((k) => `[${JSON.stringify(k)}]`).join("");
      const resultingCode = `cfg${cfgKey} = ${JSONStringifyWithRegex(value)?.replace(/"__REGEXP (.*)"/g, (_, substr) => substr.replace(/\\"/g, '"')) || `cfg${cfgKey}`};`;
      const functionalStringify = (val) => JSON.stringify(val, (_, v) => ["function"].includes(typeof v) ? CONFIG_TEMPLATE_NAME + "ns" : v);
      if (functionalStringify(target[key]) === functionalStringify(value) || configUpdatedHook[configPath].endsWith(resultingCode)) {
        return Reflect.set(target, key, value);
      }
      if (functionalStringify(value).includes(`"${CONFIG_TEMPLATE_NAME + "ns"}"`) && enableHMR) {
        logger.warn(
          `A hook has injected a non-serializable value in \`config${cfgKey}\`, so the Tailwind Config cannot be serialized. Falling back to providing the loaded configuration inlined directly to PostCSS loader..`,
          "Please consider using a configuration file/template instead (specifying in `configPath` of the module options) to enable additional support for IntelliSense and HMR."
        );
        enableHMR = false;
      }
      if (JSONStringifyWithRegex(value).includes("__REGEXP") && enableHMR) {
        logger.warn(`A hook is injecting RegExp values in your configuration (check \`config${cfgKey}\`) which may be unsafely serialized. Consider moving your safelist to a separate configuration file/template instead (specifying in \`configPath\` of the module options)`);
      }
      configUpdatedHook[configPath] += resultingCode;
      return Reflect.set(target, key, value);
    },
    deleteProperty(target, key) {
      configUpdatedHook[configPath] += `delete cfg${path.concat(key).map((k) => `[${JSON.stringify(k)}]`).join("")};`;
      return Reflect.deleteProperty(target, key);
    }
  });
  const loadConfig = async () => {
    configPaths.forEach((p) => configUpdatedHook[p] = "");
    const tailwindConfig = await Promise.all(
      configPaths.map(async (configPath, idx, paths) => {
        const _tailwindConfig = (() => {
          try {
            return configMerger(void 0, _loadConfig(configPath));
          } catch (e) {
            const error = e instanceof Error ? ("code" in e ? e.code : e.name).toUpperCase() : typeof e === "string" ? e.toUpperCase() : "";
            if (configPath.startsWith(nuxt.options.buildDir) && ["MODULE_NOT_FOUND"].includes(error)) {
              configUpdatedHook[configPath] = nuxt.options.dev ? "return {};" : "";
              return;
            }
            configUpdatedHook[configPath] = "return {};";
            logger.warn(`Failed to load config \`./${relative(nuxt.options.rootDir, configPath)}\` due to the error below. Skipping..
`, e);
          }
        })();
        if (_tailwindConfig?.purge && !_tailwindConfig.content) {
          configUpdatedHook[configPath] += "cfg.content = cfg.purge;";
        }
        await nuxt.callHook("tailwindcss:loadConfig", _tailwindConfig && new Proxy(_tailwindConfig, trackObjChanges(configPath)), configPath, idx, paths);
        return _tailwindConfig || {};
      })
    ).then((configs) => configs.reduce(
      (prev, curr) => configMerger(curr, prev),
      // internal default tailwind config
      configMerger(moduleOptions.config, { content: { files: contentPaths } })
    ));
    configUpdatedHook["main-config"] = "";
    await nuxt.callHook("tailwindcss:config", new Proxy(tailwindConfig, trackObjChanges("main-config")));
    twCtx.set(tailwindConfig);
    return tailwindConfig;
  };
  const generateConfig = () => enableHMR ? addTemplate({
    filename: CONFIG_TEMPLATE_NAME,
    write: true,
    getContents: () => {
      const serializeConfig = (config) => JSON.stringify(
        Array.isArray(config.plugins) && config.plugins.length > 0 ? configMerger({ plugins: (defaultPlugins) => defaultPlugins?.filter((p) => p && typeof p !== "function") }, config) : config,
        (_, v) => typeof v === "function" ? `() => (${JSON.stringify(v())})` : v
      ).replace(/"(\(\) => \(.*\))"/g, (_, substr) => substr.replace(/\\"/g, '"'));
      const layerConfigs = configPaths.map((configPath) => {
        const configImport = `require(${JSON.stringify(/[/\\]node_modules[/\\]/.test(configPath) ? configPath : "./" + relative(nuxt.options.buildDir, configPath))})`;
        return configUpdatedHook[configPath] ? configUpdatedHook[configPath].startsWith("return {};") ? "" : `(() => {const cfg=configMerger(undefined, ${configImport});${configUpdatedHook[configPath]};return cfg;})()` : configImport;
      }).filter(Boolean);
      return [
        `// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at ${( new Date()).toLocaleString()}`,
        `const configMerger = require(${JSON.stringify(createResolver(import.meta.url).resolve("./runtime/merger.js"))});`,
        `
const inlineConfig = ${serializeConfig(moduleOptions.config)};
`,
        "const config = [",
        layerConfigs.join(",\n"),
        `].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: { files: ${JSON.stringify(contentPaths)} } }));
`,
        `module.exports = ${configUpdatedHook["main-config"] ? `(() => {const cfg=config;${configUpdatedHook["main-config"]};return cfg;})()` : "config"}
`
      ].join("\n");
    }
  }) : { dst: "" };
  const registerHooks = () => {
    if (!enableHMR)
      return;
    nuxt.hook("app:templatesGenerated", async (_app, templates) => {
      if (Array.isArray(templates) && templates?.some((t) => configPaths.includes(t.dst))) {
        await loadConfig();
        setTimeout(async () => {
          await updateTemplates({ filter: (t) => t.filename === CONFIG_TEMPLATE_NAME });
          await nuxt.callHook("tailwindcss:internal:regenerateTemplates", { configTemplateUpdated: true });
        }, 100);
      }
    });
    nuxt.hook("vite:serverCreated", (server) => {
      nuxt.hook("tailwindcss:internal:regenerateTemplates", (data) => {
        if (!data || !data.configTemplateUpdated)
          return;
        const configFile = server.moduleGraph.getModuleById(configResolvedPath);
        configFile && server.moduleGraph.invalidateModule(configFile);
      });
    });
    moduleOptions.exposeConfig && nuxt.hook("builder:watch", async (_, path) => {
      if (configPaths.includes(join(nuxt.options.rootDir, path))) {
        twCtx.set(_loadConfig(configResolvedPath));
        setTimeout(async () => {
          await nuxt.callHook("tailwindcss:internal:regenerateTemplates");
        }, 100);
      }
    });
  };
  return {
    loadConfig,
    generateConfig,
    registerHooks
  };
};

const NON_ALPHANUMERIC_RE = /^[0-9a-z]+$/i;
const isJSObject = (value) => typeof value === "object" && !Array.isArray(value);
const createExposeTemplates = (config, nuxt = useNuxt()) => {
  const templates = [];
  const getTWConfig = (objPath = []) => objPath.reduce((prev, curr) => prev?.[curr], twCtx.tryUse());
  const populateMap = (obj, path = [], level = 1) => {
    Object.entries(obj).forEach(([key, value = {}]) => {
      const subpathComponents = path.concat(key);
      const subpath = subpathComponents.join("/");
      if (level >= config.level || !isJSObject(value) || Object.keys(value).find((k) => !k.match(NON_ALPHANUMERIC_RE))) {
        templates.push(addTemplate({
          filename: `tailwind.config/${subpath}.mjs`,
          getContents: () => {
            const _value = getTWConfig(subpathComponents);
            if (isJSObject(_value)) {
              const [validKeys, invalidKeys] = [[], []];
              Object.keys(_value).forEach((i) => (NON_ALPHANUMERIC_RE.test(i) ? validKeys : invalidKeys).push(i));
              return [
                `${validKeys.map((i) => `const _${i} = ${JSON.stringify(_value[i])}`).join("\n")}`,
                `const config = { ${validKeys.map((i) => `"${i}": _${i}, `).join("")}${invalidKeys.map((i) => `"${i}": ${JSON.stringify(_value[i])}, `).join("")} }`,
                `export { config as default${validKeys.length > 0 ? ", _" : ""}${validKeys.join(", _")} }`
              ].join("\n");
            }
            return `export default ${JSON.stringify(_value, null, 2)}`;
          },
          write: config.write
        }));
      } else {
        populateMap(value, path.concat(key), level + 1);
        templates.push(addTemplate({
          filename: `tailwind.config/${subpath}.mjs`,
          getContents: () => {
            const _value = getTWConfig(subpathComponents);
            const values = Object.keys(_value);
            return [
              `${values.map((v) => `import _${v} from "./${key}/${v}.mjs"`).join("\n")}`,
              `const config = { ${values.map((k) => `"${k}": _${k}`).join(", ")} }`,
              `export { config as default${values.length > 0 ? ", _" : ""}${values.join(", _")} }`
            ].join("\n");
          },
          write: config.write
        }));
      }
    });
  };
  populateMap(twCtx.tryUse());
  const entryTemplate = addTemplate({
    filename: "tailwind.config/index.mjs",
    getContents: () => {
      const _tailwindConfig = getTWConfig();
      const configOptions = Object.keys(_tailwindConfig);
      return [
        `${configOptions.map((v) => `import ${v} from "#build/tailwind.config/${v}.mjs"`).join("\n")}`,
        `const config = { ${configOptions.join(", ")} }`,
        `export { config as default, ${configOptions.join(", ")} }`
      ].join("\n");
    },
    write: true
  });
  templates.push(addTypeTemplate({
    filename: "types/tailwind.config.d.ts",
    getContents: () => {
      const _tailwindConfig = getTWConfig();
      const declareModule = (obj, path = [], level = 1) => Object.entries(obj).map(([key, value = {}]) => {
        const subpath = path.concat(key).join("/");
        if (level >= config.level || !isJSObject(value) || Object.keys(value).find((k) => !k.match(NON_ALPHANUMERIC_RE))) {
          if (isJSObject(value)) {
            const [validKeys, invalidKeys] = [[], []];
            Object.keys(value).forEach((i) => (NON_ALPHANUMERIC_RE.test(i) ? validKeys : invalidKeys).push(i));
            return `declare module "${config.alias}/${subpath}" { ${validKeys.map((i) => `export const _${i}: ${JSON.stringify(value[i])};`).join("")} const defaultExport: { ${validKeys.map((i) => `"${i}": typeof _${i}, `).join("")}${invalidKeys.map((i) => `"${i}": ${JSON.stringify(value[i])}, `).join("")} }; export default defaultExport; }
`;
          }
          return `declare module "${config.alias}/${subpath}" { const defaultExport: ${JSON.stringify(value)}; export default defaultExport; }
`;
        }
        const values = Object.keys(value);
        return declareModule(value, path.concat(key), level + 1).join("") + `declare module "${config.alias}/${subpath}" {${Object.keys(value).map((v) => ` export const _${v}: typeof import("${config.alias}/${join(`${key}/${subpath}`, `../${v}`)}")["default"];`).join("")} const defaultExport: { ${values.map((k) => `"${k}": typeof _${k}`).join(", ")} }; export default defaultExport; }
`;
      });
      const configOptions = Object.keys(_tailwindConfig);
      return declareModule(_tailwindConfig).join("") + `declare module "${config.alias}" {${configOptions.map((v) => ` export const ${v}: typeof import("${join(config.alias, v)}")["default"];`).join("")} const defaultExport: { ${configOptions.map((v) => `"${v}": typeof ${v}`)} }; export default defaultExport; }`;
    }
  }));
  templates.push(entryTemplate);
  nuxt.options.alias[config.alias] = dirname(entryTemplate.dst);
  return templates.map((t) => t.dst);
};

const setupViewer = async (twConfig, config, nuxt = useNuxt()) => {
  const route = joinURL(nuxt.options.app?.baseURL, config.endpoint);
  const [routeWithSlash, routeWithoutSlash] = [withTrailingSlash(route), withoutTrailingSlash(route)];
  const viewerServer = (await import('tailwind-config-viewer/server/index.js').then((r) => r.default || r))({ tailwindConfigProvider: typeof twConfig === "string" ? () => _loadConfig(twConfig) : () => twConfig }).asMiddleware();
  const viewerDevMiddleware = eventHandler((event) => viewerServer(event.node?.req || event.req, event.node?.res || event.res));
  if (!isNuxtMajorVersion(2, nuxt)) {
    addDevServerHandler({
      handler: eventHandler((event) => {
        if (event.path === routeWithoutSlash) {
          return sendRedirect(event, routeWithSlash, 301);
        }
      })
    });
    addDevServerHandler({ route, handler: viewerDevMiddleware });
  } else {
    nuxt.options.serverMiddleware.push(
      // @ts-expect-error untyped handler parameters
      (req, res, next) => {
        if (req.url === routeWithoutSlash) {
          return sendRedirect(new H3Event(req, res), routeWithSlash, 301);
        }
        next();
      },
      // @ts-expect-error untyped handler parameters
      { route, handler: (req, res) => viewerDevMiddleware(new H3Event(req, res)) }
    );
  }
  nuxt.hook("listen", (_, listener) => {
    const viewerUrl = cleanDoubleSlashes(joinURL(listener.url, config.endpoint));
    logger.info(`Tailwind Viewer: ${colors.underline(colors.yellow(withTrailingSlash(viewerUrl)))}`);
  });
};
const exportViewer = async (twConfig, config, nuxt = useNuxt()) => {
  if (!config.exportViewer) {
    return;
  }
  const cli = await import('tailwind-config-viewer/cli/export.js').then((r) => r.default || r);
  nuxt.hook("nitro:build:public-assets", (nitro) => {
    const dir = joinURL(nitro.options.output.publicDir, config.endpoint);
    cli(dir, twConfig);
    logger.success(`Exported viewer to ${colors.yellow(relative(nuxt.options.srcDir, dir))}`);
  });
};

const deprecationWarnings = (moduleOptions, nuxt = useNuxt()) => [
  ["addTwUtil", "Use `editorSupport.autocompleteUtil` instead."],
  ["exposeLevel", "Use `exposeConfig.level` instead."],
  ["injectPosition", `Use \`cssPath: [${moduleOptions.cssPath === join(nuxt.options.dir.assets, "css/tailwind.css") ? '"~/assets/css/tailwind.css"' : typeof moduleOptions.cssPath === "string" ? `"${moduleOptions.cssPath}"` : moduleOptions.cssPath}, { injectPosition: ${JSON.stringify(moduleOptions.injectPosition)} }]\` instead.`]
].forEach(
  ([dOption, alternative]) => moduleOptions[dOption] !== void 0 && logger.warn(`Deprecated \`${dOption}\`. ${alternative}`)
);
const defaults = (nuxt = useNuxt()) => ({
  configPath: "tailwind.config",
  cssPath: join(nuxt.options.dir.assets, "css/tailwind.css"),
  config: defaultTailwindConfig,
  viewer: true,
  exposeConfig: false,
  quiet: nuxt.options.logLevel === "silent",
  editorSupport: false
});
const module = defineNuxtModule({
  meta: { name, version, configKey, compatibility },
  defaults,
  async setup(moduleOptions, nuxt) {
    if (moduleOptions.quiet)
      logger.level = LogLevels.silent;
    deprecationWarnings(moduleOptions, nuxt);
    if (Number.parseFloat(getNuxtVersion()) < 2.16) {
      await installModule("@nuxt/postcss8").catch((e) => {
        logger.error(`Error occurred while loading \`@nuxt/postcss8\` required for Nuxt ${getNuxtVersion()}, is it installed?`);
        throw e;
      });
    }
    const ctx = await createInternalContext(moduleOptions, nuxt);
    if (moduleOptions.editorSupport || moduleOptions.addTwUtil) {
      const editorSupportConfig = resolveEditorSupportConfig(moduleOptions.editorSupport);
      if ((editorSupportConfig.autocompleteUtil || moduleOptions.addTwUtil) && !isNuxtMajorVersion(2, nuxt)) {
        addImports({
          name: "autocompleteUtil",
          from: createResolver(import.meta.url).resolve("./runtime/utils"),
          as: "tw",
          ...typeof editorSupportConfig.autocompleteUtil === "object" ? editorSupportConfig.autocompleteUtil : {}
        });
      }
    }
    const [cssPath, cssPathConfig] = Array.isArray(moduleOptions.cssPath) ? moduleOptions.cssPath : [moduleOptions.cssPath];
    const [resolvedCss, loggerInfo] = await resolveCSSPath(cssPath, nuxt);
    logger.info(loggerInfo);
    nuxt.options.css = nuxt.options.css ?? [];
    const resolvedNuxtCss = resolvedCss && await Promise.all(nuxt.options.css.map((p) => resolvePath(p.src ?? p))) || [];
    if (resolvedCss && !resolvedNuxtCss.includes(resolvedCss)) {
      let injectPosition;
      try {
        injectPosition = resolveInjectPosition(nuxt.options.css, cssPathConfig?.injectPosition || moduleOptions.injectPosition);
      } catch (e) {
        throw new Error("failed to resolve Tailwind CSS injection position: " + e.message);
      }
      nuxt.options.css.splice(injectPosition, 0, resolvedCss);
    }
    let nuxt2ViewerConfig = join(nuxt.options.buildDir, "tailwind.config.cjs");
    nuxt.hook("modules:done", async () => {
      const _config = await ctx.loadConfig();
      const twConfig = ctx.generateConfig();
      ctx.registerHooks();
      nuxt2ViewerConfig = twConfig.dst || _config;
      if (moduleOptions.exposeConfig) {
        const exposeConfig = resolveExposeConfig({ level: moduleOptions.exposeLevel, ...typeof moduleOptions.exposeConfig === "object" ? moduleOptions.exposeConfig : {} });
        const exposeTemplates = createExposeTemplates(exposeConfig);
        nuxt.hook("tailwindcss:internal:regenerateTemplates", () => updateTemplates({ filter: (template) => exposeTemplates.includes(template.dst) }));
      }
      const postcssOptions = nuxt.options.postcss || nuxt.options.build.postcss.postcssOptions || nuxt.options.build.postcss;
      postcssOptions.plugins = {
        ...postcssOptions.plugins || {},
        "tailwindcss/nesting": postcssOptions.plugins?.["tailwindcss/nesting"] ?? {},
        "tailwindcss": twConfig.dst || _config
      };
      if (nuxt.options.dev && !isNuxtMajorVersion(2, nuxt)) {
        if (moduleOptions.viewer) {
          const viewerConfig = resolveViewerConfig(moduleOptions.viewer);
          setupViewer(twConfig.dst || _config, viewerConfig, nuxt);
          nuxt.hook("devtools:customTabs", (tabs) => {
            tabs?.push({
              title: "Tailwind CSS",
              name: "tailwindcss",
              icon: "logos-tailwindcss-icon",
              category: "modules",
              view: {
                type: "iframe",
                src: joinURL(nuxt.options.app?.baseURL, viewerConfig.endpoint)
              }
            });
          });
        }
      } else {
        if (!nuxt.options.dev)
          return;
        if (moduleOptions.viewer) {
          const viewerConfig = resolveViewerConfig(moduleOptions.viewer);
          exportViewer(twConfig.dst || addTemplate({ filename: "tailwind.config/viewer-config.cjs", getContents: () => `module.exports = ${JSON.stringify(_config)}`, write: true }).dst, viewerConfig);
        }
      }
    });
    if (nuxt.options.dev && moduleOptions.viewer && isNuxtMajorVersion(2, nuxt)) {
      const viewerConfig = resolveViewerConfig(moduleOptions.viewer);
      setupViewer(nuxt2ViewerConfig, viewerConfig, nuxt);
    }
  }
});

export { module as default };
