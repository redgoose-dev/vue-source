(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228ce0"],{db6b:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("article",{staticClass:"page"},[e("head-title",{attrs:{type:"h2",title:"form / radio"}}),e("blockquote",[e("strong",[t._v("\n      component: "),e("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/components/forms/radio",target:"_blank"}},[t._v("radio")])])]),e("p",[t._v("여러 항목들 중에 하나를 선택하는 컴포넌트 입니다.")]),e("section",[e("head-title",{attrs:{type:"h3",title:"basic"}}),e("p",[t._v("기본적인 형태로 사용합니다.")]),e("div",{staticClass:"example"},[e("div",{staticClass:"row row-v-center"},[e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"basic",label:"Apple",value:"apple"},model:{value:t.basic,callback:function(a){t.basic=a},expression:"basic"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"basic",label:"Banana",value:"banana"},model:{value:t.basic,callback:function(a){t.basic=a},expression:"basic"}})],1)]),e("hr"),e("p",[t._v("Selected : "+t._s(t.basic))])]),t._m(0)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"props"}}),t._m(1),t._m(2)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"event"}}),e("p",[t._v("컴포넌트에서 사용하는 이벤트")]),t._m(3)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"size"}}),e("p",[t._v("컴포넌트의 사이즈")]),e("div",{staticClass:"example"},[e("div",{staticClass:"row row-v-center"},[e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"size",size:"small",label:"Small"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"size",label:"Normal"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"size",size:"large",label:"Large"}})],1)])]),t._m(4)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"color"}}),e("p",[t._v("컴포넌트의 컬러")]),e("div",{staticClass:"example"},[e("div",{staticClass:"row row-v-center"},[e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",label:"Normal"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",color:"sub",label:"Sub"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",color:"success",label:"Success"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",color:"error",label:"Error"}})],1)])]),t._m(5)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"disabled"}}),e("p",[t._v("비활성화 되었을때의 모습입니다.")]),e("div",{staticClass:"example"},[e("form-radio",{attrs:{name:"disabled",label:"Disabled",disabled:!0}})],1),t._m(6)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"animation"}}),e("p",[t._v("체크했을때의 애니메이션 방식")]),e("div",{staticClass:"example"},[e("div",{staticClass:"row row-v-center"},[e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",label:"Normal"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",animation:"elastic",label:"Elastic"}})],1),e("div",{staticClass:"col--auto"},[e("form-radio",{attrs:{name:"color",animation:"none",label:"None"}})],1)])]),t._m(7)],1)],1)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<form-radio v-model="value" label="Label name" value="apple"/>')])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("이 컴포넌트는 다음과 같은 "),e("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table--center table--bordered"},[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("Type")]),e("th",[t._v("Comment")])])]),e("tbody",[e("tr",[e("td",[t._v("name")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[e("code",[t._v("name")]),t._v(" attribute 로 사용")])]),e("tr",[e("td",[t._v("id")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[e("code",[t._v("id")]),t._v(" attribute 로 사용")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[t._v("항목에 표시되는 이름입니다. 값이 없으면 라디오 폼만 나타납니다.")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("String,Number,Boolean")]),e("td",{staticClass:"typo-align--left"},[e("code",[t._v("value")]),t._v(" attribute 로 사용")])]),e("tr",[e("td",[t._v("checked")]),e("td",[t._v("String,Boolean")]),e("td",{staticClass:"typo-align--left"},[t._v("체크되어있는지의 여부")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",{staticClass:"typo-align--left"},[t._v("비활성화")])]),e("tr",[e("td",[t._v("required")]),e("td",[t._v("Boolean")]),e("td",{staticClass:"typo-align--left"},[t._v("필수값인지에 대한 여부")])]),e("tr",[e("td",[t._v("color")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 색상 "),e("code",[t._v("sub,success,error")])])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 사이즈 "),e("code",[t._v("small,large")])])]),e("tr",[e("td",[t._v("animation")]),e("td",[t._v("String")]),e("td",{staticClass:"typo-align--left"},[t._v("체크할때의 애니메이션 방식 "),e("code",[t._v("elastic,none")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table table--center table--bordered"},[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("params")]),e("th",[t._v("comment")])])]),e("tbody",[e("tr",[e("td",[t._v("@change")]),e("td",[e("code",[t._v("sw,event")])]),e("td",{staticClass:"typo-align--left"},[t._v("라디오 버튼의 상태가 변했을때 이벤트 발생")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"example-code"},[e("code",[t._v('// small\n<form-radio size="small"/>\n\n// normal\n<form-radio/>\n\n// large\n<form-radio size="large"/>')])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"example-code"},[e("code",[t._v('// sub\n<form-radio color="sub"/>\n\n// success\n<form-radio color="success"/>\n\n// error\n<form-radio color="error"/>')])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<form-radio :disabled="true"/>')])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("pre",{staticClass:"example-code"},[e("code",[t._v('// elastic\n<form-radio animation="elastic"/>\n\n// none\n<form-radio animation="none"/>')])])}],r={name:"page",components:{"head-title":function(){return e.e("chunk-2ade1b67").then(e.bind(null,"0e12"))},"form-radio":function(){return e.e("chunk-bf353bdc").then(e.bind(null,"92d3"))}},data:function(){return{basic:"apple"}}},o=r,i=e("2877"),c=Object(i["a"])(o,s,l,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d228ce0.a1c9de3d.js.map