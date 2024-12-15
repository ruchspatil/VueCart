<template>
  <div class="main-container">
    <header class="header">
      <h1 class="header-title">MyShop</h1>
      <button class="login-button" @click="navigateToLogin">Login</button>
    </header>

    <main class="content">
      <div class="container">
        <section class="about">
          <h2 class="section-title">About MyShop</h2>
          <p class="description">
            MyShop is an intuitive online store management system that allows store owners to manage their inventory, track orders, and provide a smooth shopping experience for customers.
          </p>
        </section>

        <section class="features">
          <h2 class="section-title">Features</h2>
          <ul class="feature-list">
            <li>Easy inventory management</li>
            <li>Order tracking and notifications</li>
            <li>Customer support tools</li>
            <li>Customizable store layout</li>
          </ul>
        </section>
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
  methods: {
    navigateToLogin() {
      this.$router.push('pages/login'); // Redirects to the login page
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.main-container {
  font-family: 'Poppins', sans-serif;
}

.header {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 24px;
  font-weight: bold;
}

.login-button {
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #e68900;
}

.content {
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about {
  margin-bottom: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  line-height: 1.6;
}

.features {
  margin-bottom: 20px;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
}

.feature-list li {
  margin-bottom: 5px;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
