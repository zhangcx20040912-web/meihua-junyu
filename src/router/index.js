import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/brand-story', name: 'BrandStory', component: () => import('@/views/BrandStory.vue') },
  { path: '/products', name: 'Products', component: () => import('@/views/Products.vue') },
  { path: '/products/:id', name: 'ProductDetail', component: () => import('@/views/ProductDetail.vue') },
  { path: '/terroir', name: 'Terroir', component: () => import('@/views/Terroir.vue') },
  { path: '/experience', name: 'Experience', component: () => import('@/views/Experience.vue') },
  { path: '/news', name: 'News', component: () => import('@/views/News.vue') },
  { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})
