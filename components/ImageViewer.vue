<template>
    <div>
      <img :src="imageSrc" alt="Cropped Image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
    },
  };
  </script>
  