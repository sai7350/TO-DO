<script >
// import { ref } from 'vue';
// const res=ref(false)
// function change()
// {
// document.getElementById("demo").innerHTML="hii"
// // document.getElementById("demo").innerHTML="hello"



export default{
  data(){
    return{
      showContent:false

    }
  },
  methods:{
    toggleContent(){
      this.showContent=!this.showContent

    }

  }
}

</script>


<template>
  <div>
    <hello />
    <h1>Hello</h1>
    <button @click="change"> Click me</button>
    <p id="demo">Hello</p>

    <div id="app">
        <button class="btn btn-lg text-white" @click="toggleContent"> <i class="fas fa-edit "></i> Toggle</button>
        <!-- <button class=" bg-blue-500 hover:bg-blue-600 rounded-md btn-sm text-white" title="edit"
                                @click="toggleContent">
                                <i class="fas fa-edit "></i>
                            </button> -->
        <div v-if="showContent">
            <!-- Content to display -->
            <p>This content is displayed when the button is clicked.</p>
            <NuxtLink to="/">Hii</NuxtLink>
        </div>
        
        <!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
    </div>

    <!-- <div v-if="res">
      <h1 is="demo">Hii</h1>
    </div> -->
  </div>
</template>

<style  scoped>

</style>