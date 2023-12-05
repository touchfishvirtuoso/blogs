const e=JSON.parse('{"key":"v-605ceaf7","path":"/react/%E6%88%91%E5%B1%85%E7%84%B6%E7%94%A8%E9%94%99%E4%BA%86useMemo%E5%92%8CuseCallback%E8%BF%99%E4%B9%88%E4%B9%85.html","title":"💡我居然用错了useMemo和useCallback这么久？","lang":"zh-CN","frontmatter":{"title":"💡我居然用错了useMemo和useCallback这么久？","isTimeLine":true,"date":"2023-06-05T00:00:00.000Z","category":["前端"],"tag":["JavaScript","React"],"description":"文章首发公众号：萌萌哒草头将军，最近关注有🎁，欢迎关注！ 我们知道，useMemo和useCallback主要作用是缓存中间状态，减少无意义的的render从而提高性能。但是最近我发现我对它们的使用一直有误解！ 💡推荐阅读 🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉 🎉干货满满，React设计原理(二)：藏在源码里的两个圈，关键的链表结构和双缓存技术🎉","head":[["meta",{"property":"og:url","content":"https://mmdctjj.github.io/blog2/blogs/react/%E6%88%91%E5%B1%85%E7%84%B6%E7%94%A8%E9%94%99%E4%BA%86useMemo%E5%92%8CuseCallback%E8%BF%99%E4%B9%88%E4%B9%85.html"}],["meta",{"property":"og:site_name","content":"摸鱼散人"}],["meta",{"property":"og:title","content":"💡我居然用错了useMemo和useCallback这么久？"}],["meta",{"property":"og:description","content":"文章首发公众号：萌萌哒草头将军，最近关注有🎁，欢迎关注！ 我们知道，useMemo和useCallback主要作用是缓存中间状态，减少无意义的的render从而提高性能。但是最近我发现我对它们的使用一直有误解！ 💡推荐阅读 🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉 🎉干货满满，React设计原理(二)：藏在源码里的两个圈，关键的链表结构和双缓存技术🎉"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:35:09.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2023-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:35:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"💡我居然用错了useMemo和useCallback这么久？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-05T07:35:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://muchfish.github.io/blogs\\"}]}"]]},"headers":[{"level":3,"title":"💡推荐阅读","slug":"💡推荐阅读","link":"#💡推荐阅读","children":[]},{"level":2,"title":"💎 对useMemo的误解","slug":"💎-对usememo的误解","link":"#💎-对usememo的误解","children":[]},{"level":2,"title":"💎 对useCallback的误解","slug":"💎-对usecallback的误解","link":"#💎-对usecallback的误解","children":[]},{"level":2,"title":"💎 总结","slug":"💎-总结","link":"#💎-总结","children":[]}],"git":{"createdTime":1701761709000,"updatedTime":1701761709000,"contributors":[{"name":"daiwencheng","email":"daiwencheng@shengqugames.com","commits":1}]},"readingTime":{"minutes":3.7,"words":1109},"filePathRelative":"react/我居然用错了useMemo和useCallback这么久.md","localizedDate":"2023年6月5日","excerpt":"<blockquote>\\n<p>文章首发公众号：萌萌哒草头将军，最近关注有🎁，欢迎关注！</p>\\n</blockquote>\\n<p>我们知道，<code>useMemo</code>和<code>useCallback</code>主要作用是缓存中间状态，减少无意义的的<code>render</code>从而提高性能。但是最近我发现我对它们的使用一直有误解！</p>\\n<h3> 💡推荐阅读</h3>\\n<ul>\\n<li><a href=\\"https://juejin.cn/post/7241567583504728119\\" title=\\"https://juejin.cn/post/7241567583504728119\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">🎉干货满满，React设计原理(一)：藏在源码里的紧箍咒，几个容易混淆的变量🎉</a></li>\\n<li><a href=\\"https://link.juejin.cn/?target=\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">🎉干货满满，React设计原理(二)：藏在源码里的两个圈，关键的链表结构和双缓存技术🎉</a></li>\\n</ul>","autoDesc":true}');export{e as data};
