import{u as q,R as Ie}from"./icon-4be89cfe.js";import{p as M,d as F,q as u,c as y,a0 as ke,s as I,u as $e,au as ze,t as Be,a as H,o as U,b as se,h as A,e as V,n as k,y as W,O as Pe,P as J,Z as Ee,ag as x,A as B,l as Y,C as le,D as de,E as De,g as Me,r as ve,i as Q,w as j,a5 as O,av as Le,T as Ne,aj as Ae,N as We,m as Fe,J as He,z as Ue,aw as Ve,a1 as ee}from"./index-81730b21.js";import{o as Ye,S as Ge,a as Ke}from"./swipeItem-96890970.js";import{o as ue}from"./onWindowResize-9b069d67.js";import{l as ae}from"./shared-8dcc744f.js";var K={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:Boolean,disabled:Boolean,onScroll:M()};function re(e,a,r,i,l,t,o){try{var s=e[t](o),n=s.value}catch(b){r(b);return}s.done?a(n):Promise.resolve(n).then(i,l)}function ne(e){return function(){var a=this,r=arguments;return new Promise(function(i,l){var t=e.apply(a,r);function o(n){re(t,i,l,o,s,"next",n)}function s(n){re(t,i,l,o,s,"throw",n)}o(void 0)})}}var{n:Re,classes:Xe}=H("sticky");function Ze(e,a){return U(),se("div",{class:k(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:W({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?e.offsetTop+"px":void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[A("div",{class:k(e.n("wrapper")),ref:"wrapperEl",style:W({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[V(e.$slots,"default")],6)],6)}var fe=F({name:"VarSticky",props:K,setup(e){var a=u(null),r=u(null),i=u(!1),l=u("0px"),t=u("0px"),o=u("auto"),s=u("auto"),n=u("auto"),b=u("auto"),w=y(()=>!e.disabled&&e.cssMode),c=y(()=>!e.disabled&&!e.cssMode&&i.value),f=y(()=>ke(e.offsetTop)),d,S=()=>{var{cssMode:p,disabled:$}=e;if(!$){var z=0;if(d!==window){var{top:P}=x(d);z=P}var E=r.value,C=a.value,{top:R,left:X}=x(C),v=R-z;return v<=f.value?(p||(o.value=C.offsetWidth+"px",s.value=C.offsetHeight+"px",l.value=z+f.value+"px",t.value=X+"px",n.value=E.offsetWidth+"px",b.value=E.offsetHeight+"px",i.value=!0),{offsetTop:f.value,isFixed:!0}):(i.value=!1,{offsetTop:v,isFixed:!1})}},T=()=>{if(d){var p=S();p&&B(e.onScroll,p.offsetTop,p.isFixed)}},g=function(){var p=ne(function*(){i.value=!1,yield Pe(),S()});return function(){return p.apply(this,arguments)}}(),L=function(){var p=ne(function*(){yield J(),d=Ee(a.value),d!==window&&d.addEventListener("scroll",T),T()});return function(){return p.apply(this,arguments)}}(),N=()=>{d!==window&&d.removeEventListener("scroll",T)};return I(()=>e.disabled,g),$e(L),Ye(N),ue(g),ze(()=>window,"scroll",T),{n:Re,classes:Xe,resize:g,stickyEl:a,wrapperEl:r,isFixed:i,offsetTop:f,fixedTop:l,fixedLeft:t,fixedWidth:o,fixedHeight:s,fixedWrapperWidth:n,fixedWrapperHeight:b,enableCSSMode:w,enableFixedMode:c,toNumber:Be}}});fe.render=Ze;const ce=fe;Y(ce);var me=Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");function _e(){var{bindChildren:e,childProviders:a,length:r}=q(me);return{length:r,tabItemList:a,bindTabItem:e}}var Oe=Symbol("TAB_ITEM_BIND_LIST_KEY");function qe(){var{parentProvider:e,bindParent:a,index:r}=le(me);return a||de("TabItem","<var-tab-item/> must in <var-tabs-items/>"),{index:r,tabsItems:e,bindTabsItems:a}}function Je(){var{childProviders:e,bindChildren:a,length:r}=q(Oe);return{length:r,lists:e,bindLists:a}}var Qe={name:[String,Number],disabled:Boolean,onClick:M()},be=Symbol("TABS_BIND_TAB_KEY");function je(){var{childProviders:e,bindChildren:a,length:r}=q(be);return{length:r,tabList:e,bindTabList:a}}function xe(){var{parentProvider:e,bindParent:a,index:r}=le(be);return a||de("Tab","<var-tab/> must in <var-tabs/>"),{index:r,tabs:e,bindTabs:a}}var{n:G,classes:ea}=H("tab");function aa(e,a){var r=De("ripple");return Me((U(),se("div",{class:k(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n("--"+e.itemDirection))),ref:"tabEl",style:W({color:e.computeColorStyle()}),onClick:a[0]||(a[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[V(e.$slots,"default")],6)),[[r,{disabled:e.disabled}]])}var pe=F({name:"VarTab",directives:{Ripple:Ie},props:Qe,setup(e){var a=u(null),r=y(()=>e.name),i=y(()=>e.disabled),l=y(()=>a.value),{index:t,tabs:o,bindTabs:s}=xe(),{onTabClick:n,active:b,activeColor:w,inactiveColor:c,disabledColor:f,itemDirection:d,resize:S}=o,T={name:r,index:t,disabled:i,element:l};s(T);var g=()=>e.name!=null?b.value===e.name:b.value===(t==null?void 0:t.value),L=()=>e.disabled?f.value:g()?w.value:c.value,N=()=>e.disabled?G("$-tab--disabled"):g()?G("$-tab--active"):G("$-tab--inactive"),p=$=>{var{disabled:z,name:P,onClick:E}=e;z||(B(E,P!=null?P:t.value,$),n(T))};return I(()=>e.name,S),I(()=>e.disabled,S),{n:G,classes:ea,tabEl:a,active:b,activeColor:w,inactiveColor:c,itemDirection:d,computeColorStyle:L,computeColorClass:N,handleClick:p}}});pe.render=aa;const he=pe;Y(he);var Sa=he,ra={name:[String,Number]},{n:na,classes:ta}=H("tab-item");function ia(e,a){var r=ve("var-swipe-item");return U(),Q(r,{class:k(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:j(()=>[V(e.$slots,"default")]),_:3},8,["class"])}var ye=F({name:"VarTabItem",components:{VarSwipeItem:Ge},props:ra,setup(e){var a=u(!1),r=y(()=>e.name),{index:i,bindTabsItems:l}=qe(),{bindLists:t}=Je(),o=n=>{a.value=n},s={index:i,name:r,current:y(()=>a.value),setCurrent:o};return l(s),t(s),{n:na,classes:ta,current:a}}});ye.render=ia;const Se=ye;Y(Se);var Ta=Se,oa={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal"},itemDirection:{type:String,default:"horizontal"},fixedBottom:Boolean,activeColor:String,inactiveColor:String,disabledColor:String,color:String,indicatorColor:String,indicatorSize:[String,Number],elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto"},indicatorPosition:{type:String,default:"normal"},safeArea:Boolean,sticky:Boolean,stickyCssMode:O(K,"cssMode"),stickyZIndex:O(K,"zIndex"),offsetTop:O(K,"offsetTop"),onClick:M(),onChange:M(),"onUpdate:active":M()};function te(e,a,r,i,l,t,o){try{var s=e[t](o),n=s.value}catch(b){r(b);return}s.done?a(n):Promise.resolve(n).then(i,l)}function ie(e){return function(){var a=this,r=arguments;return new Promise(function(i,l){var t=e.apply(a,r);function o(n){te(t,i,l,o,s,"next",n)}function s(n){te(t,i,l,o,s,"throw",n)}o(void 0)})}}var{n:sa,classes:la}=H("tabs");function da(e,a){return U(),Q(He(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:j(()=>[A("div",Fe({class:e.classes(e.n(),e.n("$--box"),e.n("--item-"+e.itemDirection),e.n("--layout-"+e.layoutDirection+"-padding"),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[A("div",{ref:"scrollerEl",class:k(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n("--layout-"+e.layoutDirection+"-scrollable")],e.n("--layout-"+e.layoutDirection)))},[V(e.$slots,"default"),A("div",{class:k(e.classes(e.n("indicator"),e.n("--layout-"+e.layoutDirection+e.indicatorPosition+"-indicator"))),style:W({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?"translateX("+e.indicatorX+")":"translateY("+e.indicatorY+")"})},[A("div",{class:k(e.classes(e.n("indicator-inner"),e.n("--layout-"+e.layoutDirection+"-indicator-inner"))),style:W({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}var Te=F({name:"VarTabs",components:{VarSticky:ce},inheritAttrs:!1,props:oa,setup(e){var a=u("0px"),r=u("0px"),i=u("0px"),l=u("0px"),t=u(!1),o=u(null),s=y(()=>e.active),n=y(()=>e.indicatorPosition==="reverse"?"-reverse":""),b=y(()=>e.activeColor),w=y(()=>e.inactiveColor),c=y(()=>e.disabledColor),f=y(()=>e.itemDirection),d=u(null),{tabList:S,bindTabList:T,length:g}=je(),L=v=>{var h,m=(h=v.name.value)!=null?h:v.index.value,{active:D,onChange:Z,onClick:_}=e;B(e["onUpdate:active"],m),B(_,m),m!==D&&B(Z,m)},N=()=>S.find(v=>{var{name:h}=v;return e.active===h.value}),p=v=>S.find(h=>{var{index:m}=h;return(v!=null?v:e.active)===m.value}),$=()=>{if(g.value!==0){var{active:v}=e;if(Ue(v)){var h=Ve(v,0,g.value-1);return B(e["onUpdate:active"],h),p(h)}}},z=()=>{t.value=e.scrollable==="always"||S.length>=5},P=v=>{var{element:h}=v,m=h.value;m&&(e.layoutDirection==="horizontal"?(a.value=m.offsetWidth+"px",i.value=m.offsetLeft+"px"):(r.value=m.offsetHeight+"px",l.value=m.offsetTop+"px"))},E=v=>{var{element:h}=v;if(t.value){var m=o.value,D=h.value;if(e.layoutDirection==="horizontal"){var Z=D.offsetLeft+D.offsetWidth/2-m.offsetWidth/2;ee(m,{left:Z,animation:ae})}else{var _=D.offsetTop+D.offsetHeight/2-m.offsetHeight/2;ee(m,{top:_,animation:ae})}}},C=()=>{var v=N()||p()||$();!v||v.disabled.value||(z(),P(v),E(v))},R=function(){var v=ie(function*(){e.sticky&&d.value&&(yield d.value.resize())});return function(){return v.apply(this,arguments)}}(),X={active:s,activeColor:b,inactiveColor:w,disabledColor:c,itemDirection:f,resize:C,onTabClick:L};return T(X),I(()=>g.value,ie(function*(){yield J(),C()})),I(()=>e.active,C),I(()=>e.scrollable,C),Le(C),ue(C),{stickyComponent:d,indicatorWidth:a,indicatorHeight:r,indicatorX:i,indicatorY:l,indicatorPosition:n,localScrollable:t,scrollerEl:o,Transition:Ne,toSizeUnit:Ae,n:sa,classes:la,resize:C,resizeSticky:R,formatElevation:We}}});Te.render=da;const ge=Te;Y(ge);var ga=ge,va={active:{type:[String,Number],default:0},canSwipe:{type:Boolean,default:!0},loop:Boolean,"onUpdate:active":M()};function oe(e,a,r,i,l,t,o){try{var s=e[t](o),n=s.value}catch(b){r(b);return}s.done?a(n):Promise.resolve(n).then(i,l)}function ua(e){return function(){var a=this,r=arguments;return new Promise(function(i,l){var t=e.apply(a,r);function o(n){oe(t,i,l,o,s,"next",n)}function s(n){oe(t,i,l,o,s,"throw",n)}o(void 0)})}}var{n:fa}=H("tabs-items");function ca(e,a){var r=ve("var-swipe");return U(),Q(r,{class:k(e.n()),ref:"swipe",loop:e.loop,touchable:e.canSwipe,indicator:!1,onChange:e.handleSwipeChange},{default:j(()=>[V(e.$slots,"default")]),_:3},8,["class","loop","touchable","onChange"])}var Ce=F({name:"VarTabsItems",components:{VarSwipe:Ke},props:va,setup(e){var a=u(null),{tabItemList:r,bindTabItem:i,length:l}=_e(),t=c=>r.find(f=>{var{name:d}=f;return c===d.value}),o=c=>r.find(f=>{var{index:d}=f;return c===d.value}),s=c=>t(c)||o(c),n=c=>{var f,d=s(c);d&&(r.forEach(S=>{var{setCurrent:T}=S;return T(!1)}),d.setCurrent(!0),(f=a.value)==null||f.to(d.index.value))},b=c=>{var f,d=r.find(T=>{var{index:g}=T;return g.value===c}),S=(f=d.name.value)!=null?f:d.index.value;B(e["onUpdate:active"],S)},w=()=>a.value;return i({}),I(()=>e.active,n),I(()=>l.value,ua(function*(){yield J(),n(e.active)})),{swipe:a,n:fa,handleSwipeChange:b,getSwipe:w}}});Ce.render=ca;const we=Ce;Y(we);var Ca=we;export{Oe as T,Sa as _,ga as a,Ta as b,Ca as c};
