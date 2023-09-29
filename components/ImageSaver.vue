<template>
    <div>
      <button @click="saveImage">Save Cropped Image</button>
    </div>
  </template>
  
  <script>
  import { saveAs } from "file-saver";
  
  export default {
    props: {
      croppedImage: String,
    },
    methods: {
      saveImage() {
        const byteCharacters = atob(this.croppedImage.split(",")[1]);
        const byteArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteArray[i] = byteCharacters.charCodeAt(i);
        }
  
        const blob = new Blob([byteArray], { type: "image/jpeg" });
        saveAs(blob, "cropped_image.jpg");
      },
    },
  };
  </script>
  