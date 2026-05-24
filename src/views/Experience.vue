<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label reveal">The Experience</span>
          <h1 class="page-hero-title reveal reveal-delay-1">庄园之旅</h1>
          <p class="reveal reveal-delay-2" style="font-size:var(--text-lg);line-height:2;margin-top:var(--space-6);max-width:560px;">
            沉浸式体验从葡萄园到酒杯的完整旅程<br>感受集安风土在舌尖流淌的魔力
          </p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="timeline-v">
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">01</div>
            <div class="timeline-v-content">
              <h4>庄园漫步 — 穿越千亩葡萄园</h4>
              <p>跟随酿酒师走进千亩有机葡萄园，穿行于威代尔、北冰红、赤霞珠的藤蔓之间。了解北纬 41&deg; 冰酒产区的独特风土与有机种植哲学。远眺长白山，近听鸭绿江，感受天地之美。约 1 小时。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?w=600&q=80" alt="庄园漫步" loading="lazy"
                 class="timeline-v-img">
          </div>
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">02</div>
            <div class="timeline-v-content">
              <h4>酒窖探秘 — 橡木桶中的时光魔法</h4>
              <p>步入恒温恒湿的地下酒窖，数百个法国橡木桶静静陈列。橡木与酒液交融的醇香弥漫在空气中。了解从葡萄到佳酿的完整酿造过程，感受传统工艺与现代技术的完美融合。约 45 分钟。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&q=80" alt="酒窖探秘" loading="lazy"
                 class="timeline-v-img">
          </div>
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">03</div>
            <div class="timeline-v-content">
              <h4>私人品鉴 — 五款佳酿的感官之旅</h4>
              <p>在庄园专属品鉴室中，由资深侍酒师引导，品鉴从冰葡萄酒、起泡酒到干红、白兰地 XO 共 5 款精选佳酿。学习观色、闻香、品味的专业品鉴方法。约 1.5 小时。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80" alt="私人品鉴" loading="lazy"
                 class="timeline-v-img">
          </div>
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">04</div>
            <div class="timeline-v-content">
              <h4>精品晚宴 — 酒食搭配的艺术</h4>
              <p>在庄园餐厅享用由主厨精心设计的精品晚宴，每道菜品均搭配美桦君昱精选佳酿。从开胃菜到甜点，体验酒食搭配的极致艺术。约 2 小时。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="精品晚宴" loading="lazy"
                 class="timeline-v-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section class="section-sm" style="background:var(--cream-50);">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-label reveal">Packages</span>
          <h2 class="heading-xl reveal" style="margin:var(--space-4) 0;">体验套餐</h2>
        </div>
        <div class="grid-3">
          <div class="card reveal" style="text-align:center;padding:var(--space-10) var(--space-6);">
            <div class="card-tag" style="margin-bottom:var(--space-2);">CLASSIC</div>
            <h4 style="font-family:var(--font-display);font-size:var(--text-2xl);font-weight:700;margin-bottom:var(--space-4);">经典品鉴之旅</h4>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-bottom:var(--space-6);">庄园漫步 + 酒窖探秘 + 3 款佳酿品鉴，适合初次探访的葡萄酒爱好者。</p>
            <div style="font-family:var(--font-latin);font-size:var(--text-lg);color:var(--wine-500);margin-bottom:var(--space-6);">约 2.5 小时</div>
            <router-link to="/contact" class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;">预约体验</router-link>
          </div>
          <div class="card reveal reveal-delay-1" style="text-align:center;padding:var(--space-10) var(--space-6);border-color:rgba(125,25,35,0.2);">
            <div class="card-tag" style="color:var(--wine-500);margin-bottom:var(--space-2);">PREMIUM &starf;</div>
            <h4 style="font-family:var(--font-display);font-size:var(--text-2xl);font-weight:700;margin-bottom:var(--space-4);">深度品鉴之旅</h4>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-bottom:var(--space-6);">全程体验 + 5 款佳酿品鉴 + 精品晚宴，含专属侍酒师一对一服务。</p>
            <div style="font-family:var(--font-latin);font-size:var(--text-lg);color:var(--wine-500);margin-bottom:var(--space-6);">约 5 小时</div>
            <router-link to="/contact" class="btn btn-primary btn-sm" style="width:100%;justify-content:center;">预约体验</router-link>
          </div>
          <div class="card reveal reveal-delay-2" style="text-align:center;padding:var(--space-10) var(--space-6);">
            <div class="card-tag" style="margin-bottom:var(--space-2);">PRIVATE</div>
            <h4 style="font-family:var(--font-display);font-size:var(--text-2xl);font-weight:700;margin-bottom:var(--space-4);">私人订制体验</h4>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-bottom:var(--space-6);">量身订制的专属体验，适用于企业活动、私人派对或特别纪念日。</p>
            <div style="font-family:var(--font-latin);font-size:var(--text-lg);color:var(--wine-500);margin-bottom:var(--space-6);">按需订制</div>
            <router-link to="/contact" class="btn btn-ghost btn-sm" style="width:100%;justify-content:center;">咨询详情</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-block">
      <div class="cta-block-content">
        <h2 class="cta-block-title reveal">预约探访美桦君昱</h2>
        <p class="cta-block-text reveal reveal-delay-1">无论私人导览、精品晚宴还是企业活动，我们都将为您创造一生难忘的回忆。</p>
        <router-link to="/contact" class="btn btn-cta-filled reveal reveal-delay-2">预约品鉴体验</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
