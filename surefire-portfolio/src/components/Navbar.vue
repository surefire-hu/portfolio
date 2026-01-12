<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, X, Languages } from 'lucide-vue-next'

const { t, locale } = useI18n()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const toggleLanguage = () => {
  locale.value = locale.value === 'it' ? 'en' : 'it'
  localStorage.setItem('user-locale', locale.value)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4',
      isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-black tracking-tighter text-white" aria-label="Surefire Portfolio Home">
        SURE<span class="text-blue-500 font-light">FIRE</span>
      </a>

      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#home" class="hover:text-white transition-colors">{{ t('nav.home') }}</a>
        <a href="#about" class="hover:text-white transition-colors">{{ t('nav.about') }}</a>
        <a href="#progetti" class="hover:text-white transition-colors">{{ t('nav.projects') }}</a>
        
        <button 
          @click="toggleLanguage" 
          class="flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 hover:bg-white/5 transition-all text-xs font-mono"
          aria-label="Change Language"
        >
          <Languages :size="14" class="text-blue-500" />
          <span class="uppercase">{{ locale }}</span>
        </button>

        <a 
          href="https://github.com/surefire-hu" 
          target="_blank" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-blue-500/20"
        >
          GitHub
        </a>
      </div>

      <button 
        class="md:hidden text-white p-2" 
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'"
      >
        <component :is="isMenuOpen ? X : Menu" />
      </button>
    </div>

    <transition name="fade">
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 p-8 md:hidden flex flex-col gap-6 text-center shadow-2xl"
      >
        <a href="#home" class="text-lg text-white" @click="isMenuOpen = false">{{ t('nav.home') }}</a>
        <a href="#about" class="text-lg text-white" @click="isMenuOpen = false">{{ t('nav.about') }}</a>
        <a href="#progetti" class="text-lg text-white" @click="isMenuOpen = false">{{ t('nav.projects') }}</a>
        
        <button 
          @click="toggleLanguage(); isMenuOpen = false" 
          class="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm"
        >
          <Languages :size="18" />
          {{ locale === 'it' ? 'English Version' : 'Versione Italiana' }}
        </button>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>