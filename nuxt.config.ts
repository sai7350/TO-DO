// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules:
  
  ['@formkit/nuxt'],
  
 
  css: [
    '@/assets/css/main.css','@mdi/font/css/materialdesignicons.min.css',
  ],
  
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
  
 
 
  
  
  
 
})

