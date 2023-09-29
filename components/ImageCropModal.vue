<template>
    <div class="image-crop-modal">
      <div class="modal-content">
        <vue-cropper :src="imageSrc" :guides="true" ref="cropper" />
        <button @click="cropImage">Crop Image</button>
      </div>
    </div>
  </template>
  
  <script>
  import VueCropper from "vue-cropperjs";
  
  export default {
    components: {
      VueCropper
    },
    props: {
      imageSrc: String,
      showModal: Boolean
    },
    methods: {
      cropImage() {
        const cropper = this.$refs.cropper;
        const croppedDataUrl = cropper.getCroppedCanvas().toDataURL("image/jpeg");
        this.$emit("crop", croppedDataUrl);
      }
    }
  };
  </script>
  
  <style scoped>
  .image-crop-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
  }
  </style>
  