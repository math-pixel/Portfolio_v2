<template>
    <div id="projects" class="min-h-screen py-16 pt-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-white mb-12 pt-20">
          Mes Projets
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="card in cards" :key="card.title" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group">
            <div class="relative overflow-hidden">
              <img :src="card.thumbnail" :alt="card.title" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a :href="card.href" target="_blank" rel="noopener noreferrer" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Voir le projet
                </a>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">{{ card.title }}</h3>
              <p class="text-gray-400 mb-4">{{ card.body }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <img v-for="(tech, index) in card.techno" :key="index" :src="tech.img" :alt="tech.img" class="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const cards = ref([
    { title: "Arcania", body: "Dans Arcania transformer votre telephone en veritable baguette magique et combattez vos amies dans l'arene" ,href: "https://github.com/math-pixel/ARCANIA", thumbnail : "/images/masarus.png",
      techno: [
        {"img" : "https://skillicons.dev/icons?i=p5js"},
        {"img" : "https://skillicons.dev/icons?i=nodejs"},
        {"img" : "https://skillicons.dev/icons?i=html"}
      ]
    },
    { title: "Masaru's Adventure", body: "Aidez Masarus à retrouver le shamizen sacré pour sauvez l'île de Kyushu. " ,href: "https://github.com/math-pixel/Masarus-Adventure", thumbnail : "/images/masarus.png",
      techno: [
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"}
      ]
    },
    { title: "Imprimante 3D", body: "En quêtes de savoir, j'ai voulue construire moi meme une imprimante 3D pour connaitre les moindres details de ces machines" ,href: "", thumbnail : "/images/toto.png",
      techno: [
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"}
      ]
    },
    { title: "Reveil Intelligent", body: "Allo Jarvis ? Reveil 8H demain ! Un reveil fabriquer en python booster a l'ia et structure grace a de la POO " ,href: "", thumbnail : "/images/toto.png",
      techno: [
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"},
        {"img" : "/images/profile.png"}
      ]
    },
  ])
  </script>