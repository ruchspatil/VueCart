<template>
  <div id="app">
    <router-view />
    <header class="header">
      <nav class="navbar">
        <h2 class="logo">
          <router-link to="#">MyShop</router-link>
        </h2>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="hamburger-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M3 12h18M3 6h18M3 18h18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </label>
        <ul class="links">
          <li><router-link to="#">Home</router-link></li>
          <li><router-link to="#">About Us</router-link></li>
          <li><router-link to="#">Services</router-link></li>
          <li><router-link to="#">Contact Us</router-link></li>
        </ul>
        <div class="buttons">
          <router-link to="#" class="signup">Login</router-link>
        </div>
      </nav>
    </header>
    <section class="hero-section">
      <div class="hero">
        <h2>Store Management</h2>
        <p>
          MyShop is an intuitive online store management system that allows store owners to manage their inventory, track orders, and provide a smooth shopping experience for customers.
        </p>
        <div class="buttons">
          <router-link to="#" class="join">Join Now</router-link>
          <router-link to="#" class="learn">Learn More</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ResponsiveHomePage",
};
</script>

<style>
/* Importing Google font - Open Sans */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

/* Reset styles and ensure consistent layout */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure html and body span the full height */
  width: 100%; /* Ensure html and body span the full width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  background-color: #B1D4E0; /* Apply the desired background color */
  font-family: "Open Sans", sans-serif;
}

#app {
  min-height: 100vh; /* Ensure the root element spans the full height */
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
}
.navbar .logo a {
  font-size: 1.8rem;
  text-decoration: none;
  color: #0C2D48;
}
.navbar .links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 35px;
}
.navbar .links a {
  font-weight: 500;
  text-decoration: none;
  color: #0C2D48;
  padding: 10px 0;
  transition: 0.2s ease;
}
.navbar .links a:hover {
  color: #47b2e4;
}
.navbar .buttons a {
  text-decoration: none;
  color: #0C2D48;
  font-size: 1rem;
  padding: 15px 0;
  transition: 0.2s ease;
}
.navbar .buttons a:not(:last-child) {
  margin-right: 30px;
}
.navbar .buttons .signup {
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 0.375rem;
  text-align: center;
  transition: 0.2s ease;
}
.navbar .buttons .signup:hover {
  color: #0C2D48;
}

/* Hero Section Styles */
.hero-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh; /* Ensure it spans the full viewport height */
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
}
.hero-section .hero {
  max-width: 50%;
  color: #145DA0;
  text-align: center; /* Center the text */
}
.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #c9c7c7;
}
.hero-section .buttons {
  margin-top: 40px;
}
.hero-section .buttons a {
  text-decoration: none;
  color: #fff;
  padding: 12px 24px;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: 0.2s ease;
  display: inline-block;
}
.hero-section .buttons a:not(:last-child) {
  margin-right: 15px;
}
.buttons .join {
  background-color: #2E8BC0;
}
.hero-section .buttons .learn {
  border: 1px solid #2E8BC0;
  border-radius: 0.375rem;
}
.hero-section .buttons a:hover {
  background-color: #fff;
  color: #0C2D48;
}

/* Hamburger menu styles */
#menu-toggle {
  display: none;
}
#hamburger-btn {
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 1023px) {
  .navbar .logo a {
    font-size: 1.5rem;
  }
  .links {
    position: fixed;
    left: -100%;
    top: 75px;
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    background: #175d69;
    flex-direction: column;
    transition: 0.3s ease;
  }
  .navbar #menu-toggle:checked ~ .links {
    left: 0;
  }
  .navbar #hamburger-btn {
    display: block;
  }
  .header .buttons {
    display: none;
  }
  .hero-section .hero {
    max-width: 100%;
    text-align: center;
  }
  .hero-section img {
    display: none;
  }
}
</style>
