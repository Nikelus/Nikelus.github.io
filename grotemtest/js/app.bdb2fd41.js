(function(e){function t(t){for(var n,o,s=t[0],c=t[1],i=t[2],p=0,l=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&l.push(u[o][0]),u[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==u[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},u={app:0},a=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6e3e150a":"222fbef5"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-6e3e150a":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6e3e150a":"630906a7"}[e]+".css",u=c.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===n||p===u))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],p=i.getAttribute("data-href");if(p===n||p===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],d.parentNode.removeChild(d),r(a)},d.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=a);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var l=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(d);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}u[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=p;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",{staticClass:"font-weight-light"},[e._v("Test grotem")])])],1),r("v-content",[r("router-view")],1)],1)},u=[],a={name:"App"},s=a,c=r("2877"),i=r("6544"),p=r.n(i),l=r("7496"),d=r("40dc"),f=r("a75b"),h=r("2a7f"),g=Object(c["a"])(s,o,u,!1,null,null,null),v=g.exports;p()(g,{VApp:l["a"],VAppBar:d["a"],VContent:f["a"],VToolbarTitle:h["a"]});var m=r("8c4f");n["a"].use(m["a"]);var b=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"products",component:()=>r.e("chunk-6e3e150a").then(r.bind(null,"ad75"))}]}),y=r("2f62"),w={state:{productsList:[],productGroup:[],selectProducts:[]},getters:{getProducts(e){return e.productsList},getGroup(e){return e.productGroup},getSelectedProducts(e){return e.selectProducts}},mutations:{setProducts(e,t){if(!e.productsList.length){let r=[],n=[];t.forEach(e=>{e.skus.forEach(t=>{r.push(Object.assign(t,{groupName:e.group.name,groupId:e.group.id}))}),n.push(Object.assign(e.group,{isActive:!1}))}),e.productGroup=n,e.productsList=r}},setNewProductList(e,t){let r=e.productsList,n=[];n=r.filter(e=>{return!t.find(t=>e.id===t.id)}),e.productsList=n},setSelectedGroup(e,t){let r=[],n=[];r=e.productsList,t.forEach(e=>{r.forEach(t=>{e.id===t.groupId&&n.push(t)})}),e.selectProducts=n}},actions:{requestGetProducts({commit:e}){return new Promise((t,r)=>{fetch("https://ssdev.superagent.ru/TestApp/Values/GetWithParent").then(e=>{return e.json()}).then(r=>{e("setProducts",r),t()}).catch(t=>{e("setProducts",[]),r(t)})})}}};n["a"].use(y["a"]);var P=new y["a"].Store({modules:{productsStore:w}}),j=r("f309");n["a"].use(j["a"]);var O=new j["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({router:b,store:P,vuetify:O,render:e=>e(v)}).$mount("#app")}});
//# sourceMappingURL=app.bdb2fd41.js.map