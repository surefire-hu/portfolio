<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Mail, Github, Linkedin, MessageCircle, X } from 'lucide-vue-next'

const { t } = useI18n()
const isWeChatOpen = ref(false)
</script>

<template>
  <footer class="bg-dark-bg pt-20 pb-10 border-t border-white/5">
    <div class="container mx-auto px-6 text-center">
      
      <h2 class="text-3xl font-bold text-white mb-4">{{ t('footer.title') }}</h2>
      <p class="text-slate-400 mb-10 max-w-lg mx-auto">
        {{ t('footer.subtitle') }}
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <a href="mailto:surefire.hu2001@gmail.com" class="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/10 transition-all">
          <Mail :size="18" class="text-blue-400" />
          <span>Email</span>
        </a>
        <a href="https://wa.me/393791238135" target="_blank" class="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-2xl border border-white/10 transition-all">
          <MessageCircle :size="18" class="text-emerald-400" />
          <span>WhatsApp</span>
        </a>
      </div>

      <div class="flex justify-center items-center gap-8 mb-10">
        <a href="https://github.com/surefire-hu" target="_blank" class="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/steven-hu-775082316/" target="_blank" class="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
          <Linkedin />
        </a>
        
        <button 
          @click="isWeChatOpen = true"
          class="group flex flex-col items-center focus:outline-none"
          aria-label="Show WeChat QR Code"
        >
          <span class="text-slate-500 group-hover:text-emerald-400 transition-colors font-bold text-xl tracking-tighter italic">
            WeChat
          </span>
        </button>

        <Transition name="fade">
          <div v-if="isWeChatOpen" class="fixed inset-0 z-100 flex items-center justify-center p-6">
            <div @click="isWeChatOpen = false" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            <div class="relative bg-white p-6 rounded-3xl shadow-2xl max-w-sm w-full flex flex-col items-center">
              <button 
                @click="isWeChatOpen = false"
                class="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors"
                aria-label="Close modal"
              >
                <X :size="32" />
              </button>

              <h3 class="text-dark-bg font-bold text-xl mb-4">{{ t('footer.qr_title') }}</h3>
              
              <div class="bg-slate-100 p-2 rounded-2xl">
                <img src="/img/wechat.jpg" alt="WeChat QR Code Steven Hu" width="256" height="256" class="w-64 h-64 rounded-xl object-cover" />
              </div>

              <p class="text-slate-500 text-sm mt-4 font-medium">{{ t('footer.qr_text') }}</p>
            </div>
          </div>
        </Transition>
      </div>

      <p class="text-slate-600 text-sm">
        &copy; {{ new Date().getFullYear() }} Steven Hu. Built with Vue 3.
      </p>
    </div>
  </footer>
</template>