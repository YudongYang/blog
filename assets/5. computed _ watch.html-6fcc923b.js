import{_ as s,M as t,p as o,q as c,R as a,t as n,N as p,a1 as r}from"./framework-30b324a0.js";const i={},l=a("h2",{id:"computed-watch",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#computed-watch","aria-hidden":"true"},"#"),n(" computed & watch")],-1),d={href:"https://cn.vuejs.org/v2/guide/computed.html",target:"_blank",rel:"noopener noreferrer"},u=r(`<h3 id="一、-computed" tabindex="-1"><a class="header-anchor" href="#一、-computed" aria-hidden="true">#</a> 一、 computed</h3><h3 id="二、-watch" tabindex="-1"><a class="header-anchor" href="#二、-watch" aria-hidden="true">#</a> 二、 watch</h3><p>特别提示一个，深度监听，深度监听可以监听对象内属性的变化:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;obj.attr&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(m,v){const e=t("ExternalLinkIcon");return o(),c("div",null,[l,a("p",null,[a("a",d,[n("计算属性和侦听器"),p(e)])]),u])}const k=s(i,[["render",h],["__file","5. computed _ watch.html.vue"]]);export{k as default};
