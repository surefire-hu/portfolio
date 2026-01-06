<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TechStack from './components/TechStack.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Timeline from './components/Timeline.vue'
import Loader from './components/Loader.vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  })
})
</script>

<template>
<Loader />
  <div class="bg-dark-bg min-h-screen">
    <Navbar />
    <Hero id="home" />
    <section class="py-24 bg-slate-900/50">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h3 class="text-blue-400 font-mono mb-2">I MIEI SERVIZI</h3>
          <h2 class="text-4xl font-bold text-white mb-6">Soluzioni End-to-End</h2>
          
          <div class="space-y-8 mt-10">
            <div class="flex gap-4">
              <div class="mt-1 text-emerald-400"><Zap /></div>
              <div>
                <h4 class="text-white font-bold text-lg">Sviluppo API RESTful</h4>
                <p class="text-slate-400 text-sm">Progettazione di backend robusti con Django, Typescipt o Laravel, pronti per essere consumati da qualsiasi frontend o app mobile.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="mt-1 text-blue-400"><Layers /></div>
              <div>
                <h4 class="text-white font-bold text-lg">Frontend Reattivo</h4>
                <p class="text-slate-400 text-sm">Interfacce utente dinamiche e veloci con Vue.js 3, con una maniacale attenzione alla User Experience (UX).</p>
              </div>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left" class="bg-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl font-mono text-sm">
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre class="text-blue-300"><code><span class="text-purple-400">class</span> <span class="text-yellow-300">Developer</span>:
        <span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self):
            self.name = <span class="text-emerald-300">"Steven Hu"</span>
            self.skills = [<span class="text-emerald-300">"Vue"</span>, <span class="text-emerald-300">"Django"</span>, <span class="text-emerald-300">"Laravel"</span>, <span class="text-emerald-300">"Typescript"</span>]

        <span class="text-purple-400">def</span> <span class="text-blue-400">create_solution</span>(self):
            <span class="text-purple-400">return</span> <span class="text-emerald-300">"Success!"</span></code></pre>
        </div>
      </div>
    </section>
    <TechStack id="about" />
    <Projects id="progetti" />
    <Timeline />
    <Footer />
  </div>
</template>