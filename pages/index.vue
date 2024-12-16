<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <h2 class="logo">
          <router-link to="#">CodingNepal</router-link>
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
          <li><router-link to="#">Portfolio</router-link></li>
          <li><router-link to="#">Contact Us</router-link></li>
        </ul>
        <div class="buttons">
          <router-link to="#" class="signin">Sign In</router-link>
          <router-link to="#" class="signup">Sign Up</router-link>
        </div>
      </nav>
    </header>
    <section class="hero-section">
      <div class="hero">
        <h2>Mobile App Development</h2>
        <p>
          Join us in the exciting world of programming and turn your ideas into
          reality. Unlock the world of endless possibilities - learn to code and
          shape the digital future with us.
        </p>
        <div class="buttons">
          <router-link to="#" class="join">Join Now</router-link>
          <router-link to="#" class="learn">Learn More</router-link>
        </div>
      </div>
      <div class="img">
       
         <img :src="require('@/assets/store.jpg')" alt="Image" />


      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ResponsiveHomePage",
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.logo a {
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

#menu-toggle {
  display: none;
}

#hamburger-btn {
  display: none;
  cursor: pointer;
}

.links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover {
  color: #007bff;
}

.buttons a {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.signin {
  color: #fff;
  background-color: #6c757d;
  margin-right: 10px;
}

.signin:hover {
  background-color: #5a6268;
}

.signup {
  color: #fff;
  background-color: #007bff;
}

.signup:hover {
  background-color: #0056b3;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.hero {
  max-width: 600px;
}

.hero h2 {
  font-size: 36px;
  margin-bottom: 15px;
  color: #333;
}

.hero p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.hero .buttons a {
  margin-right: 10px;
}

.hero .join {
  background-color: #007bff;
  color: #fff;
}

.hero .join:hover {
  background-color: #0056b3;
}

.hero .learn {
  background-color: #6c757d;
  color: #fff;
}

.hero .learn:hover {
  background-color: #5a6268;
}

.img img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
