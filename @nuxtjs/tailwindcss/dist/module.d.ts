import * as _nuxt_schema from '@nuxt/schema';
import * as tailwindcss_resolveConfig from 'tailwindcss/resolveConfig';
import * as tailwindcss from 'tailwindcss';
import * as nuxt_kit from 'nuxt/kit';

type Import = Exclude<Parameters<typeof nuxt_kit['addImports']>[0], any[]>;
type TWConfig = tailwindcss.Config;
type InjectPosition = 'first' | 'last' | number | {
    after: string;
};
type _Omit<T, K extends PropertyKey> = {
    [P in keyof T as Exclude<P, K>]: T[P];
};
type InlineTWConfig = _Omit<TWConfig, 'content' | 'plugins' | 'safelist'> & {
    content?: (Extract<TWConfig['content'], any[]> | _Omit<Extract<TWConfig['content'], Record<string, any>>, 'extract' | 'transform'>);
    safelist?: Exclude<NonNullable<TWConfig['safelist']>[number], Record<string, any>>[];
};
type BoolObj<T extends Record<string, any>> = boolean | Partial<T>;
type ViewerConfig = {
    /**
     * The endpoint for the viewer
     *
     * @default '/_tailwind'
     */
    endpoint: `/${string}`;
    /**
     * Export the viewer during build
     *
     * Works in Nuxt 3; for Nuxt 2, use `npx tailwind-config-viewer export`
     *
     * @default false
     */
    exportViewer: boolean;
};
type ExposeConfig = {
    /**
     * Import name for the configuration
     *
     * @default '#tailwind-config'
     */
    alias: string;
    /**
     * Deeper references within configuration for optimal tree-shaking.
     *
     * @default 2
     */
    level: number;
    /**
     * To write the templates to file-system for usage with code that does not have access to the Virtual File System. This applies only for Nuxt 3 with Vite.
     */
    write?: boolean;
};
type EditorSupportConfig = {
    /**
     * Enable utility to write Tailwind CSS classes inside strings.
     *
     * You will need to update `.vscode/settings.json` based on this value. This works only for Nuxt 3 or Nuxt 2 with Bridge.
     *
     * ```json
     * {
     *   "tailwindCSS.experimental.classRegex": ["tw`(.*?)`", "tw\\('(.*?)'\\)"]
     * }
     * ```
     *
     * Read https://tailwindcss.nuxtjs.org/tailwind/editor-support#string-classes-autocomplete.
     *
     * @default false // if true, { as: 'tw' }
     */
    autocompleteUtil: BoolObj<Pick<Import, 'as'>>;
};
interface ModuleOptions {
    /**
     * The path of the Tailwind configuration file. The extension can be omitted, in which case it will try to find a `.js`, `.cjs`, `.mjs`, or `.ts` file.
     *
     * @default 'tailwind.config'
     */
    configPath: string | string[];
    /**
     * The path of the Tailwind CSS file. If the file does not exist, the module's default CSS file will be imported instead.
     *
     * @default '~/assets/css/tailwind.css'
     */
    cssPath: string | false | [string | false, {
        injectPosition: InjectPosition;
    }];
    /**
     * Configuration for Tailwind CSS
     *
     * for default, see https://tailwindcss.nuxtjs.org/tailwind/config
     */
    config: InlineTWConfig;
    /**
     * [tailwind-config-viewer](https://github.com/rogden/tailwind-config-viewer) usage *in development*
     *
     * @default true // { endpoint: '_tailwind' }
     */
    viewer: BoolObj<ViewerConfig>;
    /**
     * Usage of configuration references in runtime. See https://tailwindcss.nuxtjs.org/tailwind/config#referencing-in-the-application
     *
     * @default false // if true, { alias: '#tailwind-config', level: 2 }
     */
    exposeConfig: BoolObj<ExposeConfig>;
    /**
     * Deeper references within configuration for optimal tree-shaking.
     *
     * @default 2
     * @deprecated use exposeConfig as object
     */
    exposeLevel?: number;
    /**
     * The position of CSS injection affecting CSS priority
     *
     * @default 'first'
     * @deprecated use cssPath as [string | false, { injectPosition: InjectPosition }]
     */
    injectPosition?: InjectPosition;
    /**
     * Suppress logging to the console when everything is ok
     *
     * @default nuxt.options.logLevel === 'silent'
     */
    quiet: boolean;
    /**
     * Add util to write Tailwind CSS classes inside strings with `` tw`{classes}` ``
     *
     * @default false
     * @deprecated use `editorSupport.autocompleteUtil` as object
     */
    addTwUtil?: boolean;
    /**
     * Enable some utilities for better editor support and DX.
     *
     * Read https://tailwindcss.nuxtjs.org/tailwind/editor-support.
     *
     * @default false // if true, { autocompleteUtil: true }
     */
    editorSupport: BoolObj<EditorSupportConfig>;
    /**
     * This option falls back to the Tailwind configuration inlined to the PostCSS
     * loader, so any configuration changes while the dev server is running will
     * not reflect. This is similar to the functionality prior to v6.12.0.
     *
     * Note: this is only provided for temporary broken builds that may require
     * migration. Usage is discouraged. If any issues occur without this, please open
     * an issue on https://github.com/nuxt-modules/tailwindcss/issues.
     */
    disableHMR?: boolean;
}
interface ModuleHooks {
    /**
     * Passes any Tailwind configuration read by the module for each (extended) [layer](https://nuxt.com/docs/getting-started/layers) and [path](https://tailwindcss.nuxtjs.org/getting-started/options#configpath) before merging all of them.
     *
     * @param tailwindConfig
     * @returns
     */
    'tailwindcss:config': (tailwindConfig: Partial<TWConfig>) => void;
    /**
     * Passes the resolved vanilla configuration read from all layers and paths with merging using [defu](https://github.com/unjs/defu).
     *
     * @param tailwindConfig
     * @param configPath
     * @param index
     * @param configPaths
     * @returns
     */
    'tailwindcss:loadConfig': (tailwindConfig: Partial<TWConfig> | undefined, configPath: string, index: number, configPaths: string[]) => void;
    /**
     * Passes the complete resolved configuration with all defaults from [the full Tailwind config](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js) using resolveConfig.
     *
     * @param tailwindConfig
     * @returns
     */
    'tailwindcss:resolvedConfig': (tailwindConfig: ReturnType<typeof tailwindcss_resolveConfig>, oldTailwindConfig: TWConfig | undefined) => void;
}

declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

declare module 'nuxt/schema' {
    interface NuxtHooks extends ModuleHooks {
        'tailwindcss:internal:regenerateTemplates': (data?: {
            configTemplateUpdated?: boolean;
        }) => void | Promise<void>;
    }
}
declare module '@nuxt/schema' {
    interface NuxtHooks extends ModuleHooks {
        'tailwindcss:internal:regenerateTemplates': (data?: {
            configTemplateUpdated?: boolean;
        }) => void | Promise<void>;
    }
}

export { type ModuleHooks, type ModuleOptions, _default as default };
