import{d as o,z as c,f as n,o as i,g as s,j as d,m as f,k as a}from"../modules/vue-BsGlJ3R9.js";const u={class:"grid grid-cols-2 w-full h-full"},m=["src"],v=o({__name:"iframe-right",props:{url:{},scale:{}},setup(r){const t=r,l=c(()=>`${1/(t.scale||1)*100}%`);return(e,p)=>(i(),n("div",u,[s("div",f({class:"slidev-layout default"},e.$attrs),[d(e.$slots,"default")],16),s("div",{relative:"",style:a({width:l.value,height:l.value})},[s("iframe",{id:"frame",class:"w-full h-full",src:e.url,style:a(e.scale?{transform:`scale(${e.scale})`,transformOrigin:"top left"}:{})},null,12,m)],4)]))}});export{v as _};
