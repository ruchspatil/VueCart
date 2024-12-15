<template>
  <div class="login-container">
    <h1>Login</h1>
    <form>
      <label for="username">Username</label>
      <input id="username" type="text" placeholder="Enter username" />

      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
}
</style>
