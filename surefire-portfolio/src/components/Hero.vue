<script setup>
import { useI18n } from 'vue-i18n'
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

    <div class="container mx-auto px-6 z-10 text-center">
      <h4 data-aos="fade-down" class="text-blue-400 font-mono mb-4 tracking-widest uppercase">
        {{ t('hero.role') }}
      </h4>
      
      <h1 data-aos="fade-up" class="text-6xl md:text-8xl font-bold text-white mb-6">
        Steven <span class="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Hu</span>
      </h1>

      <img 
        data-aos="fade-up" 
        src="/img/logo-1.png" 
        alt="Steven Hu Logo" 
        width="200" 
        height="200"
        class="w-40 md:w-50 mx-auto invert opacity-80 hover:opacity-100 transition-opacity"
      >

      <p data-aos="fade-up" data-aos-delay="200" class="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 text-pretty">
        <i18n-t keypath="hero.description" scope="global">
          <template #vue>
            <span class="text-slate-200 font-semibold">Vue.js</span>
          </template>
          <template #stack>
            <span class="text-slate-200 font-semibold">Python/Django, TypeScript, Laravel</span>
          </template>
        </i18n-t>
      </p>

      <div data-aos="zoom-in" data-aos-delay="400" class="flex flex-col md:flex-row justify-center items-center gap-6">
        <a href="#progetti" class="w-full md:w-auto bg-white text-dark-bg px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-white/5">
          {{ t('hero.button') }}
        </a>
        
        <div class="flex items-center gap-6 border-t md:border-t-0 md:border-l border-slate-700 pt-6 md:pt-0 md:ml-4 md:pl-6">
          <a href="https://github.com/surefire-hu" target="_blank" class="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub Profile">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/steven-hu-775082316/" target="_blank" class="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin />
          </a>
          <a href="mailto:surefire.hu2001@gmail.com" class="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Send Email">
            <Mail />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>