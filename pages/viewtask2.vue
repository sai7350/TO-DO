<script >
definePageMeta({
  layout: false,
})

import axios from 'axios';
// Initialization for ES Users



export default {
  data() {
    return {
      resdata: {},
      show: false,
      deletem: false,
      cross: false,
      isDrawerOpen:false

    }
  },

  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    check() {
      this.show = !this.show
      this.cross = !this.cross

    },
    check2() {
      this.show = !this.show
    },
    async displayUser() {
      try {
        const res = await axios.get('/api/getdata');
        this.resdata = res.data
        console.log(this.resdata)

      }
      catch (error) {
        console.log(error)
      }

    },



  },

  mounted() {
    console.log("Hii")
    this.displayUser();

  },


}

</script>

<template>
  <div>
    <custom />
    <div class="flex w-full h-12 ">
      <div class="ml-40"></div>
      <div class="ml-32"></div>
      <h2 class="font-bold text-2xl mt-5 text-slate-600 ml-80">Employee Task details</h2>
      <div class="ml-48"></div>
      <button @click="check" class="btn btn-accent ml-20">Click me</button>
      <NuxtLink to="/display" class="btn btn-accent ml-96 mt-4">Back</NuxtLink>

    </div>
    <!-- <div class="ns"><ol><NuxtLink to="/display"><button className="btn btn-warning btn-lg hover:bg-sky-700 ..." style="padding: 10px;">Back</button></NuxtLink></ol></div>
        <h3 class="fw-bold mb-2 text-uppercase" style="margin-left: 40%;margin-top: 100px;color:cadetblue">Employee Task Details</h3> -->

    <button class="btn btn-accent ml-80" @click="deletem = true">Click me</button>
    <div class="w-80 h-20 bg-white">
      <div v-if="deletem">
        <button class="btn btn-xs rounded-lg text-lg" @click="deletem = false">X</button>
        <h1>Hiii</h1>
      </div>

    </div>



    <!-- this is drawer container -->
    
<div class="drawer drawer-end">
  <div class="drawer-content">
        <div class="relative md:mt-0 hidden lg:flex mt-1">

<button @click="toggleDrawer" class=" bg-blue-500 lg:pb-2 lg:h-8 text-white px-6 py-1 rounded-full md:mr-10">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    class="inline-block w-6 h-6 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
  <!-- <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg" class="w-6 h-6" alt=""> -->
</button>
</div>

<button v-if="isDrawerOpen" @click="closeDrawer"
  class="fixed inset-0 z-50 bg-black bg-opacity-50 cursor-pointer"></button>
<div v-if="isDrawerOpen" class="fixed inset-y-0 right-0 z-50 flex items-start w-96 bg-white">
  <div class="flex flex-col items-start p-4 space-y-4" style="transition:right 0.3s ease-in-out">
    <!-- Close button -->
    <button @click="closeDrawer" class="text-black cursor-pointer text-right">X</button>

    <!-- Drawer content -->
    <div class="flex justify-around">
      <div class="flex-col">
        <img
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
          class="w-20 rounded-full" alt="Avatar" />
      </div>
      <div class="flex-col ml-8 text-sm">
        <h1 class="text-xl font-bold">xyz</h1>
        <p>Recruiter at xyz company</p>
        <div class="mt-2">
          <a class="text-blue-600 font-semibold" href="/Employer/companyProfile">view & update profile
          </a>
        </div>
      </div>
    </div>
    <hr>
    <button class="btn" @click="signout()">Logout</button>

  </div>
</div>
</div>
</div>


<!--  -->
      

    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer-4" class="drawer-button btn btn-primary" @click="add(job)">Open drawer</label>
      </div>
      <h1 class="text-2xl">Hiii</h1>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 w-96 h-screen bg-white overflow-hidden text-base-content">
          <!-- Sidebar content here -->
          <label for="name" class="text-bold">Name<span class="text-red-500">*</span></label><br>
          <input type="text" placeholder="enter your name" class="rounded-lg placeholder-gray-500 border h-10" id="name">

        </ul>
      </div>
    </div>


    <!-- drawer init and toggle -->

    <!-- drawer component -->

    <div v-if="show">

      <div class="ss mt-8">
        <table class="table table-striped border-2 border-red-400 items-center " @mouseleave="check2">
          <thead class="thead-dark">
            <tr>
              <th class="table-header border border-slate-300">#</th>
              <th class="table-header border border-slate-300">Name</th>
              <th class="table-heade border-slate-300">Email</th>
              <th class="table-header">ID NO</th>
              <th class="table-header">Branch</th>
              <th class="table-header">Task</th>
              <!-- <th class="table-header"></th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in resdata" :key="data.Id" class="table-row ">
              <td class="table-cell font-semibold border border-slate-300">{{ index + 1 }}</td>

              <td class="table-cell border border-slate-300">{{ data.Name }}</td>

              <td class="table-cell border border-slate-300">{{ data.Email }}</td>

              <td class="table-cell border border-slate-300">{{ data.Idno }}</td>
              <td class="table-cell border-slate-300">{{ data.Branch }}</td>
              <td class="table-cell border-slate-300">{{ data.Task }}</td>
              <td><button @click="openEditModal(data)" className="btn btn-warning  hover:bg-sky-700 ..."
                  style="padding: 10px;">Update</button></td>
              <td><button @click="deleteemp(data)" className="btn btn-warning  hover:bg-sky-700 ..."
                  style="padding: 10px;">Delete</button></td>



            </tr>
          </tbody>
        </table>





        <div class="modal-action">
          <button class="btn" @click="updateUser()">Update</button>

          <button class="btn" @click="closeEditModal()">Close</button>
        </div>
      </div>
    </div>





  </div>
</template>

<style >
.ss {
  margin-left: 10%;
  height: 700px;
  width: 1100px
}
</style>