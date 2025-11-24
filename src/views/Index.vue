<script setup>

</script>

<template>
    <div class="card bg-black/55 grid grid-cols-2 rounded-2xl shadow-md w-3/5 mx-auto m-10">
        <div class="grid grid-rows-[auto,1fr] px-5">
            <div class="">
                <h1 class="barlow-condensed-black ">Ángel</h1>
                <h1 class="text-right black-han-sans-regular text-[#BB0000]">Salazar</h1>
            </div>
            <div class="py-2">
                <span>Mi nombre es Ángel Gustavo Salazar Mendoza, estudiante de bachillerato cursando último año y con nota media de 9.
                    Buscando aprender, brindar mis conocimientos y desenvolverme en áreas relacionadas a
                    programación o
                    traducción de documentos de Inglés a Español y viceversa.</span>
            </div>
            <div class="grid place-content-center">
                <a href="https://www.canva.com/design/DAGwLszw0rE/ss0ULp6fkxn1ZVR6TCSV-A/view?utm_content=DAGwLszw0rE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h02c4b2843b"
                    class="bg-[#FF0202]/40 rounded-full py-1 px-2 m-4 hover:text-white text-white no-underline">Descargar
                    CV</a>
            </div>
        </div>
        <div class="w-50 aspect-[5/6] overflow-hidden rounded-xl mx-auto my-auto">
            <img src="@/assets/image1.png" alt="" class="w-fit h-fit object-cover">
        </div>
    </div>

    <div class="card bg-black/55 grid grid-cols-2 rounded-2xl shadow-md opacity-90 w-3/5 mx-auto">
        <div class="grid grid-rows-2">
            <div class="w-80 aspect-[4/5] overflow-hidden rounded-xl mx-auto my-auto h-45">
                <img src="@/assets/54721367578_47b205f221_o.jpg" alt=""
                    class="object-cover mx-auto">
            </div>
            <div class="grid grid-cols-2">
                <div>
                    <img src="@/assets/it-specialist-python.png" alt="">
                </div>
                <div>
                    <img src="@/assets/microsoft-office-specialist-excel-associate-microsoft-365-apps.png"
                        alt="">
                </div>
            </div>
            <div>

            </div>
        </div>
        <div class="grid grid-rows-[auto,1fr] px-5">
            <div class="m-2 mx-auto">
                <span class="barlow-condensed-black  text-3xl">Centro ¡Superate!<br></br></span>
                <span class="barlow-condensed-black  text-3xl">Fundación Poma</span>
            </div>
            <div class="m-2">
                <span>Durante mi participación en el programa de becas del Centro ¡Supérate! Fundación
                    Poma elaboré distintos proyectos realcionados con tecnología y lenguajes de programación, además de
                    realizar
                    certificaciones en inglés y en herramientas tecnológicas como Excel y Python.</span>
            </div>
            <div class="grid place-content-center">
                <a href="/categorias" class="bg-[#FF0202]/40 rounded-full p-2 hover:text-white text-white no-underline">ver
                    proyectos</a>
            </div>
        </div>
    </div>
    <div class="grid place-content-center mt-15 mb-10">
        <h1 class="barlow-condensed-black">Mis habilidades</h1>
    </div>

    <div class="grid grid-rows-2">
        <div class="grid grid-cols-2">
            <div
                class="card bg-[#F90E0E]/20 grid rounded-2xl shadow-md opacity-90 w-auto mx-auto m-10 place-content-center">
                <div class="grid grid-rows-[auto,1fr] mx-auto">
                    <div>
                        <h1 class="barlow-condensed-black ">Programación</h1>
                    </div>
                    <div class="grid grid-rows-4 mx-auto mt-10 w-fit">
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">HTML/CSS</span>
                                <span class="text-sm font-semibold">90%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">javaScript</span>
                                <span class="text-sm font-semibold">30%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 30%;"></div>
                            </div>
                        </div>
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">Tailwind CSS</span>
                                <span class="text-sm font-semibold">85%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 85%;"></div>
                            </div>
                        </div>
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">Python</span>
                                <span class="text-sm font-semibold">70%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 70%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="card bg-[#F90E0E]/20 grid rounded-2xl shadow-md opacity-90 w-auto mx-auto m-10 place-content-center">
                <div class="grid grid-rows-[auto,1fr] mx-auto">
                    <div>
                        <h1 class="text-center barlow-condensed-black ">Idiomas</h1>
                    </div>
                    <div class="grid grid-rows-3 mx-auto mt-10 w-fit">
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">Español</span>
                                <span class="text-sm font-semibold">100%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 100%;"></div>
                            </div>
                        </div>
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">Inglés</span>
                                <span class="text-sm font-semibold">90%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div class="w-72"> <!-- ancho fijo -->
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">Japonés</span>
                                <span class="text-sm font-semibold">30%</span>
                            </div>
                            <div class="bg-gray-200 rounded-full h-4 overflow-hidden" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" aria-label="Progreso HTML/CSS">
                                <div class="h-4 rounded-full bg-[#2C2828] border" style="width: 30%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="card bg-[#F90E0E]/20 grid rounded-2xl shadow-md opacity-90 w-auto mx-auto m-10 place-content-center">
            <div class="grid grid-rows-[auto,1fr] mx-auto">
                <div>
                    <h1 class="text-center barlow-condensed-black ">Cualidades</h1>
                </div>
                <div class="grid grid-rows-7 mx-auto mt-10 w-fit">
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Flexibilidad laboral</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Comunicación asertiva</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Trabajo en equipo</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Toma de decisiones</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Liderazgo</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Resolución de problemas</h2>
                    </div>
                    <div class="mx-auto"> <!-- ancho fijo -->
                        <h2>- Pensamiento crítico y lógico</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid place-content-center mt-15 mb-10">
            <h1 class="barlow-condensed-black ">Habilidades técnicas</h1>
        </div>

        <div class="card bg-[#D9D9D9]/20 grid rounded-2xl shadow-md opacity-90 w-9/10 mx-auto m-10">
            <div class="grid grid-cols-5">
                <div>
                    <img src="@/assets/html.png" alt="" class="w-40 h-40">
                </div>
                <div>
                    <img src="@/assets/github.png" alt="" class="w-40 h-40">
                </div>
                <div>
                    <img src="@/assets/mysql-database.png" alt="" class="w-40 h-40">
                </div>
                <div>
                    <img src="@/assets/python.png" alt="" class="w-40 h-40">
                </div>
                <div>
                    <img src="@/assets/text.png" alt="" class="w-40 h-40">
                </div>
            </div>
        </div>

        <div
            class="card border-2 border-black bg-gradient-to-br from-[#5A0707] to-[#E51515] grid rounded-lg shadow-md opacity-90 w-4/5 mx-auto m-10 place-content-center">
            <span class="text-center text-3xl">¿Tienes un proyecto en mente?<br></br>
                Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración.<br></br> No dudes en
                contactarme para discutir tu próximo proyecto.</span>
        </div>

        <div class="card bg-gradient-to-br from-black to-[#E51515] grid shadow-md opacity-90 w-full mt-5 p-3 py-5">
            <div class="grid grid-cols-2">
                <div class="grid place-items-start">
                    <h2>Ángel Gustavo Salazar Mendoza</h2>
                    <h2>Santa Tecla, La Libertad Sur, El Salvador</h2>
                    <h2>+503 7488-5948</h2>
                </div>
                <div class="grid grid-cols-4 grid-rows-1 w-80 place-self-end">
                    <div>
          <a href="https://www.linkedin.com/in/angel-salazar-a8541a38b"><img
              src="@/assets/linkedin.png" alt="" class="w-13 h-13"></a>

        </div>
        <div>
          <a href="https://github.com/Angel-Salazar-M"><img src="@/assets/github.png" alt=""
              class="w-12 h-12"></a>
        </div>
        <div><a href="mailto:gustavosalazar.200713@gmail.com"><img src="@/assets/envelope.png"
              alt="" class="w-14 h-14"></a>

        </div>
        <div>
            <a href="https://www.instagram.com/angel_gggsm"><img src="@/assets/instagram.png" alt="" class="w-14 h-14"></a>
        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>