import{_ as i,d as p,r as c,j as C,o as a,c as o,b as r,t as l,n as u,f as s,g as d,F as h,e as x}from"./index-ac90ce9d.js";import{H as A}from"./headTitle-7f7b0094.js";import{S as $}from"./searchForm-ab8327c0.js";const v=p({name:"ProgressBar",props:{data:{title:"",percentCurrent:0,backgroundBox:"",backgroundBar:""}},setup(e){const n=c(e.data),t=c(0);return C(()=>{setTimeout(()=>{t.value=`${e.data.percentCurrent}%`},250)}),{dataValue:n,progressBarWidth:t}}}),S={class:"w-full"},T={class:"mb-3"},M={class:"leading-8 text-base text-black-2 pl-1"},I={class:"flex items-center justify-between"},P={class:"w-11 ml-3 text-lg font-semibold"};function V(e,n,t,F,B,g){return a(),o("div",S,[r("div",T,[r("h4",M,l(e.dataValue.title),1),r("div",I,[r("div",{class:"relative h-8 w-full rounded-2xl",style:u({backgroundColor:e.dataValue.backgroundBox,border:`4px solid ${e.dataValue.backgroundBox}`})},[r("div",{class:"absolute top-1/2 left-0 transform -translate-y-1/2 h-6 rounded-2xl transition-all duration-700",style:u({width:e.progressBarWidth,backgroundColor:e.dataValue.backgroundBar})},null,4)],4),r("div",P,[r("p",null,l(e.dataValue.percentCurrent)+"%",1)])])])])}const y=i(v,[["render",V]]),w=p({name:"Progress",components:{ProgressBar:y,HeadTitle:A,SearchForm:$},setup(){return{dataProgress:c([{title:"MAIA 222TS010B:",percentCurrent:80,backgroundBox:"#F5F5F5",backgroundBar:"#4252C6"},{title:"MAIA 222TS010B:",percentCurrent:70,backgroundBox:"#F5F5F5",backgroundBar:"#FF827B"},{title:"MAIA 222TS010B:",percentCurrent:100,backgroundBox:"#F5F5F5",backgroundBar:"#FFD054"},{title:"MAIA 222TS010B:",percentCurrent:60,backgroundBox:"#F5F5F5",backgroundBar:"#90C6FF"},{title:"MAIA 222TS010B:",percentCurrent:30,backgroundBox:"#F5F5F5",backgroundBar:"#FF827C"},{title:"MAIA 222TS010B:",percentCurrent:65,backgroundBox:"#F5F5F5",backgroundBar:"#FFD155"},{title:"MAIA 222TS010B:",percentCurrent:45,backgroundBox:"#F5F5F5",backgroundBar:"#93C6FF"},{title:"MAIA 222TS010B:",percentCurrent:90,backgroundBox:"#F5F5F5",backgroundBar:"#4252C6"}])}}}),H={class:"px-6 w-full"},D={class:"mt-5"},j={class:"mt-5"},N={class:"mt-8 relative"};function W(e,n,t,F,B,g){const m=s("HeadTitle"),_=s("SearchForm"),b=s("ProgressBar");return a(),o("div",H,[r("div",D,[d(m,{data:{colorBorder:"red",text:"Customer order progress"}})]),r("div",j,[d(_)]),r("div",N,[(a(!0),o(h,null,x(e.dataProgress,(k,f)=>(a(),o("div",{key:f},[d(b,{data:k},null,8,["data"])]))),128))])])}const q=i(w,[["render",W]]);export{q as default};