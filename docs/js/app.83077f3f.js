(function(e){function n(n){for(var c,a,d=n[0],i=n[1],u=n[2],r=0,p=[];r<d.length;r++)a=d[r],o[a]&&p.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(n);while(p.length)p.shift()();return s.push.apply(s,u||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],c=!0,a=1;a<t.length;a++){var d=t[a];0!==o[d]&&(c=!1)}c&&(s.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},o={app:0},s=[];function d(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a34ad":"32ac13dd","chunk-2d0a49c9":"334ab996","chunk-2d0abc78":"b039630a","chunk-2d0b30ea":"e987cef9","chunk-2d0b361d":"50bb2685","chunk-2d0b5e08":"e114aee5","chunk-2d0b9da9":"44243b6e","chunk-2d0c0297":"5da94cca","chunk-2d0cba94":"ddb22ebb","chunk-2d0cbe25":"3da6f68e","chunk-2d0d3344":"82736aeb","chunk-2d0d6d26":"8503682c","chunk-2d0d6e54":"f0846f42","chunk-2d0e1da4":"a7e1821d","chunk-2d0e1f9e":"b4c6a655","chunk-2d0e26f6":"c04f17b4","chunk-2d0e50bc":"305a7e40","chunk-2d0e5387":"e0c9ab77","chunk-2d0e5db3":"eb949518","chunk-2d0e9060":"8c383799","chunk-2d0e9592":"ef493466","chunk-2d0ea103":"a8a9213c","chunk-2d0f09e3":"916bd7e9","chunk-2d0f0f62":"c3e04d13","chunk-2d20e8b0":"b2987d84","chunk-2d20efb7":"dd93df65","chunk-2d20fb06":"b8d72c82","chunk-2d216421":"c267db96","chunk-2d2253e9":"57d8457d","chunk-2d2262c8":"5e3632aa","chunk-2d228ce0":"028e910c","chunk-2d22bcf7":"288b1f34","chunk-2d230a24":"ff81adf5","chunk-2d238638":"ebf7edde","chunk-30a396c3":"b5bb5897","chunk-3379246e":"d158bc17","chunk-76e88399":"1b60500d","chunk-9d7f7650":"21af9599","chunk-21c0dd8c":"673d4553","chunk-0ea4b642":"513eeef8","chunk-4093e29d":"da79ec65","chunk-8090a40a":"e704fa93","chunk-08587633":"d6957113"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3379246e":1,"chunk-76e88399":1,"chunk-9d7f7650":1,"chunk-21c0dd8c":1,"chunk-0ea4b642":1,"chunk-4093e29d":1,"chunk-8090a40a":1,"chunk-08587633":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0a34ad":"31d6cfe0","chunk-2d0a49c9":"31d6cfe0","chunk-2d0abc78":"31d6cfe0","chunk-2d0b30ea":"31d6cfe0","chunk-2d0b361d":"31d6cfe0","chunk-2d0b5e08":"31d6cfe0","chunk-2d0b9da9":"31d6cfe0","chunk-2d0c0297":"31d6cfe0","chunk-2d0cba94":"31d6cfe0","chunk-2d0cbe25":"31d6cfe0","chunk-2d0d3344":"31d6cfe0","chunk-2d0d6d26":"31d6cfe0","chunk-2d0d6e54":"31d6cfe0","chunk-2d0e1da4":"31d6cfe0","chunk-2d0e1f9e":"31d6cfe0","chunk-2d0e26f6":"31d6cfe0","chunk-2d0e50bc":"31d6cfe0","chunk-2d0e5387":"31d6cfe0","chunk-2d0e5db3":"31d6cfe0","chunk-2d0e9060":"31d6cfe0","chunk-2d0e9592":"31d6cfe0","chunk-2d0ea103":"31d6cfe0","chunk-2d0f09e3":"31d6cfe0","chunk-2d0f0f62":"31d6cfe0","chunk-2d20e8b0":"31d6cfe0","chunk-2d20efb7":"31d6cfe0","chunk-2d20fb06":"31d6cfe0","chunk-2d216421":"31d6cfe0","chunk-2d2253e9":"31d6cfe0","chunk-2d2262c8":"31d6cfe0","chunk-2d228ce0":"31d6cfe0","chunk-2d22bcf7":"31d6cfe0","chunk-2d230a24":"31d6cfe0","chunk-2d238638":"31d6cfe0","chunk-30a396c3":"31d6cfe0","chunk-3379246e":"b84d3626","chunk-76e88399":"2cd543dc","chunk-9d7f7650":"d9bfdde8","chunk-21c0dd8c":"dd5e93f2","chunk-0ea4b642":"cf297d1a","chunk-4093e29d":"4ffd9661","chunk-8090a40a":"98b0c083","chunk-08587633":"81c12a8f"}[e]+".css",o=i.p+c,s=document.getElementsByTagName("link"),d=0;d<s.length;d++){var u=s[d],r=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(r===c||r===o))return n()}var p=document.getElementsByTagName("style");for(d=0;d<p.length;d++){u=p[d],r=u.getAttribute("data-href");if(r===c||r===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.request=c,delete a[e],h.parentNode.removeChild(h),t(s)},h.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(h)}).then(function(){a[e]=0}));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var s=new Promise(function(n,t){c=o[e]=[n,t]});n.push(c[2]=s);var u,r=document.createElement("script");r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.src=d(e),u=function(n){r.onerror=r.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,s=new Error("Loading chunk "+e+" failed.\n("+c+": "+a+")");s.type=c,s.request=a,t[1](s)}o[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:r})},12e4);r.onerror=r.onload=u,document.head.appendChild(r)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=n,u=u.slice();for(var p=0;p<u.length;p++)n(u[p]);var h=r;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var c=t("2b0e"),a=t("75fc"),o=(t("7f7f"),t("b54a"),t("ac6a"),t("8c4f")),s=t("ae9b");c["a"].use(o["a"]);var d=[{path:"*",name:"404",component:function(){return t.e("chunk-2d0e26f6").then(t.bind(null,"7f4e"))}}],i=function(e){var n=[];return e.forEach(function(e){e.link?n.push({path:e.link,name:e.name?e.name:e.link,component:e.component||function(){return t("abea")("./pages".concat(e.link))}}):e.items&&e.items.length&&e.items.forEach(function(e){e.link?n.push({path:e.link,name:e.name?e.name:e.link,component:e.component||function(){return t("abea")("./pages".concat(e.link))}}):e.items&&e.items.forEach(function(e){n.push({path:e.link,name:e.name?e.name:e.link,component:e.component||function(){return t("abea")("./pages".concat(e.link))}})})})}),n}(s["a"]),u=new o["a"]({mode:"hash",base:"",routes:function(){return[].concat(d,Object(a["a"])(i))}(),scrollBehavior:function(e,n,t){return t||{x:0,y:0}}}),r=u,p=t("2f62");c["a"].use(p["a"]);var h=new p["a"].Store({state:{},mutations:{},actions:{}}),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",{staticClass:"viewport",class:[e.openedSidebar&&"viewport--opened-sidebar"],attrs:{id:"main"}},[t("header",{staticClass:"layout-header"},[t("div",{staticClass:"layout-header__wrap"},[t("div",{staticClass:"layout-header__body"},[t("nav",{staticClass:"toggle-sidebar"},[t("button",{attrs:{type:"button"},on:{click:e.toggleSidebar}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])]),t("h2",{staticClass:"title"},[t("router-link",{attrs:{to:"/"}},[e._v("vue-redgoose-resource")])],1)]),e._m(0)])]),t("div",{staticClass:"container"},[t("span",{staticClass:"container__sidebar-mask",on:{click:function(n){e.openedSidebar=!1}}}),t("nav-sidebar",{staticClass:"container__sidebar",on:{"click-link":function(n){e.openedSidebar=!1}}}),t("div",{staticClass:"container__body"},[t("router-view")],1)],1)])},k=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout-header__side"},[t("nav",{staticClass:"external-links"},[t("a",{attrs:{href:"https://github.com/redgoose-dev/vue-redgoose-source",target:"_blank"}},[e._v("GitHub")]),t("a",{attrs:{href:"https://redgoose.me",target:"_blank"}},[e._v("redgoose.me")])])])}],f={name:"layout",components:{"nav-sidebar":function(){return t.e("chunk-3379246e").then(t.bind(null,"0574"))}},data:function(){return{openedSidebar:!1}},methods:{toggleSidebar:function(){this.openedSidebar=!this.openedSidebar}}},b=f,m=(t("da04"),t("2877")),g=Object(m["a"])(b,l,k,!1,null,"60d28fbc",null),v=g.exports;t("e109"),t("caab");c["a"].config.productionTip=!1,new c["a"]({router:r,store:h,render:function(e){return e(v)}}).$mount("#app")},"95e3":function(e,n,t){},abea:function(e,n,t){var c={"./pages":["8fcb",9,"chunk-2d0ea103"],"./pages.scss":["b0ce",7,"chunk-76e88399"],"./pages/":["8fcb",9,"chunk-2d0ea103"],"./pages/404":["7f4e",9,"chunk-2d0e26f6"],"./pages/404.vue":["7f4e",9,"chunk-2d0e26f6"],"./pages/components":["7500",9,"chunk-2d0d6e54"],"./pages/components/":["7500",9,"chunk-2d0d6e54"],"./pages/components/button/basic":["a801",9,"chunk-30a396c3"],"./pages/components/button/basic/":["a801",9,"chunk-30a396c3"],"./pages/components/button/basic/index":["a801",9,"chunk-30a396c3"],"./pages/components/button/basic/index.vue":["a801",9,"chunk-30a396c3"],"./pages/components/card":["ecb2",9,"chunk-2d230a24"],"./pages/components/card/":["ecb2",9,"chunk-2d230a24"],"./pages/components/card/index":["ecb2",9,"chunk-2d230a24"],"./pages/components/card/index.vue":["ecb2",9,"chunk-2d230a24"],"./pages/components/error/content":["020e",9,"chunk-2d0a34ad"],"./pages/components/error/content/":["020e",9,"chunk-2d0a34ad"],"./pages/components/error/content/index":["020e",9,"chunk-2d0a34ad"],"./pages/components/error/content/index.vue":["020e",9,"chunk-2d0a34ad"],"./pages/components/error/page":["e810",9,"chunk-2d2262c8"],"./pages/components/error/page/":["e810",9,"chunk-2d2262c8"],"./pages/components/error/page/index":["e810",9,"chunk-2d2262c8"],"./pages/components/error/page/index.vue":["e810",9,"chunk-2d2262c8"],"./pages/components/form/checkbox":["b563",9,"chunk-2d20fb06"],"./pages/components/form/checkbox.vue":["b563",9,"chunk-2d20fb06"],"./pages/components/form/radio":["db6b",9,"chunk-2d228ce0"],"./pages/components/form/radio.vue":["db6b",9,"chunk-2d228ce0"],"./pages/components/form/select":["940f",9,"chunk-2d0e5387"],"./pages/components/form/select-wrapper":["4c22",9,"chunk-2d0cbe25"],"./pages/components/form/select-wrapper.vue":["4c22",9,"chunk-2d0cbe25"],"./pages/components/form/select.vue":["940f",9,"chunk-2d0e5387"],"./pages/components/form/switch":["4b2b",9,"chunk-2d0cba94"],"./pages/components/form/switch.vue":["4b2b",9,"chunk-2d0cba94"],"./pages/components/form/text":["9cad",9,"chunk-2d0f09e3"],"./pages/components/form/text.vue":["9cad",9,"chunk-2d0f09e3"],"./pages/components/icon":["355f",9,"chunk-2d0b9da9"],"./pages/components/icon/":["355f",9,"chunk-2d0b9da9"],"./pages/components/icon/index":["355f",9,"chunk-2d0b9da9"],"./pages/components/icon/index.vue":["355f",9,"chunk-2d0b9da9"],"./pages/components/index":["7500",9,"chunk-2d0d6e54"],"./pages/components/index.vue":["7500",9,"chunk-2d0d6e54"],"./pages/components/loading/progress":["8cc4",9,"chunk-2d0e9592"],"./pages/components/loading/progress.vue":["8cc4",9,"chunk-2d0e9592"],"./pages/components/loading/symbol":["06d1",9,"chunk-2d0a49c9"],"./pages/components/loading/symbol.vue":["06d1",9,"chunk-2d0a49c9"],"./pages/components/modal/basic":["9f32",9,"chunk-2d0f0f62"],"./pages/components/modal/basic.vue":["9f32",9,"chunk-2d0f0f62"],"./pages/components/navigation/dropdown":["b08d",9,"chunk-2d20e8b0"],"./pages/components/navigation/dropdown/":["b08d",9,"chunk-2d20e8b0"],"./pages/components/navigation/dropdown/index":["b08d",9,"chunk-2d20e8b0"],"./pages/components/navigation/dropdown/index.vue":["b08d",9,"chunk-2d20e8b0"],"./pages/components/navigation/pagination":["1b89",9,"chunk-2d0b5e08"],"./pages/components/navigation/pagination/":["1b89",9,"chunk-2d0b5e08"],"./pages/components/navigation/pagination/index":["1b89",9,"chunk-2d0b5e08"],"./pages/components/navigation/pagination/index.vue":["1b89",9,"chunk-2d0b5e08"],"./pages/components/navigation/tab":["febe",9,"chunk-2d238638"],"./pages/components/navigation/tab/":["febe",9,"chunk-2d238638"],"./pages/components/navigation/tab/index":["febe",9,"chunk-2d238638"],"./pages/components/navigation/tab/index.vue":["febe",9,"chunk-2d238638"],"./pages/framework/nuxt":["7d72",9,"chunk-2d0e1f9e"],"./pages/framework/nuxt.vue":["7d72",9,"chunk-2d0e1f9e"],"./pages/framework/vue":["e426",9,"chunk-2d2253e9"],"./pages/framework/vue.vue":["e426",9,"chunk-2d2253e9"],"./pages/index":["8fcb",9,"chunk-2d0ea103"],"./pages/index.vue":["8fcb",9,"chunk-2d0ea103"],"./pages/scripts/api":["f10f",9,"chunk-2d22bcf7"],"./pages/scripts/api.vue":["f10f",9,"chunk-2d22bcf7"],"./pages/scripts/custom-event":["95ef",9,"chunk-2d0e5db3"],"./pages/scripts/custom-event.vue":["95ef",9,"chunk-2d0e5db3"],"./pages/scripts/sleep":["73d8",9,"chunk-2d0d6d26"],"./pages/scripts/sleep.vue":["73d8",9,"chunk-2d0d6d26"],"./pages/stylesheet":["4137",9,"chunk-2d0c0297"],"./pages/stylesheet/":["4137",9,"chunk-2d0c0297"],"./pages/stylesheet/elements":["7bcf",9,"chunk-2d0e1da4"],"./pages/stylesheet/elements.vue":["7bcf",9,"chunk-2d0e1da4"],"./pages/stylesheet/etc":["b24e",9,"chunk-2d20efb7"],"./pages/stylesheet/etc.vue":["b24e",9,"chunk-2d20efb7"],"./pages/stylesheet/forms":["938d",9,"chunk-2d0e50bc"],"./pages/stylesheet/forms.vue":["938d",9,"chunk-2d0e50bc"],"./pages/stylesheet/grid":["8c87",9,"chunk-2d0e9060"],"./pages/stylesheet/grid.vue":["8c87",9,"chunk-2d0e9060"],"./pages/stylesheet/index":["4137",9,"chunk-2d0c0297"],"./pages/stylesheet/index.vue":["4137",9,"chunk-2d0c0297"],"./pages/stylesheet/mixins":["e0af",9,"chunk-9d7f7650"],"./pages/stylesheet/mixins.vue":["e0af",9,"chunk-9d7f7650"],"./pages/stylesheet/normalize":["1773",9,"chunk-2d0abc78"],"./pages/stylesheet/normalize.vue":["1773",9,"chunk-2d0abc78"],"./pages/stylesheet/table":["27ac",9,"chunk-2d0b361d"],"./pages/stylesheet/table.vue":["27ac",9,"chunk-2d0b361d"],"./pages/stylesheet/typography":["5c88",9,"chunk-2d0d3344"],"./pages/stylesheet/typography.vue":["5c88",9,"chunk-2d0d3344"],"./pages/stylesheet/variables":["276e",9,"chunk-2d0b30ea"],"./pages/stylesheet/variables.vue":["276e",9,"chunk-2d0b30ea"],"./pages/stylesheet/web-fonts":["c262",9,"chunk-2d216421"],"./pages/stylesheet/web-fonts.vue":["c262",9,"chunk-2d216421"]};function a(e){var n=c[e];return n?t.e(n[2]).then(function(){var e=n[0];return t.t(e,n[1])}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}a.keys=function(){return Object.keys(c)},a.id="abea",e.exports=a},ae9b:function(e,n,t){"use strict";t("cadf"),t("551c"),t("097d");n["a"]=[{link:"/",title:"Introduce"},{title:"Framework",items:[{link:"/framework/vue",title:"Vue.js notes"},{link:"/framework/nuxt",title:"Nuxt.js notes"}]},{title:"Stylesheet",items:[{link:"/stylesheet",title:"introduce"},{link:"/stylesheet/normalize",title:"normalize"},{link:"/stylesheet/web-fonts",title:"web fonts"},{link:"/stylesheet/variables",title:"variables"},{link:"/stylesheet/mixins",title:"mixins"},{link:"/stylesheet/elements",title:"elements"},{link:"/stylesheet/grid",title:"grid"},{link:"/stylesheet/typography",title:"typography"},{link:"/stylesheet/forms",title:"forms"},{link:"/stylesheet/table",title:"table"},{link:"/stylesheet/etc",title:"etc"}]},{title:"Components",items:[{link:"/components/icon",title:"icon"},{link:"/components/card",title:"card"},{title:"Modal",items:[{link:"/components/modal/basic",title:"basic"}]},{title:"Loading",items:[{link:"/components/loading/symbol",title:"symbol"},{link:"/components/loading/progress",title:"progress"}]},{title:"Button",items:[{link:"/components/button/basic",title:"basic"}]},{title:"Form",items:[{link:"/components/form/text",title:"text"},{link:"/components/form/select",title:"select"},{link:"/components/form/select-wrapper",title:"select-wrapper"},{link:"/components/form/radio",title:"radio"},{link:"/components/form/checkbox",title:"checkbox"},{link:"/components/form/switch",title:"switch"}]},{title:"Navigation",items:[{link:"/components/navigation/pagination",title:"pagination"},{link:"/components/navigation/tab",title:"tab"},{link:"/components/navigation/dropdown",title:"dropdown"}]},{title:"Error",items:[{link:"/components/error/content",title:"content"},{link:"/components/error/page",title:"page"}]}]},{title:"Script library",items:[{link:"/scripts/sleep",title:"sleep"},{link:"/scripts/custom-event",title:"custom event"},{link:"/scripts/api",title:"support axios api"}]}]},caab:function(e,n,t){},da04:function(e,n,t){"use strict";var c=t("95e3"),a=t.n(c);a.a},e109:function(e,n,t){}});
//# sourceMappingURL=app.83077f3f.js.map