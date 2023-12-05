const e=JSON.parse('{"key":"v-108d6568","path":"/vue/20230705.html","title":"Vue3使用hook封装常见的几种异步请求函数场景，让开发更加丝滑🚀🚀🚀","lang":"zh-CN","frontmatter":{"title":"Vue3使用hook封装常见的几种异步请求函数场景，让开发更加丝滑🚀🚀🚀","isTimeLine":true,"date":"2023-07-05T00:00:00.000Z","category":["前端"],"tag":["JavaScript","Vue"],"description":"文章同步在公众号：萌萌哒草头将军，欢迎关注 今天继续上次的内容，使用hook封装几种的异步请求函数场景。 🚀 立即请求函数 我们期望的场景是， 初始化一个请求函数，然后根据初始参数，立即发送请求 返回请求结果，并且返回请求回调函数，方便我们根据新的参数再次调用 要求返回值包含加载中状态，错误信息以及正常的数据类型。","head":[["meta",{"property":"og:url","content":"https://github.com/muchfish/blogs/blogs/vue/20230705.html"}],["meta",{"property":"og:site_name","content":"摸鱼散人"}],["meta",{"property":"og:title","content":"Vue3使用hook封装常见的几种异步请求函数场景，让开发更加丝滑🚀🚀🚀"}],["meta",{"property":"og:description","content":"文章同步在公众号：萌萌哒草头将军，欢迎关注 今天继续上次的内容，使用hook封装几种的异步请求函数场景。 🚀 立即请求函数 我们期望的场景是， 初始化一个请求函数，然后根据初始参数，立即发送请求 返回请求结果，并且返回请求回调函数，方便我们根据新的参数再次调用 要求返回值包含加载中状态，错误信息以及正常的数据类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2023-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue3使用hook封装常见的几种异步请求函数场景，让开发更加丝滑🚀🚀🚀\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://muchfish.github.io/blogs\\"}]}"]]},"headers":[{"level":3,"title":"🚀 立即请求函数","slug":"🚀-立即请求函数","link":"#🚀-立即请求函数","children":[]},{"level":3,"title":"🚀 手动请求函数","slug":"🚀-手动请求函数","link":"#🚀-手动请求函数","children":[]},{"level":3,"title":"🚀 自动请求函数","slug":"🚀-自动请求函数","link":"#🚀-自动请求函数","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":4.11,"words":1232},"filePathRelative":"vue/20230705.md","localizedDate":"2023年7月5日","excerpt":"<blockquote>\\n<p>文章同步在公众号：萌萌哒草头将军，欢迎关注</p>\\n</blockquote>\\n<p>今天继续<a href=\\"https://juejin.cn/post/7251523348596441143?share_token=0094c6cd-3e8d-4c14-9409-d955e7462fa5\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上次的内容</a>，使用hook封装几种的异步请求函数场景。</p>\\n<h3> 🚀 立即请求函数</h3>\\n<p>我们期望的场景是，</p>\\n<ul>\\n<li>初始化一个请求函数，然后根据初始参数，立即发送请求</li>\\n<li>返回请求结果，并且返回请求回调函数，方便我们根据新的参数再次调用</li>\\n<li>要求返回值包含加载中状态，错误信息以及正常的数据类型。</li>\\n</ul>","autoDesc":true}');export{e as data};
