<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Terminal, Layout, Database } from 'lucide-vue-next'

const { t } = useI18n()

const categories = computed(() => [
  {
    title: t('about.categories.backend'),
    icon: Terminal,
    color: "text-emerald-400",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Django REST", level: "intermediate" },
      { name: "TypeScript", level: "advanced" },
      { name: "Laravel", level: "basic" },
      { name: "PHP", level: "basic" }
    ]
  },
  {
    title: t('about.categories.frontend'),
    icon: Layout,
    color: "text-blue-400",
    skills: [
      { name: "Vue.js", level: "expert" },
      { name: "JavaScript", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Nuxt.js", level: "advanced" },
      { name: "Nest.js", level: "intermediate" }
    ]
  },
  {
    title: t('about.categories.devops'),
    icon: Database,
    color: "text-purple-400",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MySQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Docker", level: "intermediate" },
      { name: "Git", level: "expert" }
    ]
  }
])

const getWidth = (level) => {
  const map = { expert: '95%', advanced: '80%', intermediate: '65%', basic: '45%' }
  return map[level] || '50%'
}
</script>

<template>
  <section id="about" class="py-24 relative overflow-hidden border-t border-white/5">
    <div class="absolute right-0 top-0 -z-10 opacity-20 pointer-events-none">
      <div class="w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6">
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-white mb-4">{{ t('about.title') }}</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-pretty">
          <i18n-t keypath="about.subtitle" scope="global">
            <template #stack>
              <span class="text-emerald-400 font-mono font-bold">Python/Django</span>
            </template>
          </i18n-t>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(cat, index) in categories" 
          :key="cat.title"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="p-8 rounded-3xl bg-slate-800/20 border border-slate-700/50 hover:border-blue-500/30 transition-all group"
        >
          <div class="flex items-center gap-4 mb-8">
            <div :class="`p-3 rounded-2xl bg-slate-900 ${cat.color} group-hover:scale-110 transition-transform`">
              <component :is="cat.icon" :size="24" />
            </div>
            <h3 class="text-xl font-bold text-white">{{ cat.title }}</h3>
          </div>

          <div class="space-y-6">
            <div v-for="skill in cat.skills" :key="skill.name" class="group/skill">
              <div class="flex justify-between mb-2">
                <span class="text-slate-200 font-medium group-hover/skill:text-white transition-colors">
                  {{ skill.name }}
                </span>
                <span class="text-slate-500 text-[10px] uppercase tracking-tighter font-mono">
                  {{ t(`about.levels.${skill.level}`) }}
                </span>
              </div>
              
              <div class="h-1.5 w-full bg-slate-900/50 rounded-full overflow-hidden border border-white/5">
                <div 
                  class="h-full bg-linear-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: getWidth(skill.level) }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>