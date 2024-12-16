<template>
  <div class="dashboard-container min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Menu Management</h1>

    <!-- Menu List -->
    <div class="card w-3/4">
      <h2 class="card-title">Current Menu</h2>
      <ul>
        <li class="flex justify-between items-center py-2">
          <span>Pizza - $15.00</span>
          <button class="text-primary">Edit</button>
          <button class="text-red-500">Delete</button>
        </li>
        <li class="flex justify-between items-center py-2">
          <span>Burger - $10.00</span>
          <button class="text-primary">Edit</button>
          <button class="text-red-500">Delete</button>
        </li>
        <!-- Add more items -->
      </ul>
    </div>

    <!-- Add New Menu Item -->
    <div class="card w-3/4 mt-6">
      <h2 class="card-title">Add New Item</h2>
      <form @submit.prevent="addMenuItem">
        <div class="mb-4">
          <label for="item-name" class="block text-gray-600">Item Name</label>
          <input type="text" v-model="newItemName" id="item-name" class="input-field" required />
        </div>
        <div class="mb-4">
          <label for="item-price" class="block text-gray-600">Price</label>
          <input type="number" v-model="newItemPrice" id="item-price" class="input-field" required />
        </div>
        <button type="submit" class="button">Add Item</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItemName: '',
      newItemPrice: '',
      menuItems: [
        { name: 'Pizza', price: '$15.00' },
        { name: 'Burger', price: '$10.00' }
      ]
    };
  },
  methods: {
    addMenuItem() {
      this.menuItems.push({ name: this.newItemName, price: `$${this.newItemPrice}` });
      this.newItemName = '';
      this.newItemPrice = '';
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

/* Card Styling */
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 75%; /* Increase card width */
  max-width: 800px; /* Optional: Add max-width for larger screens */
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
  .card {
    padding: 16px;
    width: 100%; /* Full width for smaller screens */
  }

  .card-title {
    font-size: 18px;
  }

  .button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
