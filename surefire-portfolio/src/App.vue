<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Zap, Layers } from 'lucide-vue-next'

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TechStack from './components/TechStack.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Timeline from './components/Timeline.vue'
import Loader from './components/Loader.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

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

    <section class="py-16 md:py-24 bg-slate-900/50 overflow-hidden">
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div data-aos="fade-right" class="order-2 lg:order-1">
          <h3 class="text-blue-400 font-mono mb-2 tracking-tighter">{{ t('services.subtitle') }}</h3>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{{ t('services.title') }}</h2>
          
          <div class="space-y-8 mt-10">
            <div class="flex gap-4">
              <div class="shrink-0 mt-1 text-emerald-400"><Zap /></div>
              <div>
                <h4 class="text-white font-bold text-lg">{{ t('services.api_title') }}</h4>
                <p class="text-slate-400 text-sm leading-relaxed text-pretty">
                  {{ t('services.api_desc') }}
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="shrink-0 mt-1 text-blue-400"><Layers /></div>
              <div>
                <h4 class="text-white font-bold text-lg">{{ t('services.front_title') }}</h4>
                <p class="text-slate-400 text-sm leading-relaxed text-pretty">
                  {{ t('services.front_desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          data-aos="fade-left" 
          class="order-1 lg:order-2 bg-[#0d1117] rounded-2xl p-4 md:p-6 border border-slate-700 shadow-2xl font-mono text-[12px] md:text-sm w-full overflow-hidden"
        >
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          <div class="overflow-x-auto custom-scrollbar">
            <pre class="text-blue-300 leading-relaxed"><code><span class="text-purple-400">class</span> <span class="text-yellow-300">Developer</span>:
    <span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self):
        self.name = <span class="text-emerald-300">"Steven Hu"</span>
        self.skills = [<span class="text-emerald-300">"Vue"</span>, <span class="text-emerald-300">"Django"</span>, <span class="text-emerald-300">"Laravel"</span>]

    <span class="text-purple-400">def</span> <span class="text-blue-400">create_solution</span>(self):
        <span class="text-purple-400">return</span> <span class="text-emerald-300">"Success!"</span></code></pre>
          </div>
        </div>

      </div>
    </section>

    <TechStack id="about" />
    <Timeline />
    <Projects id="progetti" />
    <Footer />
  </div>
</template>

<style>
/* Per rendere lo scroll del codice più carino */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 10px;
}
</style>