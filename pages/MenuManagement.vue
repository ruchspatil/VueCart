
  <template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Menu Management</h1>

    <!-- Menu List -->
    <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 class="text-xl font-semibold">Current Menu</h2>
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
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold">Add New Item</h2>
      <form @submit.prevent="addMenuItem">
        <div class="mb-4">
          <label for="item-name" class="block text-gray-600">Item Name</label>
          <input type="text" v-model="newItemName" id="item-name" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
        </div>
        <div class="mb-4">
          <label for="item-price" class="block text-gray-600">Price</label>
          <input type="number" v-model="newItemPrice" id="item-price" class="w-full p-2 mt-1 border border-gray-300 rounded-lg" required />
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700">Add Item</button>
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
      this.menuItems.push({ name: this.newItemName, price: this.newItemPrice });
      this.newItemName = '';
      this.newItemPrice = '';
    }
  }
};
</script>
