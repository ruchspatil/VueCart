<template>
  <div>
    <!-- Main Layout -->
    <header class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-bold">MyShop</h1>
    </header>

    <main>
      <div class="container mx-auto p-4">
        <nuxt />
      </div>
    </main>

    <footer class="bg-gray-800 text-white text-center py-4">
      <p>&copy; 2024 MyShop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Arial', sans-serif;
  background-color: #f8fafc;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
