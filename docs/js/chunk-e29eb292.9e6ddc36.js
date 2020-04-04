(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e29eb292"],{"4b2a":function(t,e,s){},"5ddd":function(t,e,s){"use strict";var a=s("4b2a"),i=s.n(a);i.a},8745:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"page"},[s("head-title",{attrs:{type:"h2",title:"loading / basic"}}),s("blockquote",[s("p",[s("strong",[t._v("component: "),s("a",{attrs:{href:t.$store.state.url.github+"tree/master/src/components/loading/basic",target:"_blank"}},[t._v("loading.basic")])])])]),t._m(0),s("section",[s("head-title",{attrs:{type:"h3",title:"basic"}}),s("p",[t._v("기본적인 형태로 사용합니다.")]),s("div",{staticClass:"example"},[s("loading-basic",{attrs:{size:18,type:"ios"}})],1),t._m(1)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"props"}}),t._m(2),s("div",{staticClass:"table--overflow"},[s("table",{staticClass:"table table--center table--bordered"},[t._m(3),s("tbody",[t._m(4),s("tr",[s("td",[t._v("size")]),s("td",[t._v("Number")]),s("td",{staticClass:"typo-align--left"},[t._v("\n            컴포넌트의 사이즈입니다."),s("br"),t._v("\n            스타일시트로 사이즈를 조정하고 싶다면 값을 "),s("code",[t._v("null")]),t._v("로 변경해주세요."),s("br"),t._v("\n            옵션에 대한 내용은 "),s("a",{attrs:{href:t.link_types,target:"_blank"}},[t._v("loading-types")]),t._v("페이지에서 참고해주세요.\n          ")])]),t._m(5)])])])],1),s("section",[s("head-title",{attrs:{type:"h3",title:"type"}}),s("p",[t._v("타입에 따라 로딩의 디자인이 변합니다.")]),s("div",{staticClass:"example"},[s("div",{staticClass:"row row-gutter types-index"},t._l(t.types,(function(e,a){return s("div",{staticClass:"col col-4 col-sm-3 col-md-2"},[s("div",[s("span",[s("loading-basic",{attrs:{size:24,type:e}})],1)]),s("em",[t._v(t._s(e))])])})),0)]),t._m(6)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"size"}}),s("p",[t._v("로딩 컴포너트의 사이즈")]),s("div",{staticClass:"example"},[s("div",{staticClass:"row row-v-center row-h-around"},[s("div",[s("loading-basic",{attrs:{size:36,type:"blocks"}})],1),s("div",[s("loading-basic",{staticStyle:{width:"16px",height:"16px"},attrs:{size:null,type:"ring"}})],1)])]),t._m(7)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"options"}}),s("p",[t._v("\n      타입에 따라서 다른 옵션들을 사용할 수 있습니다."),s("br"),t._v("\n      옵션에 관한 내용은 "),s("a",{attrs:{href:t.link_types,target:"_blank"}},[t._v("loading-types")]),t._v("페이지를 참고해주세요.\n    ")]),s("div",{staticClass:"example"},[s("div",{staticClass:"row row-v-center row-h-around"},[s("div",{staticStyle:{"background-color":"#222",padding:"16px"}},[s("loading-basic",{attrs:{type:"ios",options:{play:!0,dark:!0}}})],1),s("div",[s("loading-basic",{attrs:{type:"boxes",options:{color:"green"}}})],1)])]),t._m(8)],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n    무언가 처리하고 있을때의 모습을 보여줄때 사용하는 컴포넌트"),s("br"),t._v("\n    아이콘 형태의 모습을 하고 있으며 반복적으로 움직입니다.\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[s("code",[t._v('<loading-basic :size="16"/>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("이 컴포넌트는 다음과 같은 "),s("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticStyle:{width:"100px"},attrs:{scope:"col"}},[t._v("Name")]),s("th",{staticStyle:{width:"80px"},attrs:{scope:"col"}},[t._v("Type")]),s("th",{attrs:{scope:"col"}},[t._v("Comment")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("name")]),s("td",[t._v("String")]),s("td",{staticClass:"typo-align--left"},[t._v("로딩의 타입")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td",[t._v("options")]),s("td",[t._v("Object")]),s("td",{staticClass:"typo-align--left"},[t._v("컴포넌트 타입에 관한 옵션")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[s("code",[t._v('<loading-basic type="ring"/>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[s("code",[t._v('// set number\n<loading-basic :size="36"/>\n\n// using stylesheet\n<loading-basic :size="null" style="width: 16px; height: 16px"/>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[s("code",[t._v('// ios\n<loading-basic type="ios" :options="{ play: true, dark: true }"/>\n\n// boxes\n<loading-basic type="boxes" :options="{ color: \'green\' }"/>')])])}],n={name:"page",components:{"head-title":function(){return s.e("chunk-2ade1b67").then(s.bind(null,"0e12"))},"loading-basic":function(){return s.e("chunk-65de491e").then(s.bind(null,"0b50"))}},data:function(){return{types:["ios","ring","circle","material","boxes","box","balls","blocks"],link_types:"https://github.com/redgoose-dev/vue-resource/blob/master/src/components/loading/basic/types.md"}}},l=n,r=(s("5ddd"),s("2877")),o=Object(r["a"])(l,a,i,!1,null,"2753db8c",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-e29eb292.9e6ddc36.js.map