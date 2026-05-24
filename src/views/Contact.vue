<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label reveal">Contact</span>
          <h1 class="page-hero-title reveal reveal-delay-1">联系我们</h1>
          <p class="reveal reveal-delay-2" style="font-size:var(--text-lg);line-height:2;margin-top:var(--space-6);">
            我们期待与您的每一次相遇<br>无论是品鉴预约、合作咨询还是媒体联络
          </p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="grid-2" style="align-items:start;">
          <div class="reveal-left">
            <span class="section-label">Get in Touch</span>
            <h2 class="heading-lg" style="margin:var(--space-4) 0 var(--space-10);">与美桦君昱取得联系</h2>

            <div style="display:flex;flex-direction:column;gap:var(--space-5);">
              <div style="display:flex;align-items:flex-start;gap:var(--space-4);padding:var(--space-5);border:1px solid rgba(125,25,35,0.06);border-radius:var(--radius-lg);">
                <div class="icon-block" style="flex-shrink:0;margin-bottom:0;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h5 style="font-weight:600;margin-bottom:var(--space-1);">庄园地址</h5>
                  <p style="font-size:var(--text-sm);color:var(--ink-500);">吉林省通化市集安市<br>美桦君昱葡萄酒庄园</p>
                </div>
              </div>
              <div style="display:flex;align-items:flex-start;gap:var(--space-4);padding:var(--space-5);border:1px solid rgba(125,25,35,0.06);border-radius:var(--radius-lg);">
                <div class="icon-block" style="flex-shrink:0;margin-bottom:0;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <h5 style="font-weight:600;margin-bottom:var(--space-1);">联系电话</h5>
                  <p style="font-size:var(--text-sm);color:var(--ink-500);">+86 435-XXXX-XXXX<br>周一至周日 9:00-18:00</p>
                </div>
              </div>
              <div style="display:flex;align-items:flex-start;gap:var(--space-4);padding:var(--space-5);border:1px solid rgba(125,25,35,0.06);border-radius:var(--radius-lg);">
                <div class="icon-block" style="flex-shrink:0;margin-bottom:0;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h5 style="font-weight:600;margin-bottom:var(--space-1);">电子邮箱</h5>
                  <p style="font-size:var(--text-sm);color:var(--ink-500);">info@meihuajunyu.com<br>media@meihuajunyu.com</p>
                </div>
              </div>
              <div style="display:flex;align-items:flex-start;gap:var(--space-4);padding:var(--space-5);border:1px solid rgba(125,25,35,0.06);border-radius:var(--radius-lg);">
                <div class="icon-block" style="flex-shrink:0;margin-bottom:0;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h5 style="font-weight:600;margin-bottom:var(--space-1);">营业时间</h5>
                  <p style="font-size:var(--text-sm);color:var(--ink-500);">品鉴厅：每日 10:00-18:00<br>庄园导览：请提前预约</p>
                </div>
              </div>
            </div>
          </div>

          <div class="reveal-right">
            <div class="card" style="padding:var(--space-8);">
              <h3 class="heading-md" style="margin-bottom:var(--space-2);">发送消息</h3>
              <p style="color:var(--ink-500);font-size:var(--text-sm);margin-bottom:var(--space-8);">我们会在 24 小时内回复您的咨询。</p>
              <form @submit.prevent="handleSubmit" style="display:flex;flex-direction:column;gap:var(--space-5);">
                <div>
                  <label class="form-label" for="name">姓名 *</label>
                  <input id="name" v-model="form.name" type="text" required class="form-input" placeholder="请输入您的姓名">
                </div>
                <div>
                  <label class="form-label" for="email">邮箱 *</label>
                  <input id="email" v-model="form.email" type="email" required class="form-input" placeholder="请输入您的邮箱">
                </div>
                <div>
                  <label class="form-label" for="phone">电话</label>
                  <input id="phone" v-model="form.phone" type="tel" class="form-input" placeholder="请输入您的电话">
                </div>
                <div>
                  <label class="form-label" for="inquiry">咨询类型 *</label>
                  <select id="inquiry" v-model="form.inquiry" required class="form-input" style="color:var(--ink-500);">
                    <option value="" disabled>请选择咨询类型</option>
                    <option value="tasting">品鉴预约</option>
                    <option value="event">企业活动</option>
                    <option value="media">媒体合作</option>
                    <option value="distribution">经销合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label class="form-label" for="message">留言 *</label>
                  <textarea id="message" v-model="form.message" rows="4" required class="form-input" placeholder="请输入您的留言"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">
                  {{ submitted ? '消息已发送' : '发送消息' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-block">
      <div class="cta-block-content">
        <h2 class="cta-block-title reveal">亲临庄园</h2>
        <p class="cta-block-text reveal reveal-delay-1">吉林省通化市集安市 · 长白山南麓，鸭绿江畔 · 我们期待您的到来。</p>
        <router-link to="/experience" class="btn btn-cta-filled reveal reveal-delay-2">了解庄园体验</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const submitted = ref(false)

const form = reactive({
  name: '', email: '', phone: '', inquiry: '', message: ''
})

function handleSubmit() {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 3000)
}

useScrollReveal()
</script>
