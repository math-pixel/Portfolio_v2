<template>
    <div class="min-h-[50vh] py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-extrabold text-white mb-8">Contact Me</h2>
        <p class="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <GithubIcon class="w-12 h-12 text-white mb-4" />
            <span class="text-lg font-semibold text-white">GitHub</span>
          </a>
          <a 
            href="mailto:your.email@example.com"
            class="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <MailIcon class="w-12 h-12 text-white mb-4" />
            <span class="text-lg font-semibold text-white">Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            class="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <LinkedinIcon class="w-12 h-12 text-white mb-4" />
            <span class="text-lg font-semibold text-white">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { GithubIcon, MailIcon, LinkedinIcon } from 'lucide-vue-next'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    // Reset form after submission
    form.value = { name: '', email: '', message: '' }
    // You might want to show a success message to the user here
  }
  </script>