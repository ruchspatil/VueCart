<template>
  <div class="login-container">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div class="form-group remember-me">
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <router-link to="/forgot-password" class="forgot-password"
          >Forgot Password?</router-link
        >
      </div>

      <button type="submit" class="login-button">Login</button>

      <div class="social-login">
        <button type="button" class="google-button">Continue with Google</button>
        <button type="button" class="apple-button">Continue with Apple</button>
      </div>
    </form>

    <div class="signup-link">
      Don't have an account? <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      validUsername: "user123", // Predefined username
      validPassword: "pass123", // Predefined password
    };
  },
  methods: {
    handleLogin() {
      if (this.username === this.validUsername && this.password === this.validPassword) {
        // Redirect to the Dashboard
        this.$router.push("/dashboard");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
  
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


.login-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
  font-weight: bold;
}


.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555555;
}

.form-group input {
  width: 90%;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #291e5c;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}


.remember-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555555;
}

.forgot-password {
  text-decoration: none;
  color: #2755ab;
  font-size: 14px;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #2053b3;
}


.login-button {
  padding: 12px 20px;
  font-size: 16px;
  color: white;
  background-color: #2755ab;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #2053b3;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.google-button,
.apple-button {
  padding: 10px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.google-button {
  background-color: #db4437; /* Google Red */
}

.google-button:hover {
  background-color: #c33c30;
}

.apple-button {
  background-color: #000; /* Apple Black */
}

.apple-button:hover {
  background-color: #333;
}

/* Sign Up Link */
.signup-link {
  margin-top: 20px;
  font-size: 14px;
}

.signup-link a {
  text-decoration: none;
  color: #2755ab;
  font-weight: bold;
}

.signup-link a:hover {
  color: #2053b3;
}


@media (max-width: 500px) {
  .login-container {
    margin: 50px 20px;
    padding: 15px;
  }

  .login-button {
    font-size: 14px;
    padding: 10px 15px;
  }
}
</style>
