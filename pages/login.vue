/* Container Styling */
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
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

/* Button Styling */
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
