(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{218:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("h2",{attrs:{id:"安装-dva-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-dva-cli"}},[t._v("#")]),t._v(" 安装 dva-cli")]),t._v(" "),a("p",[t._v("通过 npm 安装 dva-cli 并确保版本是 "),a("code",[t._v("0.9.1")]),t._v(" 或以上。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" dva-cli -g\n$ dva -v\ndva-cli version "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v(".1\n")])])]),a("h2",{attrs:{id:"创建新应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新应用"}},[t._v("#")]),t._v(" 创建新应用")]),t._v(" "),a("p",[t._v("安装完 dva-cli 之后，就可以在命令行里访问到 "),a("code",[t._v("dva")]),t._v(" 命令（"),a("a",{attrs:{href:"http://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found",target:"_blank",rel:"noopener noreferrer"}},[t._v("不能访问？"),a("OutboundLink")],1),t._v("）。现在，你可以通过 "),a("code",[t._v("dva new")]),t._v(" 创建新应用。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ dva new dva-quickstart\n")])])]),a("p",[t._v("这会创建 "),a("code",[t._v("dva-quickstart")]),t._v(" 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。")]),t._v(" "),a("p",[t._v("然后我们 "),a("code",[t._v("cd")]),t._v(" 进入 "),a("code",[t._v("dva-quickstart")]),t._v(" 目录，并启动开发服务器：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" dva-quickstart\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),a("p",[t._v("几秒钟后，你会看到以下输出：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Compiled successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nThe app is running at:\n\n  http://localhost:8000/\n\nNote that the development build is not optimized.\nTo create a production build, use "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build.\n")])])]),a("p",[t._v("在浏览器里打开 http://localhost:8000 ，你会看到 dva 的欢迎界面。")]),t._v(" "),a("h2",{attrs:{id:"使用-antd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-antd"}},[t._v("#")]),t._v(" 使用 antd")]),t._v(" "),a("p",[t._v("通过 npm 安装 "),a("code",[t._v("antd")]),t._v(" 和 "),a("code",[t._v("babel-plugin-import")]),t._v(" 。"),a("code",[t._v("babel-plugin-import")]),t._v(" 是用来按需加载 antd 的脚本和样式的，详见 "),a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" antd babel-plugin-import --save\n")])])]),a("p",[t._v("编辑 "),a("code",[t._v(".webpackrc")]),t._v("，使 "),a("code",[t._v("babel-plugin-import")]),t._v(" 插件生效。")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("{\n"),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+  "extraBabelPlugins": [\n+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]\n+  ]\n')]),t._v("}\n")])])]),a("blockquote",[a("p",[t._v("注：dva-cli 基于 roadhog 实现 build 和 dev，更多 "),a("code",[t._v(".webpackrc")]),t._v(" 的配置详见 "),a("a",{attrs:{href:"https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("roadhog#配置"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"定义路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义路由"}},[t._v("#")]),t._v(" 定义路由")]),t._v(" "),a("p",[t._v("我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。")]),t._v(" "),a("p",[t._v("新建 route component "),a("code",[t._v("routes/Products.js")]),t._v("，内容如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Products")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("List "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" Products"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("添加路由信息到路由表，编辑 "),a("code",[t._v("router.js")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ import Products from './routes/Products';\n")]),t._v("...\n"),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+ <Route path="/products" exact component={Products} />\n')])])])]),a("p",[t._v("然后在浏览器里打开 http://localhost:8000/#/products ，你应该能看到前面定义的 "),a("code",[t._v("<h2>")]),t._v(" 标签。")]),t._v(" "),a("h2",{attrs:{id:"编写-ui-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写-ui-component"}},[t._v("#")]),t._v(" 编写 UI Component")]),t._v(" "),a("p",[t._v("随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，在 dva 里你可以把这部分抽成 component 。")]),t._v(" "),a("p",[t._v("我们来编写一个 "),a("code",[t._v("ProductList")]),t._v(" component，这样就能在不同的地方显示产品列表了。")]),t._v(" "),a("p",[t._v("新建 "),a("code",[t._v("components/ProductList.js")]),t._v(" 文件：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PropTypes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop-types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Popconfirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ProductList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" onDelete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" products "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" columns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Actions'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Popconfirm title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Delete?"')]),t._v(" onConfirm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Delete"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Popconfirm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Table\n      dataSource"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nProductList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  onDelete"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  products"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ProductList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"定义-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-model"}},[t._v("#")]),t._v(" 定义 Model")]),t._v(" "),a("p",[t._v("完成 UI 后，现在开始处理数据和逻辑。")]),t._v(" "),a("p",[t._v("dva 通过 model 的概念把一个领域的模型管理起来，包含同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions 。")]),t._v(" "),a("p",[t._v("新建 model "),a("code",[t._v("models/products.js")]),t._v(" ：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  reducers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个 model 里：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("namespace")]),t._v(" 表示在全局 state 上的 key")]),t._v(" "),a("li",[a("code",[t._v("state")]),t._v(" 是初始值，在这里是空数组")]),t._v(" "),a("li",[a("code",[t._v("reducers")]),t._v(" 等同于 redux 里的 reducer，接收 action，同步更新 state")])]),t._v(" "),a("p",[t._v("然后别忘记在 "),a("code",[t._v("index.js")]),t._v(" 里载入他：")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("// 3. Model\n"),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ app.model(require('./models/products').default);\n")])])])]),a("h2",{attrs:{id:"connect-起来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-起来"}},[t._v("#")]),t._v(" connect 起来")]),t._v(" "),a("p",[t._v("到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?")]),t._v(" "),a("p",[t._v("dva 提供了 connect 方法。如果你熟悉 redux，这个 connect 就是 react-redux 的 connect 。")]),t._v(" "),a("p",[t._v("编辑 "),a("code",[t._v("routes/Products.js")]),t._v("，替换为以下内容：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dva'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ProductList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../components/ProductList'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Products")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dispatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" products "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'products/delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("List "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" Products"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ProductList onDelete"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("handleDelete"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" products"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export default Products;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" products "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("最后，我们还需要一些初始数据让这个应用 run 起来。编辑 "),a("code",[t._v("index.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[a("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- const app = dva();\n")]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ const app = dva({\n+   initialState: {\n+     products: [\n+       { name: 'dva', id: 1 },\n+       { name: 'antd', id: 2 },\n+     ],\n+   },\n+ });\n")])])])]),a("p",[t._v("刷新浏览器，应该能看到以下效果：")]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"}})]),t._v(" "),a("h2",{attrs:{id:"构建应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建应用"}},[t._v("#")]),t._v(" 构建应用")]),t._v(" "),a("p",[t._v("完成开发并且在开发环境验证之后，就需要部署给我们的用户了。先执行下面的命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("几秒后，输出应该如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" @ build /private/tmp/myapp\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" roadhog build\n\nCreating an optimized production build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nCompiled successfully.\n\nFile sizes after gzip:\n\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("82.98")]),t._v(" KB  dist/index.js\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("270")]),t._v(" B     dist/index.css\n")])])]),a("p",[a("code",[t._v("build")]),t._v(" 命令会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。然后你可以在 "),a("code",[t._v("dist/")]),t._v(" 目录下找到这些文件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);