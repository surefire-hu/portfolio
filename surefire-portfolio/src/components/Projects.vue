<script setup>
import { projects } from '../data.js'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="progetti" class="py-24 bg-dark-bg">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 class="text-4xl font-bold text-white mb-2">Progetti Selezionati</h2>
          <div class="h-1.5 w-20 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>

      <div class="mt-16 text-center">
        <a 
          href="https://github.com/surefire-hu" 
          target="_blank"
          class="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1"
        >
          <span>Vedi tutti i progetti su GitHub</span>
          <ExternalLink :size="16" />
        </a>
      </div>
    </div>
  </section>
</template>