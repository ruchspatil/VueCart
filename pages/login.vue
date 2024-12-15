<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Username</label>
          <input type="text" v-model="username" id="username" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input type="password" v-model="password" id="password" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" />
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700">Log In</button>
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
      // Dummy login
      if (this.username === 'admin' && this.password === 'password') {
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials!');
      }
    }
  }
};
</script>
