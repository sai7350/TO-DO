<script >
// import navbar from "components/navbar.vue"


export default {
    data() {
        return {
            show: false

        }
    },
    methods: {
        check() {
            this.show = !this.show

        }
    }
}



</script>
<template>
    <div>
        <custom />
        <div class="flex justify-center mt-40 space-x-9 border-red-100 ">
            <!-- <button @click="check" class="btn btn-accent ml-20">Click me</button> -->
            <NuxtLink to="/viewtask"><button class="btn btn-accent ">View task</button></NuxtLink>
            <NuxtLink to="/addtask"><button class="btn btn-accent ">Add task</button></NuxtLink>

        </div>
        <div v-if="show">

        </div>


    </div>
</template>

<style scoped></style>