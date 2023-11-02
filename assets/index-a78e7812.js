import{C as F,A as c,p,a as m,P as _,T}from"./table-875b4576.js";import{H as u}from"./headTitle-7f7b0094.js";import{S as f}from"./searchForm-ab8327c0.js";import{_ as h,d as b,f as t,c as g,b as d,g as i,r as o,o as C}from"./index-ac90ce9d.js";F.register(c,p,m);const S=b({name:"ChartPieReport",components:{Pie:_,HeadTitle:u,SearchForm:f,Table:T},setup(){const e=o({data:{labels:["Field1","Field2","Field3","Field4"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom",labels:{marginTop:30,useBorderRadius:!0,borderRadius:100,usePointStyle:!0,padding:20}}}}}),a=o({headContent:["STT","Field1","Field2","Field3","Field4"],dataContent:[{STT:"1",Field1:"Field2",Field2:"Field2",Field3:"Field3",Field4:"Field4"},{STT:"2",Field1:"Field2",Field2:"Field2",Field3:"Field3",Field4:"Field4"},{STT:"3",Field1:"Field2",Field2:"Field2",Field3:"Field3",Field4:"Field4"},{STT:"4",Field1:"Field2",Field2:"Field2",Field3:"Field3",Field4:"Field4"},{STT:"5",Field1:"Field2",Field2:"Field2",Field3:"Field3",Field4:"Field4"}],backgroundHeader:"#FFD154",borderColor:"#FFE07D",theadTitleColor:"#fff",tbodyTitleColor:"#393433"});return{chartData:e,dataTable:a}}}),v={class:"px-6"},D={class:"mt-5"},B={class:"mt-5"},P={class:"mt-8 relative"},y={class:"mt-8 relative"};function H(e,a,k,E,R,$){const l=t("HeadTitle"),s=t("SearchForm"),r=t("Pie"),n=t("Table");return C(),g("div",v,[d("div",D,[i(l,{data:{colorBorder:"red",text:"Order analysis - by customer"}})]),d("div",B,[i(s)]),d("div",P,[i(r,{data:e.chartData.data,options:e.chartData.options},null,8,["data","options"])]),d("div",y,[i(n,{data:e.dataTable},null,8,["data"])])])}const O=h(S,[["render",H]]);export{O as default};