<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
onMounted(() => {
  setTimeout(() => loading.value = false, 2000)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-200 bg-dark-bg flex flex-col items-center justify-center">
      <div class="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <p class="mt-4 text-blue-400 font-mono tracking-tighter animate-pulse">SUREFIRE_PORTFOLIO_v2.init()</p>
    </div>
  </Transition>
</template>