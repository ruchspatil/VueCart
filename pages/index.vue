<template>
  <div class="main-container">
    <header class="header">
      <nav class="navbar">
        <h1 class="header-title">MyShop</h1>
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#features" class="nav-link">Features</a></li>
          <li><button class="login-button" @click="navigateToLogin">Login</button></li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <div class="container">
        <section class="hero">
          <div class="hero-text">
            <h2 class="hero-title">Welcome to MyShop</h2>
            <p class="hero-description">Your one-stop solution for online store management.</p>
          </div>
        </section>

        <section id="about" class="about">
          <h2 class="section-title">About MyShop</h2>
          <p class="description">
            MyShop is an intuitive online store management system that allows store owners to manage their inventory, track orders, and provide a smooth shopping experience for customers.
          </p>
        </section>

        <section id="features" class="features">
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
  --primary-color: #1d3557; /* Dark Blue */
  --primary-color-light: #457b9d; /* Medium Blue */
  --accent-color: #e63946; /* Red */
  --background-color: #f1faee; /* Light Background */
  --text-color: #343a40; /* Dark Gray */
  --white: #ffffff;
  --header-bg: #1d3557;
  --footer-bg: #1d3557;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: var(--header-bg);
  padding: 20px 40px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

.login-button {
  background-color: var(--accent-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #d62828;
}

.content {
  flex: 1;
  padding: 60px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  background: linear-gradient(135deg, var(--primary-color-light), var(--primary-color));
  color: var(--white);
  text-align: center;
  padding: 80px 20px;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 18px;
  line-height: 1.6;
}

.section-title {
  font-size: 28px;
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
  margin-top: auto;
}
</style>
