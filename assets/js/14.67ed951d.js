(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,a,n){"use strict";n.r(a);var s=n(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("p",[t._v("Ở trong Go "),n("i",[n("u",[t._v("các biến (variables)")])]),t._v(" được trình biên dịch định nghĩa và sử dụng rõ ràng.")]),t._v(" "),n("p",[n("code",[t._v("var")]),t._v(" có thể định nghĩa 1 hoặc nhiều biến.")]),t._v(" "),n("p",[t._v("Bạn có thể định nghĩa nhiều biến cùng 1 lúc.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initial"')]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Go sẽ suy luận ra các kiểu của biến.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Các biến được định nghĩa mà không có giá trị tương ứng thì sẽ được khởi tạo với giá trị là "),n("i",[n("u",[t._v("zero_valued")])]),t._v("."),n("br"),t._v("\nVí dụ: "),n("i",[n("u",[t._v("zero_value")])]),t._v(" của "),n("code",[t._v("int")]),t._v(" là 0.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Ngoài ra bạn có thể định nghĩa và khởi tạo một biến theo cú pháp rút gọn là "),n("code",[t._v(":=")]),n("br"),t._v("\nVí dụ: "),n("code",[t._v('var f string = "apple"')]),t._v(" thì ở trong trường hợp này nó sẽ được rút gọn theo cú pháp như sau:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("    f "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apple"')]),t._v("\n    fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-syntax extra-class"},[n("div",{staticClass:"highlight-lines"},[n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ go run variables.go\ninitial\n1 2\ntrue\n0\napple\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);