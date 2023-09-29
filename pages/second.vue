<script>
export default {
    data() {
        return {
            data: {
                username: '',
                useremail: '',
                password: ''
            }

        }

    },
    methods: {
        checkform() {
            const res = $fetch('/api/signpost', {
                method: 'POST',
                body: this.data
            }).then((response) => {
                // console.log(response);
                window.location.href = '/';
                this.data.username = "";
                this.data.useremail = "";

            }
            )


        }

    }


}


</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="font-bold text-2xl mt-20 mb-3 text-slate-600">Create new Account</h2>
        <div class="shadow-xl p-8 w-96  bg-slate-50 rounded-lg">
            <FormKit type="form" @submit="checkform" class="ml-10" submit-label="submit">
                <FormKit v-model="data.username" type="text" name="name" id="name" label="Name" help="Your full name"
                    placeholder="“Enter username”" validation="required" />



                <FormKit v-model="data.useremail" type="email" name="email" id="email" label="Email"
                    placeholder="Enter email" validation="required" />




                <FormKit type="group">
                    <FormKit v-model="data.password" type="password" prefix-icon="password" name="password" label="Password"
                        validation="required" />
                    <FormKit type="password" name="password_confirm" prefix-icon="password" label="Confirm password"
                        validation="required|confirm" validation-label="Confirmation" />
                </FormKit>



            </FormKit>


        </div>
    </div>
</template>

<style  scoped>
.formkit-suffix-icon:hover {
    color: var(--fk-color-primary);
}
</style>