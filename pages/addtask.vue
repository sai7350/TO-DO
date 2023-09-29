<script >
export default {
    data() {
        return {
            add: {
                name: '',
                useremail: '',
                idno: '',
                branch: '',
                task: '',

            }
        }
    },
    methods: {
        entry() {
            const res = $fetch('/api/addtask', {
                method: 'POST',
                body: this.add
            }).then((response) => {
                console.log(response);
                window.location.href = '/viewtask',
                    this.add.name = "",
                    this.add.useremail = "",
                    this.add.idno = "",
                    this.add.task = ""

            }
            )
        }
    }
}

</script>

<template>
    <div>
        <h1 class=" text-center font-bold text-xl mb-4  mt-16">Add Employee Task Details</h1>
        <div class="flex flex-col items-center">
            <div class="shadow-xl  p-8 w-96  bg-slate-50 rounded-lg">

                <FormKit v-model="add.name" type="text" class="rounded-lg w-20" placeholder="Enter name" name="name"
                    id="name" validation="required" label="Name" />

                <!-- <FormKit v-model="add.useremail" type="email" class="rounded-lg" placeholder="Enter email" name="email"
                    id="email" validation="required" label="email" />

                <FormKit v-model="add.idno" type="text" class="rounded-lg" placeholder="enter id no" name="id"
                    validation="required" label="ID NO" />

                <FormKit v-model="add.branch" type="select" label="Select Branch" name="brach" placeholder="Select Branch"
                    :options="[

                        'Software Development',
                        'Software Testing',
                        'Deveops',
                        'Cloud Computing',
                        'Database Engineer',
                    ]" /> -->
                <FormKit v-model="add.task" type="text" label="Add Task" name="task" placeholder="Enter task details"
                    validation="required" autocomplete="off" />
                <div class="px-20 ml-7">
                    <FormKit type="form" @click="entry" label="Submit" />
                </div>

            </div>


        </div>

    </div>
</template>

<style  scoped></style>