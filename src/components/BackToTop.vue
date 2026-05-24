<template>
  <button :class="['back-to-top', { visible: show }]" aria-label="返回顶部" @click="scrollTop">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const show = ref(false)

function onScroll() { show.value = window.scrollY > 600 }
function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
