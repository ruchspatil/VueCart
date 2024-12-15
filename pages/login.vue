<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Username</label>
          <input type="text" id="username" v-model="username" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-600">Password</label>
          <input type="password" id="password" v-model="password" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
        </div>
        <div class="flex justify-between items-center mb-4">
          <a href="#" class="text-primary">Forgot password?</a>
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // handle login logic
      alert(`Logged in as ${this.username}`);
    }
  }
};
</script>
