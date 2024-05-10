const t=JSON.parse(`{"key":"v-008eca2c","path":"/JavaInterview/Java%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html","title":"2.基础语法","lang":"zh-CN","frontmatter":{"title":"2.基础语法","isTimeLine":true,"date":"2024-05-09T00:00:00.000Z","description":"Java有哪些数据类型？ 基本数据类型 数值型 整数类型（byte、short、int、long） 浮点类型（float、double） 字符型（char） 布尔型（boolean） 基本类型 位数 字节 默认值 最小值 最大值 int 32 4 0 -2^31 2^31-1 short 16 2 0 -2^15 2^15-1 long 64 8 0L -2^63 2^63-1 byte 8 1 0 -128 127 char 16 2 '\\\\u0000' '\\\\u0000' '\\\\uffff' float 32 4 0.0f 1.4E-45 3.4028235E38 double 64 8 0.0d 4.9E-324 1.7976931348623157E308 boolean 1 false 引用数据类型 类（class） 接口（interface） 数组([])","head":[["meta",{"property":"og:url","content":"https://muchfish.github.io/blogs/blogs/JavaInterview/Java%E5%9F%BA%E7%A1%80/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"鱼塘"}],["meta",{"property":"og:title","content":"2.基础语法"}],["meta",{"property":"og:description","content":"Java有哪些数据类型？ 基本数据类型 数值型 整数类型（byte、short、int、long） 浮点类型（float、double） 字符型（char） 布尔型（boolean） 基本类型 位数 字节 默认值 最小值 最大值 int 32 4 0 -2^31 2^31-1 short 16 2 0 -2^15 2^15-1 long 64 8 0L -2^63 2^63-1 byte 8 1 0 -128 127 char 16 2 '\\\\u0000' '\\\\u0000' '\\\\uffff' float 32 4 0.0f 1.4E-45 3.4028235E38 double 64 8 0.0d 4.9E-324 1.7976931348623157E308 boolean 1 false 引用数据类型 类（class） 接口（interface） 数组([])"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T03:11:22.000Z"}],["meta",{"property":"article:author","content":"摸鱼散人"}],["meta",{"property":"article:published_time","content":"2024-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T03:11:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.基础语法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-10T03:11:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"摸鱼散人\\",\\"url\\":\\"https://github.com/muchfish\\"}]}"]]},"headers":[{"level":2,"title":"Java有哪些数据类型？","slug":"java有哪些数据类型","link":"#java有哪些数据类型","children":[]},{"level":2,"title":"什么是自动类型转换、强制类型转换？","slug":"什么是自动类型转换、强制类型转换","link":"#什么是自动类型转换、强制类型转换","children":[]},{"level":2,"title":"什么是自动拆箱/封箱？","slug":"什么是自动拆箱-封箱","link":"#什么是自动拆箱-封箱","children":[]},{"level":2,"title":"&和&&有什么区别？","slug":"和-有什么区别","link":"#和-有什么区别","children":[]},{"level":2,"title":"switch 是否能作用在 byte/long/String上？","slug":"switch-是否能作用在-byte-long-string上","link":"#switch-是否能作用在-byte-long-string上","children":[]},{"level":2,"title":"break ,continue ,return 的区别及作用？","slug":"break-continue-return-的区别及作用","link":"#break-continue-return-的区别及作用","children":[]},{"level":2,"title":"用最有效率的方法计算2乘以8？","slug":"用最有效率的方法计算2乘以8","link":"#用最有效率的方法计算2乘以8","children":[]},{"level":2,"title":"说说自增自减运算？","slug":"说说自增自减运算","link":"#说说自增自减运算","children":[]}],"git":{"createdTime":1715310682000,"updatedTime":1715310682000,"contributors":[{"name":"daiwencheng","email":"1319105206@qq.com","commits":1}]},"readingTime":{"minutes":1.79,"words":538},"filePathRelative":"JavaInterview/Java基础/基础语法.md","localizedDate":"2024年5月9日","excerpt":"<h2> Java有哪些数据类型？</h2>\\n<ul>\\n<li>\\n<p>基本数据类型</p>\\n<ul>\\n<li>数值型\\n<ul>\\n<li>整数类型（byte、short、int、long）</li>\\n<li>浮点类型（float、double）</li>\\n</ul>\\n</li>\\n<li>字符型（char）</li>\\n<li>布尔型（boolean）</li>\\n</ul>\\n<table>\\n<thead>\\n<tr>\\n<th>基本类型</th>\\n<th>位数</th>\\n<th>字节</th>\\n<th>默认值</th>\\n<th>最小值</th>\\n<th>最大值</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>int</td>\\n<td>32</td>\\n<td>4</td>\\n<td>0</td>\\n<td>-2^31</td>\\n<td>2^31-1</td>\\n</tr>\\n<tr>\\n<td>short</td>\\n<td>16</td>\\n<td>2</td>\\n<td>0</td>\\n<td>-2^15</td>\\n<td>2^15-1</td>\\n</tr>\\n<tr>\\n<td>long</td>\\n<td>64</td>\\n<td>8</td>\\n<td>0L</td>\\n<td>-2^63</td>\\n<td>2^63-1</td>\\n</tr>\\n<tr>\\n<td>byte</td>\\n<td>8</td>\\n<td>1</td>\\n<td>0</td>\\n<td>-128</td>\\n<td>127</td>\\n</tr>\\n<tr>\\n<td>char</td>\\n<td>16</td>\\n<td>2</td>\\n<td>'\\\\u0000'</td>\\n<td>'\\\\u0000'</td>\\n<td>'\\\\uffff'</td>\\n</tr>\\n<tr>\\n<td>float</td>\\n<td>32</td>\\n<td>4</td>\\n<td>0.0f</td>\\n<td>1.4E-45</td>\\n<td>3.4028235E38</td>\\n</tr>\\n<tr>\\n<td>double</td>\\n<td>64</td>\\n<td>8</td>\\n<td>0.0d</td>\\n<td>4.9E-324</td>\\n<td>1.7976931348623157E308</td>\\n</tr>\\n<tr>\\n<td>boolean</td>\\n<td>1</td>\\n<td>false</td>\\n<td></td>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\\n</li>\\n<li>\\n<p>引用数据类型</p>\\n<ul>\\n<li>类（class）</li>\\n<li>接口（interface）</li>\\n<li>数组([])</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};
