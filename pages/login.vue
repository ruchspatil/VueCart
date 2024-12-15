<template>
  <div class="login-container">
    <h1>Login</h1>
    <form class="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username" />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />
      </div>

      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style scoped>
/* Container Styling */
.login-container {
  max-width: 600px;
  margin: 100px auto;
  padding: 30px;
  text-align: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Heading Styling */
.login-container h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
  font-weight: bold;
}

/* Form Styling */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Input Field Styling */
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
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

/* Button Styling */
.login-button {
  padding: 12px 20px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #45a049;
}

/* Responsive Design */
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
