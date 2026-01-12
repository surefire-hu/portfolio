<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects } from '../data.js'
import ProjectCard from './ProjectCard.vue'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-vue-next'

const { t } = useI18n()
const slider = ref(null)
const activeCategory = ref('Tutti')
const categories = ['Tutti', 'FullStack', 'Frontend']

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Tutti') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const scroll = (direction) => {
  const scrollAmount = slider.value.clientWidth * 0.8
  slider.value.scrollBy({ 
    left: direction === 'left' ? -scrollAmount : scrollAmount, 
    behavior: 'smooth' 
  })
}
</script>

<template>
  <section id="progetti" class="py-24 bg-dark-bg overflow-hidden border-t border-white/5">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 class="text-4xl font-bold text-white mb-4">{{ t('nav.projects') }}</h2>
          
          <div class="flex gap-2">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'px-4 py-1.5 rounded-full text-xs font-bold transition-all border',
                activeCategory === cat 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-slate-700 text-slate-400 hover:border-slate-500'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
        
        <div class="hidden md:flex gap-3">
          <button 
            @click="scroll('left')" 
            class="p-3 border border-slate-700 rounded-xl text-white hover:bg-slate-800 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft :size="20" />
          </button>
          <button 
            @click="scroll('right')" 
            class="p-3 border border-slate-700 rounded-xl text-white hover:bg-slate-800 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight :size="20" />
          </button>
        </div>
      </div>

      <div 
        ref="slider"
        class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 custom-scroll"
      >
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] snap-start h-full"
        >
          <ProjectCard :project="project" />
        </div>
        
        <div v-if="filteredProjects.length === 0" class="w-full py-20 text-center text-slate-500 italic">
          Nessun progetto trovato in questa categoria.
        </div>
      </div>

      <div class="mt-12 text-center">
        <a 
          href="https://github.com/surefire-hu" 
          target="_blank"
          class="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all border-b border-transparent hover:border-blue-500 pb-1"
        >
          <span>{{ t('footer.view_github' || 'Vedi tutti su GitHub') }}</span>
          <ExternalLink :size="16" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.custom-scroll {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
</style>