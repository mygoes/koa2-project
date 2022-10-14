import{ai as jt,v as L,e as M,aj as Le,H as N,l as Ye,N as gn,ak as Ae,a1 as Ue,al as hn,am as yn,s as Q,a as E,p as Se,_ as pe,d as ne,j as I,r as le,u as Ie,k as ue,q as Ke,o as U,f as He,n as Ze,an as Je,K as Dt,ao as bn,S as wn,M as On,ap as En,aq as Cn,a9 as ke,ar as $t,as as Fe,at as Lt,c as he,w as te,m as Nt,a3 as ge,au as bt,av as Tn,aw as An,g as Pn,h as _t,E as wt,ax as Rn,Y as me,L as Sn,T as kn,ay as Bn,az as Mn,X as Ge,aA as Ot,aB as In,aC as xn,aD as jn,a0 as Dn}from"./index.3be2efd4.js";import{E as $n}from"./focus-trap.41e58b92.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const i=e==null?void 0:e(r);if(n===!1||!i)return t==null?void 0:t(r)},Ln=()=>Math.floor(Math.random()*1e4),Qe=Symbol("popper"),Ht=Symbol("popperContent"),Nn=jt({type:L(Boolean),default:null}),_n=jt({type:L(Function)}),Hn=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Nn,[n]:_n};return{useModelToggle:({indicator:a,toggleReason:s,shouldHideWhenRouteChanges:l,shouldProceed:u,onShow:p,onHide:m})=>{const g=gn(),{emit:c}=g,d=g.props,f=M(()=>Le(d[n])),b=M(()=>d[e]===null),v=y=>{a.value!==!0&&(a.value=!0,s&&(s.value=y),Le(p)&&p(y))},h=y=>{a.value!==!1&&(a.value=!1,s&&(s.value=y),Le(m)&&m(y))},C=y=>{if(d.disabled===!0||Le(u)&&!u())return;const R=f.value&&Ae;R&&c(t,!0),(b.value||!R)&&v(y)},O=y=>{if(d.disabled===!0||!Ae)return;const R=f.value&&Ae;R&&c(t,!1),(b.value||!R)&&h(y)},A=y=>{!Ue(y)||(d.disabled&&y?f.value&&c(t,!1):a.value!==y&&(y?v():h()))},P=()=>{a.value?O():C()};return N(()=>d[e],A),l&&g.appContext.config.globalProperties.$route!==void 0&&N(()=>({...g.proxy.$route}),()=>{l.value&&a.value&&O()}),Ye(()=>{A(d[e])}),{hide:O,show:C,toggle:P,hasUpdateHandler:f}},useModelToggleProps:r,useModelToggleEmits:o}};function Fn(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return hn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let Et;const Ft=`el-popper-container-${Ln()}`,Wt=`#${Ft}`,Wn=()=>{const e=document.createElement("div");return e.id=Ft,document.body.appendChild(e),e},Kn=()=>{yn(()=>{!Ae||(!Et||!document.body.querySelector(Wt))&&(Et=Wn())})},zn=Q({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),qn=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=Fn();return{onOpen:s=>{r(()=>{n(s)},E(e))},onClose:s=>{r(()=>{o(s)},E(t))}}},Kt=Symbol("elForwardRef"),Vn=e=>{Se(Kt,{setForwardRef:n=>{e.value=n}})},Un=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),Nr={LIGHT:"light",DARK:"dark"},zt=Q({role:{type:String,default:"tooltip"}}),Jn={name:"ElPopperRoot",inheritAttrs:!1},Gn=ne({...Jn,props:zt,setup(e,{expose:t}){const n=e,o=I(),r=I(),i=I(),a=I(),s=M(()=>n.role),l={triggerRef:o,popperInstanceRef:r,contentRef:i,referenceRef:a,role:s};return t(l),Se(Qe,l),(u,p)=>le(u.$slots,"default")}});var Xn=pe(Gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const qt=Q({arrowOffset:{type:Number,default:5}}),Yn={name:"ElPopperArrow",inheritAttrs:!1},Zn=ne({...Yn,props:qt,setup(e,{expose:t}){const n=e,o=Ie("popper"),{arrowOffset:r,arrowRef:i}=ue(Ht,void 0);return N(()=>n.arrowOffset,a=>{r.value=a}),Ke(()=>{i.value=void 0}),t({arrowRef:i}),(a,s)=>(U(),He("span",{ref_key:"arrowRef",ref:i,class:Ze(E(o).e("arrow")),"data-popper-arrow":""},null,2))}});var Qn=pe(Zn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const eo="ElOnlyChild",to=ne({name:eo,setup(e,{slots:t,attrs:n}){var o;const r=ue(Kt),i=Un((o=r==null?void 0:r.setForwardRef)!=null?o:Je);return()=>{var a;const s=(a=t.default)==null?void 0:a.call(t,n);if(!s||s.length>1)return null;const l=Vt(s);return l?Dt(bn(l,n),[[i]]):null}}});function Vt(e){if(!e)return null;const t=e;for(const n of t){if(wn(n))switch(n.type){case Cn:continue;case En:case"svg":return Ct(n);case On:return Vt(n.children);default:return n}return Ct(n)}return null}function Ct(e){const t=Ie("only-child");return ke("span",{class:t.e("content")},[e])}const Ut=Q({virtualRef:{type:L(Object)},virtualTriggering:Boolean,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,onBlur:Function,onContextmenu:Function,id:String,open:Boolean}),no={name:"ElPopperTrigger",inheritAttrs:!1},oo=ne({...no,props:Ut,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=ue(Qe,void 0);Vn(r);const i=M(()=>s.value?n.id:void 0),a=M(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),s=M(()=>{if(o&&o.value!=="tooltip")return o.value}),l=M(()=>s.value?`${n.open}`:void 0);let u;return Ye(()=>{N(()=>n.virtualRef,p=>{p&&(r.value=$t(p))},{immediate:!0}),N(()=>r.value,(p,m)=>{u==null||u(),u=void 0,Fe(p)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(g=>{var c;const d=n[g];d&&(p.addEventListener(g.slice(2).toLowerCase(),d),(c=m==null?void 0:m.removeEventListener)==null||c.call(m,g.slice(2).toLowerCase(),d))}),u=N([i,a,s,l],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((c,d)=>{Lt(g[d])?p.removeAttribute(c):p.setAttribute(c,g[d])})},{immediate:!0})),Fe(m)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>m.removeAttribute(g))},{immediate:!0})}),Ke(()=>{u==null||u(),u=void 0}),t({triggerRef:r}),(p,m)=>p.virtualTriggering?ge("v-if",!0):(U(),he(E(to),Nt({key:0},p.$attrs,{"aria-controls":E(i),"aria-describedby":E(a),"aria-expanded":E(l),"aria-haspopup":E(s)}),{default:te(()=>[le(p.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var ro=pe(oo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),_="top",W="bottom",K="right",H="left",et="auto",xe=[_,W,K,H],ye="start",Be="end",ao="clippingParents",Jt="viewport",Te="popper",io="reference",Tt=xe.reduce(function(e,t){return e.concat([t+"-"+ye,t+"-"+Be])},[]),tt=[].concat(xe,[et]).reduce(function(e,t){return e.concat([t,t+"-"+ye,t+"-"+Be])},[]),so="beforeRead",lo="read",uo="afterRead",po="beforeMain",fo="main",co="afterMain",vo="beforeWrite",mo="write",go="afterWrite",ho=[so,lo,uo,po,fo,co,vo,mo,go];function G(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function be(e){var t=q(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=q(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function nt(e){if(typeof ShadowRoot>"u")return!1;var t=q(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function yo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},i=t.elements[n];!F(i)||!G(i)||(Object.assign(i.style,o),Object.keys(r).forEach(function(a){var s=r[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function bo(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],i=t.attributes[o]||{},a=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),s=a.reduce(function(l,u){return l[u]="",l},{});!F(r)||!G(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(l){r.removeAttribute(l)}))})}}var Gt={name:"applyStyles",enabled:!0,phase:"write",fn:yo,effect:bo,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var se=Math.max,We=Math.min,we=Math.round;function Oe(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(F(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(o=we(n.width)/a||1),i>0&&(r=we(n.height)/i||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function ot(e){var t=Oe(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Xt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&nt(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Z(e){return q(e).getComputedStyle(e)}function wo(e){return["table","td","th"].indexOf(G(e))>=0}function oe(e){return((be(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(nt(e)?e.host:null)||oe(e)}function At(e){return!F(e)||Z(e).position==="fixed"?null:e.offsetParent}function Oo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&F(e)){var o=Z(e);if(o.position==="fixed")return null}var r=ze(e);for(nt(r)&&(r=r.host);F(r)&&["html","body"].indexOf(G(r))<0;){var i=Z(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function je(e){for(var t=q(e),n=At(e);n&&wo(n)&&Z(n).position==="static";)n=At(n);return n&&(G(n)==="html"||G(n)==="body"&&Z(n).position==="static")?t:n||Oo(e)||t}function rt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Pe(e,t,n){return se(e,We(t,n))}function Eo(e,t,n){var o=Pe(e,t,n);return o>n?n:o}function Yt(){return{top:0,right:0,bottom:0,left:0}}function Zt(e){return Object.assign({},Yt(),e)}function Qt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var Co=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Zt(typeof e!="number"?e:Qt(e,xe))};function To(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=J(n.placement),l=rt(s),u=[H,K].indexOf(s)>=0,p=u?"height":"width";if(!(!i||!a)){var m=Co(r.padding,n),g=ot(i),c=l==="y"?_:H,d=l==="y"?W:K,f=n.rects.reference[p]+n.rects.reference[l]-a[l]-n.rects.popper[p],b=a[l]-n.rects.reference[l],v=je(i),h=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,C=f/2-b/2,O=m[c],A=h-g[p]-m[d],P=h/2-g[p]/2+C,y=Pe(O,P,A),R=l;n.modifiersData[o]=(t={},t[R]=y,t.centerOffset=y-P,t)}}function Ao(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Xt(t.elements.popper,r)||(t.elements.arrow=r))}var Po={name:"arrow",enabled:!0,phase:"main",fn:To,effect:Ao,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}var Ro={top:"auto",right:"auto",bottom:"auto",left:"auto"};function So(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:we(t*r)/r||0,y:we(n*r)/r||0}}function Pt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,m=e.isFixed,g=a.x,c=g===void 0?0:g,d=a.y,f=d===void 0?0:d,b=typeof p=="function"?p({x:c,y:f}):{x:c,y:f};c=b.x,f=b.y;var v=a.hasOwnProperty("x"),h=a.hasOwnProperty("y"),C=H,O=_,A=window;if(u){var P=je(n),y="clientHeight",R="clientWidth";if(P===q(n)&&(P=oe(n),Z(P).position!=="static"&&s==="absolute"&&(y="scrollHeight",R="scrollWidth")),P=P,r===_||(r===H||r===K)&&i===Be){O=W;var j=m&&P===A&&A.visualViewport?A.visualViewport.height:P[y];f-=j-o.height,f*=l?1:-1}if(r===H||(r===_||r===W)&&i===Be){C=K;var D=m&&P===A&&A.visualViewport?A.visualViewport.width:P[R];c-=D-o.width,c*=l?1:-1}}var B=Object.assign({position:s},u&&Ro),$=p===!0?So({x:c,y:f}):{x:c,y:f};if(c=$.x,f=$.y,l){var x;return Object.assign({},B,(x={},x[O]=h?"0":"",x[C]=v?"0":"",x.transform=(A.devicePixelRatio||1)<=1?"translate("+c+"px, "+f+"px)":"translate3d("+c+"px, "+f+"px, 0)",x))}return Object.assign({},B,(t={},t[O]=h?f+"px":"",t[C]=v?c+"px":"",t.transform="",t))}function ko(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:J(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var en={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ko,data:{}},Ne={passive:!0};function Bo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=r===void 0?!0:r,a=o.resize,s=a===void 0?!0:a,l=q(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(p){p.addEventListener("scroll",n.update,Ne)}),s&&l.addEventListener("resize",n.update,Ne),function(){i&&u.forEach(function(p){p.removeEventListener("scroll",n.update,Ne)}),s&&l.removeEventListener("resize",n.update,Ne)}}var tn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bo,data:{}},Mo={left:"right",right:"left",bottom:"top",top:"bottom"};function _e(e){return e.replace(/left|right|bottom|top/g,function(t){return Mo[t]})}var Io={start:"end",end:"start"};function Rt(e){return e.replace(/start|end/g,function(t){return Io[t]})}function at(e){var t=q(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function it(e){return Oe(oe(e)).left+at(e).scrollLeft}function xo(e){var t=q(e),n=oe(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+it(e),y:s}}function jo(e){var t,n=oe(e),o=at(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=se(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=se(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+it(e),l=-o.scrollTop;return Z(r||n).direction==="rtl"&&(s+=se(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}function st(e){var t=Z(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function nn(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:F(e)&&st(e)?e:nn(ze(e))}function Re(e,t){var n;t===void 0&&(t=[]);var o=nn(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),i=q(o),a=r?[i].concat(i.visualViewport||[],st(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(Re(ze(a)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Do(e){var t=Oe(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function St(e,t){return t===Jt?Xe(xo(e)):be(t)?Do(t):Xe(jo(oe(e)))}function $o(e){var t=Re(ze(e)),n=["absolute","fixed"].indexOf(Z(e).position)>=0,o=n&&F(e)?je(e):e;return be(o)?t.filter(function(r){return be(r)&&Xt(r,o)&&G(r)!=="body"}):[]}function Lo(e,t,n){var o=t==="clippingParents"?$o(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce(function(s,l){var u=St(e,l);return s.top=se(u.top,s.top),s.right=We(u.right,s.right),s.bottom=We(u.bottom,s.bottom),s.left=se(u.left,s.left),s},St(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function on(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,i=o?Ee(o):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(r){case _:l={x:a,y:t.y-n.height};break;case W:l={x:a,y:t.y+t.height};break;case K:l={x:t.x+t.width,y:s};break;case H:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=r?rt(r):null;if(u!=null){var p=u==="y"?"height":"width";switch(i){case ye:l[u]=l[u]-(t[p]/2-n[p]/2);break;case Be:l[u]=l[u]+(t[p]/2-n[p]/2);break}}return l}function Me(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,i=n.boundary,a=i===void 0?ao:i,s=n.rootBoundary,l=s===void 0?Jt:s,u=n.elementContext,p=u===void 0?Te:u,m=n.altBoundary,g=m===void 0?!1:m,c=n.padding,d=c===void 0?0:c,f=Zt(typeof d!="number"?d:Qt(d,xe)),b=p===Te?io:Te,v=e.rects.popper,h=e.elements[g?b:p],C=Lo(be(h)?h:h.contextElement||oe(e.elements.popper),a,l),O=Oe(e.elements.reference),A=on({reference:O,element:v,strategy:"absolute",placement:r}),P=Xe(Object.assign({},v,A)),y=p===Te?P:O,R={top:C.top-y.top+f.top,bottom:y.bottom-C.bottom+f.bottom,left:C.left-y.left+f.left,right:y.right-C.right+f.right},j=e.modifiersData.offset;if(p===Te&&j){var D=j[r];Object.keys(R).forEach(function(B){var $=[K,W].indexOf(B)>=0?1:-1,x=[_,W].indexOf(B)>=0?"y":"x";R[B]+=D[x]*$})}return R}function No(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?tt:l,p=Ee(o),m=p?s?Tt:Tt.filter(function(d){return Ee(d)===p}):xe,g=m.filter(function(d){return u.indexOf(d)>=0});g.length===0&&(g=m);var c=g.reduce(function(d,f){return d[f]=Me(e,{placement:f,boundary:r,rootBoundary:i,padding:a})[J(f)],d},{});return Object.keys(c).sort(function(d,f){return c[d]-c[f]})}function _o(e){if(J(e)===et)return[];var t=_e(e);return[Rt(e),t,Rt(t)]}function Ho(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,a=n.altAxis,s=a===void 0?!0:a,l=n.fallbackPlacements,u=n.padding,p=n.boundary,m=n.rootBoundary,g=n.altBoundary,c=n.flipVariations,d=c===void 0?!0:c,f=n.allowedAutoPlacements,b=t.options.placement,v=J(b),h=v===b,C=l||(h||!d?[_e(b)]:_o(b)),O=[b].concat(C).reduce(function(ae,X){return ae.concat(J(X)===et?No(t,{placement:X,boundary:p,rootBoundary:m,padding:u,flipVariations:d,allowedAutoPlacements:f}):X)},[]),A=t.rects.reference,P=t.rects.popper,y=new Map,R=!0,j=O[0],D=0;D<O.length;D++){var B=O[D],$=J(B),x=Ee(B)===ye,w=[_,W].indexOf($)>=0,T=w?"width":"height",S=Me(t,{placement:B,boundary:p,rootBoundary:m,altBoundary:g,padding:u}),k=w?x?K:H:x?W:_;A[T]>P[T]&&(k=_e(k));var V=_e(k),z=[];if(i&&z.push(S[$]<=0),s&&z.push(S[k]<=0,S[V]<=0),z.every(function(ae){return ae})){j=B,R=!1;break}y.set(B,z)}if(R)for(var fe=d?3:1,ce=function(ae){var X=O.find(function(De){var Ce=y.get(De);if(Ce)return Ce.slice(0,ae).every(function(de){return de})});if(X)return j=X,"break"},ee=fe;ee>0;ee--){var re=ce(ee);if(re==="break")break}t.placement!==j&&(t.modifiersData[o]._skip=!0,t.placement=j,t.reset=!0)}}var Fo={name:"flip",enabled:!0,phase:"main",fn:Ho,requiresIfExists:["offset"],data:{_skip:!1}};function kt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Bt(e){return[_,K,W,H].some(function(t){return e[t]>=0})}function Wo(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Me(t,{elementContext:"reference"}),s=Me(t,{altBoundary:!0}),l=kt(a,o),u=kt(s,r,i),p=Bt(l),m=Bt(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}var Ko={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Wo};function zo(e,t,n){var o=J(e),r=[H,_].indexOf(o)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[H,K].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}function qo(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=r===void 0?[0,0]:r,a=tt.reduce(function(p,m){return p[m]=zo(m,t.rects,i),p},{}),s=a[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=a}var Vo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:qo};function Uo(e){var t=e.state,n=e.name;t.modifiersData[n]=on({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var rn={name:"popperOffsets",enabled:!0,phase:"read",fn:Uo,data:{}};function Jo(e){return e==="x"?"y":"x"}function Go(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=r===void 0?!0:r,a=n.altAxis,s=a===void 0?!1:a,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,m=n.padding,g=n.tether,c=g===void 0?!0:g,d=n.tetherOffset,f=d===void 0?0:d,b=Me(t,{boundary:l,rootBoundary:u,padding:m,altBoundary:p}),v=J(t.placement),h=Ee(t.placement),C=!h,O=rt(v),A=Jo(O),P=t.modifiersData.popperOffsets,y=t.rects.reference,R=t.rects.popper,j=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,D=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(P){if(i){var x,w=O==="y"?_:H,T=O==="y"?W:K,S=O==="y"?"height":"width",k=P[O],V=k+b[w],z=k-b[T],fe=c?-R[S]/2:0,ce=h===ye?y[S]:R[S],ee=h===ye?-R[S]:-y[S],re=t.elements.arrow,ae=c&&re?ot(re):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Yt(),De=X[w],Ce=X[T],de=Pe(0,y[S],ae[S]),un=C?y[S]/2-fe-de-De-D.mainAxis:ce-de-De-D.mainAxis,pn=C?-y[S]/2+fe+de+Ce+D.mainAxis:ee+de+Ce+D.mainAxis,qe=t.elements.arrow&&je(t.elements.arrow),fn=qe?O==="y"?qe.clientTop||0:qe.clientLeft||0:0,pt=(x=B==null?void 0:B[O])!=null?x:0,cn=k+un-pt-fn,dn=k+pn-pt,ft=Pe(c?We(V,cn):V,k,c?se(z,dn):z);P[O]=ft,$[O]=ft-k}if(s){var ct,vn=O==="x"?_:H,mn=O==="x"?W:K,ie=P[A],$e=A==="y"?"height":"width",dt=ie+b[vn],vt=ie-b[mn],Ve=[_,H].indexOf(v)!==-1,mt=(ct=B==null?void 0:B[A])!=null?ct:0,gt=Ve?dt:ie-y[$e]-R[$e]-mt+D.altAxis,ht=Ve?ie+y[$e]+R[$e]-mt-D.altAxis:vt,yt=c&&Ve?Eo(gt,ie,ht):Pe(c?gt:dt,ie,c?ht:vt);P[A]=yt,$[A]=yt-ie}t.modifiersData[o]=$}}var Xo={name:"preventOverflow",enabled:!0,phase:"main",fn:Go,requiresIfExists:["offset"]};function Yo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Zo(e){return e===q(e)||!F(e)?at(e):Yo(e)}function Qo(e){var t=e.getBoundingClientRect(),n=we(t.width)/e.offsetWidth||1,o=we(t.height)/e.offsetHeight||1;return n!==1||o!==1}function er(e,t,n){n===void 0&&(n=!1);var o=F(t),r=F(t)&&Qo(t),i=oe(t),a=Oe(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||st(i))&&(s=Zo(t)),F(t)?(l=Oe(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=it(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function tr(e){var t=new Map,n=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function r(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&r(l)}}),o.push(i)}return e.forEach(function(i){n.has(i.name)||r(i)}),o}function nr(e){var t=tr(e);return ho.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function or(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function rr(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var Mt={placement:"bottom",modifiers:[],strategy:"absolute"};function It(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function lt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,i=r===void 0?Mt:r;return function(a,s,l){l===void 0&&(l=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Mt,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},p=[],m=!1,g={state:u,setOptions:function(f){var b=typeof f=="function"?f(u.options):f;d(),u.options=Object.assign({},i,u.options,b),u.scrollParents={reference:be(a)?Re(a):a.contextElement?Re(a.contextElement):[],popper:Re(s)};var v=nr(rr([].concat(o,u.options.modifiers)));return u.orderedModifiers=v.filter(function(h){return h.enabled}),c(),g.update()},forceUpdate:function(){if(!m){var f=u.elements,b=f.reference,v=f.popper;if(It(b,v)){u.rects={reference:er(b,je(v),u.options.strategy==="fixed"),popper:ot(v)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(R){return u.modifiersData[R.name]=Object.assign({},R.data)});for(var h=0;h<u.orderedModifiers.length;h++){if(u.reset===!0){u.reset=!1,h=-1;continue}var C=u.orderedModifiers[h],O=C.fn,A=C.options,P=A===void 0?{}:A,y=C.name;typeof O=="function"&&(u=O({state:u,options:P,name:y,instance:g})||u)}}}},update:or(function(){return new Promise(function(f){g.forceUpdate(),f(u)})}),destroy:function(){d(),m=!0}};if(!It(a,s))return g;g.setOptions(l).then(function(f){!m&&l.onFirstUpdate&&l.onFirstUpdate(f)});function c(){u.orderedModifiers.forEach(function(f){var b=f.name,v=f.options,h=v===void 0?{}:v,C=f.effect;if(typeof C=="function"){var O=C({state:u,name:b,instance:g,options:h}),A=function(){};p.push(O||A)}})}function d(){p.forEach(function(f){return f()}),p=[]}return g}}lt();var ar=[tn,rn,en,Gt];lt({defaultModifiers:ar});var ir=[tn,rn,en,Gt,Vo,Fo,Xo,Po,Ko],sr=lt({defaultModifiers:ir});const lr=["fixed","absolute"],ur=Q({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:L(Array),default:()=>[]},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:tt,default:"bottom"},popperOptions:{type:L(Object),default:()=>({})},strategy:{type:String,values:lr,default:"absolute"}}),an=Q({...ur,id:String,style:{type:L([String,Array,Object])},className:{type:L([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:L([String,Array,Object])},popperStyle:{type:L([String,Array,Object])},referenceEl:{type:L(Object)},triggerTargetEl:{type:L(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),pr=["mouseenter","mouseleave","focus","blur","close"],xt=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,i={placement:n,strategy:o,...r,modifiers:cr(e)};return dr(i,t),vr(i,r==null?void 0:r.modifiers),i},fr=e=>{if(!!Ae)return $t(e)};function cr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o!=null?o:[]}},{name:"computeStyles",options:{gpuAcceleration:n,adaptive:n}}]}function dr(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:n!=null?n:5}})}function vr(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const mr={name:"ElPopperContent"},gr=ne({...mr,props:an,emits:pr,setup(e,{expose:t,emit:n}){const o=e,{popperInstanceRef:r,contentRef:i,triggerRef:a,role:s}=ue(Qe,void 0),l=ue(bt,void 0),{nextZIndex:u}=Tn(),p=Ie("popper"),m=I(),g=I("first"),c=I(),d=I();Se(Ht,{arrowRef:c,arrowOffset:d}),l&&(l.addInputId||l.removeInputId)&&Se(bt,{...l,addInputId:Je,removeInputId:Je});const f=I(o.zIndex||u()),b=I(!1);let v;const h=M(()=>fr(o.referenceEl)||E(a)),C=M(()=>[{zIndex:E(f)},o.popperStyle]),O=M(()=>[p.b(),p.is("pure",o.pure),p.is(o.effect),o.popperClass]),A=M(()=>s&&s.value==="dialog"?"false":void 0),P=({referenceEl:w,popperContentEl:T,arrowEl:S})=>{const k=xt(o,{arrowEl:S,arrowOffset:E(d)});return sr(w,T,k)},y=(w=!0)=>{var T;(T=E(r))==null||T.update(),w&&(f.value=o.zIndex||u())},R=()=>{var w,T;const S={name:"eventListeners",enabled:o.visible};(T=(w=E(r))==null?void 0:w.setOptions)==null||T.call(w,k=>({...k,modifiers:[...k.modifiers||[],S]})),y(!1),o.visible&&o.focusOnShow?b.value=!0:o.visible===!1&&(b.value=!1)},j=()=>{n("focus")},D=()=>{g.value="first",n("blur")},B=w=>{var T;o.visible&&!b.value&&(w.target&&(g.value=w.target),b.value=!0,w.relatedTarget&&((T=w.relatedTarget)==null||T.focus()))},$=()=>{o.trapping||(b.value=!1)},x=()=>{b.value=!1,n("close")};return Ye(()=>{let w;N(h,T=>{var S;w==null||w();const k=E(r);if((S=k==null?void 0:k.destroy)==null||S.call(k),T){const V=E(m);i.value=V,r.value=P({referenceEl:T,popperContentEl:V,arrowEl:E(c)}),w=N(()=>T.getBoundingClientRect(),()=>y(),{immediate:!0})}else r.value=void 0},{immediate:!0}),N(()=>o.triggerTargetEl,(T,S)=>{v==null||v(),v=void 0;const k=E(T||m.value),V=E(S||m.value);if(Fe(k)){const{ariaLabel:z,id:fe}=An(o);v=N([s,z,A,fe],ce=>{["role","aria-label","aria-modal","id"].forEach((ee,re)=>{Lt(ce[re])?k.removeAttribute(ee):k.setAttribute(ee,ce[re])})},{immediate:!0})}Fe(V)&&["role","aria-label","aria-modal","id"].forEach(z=>{V.removeAttribute(z)})},{immediate:!0}),N(()=>o.visible,R,{immediate:!0}),N(()=>xt(o,{arrowEl:E(c),arrowOffset:E(d)}),T=>{var S;return(S=r.value)==null?void 0:S.setOptions(T)})}),Ke(()=>{v==null||v(),v=void 0}),t({popperContentRef:m,popperInstanceRef:r,updatePopper:y,contentStyle:C}),(w,T)=>(U(),He("div",{ref_key:"popperContentRef",ref:m,style:Pn(E(C)),class:Ze(E(O)),tabindex:"-1",onMouseenter:T[0]||(T[0]=S=>w.$emit("mouseenter",S)),onMouseleave:T[1]||(T[1]=S=>w.$emit("mouseleave",S))},[ke(E($n),{trapped:b.value,"trap-on-focus-in":!0,"focus-trap-el":m.value,"focus-start-el":g.value,onFocusAfterTrapped:j,onFocusAfterReleased:D,onFocusin:B,onFocusoutPrevented:$,onReleaseRequested:x},{default:te(()=>[le(w.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}});var hr=pe(gr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const yr=_t(Xn),br=Ie("tooltip"),sn=Q({...zn,...an,appendTo:{type:L([String,Object]),default:Wt},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:L(Boolean),default:null},transition:{type:String,default:`${br.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}}),ln=Q({...Ut,disabled:Boolean,trigger:{type:L([String,Array]),default:"hover"},triggerKeys:{type:L(Array),default:()=>[wt.enter,wt.space]}}),wr=Q({openDelay:{type:Number},visibleArrow:{type:Boolean,default:void 0},hideAfter:{type:Number,default:200},showArrow:{type:Boolean,default:!0}}),ut=Symbol("elTooltip"),Or=ne({name:"ElTooltipContent",components:{ElPopperContent:hr},inheritAttrs:!1,props:sn,setup(e){const t=I(null),n=I(!1),o=I(!1),r=I(!1),i=I(!1),{controlled:a,id:s,open:l,trigger:u,onClose:p,onOpen:m,onShow:g,onHide:c,onBeforeShow:d,onBeforeHide:f}=ue(ut,void 0),b=M(()=>e.persistent);Ke(()=>{i.value=!0});const v=M(()=>E(b)?!0:E(l)),h=M(()=>e.disabled?!1:E(l)),C=M(()=>{var w;return(w=e.style)!=null?w:{}}),O=M(()=>!E(l)),A=()=>{c()},P=()=>{if(E(a))return!0},y=Y(P,()=>{e.enterable&&E(u)==="hover"&&m()}),R=Y(P,()=>{E(u)==="hover"&&p()}),j=()=>{var w,T;(T=(w=t.value)==null?void 0:w.updatePopper)==null||T.call(w),d==null||d()},D=()=>{f==null||f()},B=()=>{g(),x=Rn(M(()=>{var w;return(w=t.value)==null?void 0:w.popperContentRef}),()=>{if(E(a))return;E(u)!=="hover"&&p()})},$=()=>{e.virtualTriggering||p()};let x;return N(()=>E(l),w=>{w||x==null||x()},{flush:"post"}),{ariaHidden:O,entering:o,leaving:r,id:s,intermediateOpen:n,contentStyle:C,contentRef:t,destroyed:i,shouldRender:v,shouldShow:h,onClose:p,open:l,onAfterShow:B,onBeforeEnter:j,onBeforeLeave:D,onContentEnter:y,onContentLeave:R,onTransitionLeave:A,onBlur:$}}});function Er(e,t,n,o,r,i){const a=me("el-popper-content");return U(),he(Bn,{disabled:!e.teleported,to:e.appendTo},[ke(kn,{name:e.transition,onAfterLeave:e.onTransitionLeave,onBeforeEnter:e.onBeforeEnter,onAfterEnter:e.onAfterShow,onBeforeLeave:e.onBeforeLeave},{default:te(()=>[e.shouldRender?Dt((U(),he(a,Nt({key:0,id:e.id,ref:"contentRef"},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":e.ariaHidden,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,e.contentStyle],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:e.shouldShow,"z-index":e.zIndex,onMouseenter:e.onContentEnter,onMouseleave:e.onContentLeave,onBlur:e.onBlur,onClose:e.onClose}),{default:te(()=>[ge(" Workaround bug #6378 "),e.destroyed?ge("v-if",!0):le(e.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onBlur","onClose"])),[[Sn,e.shouldShow]]):ge("v-if",!0)]),_:3},8,["name","onAfterLeave","onBeforeEnter","onAfterEnter","onBeforeLeave"])],8,["disabled","to"])}var Cr=pe(Or,[["render",Er],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Tr=(e,t)=>Mn(e)?e.includes(t):e===t,ve=(e,t,n)=>o=>{Tr(E(e),t)&&n(o)},Ar=ne({name:"ElTooltipTrigger",components:{ElPopperTrigger:ro},props:ln,setup(e){const t=Ie("tooltip"),{controlled:n,id:o,open:r,onOpen:i,onClose:a,onToggle:s}=ue(ut,void 0),l=I(null),u=()=>{if(E(n)||e.disabled)return!0},p=Ge(e,"trigger"),m=Y(u,ve(p,"hover",i)),g=Y(u,ve(p,"hover",a)),c=Y(u,ve(p,"click",h=>{h.button===0&&s(h)})),d=Y(u,ve(p,"focus",i)),f=Y(u,ve(p,"focus",a)),b=Y(u,ve(p,"contextmenu",h=>{h.preventDefault(),s(h)})),v=Y(u,h=>{const{code:C}=h;e.triggerKeys.includes(C)&&(h.preventDefault(),s(h))});return{onBlur:f,onContextMenu:b,onFocus:d,onMouseenter:m,onMouseleave:g,onClick:c,onKeydown:v,open:r,id:o,triggerRef:l,ns:t}}});function Pr(e,t,n,o,r,i){const a=me("el-popper-trigger");return U(),he(a,{id:e.id,"virtual-ref":e.virtualRef,open:e.open,"virtual-triggering":e.virtualTriggering,class:Ze(e.ns.e("trigger")),onBlur:e.onBlur,onClick:e.onClick,onContextmenu:e.onContextMenu,onFocus:e.onFocus,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onKeydown:e.onKeydown},{default:te(()=>[le(e.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"])}var Rr=pe(Ar,[["render",Pr],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const{useModelToggleProps:Sr,useModelToggle:kr,useModelToggleEmits:Br}=Hn("visible"),Mr=ne({name:"ElTooltip",components:{ElPopper:yr,ElPopperArrow:Qn,ElTooltipContent:Cr,ElTooltipTrigger:Rr},props:{...zt,...Sr,...sn,...ln,...qt,...wr},emits:[...Br,"before-show","before-hide","show","hide","open","close"],setup(e,{emit:t}){Kn();const n=M(()=>(Ot(e.openDelay),e.openDelay||e.showAfter)),o=M(()=>(Ot(e.visibleArrow),Ue(e.visibleArrow)?e.visibleArrow:e.showArrow)),r=In(),i=I(null),a=I(null),s=()=>{var v;const h=E(i);h&&((v=h.popperInstanceRef)==null||v.update())},l=I(!1),u=I(void 0),{show:p,hide:m,hasUpdateHandler:g}=kr({indicator:l,toggleReason:u}),{onOpen:c,onClose:d}=qn({showAfter:n,hideAfter:Ge(e,"hideAfter"),open:p,close:m}),f=M(()=>Ue(e.visible)&&!g.value);Se(ut,{controlled:f,id:r,open:xn(l),trigger:Ge(e,"trigger"),onOpen:v=>{c(v)},onClose:v=>{d(v)},onToggle:v=>{E(l)?d(v):c(v)},onShow:()=>{t("show",u.value)},onHide:()=>{t("hide",u.value)},onBeforeShow:()=>{t("before-show",u.value)},onBeforeHide:()=>{t("before-hide",u.value)},updatePopper:s}),N(()=>e.disabled,v=>{v&&l.value&&(l.value=!1)});const b=()=>{var v,h;const C=(h=(v=a.value)==null?void 0:v.contentRef)==null?void 0:h.popperContentRef;return C&&C.contains(document.activeElement)};return jn(()=>l.value&&m()),{compatShowAfter:n,compatShowArrow:o,popperRef:i,contentRef:a,open:l,hide:m,isFocusInsideContent:b,updatePopper:s,onOpen:c,onClose:d}}}),Ir=["innerHTML"],xr={key:1};function jr(e,t,n,o,r,i){const a=me("el-tooltip-trigger"),s=me("el-popper-arrow"),l=me("el-tooltip-content"),u=me("el-popper");return U(),he(u,{ref:"popperRef",role:e.role},{default:te(()=>[ke(a,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:te(()=>[e.$slots.default?le(e.$slots,"default",{key:0}):ge("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),ke(l,{ref:"contentRef","aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.compatShowAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:te(()=>[le(e.$slots,"content",{},()=>[e.rawContent?(U(),He("span",{key:0,innerHTML:e.content},null,8,Ir)):(U(),He("span",xr,Dn(e.content),1))]),e.compatShowArrow?(U(),he(s,{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):ge("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"])}var Dr=pe(Mr,[["render",jr],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const _r=_t(Dr);export{_r as E,sn as a,Nr as b,ln as u,sr as y};
