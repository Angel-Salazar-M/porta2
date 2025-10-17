<script setup>
import footerCard from '../components/footerCard.vue'

</script>

<template>
    <div class="grid place-items-center">
        <h1 class="barlow-condensed-black text-center">Certificaciones</h1>
    </div>
    <div class="grid grid-rows-3">
        <div class="card bg-black/55 rounded-2xl shadow-md w-3/9 mx-auto m-10 grid grid-rows-[auto-1fr] col-span-2">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">2025</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>Python Certification - IT specialist</span>
            </div>
            <div class="mb-5 mt-5"><span>Certificación que valida habilidades fundamentales en programación con Python,
                    incluyendo estructuras de datos, control de flujo, funciones, y trabajo con módulos. Demuestra
                    dominio práctico en desarrollo y resolución de problemas con Python.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Python libraries</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Leetcode</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Certiport</span>
                </div>
                <div class="w-full grid col-span-3 mt-3">
                    <a href="/python" class="bg-[#FF0202] rounded-full shadow-xl py-1 px-2 w-fit mx-auto">Ver
                        acreditaciones</a>
                </div>
            </div>
        </div>

        <div class="card bg-black/55 rounded-2xl shadow-md w-3/9 mx-auto m-10 grid grid-rows-[auto-1fr] col-span-2">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">2025</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>Excel certification - Offie specialist</span>
            </div>
            <div class="mb-5 mt-5"><span>Certificación que acredita la capacidad de crear, analizar y gestionar hojas de
                    cálculo avanzadas en Microsoft Excel. Incluye competencias en fórmulas, funciones, tablas dinámicas
                    y automatización de tareas.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Excel office</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Certiport</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Excel resources</span>
                </div>
                <div class="w-full grid col-span-3 mt-3">
                    <a href="/excel" class="bg-[#FF0202] rounded-full shadow-xl py-1 px-2 w-fit mx-auto">Ver
                        acreditaciones</a>
                </div>
            </div>
        </div>

        <div class="card bg-black/55 rounded-2xl shadow-md w-3/9 mx-auto m-10 grid grid-rows-[auto-1fr] col-span-2">
            <div class="grid grid-cols-1 h-fit gap-2 mt-2">
                <div class="rounded-full grid place-content-center bg-[#EFC6C6] border border-black">
                    <span class="text-center text-black font-semibold">2024</span>
                </div>
            </div>
            <div class="mt-5 mb-5">
                <span>TOEIC Listening and Reading certification</span>
            </div>
            <div class="mb-5 mt-5"><span>Evaluación internacional del dominio del inglés enfocada en comprensión
                    auditiva y lectora en contextos profesionales. Reconoce la habilidad para comunicarse efectivamente
                    en entornos laborales globales.</span></div>
            <div class="grid grid-cols-3 h-fit gap-2 mt-2">
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">TOEIC resources</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Study Me</span>
                </div>
                <div class="rounded-full border-4 border-white grid place-content-center">
                    <span class="text-center text-sm">Moodle</span>
                </div>
                <div class="w-full grid col-span-3 mt-3">
                    <a href="/toeic" class="bg-[#FF0202] rounded-full shadow-xl py-1 px-2 w-fit mx-auto">Ver
                        acreditaciones</a>
                </div>
            </div>
        </div>
    </div>
    <footerCard/>
</template>

<style></style>