<template>
  <div class="main-container">
    <header class="header">
      <h1 class="header-title">MyShop</h1>
      <button class="login-button" @click="navigateToLogin">Login</button>
    </header>

    <main class="content">
      <div class="container">
        <section class="hero">
          <div class="hero-text">
            <h2 class="hero-title">Welcome to MyShop</h2>
            <p class="hero-description">Your one-stop solution for online store management.</p>
          </div>
        </section>

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
      this.$router.push('/login'); // Redirects to the login page
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:root {
  --primary-color: #ff9800;
  --primary-color-hover: #e68900;
  --text-color: #333;
  --background-color: #f9f9f9;
  --header-bg: #333;
  --footer-bg: #333;
  --white: #ffffff;
}

.main-container {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: var(--header-bg);
  color: var(--white);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 28px;
  font-weight: bold;
}

.login-button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: var(--primary-color-hover);
}

.content {
  flex: 1;
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-hover));
  color: var(--white);
  text-align: center;
  padding: 60px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.description {
  font-size: 16px;
  line-height: 1.8;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
}

.feature-list li {
  margin-bottom: 10px;
}

.footer {
  background-color: var(--footer-bg);
  color: var(--white);
  text-align: center;
  padding: 20px;
}
</style>
