(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-458dcdc0"],{"2bcf":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"page"},[a("head-title",{attrs:{type:"h2",title:"forms / checkbox"}}),a("blockquote",[a("strong",[t._v("\n      component: "),a("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/components/forms/checkbox",target:"_blank"}},[t._v("forms.checkbox")])])]),a("p",[t._v("여러 항목들을 선택하는 컴포넌트 입니다.")]),a("section",[a("head-title",{attrs:{type:"h3",title:"basic"}}),a("p",[t._v("기본적인 형태로 사용합니다.")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-v-center"},[a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"basic",label:"Apple"},model:{value:t.basic[0],callback:function(e){t.$set(t.basic,0,e)},expression:"basic[0]"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"basic",label:"Banana"},model:{value:t.basic[1],callback:function(e){t.$set(t.basic,1,e)},expression:"basic[1]"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"basic",label:"Mango"},model:{value:t.basic[2],callback:function(e){t.$set(t.basic,2,e)},expression:"basic[2]"}})],1)]),a("hr"),a("p",[t._v("Selected : "+t._s(t.basic))])]),t._m(0)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"props"}}),t._m(1),t._m(2)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"event"}}),a("p",[t._v("컴포넌트에서 사용하는 이벤트")]),t._m(3)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"size"}}),a("p",[t._v("컴포넌트의 사이즈")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-v-center"},[a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"size",size:"small",label:"Small"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"size",label:"Normal"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"size",size:"large",label:"Large"}})],1)])]),t._m(4)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"color"}}),a("p",[t._v("컴포넌트의 컬러")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-v-center"},[a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",label:"Normal"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",color:"sub",label:"Sub"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",color:"success",label:"Success"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",color:"error",label:"Error"}})],1)])]),t._m(5)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"disabled"}}),a("p",[t._v("비활성화 되었을때의 모습입니다.")]),a("div",{staticClass:"example"},[a("form-checkbox",{attrs:{name:"disabled",label:"Disabled",disabled:!0}})],1),t._m(6)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"animation"}}),a("p",[t._v("체크했을때의 애니메이션 방식")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-v-center"},[a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",label:"Normal"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",animation:"elastic",label:"Elastic"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"color",animation:"none",label:"None"}})],1)])]),t._m(7)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"Check all event"}}),a("p",[t._v("여러가지 체크박스를 모두 켜고 끌수 있습니다.")]),a("div",{staticClass:"example"},[a("div",{staticClass:"row row-v-center"},[a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"check_all",label:"Checkbox0"},model:{value:t.checkAll[0],callback:function(e){t.$set(t.checkAll,0,e)},expression:"checkAll[0]"}})],1),a("div",{staticClass:"col--auto"},[a("form-checkbox",{attrs:{name:"check_all",label:"Checkbox1"},model:{value:t.checkAll[1],callback:function(e){t.$set(t.checkAll,1,e)},expression:"checkAll[1]"}})],1)]),a("hr"),a("p",[t._v("checked: "+t._s(t.checkAll))]),a("hr"),a("nav",[a("button-basic",{attrs:{inline:!0},on:{click:function(e){return t.onClickCheckAll(!0)}}},[t._v("on check all")]),t._v("\n         \n        "),a("button-basic",{attrs:{inline:!0,color:"sub"},on:{click:function(e){return t.onClickCheckAll(!1)}}},[t._v("off check all")])],1)]),t._m(8)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"Custom event"}}),t._m(9),a("div",{staticClass:"example"},[a("form-checkbox",{attrs:{name:"custom",label:"Custom checkbox",checked:t.custom},on:{change:t.onChangeCheckbox}}),a("p",[t._v("checked: "+t._s(t.custom))])],1),t._m(10)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"using form example"}}),a("p",[t._v("다음은 폼에서 사용예제입니다.")]),a("div",{staticClass:"example"},[a("form",{attrs:{method:"post"},on:{submit:t.onSubmitFormExample}},[a("ul",{staticClass:"typo-list--inline",staticStyle:{"margin-top":"0"}},t._l(Array(8),(function(t,e){return a("li",[a("form-checkbox",{attrs:{name:"formExample[]",id:"formExampleValue-"+e,value:"formExampleValue-"+e,label:"value-"+e}})],1)})),0),a("button-basic",{attrs:{type:"submit"}},[t._v("submit")])],1),t.formExampleResult?a("div",{staticClass:"form-checkbox-form-example"},[a("strong",[t._v("form result:")]),a("pre",[a("code",[t._v(t._s(t.formExampleResult))])])]):t._e()])],1)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-checkbox v-model="checked" label="apple"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("이 컴포넌트는 다음과 같은 "),a("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table--overflow"},[a("table",{staticClass:"table table--center table--bordered"},[a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Type")]),a("th",[t._v("Comment")])])]),a("tbody",[a("tr",[a("td",[t._v("name")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[a("code",[t._v("name")]),t._v(" attribute 로 사용")])]),a("tr",[a("td",[t._v("id")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[a("code",[t._v("id")]),t._v(" attribute 로 사용")])]),a("tr",[a("td",[t._v("label")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("항목에 표시되는 이름입니다. 값이 없으면 라디오 폼만 나타납니다.")])]),a("tr",[a("td",[t._v("value")]),a("td",[t._v("String,Number,Boolean")]),a("td",{staticClass:"typo-align--left"},[a("code",[t._v("value")]),t._v(" attribute 로 사용")])]),a("tr",[a("td",[t._v("checked")]),a("td",[t._v("String,Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("체크되어있는지의 여부")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("비활성화")])]),a("tr",[a("td",[t._v("required")]),a("td",[t._v("Boolean")]),a("td",{staticClass:"typo-align--left"},[t._v("필수값인지에 대한 여부")])]),a("tr",[a("td",[t._v("color")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 색상 "),a("code",[t._v("sub,success,error")])])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 사이즈 "),a("code",[t._v("small,large")])])]),a("tr",[a("td",[t._v("animation")]),a("td",[t._v("String")]),a("td",{staticClass:"typo-align--left"},[t._v("체크할때의 애니메이션 방식 "),a("code",[t._v("elastic,none")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("params")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("td",[t._v("@change")]),a("td",[a("code",[t._v("sw,event")])]),a("td",{staticClass:"typo-align--left"},[t._v("체크박스의 상태가 변했을때 이벤트 발생")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// small\n<form-checkbox size="small"/>\n\n// normal\n<form-checkbox/>\n\n// large\n<form-checkbox size="large"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// sub\n<form-checkbox color="sub"/>\n\n// success\n<form-checkbox color="success"/>\n\n// error\n<form-checkbox color="error"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('<form-checkbox :disabled="true"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// elastic\n<form-checkbox animation="elastic"/>\n\n// none\n<form-checkbox animation="none"/>')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// data\n{ checkAll: [false, false] }\n\n// components\n<form-checkbox v-model="checkAll[0]" label="Checkbox0"/>\n<form-checkbox v-model="checkAll[1]" label="Checkbox1"/>\n\n// buttons\n<button @click="event(true)">on check all</button>\n<button @click="event(false)">off check all</button>\n\n// button method\nevent(sw)\n{\n  switch(sw)\n  {\n    case true:\n      this.checkAll = [true, true];\n      break;\n    case false:\n      this.checkAll = [false, false];\n      break;\n  }\n}')])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("이 컴포넌트는 기본적으로 "),a("code",[t._v("v-model")]),t._v("을 사용하지만 직접 컨트롤 할 수 있습니다.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v('// data\n{ custom: false }\n\n// component\n<form-checkbox :checked="custom" @change="event"/>\n\n// event method\nevent(sw, event)\n{\n  this.custom = sw;\n}')])])}],s=(a("6b54"),{name:"page",components:{"form-checkbox":function(){return a.e("chunk-29883982").then(a.bind(null,"d7a5"))},"head-title":function(){return a.e("chunk-2ade1b67").then(a.bind(null,"0e12"))},"button-basic":function(){return a.e("chunk-15774cf7").then(a.bind(null,"fea2"))}},data:function(){return{basic:[!0,!1,!1],checkAll:[!1,!1],custom:!1,formExample:[],formExampleResult:null}},methods:{onClickCheckAll:function(t){switch(t){case!0:this.checkAll=[!0,!0];break;case!1:this.checkAll=[!1,!1];break}},onChangeCheckbox:function(t,e){this.custom=t},onSubmitFormExample:function(t){t.preventDefault(),this.formExampleResult=decodeURI(new URLSearchParams(new FormData(t.target)).toString())}}}),o=s,n=(a("c237"),a("2877")),r=Object(n["a"])(o,c,l,!1,null,"90fcc516",null);e["default"]=r.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var c=a("cb7c"),l=a("0bfb"),s=a("9e1e"),o="toString",n=/./[o],r=function(t){a("2aba")(RegExp.prototype,o,t,!0)};a("79e5")((function(){return"/a/b"!=n.call({source:"a",flags:"b"})}))?r((function(){var t=c(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?l.call(t):void 0)})):n.name!=o&&r((function(){return n.call(this)}))},c237:function(t,e,a){"use strict";var c=a("c6ff"),l=a.n(c);l.a},c6ff:function(t,e,a){}}]);
//# sourceMappingURL=chunk-458dcdc0.3fae0dbe.js.map