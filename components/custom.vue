<script >
// import navbar from "components/navbar.vue"


export default {
    data() {
        return {

        }
    }
}



</script>
<template>
    <div>

        <div>
            <!-- <div class="flex ml-60 ">
                <div class="mt-5 text-center items-center ml-60">
                    <NuxtLink to="/" class="btn glass">Home</NuxtLink>
                   
                    <NuxtLink to="/admin-login" class="ml-14 btn glass ">Admin</NuxtLink>
                    <NuxtLink to="/login" class="ml-14 btn glass">Employee</NuxtLink>
                    <NuxtLink to="#" class="ml-14 btn glass">About us</NuxtLink>
                    <NuxtLink to="#" class="ml-14 btn glass">Contact us</NuxtLink>
                </div>


            </div> -->


            <div class="navbar bg-slate-100">
                <div class="flex-1">
                    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">TO-DO</NuxtLink>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal px-1">

                        <NuxtLink to="/" class="btn glass">Home</NuxtLink>


                        <NuxtLink to="/admin-login" class=" btn glass ">Admin</NuxtLink>
                        <NuxtLink to="/login" class=" btn glass">Employee</NuxtLink>


                    </ul>
                </div>
            </div>
            <div class="flex">

                <slot />
            </div>

        </div>


    </div>
</template>

<style scoped></style>