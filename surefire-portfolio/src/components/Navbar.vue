<script setup>
import { ref, onMounted } from 'vue'
import { Menu, X, Github, Linkedin } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-black tracking-tighter text-white">
        SURE<span class="text-blue-500 font-light">FIRE</span>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#home" class="hover:text-white transition-colors">Home</a>
        <a href="#about" class="hover:text-white transition-colors">Chi Sono</a>
        <a href="#progetti" class="hover:text-white transition-colors">Progetti</a>
        <a 
          href="https://github.com/surefire-hu" 
          target="_blank" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all"
        >
          GitHub
        </a>
      </div>

      <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
        <component :is="isMenuOpen ? X : Menu" />
      </button>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-dark-bg border-b border-white/10 p-6 md:hidden flex flex-col gap-4 text-center">
        <a href="#home" @click="isMenuOpen = false">Home</a>
        <a href="#about" @click="isMenuOpen = false">TechStack</a>
        <a href="#progetti" @click="isMenuOpen = false">Progetti</a>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>