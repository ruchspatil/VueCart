<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Total Sales</h2>
          <p class="text-2xl font-bold mt-4">$1,200</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Orders</h2>
          <p class="text-2xl font-bold mt-4">150</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Products</h2>
          <p class="text-2xl font-bold mt-4">50</p>
        </div>
      </div>

      <!-- Quick Access Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Manage Products</h2>
          <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">Go to Products</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Orders</h2>
          <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">View Orders</button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-semibold">Settings</h2>
          <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">Account Settings</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage'
};
</script>
