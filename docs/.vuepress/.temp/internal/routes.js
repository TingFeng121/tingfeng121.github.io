export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>Place your introduction and profile here.</p>\n","r":{"minutes":0.04,"words":13},"t":"Intro Page","i":"circle-info","y":"a"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Blog Home","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["Guide"],"g":["disable"],"e":"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\n","r":{"minutes":0.28,"words":83},"t":"Disabling layout and features","i":"gears","O":4,"y":"a"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"c":["Guide"],"g":["encryption"],"n":true,"r":{"minutes":0.3,"words":90},"t":"Encryption Article","i":"lock","y":"a"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["Guide"],"g":["Layout"],"e":"<p>The layout contains:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">Navbar</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">Sidebar</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">Footer</a></li>\n</ul>","r":{"minutes":0.35,"words":105},"t":"Layout","i":"object-group","O":2,"y":"a"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["Guide"],"g":["Markdown"],"e":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\n","r":{"minutes":2.67,"words":801},"t":"Markdown Enhance","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"January 1, 2020","c":["Guide"],"g":["Page config","Guide"],"u":true,"e":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\n","r":{"minutes":1.14,"words":341},"t":"Page Config","i":"file","O":3,"y":"a"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["Guide"],"r":{"minutes":0.04,"words":12},"t":"Features demo","i":"laptop-code","y":"a"} }],
  ["/posts/cherry.html", { loader: () => import(/* webpackChunkName: "posts_cherry.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/cherry.html.js"), meta: {"d":1641686400000,"l":"January 9, 2022","c":["Cherry"],"g":["red","small","round"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":27},"t":"Cherry","i":"pen-to-square","y":"a"} }],
  ["/posts/dragonfruit.html", { loader: () => import(/* webpackChunkName: "posts_dragonfruit.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/dragonfruit.html.js"), meta: {"d":1641772800000,"l":"January 10, 2022","c":["Dragon Fruit","Fruit"],"g":["red","big"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.1,"words":29},"t":"Dragon Fruit","i":"pen-to-square","y":"a"} }],
  ["/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "posts_strawberry.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"January 11, 2022","c":["Fruit","Strawberry"],"g":["red","small"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":27},"t":"Strawberry","i":"pen-to-square","y":"a"} }],
  ["/posts/tomato.html", { loader: () => import(/* webpackChunkName: "posts_tomato.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"January 12, 2022","c":["Vegetable"],"g":["red","round"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.11,"words":32},"t":"Tomato","i":"pen-to-square","y":"a"} }],
  ["/zh/intro.html", { loader: () => import(/* webpackChunkName: "zh_intro.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.08,"words":23},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/posts/apple/1.html", { loader: () => import(/* webpackChunkName: "posts_apple_1.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/apple/1.html.js"), meta: {"d":1640995200000,"l":"January 1, 2022","c":["Apple"],"g":["red","big","round"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":28},"t":"Apple 1","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/2.html", { loader: () => import(/* webpackChunkName: "posts_apple_2.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/apple/2.html.js"), meta: {"d":1641081600000,"l":"January 2, 2022","c":["Apple"],"g":["red","big","round"],"e":"\n<p>A apple article being stared.</p>\n","r":{"minutes":0.12,"words":36},"t":"Apple 2","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/3.html", { loader: () => import(/* webpackChunkName: "posts_apple_3.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/apple/3.html.js"), meta: {"d":1641168000000,"l":"January 3, 2022","c":["Apple","Fruit"],"g":["red","big","round"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.1,"words":29},"t":"Apple 3","i":"pen-to-square","y":"a"} }],
  ["/posts/apple/4.html", { loader: () => import(/* webpackChunkName: "posts_apple_4.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/apple/4.html.js"), meta: {"d":1641254400000,"l":"January 4, 2022","c":["Apple","Fruit"],"g":["red","big","round"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.1,"words":29},"t":"Apple 4","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/1.html", { loader: () => import(/* webpackChunkName: "posts_banana_1.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/banana/1.html.js"), meta: {"d":1641340800000,"l":"January 5, 2022","c":["Banana","Fruit"],"g":["yellow","curly","long"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.1,"words":29},"t":"Banana 1","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/2.html", { loader: () => import(/* webpackChunkName: "posts_banana_2.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/banana/2.html.js"), meta: {"d":1641427200000,"l":"January 6, 2022","c":["Banana","Fruit"],"g":["yellow","curly","long"],"e":"\n<p>A banana article being stared with number <code>10</code>.</p>\n","r":{"minutes":0.14,"words":41},"t":"Banana 2","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/3.html", { loader: () => import(/* webpackChunkName: "posts_banana_3.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/banana/3.html.js"), meta: {"d":1641513600000,"l":"January 7, 2022","c":["Banana"],"g":["yellow","curly","long"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":28},"t":"Banana 3","i":"pen-to-square","y":"a"} }],
  ["/posts/banana/4.html", { loader: () => import(/* webpackChunkName: "posts_banana_4.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/banana/4.html.js"), meta: {"d":1641600000000,"l":"January 8, 2022","c":["Banana"],"g":["yellow","curly","long"],"e":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n","r":{"minutes":0.09,"words":28},"t":"Banana 4","i":"pen-to-square","y":"a"} }],
  ["/zh/demo/disable.html", { loader: () => import(/* webpackChunkName: "zh_demo_disable.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","r":{"minutes":0.43,"words":128},"t":"布局与功能禁用","i":"gears","O":4,"y":"a"} }],
  ["/zh/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "zh_demo_encrypt.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/encrypt.html.js"), meta: {"c":["使用指南"],"g":["加密"],"n":true,"r":{"minutes":0.51,"words":154},"t":"密码加密的文章","i":"lock","y":"a"} }],
  ["/zh/demo/layout.html", { loader: () => import(/* webpackChunkName: "zh_demo_layout.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","r":{"minutes":0.53,"words":159},"t":"布局","i":"object-group","O":2,"y":"a"} }],
  ["/zh/demo/markdown.html", { loader: () => import(/* webpackChunkName: "zh_demo_markdown.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","r":{"minutes":3.51,"words":1053},"t":"Markdown 展示","i":"fab fa-markdown","O":2,"y":"a"} }],
  ["/zh/demo/page.html", { loader: () => import(/* webpackChunkName: "zh_demo_page.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/page.html.js"), meta: {"a":"Ms.Hope","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","r":{"minutes":1.76,"words":529},"t":"页面配置","i":"file","O":3,"y":"a"} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "zh_demo_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"c":["使用指南"],"r":{"minutes":0.07,"words":22},"t":"主要功能与配置演示","i":"laptop-code","y":"a"} }],
  ["/zh/posts/cherry.html", { loader: () => import(/* webpackChunkName: "zh_posts_cherry.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/cherry.html.js"), meta: {"d":1641686400000,"l":"2022年1月9日","c":["樱桃"],"g":["红","小","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":33},"t":"樱桃","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/dragonfruit.html", { loader: () => import(/* webpackChunkName: "zh_posts_dragonfruit.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/dragonfruit.html.js"), meta: {"d":1641772800000,"l":"2022年1月10日","c":["火龙果","水果"],"g":["红","大"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"火龙果","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "zh_posts_strawberry.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"2022年1月11日","c":["水果","草莓"],"g":["红","小"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":34},"t":"草莓","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/tomato.html", { loader: () => import(/* webpackChunkName: "zh_posts_tomato.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"2022年1月12日","c":["蔬菜"],"g":["红","圆"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.13,"words":38},"t":"番茄","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/apple/1.html", { loader: () => import(/* webpackChunkName: "zh_posts_apple_1.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/1.html.js"), meta: {"d":1640995200000,"l":"2022年1月1日","c":["苹果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":34},"t":"苹果 1","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/apple/2.html", { loader: () => import(/* webpackChunkName: "zh_posts_apple_2.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/2.html.js"), meta: {"d":1641081600000,"l":"2022年1月2日","c":["苹果"],"g":["红","大","圆"],"e":"\n<p>一个被星标了的苹果文章。</p>\n","r":{"minutes":0.16,"words":48},"t":"苹果 2","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/apple/3.html", { loader: () => import(/* webpackChunkName: "zh_posts_apple_3.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/3.html.js"), meta: {"d":1641168000000,"l":"2022年1月3日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"苹果 3","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/apple/4.html", { loader: () => import(/* webpackChunkName: "zh_posts_apple_4.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/4.html.js"), meta: {"d":1641254400000,"l":"2022年1月4日","c":["苹果","水果"],"g":["红","大","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"苹果 4","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/banana/1.html", { loader: () => import(/* webpackChunkName: "zh_posts_banana_1.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/1.html.js"), meta: {"d":1641340800000,"l":"2022年1月5日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.13,"words":38},"t":"香蕉 1","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/banana/2.html", { loader: () => import(/* webpackChunkName: "zh_posts_banana_2.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/2.html.js"), meta: {"d":1641427200000,"l":"2022年1月6日","c":["香蕉","水果"],"g":["黄","弯曲的","长"],"e":"\n<p>一个被数字 <code>10</code> 星标了的香蕉文章。</p>\n","r":{"minutes":0.18,"words":55},"t":"香蕉 2","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/banana/3.html", { loader: () => import(/* webpackChunkName: "zh_posts_banana_3.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/3.html.js"), meta: {"d":1641513600000,"l":"2022年1月7日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"香蕉 3","i":"pen-to-square","y":"a"} }],
  ["/zh/posts/banana/4.html", { loader: () => import(/* webpackChunkName: "zh_posts_banana_4.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/4.html.js"), meta: {"d":1641600000000,"l":"2022年1月8日","c":["香蕉"],"g":["黄","弯曲的","长"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.12,"words":36},"t":"香蕉 4","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/posts/apple/", { loader: () => import(/* webpackChunkName: "posts_apple_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/apple/index.html.js"), meta: {"t":"Apple"} }],
  ["/posts/banana/", { loader: () => import(/* webpackChunkName: "posts_banana_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/posts/banana/index.html.js"), meta: {"t":"Banana"} }],
  ["/zh/posts/", { loader: () => import(/* webpackChunkName: "zh_posts_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/zh/posts/apple/", { loader: () => import(/* webpackChunkName: "zh_posts_apple_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/apple/index.html.js"), meta: {"t":"Apple"} }],
  ["/zh/posts/banana/", { loader: () => import(/* webpackChunkName: "zh_posts_banana_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/posts/banana/index.html.js"), meta: {"t":"Banana"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"Category","I":false} }],
  ["/category/guide/", { loader: () => import(/* webpackChunkName: "category_guide_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/guide/index.html.js"), meta: {"t":"Guide Category","I":false} }],
  ["/category/cherry/", { loader: () => import(/* webpackChunkName: "category_cherry_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/cherry/index.html.js"), meta: {"t":"Cherry Category","I":false} }],
  ["/category/dragon-fruit/", { loader: () => import(/* webpackChunkName: "category_dragon-fruit_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/dragon-fruit/index.html.js"), meta: {"t":"Dragon Fruit Category","I":false} }],
  ["/category/fruit/", { loader: () => import(/* webpackChunkName: "category_fruit_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/fruit/index.html.js"), meta: {"t":"Fruit Category","I":false} }],
  ["/category/strawberry/", { loader: () => import(/* webpackChunkName: "category_strawberry_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/strawberry/index.html.js"), meta: {"t":"Strawberry Category","I":false} }],
  ["/category/vegetable/", { loader: () => import(/* webpackChunkName: "category_vegetable_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/vegetable/index.html.js"), meta: {"t":"Vegetable Category","I":false} }],
  ["/category/apple/", { loader: () => import(/* webpackChunkName: "category_apple_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/apple/index.html.js"), meta: {"t":"Apple Category","I":false} }],
  ["/category/banana/", { loader: () => import(/* webpackChunkName: "category_banana_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/category/banana/index.html.js"), meta: {"t":"Banana Category","I":false} }],
  ["/zh/category/", { loader: () => import(/* webpackChunkName: "zh_category_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/zh/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_category_使用指南_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/使用指南/index.html.js"), meta: {"t":"使用指南 分类","I":false} }],
  ["/zh/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_category_指南_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/指南/index.html.js"), meta: {"t":"指南 分类","I":false} }],
  ["/zh/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "zh_category_樱桃_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/樱桃/index.html.js"), meta: {"t":"樱桃 分类","I":false} }],
  ["/zh/category/%E7%81%AB%E9%BE%99%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_火龙果_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/火龙果/index.html.js"), meta: {"t":"火龙果 分类","I":false} }],
  ["/zh/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_水果_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/水果/index.html.js"), meta: {"t":"水果 分类","I":false} }],
  ["/zh/category/%E8%8D%89%E8%8E%93/", { loader: () => import(/* webpackChunkName: "zh_category_草莓_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/草莓/index.html.js"), meta: {"t":"草莓 分类","I":false} }],
  ["/zh/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(/* webpackChunkName: "zh_category_蔬菜_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/蔬菜/index.html.js"), meta: {"t":"蔬菜 分类","I":false} }],
  ["/zh/category/%E8%8B%B9%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "zh_category_苹果_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/苹果/index.html.js"), meta: {"t":"苹果 分类","I":false} }],
  ["/zh/category/%E9%A6%99%E8%95%89/", { loader: () => import(/* webpackChunkName: "zh_category_香蕉_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/category/香蕉/index.html.js"), meta: {"t":"香蕉 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"Tag","I":false} }],
  ["/tag/disable/", { loader: () => import(/* webpackChunkName: "tag_disable_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/disable/index.html.js"), meta: {"t":"Tag: disable","I":false} }],
  ["/tag/encryption/", { loader: () => import(/* webpackChunkName: "tag_encryption_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/encryption/index.html.js"), meta: {"t":"Tag: encryption","I":false} }],
  ["/tag/layout/", { loader: () => import(/* webpackChunkName: "tag_layout_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/layout/index.html.js"), meta: {"t":"Tag: Layout","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"t":"Tag: Markdown","I":false} }],
  ["/tag/page-config/", { loader: () => import(/* webpackChunkName: "tag_page-config_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/page-config/index.html.js"), meta: {"t":"Tag: Page config","I":false} }],
  ["/tag/guide/", { loader: () => import(/* webpackChunkName: "tag_guide_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/guide/index.html.js"), meta: {"t":"Tag: Guide","I":false} }],
  ["/tag/red/", { loader: () => import(/* webpackChunkName: "tag_red_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/red/index.html.js"), meta: {"t":"Tag: red","I":false} }],
  ["/tag/small/", { loader: () => import(/* webpackChunkName: "tag_small_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/small/index.html.js"), meta: {"t":"Tag: small","I":false} }],
  ["/tag/round/", { loader: () => import(/* webpackChunkName: "tag_round_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/round/index.html.js"), meta: {"t":"Tag: round","I":false} }],
  ["/tag/big/", { loader: () => import(/* webpackChunkName: "tag_big_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/big/index.html.js"), meta: {"t":"Tag: big","I":false} }],
  ["/tag/yellow/", { loader: () => import(/* webpackChunkName: "tag_yellow_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/yellow/index.html.js"), meta: {"t":"Tag: yellow","I":false} }],
  ["/tag/curly/", { loader: () => import(/* webpackChunkName: "tag_curly_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/curly/index.html.js"), meta: {"t":"Tag: curly","I":false} }],
  ["/tag/long/", { loader: () => import(/* webpackChunkName: "tag_long_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/tag/long/index.html.js"), meta: {"t":"Tag: long","I":false} }],
  ["/zh/tag/", { loader: () => import(/* webpackChunkName: "zh_tag_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/zh/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "zh_tag_禁用_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/禁用/index.html.js"), meta: {"t":"标签: 禁用","I":false} }],
  ["/zh/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "zh_tag_加密_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/加密/index.html.js"), meta: {"t":"标签: 加密","I":false} }],
  ["/zh/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "zh_tag_布局_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/布局/index.html.js"), meta: {"t":"标签: 布局","I":false} }],
  ["/zh/tag/markdown/", { loader: () => import(/* webpackChunkName: "zh_tag_markdown_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/markdown/index.html.js"), meta: {"t":"标签: Markdown","I":false} }],
  ["/zh/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "zh_tag_页面配置_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/页面配置/index.html.js"), meta: {"t":"标签: 页面配置","I":false} }],
  ["/zh/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "zh_tag_使用指南_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/使用指南/index.html.js"), meta: {"t":"标签: 使用指南","I":false} }],
  ["/zh/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "zh_tag_红_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/红/index.html.js"), meta: {"t":"标签: 红","I":false} }],
  ["/zh/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "zh_tag_小_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/小/index.html.js"), meta: {"t":"标签: 小","I":false} }],
  ["/zh/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "zh_tag_圆_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/圆/index.html.js"), meta: {"t":"标签: 圆","I":false} }],
  ["/zh/tag/%E5%A4%A7/", { loader: () => import(/* webpackChunkName: "zh_tag_大_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/大/index.html.js"), meta: {"t":"标签: 大","I":false} }],
  ["/zh/tag/%E9%BB%84/", { loader: () => import(/* webpackChunkName: "zh_tag_黄_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/黄/index.html.js"), meta: {"t":"标签: 黄","I":false} }],
  ["/zh/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/", { loader: () => import(/* webpackChunkName: "zh_tag_弯曲的_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/弯曲的/index.html.js"), meta: {"t":"标签: 弯曲的","I":false} }],
  ["/zh/tag/%E9%95%BF/", { loader: () => import(/* webpackChunkName: "zh_tag_长_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/tag/长/index.html.js"), meta: {"t":"标签: 长","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"Articles","I":false} }],
  ["/zh/article/", { loader: () => import(/* webpackChunkName: "zh_article_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"Star","I":false} }],
  ["/zh/star/", { loader: () => import(/* webpackChunkName: "zh_star_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"Timeline","I":false} }],
  ["/zh/timeline/", { loader: () => import(/* webpackChunkName: "zh_timeline_index.html" */"D:/vue/my-docs/src/.vuepress/.temp/pages/zh/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);
