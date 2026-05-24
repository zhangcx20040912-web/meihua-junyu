<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img src="@/assets/img/logo-nav.png" alt="美桦君昱" class="footer-logo">
          <span class="footer-brand-name">美桦君昱</span>
        </div>
        <p class="footer-desc">
          位于吉林省集安市，长白山南麓，鸭绿江畔。<br>
          中国冰葡萄酒的核心产区。以虔诚之心，酿造东方顶级冰酒与葡萄酒。
        </p>
      </div>
      <div>
        <h6>探索</h6>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/brand-story">品牌故事</router-link></li>
          <li><router-link to="/products">产品系列</router-link></li>
          <li><router-link to="/experience">庄园之旅</router-link></li>
        </ul>
      </div>
      <div>
        <h6>产品</h6>
        <ul>
          <li><router-link to="/products">冰葡萄酒</router-link></li>
          <li><router-link to="/products">起泡酒</router-link></li>
          <li><router-link to="/products">干红葡萄酒</router-link></li>
          <li><router-link to="/products">白兰地 XO</router-link></li>
        </ul>
      </div>
      <div>
        <h6>联系</h6>
        <ul>
          <li><router-link to="/contact">联系我们</router-link></li>
          <li><router-link to="/news">新闻动态</router-link></li>
          <li><a href="#">吉林省集安市</a></li>
          <li><a href="#">美桦君昱酒庄有限公司</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 美桦君昱酒庄有限公司. All rights reserved.</span>
      <span>集安 · 吉林 · 中国</span>
    </div>
  </footer>
</template>
