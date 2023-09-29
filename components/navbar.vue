<script setup lang="ts">

</script>

<template>
    <div>
        <div class="flex">
        <div class=" w-24 h-screen shadow-lg bg-emerald-400">
            <div class="">
                <NuxtLink to="/" class="text-emerald-400">Home</NuxtLink>

            </div>
           <div class="mt-10  hover:text-red-500">
           <NuxtLink   to="/" class="ml-4 ">Home</NuxtLink>
           <hr>
        </div>
        
         
           <div class="mt-7 ml-4  hover:text-red-500">
            <NuxtLink   to="/admin-login" class=" mt-20">Admin</NuxtLink>
            

           </div>
           <hr>
           <div class="mt-7 ml-4  hover:text-red-500">
            <NuxtLink   to="/login" class=" mt-20">Employee</NuxtLink>

           </div>
           <hr>
           <div class="mt-7 ml-4">
            <NuxtLink   to="#" class=" mt-20">About us</NuxtLink>

           </div>
<hr>
           <div class="mt-7 ml-4  hover:text-red-500">
            <NuxtLink   to="#" class=" mt-20">Contact us</NuxtLink>
</div>
<slot />
          
        </div>
      
        </div>
        
    </div>
</template>

<style scoped>

</style>