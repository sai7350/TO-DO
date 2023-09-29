<template>
    <div>
      <vue-cropper
        ref="cropper"
        :src="imageSrc"
        :guides="true"
        :view-mode="2"
        :drag-mode="dragMode"
        :auto-crop-area="0.8"
        :background="false"
      ></vue-cropper>
      <button @click="cropImage">Crop Image</button>
    </div>
  </template>
  
  <script>
  import VueCropper from "vue-cropperjs";
  
  export default {
    components: {
      VueCropper,
    },
    props: {
      imageSrc: String,
    },
    data() {
      return {
        dragMode: "move",
      };
    },
    methods: {
      cropImage() {
        const cropper = this.$refs.cropper;
        const croppedData = cropper.getCroppedCanvas().toDataURL("image/jpeg");
        this.$emit("crop", croppedData);
      },
    },
  };
  </script>
  