<script setup>

</script>

<template>
  <div>
    <div
      class="bg-gradient-to-br from-black to-[#E51515] grid grid-cols-2 grid-rows-1 place-self-start w-full h-16 mb-10 ">
      <div class="grid grid-cols-3 w-70">
        <div class="grid col-start-1 place-content-center my-auto w-full h-full">
          <router-link to="/home" class="w-full h-full">Inicio</router-link>
        </div>
        <div class="grid col-start-2 place-content-start my-auto w-auto w-80">
          <router-link to="/categorias">Categorias</router-link>
        </div>
        <div class="grid col-start-3 place-content-start my-auto w-auto w-80">
        </div>
      </div>
      <div class="grid grid-cols-3 w-60 place-self-end place-items-center place-content-center my-auto">
        <div>
          <a href="https://www.linkedin.com/in/angel-salazar-a8541a38b"><img
              src="C:\Users\gusta\porta2\src\assets\linkedin.png" alt="" class="w-10 h-10"></a>

        </div>
        <div>
          <a href="https://github.com/Angel-Salazar-M"><img src="C:\Users\gusta\porta2\src\assets\github.png" alt=""
              class="w-12 h-12"></a>
        </div>
        <div><a href="mailto:gustavosalazar.200713@gmail.com"><img src="C:\Users\gusta\porta2\src\assets\envelope.png"
              alt="" class="w-14 h-14"></a>

        </div>

      </div>
    </div>
  </div>
  <router-view />

</template>

<style></style>