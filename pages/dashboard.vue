<template>
  <div class="dashboard-container min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-white to-blue-50">

    <!-- Navbar -->
    <nav class="navbar w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <!-- Brand Name -->
      <div class="text-2xl font-bold text-blue-600">MyShop</div>

      <!-- Right Section: User Image and Notification -->
      <div class="flex items-center space-x-6">
        <!-- Notification Button -->
        <button class="relative p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11.5a6.5 6.5 0 10-13 0v2.658c0 .538-.214 1.055-.595 1.437L3 17h5m7 0a3 3 0 01-6 0m6 0H9" />
          </svg>
        </button>

        <!-- User Image -->
        <img src="https://via.placeholder.com/40" alt="User" class="w-10 h-10 rounded-full border-2 border-blue-600" />
      </div>
    </nav>

    <!-- Flex-based Card Section -->
    <div class="card-container w-11/12 max-w-screen-xl mt-8 mx-auto">
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
/* Navbar Styling */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
}

/* Main Container */
.dashboard-container {
  background: linear-gradient(to right, #e3f2fd, #fefefe, #f1f8ff);
  min-height: 100vh;
}

/* Flex-Based Card Container */
.card-container {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next row */
  justify-content: space-between; /* Distributes cards with space in between */
  gap: 20px; /* Small gap between cards */
  width: 100%;
  margin: 0 auto; /* Center container */
}

/* Card Styling */
.card {
  flex: 1 1 calc(24% - 20px);
  max-width: 500px;
  background: #ffffff;
  padding: 24px;
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
    flex-direction: column; /* Stacks cards in a column for smaller screens */
    gap: 16px; /* Adjust the gap */
  }

  .card {
    flex: 1 1 100%;
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
