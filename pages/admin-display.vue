<script >
definePageMeta({
    layout:false,
})
import axios from 'axios';
export default {
  data()
  {
    return{
      resdata:{},
      show:false,
      showdata:false


    }
  },
 
  methods:{
     async displayUser(){
      try{
        const res= await axios.get('/api/admindisplay');
        this.resdata=res.data
            console.log(this.resdata)

      }
      catch(error){
        console.log(error)
      }

    },
    tranfer(){
        try{
            window.location.href="/viewtask"
        }
        catch(error){
            console.log(error)
        }
    }
   
    

  },
  mounted() {
      console.log("Hii")
      this.displayUser();
      
    },
    change(){
      this.showdata=!this.showdata
    }
 
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
        <NuxtLink to="/display" class="btn btn-accent ml-96 mt-4">Back</NuxtLink>
        
</div>
      <!-- <div class="ns"><ol><NuxtLink to="/display"><button className="btn btn-warning btn-lg hover:bg-sky-700 ..." style="padding: 10px;">Back</button></NuxtLink></ol></div>
        <h3 class="fw-bold mb-2 text-uppercase" style="margin-left: 40%;margin-top: 100px;color:cadetblue">Employee Task Details</h3> -->
        
      
        <NuxtLayout name="custom">
            <div class="ss mt-8">
                <table class="table table-striped border-2 border-red-400 items-center w-80">
  <thead class="thead-dark">
    <tr>
      <th class="table-header">#</th>
      <th class="table-header">Name</th>
      <th class="table header"></th>
      <!-- <th class="table-header">Email</th>
      <th class="table-header">ID NO</th>
      <th class="table-header">Branch</th>
      <th class="table-header">Task</th> -->
      <!-- <th class="table-header"></th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in resdata" :key="index" class="table-row">
    <td  class="table-cell font-semibold">{{ index + 1 }}</td>
    
              <td class="table-cell cursor-pointer hover:text-red-500 " >{{ data.name }}</td>
              <td></td>
              <td><button @click="change" className="btn btn-warning  hover:bg-sky-700 ..." style="padding: 5px;">View Details</button></td>
              <!-- <div v-if="showdata">
                <td class="table-cell cursor-pointer hover:text-red-500 " >{{ data.name }}</td>

              </div> -->
           
              <!-- <td class="table-cell">{{ data.Email }}</td>
              <td class="table-cell">{{ data.Idno}}</td>
              <td class="table-cell">{{ data.Branch}}</td>
              <td class="table-cell">{{ data.Task}}</td> -->
              <!-- <td><button className="btn btn-warning  hover:bg-sky-700 ..." style="padding: 10px;">Update</button></td>
              <td><button className="btn btn-warning  hover:bg-sky-700 ..." style="padding: 10px;">Delete</button></td>
      -->
    </tr>
  </tbody>
</table>



          
           
</div>

        </NuxtLayout>
        
    </div>
</template>

<style >
.ss
{
    margin-left: 10%;
    height:700px;
    width:1100px

    
}



</style>