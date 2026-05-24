<template>
  <nav :class="['nav', { scrolled: isScrolled }]" role="navigation" aria-label="主导航">
    <div class="nav-brand">
      <router-link to="/">
        <img src="@/assets/img/logo-nav.png" alt="美桦君昱" class="nav-logo-img">
      </router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/" exact-active-class="active">首页</router-link></li>
      <li><router-link to="/brand-story" active-class="active">品牌故事</router-link></li>
      <li><router-link to="/products" active-class="active">产品系列</router-link></li>
      <li><router-link to="/terroir" active-class="active">风土</router-link></li>
      <li><router-link to="/experience" active-class="active">庄园之旅</router-link></li>
      <li><router-link to="/news" active-class="active">新闻动态</router-link></li>
      <li><router-link to="/contact" active-class="active">联系我们</router-link></li>
    </ul>
    <button class="nav-toggle" aria-label="打开菜单" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div :class="['mobile-nav', { open: mobileOpen }]" aria-hidden="!mobileOpen">
    <button class="mobile-nav-close" aria-label="关闭菜单" @click="mobileOpen = false">&times;</button>
    <router-link to="/" @click="mobileOpen = false">首页</router-link>
    <router-link to="/brand-story" @click="mobileOpen = false">品牌故事</router-link>
    <router-link to="/products" @click="mobileOpen = false">产品系列</router-link>
    <router-link to="/terroir" @click="mobileOpen = false">风土</router-link>
    <router-link to="/experience" @click="mobileOpen = false">庄园之旅</router-link>
    <router-link to="/news" @click="mobileOpen = false">新闻动态</router-link>
    <router-link to="/contact" @click="mobileOpen = false">联系我们</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() { isScrolled.value = window.scrollY > 60 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
