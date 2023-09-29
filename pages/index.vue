<script >
import axios from 'axios';


export default {


    data() {
        return {
            userdata: {
                name: '',
                userpassword: ''
            }

        }
    },
    methods: {

        check() {
            console.log(this.userdata);
            // const ress = $fetch('/api/logindata', {
            //     method:'POST',

            //     body: this.userdata
            // });
            const res = $fetch('/api/loginpost', {
                method: 'POST',
                body: this.userdata

            }).then((response) => {
                alert("Login Success")
                // console.log(response);
                window.location.href = '/employee-display'
            }).catch((err) => {
                console.log(err);
                alert("username not exist");
                this.userdata.name = "",
                    this.userdata.userpassword = ""


            })

        },



    }

}


</script>

<template>
    <div class="bg-slate-100 h-screen">
        <custom />

        <div class="flex flex-col items-center">
            <!-- <p>{{ userdata }}</p> -->
            <div class="flex w-full h-12 mt-10">
                <div class="ml-40"></div>
                <div class="ml-32"></div>
                <h2 class="font-bold text-2xl mt-20 text-slate-600 ml-96">Log in here</h2>
                <div class="ml-48"></div>
                <!-- <NuxtLink to="/" class="btn btn-accent ml-96 mt-1">Back</NuxtLink> -->

            </div>
            <div class="shadow-xl p-8 w-auto mt-24 bg-white rounded-lg">
                <FormKit type="form" @submit="check" submit-label="Login">
                    <FormKit v-model="userdata.name" type="text" name="name" id="name" label="Name"
                        placeholder="Enter username" validation="required" />

                    <FormKit v-model="userdata.userpassword" type="password" name="password" id="password" label="Password"
                        prefix-icon="password" placeholder="Enter Password" validation="required" />
                </Formkit>


                <p class="ml-6">Don't have account?
                    <NuxtLink class="ml-4  hover:text-slate-800 text-red-600 text-base  " to="/second">
                        Register here</NuxtLink>
                </p>

            </div>
        </div>
    </div>
</template>