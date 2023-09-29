<script >
definePageMeta({
  layout: false,
})
import axios from 'axios';
export default {
  data() {
    return {
      resdata: {},
      show: false,
      resDataSuccess: [],
      editModalData: {
        username: '',
        task: '',
        Id: undefined
      },
      deleteModalData: null,


    }
  },

  methods: {
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

    // update() {
    //   try {
    //     const res = $fetch();
    //   }
    //   catch (error) {

    //   }

    // },

    openEditModal(data) {
      console.log("Data here" + JSON.stringify(data));
      this.editModalData = {
        // id: data.Id,
        username: data.Name,
        Id: data.id,
        task: data.Task
      };
      this.show = !this.show
    },

    closeEditModal() {
      this.editModalData = null;
    },

    deleteemp(data) {
      this.deleteemploye = {
        Idno: data.Idno
      }
    },
    async updateUser() {
      // console.log("value hit here" + value);
      try {
        const { username, task, Id } = this.editModalData;
        const response = await $fetch('server/api/updateemp', {
          Id: Id,
          Name: username,

          Task: task

        });
        // handle the response as needed
        this.closeEditModal();
        this.displayUser(); // Refresh the user data after deletion
        // Show the alert message after a slight delay
        setTimeout(() => {
          alert("Data updated successfully");
        }, 100);
      } catch (error) {
        console.log(error);
      }
    },
    closeDeleteModal() {
      this.deleteemploye = null
    },
    async deleteUser() {
      try {

        const { Id } = this.deleteemploye;
        const response = await $fetch('/api/deleteemp', {
          method: 'DELETE',
          body: { Id: Id },
        });

        if (response) {
          const responseData = await response;
          // handle the response as needed
          this.closeDeleteModal();
          this.displayUser(); // Refresh the user data after deletion
          // Show the alert message after a slight delay
          setTimeout(() => {
            alert("Deleted successfully");
          }, 100);
        } else {
          // Handle error response
          throw new Error('Failed to delete user');
        }
      } catch (error) {
        console.log(error);
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
      <div class="flex ml-96">
        <h2 class="font-bold  text-2xl mt-5 text-slate-600 ">TO Do List</h2>
      </div>
      <!-- <h2 class="font-bold text-2xl mt-5 text-slate-600 ml-80">Employee Task details</h2> -->
      <div class="ml-48"></div>

      <NuxtLink to="/employee-display" class="btn m-10 bg-base-300 ml-96 mt-4">Back</NuxtLink>


    </div>
    <!-- <div class="ns"><ol><NuxtLink to="/display"><button className="btn btn-warning btn-lg hover:bg-sky-700 ..." style="padding: 10px;">Back</button></NuxtLink></ol></div>
        <h3 class="fw-bold mb-2 text-uppercase" style="margin-left: 40%;margin-top: 100px;color:cadetblue">Employee Task Details</h3> -->



    <div class="ss  mt-8">
      <table class="table ml-16 table-striped border-2 items-center ">
        <thead class="thead-dark">
          <tr>
            <th class="table-header border-slate-300">Sr.no</th>
            <th class="table-header  border-slate-300">Name</th>
            <!-- <th class="table-heade border-slate-300">Email</th>
            <th class="table-header">ID NO</th>
            <th class="table-header">Branch</th> -->
            <th class="table-header">Task</th>
            <th class="table-header">Action</th>
            <!-- <th class="table-header"></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(k, index) in resdata" :key="k.Id" class="table-row ">
            <td class="table-cell font-semibold  border-slate-300">{{ index + 1 }}</td>
            <td class="table-cell  border-slate-300">{{ k.Name }}</td>
            <!-- <td class="table-cell border border-slate-300">{{ data.Email }}</td> -->
            <!-- <td class="table-cell border border-slate-300">{{ data.Idno }}</td>
            <td class="table-cell border-slate-300">{{ data.Branch }}</td> -->
            <td class="table-cell border-slate-300">{{ k.Task }}</td>
            <td><label for="update" @click="openEditModal(k)" className="btn btn-warning  hover:bg-sky-700 ..."
                style="padding: 10px;">Update</label></td>
            <td><button @click="deleteemp(data)" className="btn btn-warning  hover:bg-sky-700 ..."
                style="padding: 10px;">Delete</button></td>



          </tr>
        </tbody>
      </table>





      <div class="modal-action">

        <!-- Update model Starts Here  -->



        <div>
          <div class="text-center">



            <input type="checkbox" id="update" class="modal-toggle" />
            <div class="modal">


              <div class=" relative max-w-3xl p-4 h-96 w-4/5  overflow-hidden bg-white shadow-xl">
                <label for="update" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div class="">
                  <!-- <h3 class="font-bold text-lg mb-2">{{ data.edit }}</h3> -->
                  <div class="sm:col-span-4">
                    <label for="username"
                      class="block text-left text-sm font-medium leading-6 text-gray-900">UserName</label>
                    <div class="mt-2">
                      <div
                        class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md">
                        <input type="text" name="username" id="username"
                          class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                          v-model="editModalData.username" />
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-4">
                    <label for="password"
                      class="block text-left text-sm font-medium leading-6 text-gray-900 mt-5">Password</label>
                    <div class="mt-2">
                      <div
                        class="flex rounded-md shadow-sm ring-1 ring-black focus-within:ring-2 focus-within:ring-black sm:max-w-md">
                        <input type="text" name="username" id="username"
                          class="appearance-none rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black"
                          v-model="editModalData.task" />
                      </div>
                    </div>
                  </div>
                  <div class="modal-action">
                    <button class="btn" @click="updateUser(editModalData)">update</button>
                    <!-- <button class="btn" @click="closeEditModal()">close</button> -->
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>



        <!-- <Update Model Ends here  -->
        <!-- <label for="" class="btn"> @click="updateUser()">Update</label>

        <button class="btn" @click="closeEditModal()">Close</button> -->
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


.table-td {
  padding: 1rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
  background: white;
}

.table-row {
  background-color: white;
}

.table-header,
.table-cell {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #edf2f7;
  background: white;
}

.table-header {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #edf2f7;
  z-index: 1;
  background-color: white;
}

.modal1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-box {
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-action {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

/* Responsive styles */
@media (max-width: 640px) {
  .table-container {
    overflow-x: auto;
    /* Enable horizontal scrolling for small screens */
  }

  .table-cell {
    font-size: 18px;
  }

  .table-header {
    font-size: 16px;
    /* position:sticky;
    top:0px; */
  }

  .modal-box {
    width: 90%;
    max-width: 400px;
  }


  .table thead,
  .table tbody,
  .table tr,
  .table td:nth-child(5) {
    display: block;
  }

  .table tr {
    border-bottom: 2px solid #edf2f7;
  }

  /* .table td {
    text-align: center;
    padding-right: 55px;
  } */

  .table-cell {
    padding: 2rem;
    text-align: center;
  }

  .table-cell-buttons {
    text-align: center !important;
  }

  .table-cell {
    border-bottom: none;
  }
}
</style>