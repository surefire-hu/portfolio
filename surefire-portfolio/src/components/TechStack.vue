<script setup>
import { 
  Code2, Terminal, Database, Layout, 
  Cpu, Globe, Zap, Layers 
} from 'lucide-vue-next'

const categories = [
  {
    title: "Backend Core",
    icon: Terminal,
    color: "text-emerald-400",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django REST", level: "Intermediate" },
      { name: "Laravel", level: "Basic" },
      { name: "TypeScript", level: "Advanced" },
      { name: "PHP", level: "Basic" }
    ]
  },
  {
    title: "Frontend Experience",
    icon: Layout,
    color: "text-blue-400",
    skills: [
      { name: "Vue.js", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Nuxt.js", level: "Advanced" }
    ]
  },
  {
    title: "Data & DevOps",
    icon: Database,
    color: "text-purple-400",
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git", level: "Expert" }
    ]
  }
]
</script>

<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <div class="absolute right-0 top-0 -z-10 opacity-20">
      <div class="w-72 h-72 bg-blue-600 rounded-full blur-[100px]"></div>
    </div>

    <div class="container mx-auto px-6">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-white mb-4">Tech Stack & Competenze</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Il mio arsenale tecnologico è in continua evoluzione. Attualmente focalizzato sulla creazione di 
          API performanti con <span class="text-emerald-400 font-mono">Python/Django</span>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(cat, index) in categories" 
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="p-8 rounded-3xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all group"
        >
          <div class="flex items-center gap-4 mb-8">
            <div :class="`p-3 rounded-2xl bg-slate-900 ${cat.color} group-hover:scale-110 transition-transform font-bold`">
              <component :is="cat.icon" />
            </div>
            <h3 class="text-xl font-bold text-white">{{ cat.title }}</h3>
          </div>

          <div class="space-y-6">
            <div v-for="skill in cat.skills" :key="skill.name">
              <div class="flex justify-between mb-2">
                <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                <span class="text-slate-500 text-xs uppercase tracking-widest">{{ skill.level }}</span>
              </div>
              <div class="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-linear-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000"
                  :style="{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '80%' : '60%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>