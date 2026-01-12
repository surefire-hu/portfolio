<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-24 bg-slate-900/30">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-16 text-center">{{ t('timeline.title') }}</h2>
      
      <div class="max-w-4xl mx-auto">
        <div data-aos="fade-left" class="relative pl-10 pb-12 border-l-2 border-blue-500/30 last:pb-0 last:border-transparent">
          <div class="absolute -left-2.25 top-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] z-10"></div>
          
          <div class="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
            <span class="text-blue-400 font-mono text-sm font-bold uppercase tracking-wider">
              2025 - {{ t('timeline.present') }}
            </span>
            <span class="hidden md:block text-slate-700">•</span>
            <h3 class="text-xl font-bold text-white">{{ t('timeline.freelancer.role') }}</h3>
          </div>
          <p class="text-slate-400 leading-relaxed text-pretty">
            {{ t('timeline.freelancer.desc') }}
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" class="relative pl-10 pb-12 border-l-2 border-slate-700 last:pb-0 last:border-transparent">
          <div class="absolute -left-2.25 top-0 w-4 h-4 bg-slate-700 rounded-full z-10"></div>
          
          <div class="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
            <span class="text-slate-500 font-mono text-sm">2024 - 2025</span>
            <span class="hidden md:block text-slate-800">•</span>
            <h3 class="text-xl font-bold text-slate-200">{{ t('timeline.firstjob.role') }}</h3>
          </div>
          <p class="text-slate-400 leading-relaxed text-pretty">
            {{ t('timeline.firstjob.desc') }}
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="400" class="relative pl-10 border-l-2 border-transparent">
          <div class="absolute -left-2.25 top-0 w-4 h-4 bg-slate-800 rounded-full z-10"></div>
          
          <div class="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
            <span class="text-slate-500 font-mono text-sm">2024</span>
            <span class="hidden md:block text-slate-800">•</span>
            <h3 class="text-xl font-bold text-slate-300">{{ t('timeline.study.role') }}</h3>
          </div>
          <p class="text-slate-500 leading-relaxed text-pretty">
            {{ t('timeline.study.desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.last\:border-transparent {
  border-image: linear-gradient(to bottom, #1e293b, transparent) 1;
}
</style>