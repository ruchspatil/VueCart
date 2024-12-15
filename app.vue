<template>
  <div class="main-container">
    <header class="header">
      <h1 class="header-title">MyShop</h1>
    </header>

    <main class="content">
      <div class="container">
        <nuxt />
      </div>
    </main>

    <footer class="footer">
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
.main-container {
  font-family: Arial, sans-serif;
}

.header {
  background-color: #333;
  color: white;
  padding: 20px;
}

.header-title {
  font-size: 24px;
  font-weight: bold;
}

.content {
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
