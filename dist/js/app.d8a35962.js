(function(){var e={2624:function(e,n,t){"use strict";var a=t(9242),o=t(3396);const r={id:"app"};function i(e,n,t,a,i,s){const c=(0,o.up)("HeaderBar"),l=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(c),(0,o.Wm)(l)])}const s={class:"navbar has-background-dark is-dark",role:"navigation","aria-label":"main navigation"};function c(e,n,t,a,r,i){const c=(0,o.up)("HeaderBarBrand"),l=(0,o.up)("HeaderBarLinks");return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("nav",s,[(0,o.Wm)(c),(0,o.Wm)(l)])])}var l=t.p+"img/umg.76d2347a.png";const u={class:"navbar-brand"},d=(0,o.uE)('<a class="navbar-item" href="https://umg.edu.gt" target="_blank" rel="noopener noreferrer"><img src="'+l+'"></a><div class="navbar-item nav-home"><span class="tour">Seguridad de Redes TCP/IP - Grupo 2</span></div><button class="link navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></button>',3),g=[d];function f(e,n){return(0,o.wg)(),(0,o.iD)("div",u,g)}var v=t(89);const h={},p=(0,v.Z)(h,[["render",f]]);var m=p,b=t(7139);const k={class:"navbar-menu"},w={class:"navbar-end"},y={class:"navbar-item"},_={class:"buttons"},T={key:0},$=(0,o.Uk)(" IniciarSesion "),O=(0,o._)("i",{class:"fas fa-sign-in-alt fa-2x","aria-hidden":"false"},null,-1),S=[$,O],I=(0,o.Uk)(" | Cerrar Sesión "),D=(0,o._)("i",{class:"fas fa-sign-out-alt fa-2x","aria-hidden":"false"},null,-1),x=[I,D];function A(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",w,[(0,o._)("div",y,[(0,o._)("div",_,[r.account?((0,o.wg)(),(0,o.iD)("div",T,(0,b.zw)(r.account.name)+" |",1)):(0,o.kq)("",!0),r.account?((0,o.wg)(),(0,o.iD)("a",{key:2,onClick:n[1]||(n[1]=(...e)=>i.SignOut&&i.SignOut(...e)),target:"_blank",rel:"noopener noreferrer"},x)):((0,o.wg)(),(0,o.iD)("a",{key:1,onClick:n[0]||(n[0]=(...e)=>i.SignIn&&i.SignIn(...e)),target:"_blank",rel:"noopener noreferrer"},S))])])])])}var C=t(2034),P={name:"HeaderBar",data(){return{account:void 0}},async created(){this.$msalInstance=new C.L(this.$store.state.msalConfig)},mounted(){const e=this.$msalInstance.getAllAccounts();0!=e.length&&(this.account=e[0],this.$emitter.emit("login",this.account))},methods:{async SignIn(){await this.$msalInstance.loginPopup({}).then((()=>{const e=this.$msalInstance.getAllAccounts();this.account=e[0],this.$emitter.emit("login",this.account)})).catch((e=>{console.error(`error during authentication: ${e}`)}))},async SignOut(){await this.$msalInstance.logout({}).then((()=>{this.$emitter.emit("logout","logging out")})).catch((e=>{console.error(e)}))}}};const B=(0,v.Z)(P,[["render",A]]);var H=B,j={name:"HeaderBar",components:{HeaderBarBrand:m,HeaderBarLinks:H}};const W=(0,v.Z)(j,[["render",c]]);var Z=W,G=t.p+"img/diagramaproyecto.4addca1f.png";const q=e=>((0,o.dD)("data-v-6aacfed1"),e=e(),(0,o.Cn)(),e),L={class:"content-container"},z=q((()=>(0,o._)("div",{class:"section content-title-group"},[(0,o._)("h2",{class:"title"}," Proyecto del Grupo No.2 del curso de Seguridad de redes TCP/IP "),(0,o._)("div",null,[(0,o._)("h3",null,"Integrantes del grupo:"),(0,o._)("ul",null,[(0,o._)("li",null,"Gemis Daniel Guevara Villeda - 1493-13-2950"),(0,o._)("li",null,"raul"),(0,o._)("li",null,"roberto")])])],-1))),M={key:0},E=q((()=>(0,o._)("img",{src:G,alt:"Diagrama de Red - Grupo 2"},null,-1))),U=[E],N={key:1,class:"level"},R=q((()=>(0,o._)("div",{class:"level-item sub-title"}," Inicie sesión para ver la información privada. ",-1))),F=[R];function V(e,n,t,a,r,i){return(0,o.wg)(),(0,o.iD)("div",L,[z,r.account?((0,o.wg)(),(0,o.iD)("div",M,U)):((0,o.wg)(),(0,o.iD)("div",N,F))])}var J=t(2482);class K{constructor(e,n){(0,J.Z)(this,"token",void 0),(0,J.Z)(this,"expiresOn",void 0),this.token=e,this.expiresOn=void 0==n?Date.now()+36e5:n.getTime()}async getToken(e,n){return console.log(e,n),{token:this.token,expiresOnTimestamp:this.expiresOn}}}var Q=t(110),X=t(65);const Y="cmatskasbackup";var ee={name:"HelloWorld",data(){return{account:void 0,containers:[]}},async created(){this.$emitter.on("login",async function(e){this.account=e,console.log(this.account),console.log("Getting storage data"),await this.getAzureStorageData()}.bind(this)),this.$emitter.on("logout",(()=>{console.log("logging out"),this.account=void 0}))},methods:{...(0,X.OI)(["setAccessToken"]),async getAzureStorageData(){""==this.$store.state.accessToken&&await this.getAccessToken();let e=new K(this.$store.state.accessToken);const n=new Q.N(`https://${Y}.blob.core.windows.net`,e);let t=1;const a=n.listContainers();let o=await a.next();while(!o.done)console.log(`Container ${t++}: ${o.value.name}`),this.containers.push({id:o.value.properties.etag,name:o.value.name}),o=await a.next()},async getAccessToken(){let e={scopes:["https://storage.azure.com/user_impersonation"]};const n=new C.L(this.$store.state.msalConfig);try{let t=await n.acquireTokenSilent(e);this.$store.commit("setAccessToken",t.accessToken)}catch(t){console.error("Silent token acquisition failed. Using interactive mode");let a=await n.acquireTokenPopup(e);console.log(`Access token acquired via interactive auth ${a.accessToken}`),this.$store.commit("setAccessToken",a.accessToken)}}}};const ne=(0,v.Z)(ee,[["render",V],["__scopeId","data-v-6aacfed1"]]);var te=ne;const ae=(0,X.MT)({state(){return{msalConfig:{auth:{clientId:"5df871bf-b684-4af2-9c55-8e3a92f47413",authority:"https://login.microsoftonline.com/ef3eb1cd-5550-4a20-826d-c28c0482b7ab"},cache:{cacheLocation:"localStorage"}},accessToken:""}},mutations:{setAccessToken(e,n){e.accessToken=n}}});var oe=ae,re={name:"App",store:oe,components:{HeaderBar:Z,HelloWorld:te}};const ie=(0,v.Z)(re,[["render",i]]);var se=ie,ce=t(6433),le=t.n(ce);const ue=(0,a.ri)(se);ue.config.globalProperties.$msalInstance={},ue.config.globalProperties.$emitter=new(le()),ue.use(oe).mount("#app")},4598:function(){}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(n&&n(a);l<i.length;l++)r=i[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},a=self["webpackChunkseg_redes"]=self["webpackChunkseg_redes"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(2624)}));a=t.O(a)})();
//# sourceMappingURL=app.d8a35962.js.map