import{s as d,v as n,d as p,u as c,o,f as t,n as r,a as s,r as l,a3 as i,Z as u,g as y,_ as m,$ as f,a0 as h,h as v}from"./index.3be2efd4.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),_={name:"ElCard"},w=p({..._,props:S,setup(b){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[f(h(e.header),1)])],2)):i("v-if",!0),u("div",{class:r(s(a).e("body")),style:y(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var C=m(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const $=v(C);export{$ as E};
