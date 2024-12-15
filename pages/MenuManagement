<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Menu Management</h1>

      <!-- Menu List -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 class="text-xl font-semibold">Current Menu</h2>
        <div class="mt-4">
          <ul>
            <li class="flex justify-between items-center py-2">
              <span>Pizza</span>
              <button class="text-primary">Edit</button>
            </li>
            <li class="flex justify-between items-center py-2">
              <span>Burger</span>
              <button class="text-primary">Edit</button>
            </li>
            <li class="flex justify-between items-center py-2">
              <span>Pasta</span>
              <button class="text-primary">Edit</button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Add New Menu Item -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Add New Item</h2>
        <form @submit.prevent="addMenuItem">
          <div class="mb-4">
            <label for="item-name" class="block text-gray-600">Item Name</label>
            <input type="text" id="item-name" v-model="newItemName" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
          </div>
          <div class="mb-4">
            <label for="item-price" class="block text-gray-600">Price</label>
            <input type="number" id="item-price" v-model="newItemPrice" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
          </div>
          <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg">Add Item</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItemName: '',
      newItemPrice: ''
    };
  },
  methods: {
    addMenuItem() {
      console.log(`Added ${this.newItemName} - $${this.newItemPrice}`);
      // Logic to add the item
    }
  }
};
</script>
