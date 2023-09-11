import{F as de,u as ce,_ as me,a as ue}from"./AppBack-0f19825b.js";import{a5 as pe,p as W,d as j,c as q,a as K,r as F,o as b,i as Q,w as n,h as l,m as ve,e as E,n as V,b as z,f as a,j as _e,T as fe,A as w,l as Y,V as he,q as L,aj as G,t as T,E as X,F as Z,S as x,g as Ce,y as J,L as ge,G as R,k as v,_ as ye}from"./index-81730b21.js";import{e as be,I as ee,b as Se,R as Ve,H as $e,c as ke,_ as Ie,d as Ne}from"./icon-4be89cfe.js";import{d as Te,c as Be,_ as we,a as ze,b as He}from"./avatar-6f500ba1.js";import{_ as Re,b as Fe}from"./ButtonSfc-70716131.js";import{_ as Ae}from"./EllipsisSfc-9ba39d6f.js";import{_ as De}from"./fab-e911fd8a.js";import{_ as Oe,b as Ue}from"./swipeItem-96890970.js";import{_ as Pe}from"./ImageSfc-c342301d.js";import{_ as Ee}from"./CellSfc-0e37df85.js";import{_ as M}from"./material-2-ab397d04.js";import"./index-566096ad.js";import"./shared-8dcc744f.js";import"./onWindowResize-9b069d67.js";var Me={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,iconName:pe(be,"name"),plain:Boolean,round:{type:Boolean,default:!0},block:Boolean,closable:Boolean,onClose:W()},{n:C,classes:We}=K("chip");function Le(e,o){var m=F("var-icon");return b(),Q(fe,{name:e.n("$-fade")},{default:n(()=>[l("span",ve({class:e.classes(e.n(),e.n("$--box"),...e.contentClass),style:e.chipStyles},e.$attrs),[E(e.$slots,"left"),l("span",{class:V(e.n("text-"+e.size))},[E(e.$slots,"default")],2),E(e.$slots,"right"),e.closable?(b(),z("span",{key:0,class:V(e.n("--close")),onClick:o[0]||(o[0]=function(){return e.handleClose&&e.handleClose(...arguments)})},[a(m,{name:""+(e.iconName?e.iconName:"close-circle")},null,8,["name"])],2)):_e("v-if",!0)],16)]),_:3},8,["name"])}var ae=j({name:"VarChip",components:{VarIcon:ee},inheritAttrs:!1,props:Me,setup(e){var o=q(()=>{var{plain:u,textColor:t,color:s}=e;return u?{color:t||s,borderColor:s}:{color:t,background:s}}),m=q(()=>{var{size:u,block:t,type:s,plain:d,round:p}=e,f=C(t?"$--flex":"$--inline-flex"),g=d?C("plain")+" "+C("plain-"+s):C("--"+s),$=p?C("--round"):null;return[C("--"+u),f,g,$]}),_=u=>{w(e.onClose,u)};return{n:C,classes:We,chipStyles:o,contentClass:m,handleClose:_}}});ae.render=Le;const oe=ae;Y(oe);var je=oe,qe={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:String,icon:{type:String,default:"star"},emptyColor:String,emptyIcon:{type:String,default:"star-outline"},size:[String,Number],gap:[String,Number],namespace:String,half:Boolean,halfIcon:{type:String,default:"star-half-full"},disabled:Boolean,disabledColor:String,readonly:Boolean,ripple:{type:Boolean,default:!0},clearable:Boolean,rules:Array,onChange:W(),"onUpdate:modelValue":W()},{n:B}=K("rate"),Ge=["onClick"];function Xe(e,o){var m=F("var-icon"),_=F("var-hover-overlay"),u=F("var-form-details"),t=X("ripple"),s=X("hover");return b(),z("div",{class:V(e.n("wrap"))},[l("div",{class:V(e.n())},[(b(!0),z(Z,null,x(e.toNumber(e.count),d=>Ce((b(),z("div",{key:d,style:J(e.getStyle(d)),class:V(e.getClass(d)),onClick:p=>e.handleClick(d,p)},[a(m,{class:V(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(d).name,style:J({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"]),a(_,{hovering:e.hovering&&d===e.currentHoveringValue&&!e.disabled&&!e.formDisabled},null,8,["hovering"])],14,Ge)),[[t,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}],[s,e.createHoverHandler(d),"desktop"]])),128))],2),a(u,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var ne=j({name:"VarRate",components:{VarIcon:ee,VarFormDetails:de,VarHoverOverlay:Se},directives:{Ripple:Ve,Hover:$e},props:qe,setup(e){var{form:o,bindForm:m}=ce(),{errorMessage:_,validateWithTrigger:u,validate:t,resetValidation:s}=he(),{hovering:d}=ke(),p=L(-1),f=Number(e.modelValue),g=r=>{var{count:i,gap:c}=e;return{color:k(r).color,marginRight:r!==T(i)?G(c):0}},$=r=>{var{name:i,color:c}=k(r);return{[B("content")]:!0,[B("--disabled")]:(o==null?void 0:o.disabled.value)||e.disabled,[B("--error")]:_.value,[B("--primary")]:i!==e.emptyIcon&&!c}},k=r=>{var{modelValue:i,disabled:c,disabledColor:h,color:y,half:N,emptyColor:re,icon:le,halfIcon:se,emptyIcon:ie}=e,P=y;return(c||o!=null&&o.disabled.value)&&(P=h),r<=T(i)?{color:P,name:le}:N&&r<=T(i)+.5?{color:P,name:se}:{color:c||o!=null&&o.disabled.value?h:re,name:ie}},I=(r,i)=>{var{half:c,clearable:h}=e,{offsetWidth:y}=i.target;c&&i.offsetX<=Math.floor(y/2)&&(r-=.5),f===r&&h&&(r=0),f=r,w(e["onUpdate:modelValue"],r)},S=()=>t(e.rules,T(e.modelValue)),A=()=>ge(()=>u(["onChange"],"onChange",e.rules,e.modelValue)),D=(r,i)=>{var{readonly:c,disabled:h,onChange:y}=e;c||h||o!=null&&o.disabled.value||o!=null&&o.readonly.value||(I(r,i),w(y,r),A())},O=r=>i=>{p.value=r,d.value=i},H=()=>{w(e["onUpdate:modelValue"],0),s()},U={reset:H,validate:S,resetValidation:s};return w(m,U),{errorMessage:_,formDisabled:o==null?void 0:o.disabled,formReadonly:o==null?void 0:o.readonly,getStyle:g,getClass:$,getCurrentState:k,handleClick:D,hovering:d,currentHoveringValue:p,createHoverHandler:O,reset:H,validate:S,resetValidation:s,toSizeUnit:G,toNumber:T,n:B}}});ne.render=Xe;const te=ne;Y(te);var Je=te;const Ke={class:"detail"},Qe={class:"detail-swipe"},Ye={class:"detail-info"},Ze={class:"detail-info-title"},xe={class:"detail-info-subtitle"},ea={class:"detail-info-description"},aa={class:"detail-comment"},oa={class:"detail-comment-subtitle"},na={class:"detail-comment-chips"},ta={class:"detail-comment-footer"},ra={class:"detail-comment-total"},la={class:"detail-actions"},sa={class:"detail-action-text"},ia=j({__name:"detail",setup(e){const o=L(!1),m=L(!1);function _(){o.value=!1}function u(){m.value=!m.value}return(t,s)=>{const d=ue,p=Ie,f=Ne,g=Ee,$=Te,k=Re,I=Pe,S=Oe,A=Ue,D=De,O=Be,H=He,U=Ae,r=je,i=Fe,c=Je,h=we,y=me;return b(),Q(y,null,{default:n(()=>[l("div",Ke,[a(k,{title:t.$t("Card Title")},{left:n(()=>[a(d)]),right:n(()=>[a($,{"close-on-click-reference":"",placement:"bottom-end","offset-y":"2vmin"},{menu:n(()=>[a(g,{icon:"heart",ripple:""},{default:n(()=>[R(v(t.$t("ACTION")),1)]),_:1}),a(g,{icon:"star",ripple:""},{default:n(()=>[R(v(t.$t("ACTION")),1)]),_:1}),a(g,{icon:"delete",ripple:""},{default:n(()=>[R(v(t.$t("ACTION")),1)]),_:1})]),default:n(()=>[a(f,{class:"detail-menu-button",text:"",round:""},{default:n(()=>[a(p,{class:"detail-menu-button-icon",name:"dots-vertical"})]),_:1})]),_:1})]),_:1},8,["title"]),a(h,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=N=>o.value=N),onRefresh:_},{default:n(()=>[l("div",Qe,[a(A,null,{default:n(()=>[a(S,null,{default:n(()=>[a(I,{fit:"cover",height:"54vmin",src:M})]),_:1}),a(S,null,{default:n(()=>[a(I,{fit:"cover",height:"54vmin",src:M})]),_:1}),a(S,null,{default:n(()=>[a(I,{fit:"cover",height:"54vmin",src:M})]),_:1})]),_:1}),a(D,{fixed:!1,teleport:!1,bottom:"-7vmin"},{trigger:n(()=>[a(f,{class:"detail-fab",type:"primary",color:"#EC407A",round:"",onClick:u},{default:n(()=>[a(p,{name:m.value?"heart":"heart-outline","animation-class":"detail-fade-animation",transition:300,size:"6vmin"},null,8,["name"])]),_:1})]),_:1})]),l("div",Ye,[l("div",Ze,v(t.$t("Card Title")),1),l("div",xe,v(t.$t("Card Subtitle")),1),l("div",ea,v(t.$t("Card Description")),1)]),a(O,{margin:"7vmin 0"}),l("div",aa,[l("div",oa,v(t.$t("Comment Information Area")),1),l("div",na,[a(i,{size:["5vmin","4vmin"]},{default:n(()=>[(b(),z(Z,null,x(8,N=>a(r,{key:N},{left:n(()=>[a(H,{class:"detail-comment-avatar",src:ze})]),default:n(()=>[a(U,{style:{"max-width":"26vmin"},tooltip:{sameWidth:!1}},{default:n(()=>[R(v(t.$t("This is a comment")),1)]),_:1})]),_:2},1024)),64))]),_:1})]),l("div",ta,[a(c,{class:"detail-comment-rate",size:"6vmin",half:"","empty-color":"#FFC107",color:"#FFC107",readonly:"",gap:2,"model-value":3.5}),l("div",ra,v(t.$t("A total of {count} comments",{count:100})),1)])]),l("div",la,[a(f,{class:"detail-action",block:"",type:"primary"},{default:n(()=>[a(p,{name:"star"}),l("span",sa,v(t.$t("ACTION BUTTON")),1),a(p,{name:"star"})]),_:1})])]),_:1},8,["modelValue"])])]),_:1})}}});const Va=ye(ia,[["__scopeId","data-v-783f8ec4"]]);export{Va as default};
