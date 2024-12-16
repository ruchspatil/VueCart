<template>
  <div class="dashboard-container min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Menu Management</h1>

    <!-- Menu List -->
    <div class="card">
      <h2 class="card-title">Current Menu</h2>
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex justify-between items-center py-2 border-b border-gray-200 last:border-none"
        >
          <span class="text-gray-700 font-medium">
            {{ item.name }} - {{ item.price }}
          </span>
          <div class="flex space-x-3">
            <button
              class="button-secondary"
              @click="startEditingItem(index)"
            >
              Edit
            </button>
            <button
              class="button-danger"
              @click="deleteMenuItem(index)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Add / Edit Menu Item -->
    <div class="card mt-6">
      <h2 class="card-title">{{ isEditing ? 'Edit Item' : 'Add New Item' }}</h2>
      <form @submit.prevent="isEditing ? updateMenuItem() : addMenuItem()">
        <div class="mb-4">
          <label for="item-name" class="block text-gray-600">Item Name</label>
          <input
            type="text"
            v-model="currentItem.name"
            id="item-name"
            class="input-field"
            placeholder="Enter item name"
            required
          />
        </div>
        <div class="mb-4">
          <label for="item-price" class="block text-gray-600">Price</label>
          <input
            type="number"
            v-model="currentItem.price"
            id="item-price"
            class="input-field"
            placeholder="Enter price"
            min="0"
            required
          />
        </div>
        <button type="submit" class="button">
          {{ isEditing ? 'Update Item' : 'Add Item' }}
        </button>
        <button
          v-if="isEditing"
          type="button"
          class="button-secondary ml-4"
          @click="cancelEditing"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: { name: '', price: '' },
      isEditing: false,
      editingIndex: null,
      menuItems: [
        { name: 'Pizza', price: '15.00' },
        { name: 'Burger', price: '10.00' },
      ],
    };
  },
  methods: {
    addMenuItem() {
      if (this.currentItem.name && this.currentItem.price) {
        this.menuItems.push({
          name: this.currentItem.name,
          price: parseFloat(this.currentItem.price).toFixed(2),
        });
        this.resetForm();
      }
    },
    deleteMenuItem(index) {
      this.menuItems.splice(index, 1);
    },
    startEditingItem(index) {
      this.isEditing = true;
      this.editingIndex = index;
      this.currentItem = { ...this.menuItems[index] }; // Clone the item for editing
    },
    updateMenuItem() {
      if (this.currentItem.name && this.currentItem.price) {
        this.menuItems.splice(this.editingIndex, 1, {
          name: this.currentItem.name,
          price: parseFloat(this.currentItem.price).toFixed(2),
        });
        this.resetForm();
      }
    },
    cancelEditing() {
      this.resetForm();
    },
    resetForm() {
      this.isEditing = false;
      this.editingIndex = null;
      this.currentItem = { name: '', price: '' };
    },
  },
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
  width: 75%; /* Maintain consistent width */
  max-width: 800px;
  margin-bottom: 20px; /* Add bottom gap between cards */
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

/* Buttons */
.button-secondary {
  background-color: #f3f4f6; /* Light Gray */
  color: #1e3a8a; /* Primary Blue */
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #1e3a8a;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button-secondary:hover {
  background-color: #1e3a8a;
  color: white;
}

.button-danger {
  background-color: #fef2f2; /* Light Red */
  color: #dc2626; /* Danger Red */
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #dc2626;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button-danger:hover {
  background-color: #dc2626;
  color: white;
}

/* General List Styling */
ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e5e7eb;
}

ul li:last-child {
  border-bottom: none;
}

/* General Button */
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
