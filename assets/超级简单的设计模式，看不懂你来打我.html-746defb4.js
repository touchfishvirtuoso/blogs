const n=JSON.parse('{"key":"v-528d4ac2","path":"/posts/%E8%B6%85%E7%BA%A7%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%EF%BC%8C%E7%9C%8B%E4%B8%8D%E6%87%82%E4%BD%A0%E6%9D%A5%E6%89%93%E6%88%91.html","title":"超级简单的设计模式，看不懂你来打我","lang":"zh-CN","frontmatter":{"title":"超级简单的设计模式，看不懂你来打我","isTimeLine":true,"date":"2023-04-21T00:00:00.000Z","category":["前端"],"tag":["JavaScript","设计模式"],"description":"未经允许禁止转载 今天介绍几个经常被提到的设计模式，通俗易懂，包教包会 源码点击这里 单例模式 单例模式的精髓就是不管一个构造函数被实例化多少次，全局只有一个实例 const Singleton = (function () { let instance; function init () { return new Object(); } return function () { if (!instance) { instance = init(); } return instance; } })() let mySingleton1 = new Singltron(); let mySingleton2 = new Singltron(); console.log(mySing1 === mySing2) // true","head":[["meta",{"property":"og:url","content":"https://mmdctjj.github.io/blog2/posts/%E8%B6%85%E7%BA%A7%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%EF%BC%8C%E7%9C%8B%E4%B8%8D%E6%87%82%E4%BD%A0%E6%9D%A5%E6%89%93%E6%88%91.html"}],["meta",{"property":"og:site_name","content":"萌萌哒草头将军"}],["meta",{"property":"og:title","content":"超级简单的设计模式，看不懂你来打我"}],["meta",{"property":"og:description","content":"未经允许禁止转载 今天介绍几个经常被提到的设计模式，通俗易懂，包教包会 源码点击这里 单例模式 单例模式的精髓就是不管一个构造函数被实例化多少次，全局只有一个实例 const Singleton = (function () { let instance; function init () { return new Object(); } return function () { if (!instance) { instance = init(); } return instance; } })() let mySingleton1 = new Singltron(); let mySingleton2 = new Singltron(); console.log(mySing1 === mySing2) // true"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"萌萌哒草头将军"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-04-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"超级简单的设计模式，看不懂你来打我\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"萌萌哒草头将军\\",\\"url\\":\\"https://mmdctjj.github.io/blog2\\"}]}"]]},"headers":[{"level":3,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[]},{"level":3,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[]},{"level":3,"title":"发布/订阅模式","slug":"发布-订阅模式","link":"#发布-订阅模式","children":[]},{"level":3,"title":"中介者模式","slug":"中介者模式","link":"#中介者模式","children":[]},{"level":3,"title":"策略模式","slug":"策略模式","link":"#策略模式","children":[]},{"level":3,"title":"装饰器模式","slug":"装饰器模式","link":"#装饰器模式","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":4.92,"words":1476},"filePathRelative":"posts/超级简单的设计模式，看不懂你来打我.md","localizedDate":"2023年4月21日","excerpt":"<blockquote>\\n<p>未经允许禁止转载</p>\\n</blockquote>\\n<p>今天介绍几个经常被提到的设计模式，通俗易懂，包教包会<br>\\n<a href=\\"https://github.com/mmdctjj/good_good_study/tree/master/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">源码点击这里</a></p>\\n<h3> 单例模式</h3>\\n<p>单例模式的精髓就是不管一个构造函数被实例化多少次，全局只有一个实例</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> Singleton <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">let</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">init</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Object</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>instance<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            instance <span class=\\"token operator\\">=</span> <span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">let</span> mySingleton1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Singltron</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">let</span> mySingleton2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Singltron</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>mySing1 <span class=\\"token operator\\">===</span> mySing2<span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// true</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
