<script setup>
import { ExternalLink, Github } from 'lucide-vue-next'

defineProps(['project'])
</script>

<template>
  <div 
    data-aos="fade-up"
    class="group relative bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
  >
    <div class="aspect-video overflow-hidden">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
    </div>

    <div class="p-6">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {{ project.title }}
        </h3>
        <div class="flex gap-3">
          <a :href="project.link" target="_blank" class="text-slate-400 hover:text-white transition-colors">
            <Github :size="20" />
          </a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            <ExternalLink :size="20" />
          </a>
        </div>
      </div>

      <p class="text-slate-400 text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="text-[10px] uppercase tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>