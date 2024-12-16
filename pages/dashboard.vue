<template>
  <div class="dashboard-container min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-blue-50">
    <h1 class="text-4xl font-bold mb-10 text-primary mt-8">Welcome to Your Dashboard</h1>

    <!-- Card Section with Left and Right Alignment -->
    <div class="card-container w-11/12 max-w-screen-xl">
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
      this.$router.push('/MenuManagement');
    }
  }
};
</script>

<style scoped>
/* Main Container */
.dashboard-container {
  background: linear-gradient(to right, #e3f2fd, #fefefe, #f1f8ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

/* Card Container */
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  width: 100%;
  margin: 0 auto; 
}

/* Align cards within columns */
.card-container > :nth-child(-n+3) {
  justify-self: start; 
}

.card-container > :nth-child(n+4) {
  justify-self: end;
}

/* Card Styling */
.card {
  background: #ffffff;
  padding: 44px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #374151; /* Dark gray */
}

.card-value {
  font-size: 28px;
  font-weight: bold;
  margin-top: 12px;
  color: #1e3a8a; /* Deep blue */
}

/* Button Styling */
.button {
  margin-top: 16px;
  background-color: #1e3a8a; /* Primary color */
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #3b82f6; /* Lighter blue */
  transform: scale(1.05);
}

/* Responsive Styling */
@media (max-width: 640px) {
  .card-container {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }

  .card {
    padding: 16px;
  }

  .card-title {
    font-size: 18px;
  }

  .card-value {
    font-size: 22px;
  }

  .button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
