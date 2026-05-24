<template>
  <div>
    <!-- Hero -->
    <section class="hero-home">
      <div class="hero-home-bg">
        <img src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=1800&q=85" alt="" aria-hidden="true">
      </div>
      <div class="hero-home-overlay"></div>
      <div class="hero-home-content">
        <div class="reveal">
          <img src="@/assets/img/logo-web.png" alt="美桦君昱" class="hero-home-logo">
        </div>
        <div class="reveal reveal-delay-1">
          <p class="hero-home-location">吉林省通化市集安市 &middot; 北纬 41&deg;</p>
        </div>
        <h1 class="hero-home-title reveal reveal-delay-2">
          天地之美<br>风土之桦
        </h1>
        <p class="hero-home-desc reveal reveal-delay-3">
          长白山南麓，鸭绿江畔。中国冰葡萄酒的核心产区，以虔诚之心酿造东方顶级冰酒与葡萄酒。
        </p>
        <div class="hero-home-actions reveal reveal-delay-3">
          <router-link to="/products" class="btn btn-cta-filled">探索产品系列</router-link>
          <router-link to="/brand-story" class="btn btn-ghost">品牌故事</router-link>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>SCROLL</span>
        <div class="scroll-line-v"></div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section-lg">
      <div class="container container-narrow">
        <div class="text-center">
          <span class="section-label reveal">Philosophy</span>
          <h2 class="heading-xl reveal reveal-delay-1" style="margin:var(--space-6) 0 var(--space-10);">一瓶伟大的冰酒<br>诞生于天地之间的完美交汇</h2>
          <p class="reveal reveal-delay-2" style="color:var(--ink-500);font-size:var(--text-lg);line-height:2.2;max-width:600px;margin:0 auto;">
            长白山的庇护、鸭绿江的润泽、北纬 41&deg; 的阳光与零下 10&deg;C 的严寒 —
            美桦君昱只是虔诚的守护者，将自然的馈赠以最纯粹的方式呈现。
          </p>
          <div class="wine-line centered reveal reveal-delay-2" style="margin-top:var(--space-10);"></div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="section-lg" style="background:var(--cream-50);">
      <div class="container">
        <div class="section-header">
          <span class="section-label reveal">Our Collection</span>
          <h2 class="heading-xl reveal reveal-delay-1" style="margin:var(--space-4) 0 var(--space-4);">产品系列</h2>
        </div>
        <div class="grid-2" style="gap:var(--space-6);">
          <!-- Icewine -->
          <router-link to="/products/icewine" class="card reveal" style="display:block;position:relative;">
            <div class="card-img" style="aspect-ratio:4/5;">
              <img src="https://images.unsplash.com/photo-1557871318-4136a587b30a?w=800&q=85" alt="冰葡萄酒" loading="lazy">
              <div class="wine-badge">旗舰款</div>
            </div>
            <div class="card-body">
              <div class="card-tag">Icewine</div>
              <h3 class="card-title">冰葡萄酒</h3>
              <p class="card-desc">-8&deg;C 自然冰冻采摘，金黄琥珀色泽，蜜糖与热带水果馥郁芬芳。</p>
              <div class="card-meta">
                <div>规格 <strong>375ml</strong></div>
                <div>品种 <strong>威代尔</strong></div>
              </div>
            </div>
          </router-link>

          <!-- Brandy XO -->
          <router-link to="/products/brandy-xo" class="card reveal reveal-delay-1" style="display:block;">
            <div class="card-img" style="aspect-ratio:4/5;">
              <img src="https://images.unsplash.com/photo-1640785771979-b85145443664?w=800&q=85" alt="白兰地XO" loading="lazy">
            </div>
            <div class="card-body">
              <div class="card-tag">Brandy XO</div>
              <h3 class="card-title">白兰地 XO</h3>
              <p class="card-desc">法国利穆赞橡木桶陈酿 10 年以上，琥珀色酒液，口感圆润绵长。</p>
              <div class="card-meta">
                <div>规格 <strong>700ml</strong></div>
                <div>陈酿 <strong>10 年+</strong></div>
              </div>
            </div>
          </router-link>

          <!-- Sparkling -->
          <router-link to="/products/sparkling" class="card reveal" style="display:block;">
            <div class="card-img" style="aspect-ratio:4/5;">
              <img src="https://images.unsplash.com/photo-1586636539865-52064fb82ba3?w=800&q=85" alt="起泡酒" loading="lazy">
            </div>
            <div class="card-body">
              <div class="card-tag">Sparkling</div>
              <h3 class="card-title">起泡酒</h3>
              <p class="card-desc">传统瓶内二次发酵，细腻气泡升腾，柑橘与白花清新香气。</p>
              <div class="card-meta">
                <div>规格 <strong>750ml</strong></div>
                <div>品种 <strong>霞多丽</strong></div>
              </div>
            </div>
          </router-link>

          <!-- Dry Red -->
          <router-link to="/products/dry-red" class="card reveal reveal-delay-1" style="display:block;">
            <div class="card-img" style="aspect-ratio:4/5;">
              <img src="https://images.unsplash.com/photo-1554230561-31bdc707b537?w=800&q=85" alt="干红" loading="lazy">
            </div>
            <div class="card-body">
              <div class="card-tag">Dry Red</div>
              <h3 class="card-title">干红葡萄酒</h3>
              <p class="card-desc">精选赤霞珠与品丽珠，法国橡木桶陈酿 12 个月，单宁柔滑如丝绒。</p>
              <div class="card-meta">
                <div>规格 <strong>750ml</strong></div>
                <div>品种 <strong>赤霞珠</strong></div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="text-center reveal" style="margin-top:var(--space-12);">
          <router-link to="/products" class="btn btn-outline btn-lg">查看全部产品</router-link>
        </div>
      </div>
    </section>

    <!-- Terroir -->
    <section class="section-lg">
      <div class="container">
        <div class="grid-2-uneven">
          <div class="reveal-left">
            <span class="section-label">Terroir</span>
            <h2 class="heading-lg" style="margin:var(--space-4) 0 var(--space-8);">集安风土</h2>
            <p style="color:var(--ink-500);line-height:2.1;margin-bottom:var(--space-6);">
              北纬 41&deg;，东经 126&deg;，长白山南麓与鸭绿江交汇之处。
              与世界冰酒之都加拿大尼亚加拉处于同一黄金纬度带，是中国唯一能够稳定生产冰葡萄酒的核心产区。
            </p>
            <div class="grid-2" style="gap:var(--space-5);margin-bottom:var(--space-8);">
              <div>
                <div class="stat-number" style="font-size:var(--text-5xl);">1,000<span>亩+</span></div>
                <div class="stat-label">葡萄种植基地</div>
              </div>
              <div>
                <div class="stat-number" style="font-size:var(--text-5xl);">-10<span>&deg;C</span></div>
                <div class="stat-label">冬季冰葡萄采收温度</div>
              </div>
            </div>
            <router-link to="/terroir" class="btn btn-outline">探索集安风土</router-link>
          </div>
          <div class="reveal-right" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);">
            <div style="border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:3/4;">
              <img src="https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?w=600&q=85" alt="集安葡萄园" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:3/4;margin-top:var(--space-10);">
              <img src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=85" alt="长白山" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Preview -->
    <section class="section-lg" style="background:var(--cream-50);">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-label reveal">The Experience</span>
          <h2 class="heading-xl reveal reveal-delay-1" style="margin:var(--space-4) 0 var(--space-4);">庄园品鉴之旅</h2>
          <p class="reveal reveal-delay-1" style="color:var(--ink-500);">沉浸式体验从葡萄园到酒杯的完整旅程</p>
        </div>
        <div class="timeline-v">
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">01</div>
            <div class="timeline-v-content">
              <h4>庄园漫步</h4>
              <p>跟随酿酒师穿越千亩葡萄园，了解北纬 41&deg; 冰酒产区的独特风土与有机种植哲学。约 1 小时。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1526137630052-dc2c4693f0d5?w=600&q=80" alt="庄园漫步" loading="lazy" class="timeline-v-img">
          </div>
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">02</div>
            <div class="timeline-v-content">
              <h4>酒窖探秘</h4>
              <p>步入恒温恒湿的地下酒窖，感受时光在橡木桶中施展的魔法。约 45 分钟。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&q=80" alt="酒窖探秘" loading="lazy" class="timeline-v-img">
          </div>
          <div class="timeline-v-item reveal">
            <div class="timeline-v-year">03</div>
            <div class="timeline-v-content">
              <h4>私人品鉴</h4>
              <p>由资深侍酒师引导，品鉴 5 款精选佳酿。约 1.5 小时。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80" alt="私人品鉴" loading="lazy" class="timeline-v-img">
          </div>
        </div>
        <div class="text-center reveal" style="margin-top:var(--space-12);">
          <router-link to="/experience" class="btn btn-primary btn-lg">探索庄园体验</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-block">
      <div class="cta-block-content">
        <h2 class="cta-block-title reveal">预约探访美桦君昱</h2>
        <p class="cta-block-text reveal reveal-delay-1">无论私人导览、精品晚宴还是企业活动，我们都将为您创造一生难忘的回忆。</p>
        <div class="reveal reveal-delay-2" style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
          <router-link to="/contact" class="btn btn-cta-filled">联系我们</router-link>
          <router-link to="/experience" class="btn btn-cta-outline">了解庄园体验</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
