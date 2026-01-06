<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

    <div class="container mx-auto px-6 z-10 text-center">
      <h4 data-aos="fade-down" class="text-blue-400 font-mono mb-4 tracking-widest">
        FULL-STACK DEVELOPER
      </h4>
      
      <h1 data-aos="fade-up" class="text-6xl md:text-8xl font-bold text-white mb-6">
        Steven <span class="bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Hu</span>
      </h1>

      <p data-aos="fade-up" data-aos-delay="200" class="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10">
        Specializzato nella costruzione di applicazioni moderne. 
        Dal design reattivo con <span class="text-slate-200 font-semibold">Vue.js</span> 
        alla logica backend complessa con <span class="text-slate-200 font-semibold">Python/Django</span>, <span class="text-slate-200 font-semibold">TypeScript</span> e <span class="text-slate-200 font-semibold">Laravel</span>.
      </p>

      <div data-aos="zoom-in" data-aos-delay="400" class="flex justify-center gap-6">
        <a href="#progetti" class="bg-white text-dark-bg px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
          Vedi Progetti
        </a>
        <div class="flex items-center gap-4 border-l border-slate-700 ml-4 pl-6">
          <a href="https://github.com/surefire-hu" class="text-slate-400 hover:text-white transition-colors"><Github /></a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
          <a href="mailto:surefire.hu2001@gmail.com" class="text-slate-400 hover:text-white transition-colors"><Mail /></a>
        </div>
      </div>
    </div>
  </section>
</template>