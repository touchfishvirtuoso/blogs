const n=JSON.parse(`{"key":"v-1760c7e4","path":"/vue/20230703.html","title":"Vue3使用hook封装媒体查询和事件监听，使Vue的开发更加丝滑🚀🚀🚀","lang":"zh-CN","frontmatter":{"title":"Vue3使用hook封装媒体查询和事件监听，使Vue的开发更加丝滑🚀🚀🚀","isTimeLine":true,"date":"2023-07-03T00:00:00.000Z","category":["前端"],"tag":["JavaScript","Vue"],"description":"文章同步在公众号：萌萌哒草头将军，欢迎关注 js中媒体查询的主要方法是使用window对象下的matchMedia对象，查询语句和CSS媒体查询一样。 封装媒体查询 首先我们先看监听系统主题色的例子 首先创建媒体查询对象 根据查询结果设置对应的值 然后建立监听事件，并且在退出时取消监听 export const useTheme = () =&gt; { // 首先创建媒体查询对象 const themeMedia = matchMedia(\\"(prefers-color-scheme: light)\\") // 根据查询结果设置对应的值 const theme = ref(themeMedia.matches ? 'light' : 'dark') const onChange = (e: MediaQueryListEvent) =&gt; theme.value = e.matches ? 'light' : 'dark' watchEffect((onCleanup) =&gt; { // 然后建立监听事件 themeMedia.addEventListener('change', onChange) // 并且在退出时取消监听 onCleanup(() =&gt; themeMedia.removeEventListener('change', onChange)) }) return theme; }","head":[["meta",{"property":"og:url","content":"https://mmdctjj.github.io/blog2/blogs/vue/20230703.html"}],["meta",{"property":"og:site_name","content":"摸鱼散人"}],["meta",{"property":"og:title","content":"Vue3使用hook封装媒体查询和事件监听，使Vue的开发更加丝滑🚀🚀🚀"}],["meta",{"property":"og:description","content":"文章同步在公众号：萌萌哒草头将军，欢迎关注 js中媒体查询的主要方法是使用window对象下的matchMedia对象，查询语句和CSS媒体查询一样。 封装媒体查询 首先我们先看监听系统主题色的例子 首先创建媒体查询对象 根据查询结果设置对应的值 然后建立监听事件，并且在退出时取消监听 export const useTheme = () =&gt; { // 首先创建媒体查询对象 const themeMedia = matchMedia(\\"(prefers-color-scheme: light)\\") // 根据查询结果设置对应的值 const theme = ref(themeMedia.matches ? 'light' : 'dark') const onChange = (e: MediaQueryListEvent) =&gt; theme.value = e.matches ? 'light' : 'dark' watchEffect((onCleanup) =&gt; { // 然后建立监听事件 themeMedia.addEventListener('change', onChange) // 并且在退出时取消监听 onCleanup(() =&gt; themeMedia.removeEventListener('change', onChange)) }) return theme; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"萌萌哒草头将军"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2023-07-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue3使用hook封装媒体查询和事件监听，使Vue的开发更加丝滑🚀🚀🚀\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"萌萌哒草头将军\\",\\"url\\":\\"https://mmdctjj.github.io/blog2\\"}]}"]]},"headers":[{"level":3,"title":"封装媒体查询","slug":"封装媒体查询","link":"#封装媒体查询","children":[]},{"level":3,"title":"封装事件监听","slug":"封装事件监听","link":"#封装事件监听","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":2.66,"words":799},"filePathRelative":"vue/20230703.md","localizedDate":"2023年7月3日","excerpt":"<blockquote>\\n<p>文章同步在公众号：萌萌哒草头将军，欢迎关注</p>\\n</blockquote>\\n<p>js中媒体查询的主要方法是使用window对象下的<code>matchMedia</code>对象，查询语句和CSS媒体查询一样。</p>\\n<h3> 封装媒体查询</h3>\\n<p>首先我们先看监听系统主题色的例子</p>\\n<ul>\\n<li>首先创建媒体查询对象</li>\\n<li>根据查询结果设置对应的值</li>\\n<li>然后建立监听事件，并且在退出时取消监听</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">useTheme</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n\\n  <span class=\\"token comment\\">// 首先创建媒体查询对象</span>\\n  <span class=\\"token keyword\\">const</span> themeMedia <span class=\\"token operator\\">=</span> <span class=\\"token function\\">matchMedia</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"(prefers-color-scheme: light)\\"</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token comment\\">// 根据查询结果设置对应的值</span>\\n  <span class=\\"token keyword\\">const</span> theme <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span>themeMedia<span class=\\"token punctuation\\">.</span>matches <span class=\\"token operator\\">?</span> <span class=\\"token string\\">'light'</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">'dark'</span><span class=\\"token punctuation\\">)</span>\\n\\n  <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">onChange</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">e</span><span class=\\"token operator\\">:</span> MediaQueryListEvent</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> theme<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> e<span class=\\"token punctuation\\">.</span>matches <span class=\\"token operator\\">?</span> <span class=\\"token string\\">'light'</span> <span class=\\"token operator\\">:</span> <span class=\\"token string\\">'dark'</span>\\n  \\n  <span class=\\"token function\\">watchEffect</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">onCleanup</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//  然后建立监听事件</span>\\n    themeMedia<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">addEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'change'</span><span class=\\"token punctuation\\">,</span> onChange<span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token comment\\">// 并且在退出时取消监听</span>\\n    <span class=\\"token function\\">onCleanup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> themeMedia<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">removeEventListener</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'change'</span><span class=\\"token punctuation\\">,</span> onChange<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n  <span class=\\"token keyword\\">return</span> theme<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
