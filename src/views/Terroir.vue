<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label reveal">Terroir</span>
          <h1 class="page-hero-title reveal reveal-delay-1">风土 · 集安之魂</h1>
          <p class="reveal reveal-delay-2" style="font-size:var(--text-lg);line-height:2;margin-top:var(--space-6);max-width:560px;">
            北纬 41&deg;，东经 126&deg;<br>长白山南麓与鸭绿江的交汇之处 — 中国冰酒的圣地
          </p>
        </div>
      </div>
      <div class="big-char" style="left:8%;bottom:5%;">土</div>
    </section>

    <!-- Geography -->
    <section class="section-sm">
      <div class="container container-narrow">
        <div class="grid-2-uneven">
          <div class="reveal-left">
            <span class="section-label">Geography</span>
            <h2 class="heading-lg" style="margin:var(--space-4) 0 var(--space-8);">地理坐标</h2>
            <p style="color:var(--ink-500);line-height:2.1;margin-bottom:var(--space-4);">
              集安，吉林省东南部的一座边境小城，坐落于长白山南麓，鸭绿江穿城而过。
              东经 126&deg;04'，北纬 40&deg;58' — 与世界冰酒之都加拿大尼亚加拉处于同一黄金纬度带，
              是亚洲唯一能够稳定生产冰葡萄酒的核心产区。
            </p>
            <p style="color:var(--ink-500);line-height:2.1;margin-bottom:var(--space-4);">
              长白山脉的天然屏障阻挡了来自西伯利亚的寒流，而鸭绿江的水汽润泽
              形成了独特的"半大陆半海洋性"气候 — 夏季温暖湿润，冬季严寒干燥，
              为冰葡萄的生长与自然冰冻提供了不可复制的自然条件。
            </p>
            <p style="color:var(--ink-500);line-height:2.1;">
              每年冬季，气温骤降至 -8&deg;C 以下，饱满的冰葡萄在藤上自然冰冻，
              等待凌晨时分的采收 — 这是一场与时间的赛跑，也是集安风土赋予的独特馈赠。
            </p>
          </div>
          <div class="reveal-right" style="border-radius:var(--radius-xl);overflow:hidden;aspect-ratio:1;">
            <img src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80" alt="集安风光" loading="lazy"
                 style="width:100%;height:100%;object-fit:cover;">
          </div>
        </div>
      </div>
    </section>

    <!-- Climate Stats -->
    <section class="section-sm" style="background:var(--cream-50);">
      <div class="container">
        <div class="grid-3">
          <div class="stat-card reveal">
            <div class="stat-number">41&deg;<span>N</span></div>
            <div class="stat-label">世界冰酒黄金纬度<br>与加拿大尼亚加拉同纬度</div>
          </div>
          <div class="stat-card reveal reveal-delay-1">
            <div class="stat-number">-10<span>&deg;C</span></div>
            <div class="stat-label">冬季极限最低温<br>冰葡萄自然冰冻的必需条件</div>
          </div>
          <div class="stat-card reveal reveal-delay-2">
            <div class="stat-number">45<span>天</span></div>
            <div class="stat-label">葡萄挂枝成熟期（冰冻前）<br>充分积累风味与糖分</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soil -->
    <section class="section-sm">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-label reveal">Soil</span>
          <h2 class="heading-xl reveal" style="margin:var(--space-4) 0;">三重土壤</h2>
          <p class="reveal reveal-delay-1" style="color:var(--ink-500);">长白山火山喷发留下的珍贵遗产 — 三种独特土壤的完美交织</p>
        </div>
        <div class="grid-3">
          <div class="stat-card reveal">
            <div class="stat-label" style="font-weight:700;font-size:var(--text-xl);color:var(--ink-900);">火山灰土壤</div>
            <p style="font-size:var(--text-sm);color:var(--ink-500);line-height:1.8;margin-top:var(--space-3);">富含矿物质与微量元素，赋予葡萄独特的矿物感与复杂的风味层次。</p>
          </div>
          <div class="stat-card reveal reveal-delay-1">
            <div class="stat-label" style="font-weight:700;font-size:var(--text-xl);color:var(--ink-900);">砂质壤土</div>
            <p style="font-size:var(--text-sm);color:var(--ink-500);line-height:1.8;margin-top:var(--space-3);">排水性极佳，促使葡萄根系深入地下，汲取深层养分与水分。</p>
          </div>
          <div class="stat-card reveal reveal-delay-2">
            <div class="stat-label" style="font-weight:700;font-size:var(--text-xl);color:var(--ink-900);">黏土</div>
            <p style="font-size:var(--text-sm);color:var(--ink-500);line-height:1.8;margin-top:var(--space-3);">良好的保水保肥能力，为葡萄提供稳定的水分供应与营养支持。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Yalu River Parallax -->
    <section class="parallax-section">
      <div class="parallax-bg">
        <img src="https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?w=1600&q=80" alt="鸭绿江" loading="lazy">
      </div>
      <div class="parallax-overlay"></div>
      <div class="parallax-content">
        <div class="container container-narrow" style="text-align:center;">
          <span class="section-label reveal" style="color:var(--cream);">Yalu River</span>
          <h2 class="reveal" style="font-family:var(--font-display);font-size:var(--text-5xl);font-weight:800;color:var(--cream);margin:var(--space-4) 0 var(--space-8);">鸭绿江的馈赠</h2>
          <p class="reveal reveal-delay-1" style="color:var(--gold-500);font-size:var(--text-lg);line-height:2.2;font-weight:300;">
            鸭绿江，这条发源于长白山天池的河流，千百年来滋润着两岸的土地。
            江水带来的温湿气流调节着葡萄园的微气候 — 冬季防寒、夏季降温，
            使集安成为亚洲唯一能够稳定生产冰葡萄酒的产区。
            江水、山风、阳光与冰雪共同雕刻出美桦君昱独一无二的风土印记。
          </p>
        </div>
      </div>
    </section>

    <section class="cta-block">
      <div class="cta-block-content">
        <h2 class="cta-block-title reveal">亲临集安，感受风土</h2>
        <p class="cta-block-text reveal reveal-delay-1">只有站在这片土地上，才能真正理解一瓶美桦君昱的由来。</p>
        <router-link to="/experience" class="btn btn-cta-filled reveal reveal-delay-2">探索庄园之旅</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
