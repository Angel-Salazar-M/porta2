<script setup>
import footerCard from '../components/footerCard.vue'
</script>

<template>
    <div class="grid place-items-center">
        <span class="barlow-condensed-black text-center text-3xl">Proyectos de</span>
        <h1 class="barlow-condensed-black text-center">Programación</h1>
    </div>

    <div class="card bg-black/55 grid grid-cols-2 rounded-2xl shadow-md opacity-90 w-3/5 mx-auto m-20">
        <div class="w-50 aspect-[5/6] overflow-hidden rounded-xl mx-auto my-auto">
            <img src="@/assets/Captura de pantalla 2025-09-21 143534.png" alt=""
                class="w-fit h-fit object-cover object-top">
        </div>
        <div class="grid grid-rows-4">
            <div class="grid place-items-center">
                <span class="text-2xl">SV-AIHEALTH</span>
            </div>
            <div class="m-2">
                <span>Cuida tu alimentación con SV-AIHEALTH, un escáner que identifica ingredientes y alergenos en
                    productos empaquetados.</span>
            </div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">Power Apps</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">Microsoft lists</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">Power Automate</span>
                </div>
            </div>
            <div>
            <router-link to="/svaihealth" class="rounded-full bg-[#FF0202] py-1 px-2 hover:bg-red-600">ver detalles de proyecto</router-link>
            </div>

        </div>
    </div>

    <div class="card bg-black/55 grid grid-cols-2 rounded-2xl shadow-md opacity-90 w-3/5 mx-auto m-20">
        <div class="grid grid-rows-4">
            <div class="grid place-items-center">
                <span class="text-2xl">ScriptGo - Expo de logros 2024</span>
            </div>
            <div class="m-2">
                <span>Controla fácilmente y de manera accesible tus prescipciones e historial médico de manera digital,
                    además de envío de medicamentos, gestión de cuentas de menores y personas de tercera edad.</span>
            </div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">VS Code</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">Laravell</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">Tailwind CSS</span>
                </div>
            </div>
            <div>
            <router-link to="/scriptgo2024" class="rounded-full bg-[#FF0202] py-1 px-2 hover:bg-red-600">ver detalles de proyecto</router-link>
            </div>

        </div>
        <div class="w-80 overflow-hidden rounded-xl mx-auto my-auto">
            <img src="@/assets/54040535566_aa1582ed53_o.jpg" alt=""
                class="w-fit h-fit object-cover object-top">
        </div>
    </div>

    <div class="card bg-black/55 grid grid-cols-2 rounded-2xl shadow-md opacity-90 w-3/5 mx-auto m-20">
        <div class="w-80 overflow-hidden rounded-xl mx-auto my-auto">
            <img src="@/assets/54721510465_08b976b0b4_o.jpg" alt=""
                class="w-fit h-fit object-cover object-top">
        </div>
        <div class="grid grid-rows-4">
            <div class="grid place-items-center">
                <span class="text-2xl">ScriptGo - ExpoTech 2025</span>
            </div>
            <div class="m-2">
                <span>Controla fácilmente y de manera accesible tus prescipciones e historial médico de manera digital,
                    además de envío de medicamentos, gestión de cuentas de menores y personas de tercera edad.</span>
            </div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">VS Code</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">GitHub</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center">HTML</span>
                </div>
            </div>
            <div>
            <router-link to="/scriptgo2025" class="rounded-full bg-[#FF0202] py-1 px-2 hover:bg-red-600">ver detalles de proyecto</router-link>
            </div>

        </div>
    </div>
    <footerCard />
</template>

<style></style>