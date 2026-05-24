<template>
  <div class="app-shell">
    <canvas ref="canvas" id="inkwash-canvas"></canvas>

    <NavBar />

    <main class="app-main">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <SiteFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import BackToTop from '@/components/BackToTop.vue'

const canvas = ref(null)

let animId = null
let time = 0
let mouseX = -200
let mouseY = -200
let targetMX = -200
let targetMY = -200

const washes = []
const particles = []
const washCount = 8
const particleCount = 40

function initWashes(w, h) {
  washes.length = 0
  particles.length = 0

  // Burgundy washes
  for (let i = 0; i < washCount - 2; i++) {
    washes.push({
      x: w * (0.1 + Math.random() * 0.8),
      y: h * (0.1 + Math.random() * 0.8),
      baseX: 0, baseY: 0,
      size: w * (0.2 + Math.random() * 0.35),
      hue: 340 + Math.random() * 25,
      sat: 22 + Math.random() * 24,
      light: 16 + Math.random() * 10,
      phase: Math.random() * Math.PI * 2,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.1,
      distortion: 0.3 + Math.random() * 0.5,
      layers: 2 + Math.floor(Math.random() * 3)
    })
    washes[i].baseX = washes[i].x
    washes[i].baseY = washes[i].y
  }

  // Golden/amber accent washes
  for (let i = 0; i < 2; i++) {
    washes.push({
      x: w * (0.15 + Math.random() * 0.7),
      y: h * (0.15 + Math.random() * 0.7),
      baseX: 0, baseY: 0,
      size: w * (0.15 + Math.random() * 0.22),
      hue: 28 + Math.random() * 10,
      sat: 15 + Math.random() * 15,
      light: 28 + Math.random() * 14,
      phase: Math.random() * Math.PI * 2,
      speedX: (Math.random() - 0.5) * 0.08,
      speedY: (Math.random() - 0.5) * 0.07,
      distortion: 0.25 + Math.random() * 0.35,
      layers: 1 + Math.floor(Math.random() * 2)
    })
    const idx = washCount - 2 + i
    washes[idx].baseX = washes[idx].x
    washes[idx].baseY = washes[idx].y
  }

  // Floating light particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 1 + Math.random() * 2.5,
      opacity: 0.15 + Math.random() * 0.35,
      speedY: -0.05 - Math.random() * 0.2,
      speedX: (Math.random() - 0.5) * 0.15,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02
    })
  }
}

function drawFrame() {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  const w = c.width
  const h = c.height

  time += 0.003

  mouseX += (targetMX - mouseX) * 0.025
  mouseY += (targetMY - mouseY) * 0.025

  // Slow clear — builds up organic trails
  ctx.fillStyle = 'rgba(250,246,241,0.035)'
  ctx.fillRect(0, 0, w, h)

  const mx = mouseX
  const my = mouseY

  for (const wash of washes) {
    // Gentle autonomous drift
    wash.baseX += wash.speedX + Math.sin(time * 0.6 + wash.phase) * 0.5
    wash.baseY += wash.speedY + Math.cos(time * 0.5 + wash.phase) * 0.4

    // Wrap
    if (wash.baseX < -wash.size * 0.5) wash.baseX = w + wash.size * 0.5
    if (wash.baseX > w + wash.size * 0.5) wash.baseX = -wash.size * 0.5
    if (wash.baseY < -wash.size * 0.5) wash.baseY = h + wash.size * 0.5
    if (wash.baseY > h + wash.size * 0.5) wash.baseY = -wash.size * 0.5

    // Subtle mouse influence — gentle push, not attraction
    const dx = wash.baseX - mx
    const dy = wash.baseY - my
    const dist = Math.hypot(dx, dy)
    if (dist < 600 && mx > 0) {
      const force = (1 - dist / 600) * 0.3
      wash.baseX += dx * force * 0.003
      wash.baseY += dy * force * 0.003
    }

    const cx = wash.baseX
    const cy = wash.baseY

    // Draw multiple translucent layers for watercolor depth
    for (let l = 0; l < wash.layers; l++) {
      const lx = cx + Math.sin(time * 0.7 + wash.phase + l) * wash.size * 0.25
      const ly = cy + Math.cos(time * 0.6 + wash.phase + l) * wash.size * 0.2
      const lSize = wash.size * (0.7 + l * 0.25)
      const alpha = 0.012 + Math.sin(time * 0.35 + wash.phase + l * 0.8) * 0.004

      // Create organic wash shape using multiple overlapping ellipses
      ctx.save()
      ctx.beginPath()

      const segments = 16
      for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        const r = lSize * (
          1 + wash.distortion * 0.4 * Math.sin(angle * 3 + time * 0.4 + wash.phase + l) *
          Math.cos(angle * 2 + wash.phase * 0.7)
        )
        const sx = lx + Math.cos(angle) * r
        const sy = ly + Math.sin(angle) * r
        if (i === 0) ctx.moveTo(sx, sy)
        else ctx.lineTo(sx, sy)
      }
      ctx.closePath()

      // Watercolor edge — soft gradient from center
      const grad = ctx.createRadialGradient(lx, ly, 0, lx, ly, lSize)
      const hueShift = wash.hue + l * 8
      grad.addColorStop(0, `hsla(${hueShift}, ${wash.sat}%, ${wash.light + 14}%, ${alpha * 2.2})`)
      grad.addColorStop(0.35, `hsla(${hueShift}, ${wash.sat}%, ${wash.light}%, ${alpha * 1.4})`)
      grad.addColorStop(0.7, `hsla(${hueShift}, ${wash.sat}%, ${wash.light - 4}%, ${alpha * 0.5})`)
      grad.addColorStop(1, `hsla(${hueShift}, ${wash.sat}%, ${wash.light}%, 0)`)

      ctx.fillStyle = grad
      ctx.fill()
      ctx.restore()
    }
  }

  // Floating light particles
  for (const p of particles) {
    p.y += p.speedY
    p.x += p.speedX + Math.sin(time + p.phase) * 0.1
    if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
    if (p.x < -10) p.x = w + 10
    if (p.x > w + 10) p.x = -10

    const pulse = Math.sin(time * p.pulseSpeed * 60 + p.phase) * 0.5 + 0.5
    const alpha = p.opacity * pulse
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(184,148,110,${alpha * 0.7})`
    ctx.fill()
    // Soft glow
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(184,148,110,${alpha * 0.12})`
    ctx.fill()
  }

  // Mouse brush strokes — ink bleed effect
  if (mx > 0 && my > 0 && mx < w && my < h) {
    for (let i = 0; i < 3; i++) {
      const sx = mx + (Math.random() - 0.5) * 100
      const sy = my + (Math.random() - 0.5) * 100
      const ss = 30 + Math.random() * 70
      const bleed = 18 + Math.random() * 40

      // Ink bleed — irregular shape
      ctx.beginPath()
      const pts = 8
      for (let j = 0; j < pts; j++) {
        const a = (j / pts) * Math.PI * 2
        const r = ss + Math.sin(a * 2.5 + time * 2) * bleed * 0.6 + Math.cos(a * 3.7) * bleed * 0.3
        const px = sx + Math.cos(a) * r
        const py = sy + Math.sin(a) * r
        if (j === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()

      const inkGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, ss + bleed)
      inkGrad.addColorStop(0, 'rgba(125,25,35,0.025)')
      inkGrad.addColorStop(0.5, 'rgba(110,20,30,0.012)')
      inkGrad.addColorStop(1, 'rgba(125,25,35,0)')
      ctx.fillStyle = inkGrad
      ctx.fill()
    }

    // Single golden accent stroke near mouse
    const gx = mx + (Math.random() - 0.5) * 60
    const gy = my + (Math.random() - 0.5) * 60
    const gGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 25 + Math.random() * 30)
    gGrad.addColorStop(0, 'rgba(184,148,110,0.018)')
    gGrad.addColorStop(1, 'rgba(184,148,110,0)')
    ctx.beginPath()
    ctx.arc(gx, gy, 25 + Math.random() * 30, 0, Math.PI * 2)
    ctx.fillStyle = gGrad
    ctx.fill()
  }

  animId = requestAnimationFrame(drawFrame)
}

function resize() {
  const c = canvas.value
  if (!c) return
  c.width = window.innerWidth
  c.height = window.innerHeight
  initWashes(c.width, c.height)
}

function onMouseMove(e) {
  targetMX = e.clientX
  targetMY = e.clientY
}

function onMouseLeave() {
  targetMX = -200
  targetMY = -200
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    targetMX = e.touches[0].clientX
    targetMY = e.touches[0].clientY
  }
}

function onTouchEnd() {
  targetMX = -200
  targetMY = -200
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('touchmove', onTouchMove, { passive: true })
  window.addEventListener('touchend', onTouchEnd)
  drawFrame()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', onTouchEnd)
})
</script>
