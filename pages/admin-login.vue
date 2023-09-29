<script >
import axios from 'axios';
export default {
    data() {
        return {
            userdata: {
                name: '',
                
                userpassword:''
            }

        }
    },
    methods: {
        check() {
            console.log(this.userdata);
            const res = $fetch('/api/adminlogin', {
                method: 'POST',
                body: this.userdata
               
            }).then((response) => {
                alert("Login Success")
                console.log(response);
                window.location.href = '/admin-display'
            }).catch((err)=>{
                console.log(err);
                alert("Admin does not exist")
                this.userdata.name="",
                this.userdata.userpassword=""
                


            })

        },
       
        }
      

    }




</script>

<template>
    <div>
        <custom />
    
    <div class="flex flex-col items-center">
        <!-- <p>{{ userdata }}</p> -->
        <h2 class="font-bold text-2xl mt-8 text-slate-600">Admin Section</h2>
        <div class="shadow-xl p-8 w-auto mt-24 bg-slate-50 rounded-lg">
            <FormKit type="form" @submit="check"  submit-label="Login">
                <FormKit v-model="userdata.name" type="text" name="name" id="name" label="name"
                    placeholder="Enter username" validation="required" />

                <FormKit v-model="userdata.userpassword" type="password" name="password" id="password" label="Password"
                    prefix-icon="password" placeholder="Enter Password" validation="required" />
                </Formkit>
                <p class="ml-6">Don't have account?
                <NuxtLink class="ml-6  hover:text-slate-800 text-red-600 text-lg  " to="/third">
                    Register here</NuxtLink>
            </p>
           

            
        
        </div>
    </div>
</div>
</template>