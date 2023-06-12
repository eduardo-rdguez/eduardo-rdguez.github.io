import{r as Ge,a as u,g as N,j as g,F as ge,b as l,B as M,I as Je,H as L,S as F,c as Y,M as Ke,d as Ye,e as W,f as Qe,h as Xe,L as S,i as je,G as B,V as k,T as z,k as v,C as Be,l as Ze,m as et}from"./chakra-d7719472.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var ke,ve=Ge;ke=ve.createRoot,ve.hydrateRoot;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const ye="popstate";function tt(e){e===void 0&&(e={});function t(a,o){let{pathname:i="/",search:s="",hash:c=""}=j(a.location.hash.substr(1));return ue("",{pathname:i,search:s,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){let i=a.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let c=a.location.href,d=c.indexOf("#");s=d===-1?c:c.slice(0,d)}return s+"#"+(typeof o=="string"?o:Q(o))}function n(a,o){oe(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return nt(t,r,n,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function oe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rt(){return Math.random().toString(36).substr(2,8)}function be(e,t){return{usr:e.state,key:e.key,idx:t}}function ue(e,t,r,n){return r===void 0&&(r=null),T({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?j(t):t,{state:r,key:t&&t.key||n||rt()})}function Q(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function j(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function nt(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,s=R.Pop,c=null,d=h();d==null&&(d=0,i.replaceState(T({},i.state,{idx:d}),""));function h(){return(i.state||{idx:null}).idx}function f(){s=R.Pop;let m=h(),P=m==null?null:m-d;d=m,c&&c({action:s,location:p.location,delta:P})}function w(m,P){s=R.Push;let x=ue(p.location,m,P);r&&r(x,m),d=h()+1;let E=be(x,d),$=p.createHref(x);try{i.pushState(E,"",$)}catch{a.location.assign($)}o&&c&&c({action:s,location:p.location,delta:1})}function I(m,P){s=R.Replace;let x=ue(p.location,m,P);r&&r(x,m),d=h();let E=be(x,d),$=p.createHref(x);i.replaceState(E,"",$),o&&c&&c({action:s,location:p.location,delta:0})}function C(m){let P=a.location.origin!=="null"?a.location.origin:a.location.href,x=typeof m=="string"?m:Q(m);return y(P,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,P)}let p={get action(){return s},get location(){return e(a,i)},listen(m){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(ye,f),c=m,()=>{a.removeEventListener(ye,f),c=null}},createHref(m){return t(a,m)},createURL:C,encodeLocation(m){let P=C(m);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:I,go(m){return i.go(m)}};return p}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));function at(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?j(t):t,a=pe(n.pathname||"/",r);if(a==null)return null;let o=Me(e);ot(o);let i=null;for(let s=0;i==null&&s<o.length;++s)i=pt(o[s],vt(a));return i}function Me(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(o,i,s)=>{let c={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(y(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=O([n,c.relativePath]),h=r.concat(c);o.children&&o.children.length>0&&(y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Me(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:ht(d,o.index),routesMeta:h})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let c of Ne(o.path))a(o,i,c)}),t}function Ne(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let i=Ne(n.join("/")),s=[];return s.push(...i.map(c=>c===""?o:[o,c].join("/"))),a&&s.push(...i),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function ot(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ft(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const it=/^:\w+$/,lt=3,st=2,ct=1,ut=10,dt=-2,we=e=>e==="*";function ht(e,t){let r=e.split("/"),n=r.length;return r.some(we)&&(n+=dt),t&&(n+=st),r.filter(a=>!we(a)).reduce((a,o)=>a+(it.test(o)?lt:o===""?ct:ut),n)}function ft(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function pt(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let i=0;i<r.length;++i){let s=r[i],c=i===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",h=mt({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d);if(!h)return null;Object.assign(n,h.params);let f=s.route;o.push({params:n,pathname:O([a,h.pathname]),pathnameBase:wt(O([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=O([a,h.pathnameBase]))}return o}function mt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=gt(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((d,h,f)=>{if(h==="*"){let w=s[f]||"";i=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}return d[h]=yt(s[f]||"",h),d},{}),pathname:o,pathnameBase:i,pattern:e}}function gt(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),oe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,s)=>(n.push(s),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function vt(e){try{return decodeURI(e)}catch(t){return oe(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yt(e,t){try{return decodeURIComponent(e)}catch(r){return oe(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function pe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function bt(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?j(e):e;return{pathname:r?r.startsWith("/")?r:xt(r,t):t,search:Ct(n),hash:Pt(a)}}function xt(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function se(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ue(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function _e(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=j(e):(a=T({},e),y(!a.pathname||!a.pathname.includes("?"),se("?","pathname","search",a)),y(!a.pathname||!a.pathname.includes("#"),se("#","pathname","hash",a)),y(!a.search||!a.search.includes("#"),se("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(n||i==null)s=r;else{let f=t.length-1;if(i.startsWith("..")){let w=i.split("/");for(;w[0]==="..";)w.shift(),f-=1;a.pathname=w.join("/")}s=f>=0?t[f]:"/"}let c=bt(a,s),d=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||h)&&(c.pathname+="/"),c}const O=e=>e.join("/").replace(/\/\/+/g,"/"),wt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ct=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function It(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const De=["post","put","patch","delete"];new Set(De);const Et=["get",...De];new Set(Et);/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}const me=u.createContext(null),We=u.createContext(null),U=u.createContext(null),ie=u.createContext(null),_=u.createContext({outlet:null,matches:[]}),Fe=u.createContext(null);function Lt(e,t){let{relative:r}=t===void 0?{}:t;D()||y(!1);let{basename:n,navigator:a}=u.useContext(U),{hash:o,pathname:i,search:s}=He(e,{relative:r}),c=i;return n!=="/"&&(c=i==="/"?n:O([n,i])),a.createHref({pathname:c,search:s,hash:o})}function D(){return u.useContext(ie)!=null}function le(){return D()||y(!1),u.useContext(ie).location}function Te(e){u.useContext(U).static||u.useLayoutEffect(e)}function qe(){return u.useContext(me)!=null?Dt():St()}function St(){D()||y(!1);let{basename:e,navigator:t}=u.useContext(U),{matches:r}=u.useContext(_),{pathname:n}=le(),a=JSON.stringify(Ue(r).map(s=>s.pathnameBase)),o=u.useRef(!1);return Te(()=>{o.current=!0}),u.useCallback(function(s,c){if(c===void 0&&(c={}),!o.current)return;if(typeof s=="number"){t.go(s);return}let d=_e(s,JSON.parse(a),n,c.relative==="path");e!=="/"&&(d.pathname=d.pathname==="/"?e:O([e,d.pathname])),(c.replace?t.replace:t.push)(d,c.state,c)},[e,t,a,n])}function He(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=u.useContext(_),{pathname:a}=le(),o=JSON.stringify(Ue(n).map(i=>i.pathnameBase));return u.useMemo(()=>_e(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function Rt(e,t){return Ot(e,t)}function Ot(e,t,r){D()||y(!1);let{navigator:n}=u.useContext(U),{matches:a}=u.useContext(_),o=a[a.length-1],i=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=le(),d;if(t){var h;let p=typeof t=="string"?j(t):t;s==="/"||(h=p.pathname)!=null&&h.startsWith(s)||y(!1),d=p}else d=c;let f=d.pathname||"/",w=s==="/"?f:f.slice(s.length)||"/",I=at(e,{pathname:w}),C=kt(I&&I.map(p=>Object.assign({},p,{params:Object.assign({},i,p.params),pathname:O([s,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:O([s,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),a,r);return t&&C?u.createElement(ie.Provider,{value:{location:X({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:R.Pop}},C):C}function $t(){let e=_t(),t=It(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:a},r):null,o)}const zt=u.createElement($t,null);class jt extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?u.createElement(_.Provider,{value:this.props.routeContext},u.createElement(Fe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bt(e){let{routeContext:t,match:r,children:n}=e,a=u.useContext(me);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(_.Provider,{value:t},n)}function kt(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var a;if((a=r)!=null&&a.errors)e=r.matches;else return null}let o=e,i=(n=r)==null?void 0:n.errors;if(i!=null){let s=o.findIndex(c=>c.route.id&&i?.[c.route.id]);s>=0||y(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,c,d)=>{let h=c.route.id?i?.[c.route.id]:null,f=null;r&&(f=c.route.errorElement||zt);let w=t.concat(o.slice(0,d+1)),I=()=>{let C;return h?C=f:c.route.element?C=c.route.element:C=s,u.createElement(Bt,{match:c,routeContext:{outlet:s,matches:w},children:C})};return r&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?u.createElement(jt,{location:r.location,revalidation:r.revalidation,component:f,error:h,children:I(),routeContext:{outlet:null,matches:w}}):I()},null)}var de;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(de||(de={}));var q;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(q||(q={}));function Mt(e){let t=u.useContext(me);return t||y(!1),t}function Nt(e){let t=u.useContext(We);return t||y(!1),t}function Ut(e){let t=u.useContext(_);return t||y(!1),t}function Ve(e){let t=Ut(),r=t.matches[t.matches.length-1];return r.route.id||y(!1),r.route.id}function _t(){var e;let t=u.useContext(Fe),r=Nt(q.UseRouteError),n=Ve(q.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function Dt(){let{router:e}=Mt(de.UseNavigateStable),t=Ve(q.UseNavigateStable),r=u.useRef(!1);return Te(()=>{r.current=!0}),u.useCallback(function(a,o){o===void 0&&(o={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,X({fromRouteId:t},o)))},[e,t])}function Wt(e){let{to:t,replace:r,state:n,relative:a}=e;D()||y(!1);let o=u.useContext(We),i=qe();return u.useEffect(()=>{o&&o.navigation.state!=="idle"||i(t,{replace:r,state:n,relative:a})}),null}function K(e){y(!1)}function Ft(e){let{basename:t="/",children:r=null,location:n,navigationType:a=R.Pop,navigator:o,static:i=!1}=e;D()&&y(!1);let s=t.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:s,navigator:o,static:i}),[s,o,i]);typeof n=="string"&&(n=j(n));let{pathname:d="/",search:h="",hash:f="",state:w=null,key:I="default"}=n,C=u.useMemo(()=>{let p=pe(d,s);return p==null?null:{location:{pathname:p,search:h,hash:f,state:w,key:I},navigationType:a}},[s,d,h,f,w,I,a]);return C==null?null:u.createElement(U.Provider,{value:c},u.createElement(ie.Provider,{children:r,value:C}))}function Tt(e){let{children:t,location:r}=e;return Rt(he(t),r)}var Ce;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ce||(Ce={}));new Promise(()=>{});function he(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(n,a)=>{if(!u.isValidElement(n))return;let o=[...t,a];if(n.type===u.Fragment){r.push.apply(r,he(n.props.children,o));return}n.type!==K&&y(!1),!n.props.index||!n.props.children||y(!1);let i={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=he(n.props.children,o)),r.push(i)}),r}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fe.apply(this,arguments)}function qt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Ht(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vt(e,t){return e.button===0&&(!t||t==="_self")&&!Ht(e)}const At=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Gt(e){let{basename:t,children:r,window:n}=e,a=u.useRef();a.current==null&&(a.current=tt({window:n,v5Compat:!0}));let o=a.current,[i,s]=u.useState({action:o.action,location:o.location});return u.useLayoutEffect(()=>o.listen(s),[o]),u.createElement(Ft,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:o})}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce=u.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:o,replace:i,state:s,target:c,to:d,preventScrollReset:h}=t,f=qt(t,At),{basename:w}=u.useContext(U),I,C=!1;if(typeof d=="string"&&Kt.test(d)&&(I=d,Jt))try{let x=new URL(window.location.href),E=d.startsWith("//")?new URL(x.protocol+d):new URL(d),$=pe(E.pathname,w);E.origin===x.origin&&$!=null?d=$+E.search+E.hash:C=!0}catch{}let p=Lt(d,{relative:a}),m=Yt(d,{replace:i,state:s,target:c,preventScrollReset:h,relative:a});function P(x){n&&n(x),x.defaultPrevented||m(x)}return u.createElement("a",fe({},f,{href:I||p,onClick:C||o?n:P,ref:r,target:c}))});var Pe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Pe||(Pe={}));var Ie;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ie||(Ie={}));function Yt(e,t){let{target:r,replace:n,state:a,preventScrollReset:o,relative:i}=t===void 0?{}:t,s=qe(),c=le(),d=He(e,{relative:i});return u.useCallback(h=>{if(Vt(h,r)){h.preventDefault();let f=n!==void 0?n:Q(c)===Q(d);s(e,{replace:f,state:a,preventScrollReset:o,relative:i})}},[c,s,d,n,a,r,e,o,i])}var Qt=u;function Xt(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var Z=Xt(Qt),Zt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},er=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Ee=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=er(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return Z.default.createElement("svg",Zt({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),Z.default.createElement("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"}))},tr=Z.default.memo?Z.default.memo(Ee):Ee,rr=tr;const nr=N(rr);var ar=u;function or(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var ee=or(ar),ir=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},lr=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Le=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=lr(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return ee.default.createElement("svg",ir({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),ee.default.createElement("path",{d:"M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"}))},sr=ee.default.memo?ee.default.memo(Le):Le,cr=sr;const ur=N(cr);function Ae(){return g(ge,{...hr,children:[g(ge,{...fr,children:[l(ce,{to:"/",children:g(M,{...dr,children:[l(Je,{as:nr,boxSize:"20px",mr:2}),l(L,{as:"h1",size:"sm",children:"eduardo-rdguez"})]})}),l(M,{className:"terminal-cursor"})]}),g(F,{...pr,children:[l(Y,{spacing:8,display:{base:"none",md:"flex"},children:l(ce,{to:"/about-me",children:l(M,{...mr,children:"About me"})})}),l(Y,{display:{md:"none"},children:g(Ke,{placement:"bottom-end",gutter:2,children:[l(Ye,{id:"menu-button",name:"menu-button","aria-label":"menu-button",as:W,icon:l(ur,{}),...gr}),l(Qe,{...vr,children:l(Xe,{...yr,children:l(ce,{to:"/about-me",children:"About me"})})})]})})]})]})}const dr={display:"flex",_hover:{textDecoration:"none"}},hr={minH:"80px",py:{base:6,md:10},borderStyle:"solid",alignItems:"center"},fr={flex:{base:1},justifyContent:"start",alignItems:"center"},pr={flex:{base:1,md:0},justify:"flex-end",direction:"row",spacing:6},mr={w:"full",fontSize:"1rem",fontWeight:700,whiteSpace:"nowrap",_hover:{textDecoration:"none"}},gr={bgColor:"transparent",pr:0,_active:{bgColor:"transparent"},_hover:{bgColor:"transparent"}},vr={bgColor:"transparent",justifyContent:"end",minW:"0",w:"auto",p:0},yr={bgColor:"transparent",color:"white",justifyContent:"end"};var br=u;function xr(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var te=xr(br),wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Cr=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Se=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=Cr(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return te.default.createElement("svg",wr({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),te.default.createElement("path",{d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"}))},Pr=te.default.memo?te.default.memo(Se):Se,Ir=Pr;const Er=N(Ir);var Lr=u;function Sr(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var re=Sr(Lr),Rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Or=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Re=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=Or(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return re.default.createElement("svg",Rr({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),re.default.createElement("path",{d:"M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"}))},$r=re.default.memo?re.default.memo(Re):Re,zr=$r;const jr=N(zr);var Br=u;function kr(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var ne=kr(Br),Mr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Nr=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Oe=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=Nr(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return ne.default.createElement("svg",Mr({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),ne.default.createElement("path",{d:"M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"}))},Ur=ne.default.memo?ne.default.memo(Oe):Oe,_r=Ur;const Dr=N(_r);var Wr=u;function Fr(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var ae=Fr(Wr),Tr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qr=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},$e=function(t){var r=t.color,n=r===void 0?"currentColor":r,a=t.size,o=a===void 0?24:a;t.children;var i=qr(t,["color","size","children"]),s="remixicon-icon "+(i.className||"");return ae.default.createElement("svg",Tr({},i,{className:s,width:o,height:o,fill:n,viewBox:"0 0 24 24"}),ae.default.createElement("path",{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"}))},Hr=ae.default.memo?ae.default.memo($e):$e,Vr=Hr;const Ar=N(Vr);function Gr(){return l(M,{children:g(Y,{...Jr,children:[l(S,{href:"https://github.com/eduardo-rdguez",target:"_blank",children:l(W,{"aria-label":"github",icon:l(Er,{}),...H})}),l(S,{href:"https://www.linkedin.com/in/eduardo-peralta-rodriguez/",target:"_blank",children:l(W,{"aria-label":"linkedin",icon:l(Dr,{}),...H})}),l(S,{href:"mailto:eduardoperaltardgz@gmail.com",target:"_blank",children:l(W,{"aria-label":"mail",icon:l(Ar,{}),...H})}),l(S,{href:"https://www.instagram.com/ed.rdguez",target:"_blank",children:l(W,{"aria-label":"instagram",icon:l(jr,{}),...H})})]})})}const H={rounded:"full",bg:"transparent",_hover:{borderWidth:"2px",color:"white"}},Jr={spacing:6,mt:{base:4,md:0},borderWidth:"2px",borderColor:"white",rounded:"full",px:4};function Kr(){return g(je,{...Qr,children:[l(B,{colSpan:{base:2,md:1},children:l(F,{children:g(k,{spacing:{base:1,md:6},alignItems:"flex-start",children:[l(z,{...ze,color:"#ffffffa3",children:"Hi, my name's"}),l(L,{...Yr,children:"Eduardo."}),l(L,{...Xr,children:"I'm a Software Developer"}),l(z,{...ze,children:"I tend to make use of emerging technologies to build application that looks great, feels fantastic, and functions correctly."}),l(Gr,{})]})})}),l(B,{...Zr,children:l(v,{src:"https://eduardo-rdguez.s3.amazonaws.com/profile-picture.webp",alt:"profile-picture",rounded:"full",className:"profile-picture"})})]})}const ze={fontWeight:600,textAlign:"inherit"},Yr={as:"h2",size:{base:"xl",md:"4xl"}},Qr={columns:2,h:{base:"60vh",md:"70vh"},alignItems:"center",spacing:{base:6,md:0}},Xr={as:"h2",size:{base:"lg",md:"2xl"},color:"#ffffffa3"},Zr={display:"flex",justifyContent:{base:"center",md:"flex-end"},colSpan:{base:2,md:1}};function en(){return l(M,{...tn,children:g(z,{children:["© ",e()," All rights reserved."]})});function e(){return new Date().getFullYear()}}const tn={display:"flex",justifyContent:"center",position:"fixed",bottom:"0",left:"0",w:"full",py:{base:5,md:8}};function rn(){return g(Be,{maxW:{base:"4xl",lg:"6xl"},children:[l(Ae,{}),l(Kr,{}),l(en,{})]})}function nn(){return g(F,{spacing:{base:2,md:4},children:[l(Y,{justifyContent:"center",children:l(L,{...on,children:"Skills"})}),g(je,{...an,children:[l(B,{children:g(k,{...V,children:[l(v,{src:"https://img.shields.io/badge/Groovy-4298B8.svg?style=flat-square&logo=Apache+Groovy&logoColor=white",...b,alt:"groovy-badge"}),l(v,{src:"https://img.shields.io/badge/Kotlin-%237F52FF.svg?style=flat-square&logo=kotlin&logoColor=white",...b,alt:"kotlin-badge"}),l(v,{src:"https://img.shields.io/badge/Elixir-%234B275F.svg?style=flat-square&logo=elixir&logoColor=white",...b,alt:"elixir-badge"}),l(v,{src:"https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white",...b,alt:"java-badge"}),l(v,{src:"https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E",...b,alt:"javascript-badge"}),l(v,{src:"https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square",...b,alt:"typescript-badge"})]})}),l(B,{children:g(k,{...V,children:[l(v,{src:"https://img.shields.io/badge/Spring-%236DB33F.svg?style=flat-square&logo=spring&logoColor=white",...b,alt:"spring-badge"}),l(v,{src:"https://img.shields.io/badge/Phoenix-F05423?style=flat-square&logo=phoenix&logoColor=white",...b,alt:"phoenix-badge"}),l(v,{src:"https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB",...b,alt:"react-badge"}),l(v,{src:"https://img.shields.io/badge/Vue.js-%2335495e.svg?style=flat-square&logo=vuedotjs&logoColor=%234FC08D",...b,alt:"vuejs-badge"}),l(v,{src:"https://img.shields.io/badge/Spock-1662AE?style=flat-square&logo=spock&logoColor=white",...b,alt:"spock-badge"})]})}),l(B,{children:g(k,{...V,children:[l(v,{src:"https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",...b,alt:"git-badge"}),l(v,{src:"https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white",...b,alt:"jira-badge"}),l(v,{src:"https://img.shields.io/badge/Shell_Script-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=white",...b,alt:"shellScript-badge"}),l(v,{src:"https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white",...b,alt:"docker-badge"}),l(v,{src:"https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white",...b,alt:"aws-badge"}),l(v,{src:"https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white",...b,alt:"stripe-badge"})]})}),l(B,{children:g(k,{...V,children:[l(v,{src:"https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",...b,alt:"postgresql-badge"}),l(v,{src:"https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",...b,alt:"oracle-badge"}),l(v,{src:"https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",...b,alt:"mysql-badge"})]})})]})]})}const an={justifyItems:"center",columns:{base:2,md:4},spacing:{base:5,md:0}},b={rounded:"md",height:6},on={as:"h2",size:{base:"md",md:"lg"},color:"#ffffffa3",rounded:"xl",py:1},V={mt:3,spacing:2,alignItems:"flex-start"},ln="/assets/mesh-ae0a226b.svg";function sn(){return g(F,{...cn,children:[l(F,{children:g(k,{spacing:{base:4,md:6},alignItems:"flex-start",children:[l(L,{...A,children:"Who are you?"}),g(z,{...G,children:["I'm Eduardo and I'm ",e()," years old. I joined the"," ",l(S,{href:"https://www.makingdevs.com/",...J,children:"MakingDevs"})," ","team in March 2022. I'm passionate about technology and innovative software solutions."]}),l(L,{...A,children:"What you do?"}),g(z,{...G,children:["I'm a Software Developer. I currently work with"," ",l(S,{href:"https://elixir-lang.org/",...J,children:"Elixir"})," ","and"," ",l(S,{href:"https://www.phoenixframework.org/",...J,children:"Phoenix Framework"})," ","on a Real Estate Platform (REP)."]}),l(L,{...A,children:"Do you know what you're good at?"}),l(z,{...G,children:"I know I'm good at what I'm doing now. My results can prove it anytime. I'm confident in my ability to contribute to any software development project. Also, I'm committed to continuously expanding my knowledge and skills to keep up with the latest technologies and best practices."}),l(L,{...A,children:"What aspects are you passionate about?"}),g(z,{...G,children:["I'm most passionate about the technologies that we are using here at"," ",l(S,{href:"https://www.makingdevs.com/",...J,children:"MakingDevs"}),". That makes me want to learn more and keep up with building something greater."]})]})}),l(nn,{}),l(M,{bgImage:ln,...un})]});function e(){const t=new Date("1996-11-15"),r=new Date;let n=r.getFullYear()-t.getFullYear();const a=r.getMonth()-t.getMonth();return(a<0||a===0&&r.getDate()<t.getDate())&&n--,n}}const cn={justifyContent:"center",spacing:{base:6,md:8},mt:{base:0,md:4},mb:8},A={as:"h2",size:{base:"md",md:"lg"},color:"#ffffffa3",rounded:"xl",py:1},G={fontSize:"16px",textAlign:"justify",fontWeight:500},J={fontWeight:700},un={position:"absolute",w:"full",h:"full",className:"mesh",bottom:0};function dn(){return g(Be,{maxW:{base:"2xl",lg:"4xl"},children:[l(Ae,{}),l(sn,{})]})}const hn=Ze({fonts:{body:"Matter, sans-serif",heading:"CalSans, sans-serif"},styles:{global:()=>({body:{bg:"#18191a",color:"#f2f2f2",fontSize:{base:"14px",md:"16px"}}})}});function fn(){return l(et,{theme:hn,children:g(Tt,{children:[l(K,{path:"/",element:l(rn,{})}),l(K,{path:"/about-me",element:l(dn,{})}),l(K,{path:"*",element:l(Wt,{to:"/"})})]})})}const pn=ke(document.getElementById("root"));pn.render(l(u.StrictMode,{children:l(Gt,{children:l(fn,{})})}));
