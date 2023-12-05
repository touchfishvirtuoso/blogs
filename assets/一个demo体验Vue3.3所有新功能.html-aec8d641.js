import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,a,b as n,e as l,f as s}from"./app-faa09885.js";const i={},u=s(`<blockquote><p>最新文章发布在公众号：<code>萌萌哒草头将军</code>，个人：<code>SunBoy_mmdctjj</code>，欢迎关注，最近关注有🎁，送五本JavaScript的书~</p></blockquote><p><code>Vue3.3</code>已经发布一个月了，今天我和大家体验下最新功能</p><h2 id="💎-准备工作" tabindex="-1"><a class="header-anchor" href="#💎-准备工作" aria-hidden="true">#</a> 💎 准备工作</h2><h3 id="🚗-创建项目并运行" tabindex="-1"><a class="header-anchor" href="#🚗-创建项目并运行" aria-hidden="true">#</a> 🚗 创建项目并运行</h3><p>创建完项目后记得下载最新的包</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建</span>
npm create vite vue<span class="token operator">-</span>demo <span class="token operator">--</span>template vue<span class="token operator">-</span>ts
<span class="token comment">// 下载依赖</span>
cd vue<span class="token operator">-</span>demo
npm i
<span class="token comment">// 更新到最新版本</span>
npm i vue@<span class="token number">3.3</span>
<span class="token comment">// 运行</span>
npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🚗-开启新功能" tabindex="-1"><a class="header-anchor" href="#🚗-开启新功能" aria-hidden="true">#</a> 🚗 开启新功能</h3><p>由于最新的功能<code>defineModel</code>是实验特性，需要在<code>vite.config.js</code>里开启，另外需要开启解构<code>props</code>响应式功能</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">defineModel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启defineModel功能</span>
    <span class="token literal-property property">propsDestructure</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启props结构响应式</span>
  <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🚗-下载最新的vue-language-features-volar" tabindex="-1"><a class="header-anchor" href="#🚗-下载最新的vue-language-features-volar" aria-hidden="true">#</a> 🚗 下载最新的Vue Language Features (Volar)</h3><p><s>如果你工作中还是写<code>Vue2</code>，那么建议你不要下载，因为和<code>Vetur</code>是冲突的</s><br> 不冲突</p>`,11),r={href:"https://juejin.cn/user/3421335914820280",target:"_blank",rel:"noopener noreferrer"},d=s(`<h2 id="🚀-体验" tabindex="-1"><a class="header-anchor" href="#🚀-体验" aria-hidden="true">#</a> 🚀 体验</h2><h3 id="🚗-defineprops使用引入外部定义的接口" tabindex="-1"><a class="header-anchor" href="#🚗-defineprops使用引入外部定义的接口" aria-hidden="true">#</a> 🚗 <code>defineProps</code>使用引入外部定义的接口</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 定义接口并暴露出去</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count ++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>change count<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>hello vue3.3&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// Child.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../App.vue&#39;</span><span class="token punctuation">;</span>
defineProps<span class="token operator">&lt;</span>Command <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acee2ed6b3de4cd589bd032d0b241ea5~tplv-k3u1fbpfcp-watermark.image?" alt="defineProps.gif" tabindex="0" loading="lazy"><figcaption>defineProps.gif</figcaption></figure><h3 id="🚗-props结构响应式" tabindex="-1"><a class="header-anchor" href="#🚗-props结构响应式" aria-hidden="true">#</a> 🚗 <code>props</code>结构响应式</h3><p>我们从<code>defineProps</code>中解构出<code>count</code>，然后使用<code>watchEffect</code>打印。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// Child.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Command <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f2420aeeedb4c1b898ab0c7036915e0~tplv-k3u1fbpfcp-watermark.image?" alt="reactive.gif" tabindex="0" loading="lazy"><figcaption>reactive.gif</figcaption></figure><h3 id="🚗-defineemits" tabindex="-1"><a class="header-anchor" href="#🚗-defineemits" aria-hidden="true">#</a> 🚗 <code>defineEmits</code></h3><p>接下来使用<code>defineEmits</code>定义监听事件，当count发生变化时使用触发该事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// Child.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> emits <span class="token operator">=</span> defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token string-property property">&#39;count-change&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>modelValue<span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span>
  <span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">&#39;count-change&#39;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在父组件中监听最新的变化值</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">countChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;countChange&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">@count-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>countChange<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6ef124cb662499eabfbdd26b2008f2a~tplv-k3u1fbpfcp-watermark.image?" alt="emit.gif" tabindex="0" loading="lazy"><figcaption>emit.gif</figcaption></figure><h3 id="🚗-definemodel" tabindex="-1"><a class="header-anchor" href="#🚗-definemodel" aria-hidden="true">#</a> 🚗 <code>defineModel</code></h3><p>接下来我们使用<code>defineModel</code>定义一个<code>model</code>，绑定在<code>input</code>标签上，同时使用<code>watch</code>监听变化。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// Child.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> modelValue <span class="token operator">=</span> defineModel<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> modelValue<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在父组件设置<code>model</code>初始值</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>// App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时效果如下：</p><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2da118161fce47668897a425bcd7283c~tplv-k3u1fbpfcp-watermark.image?" alt="model.gif" tabindex="0" loading="lazy"><figcaption>model.gif</figcaption></figure><h3 id="🚗-一些类型检查增强的功能" tabindex="-1"><a class="header-anchor" href="#🚗-一些类型检查增强的功能" aria-hidden="true">#</a> 🚗 一些类型检查增强的功能</h3><h4 id="泛型组件" tabindex="-1"><a class="header-anchor" href="#泛型组件" aria-hidden="true">#</a> 泛型组件</h4><p>在<code>script</code>标签上用<code>generic</code>属性定义泛型，当然也可以使用<code>extends</code>关键字继承其他属性。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">generic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>T extends string | number, U extends Item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Item <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>
defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="defineslots新增类型检查" tabindex="-1"><a class="header-anchor" href="#defineslots新增类型检查" aria-hidden="true">#</a> <code>defineSlots</code>新增类型检查</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>defineSlots<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时如果在具名插件上不写<code>id</code>属性或者属性不是指定类型都会报错。</p><h2 id="🎉-总结" tabindex="-1"><a class="header-anchor" href="#🎉-总结" aria-hidden="true">#</a> 🎉 总结</h2><p>新功能确实越来越简洁了，加上<code>TypeScript</code>的加持，相信<code>Vue3</code>将会带来更好的便捷功能。</p><p>需要源码的话可以在公众号回复<code>vue3</code></p><p>今天的分享就到了，最新文章发布在公众号：<code>萌萌哒草头将军</code>，想加我个人，请加：<code>SunBoy_mmdctjj</code>，欢迎关注和骚扰!</p>`,36);function k(v,m){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,a("p",null,[n("感谢@"),a("a",r,[n("BWrong"),l(t)]),n("大佬指正")]),d])}const h=p(i,[["render",k],["__file","一个demo体验Vue3.3所有新功能.html.vue"]]);export{h as default};
