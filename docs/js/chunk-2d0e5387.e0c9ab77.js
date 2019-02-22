(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5387"],{"940f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"page"},[a("head-title",{attrs:{type:"h2",title:"form / select"}}),t._m(0),t._m(1),a("section",[a("head-title",{attrs:{type:"h3",title:"basic"}}),a("p",[t._v("기본적인 형태로 사용합니다.")]),a("div",{staticClass:"example"},[a("form-select",{attrs:{placeholder:"Please pick fruit."},model:{value:t.fruit,callback:function(e){t.fruit=e},expression:"fruit"}},[a("option",{attrs:{value:"apple"}},[t._v("apple")]),a("option",{attrs:{value:"banana"}},[t._v("banana")]),a("option",{attrs:{value:"mango"}},[t._v("mango")])])],1),t._m(2)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"disabled"}}),a("p",[t._v("비활성화 되었을때의 모습입니다.")]),a("div",{staticClass:"example"},[a("form-select",{attrs:{disabled:!0,placeholder:"disabled select"}})],1),t._m(3)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"multiple"}}),a("p",[t._v("여러가지 항목을 선택할 용도로 사용합니다.")]),a("div",{staticClass:"example"},[a("form-select",{attrs:{multiple:!0}},[a("option",{attrs:{value:"option1"}},[t._v("option #1")]),a("option",{attrs:{value:"option2"}},[t._v("option #2")]),a("option",{attrs:{value:"option3"}},[t._v("option #3")])])],1),t._m(4)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"size"}}),a("p",[t._v("컴포넌트의 높이 사이즈")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-h-center row-gutter-h"},[a("div",{staticClass:"col"},[a("form-select",{attrs:{size:"small",placeholder:"small"}})],1),a("div",{staticClass:"col"},[a("form-select",{attrs:{placeholder:"basic"}})],1),a("div",{staticClass:"col"},[a("form-select",{attrs:{size:"large",placeholder:"large"}})],1)])]),t._m(5)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"inline"}}),a("p",[t._v("인라인 형식으로 사용합니다.")]),a("div",{staticClass:"example"},[a("form-select",{attrs:{inline:!0,placeholder:"inline select"}})],1),t._m(6)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"state"}}),a("p",[t._v("폼이 어떤 상태인지 표시합니다.")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-h-center row-gutter-h"},[a("div",{staticClass:"col"},[a("form-select",{attrs:{state:"primary",placeholder:"primary"}})],1),a("div",{staticClass:"col"},[a("form-select",{attrs:{state:"success",placeholder:"success"}})],1),a("div",{staticClass:"col"},[a("form-select",{attrs:{state:"error",placeholder:"error"}})],1)])]),t._m(7)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"props"}}),t._m(8),t._m(9)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"event"}}),t._m(10),t._m(11)],1)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("blockquote",[a("p",[a("strong",[t._v("\n\t\t\t\tcomponent: "),a("a",{attrs:{href:"https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/select.vue",target:"_blank"}},[t._v("select.vue")]),a("br"),t._v("\n\t\t\t\tscss: "),a("a",{attrs:{href:"https://github.com/redgoose-dev/vue-resource/blob/master/src/components/forms/select.scss",target:"_blank"}},[t._v("select.scss")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n\t\t여러 항목들중에서 하나를 선택하는 "),a("code",[t._v("<form-select/>")]),t._v(" 컴포넌트입니다."),a("br"),a("code",[t._v("slot")]),t._v("을 이용하여 "),a("code",[t._v("<option/>")]),t._v(" 엘리먼트 요소를 만들어서 사용하는 방식입니다.\n\t")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-select placeholder="Please pick fruit." v-model="fruit">\n\t<option value="apple">apple</option>\n\t<option value="banana">banana</option>\n\t<option value="mango">mango</option>\n</form-select>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-select :disabled="true"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-select :multiple="true"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// small\n<form-select size="small" placeholder="small"/>\n\n// normal\n<form-select placeholder="basic"/>\n\n// large\n<form-select size="large" placeholder="large"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-select :inline="true"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// primary\n<form-select state="primary"/>\n\n// success\n<form-select state="success"/>\n\n// error\n<form-select state="error"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("이 컴포넌트는 다음과 같은 "),a("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Type")]),a("th",[t._v("Comment")])])]),a("tbody",[a("tr",[a("td",[t._v("name")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[a("code",[t._v("name")]),t._v(" attribute 로 사용")])]),a("tr",[a("td",[t._v("id")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[a("code",[t._v("id")]),t._v(" attribute 로 사용")])]),a("tr",[a("td",[t._v("selected")]),a("td",[t._v("String,Number")]),a("td",{staticClass:"typo-align--left"},[t._v("선택된 value 값")])]),a("tr",[a("td",[t._v("required")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("필수값인지에 대한 여부")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("비활성화")])]),a("tr",[a("td",[t._v("inline")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("인라인 형식으로 사용")])]),a("tr",[a("td",[t._v("multiple")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("여러항목 사용")])]),a("tr",[a("td",[t._v("placeholder")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("\n\t\t\t\t\t컴포넌트를 설명하는 글을 넣습니다. 이것을 사용하면 값이없는 "),a("code",[t._v("option")]),t._v("이 첫번째로 만들어집니다.\n\t\t\t\t")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 사이즈 "),a("code",[t._v("small, large")])])]),a("tr",[a("td",[t._v("state")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 상태 "),a("code",[t._v("primary, success, error")])])]),a("tr",[a("td",[t._v("native")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("네이티브 형태의 모습으로 사용합니다.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("이 컴포넌트는 다음과 같은 "),a("code",[t._v("event")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Comment")])])]),a("tbody",[a("tr",[a("td",[t._v("@change")]),a("td",{staticClass:"typo-align--left"},[t._v("선택한 요소가 변경되면 호출됩니다.")])])])])}],r={name:"page",components:{"head-title":function(){return a.e("chunk-21c0dd8c").then(a.bind(null,"0e12"))},"form-select":function(){return a.e("chunk-0ea4b642").then(a.bind(null,"90d7"))}},data:function(){return{fruit:""}}},o=r,c=a("2877"),n=Object(c["a"])(o,s,l,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e5387.e0c9ab77.js.map