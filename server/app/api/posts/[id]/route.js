"use strict";(()=>{var e={};e.id=602,e.ids=[602],e.modules={3524:e=>{e.exports=require("@prisma/client")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},51:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>x,patchFetch:()=>g,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{GET:()=>u});var o=r(9303),a=r(8716),i=r(670),n=r(3538),p=r(7070);let u=async(e,t)=>{try{let e=t.params.id,r=await n.Z.post.findUnique({where:{id:e},select:{id:!0,title:!0,content:!0,coverImageURL:!0,createdAt:!0,updatedAt:!0,categories:{select:{category:{select:{id:!0,name:!0}}}}}});if(!r)return p.NextResponse.json({error:`id='${e}'の投稿記事は見つかりませんでした`},{status:404});return p.NextResponse.json(r)}catch(e){return console.error(e),p.NextResponse.json({error:"投稿記事の取得に失敗しました"},{status:500})}},d=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/posts/[id]/route",pathname:"/api/posts/[id]",filename:"route",bundlePath:"app/api/posts/[id]/route"},resolvedPagePath:"C:\\Users\\rs22095L\\デスクトップ\\next-blog-app\\src\\app\\api\\posts\\[id]\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:m}=d,x="/api/posts/[id]/route";function g(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}},3538:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(3524);let o=globalThis.prismaGlobal??new s.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,972],()=>r(51));module.exports=s})();