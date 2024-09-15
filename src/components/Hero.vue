<template>
  <div class="min-h-screen flex items-center pt-20 lg:pt-0 justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl w-full space-y-8">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <!-- Text Content -->
        <div class="lg:w-1/2 space-y-6  lg:ml-16  text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            <span class="block">Mathieu Chavanel</span>
            <span
              class="text-3xl sm:text-4xl lg:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Développeur Web
            </span>
          </h1>
          <p class="mt-3 text-base sm:text-lg md:mt-5 md:text-xl text-gray-300 max-w-md mx-auto lg:mx-0">
            Passionné par le code et curieux de nature, je suis constamment à la recherche de solutions innovantes pour
            relever les défis du développement web.
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <a href="#projects"
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:text-lg md:px-10 transition duration-300 ease-in-out">
              Voir Projets
            </a>
            <a href="#contact"
              class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:text-lg md:px-10 transition duration-300 ease-in-out">
              Me Contacter
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="lg:w-1/2 mt-10 lg:mr-16 lg:mt-0 flex justify-center lg:justify-end">
          <div class="relative w-72 h-72 sm:w-96 sm:h-96">
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse overflow-visible">
            </div>
            <img class="relative rounded-full w-full h-full object-cover shadow-sm opacity-70"
              src="/images/photographie.png" alt="John Doe" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>