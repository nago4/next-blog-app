(()=>{var e={};e.id=931,e.ids=[931],e.modules={8860:e=>{"use strict";e.exports=require("jsdom")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1640:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>h,originalPathname:()=>l,pages:()=>d,routeModule:()=>f,tree:()=>c}),r(5480),r(7346),r(5866);var n=r(3191),s=r(8716),i=r(7922),a=r.n(i),o=r(5231),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"C:\\Users\\rs22095L\\デスクトップ\\next-blog-app\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5597))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7346)),"C:\\Users\\rs22095L\\デスクトップ\\next-blog-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5597))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\rs22095L\\デスクトップ\\next-blog-app\\src\\app\\page.tsx"],l="/page",h={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},569:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1840:(e,t,r)=>{Promise.resolve().then(r.bind(r,8550))},1937:(e,t,r)=>{Promise.resolve().then(r.bind(r,8629))},8295:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",s="week",i="month",a="quarter",o="year",u="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},f="en",m={};m[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var p="$isDayjsObject",x=function(e){return e instanceof y||!(!e||!e[p])},v=function e(t,r,n){var s;if(!t)return f;if("string"==typeof t){var i=t.toLowerCase();m[i]&&(s=i),r&&(m[i]=r,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;m[o]=t,s=o}return!n&&s&&(f=s),s||!n&&f},$=function(e,t){if(x(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new y(r)},g={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),s=t.clone().add(n,i),a=r-s<0,o=t.clone().add(n+(a?-1:1),i);return+(-(n+(r-s)/(a?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:i,y:o,w:s,d:"day",D:u,h:n,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};g.l=v,g.i=x,g.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function h(e){this.$L=v(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[p]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(g.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return g},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var r=$(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return $(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<$(e)},f.$g=function(e,t,r){return g.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var c=this,d=!!g.u(a)||a,l=g.p(e),h=function(e,t){var r=g.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?r:r.endOf("day")},f=function(e,t){return g.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,p=this.$M,x=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case o:return d?h(1,0):h(31,11);case i:return d?h(1,p):h(0,p+1);case s:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return h(d?x-y:x+(6-y),p);case"day":case u:return f(v+"Hours",0);case n:return f(v+"Minutes",1);case r:return f(v+"Seconds",2);case t:return f(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(s,a){var c,d=g.p(s),l="set"+(this.$u?"UTC":""),h=((c={}).day=l+"Date",c[u]=l+"Date",c[i]=l+"Month",c[o]=l+"FullYear",c[n]=l+"Hours",c[r]=l+"Minutes",c[t]=l+"Seconds",c[e]=l+"Milliseconds",c)[d],f="day"===d?this.$D+(a-this.$W):a;if(d===i||d===o){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[g.p(e)]()},f.add=function(e,a){var u,c=this;e=Number(e);var d=g.p(a),l=function(t){var r=$(c);return g.w(r.date(r.date()+Math.round(t*e)),c)};if(d===i)return this.set(i,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return l(1);if(d===s)return l(7);var h=((u={})[r]=6e4,u[n]=36e5,u[t]=1e3,u)[d]||1,f=this.$d.getTime()+e*h;return g.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=g.z(this),i=this.$H,a=this.$m,o=this.$M,u=r.weekdays,d=r.months,h=r.meridiem,f=function(e,r,s,i){return e&&(e[r]||e(t,n))||s[r].slice(0,i)},m=function(e){return g.s(i%12||12,e,"0")},p=h||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(l,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return g.s(t.$y,4,"0");case"M":return o+1;case"MM":return g.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,d,3);case"MMMM":return f(d,o);case"D":return t.$D;case"DD":return g.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,u,2);case"ddd":return f(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(i);case"HH":return g.s(i,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return g.s(a,2,"0");case"s":return String(t.$s);case"ss":return g.s(t.$s,2,"0");case"SSS":return g.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,u,c){var d,l=this,h=g.p(u),f=$(e),m=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,x=function(){return g.m(l,f)};switch(h){case o:d=x()/12;break;case i:d=x();break;case a:d=x()/3;break;case s:d=(p-m)/6048e5;break;case"day":d=(p-m)/864e5;break;case n:d=p/36e5;break;case r:d=p/6e4;break;case t:d=p/1e3;break;default:d=p}return c?d:g.a(d)},f.daysInMonth=function(){return this.endOf(i).$D},f.$locale=function(){return m[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=v(e,t,!0);return n&&(r.$L=n),r},f.clone=function(){return g.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),b=y.prototype;return $.prototype=b,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",i],["$y",o],["$D",u]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),$.extend=function(e,t){return e.$i||(e(t,y,$),e.$i=!0),$},$.locale=v,$.isDayjs=x,$.unix=function(e){return $(1e3*e)},$.en=m[f],$.Ls=m,$.p={},$},e.exports=t()},8550:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var n=r(326),s=r(1009),i=r(9497),a=r(3440),o=r(434);let u=()=>n.jsx("header",{children:n.jsx("div",{className:"bg-slate-800 py-2",children:(0,n.jsxs)("div",{className:(0,s.m6)("mx-4 max-w-2xl md:mx-auto","flex items-center justify-between","text-lg font-bold text-white"),children:[n.jsx("div",{children:(0,n.jsxs)(o.default,{href:"/",children:[n.jsx(i.G,{icon:a.io7,className:"mr-1"}),"AMGMs Blog"]})}),(0,n.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,n.jsxs)("div",{children:[n.jsx(i.G,{icon:a.Y$T,className:"mr-1"}),"検索"]}),(0,n.jsxs)("div",{children:[n.jsx(i.G,{icon:a.ILF,className:"mr-1"}),n.jsx(o.default,{href:"/about",children:"About"})]})]})]})})})},8629:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(326),s=r(7577),i=r(8295),a=r.n(i),o=r(1009),u=r(4420),c=r.n(u),d=r(434);let l=e=>{let{post:t}=e,r=c().sanitize(t.content,{ALLOWED_TAGS:["b","strong","i","em","u","br"]});return(0,n.jsxs)("div",{className:"border border-slate-400 p-3",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[n.jsx("div",{children:a()(t.createdAt).format("YYYY年MM月DD日")}),n.jsx("div",{className:"flex space-x-1.5",children:t.categories.map(e=>n.jsx("div",{className:(0,o.m6)("rounded-md px-2 py-0.5","text-xs font-bold","border border-slate-400 text-slate-500"),children:e.name},e.id))})]}),(0,n.jsxs)(d.default,{href:`/posts/${t.id}`,children:[n.jsx("div",{className:"mb-1 text-lg font-bold",children:t.title}),n.jsx("div",{className:"line-clamp-3",dangerouslySetInnerHTML:{__html:r}})]})]})};var h=r(9497),f=r(3440);let m=()=>{let[e,t]=(0,s.useState)(null),[r,i]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/posts",{method:"GET",cache:"no-store"});if(!e.ok)throw Error("データの取得に失敗しました");let r=await e.json();t(r.map(e=>({id:e.id,title:e.title,content:e.content,coverImage:{url:e.coverImageURL,width:1e3,height:1e3},createdAt:e.createdAt,categories:e.categories.map(e=>({id:e.category.id,name:e.category.name}))})))}catch(e){i(e instanceof Error?e.message:"予期せぬエラーが発生しました")}})()},[]),r)?n.jsx("div",{children:r}):e?(0,n.jsxs)("main",{children:[n.jsx("div",{className:"text-2xl font-bold",children:"投稿記事一覧"}),n.jsx("div",{className:"mb-1 flex justify-end",children:n.jsx(d.default,{href:"/admin",className:"text-blue-500 underline",children:"管理者機能"})}),n.jsx("div",{className:"space-y-3",children:e.map(e=>n.jsx(l,{post:e},e.id))})]}):(0,n.jsxs)("div",{className:"text-gray-500",children:[n.jsx(h.G,{icon:f.LM3,className:"mr-1 animate-spin"}),"Loading..."]})}},7346:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var n=r(9510);r(5023),r(9175);var s=r(7010);let i=(0,r(8570).createProxy)(String.raw`C:\Users\rs22095L\デスクトップ\next-blog-app\src\app\_components\Header.tsx#default`);s.vc.autoAddCss=!1;let a={title:"NextBlogApp",description:"Built to learn Next.js and modern web development."},o=e=>{let{children:t}=e;return n.jsx("html",{lang:"ja",children:(0,n.jsxs)("body",{children:[n.jsx(i,{}),n.jsx("div",{className:"mx-4 mt-2 max-w-2xl md:mx-auto",children:t})]})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(8570).createProxy)(String.raw`C:\Users\rs22095L\デスクトップ\next-blog-app\src\app\page.tsx#default`)},5597:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)("/next-blog-app",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,472,621,420],()=>r(1640));module.exports=n})();