import{ak as c,bb as I,bA as _,e as M,a as Y,aR as R,j as y,b7 as F,C as X,u as H,bB as Z,A,H as N,y as q,bC as Q,z as ee,an as S,s as g,v as D,d as te,a9 as oe,r as O,I as ne,x as le,aM as z,a1 as ae,av as se,aB as L,bD as re,a2 as ue,W as ie,l as de,N as ce,O as B}from"./index.3be2efd4.js";const fe=(e,o)=>{if(!c)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],n=I(e,t);return["scroll","auto","overlay"].some(l=>n.includes(l))},De=(e,o)=>{if(!c)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(fe(t,o))return t;t=t.parentNode}return t};let T;const me=e=>{var o;if(!c)return 0;if(T!==void 0)return T;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const n=t.offsetWidth;t.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",t.appendChild(l);const s=l.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),T=n-s,T};function Me(e,o){if(!c)return;if(!o){e.scrollTop=0;return}const t=[];let n=o.offsetParent;for(;n!==null&&e!==n&&e.contains(n);)t.push(n),n=n.offsetParent;const l=o.offsetTop+t.reduce((r,d)=>r+d.offsetTop,0),s=l+o.offsetHeight,a=e.scrollTop,i=a+e.clientHeight;l<a?e.scrollTop=l:s>i&&(e.scrollTop=s-e.clientHeight)}var h=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(h||{}),ye={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const pe=e=>(o,t)=>ve(o,t,Y(e)),ve=(e,o,t)=>F(t,e,e).replace(/\{(\w+)\}/g,(n,l)=>{var s;return`${(s=o==null?void 0:o[l])!=null?s:`{${l}}`}`}),Te=e=>{const o=M(()=>Y(e).name),t=R(e)?e:y(e);return{lang:o,locale:t,t:pe(e)}},ge=()=>{const e=_("locale");return Te(M(()=>e.value||ye))},he=e=>{R(e)||X("[useLockscreen]","You need to pass a ref param to this function");const o=H("popup"),t=Z(()=>o.bm("parent","hidden"));if(!c||A(document.body,t.value))return;let n=0,l=!1,s="0";const a=()=>{ee(document.body,t.value),l&&(document.body.style.width=s)};N(e,i=>{if(!i){a();return}l=!A(document.body,t.value),l&&(s=document.body.style.width),n=me(o.namespace.value);const r=document.documentElement.clientHeight<document.body.scrollHeight,d=I(document.body,"overflowY");n>0&&(r||d==="scroll")&&l&&(document.body.style.width=`calc(100% - ${n}px)`),q(document.body,t.value)}),Q(()=>a())},be=e=>{if(!e)return{onClick:S,onMousedown:S,onMouseup:S};let o=!1,t=!1;return{onClick:a=>{o&&t&&e(a),o=t=!1},onMousedown:a=>{o=a.target===a.currentTarget},onMouseup:a=>{t=a.target===a.currentTarget}}},we=g({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:D([String,Array,Object])},zIndex:{type:D([String,Number])}}),Ce={click:e=>e instanceof MouseEvent};var Ee=te({name:"ElOverlay",props:we,emits:Ce,setup(e,{slots:o,emit:t}){const n=H("overlay"),l=r=>{t("click",r)},{onClick:s,onMousedown:a,onMouseup:i}=be(e.customMaskEvent?void 0:l);return()=>e.mask?oe("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:i},[O(o,"default")],h.STYLE|h.CLASS|h.PROPS,["onClick","onMouseup","onMousedown"]):ne("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[O(o,"default")])}});const ke=Ee,Se=g({center:{type:Boolean,default:!1},closeIcon:{type:le,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),xe={close:()=>!0},Ae=g({...Se,appendToBody:{type:Boolean,default:!1},beforeClose:{type:D(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Oe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[z]:e=>ae(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Le=(e,o)=>{const n=ce().emit,{nextZIndex:l}=se();let s="";const a=L(),i=L(),r=y(!1),d=y(!1),p=y(!1),b=y(e.zIndex||l());let f,m;const W=_("namespace",re),P=M(()=>{const u={},v=`--${W.value}-dialog`;return e.fullscreen||(e.top&&(u[`${v}-margin-top`]=e.top),e.width&&(u[`${v}-width`]=ue(e.width))),u});function U(){n("opened")}function G(){n("closed"),n(z,!1),e.destroyOnClose&&(p.value=!1)}function V(){n("close")}function k(){m==null||m(),f==null||f(),e.openDelay&&e.openDelay>0?{stop:f}=B(()=>x(),e.openDelay):x()}function w(){f==null||f(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=B(()=>E(),e.closeDelay):E()}function C(){function u(v){v||(d.value=!0,r.value=!1)}e.beforeClose?e.beforeClose(u):w()}function $(){e.closeOnClickModal&&C()}function x(){!c||(r.value=!0)}function E(){r.value=!1}function K(){n("openAutoFocus")}function J(){n("closeAutoFocus")}e.lockScroll&&he(r);function j(){e.closeOnPressEscape&&C()}return N(()=>e.modelValue,u=>{u?(d.value=!1,k(),p.value=!0,b.value=e.zIndex?b.value++:l(),ie(()=>{n("open"),o.value&&(o.value.scrollTop=0)})):r.value&&w()}),N(()=>e.fullscreen,u=>{!o.value||(u?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)}),de(()=>{e.modelValue&&(r.value=!0,p.value=!0,k())}),{afterEnter:U,afterLeave:G,beforeLeave:V,handleClose:C,onModalClick:$,close:w,doClose:E,onOpenAutoFocus:K,onCloseAutoFocus:J,onCloseRequested:j,titleId:a,bodyId:i,closed:d,style:P,rendered:p,visible:r,zIndex:b}};export{ke as E,xe as a,Ae as b,Oe as c,Se as d,Le as e,be as f,De as g,Me as s,ge as u};
