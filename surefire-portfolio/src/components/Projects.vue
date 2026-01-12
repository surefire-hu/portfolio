<script setup>
import { projects } from '../data.js'
import ProjectCard from './ProjectCard.vue'
import { ref } from 'vue'

const slider = ref(null)

const scrollLeft = () => {
  slider.value.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' })
}

const scrollRight = () => {
  slider.value.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' })
}
</script>

<template>
  <section id="progetti" class="py-24 bg-dark-bg overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 class="text-4xl font-bold text-white mb-2">Progetti Selezionati</h2>
          <div class="h-1.5 w-20 bg-blue-500 rounded-full"></div>
        </div>
        
        <div class="hidden md:flex gap-4">
          <button @click="scrollLeft" class="p-3 border border-slate-700 rounded-full text-white hover:bg-blue-500 hover:border-blue-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button @click="scrollRight" class="p-3 border border-slate-700 rounded-full text-white hover:bg-blue-500 hover:border-blue-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div 
        ref="slider"
        class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-8 pb-8"
        style="scrollbar-width: none; -ms-overflow-style: none;"
      >
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="min-w-[85%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.35rem)] snap-start"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <div class="mt-16 text-center">
        <a 
          href="https://github.com/surefire-hu" 
          target="_blank"
          class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1"
        >
          <span>Vedi tutti i progetti su GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>