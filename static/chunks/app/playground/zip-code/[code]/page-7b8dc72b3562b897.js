(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{3375:function(e,s,t){Promise.resolve().then(t.bind(t,114))},9376:function(e,s,t){"use strict";var n=t(5475);t.o(n,"useParams")&&t.d(s,{useParams:function(){return n.useParams}}),t.o(n,"useRouter")&&t.d(s,{useRouter:function(){return n.useRouter}})},114:function(e,s,t){"use strict";t.r(s);var n=t(7437),c=t(2265),a=t(9376);s.default=()=>{let{code:e}=(0,a.useParams)(),[s,t]=(0,c.useState)("APIからデータを取得中...");return(0,c.useEffect)(()=>{(async()=>{let s="".concat("https://zipcloud.ibsnet.co.jp/api/search","?zipcode=").concat(e),n=await fetch(s,{method:"GET",cache:"no-store"});console.log("ウェブAPIからデータを取得しました"),t(JSON.stringify(await n.json(),null,2))})()},[e]),(0,n.jsxs)("main",{children:[(0,n.jsx)("div",{className:"mb-5 text-2xl font-bold",children:"郵便番号 ".concat(e," の検索")}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)("div",{children:"実行結果"}),(0,n.jsx)("pre",{className:"rounded-md bg-green-100 p-3 text-sm",children:s})]})]})}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=3375)}),_N_E=e.O()}]);