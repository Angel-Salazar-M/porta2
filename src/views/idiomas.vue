<script setup>
import footerCard from '../components/footerCard.vue'

</script>

<template>
    <div class="grid place-items-center">
        <span class="barlow-condensed-black text-center text-3xl">Proyectos de</span>
        <h1 class="barlow-condensed-black text-center">idiomas</h1>
    </div>
    <div class="grid grid-cols-2 grid-rows-2">

        <div class="card bg-black/55 rounded-2xl shadow-md w-4/7 mx-auto m-10 grid grid-rows-[auto-1fr]">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">Inglés</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>Clases de Inglés particulares</span>
            </div>
            <div class="mb-5 mt-5"><span>Rol de maestro de clases de Inglés personalizadas y de manera particular a
                    estudiantes por medio
                    de refuerzos o de planes de estudio creados por mí para un aprendizaje personalizado.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Google Classroom</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Zoom</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Liveworksheets</span>
                </div>
            </div>
        </div>

        <div class="card bg-black/55 rounded-2xl shadow-md w-4/7 mx-auto m-10 grid grid-rows-[auto-1fr]">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">Inglés</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>Certifiación TOEIC</span>
            </div>
            <div class="mb-5 mt-5"><span>Realización de la certificación TOEIC en el idioma Inglés que mide la habilidad
                    para hablar, entender conversaciones, escribir, y entender textos orientados a ambientes
                    laborales.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Study Me</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Moodle</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">TOEIC resources</span>
                </div>
                <div class="w-full grid col-span-3 mt-3">
                    <a href="/toeic" class="bg-[#FF0202] rounded-full shadow-xl py-1 px-2 w-fit mx-auto">Ver acreditaciones</a>
                </div>
            </div>
        </div>

        <div class="card bg-black/55 rounded-2xl shadow-md w-3/9 mx-auto m-10 grid grid-rows-[auto-1fr] col-span-2">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">japonés</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>Clases de Japonés</span>
            </div>
            <div class="mb-5 mt-5"><span>Rol de estudiante de clases de Japonés impartidas por el Centro de Cultura
                    Japonesa de El Salvador.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Google Classroom</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Minato</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Zoom</span>
                </div>
                <div class="w-full grid col-span-3 mt-3">
                    <a href="/japones" class="bg-[#FF0202] rounded-full shadow-xl py-1 px-2 w-fit mx-auto">Ver acreditaciones</a>
                </div>
            </div>
        </div>
    </div>
    <footerCard />
</template>

<style></style>