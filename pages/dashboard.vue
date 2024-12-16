<template>
  <div class="dashboard-container min-h-screen p-6 bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-primary">Welcome to Your Dashboard</h1>

    <!-- Overview Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card">
        <h2 class="card-title">Sales Overview</h2>
        <p class="card-value">$1,200</p>
      </div>
      <div class="card">
        <h2 class="card-title">Popular Item</h2>
        <p class="card-value">Pizza</p>
      </div>
      <div class="card">
        <h2 class="card-title">Customer Feedback</h2>
        <p class="card-value">4.5/5</p>
      </div>
    </div>

    <!-- Management Section -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="card">
        <h2 class="card-title">Manage Menu</h2>
        <button @click="goToMenu" class="button">Go to Menu</button>
      </div>
      <div class="card">
        <h2 class="card-title">Edit Shop Details</h2>
        <button class="button">Edit Details</button>
      </div>
      <div class="card">
        <h2 class="card-title">View Orders</h2>
        <button class="button">View Orders</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push('/menu-management');
    }
  }
};
</script>

<style scoped>
/* Main Container */
.dashboard-container {
  background-color: #f7f7f7;
  padding: 24px;
  min-height: 100vh;
}

/* Card Styling */
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #555555;
}

.card-value {
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  color: #333333;
}

/* Button Styling */
.button {
  margin-top: 16px;
  background-color: #2755ab; /* Primary color */
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2053b3;
}

/* Responsive Styling */
@media (max-width: 640px) {
  .dashboard-container {
    padding: 16px;
  }

  .card {
    padding: 16px;
  }

  .card-value {
    font-size: 20px;
  }

  .button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
