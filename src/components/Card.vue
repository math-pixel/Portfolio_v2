<template>
    <a :href="href" class="relative w-[40%] h-[40%] bg-[#D6ECFF] overflow-visible rounded-[20px]">
      <img :src="thumbnail" alt="" class="absolute bottom-[12px] left-[12px] h-[105%] max-w-[35%] rounded-[10px]" />
  
      <h2 class="absolute top-[10%] left-[40%] font-semibold text-4xl">{{ title }}</h2>
      <p class="absolute top-[25%] left-[40%] font-normal text-lg ">{{ description }}</p>
  
      <div class="absolute -bottom-[5%] right-[5%] w-[40%] h-[20%] flex justify-around items-center overflow-visible">
        <img v-for="(currentTechno, index) in techno" 
             v-if="index < 3" 
             :key="index" 
             :src="currentTechno.img" 
             alt="techno" 
             class="w-[25%]" />
      </div>
    </a>
  </template>
  
  <script setup>
  const props = defineProps(["title", "description", "href", "thumbnail", "techno"]);
  </script>
  