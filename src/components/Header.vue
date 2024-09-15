<template>
	<nav class="bg-gradient-to-r from-purple-700 to-indigo-800 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
		<div class="container mx-auto">
			<div class="flex justify-between items-center">
				<!-- Logo -->
				<div class="text-white font-bold text-xl">
					<a href="/" class="flex items-center">
						<CodeIcon class="h-8 w-8 mr-4" />
						<span>Mathieu Chavanel</span>
					</a>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden md:flex space-x-6">
					<a v-for="item in menuItems" :key="item.name" :href="item.href"
						class="text-white hover:text-purple-200 transition duration-300 ease-in-out">
						{{ item.name }}
					</a>
				</div>

				<!-- Mobile Menu Button -->
				<div class="md:hidden">
					<button @click="toggleMobileMenu" class="text-white focus:outline-none">
						<MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
						<XIcon v-else class="h-6 w-6" />
					</button>
				</div>
			</div>

			<!-- Mobile Menu -->
			<transition enter-active-class="transition duration-300 ease-out"
				enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-200 ease-in" leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0">
				<div v-if="isMobileMenuOpen" class="md:hidden mt-4 space-y-2">
					<a v-for="item in menuItems" :key="item.name" :href="item.href"
						class="block text-white hover:bg-purple-600 rounded px-3 py-2 transition duration-300 ease-in-out"
						@click="isMobileMenuOpen = false">
						{{ item.name }}
					</a>
				</div>
			</transition>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'
import { MenuIcon, XIcon, CodeIcon } from 'lucide-vue-next'

const menuItems = [
	{ name: 'Accueil', href: '/' },
	{ name: 'Projets', href: '/#projects' },
	{ name: 'Contact', href: '/#contact' },
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>