import{aj as J,l as re,Q as be,q as he,a2 as oe,s as W,d as U,u as Z,e as C,aF as q,o as v,f as P,r as k,a9 as D,w as E,K as G,L as Q,a as e,Z as R,n as m,a0 as x,T as ee,_ as X,h as ie,v as F,aJ as Ce,H as ue,bs as Ee,k as te,c as I,ac as de,J as V,a3 as z,g as ce,b4 as pe,bt as ke,b as Te,b1 as we,j as A,p as $e,br as Me,ay as Le,x as Ie,P as Se,ak as me,bu as Be,bv as ne,bc as Ne,U as ze,M as De,bw as Re,O as Oe,E as Fe,R as ae,bx as fe,av as Pe,by as le,as as Ae,bz as _e}from"./index.3be2efd4.js";import{d as je,a as He,u as Ue,b as Ye,c as Xe,e as qe,f as Ve,E as Ke}from"./el-overlay.bfef89b4.js";import{F as Je,E as We}from"./focus-trap.41e58b92.js";const Ze=(...o)=>t=>{o.forEach(s=>{J(s)?s(t):s.value=t})},ge=Symbol("dialogInjectionKey"),Ge=(o,t,s)=>{let a={offsetX:0,offsetY:0};const n=r=>{const p=r.clientX,b=r.clientY,{offsetX:h,offsetY:f}=a,u=o.value.getBoundingClientRect(),y=u.left,S=u.top,j=u.width,B=u.height,N=document.documentElement.clientWidth,M=document.documentElement.clientHeight,H=-y+h,l=-S+f,O=N-y-j+h,w=M-S-B+f,Y=$=>{const L=Math.min(Math.max(h+$.clientX-p,H),O),se=Math.min(Math.max(f+$.clientY-b,l),w);a={offsetX:L,offsetY:se},o.value.style.transform=`translate(${oe(L)}, ${oe(se)})`},d=()=>{document.removeEventListener("mousemove",Y),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",Y),document.addEventListener("mouseup",d)},i=()=>{t.value&&o.value&&t.value.addEventListener("mousedown",n)},c=()=>{t.value&&o.value&&t.value.removeEventListener("mousedown",n)};re(()=>{be(()=>{s.value?i():c()})}),he(()=>{c()})},Qe=W({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),xe=["textContent"],es={name:"ElBadge"},ss=U({...es,props:Qe,setup(o,{expose:t}){const s=o,a=Z("badge"),n=C(()=>s.isDot?"":q(s.value)&&q(s.max)?s.max<s.value?`${s.max}+`:`${s.value}`:`${s.value}`);return t({content:n}),(i,c)=>(v(),P("div",{class:m(e(a).b())},[k(i.$slots,"default"),D(ee,{name:`${e(a).namespace.value}-zoom-in-center`,persisted:""},{default:E(()=>[G(R("sup",{class:m([e(a).e("content"),e(a).em("content",i.type),e(a).is("fixed",!!i.$slots.default),e(a).is("dot",i.isDot)]),textContent:x(e(n))},null,10,xe),[[Q,!i.hidden&&(e(n)||i.isDot)]])]),_:1},8,["name"])],2))}});var os=X(ss,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const ts=ie(os),K={},ns=W({a11y:{type:Boolean,default:!0},locale:{type:F(Object)},size:Ce,button:{type:F(Object)},experimentalFeatures:{type:F(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:F(Object)},zIndex:Number,namespace:{type:String,default:"el"}});U({name:"ElConfigProvider",props:ns,setup(o,{slots:t}){ue(()=>o.message,a=>{Object.assign(K,a!=null?a:{})},{immediate:!0,deep:!0});const s=Ee(o);return()=>k(t,"default",{config:s==null?void 0:s.value})}});const as=["aria-label"],ls=["id"],rs={name:"ElDialogContent"},is=U({...rs,props:je,emits:He,setup(o){const t=o,{t:s}=Ue(),{Close:a}=ke,{dialogRef:n,headerRef:i,bodyId:c,ns:r,style:p}=te(ge),{focusTrapRef:b}=te(Je),h=Ze(b,n),f=C(()=>t.draggable);return Ge(n,i,f),(u,y)=>(v(),P("div",{ref:e(h),class:m([e(r).b(),e(r).is("fullscreen",u.fullscreen),e(r).is("draggable",e(f)),{[e(r).m("center")]:u.center},u.customClass]),style:ce(e(p)),tabindex:"-1",onClick:y[1]||(y[1]=pe(()=>{},["stop"]))},[R("header",{ref_key:"headerRef",ref:i,class:m(e(r).e("header"))},[k(u.$slots,"header",{},()=>[R("span",{role:"heading",class:m(e(r).e("title"))},x(u.title),3)]),u.showClose?(v(),P("button",{key:0,"aria-label":e(s)("el.dialog.close"),class:m(e(r).e("headerbtn")),type:"button",onClick:y[0]||(y[0]=S=>u.$emit("close"))},[D(e(V),{class:m(e(r).e("close"))},{default:E(()=>[(v(),I(de(u.closeIcon||e(a))))]),_:1},8,["class"])],10,as)):z("v-if",!0)],2),R("div",{id:e(c),class:m(e(r).e("body"))},[k(u.$slots,"default")],10,ls),u.$slots.footer?(v(),P("footer",{key:0,class:m(e(r).e("footer"))},[k(u.$slots,"footer")],2)):z("v-if",!0)],6))}});var us=X(is,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const ds=["aria-label","aria-labelledby","aria-describedby"],cs={name:"ElDialog"},ps=U({...cs,props:Ye,emits:Xe,setup(o,{expose:t}){const s=o,a=Te();we({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},C(()=>!!a.title));const n=Z("dialog"),i=A(),c=A(),r=A(),{visible:p,titleId:b,bodyId:h,style:f,rendered:u,zIndex:y,afterEnter:S,afterLeave:j,beforeLeave:B,handleClose:N,onModalClick:M,onOpenAutoFocus:H,onCloseAutoFocus:l,onCloseRequested:O}=qe(s,i);$e(ge,{dialogRef:i,headerRef:c,bodyId:h,ns:n,rendered:u,style:f});const w=Ve(M),Y=C(()=>s.draggable&&!s.fullscreen);return t({visible:p,dialogContentRef:r}),(d,$)=>(v(),I(Le,{to:"body",disabled:!d.appendToBody},[D(ee,{name:"dialog-fade",onAfterEnter:e(S),onAfterLeave:e(j),onBeforeLeave:e(B),persisted:""},{default:E(()=>[G(D(e(Ke),{"custom-mask-event":"",mask:d.modal,"overlay-class":d.modalClass,"z-index":e(y)},{default:E(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":d.title||void 0,"aria-labelledby":d.title?void 0:e(b),"aria-describedby":e(h),class:m(`${e(n).namespace.value}-overlay-dialog`),onClick:$[0]||($[0]=(...L)=>e(w).onClick&&e(w).onClick(...L)),onMousedown:$[1]||($[1]=(...L)=>e(w).onMousedown&&e(w).onMousedown(...L)),onMouseup:$[2]||($[2]=(...L)=>e(w).onMouseup&&e(w).onMouseup(...L))},[D(e(We),{loop:"",trapped:e(p),"focus-start-el":"container",onFocusAfterTrapped:e(H),onFocusAfterReleased:e(l),onReleaseRequested:e(O)},{default:E(()=>[e(u)?(v(),I(us,{key:0,ref_key:"dialogContentRef",ref:r,"custom-class":d.customClass,center:d.center,"close-icon":d.closeIcon,draggable:e(Y),fullscreen:d.fullscreen,"show-close":d.showClose,title:d.title,onClose:e(N)},Me({header:E(()=>[d.$slots.title?k(d.$slots,"title",{key:1}):k(d.$slots,"header",{key:0,close:e(N),titleId:e(b),titleClass:e(n).e("title")})]),default:E(()=>[k(d.$slots,"default")]),_:2},[d.$slots.footer?{name:"footer",fn:E(()=>[k(d.$slots,"footer")])}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","title","onClose"])):z("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],42,ds)]),_:3},8,["mask","overlay-class","z-index"]),[[Q,e(p)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var ms=X(ps,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const Bs=ie(ms),ve=["success","info","warning","error"],g=Se({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:"",id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:me?document.body:void 0}),fs=W({customClass:{type:String,default:g.customClass},center:{type:Boolean,default:g.center},dangerouslyUseHTMLString:{type:Boolean,default:g.dangerouslyUseHTMLString},duration:{type:Number,default:g.duration},icon:{type:Ie,default:g.icon},id:{type:String,default:g.id},message:{type:F([String,Object,Function]),default:g.message},onClose:{type:F(Function),required:!1},showClose:{type:Boolean,default:g.showClose},type:{type:String,values:ve,default:g.type},offset:{type:Number,default:g.offset},zIndex:{type:Number,default:g.zIndex},grouping:{type:Boolean,default:g.grouping},repeatNum:{type:Number,default:g.repeatNum}}),gs={destroy:()=>!0},T=Be([]),vs=o=>{const t=T.findIndex(n=>n.id===o),s=T[t];let a;return t>0&&(a=T[t-1]),{current:s,prev:a}},ys=o=>{const{prev:t}=vs(o);return t?t.vm.exposeProxy.bottom:0},bs=["id"],hs=["innerHTML"],Cs={name:"ElMessage"},Es=U({...Cs,props:fs,emits:gs,setup(o,{expose:t}){const s=o,{Close:a}=Re,n=Z("message"),i=A(),c=A(!1),r=A(0);let p;const b=C(()=>s.type?s.type==="error"?"danger":s.type:"info"),h=C(()=>{const l=s.type;return{[n.bm("icon",l)]:l&&ne[l]}}),f=C(()=>s.icon||ne[s.type]||""),u=C(()=>ys(s.id)),y=C(()=>s.offset+u.value),S=C(()=>r.value+y.value),j=C(()=>({top:`${y.value}px`,zIndex:s.zIndex}));function B(){s.duration!==0&&({stop:p}=Oe(()=>{M()},s.duration))}function N(){p==null||p()}function M(){c.value=!1}function H({code:l}){l===Fe.esc&&M()}return re(()=>{B(),c.value=!0}),ue(()=>s.repeatNum,()=>{N(),B()}),Ne(document,"keydown",H),ze(i,()=>{r.value=i.value.getBoundingClientRect().height}),t({visible:c,bottom:S,close:M}),(l,O)=>(v(),I(ee,{name:e(n).b("fade"),onBeforeLeave:l.onClose,onAfterLeave:O[0]||(O[0]=w=>l.$emit("destroy")),persisted:""},{default:E(()=>[G(R("div",{id:l.id,ref_key:"messageRef",ref:i,class:m([e(n).b(),{[e(n).m(l.type)]:l.type&&!l.icon},e(n).is("center",l.center),e(n).is("closable",l.showClose),l.customClass]),style:ce(e(j)),role:"alert",onMouseenter:N,onMouseleave:B},[l.repeatNum>1?(v(),I(e(ts),{key:0,value:l.repeatNum,type:e(b),class:m(e(n).e("badge"))},null,8,["value","type","class"])):z("v-if",!0),e(f)?(v(),I(e(V),{key:1,class:m([e(n).e("icon"),e(h)])},{default:E(()=>[(v(),I(de(e(f))))]),_:1},8,["class"])):z("v-if",!0),k(l.$slots,"default",{},()=>[l.dangerouslyUseHTMLString?(v(),P(De,{key:1},[z(" Caution here, message could've been compromised, never use user's input as message "),R("p",{class:m(e(n).e("content")),innerHTML:l.message},null,10,hs)],2112)):(v(),P("p",{key:0,class:m(e(n).e("content"))},x(l.message),3))]),l.showClose?(v(),I(e(V),{key:2,class:m(e(n).e("closeBtn")),onClick:pe(M,["stop"])},{default:E(()=>[D(e(a))]),_:1},8,["class","onClick"])):z("v-if",!0)],46,bs),[[Q,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var ks=X(Es,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ts=1;const ye=o=>{const t=!o||ae(o)||fe(o)||J(o)?{message:o}:o,s={...g,...t};if(!s.appendTo)s.appendTo=document.body;else if(ae(s.appendTo)){let a=document.querySelector(s.appendTo);Ae(a)||(a=document.body),s.appendTo=a}return s},ws=o=>{const t=T.indexOf(o);if(t===-1)return;T.splice(t,1);const{handler:s}=o;s.close()},$s=({appendTo:o,...t},s)=>{const{nextZIndex:a}=Pe(),n=`message_${Ts++}`,i=t.onClose,c=document.createElement("div"),r={...t,zIndex:a()+t.zIndex,id:n,onClose:()=>{i==null||i(),ws(f)},onDestroy:()=>{le(null,c)}},p=D(ks,r,J(r.message)||fe(r.message)?{default:r.message}:null);p.appContext=s||_._context,le(p,c),o.appendChild(c.firstElementChild);const b=p.component,f={id:n,vnode:p,vm:b,handler:{close:()=>{b.exposeProxy.visible=!1}},props:p.component.props};return f},_=(o={},t)=>{if(!me)return{close:()=>{}};if(q(K.max)&&T.length>=K.max)return{close:()=>{}};const s=ye(o);if(s.grouping&&T.length){const n=T.find(({vnode:i})=>{var c;return((c=i.props)==null?void 0:c.message)===s.message});if(n)return n.props.repeatNum+=1,n.props.type=s.type,n.handler}const a=$s(s,t);return T.push(a),a.handler};ve.forEach(o=>{_[o]=(t={},s)=>{const a=ye(t);return _({...a,type:o},s)}});function Ms(o){for(const t of T)(!o||o===t.props.type)&&t.handler.close()}_.closeAll=Ms;_._context=null;const Ns=_e(_,"$message");export{Ns as E,Bs as a};
