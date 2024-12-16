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
        <span class="text-gray-700 font-medium">{{ item.name }} - {{ item.price }}</span>
        <div class="flex space-x-2">
          <button class="button-secondary" @click="editMenuItem(index)">Edit</button>
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

  <!-- Add New Menu Item -->
  <div class="card mt-6">
    <h2 class="card-title">Add New Item</h2>
    <form @submit.prevent="addMenuItem">
      <div class="mb-4">
        <label for="item-name" class="block text-gray-600">Item Name</label>
        <input
          type="text"
          v-model="newItemName"
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
          v-model="newItemPrice"
          id="item-price"
          class="input-field"
          placeholder="Enter price"
          min="0"
          required
        />
      </div>
      <button type="submit" class="button">Add Item</button>
    </form>
  </div>
</div>
<style scoped>
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

/* Card List Item */
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
</style>
