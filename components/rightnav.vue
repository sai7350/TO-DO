<template>
    <div :class="drawerOpen ? 'translate-x-0' : 'translate-x-full'" class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300">
      <!-- Drawer content here -->
      <div class="p-4">
        <!-- Your drawer content goes here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawerOpen: false,
      };
    },
  };
  </script>
  