(function(e){function t(t){for(var a,i,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4df6":"f0abd2e3","chunk-2d0dd0be":"23f51a53"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var c=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-admin/",o.oe=function(e){throw e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0acb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{direction:"vertical"}},[n("layout-header"),n("el-container",{staticClass:"full-height"},[n("layout-aside"),n("layout-main")],1)],1)},r=[],s=n("9a87"),i=n("2a98"),o=n("74e2"),u={name:"Layout",components:{LayoutHeader:s["default"],LayoutAside:i["default"],LayoutMain:o["default"]}},c=u,l=n("0c7c"),h=Object(l["a"])(c,a,r,!1,null,"2a7a5ffe",null);t["default"]=h.exports},"0bb4":function(e,t,n){},"11cf":function(e,t,n){},"2a68":function(e,t,n){var a={"./views/components/layout/Breadcrumb":["6358"],"./views/components/layout/Breadcrumb.vue":["6358"],"./views/components/layout/Layout":["0acb"],"./views/components/layout/Layout.vue":["0acb"],"./views/components/layout/LayoutAside":["2a98"],"./views/components/layout/LayoutAside.vue":["2a98"],"./views/components/layout/LayoutHeader":["9a87"],"./views/components/layout/LayoutHeader.vue":["9a87"],"./views/components/layout/LayoutMain":["74e2"],"./views/components/layout/LayoutMain.vue":["74e2"],"./views/permission/menu/Menu":["3d4c","chunk-2d0c4df6"],"./views/permission/menu/Menu.vue":["3d4c","chunk-2d0c4df6"],"./views/permission/role/Role":["805e","chunk-2d0dd0be"],"./views/permission/role/Role.vue":["805e","chunk-2d0dd0be"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="2a68",e.exports=r},"2a98":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-aside",{staticClass:"aside"},[n("i-menu",{attrs:{data:e.menus,"default-active":e.defaultActive,"unique-opened":!0},on:{select:function(t){return e.$router.push({name:t})}}})],1)},r=[],s={name:"LayoutAside",computed:{menus(){return this.$store.getters.menus},defaultActive(){let{name:e,meta:{node:t={}}}=this.$route;const n=function(e,t){return e?1===e.is_menu?e.name:n(e.parent,e.name):t};return n(t,e)}}},i=s,o=n("0c7c"),u=Object(o["a"])(i,a,r,!1,null,"a110b4ba",null);t["default"]=u.exports},"3cf8":function(e,t,n){},4851:function(e,t,n){},"488a":function(e,t,n){"use strict";var a=n("4851"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"App"},o=i,u=(n("488a"),n("0c7c")),c=Object(u["a"])(o,r,s,!1,null,null,null),l=c.exports,h=n("8c4f"),d=n("0acb"),m=n("2f62");const f="menus",p=function(e,t){localStorage.setItem(e,t)};function b(){return async e=>{e.commit("setRouteTree",n("ddb9").default),e.subscribe(e=>{let{type:t,payload:n}=e;switch(t){case"setToken":break;case"setRouteTree":p(f,JSON.stringify(n));break}})}}const y=n("5868");function v(e=[],t=null,n={}){return e.map((function(e){return e.parent=t,n[e.name]=e,{name:e.name,path:g(e),component:w(e),redirect:_(e),props:!0,meta:{node:e},children:e.children&&e.children.length>0?v(e.children,e,n):[]}}))}function g(e){let t="",n=e;while(n){if(t="/"+n.path.replace(/^\//,"")+t,""===t)return"";n=n.parent}return t}function _(e){let{children:t}=e,n=t.findIndex(e=>1===e["is_menu"]);return-1===n?null:{name:t[n].name}}function w(e){return y[e.name]?()=>n("2a68")("./views"+y[e.name]):null}a["default"].use(m["a"]);var k=new m["a"].Store({state:{routeTree:[],permissions:{}},getters:{menus:e=>{const t=function(e=[]){return e.map(e=>{let{name:n,meta:{node:a={}},children:r=[]}=e;return{title:a["title"],icon:a["icon"],index:n,children:t(r)}})};return t(e.routeTree)}},mutations:{setRouteTree(e,t){const n={};e.routeTree=v(t,null,n),e.permissions=n}},actions:{},modules:{},plugins:[b()]});a["default"].use(h["a"]);const L=function(){let e=x(P(k.state.routeTree||[]));e.length>0&&O.addRoutes([{path:"/",component:d["default"],redirect:{name:e[0]["name"]},children:e}])};function P(e=[]){let t=[];return e.forEach(e=>{t.push({...e,children:[]}),t=t.concat(S(e.children))}),t}function S(e){let t=[];return e.forEach(e=>{0===e.children.length?t.push(e):(t=[...t,...S(e.children)],t.push(Object.assign({},e,{children:[]})))}),t}function x(e){const t=[];return e.forEach((function(e){const n=e.path.match(/:[^/]+$/);n?t.push(e):t.unshift(e)})),t}const O=new h["a"]({mode:"hash",routes:[]});L();var j=O,E=(n("11cf"),n("a769"),n("5cc3")),$=n.n(E),C=(n("915d"),n("e04d")),M=n.n(C),I=(n("8f24"),n("76b9")),T=n.n(I),A=(n("b84d"),n("c216")),z=n.n(A),B=(n("adec"),n("3d2d")),N=n.n(B),R=(n("a673"),n("7b31")),F=n.n(R),q=(n("be4f"),n("896a")),J=n.n(q),V=(n("de31"),n("c69e")),H=n.n(V),U=(n("4ca3"),n("443e")),D=n.n(U),W=(n("8bd8"),n("4cb2")),G=n.n(W),K=(n("672e"),n("101e")),Q=n.n(K),X=(n("ce18"),n("f58e")),Y=n.n(X),Z=(n("38a0"),n("ad41")),ee=n.n(Z),te=(n("5466"),n("ecdf")),ne=n.n(te),ae=(n("cbb5"),n("8bbc")),re=n.n(ae);a["default"].use($.a).use(M.a).use(T.a).use(z.a).use(N.a).use(F.a).use(J.a).use(H.a).use(D.a).use(G.a).use(Q.a).use(Y.a).use(ee.a).use(ne.a).use(re.a);var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ITableList"},[n("el-table",e._g(e._b({directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"},{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{data:e.data||e.lists}},"el-table",e.$attrs,!1),e.$listeners),[e.selection?n("el-table-column",{attrs:{type:"selection",selectable:e.selectable,width:"60"}}):e._e(),e._l(e.columns,(function(t,a){return n("el-table-column",e._b({key:a,scopedSlots:e._u([{key:"header",fn:function(n){return[e._t(t.slotsName&&t.slotsName.header,[e._v(" "+e._s(t.label)+" ")],{column:t})]}},{key:"default",fn:function(n){return[e._t(t.slotsName&&t.slotsName.default,[e._v(" "+e._s(e._getValue(t.prop,n))+" ")],{scope:n})]}}],null,!0)},"el-table-column",t,!1))}))],2),e.showPager?n("el-pagination",{staticClass:"i-table-list_pager",style:{textAlign:e.pagerPosition},attrs:{disabled:e.loading,background:"",layout:e.pagerLayout.join(","),total:e.total,"page-sizes":e.pagerSizes,"page-size":e.currentSize,"current-page":e.currentPage},on:{"size-change":e._handleSizeChange,"current-change":e._handlePageChange}}):e._e()],1)},ie=[],oe={name:"ITableList",props:{columns:{type:Array,validator:e=>e.every(e=>{const t=["label","prop"];return e instanceof Object&&t.every(t=>e.hasOwnProperty(t))}),required:!0},paramsConfig:{type:Object,default:()=>({currentSize:"length",currentPage:"page",total:"total"})},showList:{type:Boolean,default:!0},showPager:{type:Boolean,default:!0},pagerLayout:{type:Array,default:()=>["total","sizes","prev","pager","next","jumper"]},pagerSizes:{type:Array,default:()=>[10,20,50,100],validator:e=>e&&Array.isArray(e)&&e.length>0},data:{type:Array},onFetch:{type:Function},autoFetch:{type:Boolean,default:!0},pagerPosition:{type:String,default:"left",validator:e=>["left","center","right"].includes(e)},selection:{type:Boolean,default:!1},selectable:{type:Function,default:()=>!0}},data(){return{loading:!1,currentPage:1,currentSize:this.pagerSizes[0],total:0,lists:[]}},created(){!this.data&&this.autoFetch&&this.fetch(),this.$nextTick(()=>{let e=this.$refs.table,t=["clearSelection","toggleRowSelection","toggleAllSelection","toggleRowExpansion","setCurrentRow","clearSort","clearFilter","doLayout","sort"];for(let n in e)t.includes(n)&&(this[n]=e[n])})},methods:{_getValue(e="",t){return e.split(".").reduce((e,t)=>e[t],t.row)},_getParams(){let e={};return Object.entries(this.paramsConfig).forEach(([t,n])=>{e[n]=this[t]}),e},_handlePageChange(e){this.currentPage=e,this.$emit("current-change",e),this.fetch()},_handleSizeChange(e){this.currentSize=e,this.$emit("size-change",e),this.fetch()},fetch(){this.loading=!0,this.onFetch(this._getParams()).then(e=>{this.lists=e.data.data;let t=Number(e.headers["x-total-count"]);0===this.lists.length&&this.total>t&&this.currentPage>1&&(this.currentPage--,this.fetch()),this.total=t}).finally(()=>{this.loading=!1})},mapList(e=(e=>e)){this.lists=e(this.lists)},setPage(e=1){this.currentPage=e}}},ue=oe,ce=(n("c5c8"),Object(u["a"])(ue,se,ie,!1,null,"18742d61",null)),le=ce.exports;le.install=function(e){e.component(le.name,le)};var he=le,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",e._g(e._b({staticClass:"IMenu",style:{height:e.height}},"el-menu",e.$attrs,!1),e.$listeners),e._l(e.data,(function(e,t){return n("menu-item",{key:t,attrs:{menu:e}})})),1)},me=[],fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0===e.menu.children.length?n("el-menu-item",e._b({staticClass:"IMenuItem"},"el-menu-item",e.menu,!1),[n("i",{class:e.menu.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])]):n("el-submenu",e._b({attrs:{index:e.menu.index}},"el-submenu",e.menu,!1),[n("template",{slot:"title"},[n("i",{class:e.menu.icon}),e._v(" "+e._s(e.menu.title)+" ")]),e._l(e.menu.children,(function(e,t){return n("i-menu-item",{key:t,attrs:{menu:e}})}))],2)},pe=[],be={name:"IMenuItem",props:{menu:{type:Object,required:!0}}},ye=be,ve=Object(u["a"])(ye,fe,pe,!1,null,"6fdca322",null),ge=ve.exports,_e={name:"IMenu",components:{MenuItem:ge},props:{data:{type:Array,required:!0},height:{type:String,default:"100%"}}},we=_e,ke=Object(u["a"])(we,de,me,!1,null,"5ac9d269",null),Le=ke.exports;Le.install=function(e){e.component(Le.name,Le)};var Pe=Le;const Se=[he,Pe],xe=function(e){Se.forEach(t=>{e.component(t.name,t)})};"undefined"!==typeof window&&window.Vue&&xe(window.Vue);var Oe={version:"0.1.0",install:xe,ITableList:he,IMenu:Pe};a["default"].use(Oe);class je{constructor(e=[]){this.stack=e}push(e){return this.stack.push(e)}pop(){return this.stack.pop()}peek(){return this.stack[this.stack.length-1]}isEmpty(){return 0===this.stack.length}}const Ee="__history_keys__";class $e{constructor(){let e=sessionStorage.getItem(Ee+window.history.state.key),t=e?JSON.parse(e):[];this.history=new je(t),this._pushListeners=[],this._backListeners=[],this.nextState=null,window.addEventListener("popstate",({state:e})=>{this.nextState=e})}_cache(){this.history.stack.forEach(e=>{this._removeCache(e)}),sessionStorage.setItem(Ee+window.history.state.key,JSON.stringify(this.history.stack))}_removeCache(e){sessionStorage.removeItem(Ee+e)}get last(){return this.history.peek()}addPushListener(e){this._pushListeners.push(e)}removePushListener(e){let t=this._pushListeners;this._pushListeners=t.filter(t=>t!==e)}addBackListener(e){this._backListeners.push(e)}removeBackListener(e){let t=this._backListeners;this._backListeners=t.filter(t=>t!==e)}_asyncPush(){setTimeout(()=>{let e=window.history.state,t=e&&e.key;this.last&&this.last===t||this.history.push(e&&e.key),this._cache()},100)}_notify(e=[]){e.forEach(e=>e())}watch(){let e=this.history.pop();this._removeCache(e),this.nextState&&this.nextState.key===this.last?(this._notify(this._backListeners),this._cache()):(e&&this.history.push(e),this._asyncPush(),this._notify(this._pushListeners)),this.nextState=null}}let Ce=new $e;Ce.addBackListener((function(){})),Ce.addPushListener((function(){})),j.beforeEach(async(e,t,n)=>{Ce.watch(e.fullPath),n()}),a["default"].config.productionTip=!1,new a["default"]({store:k,router:j,render:e=>e(l)}).$mount("#app")},5868:function(e,t){e.exports={Menu:"/permission/menu/Menu.vue",Role:"/permission/role/Role.vue"}},"5e1f":function(e,t,n){"use strict";var a=n("0bb4"),r=n.n(a);r.a},6358:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"Breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.paths,(function(t){return n("el-breadcrumb-item",{key:t.name,attrs:{to:{name:t.name}}},[e._v(" "+e._s(t.title)+" ")])})),1)],1)},r=[],s={name:"Breadcrumb",computed:{paths(){let e=this.$route.meta["node"],t=[];while(e)t.unshift({title:e.title,name:e.name}),e=e.parent;return t}}},i=s,o=(n("7239"),n("0c7c")),u=Object(o["a"])(i,a,r,!1,null,"6b6947b3",null);t["default"]=u.exports},"6a3c":function(e,t,n){},7239:function(e,t,n){"use strict";var a=n("6a3c"),r=n.n(a);r.a},"74e2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-main",{staticClass:"main"},[n("breadcrumb"),n("button",{on:{click:function(t){return e.$router.push({name:"IMenu"})}}},[e._v("IMenu")]),n("br"),n("button",{on:{click:function(t){return e.$router.back()}}},[e._v("back")]),n("br"),n("button",{on:{click:function(t){return e.$router.replace({name:"IMenu"})}}},[e._v("replace")]),n("router-view")],1)},r=[],s=n("6358"),i={name:"LayoutMain",components:{Breadcrumb:s["default"]}},o=i,u=n("0c7c"),c=Object(u["a"])(o,a,r,!1,null,"1bb13bd6",null);t["default"]=c.exports},"9a87":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("h1",{staticClass:"title"},[e._v("Vue Admin")]),n("h4",{staticClass:"sub-title"},[e._v("基于Element UI的中台解决方案")])]),n("div",{})])},r=[],s={name:"LayoutHeader"},i=s,o=(n("5e1f"),n("0c7c")),u=Object(o["a"])(i,a,r,!1,null,"06ee40c2",null);t["default"]=u.exports},c5c8:function(e,t,n){"use strict";var a=n("3cf8"),r=n.n(a);r.a},ddb9:function(e,t,n){"use strict";n.r(t),t["default"]=[{name:"Widget",path:"/widget",icon:"el-icon-s-home",title:"组件库",is_menu:1,children:[{name:"IMenu",path:"menu",icon:"el-icon-s-home",title:"IMenu",is_menu:1,children:[]},{name:"ITableList",path:"table-list",icon:"el-icon-s-home",title:"ITableList",is_menu:1,children:[]}]},{name:"Permission",path:"/permission",icon:"el-icon-s-home",title:"权限管理",is_menu:1,children:[{name:"Menu",path:"menu",icon:"el-icon-s-home",title:"菜单管理",is_menu:1,children:[]},{name:"Role",path:"role",icon:"el-icon-s-home",title:"角色管理",is_menu:1,children:[]}]}]}});
//# sourceMappingURL=app.e84c57cd.js.map