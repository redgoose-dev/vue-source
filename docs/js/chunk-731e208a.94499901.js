(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-731e208a"],{"36f8":function(t,e,a){},b6dc:function(t,e,a){"use strict";var n=a("36f8"),r=a.n(n);r.a},e0af:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"page"},[a("head-title",{attrs:{type:"h2",title:"mixins"}}),a("blockquote",[a("strong",[t._v("Source: "),a("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/css/mixins.scss",target:"_blank"}},[t._v("mixins.scss")])])]),t._m(0),t._m(1),a("p",[t._v("자세한 파라메터나 스타일 속성들은 다음 섹션을 참고하거나 소스 `URL`을 참고하는것을 권장합니다.")]),a("section",[a("head-title",{attrs:{type:"h3",title:"responsive"}}),t._m(2),t._m(3)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"retina"}}),a("p",[t._v("레티나 디스플레이일 경우에 해당 스타일로 바뀝니다.")]),t._m(4)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"color-linear-gradient"}}),a("p",[t._v("선형 그라디언트 컬러 표현을 합니다.")]),t._m(5),t._m(6)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"image-background"}}),a("p",[t._v("배경 이미지 지원")]),t._m(7)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"image-sprite"}}),t._m(8),t._m(9),t._m(10)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"text-single-line"}}),a("p",[t._v("한줄 텍스트 표현")]),t._m(11)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"text-multi-line"}}),a("p",[t._v("여러줄 텍스트 표현을 할 수 있습니다.")]),t._m(12),t._m(13)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"button-touch-options"}}),a("p",[t._v("버튼에서 터치에 대한 추가속성을 넣습니다.")]),t._m(14),t._m(15)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"blind"}}),a("p",[t._v("화면에서 안보이도록 합니다.")]),t._m(16)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"horizontal scroll"}}),a("p",[t._v("가로 스크롤을 표현합니다. 주로 모바일에서 유용합니다.")]),a("head-title",{attrs:{type:"h4",title:"horizontal-scroll-wrap"}}),a("p",[t._v("아이템들을 감싸는 목록에서 적용해줘야합니다.")]),t._m(17),t._m(18),a("head-title",{attrs:{type:"h4",title:"horizontal-scroll-item"}}),a("p",[t._v("아이템에서 적용해줘야합니다.")]),t._m(19),t._m(20),a("head-title",{attrs:{type:"h4",title:"example"}}),a("p",[t._v("이것을 적용하면 다음과 같이 표현됩니다.")]),a("div",{staticClass:"example"},[a("ul",{staticClass:"horizontal-scroll-demo"},t._l(Array(10),(function(e){return a("li",[a("span",[t._v("item")])])})),0)]),t._m(21)],1),a("section",[a("head-title",{attrs:{type:"h3",title:"background blur"}}),a("p",[t._v("엘리먼트 영역의 배경을 흐리게 합니다.")]),t._m(22),t._m(23)],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{attrs:{href:"https://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins",target:"_blank"}},[t._v("mixin")]),t._v("은 "),a("code",[t._v("scss")]),t._v("의 함수라고 볼 수 있습니다."),a("br"),t._v("\n    스타일시트를 작성하는데 많이 도움이 되는 툴들이 들어있습니다.\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include text-single-line();")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n      쉽고 통일된 사이즈로 media query 구현할 수 있습니다."),a("br"),t._v("\n      모바일 퍼스트 기준으로 만들어져 있다. 예를들어 "),a("code",[t._v("tablet 보다 크다면..")]),t._v(" 조건이 성립되면 해당 스타일로 바뀝니다.\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include responsive('tablet') {}\n@include responsive('desktop') {}\n@include responsive('desktop-1280') {}\n@include responsive('desktop-1440') {}\n@include responsive('desktop-1920') {}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include retina() {}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include color-linear-gradient($matt-color, $start, $end, $direction);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("value")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$matt-color")]),a("td"),a("td",{staticClass:"typo-align--left"},[t._v("그라디언트가 지원안될때 사용되는 단색컬러")])]),a("tr",[a("th",[t._v("$start")]),a("td"),a("td",{staticClass:"typo-align--left"},[t._v("시작 컬러")])]),a("tr",[a("th",[t._v("$end")]),a("td"),a("td",{staticClass:"typo-align--left"},[t._v("종료 컬러")])]),a("tr",[a("th",[t._v("$direction")]),a("td",[t._v("vertical,horizontal")]),a("td",{staticClass:"typo-align--left"},[t._v("그라디언트의 방향을 정합니다.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include image-background();")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n      스프라이드 이미지."),a("br"),t._v("\n      이미지 경로는 파일이름까지 적습니다. "),a("code",[t._v("@")]),t._v(" 앞까지..\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include image-sprite($src-1x, $src-2x, $width, $height);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("example")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$src-1x")]),a("td",[t._v("./sp-image.jpg")]),a("td",{staticClass:"typo-align--left"},[t._v("스프라이드 1x 사이즈 이미지 경로")])]),a("tr",[a("th",[t._v("$src-2x")]),a("td",[t._v("./sp-image@2x.jpg")]),a("td",{staticClass:"typo-align--left"},[t._v("스프라이드 2x 사이즈 이미지 경로")])]),a("tr",[a("th",[t._v("$width")]),a("td",[t._v("320px")]),a("td",{staticClass:"typo-align--left"},[t._v("스프라이드 이미지 가로사이즈")])]),a("tr",[a("th",[t._v("$height")]),a("td",[t._v("240px")]),a("td",{staticClass:"typo-align--left"},[t._v("스프라이드 이미지 세로사이즈")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include text-single-line();")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include text-multi-line($height, $row);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("value")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$height")]),a("td",[t._v("1rem")]),a("td",{staticClass:"typo-align--left"},[t._v("1 라인당 높이 사이즈")])]),a("tr",[a("th",[t._v("$row")]),a("td",[t._v("3")]),a("td",{staticClass:"typo-align--left"},[t._v("최대 라인 수")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include button-touch-options($opacity);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("value")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$opacity")]),a("td",[t._v("true")]),a("td",{staticClass:"typo-align--left"},[t._v("버튼을 누르고 있을때 투명하게 합니다.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include blind();")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include horizontal-scroll-wrap($padding-side, $padding-bottom);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("value")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$padding-side")]),a("td",[t._v("16px")]),a("td",{staticClass:"typo-align--left"},[t._v("사이드 여백 사이즈")])]),a("tr",[a("th",[t._v("$padding-bottom")]),a("td",[t._v("16px")]),a("td",{staticClass:"typo-align--left"},[t._v("아래쪽 여백 사이즈. 아래쪽에 스크롤이 나오기때문에 여백이 필요합니다.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",[a("code",[t._v("@include horizontal-scroll-item($padding-side);")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table--center table--bordered"},[a("caption",[t._v("Parameters")]),a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("value")]),a("th",[t._v("comment")])])]),a("tbody",[a("tr",[a("th",[t._v("$padding-side")]),a("td",[t._v("16px")]),a("td",{staticClass:"typo-align--left"},[t._v("사이드 여백 사이즈")])]),a("tr",[a("th",[t._v("$padding-side-outer")]),a("td",[t._v("16px")]),a("td",{staticClass:"typo-align--left"},[t._v("사이드 외곽영역 여백 사이즈."),a("br"),t._v("이 값이 없으면 "),a("code",[t._v("$padding-side")]),t._v("값으로 사용합니다.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v("ul {\n  padding: 15px 0 0;\n  @include horizontal-scroll-wrap(16px, 15px);\n  margin: 0 -20px;\n  list-style: none;\n  box-sizing: border-box;\n  background: #f4f4f4;\n  li {\n    @include horizontal-scroll-item(8px, 16px);\n    span {\n      display: block;\n      width: 100px;\n      height: 100px;\n      background: $color-key;\n    }\n  }\n}")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example"},[a("div",{staticClass:"background-blur-example"},[a("p",[t._v("blur area")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"example-code"},[a("code",[t._v("// scss\n@include background-blur(8px) {\n  // 배경흐림 속성이 지원할때의 영역\n  background: rgba(#000, .5);\n};")])])}],i={name:"page",components:{"head-title":function(){return a.e("chunk-2ade1b67").then(a.bind(null,"0e12"))}}},l=i,s=(a("b6dc"),a("2877")),c=Object(s["a"])(l,n,r,!1,null,"738eba87",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-731e208a.94499901.js.map