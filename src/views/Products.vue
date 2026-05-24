<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label reveal">Our Collection</span>
          <h1 class="page-hero-title reveal reveal-delay-1">产品系列</h1>
          <p class="reveal reveal-delay-2" style="font-size:var(--text-lg);line-height:2;margin-top:var(--space-6);max-width:560px;">
            从稀贵的冰酒到优雅的起泡酒，从醇厚的干红到珍藏级白兰地XO<br>每一款都是集安风土的极致表达
          </p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="grid-3">
          <div class="card reveal">
            <div class="card-img" style="position:relative;">
              <img src="https://images.unsplash.com/photo-1557871318-4136a587b30a?w=600&q=80" alt="冰葡萄酒" loading="lazy">
              <div class="wine-badge">旗舰款</div>
            </div>
            <div class="card-body">
              <div class="card-tag">Icewine</div>
              <h4 class="card-title">冰葡萄酒</h4>
              <p class="card-desc">-8&deg;C 以下自然冰冻采摘，金黄琥珀色泽。蜜糖与热带水果的馥郁芬芳，甘甜与酸度的完美平衡。每一滴都是冬日的馈赠。</p>
              <div class="card-meta">
                <div>规格 <strong>375ml / 180ml</strong></div>
                <div>品种 <strong>威代尔 / 北冰红</strong></div>
              </div>
              <router-link to="/products/icewine" class="btn btn-outline btn-sm" style="margin-top:1.25rem;width:100%;justify-content:center;">查看详情</router-link>
            </div>
          </div>

          <div class="card reveal reveal-delay-1">
            <div class="card-img"><img src="https://images.unsplash.com/photo-1586636539865-52064fb82ba3?w=600&q=80" alt="起泡酒" loading="lazy"></div>
            <div class="card-body">
              <div class="card-tag">Sparkling</div>
              <h4 class="card-title">起泡酒</h4>
              <p class="card-desc">传统瓶内二次发酵法，细腻气泡悠然升腾。柑橘与白花的清新香气，活泼的酸度带来愉悦开场与悠长回味。</p>
              <div class="card-meta">
                <div>规格 <strong>750ml</strong></div>
                <div>品种 <strong>霞多丽</strong></div>
              </div>
              <router-link to="/products/sparkling" class="btn btn-outline btn-sm" style="margin-top:1.25rem;width:100%;justify-content:center;">查看详情</router-link>
            </div>
          </div>

          <div class="card reveal reveal-delay-2">
            <div class="card-img"><img src="https://images.unsplash.com/photo-1554230561-31bdc707b537?w=600&q=80" alt="干红" loading="lazy"></div>
            <div class="card-body">
              <div class="card-tag">Dry Red</div>
              <h4 class="card-title">干红葡萄酒</h4>
              <p class="card-desc">精选赤霞珠与品丽珠，法国橡木桶陈酿 12 个月。黑醋栗与雪松的复杂香气交织，单宁柔滑如丝绒。</p>
              <div class="card-meta">
                <div>规格 <strong>750ml</strong></div>
                <div>品种 <strong>赤霞珠 / 品丽珠</strong></div>
              </div>
              <router-link to="/products/dry-red" class="btn btn-outline btn-sm" style="margin-top:1.25rem;width:100%;justify-content:center;">查看详情</router-link>
            </div>
          </div>

          <div class="card reveal">
            <div class="card-img"><img src="https://images.unsplash.com/photo-1640785771979-b85145443664?w=600&q=80" alt="白兰地XO" loading="lazy"></div>
            <div class="card-body">
              <div class="card-tag">Brandy XO</div>
              <h4 class="card-title">白兰地 XO</h4>
              <p class="card-desc">法国利穆赞橡木桶陈酿 10 年以上，琥珀色酒液散发香草、干果与橡木的醇厚芬芳，口感圆润绵长。</p>
              <div class="card-meta">
                <div>规格 <strong>700ml</strong></div>
                <div>陈酿 <strong>10 年+</strong></div>
              </div>
              <router-link to="/products/brandy-xo" class="btn btn-outline btn-sm" style="margin-top:1.25rem;width:100%;justify-content:center;">查看详情</router-link>
            </div>
          </div>
        </div>

        <!-- Tasting Guide -->
        <hr class="hr">
        <div class="section-header text-center">
          <span class="section-label reveal">Tasting Guide</span>
          <h2 class="heading-lg reveal" style="margin:var(--space-4) 0;">品鉴指南</h2>
        </div>
        <div class="grid-2">
          <div class="card reveal" style="padding:var(--space-8);">
            <h4 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:700;margin-bottom:var(--space-4);">冰酒品鉴三部曲</h4>
            <div style="color:var(--ink-500);line-height:2.2;">
              <p style="margin-bottom:var(--space-3);"><strong style="color:var(--wine-500);">观色</strong> — 金黄至琥珀色泽，清澈明亮，挂杯细腻均匀。</p>
              <p style="margin-bottom:var(--space-3);"><strong style="color:var(--wine-500);">闻香</strong> — 蜂蜜、杏干、荔枝、热带水果的复合香气，层层绽放。</p>
              <p><strong style="color:var(--wine-500);">品味</strong> — 入口甘甜饱满，酸度清爽平衡，回味悠长持久。</p>
            </div>
          </div>
          <div class="card reveal reveal-delay-1" style="padding:var(--space-8);">
            <h4 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:700;margin-bottom:var(--space-4);">饮用建议</h4>
            <div style="color:var(--ink-500);line-height:2.2;">
              <p style="margin-bottom:var(--space-3);"><strong style="color:var(--wine-500);">温度</strong> — 冰酒 6-8&deg;C，起泡酒 4-6&deg;C，干红 16-18&deg;C。</p>
              <p style="margin-bottom:var(--space-3);"><strong style="color:var(--wine-500);">搭配</strong> — 冰酒配甜点/蓝纹奶酪，干红配红肉/陈年奶酪。</p>
              <p><strong style="color:var(--wine-500);">杯型</strong> — 冰酒选用小杯口郁金香杯，干红选用大杯肚波尔多杯。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-block">
      <div class="cta-block-content">
        <h2 class="cta-block-title reveal">寻找您的专属佳酿</h2>
        <p class="cta-block-text reveal reveal-delay-1">不确定哪款适合您？联系我们的侍酒师，为您提供个性化推荐。</p>
        <router-link to="/contact" class="btn btn-cta-filled reveal reveal-delay-2">联系我们</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
useScrollReveal()
</script>
