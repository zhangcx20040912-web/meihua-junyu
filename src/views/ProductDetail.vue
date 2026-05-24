<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label reveal">{{ product.typeLabel }}</span>
          <h1 class="page-hero-title reveal reveal-delay-1">{{ product.name }}</h1>
          <p class="reveal reveal-delay-2" style="font-size:var(--text-lg);line-height:2;margin-top:var(--space-4);">{{ product.tagline }}</p>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="grid-2-uneven">
          <div class="reveal-left" style="border-radius:var(--radius-xl);overflow:hidden;aspect-ratio:1;">
            <img :src="product.image" :alt="product.name" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <div class="reveal-right">
            <div class="card-tag" style="font-size:var(--text-base);margin-bottom:var(--space-2);">{{ product.typeLabel }}</div>
            <h2 class="heading-xl" style="margin-bottom:var(--space-4);">{{ product.name }}</h2>
            <div class="wine-line"></div>
            <p style="color:var(--ink-500);line-height:2.1;margin-bottom:var(--space-8);">{{ product.description }}</p>
            <div class="card" style="padding:var(--space-6);margin-bottom:var(--space-6);background:var(--cream-50);">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-5);">
                <div><span style="font-size:var(--text-xs);color:var(--ink-500);text-transform:uppercase;letter-spacing:0.08em;">品种</span><p style="color:var(--wine-500);font-weight:600;">{{ product.variety }}</p></div>
                <div><span style="font-size:var(--text-xs);color:var(--ink-500);text-transform:uppercase;letter-spacing:0.08em;">规格</span><p style="color:var(--wine-500);font-weight:600;">{{ product.specs }}</p></div>
                <div><span style="font-size:var(--text-xs);color:var(--ink-500);text-transform:uppercase;letter-spacing:0.08em;">酒精度</span><p style="color:var(--wine-500);font-weight:600;">{{ product.alcohol }}</p></div>
                <div><span style="font-size:var(--text-xs);color:var(--ink-500);text-transform:uppercase;letter-spacing:0.08em;">适饮温度</span><p style="color:var(--wine-500);font-weight:600;">{{ product.temperature }}</p></div>
              </div>
            </div>
            <div style="display:flex;gap:var(--space-3);">
              <router-link to="/contact" class="btn btn-primary">咨询购买</router-link>
              <router-link to="/products" class="btn btn-outline">&larr; 返回产品</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tasting Notes -->
    <section class="section-sm" style="background:var(--cream-50);">
      <div class="container container-narrow">
        <div class="section-header text-center">
          <span class="section-label reveal">Tasting Notes</span>
          <h2 class="heading-lg reveal" style="margin:var(--space-4) 0;">品鉴笔记</h2>
        </div>
        <div class="grid-3">
          <div class="stat-card reveal">
            <div class="icon-block" style="margin:0 auto var(--space-4);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            </div>
            <div class="stat-label" style="font-weight:700;font-size:var(--text-lg);color:var(--ink-900);">色泽</div>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-top:var(--space-3);">{{ product.tastingColor }}</p>
          </div>
          <div class="stat-card reveal reveal-delay-1">
            <div class="icon-block" style="margin:0 auto var(--space-4);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h2"/><path d="M20 12h2"/><path d="M7 8a5 5 0 0110 0c0 3-5 6-5 6s-5-3-5-6z"/><path d="M12 18v4"/></svg>
            </div>
            <div class="stat-label" style="font-weight:700;font-size:var(--text-lg);color:var(--ink-900);">香气</div>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-top:var(--space-3);">{{ product.tastingNose }}</p>
          </div>
          <div class="stat-card reveal reveal-delay-2">
            <div class="icon-block" style="margin:0 auto var(--space-4);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </div>
            <div class="stat-label" style="font-weight:700;font-size:var(--text-lg);color:var(--ink-900);">口感</div>
            <p style="color:var(--ink-500);font-size:var(--text-sm);line-height:1.8;margin-top:var(--space-3);">{{ product.tastingPalate }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'

const route = useRoute()

const data = {
  icewine: {
    name: '冰葡萄酒', typeLabel: 'Icewine',
    tagline: '-8°C 自然冰冻采摘，每一滴都是冬日的馈赠',
    image: 'https://images.unsplash.com/photo-1557871318-4136a587b30a?w=800&q=80',
    description: '在零下 8°C 以下的严寒中，葡萄在藤上自然冰冻。凌晨手工采摘，即刻压榨 — 水分以冰晶形式被分离，留下极度浓缩的果汁。金黄琥珀色泽的酒液，蕴含蜂蜜、杏干、荔枝与热带水果的馥郁芬芳，甘甜饱满的口感与清爽酸度构成完美平衡，余韵悠长。',
    variety: '威代尔 / 北冰红', specs: '375ml / 180ml', alcohol: '10.5% vol', temperature: '6-8°C',
    tastingColor: '金黄至琥珀色泽，清澈明亮，挂杯细腻均匀，如液态黄金般流光溢彩。',
    tastingNose: '蜂蜜、杏干、荔枝、芒果干、热带水果的复合香气，伴随淡淡的白花与矿物质气息，层层绽放。',
    tastingPalate: '入口甘甜饱满而不腻，酸度清亮爽口，热带水果风味在舌面绽放，回味悠长而纯净，留香持久。'
  },
  sparkling: {
    name: '起泡酒', typeLabel: 'Sparkling',
    tagline: '传统瓶内二次发酵，细腻气泡如星光升腾',
    image: 'https://images.unsplash.com/photo-1586636539865-52064fb82ba3?w=800&q=80',
    description: '采用传统香槟法进行瓶内二次发酵，在酒窖中带酒泥陈酿 18 个月以上。细腻持久的气泡悠然升腾，柑橘、青苹果与白花的清新香气扑面而来，活泼的酸度带来愉悦开场，酒泥陈酿赋予烤面包与坚果的复杂层次，余味清新悠长。',
    variety: '霞多丽', specs: '750ml', alcohol: '12% vol', temperature: '4-6°C',
    tastingColor: '浅稻草黄色，泛着淡绿色光泽，气泡细腻持久，如珠链般持续升腾。',
    tastingNose: '柠檬、青苹果、白桃的清新果香，伴随白花、烤面包与淡淡酵母的复杂香气。',
    tastingPalate: '活泼清爽的酸度冲击味蕾，细腻气泡在口中爆裂，果味与矿物质交织，收尾干净利落。'
  },
  'dry-red': {
    name: '干红葡萄酒', typeLabel: 'Dry Red',
    tagline: '法国橡木桶陈酿 12 个月，黑醋栗与雪松的复杂交响',
    image: 'https://images.unsplash.com/photo-1554230561-31bdc707b537?w=800&q=80',
    description: '精选赤霞珠与品丽珠，手工采摘后逐粒精选，在法国橡木桶中陈酿 12 个月。深宝石红色酒液，散发黑醋栗、黑樱桃与雪松的复杂香气，伴随烟草与巧克力的微妙气息。单宁柔滑如丝绒，酒体饱满，结构优雅，余韵悠长。',
    variety: '赤霞珠 / 品丽珠', specs: '750ml', alcohol: '13.5% vol', temperature: '16-18°C',
    tastingColor: '深邃的宝石红色，边缘泛着紫罗兰光泽，挂杯厚实均匀。',
    tastingNose: '黑醋栗、黑樱桃、李子等深色水果主导，伴随雪松、烟草、黑巧克力和淡淡香草气息。',
    tastingPalate: '单宁柔滑细腻如丝绒，酒体饱满有力量，深色水果与橡木风味平衡，余味悠长带矿物质感。'
  },
  'brandy-xo': {
    name: '白兰地 XO', typeLabel: 'Brandy XO',
    tagline: '法国利穆赞橡木桶陈酿 10 年以上，时间的艺术',
    image: 'https://images.unsplash.com/photo-1640785771979-b85145443664?w=800&q=80',
    description: '精选优质葡萄蒸馏原液，在法国利穆赞橡木桶中陈酿超过十年。琥珀色酒液散发香草、干果、蜂蜜与橡木的醇厚芬芳，伴随淡淡的花香与辛香料气息。入口圆润饱满，酒体丝滑绵长，层次丰富，余韵久久不散 — 这是时光施展的魔法。',
    variety: '精选酿酒葡萄', specs: '700ml', alcohol: '40% vol', temperature: '18-20°C',
    tastingColor: '深邃琥珀色，泛着桃花心木般的光泽，挂杯厚重，酒泪缓缓流下。',
    tastingNose: '香草、蜂蜜、杏干、无花果的甜香，伴随橡木、肉桂、丁香和淡淡的花香，层次极为丰富。',
    tastingPalate: '入口圆润饱满，酒体丝滑如绸缎，干果与香料风味层层递进，余韵绵长不散，温暖持久。'
  }
}

const product = computed(() => data[route.params.id] || data.icewine)

useScrollReveal()
</script>
