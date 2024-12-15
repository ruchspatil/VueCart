<template>
  <div class="bg-gray-100 min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Sales Overview</h2>
        <p class="text-2xl font-bold mt-4">$1,200</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Popular Item</h2>
        <p class="text-2xl font-bold mt-4">Pizza</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Customer Feedback</h2>
        <p class="text-2xl font-bold mt-4">4.5/5</p>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Manage Menu</h2>
        <button @click="goToMenu" class="mt-4 bg-primary text-white w-full py-2 rounded-lg hover:bg-blue-700">Go to Menu</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Edit Shop Details</h2>
        <button class="mt-4 bg-primary text-white w-full py-2 rounded-lg hover:bg-blue-700">Edit Details</button>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">View Orders</h2>
        <button class="mt-4 bg-primary text-white w-full py-2 rounded-lg hover:bg-blue-700">View Orders</button>
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
