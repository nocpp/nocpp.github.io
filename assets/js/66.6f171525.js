(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{596:function(t,s,n){"use strict";n.r(s);var e=n(8),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("MVVM与MVC")]),t._v("\nMVVM是MVC的改进版；")]),t._v(" "),n("p",[t._v("MVC, M表示模型/数据，V表示视图，C表示控制器，代码逻辑在控制器里面\n随着前端的不断不发展，不断把后端的一些逻辑放到了前端处理，")]),t._v(" "),n("p",[t._v("MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。\n当然这些事 ViewModel 已经帮我们做了，\n它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。")]),t._v(" "),n("p",[n("strong",[t._v("什么是 Vue.js")]),t._v("\nVue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。")]),t._v(" "),n("p",[t._v("React 和 Vue 有许多相似之处，它们都有：")]),t._v(" "),n("ul",[n("li",[t._v("使用 Virtual DOM")]),t._v(" "),n("li",[t._v("提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件。")]),t._v(" "),n("li",[t._v("将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。")])]),t._v(" "),n("p",[t._v("借鉴了MVVM 模式，代码简洁体积小，运行效率高，适合移动PC端开发；\n本身只关注 UI （和 react 相似），可以轻松引入 Vue 插件或其他的第三方库进行开发。")]),t._v(" "),n("p",[n("strong",[t._v("Vue.js 的主要特点")]),t._v("\n1．轻量级的框架")]),t._v(" "),n("p",[t._v("2．双向数据绑定")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("MVVM 模式")])]),t._v(" "),n("p",[t._v("4．指令\nVue.js 与页面进行交互，主要就是通过内置指令来完成的，指令的作用是当其表达式\n的值改变时相应地将某些行为应用到 DOM 上。")]),t._v(" "),n("p",[t._v("5．组件化\n组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装\n可重用的代码。")]),t._v(" "),n("p",[t._v("6．客户端路由")]),t._v(" "),n("p",[t._v("7．状态管理")]),t._v(" "),n("p",[n("strong",[t._v("响应式声明渲染机制")]),t._v("\nVue 是一个响应式系统，模型（Model）层只是普通的 JavaScript 对象，修改它则视\n图（View）自动更新。Vue 的工作原理是当把一个普通的 JavaScript 对象传给 Vue 实例\n的 data 选项时，Vue 会遍历此对象的所有属性，在属性被访问和修改时通知变化，并把数\n据渲染进 DOM。")]),t._v(" "),n("p",[n("strong",[t._v("组件间通信方法")])]),t._v(" "),n("ul",[n("li",[t._v("父子间通过props，$on, $emit方式，$parent, $children(这是个数组)方式")]),t._v(" "),n("li",[t._v("Pub Sub方式")]),t._v(" "),n("li",[t._v("Event Bus，空Vue对象的$on, $emit方式")]),t._v(" "),n("li",[t._v("Vuex的方式，创建Vue对象，把数据放在之前创建的Vue的data中")]),t._v(" "),n("li",[t._v("Vue.observable Vue2.6新增的，简略版Vuex")]),t._v(" "),n("li",[t._v("父组件provide, 子组件inject方式")]),t._v(" "),n("li",[t._v('$attrs与$listeners的方式，爷孙传值，没放在props上的，就会在$attrs中,v-bind="$attrs"\n包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件\n'),n("a",{attrs:{href:"https://www.jianshu.com/p/a388d38f8c69",target:"_blank",rel:"noopener noreferrer"}},[t._v("$attrs与$listeners"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("VueX实现原理")]),t._v("\n原理就是通过创建一个没有绑定任何元素的Vue实例，把需要管理的值放入这个Vue实例的data中，\n通过这个Vue实例的响应式原理来同步更新。")]),t._v(" "),n("p",[n("strong",[t._v("计算属性与methods的区别")]),t._v("\n计算属性是基于它们的依赖进行缓存的。计算属性只有在它的\n相关依赖发生改变时才会重新求值。这就意味着只要 book 的属性还没有发生改变，多次访\n问 totalPrice 计算属性会立即返回之前的计算结果，而不必再次执行函数。\n相比之下，每当触发重新渲染时，调用方法将总是再次执行函数。")]),t._v(" "),n("p",[n("strong",[t._v("为什么不要把 v-if 和 v-for 同时用在同一个元素上")]),t._v("\n当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，所以这个模板：")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user in users"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.isActive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user.id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {{ user.name }}\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n将会执行以下代码，哪怕只渲染一小部分数据，也会遍历整个数组，\n所以这种情况一般用计算属性替代，或者把v-if放在子元素上\nthis.users.map(function (user) {\n  if (user.isActive) {\n    return user.name\n  }\n})\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[n("strong",[t._v("为什么循环时要用key值")]),t._v("\n当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用“就地更新”的策略。\n"),n("a",{attrs:{href:"https://juejin.cn/post/6872271674692075534",target:"_blank",rel:"noopener noreferrer"}},[t._v("就地更新解释"),n("OutboundLink")],1),t._v("\n如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。\n为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute\nnumber | string | boolean (2.4.2 新增) | symbol (2.5.12 新增)")]),t._v(" "),n("p",[t._v("这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。（表单时会出现值仍然时上个input的情况，\n需要用key来让它重新渲染）")]),t._v(" "),n("p",[t._v("key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。\n如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。\n而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。")]),t._v(" "),n("p",[t._v('只需要在li上加上 :key="item.id" 这样Vue就会根据最新的数据对DOM进行调整，\n而它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。\n可以简单认为key是给每一个DOM节点一个唯一标识，这样Vue就不会启用就地更新了。')]),t._v(" "),n("p",[t._v("它也可以用于强制替换元素/组件而不是重复使用它。比如v-if 显示两个input标签，切换时都会重新渲染，不会有相同值")]),t._v(" "),n("p",[n("strong",[t._v("数组更新检测")]),t._v("\nVue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。")]),t._v(" "),n("ul",[n("li",[t._v("push()")]),t._v(" "),n("li",[t._v("pop()")]),t._v(" "),n("li",[t._v("shift()")]),t._v(" "),n("li",[t._v("unshift()")]),t._v(" "),n("li",[t._v("splice()")]),t._v(" "),n("li",[t._v("sort()")]),t._v(" "),n("li",[t._v("reverse()")])])])}),[],!1,null,null,null);s.default=a.exports}}]);