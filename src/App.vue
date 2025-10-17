<script setup>

</script>

<template>
  <div>
    <div
      class="bg-gradient-to-br from-black to-[#E51515] grid grid-cols-2 grid-rows-1 place-self-start w-full h-16 mb-10 ">
      <div class="grid grid-cols-3 w-70">
        <div class="grid col-start-1 place-content-center my-auto">
          <router-link to="/home">Inicio</router-link>
        </div>
        <div class="grid col-start-2 place-content-start my-auto w-auto w-80">
          <router-link to="/categorias">Categorias</router-link>
        </div>
        <div class="grid col-start-3 place-content-start my-auto w-auto w-80">
        </div>
      </div>
      <div class="grid grid-cols-3 w-60 place-self-end place-items-center place-content-center my-auto">
        <div>
          <img src="C:\Users\gusta\porta2\src\assets\linkedin.png" alt="" class="w-10 h-10">
        </div>
        <div>
          <img src="C:\Users\gusta\porta2\src\assets\github.png" alt="" class="w-12 h-12">
        </div>
        <div>
          <img src="C:\Users\gusta\porta2\src\assets\envelope.png" alt="" class="w-14 h-14">
        </div>

      </div>
    </div>
  </div>
   <router-view />
   
</template>

<style></style>