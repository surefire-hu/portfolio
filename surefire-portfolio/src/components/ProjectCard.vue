<script setup>
import { useI18n } from 'vue-i18n'
import { ExternalLink, Github } from 'lucide-vue-next'

const { locale } = useI18n()
defineProps(['project'])
</script>

<template>
  <div 
    data-aos="fade-up"
    class="group relative bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
  >
    <div class="aspect-video overflow-hidden relative">
      <img 
        :src="project.image" 
        :alt="project.title"
        loading="lazy"
        width="400" 
        height="225"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
    </div>

    <div class="p-6 flex flex-col grow">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {{ project.title }}
        </h3>
        <div class="flex gap-3 z-20">
          <a :href="project.github" target="_blank" class="text-slate-400 hover:text-white transition-colors" :aria-label="'Github ' + project.title">
            <Github :size="20" />
          </a>
          <a :href="project.link" target="_blank" class="text-slate-400 hover:text-white transition-colors" :aria-label="'Link ' + project.title">
            <ExternalLink :size="20" />
          </a>
        </div>
      </div>

      <p class="text-slate-400 text-sm mb-4 line-clamp-3 grow">
        {{ project.description[locale] }}
      </p>

      <div class="flex flex-wrap gap-2 mt-auto">
        <span 
          v-for="tech in project.tech" 
          :key="tech"
          class="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>