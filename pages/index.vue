<template>
  <div class="bg-gray-100">
    <header class="bg-primary text-white p-6 text-center">
      <h1 class="text-4xl font-bold">Welcome to MyShop</h1>
      <p class="mt-2">Find the best products at the best prices!</p>
      <div class="mt-4">
        <button class="bg-secondary text-white py-2 px-6 rounded-lg">Sign Up</button>
        <button class="ml-4 bg-white text-primary py-2 px-6 rounded-lg border">Browse Products</button>
      </div>
    </header>

    <!-- Product Section -->
    <div class="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img src="https://via.placeholder.com/500" class="w-full h-56 object-cover rounded-md mb-4" />
        <h2 class="text-xl font-semibold">Product 1</h2>
        <p class="text-gray-600 mt-2">Great product description.</p>
        <p class="mt-4 font-bold">$25.00</p>
        <button class="mt-4 w-full bg-primary text-white py-2 rounded-lg">Buy Now</button>
      </div>
      <!-- Add more product cards here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
};
</script>
