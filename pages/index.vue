<template>
  <div class="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
    <header class="text-center mb-12">
      <h1 class="text-5xl font-bold text-primary">Welcome to MyShop</h1>
      <p class="text-lg mt-4 text-gray-600">Your one-stop shop for the best products!</p>
      <button class="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700" @click="goToLogin">Login</button>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.bg-primary {
  background-color: #1DA1F2;
}
</style>
