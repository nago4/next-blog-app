(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6338:function(t,e,n){Promise.resolve().then(n.bind(n,7309))},1096:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",s="week",i="month",a="quarter",u="year",c="date",o="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l="en",$={};$[l]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var m="$isDayjsObject",y=function(t){return t instanceof M||!(!t||!t[m])},v=function t(e,n,r){var s;if(!e)return l;if("string"==typeof e){var i=e.toLowerCase();$[i]&&(s=i),n&&($[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,s=u}return!r&&s&&(l=s),s||!r&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},p={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,i),a=n-s<0,u=e.clone().add(r+(a?-1:1),i);return+(-(r+(n-s)/(a?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return({M:i,y:u,w:s,d:"day",D:c,h:r,m:n,s:e,ms:t,Q:a})[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};p.l=v,p.i=y,p.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function h(t){this.$L=v(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[m]=!0}var l=h.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(p.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return p},l.isValid=function(){return this.$d.toString()!==o},l.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return g(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<g(t)},l.$g=function(t,e,n){return p.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,a){var o=this,d=!!p.u(a)||a,f=p.p(t),h=function(t,e){var n=p.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return d?n:n.endOf("day")},l=function(t,e){return p.w(o.toDate()[t].apply(o.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},$=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case u:return d?h(1,0):h(31,11);case i:return d?h(1,m):h(0,m+1);case s:var g=this.$locale().weekStart||0,M=($<g?$+7:$)-g;return h(d?y-M:y+(6-M),m);case"day":case c:return l(v+"Hours",0);case r:return l(v+"Minutes",1);case n:return l(v+"Seconds",2);case e:return l(v+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,a){var o,d=p.p(s),f="set"+(this.$u?"UTC":""),h=((o={}).day=f+"Date",o[c]=f+"Date",o[i]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[n]=f+"Minutes",o[e]=f+"Seconds",o[t]=f+"Milliseconds",o)[d],l="day"===d?this.$D+(a-this.$W):a;if(d===i||d===u){var $=this.clone().set(c,1);$.$d[h](l),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](l);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[p.p(t)]()},l.add=function(t,a){var c,o=this;t=Number(t);var d=p.p(a),f=function(e){var n=g(o);return p.w(n.date(n.date()+Math.round(e*t)),o)};if(d===i)return this.set(i,this.$M+t);if(d===u)return this.set(u,this.$y+t);if("day"===d)return f(1);if(d===s)return f(7);var h=((c={})[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,l=this.$d.getTime()+t*h;return p.w(l,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||o;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=p.z(this),i=this.$H,a=this.$m,u=this.$M,c=n.weekdays,d=n.months,h=n.meridiem,l=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},$=function(t){return p.s(i%12||12,t,"0")},m=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return p.s(e.$y,4,"0");case"M":return u+1;case"MM":return p.s(u+1,2,"0");case"MMM":return l(n.monthsShort,u,d,3);case"MMMM":return l(d,u);case"D":return e.$D;case"DD":return p.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,c,2);case"ddd":return l(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return p.s(i,2,"0");case"h":return $(1);case"hh":return $(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return p.s(a,2,"0");case"s":return String(e.$s);case"ss":return p.s(e.$s,2,"0");case"SSS":return p.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")})},l.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},l.diff=function(t,c,o){var d,f=this,h=p.p(c),l=g(t),$=(l.utcOffset()-this.utcOffset())*6e4,m=this-l,y=function(){return p.m(f,l)};switch(h){case u:d=y()/12;break;case i:d=y();break;case a:d=y()/3;break;case s:d=(m-$)/6048e5;break;case"day":d=(m-$)/864e5;break;case r:d=m/36e5;break;case n:d=m/6e4;break;case e:d=m/1e3;break;default:d=m}return o?d:p.a(d)},l.daysInMonth=function(){return this.endOf(i).$D},l.$locale=function(){return $[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return p.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h}(),D=M.prototype;return g.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",i],["$y",u],["$D",c]].forEach(function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),g.extend=function(t,e){return t.$i||(t(e,M,g),t.$i=!0),g},g.locale=v,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=$[l],g.Ls=$,g.p={},g},t.exports=e()},7309:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return $}});var r=n(7437),s=n(2265),i=n(1096),a=n.n(i),u=n(3335),c=n(7835),o=n.n(c),d=n(7648),f=t=>{let{post:e}=t,n=o().sanitize(e.content,{ALLOWED_TAGS:["b","strong","i","em","u","br"]});return(0,r.jsxs)("div",{className:"border border-slate-400 p-3",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{children:a()(e.createdAt).format("YYYY年MM月DD日")}),(0,r.jsx)("div",{className:"flex space-x-1.5",children:e.categories.map(t=>(0,r.jsx)("div",{className:(0,u.m6)("rounded-md px-2 py-0.5","text-xs font-bold","border border-slate-400 text-slate-500"),children:t.name},t.id))})]}),(0,r.jsxs)(d.default,{href:"/posts/".concat(e.id),children:[(0,r.jsx)("div",{className:"mb-1 text-lg font-bold",children:e.title}),(0,r.jsx)("div",{className:"line-clamp-3",dangerouslySetInnerHTML:{__html:n}})]})]})},h=n(1268),l=n(5217),$=()=>{let[t,e]=(0,s.useState)(null),[n,i]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async()=>{try{let t=await fetch("/api/posts",{method:"GET",cache:"no-store"});if(!t.ok)throw Error("データの取得に失敗しました");let n=await t.json();e(n.map(t=>({id:t.id,title:t.title,content:t.content,coverImage:{url:t.coverImageURL,width:1e3,height:1e3},createdAt:t.createdAt,categories:t.categories.map(t=>({id:t.category.id,name:t.category.name}))})))}catch(t){i(t instanceof Error?t.message:"予期せぬエラーが発生しました")}})()},[]),n)?(0,r.jsx)("div",{children:n}):t?(0,r.jsxs)("main",{children:[(0,r.jsx)("div",{className:"text-2xl font-bold",children:"投稿記事一覧"}),(0,r.jsx)("div",{className:"mb-1 flex justify-end",children:(0,r.jsx)(d.default,{href:"/admin",className:"text-blue-500 underline",children:"管理者機能"})}),(0,r.jsx)("div",{className:"space-y-3",children:t.map(t=>(0,r.jsx)(f,{post:t},t.id))})]}):(0,r.jsxs)("div",{className:"text-gray-500",children:[(0,r.jsx)(h.G,{icon:l.LM3,className:"mr-1 animate-spin"}),"Loading..."]})}}},function(t){t.O(0,[676,268,335,648,835,971,117,744],function(){return t(t.s=6338)}),_N_E=t.O()}]);