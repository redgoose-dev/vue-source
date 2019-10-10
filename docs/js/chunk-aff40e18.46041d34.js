(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aff40e18"],{"6bac":function(t,e,n){},"74e1":function(t,e,n){"use strict";var a=n("6bac"),c=n.n(a);c.a},b08d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"page"},[n("head-title",{attrs:{type:"h2",title:"navigation / dropdown"}}),n("blockquote",[n("p",[n("strong",[t._v("component: "),n("a",{attrs:{href:t.$store.state.url.github+"tree/master/src/components/navigation/dropdown",target:"_blank"}},[t._v("navigation.dropdown")])])])]),n("p",[t._v("드롭다운 형태의 네비게이션 컴포넌트입니다.")]),n("section",[n("head-title",{attrs:{type:"h3",title:"basic"}}),n("p",[t._v("기본적인 형태로 사용합니다.")]),n("div",{staticClass:"example"},[n("div",{staticClass:"row row-v-center"},[n("div",[n("navigation-dropdown",{attrs:{context:[{label:"apple",click:t.onClickContextMenu},{label:"banana",click:t.onClickContextMenu},{label:"mango",click:t.onClickContextMenu}]},on:{change:t.onChangeContextOpen}},[n("span",{staticClass:"basic-button"},[t._v("open context")])])],1),n("p",{staticStyle:{margin:"0 0 0 15px"}},[t._v("Selected menu: "+t._s(t.basic))])])]),t._m(0)],1),n("section",[n("head-title",{attrs:{type:"h3",title:"props"}}),t._m(1),t._m(2)],1),n("section",[n("head-title",{attrs:{type:"h3",title:"context"}}),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)],1)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"example-code"},[n("code",[t._v("<navigation-dropdown\n  :context=\"[\n    { label: 'apple', click: function() {} },\n    { label: 'banana', click: function() {} },\n    { label: 'mango', click: function() {} },\n  ]\">\n  <span>button</span>\n</navigation-dropdown>")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("이 컴포넌트는 다음과 같은 "),n("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table--overflow"},[n("table",{staticClass:"table table--center table--bordered"},[n("thead",[n("tr",[n("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[t._v("Name")]),n("th",{staticStyle:{width:"80px"},attrs:{scope:"col"}},[t._v("Type")]),n("th",{attrs:{scope:"col"}},[t._v("Comment")])])]),n("tbody",[n("tr",[n("td",[t._v("context")]),n("td",[t._v("Array")]),n("td",{staticClass:"typo-align--left"},[t._v("메뉴 목록")])]),n("tr",[n("td",[t._v("event-name")]),n("td",[t._v("String")]),n("td",{staticClass:"typo-align--left"},[t._v("컨텍스트 메뉴 선택 이벤트 이름")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n      컨텍스트 메뉴에서 사용되는 메뉴 목록에 대한 섹션입니다."),n("br"),t._v("\n      메뉴를 선택하면 이벤트가 실행됩니다.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("컨텍스트에서 사용하는 "),n("code",[t._v("props")]),t._v("값의 항목들중 하나는 다음과 같습니다.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"example-code"},[n("code",[t._v("{ label: 'apple', click: function() {} }")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("위와같은 객체를 배열로 만들어 "),n("code",[t._v("context")]),t._v("값에 넣으면 됩니다.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table--overflow"},[n("table",{staticClass:"table table--center table--bordered"},[n("thead",[n("tr",[n("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Comment")])])]),n("tbody",[n("tr",[n("td",[t._v("label")]),n("td",{staticClass:"typo-align--left"},[t._v("메뉴 이름")])]),n("tr",[n("td",[t._v("click")]),n("td",{staticClass:"typo-align--left"},[t._v("메뉴를 클릭했을때의 이벤트")])])])])])}],o={name:"page",components:{"head-title":function(){return n.e("chunk-2ade1b67").then(n.bind(null,"0e12"))},"button-basic":function(){return n.e("chunk-15774cf7").then(n.bind(null,"fea2"))},"navigation-dropdown":function(){return n.e("chunk-33efd436").then(n.bind(null,"b3e4"))}},data:function(){return{basic:"none"}},methods:{onClickContextMenu:function(t){this.basic=t.label},onChangeContextOpen:function(t){console.warn("opened context: ".concat(t))}}},l=o,i=(n("74e1"),n("2877")),s=Object(i["a"])(l,a,c,!1,null,"c6b5f17c",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-aff40e18.46041d34.js.map