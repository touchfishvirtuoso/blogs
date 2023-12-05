const n=JSON.parse('{"key":"v-0279be68","path":"/vue/20230628.html","title":"🚀🚀vue3自定义指令实践","lang":"zh-CN","frontmatter":{"title":"🚀🚀vue3自定义指令实践","isTimeLine":true,"date":"2023-07-03T00:00:00.000Z","category":["前端"],"tag":["JavaScript","Vue"],"description":"文章首发公众号：萌萌哒草头将军，欢迎关注 🚀 关键接口介绍 最近想体验下自定义指令功能，看了看文档和 vue2 差异不大，语法如下： const myDirective = { // 在绑定元素的 attribute 前 // 或事件监听器应用前调用 created(el, binding, vnode, prevVnode) { // 下面会介绍各个参数的细节 }, // 在元素被插入到 DOM 前调用 beforeMount(el, binding, vnode, prevVnode) {}, // 在绑定元素的父组件 // 及他自己的所有子节点都挂载完成后调用 mounted(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件更新前调用 beforeUpdate(el, binding, vnode, prevVnode) {}, // 在绑定元素的父组件 // 及他自己的所有子节点都更新后调用 updated(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件卸载前调用 beforeUnmount(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件卸载后调用 unmounted(el, binding, vnode, prevVnode) {} }","head":[["meta",{"property":"og:url","content":"https://mmdctjj.github.io/blog2/vue/20230628.html"}],["meta",{"property":"og:site_name","content":"萌萌哒草头将军"}],["meta",{"property":"og:title","content":"🚀🚀vue3自定义指令实践"}],["meta",{"property":"og:description","content":"文章首发公众号：萌萌哒草头将军，欢迎关注 🚀 关键接口介绍 最近想体验下自定义指令功能，看了看文档和 vue2 差异不大，语法如下： const myDirective = { // 在绑定元素的 attribute 前 // 或事件监听器应用前调用 created(el, binding, vnode, prevVnode) { // 下面会介绍各个参数的细节 }, // 在元素被插入到 DOM 前调用 beforeMount(el, binding, vnode, prevVnode) {}, // 在绑定元素的父组件 // 及他自己的所有子节点都挂载完成后调用 mounted(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件更新前调用 beforeUpdate(el, binding, vnode, prevVnode) {}, // 在绑定元素的父组件 // 及他自己的所有子节点都更新后调用 updated(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件卸载前调用 beforeUnmount(el, binding, vnode, prevVnode) {}, // 绑定元素的父组件卸载后调用 unmounted(el, binding, vnode, prevVnode) {} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"萌萌哒草头将军"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2023-07-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🚀🚀vue3自定义指令实践\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"萌萌哒草头将军\\",\\"url\\":\\"https://mmdctjj.github.io/blog2\\"}]}"]]},"headers":[{"level":3,"title":"🚀 关键接口介绍","slug":"🚀-关键接口介绍","link":"#🚀-关键接口介绍","children":[]},{"level":3,"title":"🚀 自定义 loading 组件","slug":"🚀-自定义-loading-组件","link":"#🚀-自定义-loading-组件","children":[]},{"level":3,"title":"🚀 自定义指令","slug":"🚀-自定义指令","link":"#🚀-自定义指令","children":[]},{"level":3,"title":"🎉 最后","slug":"🎉-最后","link":"#🎉-最后","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":4.56,"words":1367},"filePathRelative":"vue/20230628.md","localizedDate":"2023年7月3日","excerpt":"<blockquote>\\n<p>文章首发公众号：萌萌哒草头将军，欢迎关注</p>\\n</blockquote>\\n<h3> 🚀 关键接口介绍</h3>\\n<p>最近想体验下自定义指令功能，看了看文档和 vue2 差异不大，语法如下：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> myDirective <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token comment\\">// 在绑定元素的 attribute 前 </span>\\n<span class=\\"token comment\\">// 或事件监听器应用前调用</span>\\n<span class=\\"token function\\">created</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> \\n<span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 下面会介绍各个参数的细节 }, </span>\\n<span class=\\"token comment\\">// 在元素被插入到 DOM 前调用</span>\\n<span class=\\"token function\\">beforeMount</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 在绑定元素的父组件</span>\\n<span class=\\"token comment\\">// 及他自己的所有子节点都挂载完成后调用</span>\\n<span class=\\"token function\\">mounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 绑定元素的父组件更新前调用</span>\\n<span class=\\"token function\\">beforeUpdate</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 在绑定元素的父组件</span>\\n<span class=\\"token comment\\">// 及他自己的所有子节点都更新后调用</span>\\n<span class=\\"token function\\">updated</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 绑定元素的父组件卸载前调用</span>\\n<span class=\\"token function\\">beforeUnmount</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 绑定元素的父组件卸载后调用</span>\\n<span class=\\"token function\\">unmounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">el<span class=\\"token punctuation\\">,</span> binding<span class=\\"token punctuation\\">,</span> vnode<span class=\\"token punctuation\\">,</span> prevVnode</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span> <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
