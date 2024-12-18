<template>
  <div class="dashboard-container min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-100 via-white to-blue-50">
    <h1 class="text-4xl font-bold mb-10 text-primary mt-8">Welcome to Your Dashboard</h1>

    <!-- Flex-based Card Section -->
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

      <!-- Recent Orders Card -->
      <div class="card mt-6">
        <h2 class="card-title">Recent Orders</h2>
        <div class="mb-4">
          <label for="order-filter-date" class="block text-gray-600">Filter by Date</label>
          <input
            type="date"
            v-model="filterDate"
            id="order-filter-date"
            class="input-field"
          />
        </div>
        <ul>
          <li
            v-for="(order, index) in filteredOrders"
            :key="index"
            class="flex justify-between items-center py-2 border-b border-gray-200 last:border-none"
          >
            <div class="text-gray-700 font-medium">
              <span>{{ order.itemName }} - ${{ order.price }}</span>
            </div>
            <div class="flex items-center">
              <span :class="order.statusClass">{{ order.status }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterDate: '',
      orders: [
        { itemName: 'Pizza', price: 15.00, date: '2024-12-15', status: 'Completed' },
        { itemName: 'Burger', price: 10.00, date: '2024-12-17', status: 'Pending' },
        { itemName: 'Pasta', price: 12.00, date: '2024-12-18', status: 'Completed' },
      ],
    };
  },
  computed: {
    filteredOrders() {
      // If no filter date is set, return all orders
      if (!this.filterDate) {
        return this.orders;
      }
      // Filter orders based on the selected date
      return this.orders.filter(order => order.date === this.filterDate);
    }
  },
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

/* Flex-Based Card Container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
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
  color: #374151;
}

.card-value {
  font-size: 28px;
  font-weight: bold;
  margin-top: 12px;
  color: #1e3a8a;
}

/* Order Item Styling */
.card ul {
  list-style: none;
  padding: 0;
}

.card ul li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e5e7eb;
}

.card ul li:last-child {
  border-bottom: none;
}

.card .status-completed {
  color: #4caf50; /* Green for completed orders */
}

.card .status-pending {
  color: #ff9800; /* Orange for pending orders */
}

/* Input Styling */
.input-field {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  color: #374151;
}

/* Button Styling */
.button {
  margin-top: 16px;
  background-color: #1e3a8a;
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
  background-color: #3b82f6;
  transform: scale(1.05);
}

/* Responsive Styling */
@media (max-width: 640px) {
  .card-container {
    flex-direction: column;
    gap: 16px;
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
