import{i as ie,p as b,g as N,c as d,a as D,d as Fe,b as Te,e as St,f as wt,h as Tt,j as v,F as q,u as ae,m as M,k as F,l as Q,n as V,o as Z,q as Ge,t as I,r as G,s as fe,v as It,w as We,x as xt,y as ve,z as ee,A as Et,B as Vt,C as Pt,D as Bt,E as De,G as Lt,H as Nt,I as jt,J as Rt,K as A,L as oe,M as me,N as zt,O as Ot,T as At,P as Mt,S as Ft,Q as Gt,R as Wt,U as He,V as Dt,W as Ie,X as Ht,Y as Ut,Z as xe,_ as qt,$ as Jt,a0 as Yt,a1 as j,a2 as R,a3 as z,a4 as x,a5 as C,a6 as k,a7 as y,a8 as le,a9 as Xt,aa as Kt,ab as E,ac as te,ad as Qt,ae as Zt,af as L,ag as he,ah as re,ai as Ue,aj as en,ak as tn,al as nn}from"./index-9GCIWrZT.js";const sn=["top","bottom"],an=["start","end","left","right"];function on(e,t){let[n,s]=e.split(" ");return s||(s=ie(sn,n)?"start":ie(an,n)?"top":"center"),{side:Ee(n,t),align:Ee(s,t)}}function Ee(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const qe=b({border:[Boolean,Number,String]},"border");function Je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{borderClasses:d(()=>{const s=D(e)?e.value:e.border,i=[];if(s===!0||s==="")i.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`border-${a}`);return i})}}const ln=[null,"default","comfortable","compact"],Ye=b({density:{type:String,default:"default",validator:e=>ln.includes(e)}},"density");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const Ke=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Qe(e){return{elevationClasses:d(()=>{const n=D(e)?e.value:e.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const Ze=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{roundedClasses:d(()=>{const s=D(e)?e.value:e.rounded,i=D(e)?e.value:e.tile,a=[];if(s===!0||s==="")a.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const o of String(s).split(" "))a.push(`rounded-${o}`);else(i||s===!1)&&a.push("rounded-0");return a})}}function tt(e){return Fe(()=>{const t=[],n={};if(e.value.background)if(Te(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&St(e.value.background)){const s=wt(e.value.background);if(s.a==null||s.a===1){const i=Tt(s);n.color=i,n.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Te(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function ue(e,t){const n=d(()=>({text:D(e)?e.value:null})),{colorClasses:s,colorStyles:i}=tt(n);return{textColorClasses:s,textColorStyles:i}}const rn=["elevated","flat","tonal","outlined","text","plain"];function un(e,t){return v(q,null,[v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const nt=b({color:String,variant:{type:String,default:"elevated",validator:e=>rn.includes(e)}},"variant");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();const n=d(()=>{const{variant:a}=ae(e);return`${t}--variant-${a}`}),{colorClasses:s,colorStyles:i}=tt(d(()=>{const{variant:a,color:o}=ae(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const st=b({baseColor:String,divided:Boolean,...qe(),...M(),...Ye(),...Ke(),...Ze(),...F(),...Q(),...nt()},"VBtnGroup"),Ve=V()({name:"VBtnGroup",props:st(),setup(e,t){let{slots:n}=t;const{themeClasses:s}=Z(e),{densityClasses:i}=Xe(e),{borderClasses:a}=Je(e),{elevationClasses:o}=Qe(e),{roundedClasses:r}=et(e);Ge({VBtn:{height:"auto",baseColor:I(e,"baseColor"),color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),G(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},s.value,a.value,i.value,o.value,r.value,e.class],style:e.style},n))}}),dn=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),fn=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function vn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=fe("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=It();We(Symbol.for(`${t.description}:id`),i);const a=xt(t,null);if(!a){if(!n)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=I(e,"value"),r=d(()=>!!(a.disabled.value||e.disabled));a.register({id:i,value:o,disabled:r},s),ve(()=>{a.unregister(i)});const u=d(()=>a.isSelected(i)),m=d(()=>a.items.value[0].id===i),_=d(()=>a.items.value[a.items.value.length-1].id===i),h=d(()=>u.value&&[a.selectedClass.value,e.selectedClass]);return ee(u,l=>{s.emit("group:selected",{value:l})},{flush:"sync"}),{id:i,isSelected:u,isFirst:m,isLast:_,toggle:()=>a.select(i,!u.value),select:l=>a.select(i,l),selectedClass:h,value:o,disabled:r,group:a}}function mn(e,t){let n=!1;const s=Et([]),i=Vt(e,"modelValue",[],l=>l==null?[]:it(s,Lt(l)),l=>{const f=gn(s,l);return e.multiple?f:f[0]}),a=fe("useGroup");function o(l,f){const p=l,c=Symbol.for(`${t.description}:id`),$=Nt(c,a==null?void 0:a.vnode).indexOf(f);ae(p.value)==null&&(p.value=$,p.useIndexAsValue=!0),$>-1?s.splice($,0,p):s.push(p)}function r(l){if(n)return;u();const f=s.findIndex(p=>p.id===l);s.splice(f,1)}function u(){const l=s.find(f=>!f.disabled);l&&e.mandatory==="force"&&!i.value.length&&(i.value=[l.id])}Pt(()=>{u()}),ve(()=>{n=!0}),Bt(()=>{for(let l=0;l<s.length;l++)s[l].useIndexAsValue&&(s[l].value=l)});function m(l,f){const p=s.find(c=>c.id===l);if(!(f&&(p!=null&&p.disabled)))if(e.multiple){const c=i.value.slice(),g=c.findIndex(P=>P===l),$=~g;if(f=f??!$,$&&e.mandatory&&c.length<=1||!$&&e.max!=null&&c.length+1>e.max)return;g<0&&f?c.push(l):g>=0&&!f&&c.splice(g,1),i.value=c}else{const c=i.value.includes(l);if(e.mandatory&&c)return;i.value=f??!c?[l]:[]}}function _(l){if(e.multiple,i.value.length){const f=i.value[0],p=s.findIndex($=>$.id===f);let c=(p+l)%s.length,g=s[c];for(;g.disabled&&c!==p;)c=(c+l)%s.length,g=s[c];if(g.disabled)return;i.value=[s[c].id]}else{const f=s.find(p=>!p.disabled);f&&(i.value=[f.id])}}const h={register:o,unregister:r,selected:i,select:m,disabled:I(e,"disabled"),prev:()=>_(s.length-1),next:()=>_(1),isSelected:l=>i.value.includes(l),selectedClass:d(()=>e.selectedClass),items:d(()=>s),getItemIndex:l=>hn(s,l)};return We(t,h),h}function hn(e,t){const n=it(e,[t]);return n.length?e.findIndex(s=>s.id===n[0]):-1}function it(e,t){const n=[];return t.forEach(s=>{const i=e.find(o=>De(s,o.value)),a=e[s];(i==null?void 0:i.value)!=null?n.push(i.id):a!=null&&n.push(a.id)}),n}function gn(e,t){const n=[];return t.forEach(s=>{const i=e.findIndex(a=>a.id===s);if(~i){const a=e[i];n.push(a.value!=null?a.value:i)}}),n}const at=Symbol.for("vuetify:v-btn-toggle"),pn=b({...st(),...dn()},"VBtnToggle");V()({name:"VBtnToggle",props:pn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:s,next:i,prev:a,select:o,selected:r}=mn(e,at);return G(()=>{const u=Ve.filterProps(e);return v(Ve,jt({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n,{isSelected:s,next:i,prev:a,select:o,selected:r})]}})}),{next:i,prev:a,select:o}}});const yn=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ne=V(!1)({name:"VDefaultsProvider",props:yn(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:i,reset:a,root:o,scoped:r}=Rt(e);return Ge(s,{reset:a,root:o,scoped:r,disabled:i}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}}),bn=["x-small","small","default","large","x-large"],ge=b({size:{type:[String,Number],default:"default"}},"size");function pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return Fe(()=>{let n,s;return ie(bn,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:A(e.size),height:A(e.size)}),{sizeClasses:n,sizeStyles:s}})}const _n=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:oe,...M(),...ge(),...F({tag:"i"}),...Q()},"VIcon"),se=V()({name:"VIcon",props:_n(),setup(e,t){let{attrs:n,slots:s}=t;const i=me(),{themeClasses:a}=Z(e),{iconData:o}=zt(d(()=>i.value||e.icon)),{sizeClasses:r}=pe(e),{textColorClasses:u,textColorStyles:m}=ue(I(e,"color"));return G(()=>{var l,f;const _=(l=s.default)==null?void 0:l.call(s);_&&(i.value=(f=Ot(_).filter(p=>p.type===At&&p.children&&typeof p.children=="string")[0])==null?void 0:f.children);const h=!!(n.onClick||n.onClickOnce);return v(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,r.value,u.value,{"v-icon--clickable":h,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:A(e.size),height:A(e.size),width:A(e.size)},m.value,e.style],role:h?"button":void 0,"aria-hidden":!h,tabindex:h?e.disabled?-1:0:void 0},{default:()=>[_]})}),{}}});function Cn(e,t){const n=me(),s=Mt(!1);if(Ft){const i=new IntersectionObserver(a=>{s.value=!!a.find(o=>o.isIntersecting)},t);ve(()=>{i.disconnect()}),ee(n,(a,o)=>{o&&(i.unobserve(o),s.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const kn=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...M(),...ge(),...F({tag:"div"}),...Q()},"VProgressCircular"),$n=V()({name:"VProgressCircular",props:kn(),setup(e,t){let{slots:n}=t;const s=20,i=2*Math.PI*s,a=me(),{themeClasses:o}=Z(e),{sizeClasses:r,sizeStyles:u}=pe(e),{textColorClasses:m,textColorStyles:_}=ue(I(e,"color")),{textColorClasses:h,textColorStyles:l}=ue(I(e,"bgColor")),{intersectionRef:f,isIntersecting:p}=Cn(),{resizeRef:c,contentRect:g}=Gt(),$=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=d(()=>Number(e.width)),J=d(()=>u.value?Number(e.size):g.value?g.value.width:Math.max(P.value,32)),W=d(()=>s/(1-P.value/J.value)*2),Y=d(()=>P.value/J.value*W.value),O=d(()=>A((100-$.value)/100*i));return Wt(()=>{f.value=a.value,c.value=a.value}),G(()=>v(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,r.value,m.value,e.class],style:[u.value,_.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:$.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${W.value} ${W.value}`},[v("circle",{class:["v-progress-circular__underlay",h.value],style:l.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":Y.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":Y.value,"stroke-dasharray":i,"stroke-dashoffset":O.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:$.value})])]})),{}}}),Pe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Sn=b({location:String},"location");function wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=He();return{locationStyles:d(()=>{if(!e.location)return{};const{side:a,align:o}=on(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function r(m){return n?n(m):0}const u={};return a!=="center"&&(t?u[Pe[a]]=`calc(100% - ${r(a)}px)`:u[a]=0),o!=="center"?t?u[Pe[o]]=`calc(100% - ${r(o)}px)`:u[o]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const Tn=b({loading:[Boolean,String]},"loader");function In(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}const xn=["static","relative","fixed","absolute","sticky"],En=b({position:{type:String,validator:e=>xn.includes(e)}},"position");function Vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function Pn(){const e=fe("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Bn(e,t){var m,_;const n=Dt("RouterLink"),s=d(()=>!!(e.href||e.to)),i=d(()=>(s==null?void 0:s.value)||Ie(t,"click")||Ie(e,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:s,isClickable:i,href:I(e,"href")};const a=d(()=>({...e,to:I(()=>e.to||"")})),o=n.useLink(a.value),r=d(()=>e.to?o:void 0),u=Pn();return{isLink:s,isClickable:i,route:(m=r.value)==null?void 0:m.route,navigate:(_=r.value)==null?void 0:_.navigate,isActive:d(()=>{var h,l,f;return r.value?e.exact?u.value?((f=r.value.isExactActive)==null?void 0:f.value)&&De(r.value.route.value.query,u.value.query):((l=r.value.isExactActive)==null?void 0:l.value)??!1:((h=r.value.isActive)==null?void 0:h.value)??!1:!1}),href:d(()=>{var h;return e.to?(h=r.value)==null?void 0:h.route.value.href:e.href})}}const Ln=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Nn(e,t){ee(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&Ht(()=>{t(!0)})},{immediate:!0})}const ce=Symbol("rippleStop"),jn=80;function Be(e,t){e.style.transform=t,e.style.webkitTransform=t}function de(e){return e.constructor.name==="TouchEvent"}function ot(e){return e.constructor.name==="KeyboardEvent"}const Rn=function(e,t){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!ot(e)){const l=t.getBoundingClientRect(),f=de(e)?e.touches[e.touches.length-1]:e;s=f.clientX-l.left,i=f.clientY-l.top}let a=0,o=.3;(h=t._ripple)!=null&&h.circle?(o=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((s-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-a*2)/2}px`,u=`${(t.clientHeight-a*2)/2}px`,m=n.center?r:`${s-a}px`,_=n.center?u:`${i-a}px`;return{radius:a,scale:o,x:m,y:_,centerX:r,centerY:u}},K={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:a,scale:o,x:r,y:u,centerX:m,centerY:_}=Rn(e,t,n),h=`${a*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,t.appendChild(s);const l=window.getComputedStyle(t);l&&l.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Be(i,`translate(${r}, ${u}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Be(i,`translate(${m}, ${_}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function lt(e){return typeof e>"u"||!!e}function H(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ce])){if(e[ce]=!0,de(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||ot(e),n._ripple.class&&(t.class=n._ripple.class),de(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{K.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},jn)}else K.show(e,n,t)}}function Le(e){e[ce]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),K.hide(t)}}function rt(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let U=!1;function ut(e){!U&&(e.keyCode===xe.enter||e.keyCode===xe.space)&&(U=!0,H(e))}function ct(e){U=!1,S(e)}function dt(e){U&&(U=!1,S(e))}function ft(e,t,n){const{value:s,modifiers:i}=t,a=lt(s);if(a||K.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,Ut(s)&&s.class&&(e._ripple.class=s.class),a&&!n){if(i.stop){e.addEventListener("touchstart",Le,{passive:!0}),e.addEventListener("mousedown",Le);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",rt,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",H),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",ut),e.addEventListener("keyup",ct),e.addEventListener("blur",dt),e.addEventListener("dragstart",S,{passive:!0})}else!a&&n&&vt(e)}function vt(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",rt),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",ut),e.removeEventListener("keyup",ct),e.removeEventListener("dragstart",S),e.removeEventListener("blur",dt)}function zn(e,t){ft(e,t,!1)}function On(e){delete e._ripple,vt(e)}function An(e,t){if(t.value===t.oldValue)return;const n=lt(t.oldValue);ft(e,t,n)}const Mn={mounted:zn,unmounted:On,updated:An},Fn=b({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:at},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...qe(),...M(),...Ye(),...qt(),...Ke(),...fn(),...Tn(),...Sn(),...En(),...Ze(),...Ln(),...ge(),...F({tag:"button"}),...Q(),...nt({variant:"elevated"})},"VBtn"),Gn=V()({name:"VBtn",props:Fn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:i}=Z(e),{borderClasses:a}=Je(e),{densityClasses:o}=Xe(e),{dimensionStyles:r}=Jt(e),{elevationClasses:u}=Qe(e),{loaderClasses:m}=In(e),{locationStyles:_}=wn(e),{positionClasses:h}=Vn(e),{roundedClasses:l}=et(e),{sizeClasses:f,sizeStyles:p}=pe(e),c=vn(e,e.symbol,!1),g=Bn(e,n),$=d(()=>{var T;return e.active!==void 0?e.active:g.isLink.value?(T=g.isActive)==null?void 0:T.value:c==null?void 0:c.isSelected.value}),P=d(()=>{var B,X;return{color:(c==null?void 0:c.isSelected.value)&&(!g.isLink.value||((B=g.isActive)==null?void 0:B.value))||!c||((X=g.isActive)==null?void 0:X.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:J,colorStyles:W,variantClasses:Y}=cn(P),O=d(()=>(c==null?void 0:c.disabled.value)||e.disabled),Ct=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),kt=d(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function $t(T){var B;O.value||g.isLink.value&&(T.metaKey||T.ctrlKey||T.shiftKey||T.button!==0||n.target==="_blank")||((B=g.navigate)==null||B.call(g,T),c==null||c.toggle())}return Nn(g,c==null?void 0:c.select),G(()=>{const T=g.isLink.value?"a":e.tag,B=!!(e.prependIcon||s.prepend),X=!!(e.appendIcon||s.append),$e=!!(e.icon&&e.icon!==!0);return Yt(v(T,{type:T==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":$.value,"v-btn--block":e.block,"v-btn--disabled":O.value,"v-btn--elevated":Ct.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,a.value,J.value,o.value,u.value,m.value,h.value,l.value,f.value,Y.value,e.class],style:[W.value,r.value,_.value,p.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:O.value||void 0,href:g.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:$t,value:kt.value},{default:()=>{var Se;return[un(!0,"v-btn"),!e.icon&&B&&v("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?v(ne,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},s.prepend):v(se,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&$e?v(se,{key:"content-icon",icon:e.icon},null):v(ne,{key:"content-defaults",disabled:!$e,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var we;return[((we=s.default)==null?void 0:we.call(s))??e.text]}})]),!e.icon&&X&&v("span",{key:"append",class:"v-btn__append"},[s.append?v(ne,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},s.append):v(se,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((Se=s.loader)==null?void 0:Se.call(s))??v($n,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Mn,!O.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:c}}}),Wn=R({name:"StatsColumn",setup(){return{store:z()}},data:()=>({fullscreen:!1}),computed:{shutdownTime(){const e=this.store.getTimeToShutdown(),t=Math.floor(e/1e3)%60,n=Math.floor(e/6e4)%60;return`${n<10?"0":""}${n}:${t<10?"0":""}${t}`},journal(){return[...this.store.getJournal()].reverse()}},methods:{getTypeName(e){switch(e){case x.Water:return"вода";case x.Stone:return"земля";case x.Entrance:return"вход";case x.Cliff:return"скала";case x.Bomb:return"бомба";case x.Sand:return"песок";case x.Mole:return"крот";case x.PortalEntrance:return"портал (вход)";case x.Target:return"цель";case x.PortalExit:return"портал (выход)";default:return"неизвестно"}},toggleFullscreen(){this.fullscreen=!this.fullscreen;const e=document.documentElement;this.fullscreen?e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen():document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}}),w=e=>(Qt("data-v-6fbb429f"),e=e(),Zt(),e),Dn={style:{border:"2px solid #01ff12",height:"93vh",padding:"1em","font-family":"monospace",overflow:"hidden"}},Hn={key:0,style:{display:"flex","justify-content":"center","align-items":"center"}},Un=w(()=>y("br",null,null,-1)),qn=w(()=>y("span",null,"Цена бурения: 1 кредит",-1)),Jn=w(()=>y("br",null,null,-1)),Yn=w(()=>y("br",null,null,-1)),Xn=w(()=>y("br",null,null,-1)),Kn=w(()=>y("br",null,null,-1)),Qn={key:1},Zn=w(()=>y("h2",{class:"shutdown-msg"},"БУР ОСТАНОВЛЕН!",-1)),es=w(()=>y("span",null,[y("b",null,"Запуск: 1 кредит")],-1)),ts=[Zn,es],ns={key:2},ss=w(()=>y("span",null,[y("b",null,"До остановки бура:")],-1)),is=w(()=>y("br",null,null,-1)),as=w(()=>y("br",null,null,-1)),os=w(()=>y("h3",null,"Журнал:",-1)),ls=w(()=>y("br",null,null,-1));function rs(e,t,n,s,i,a){return C(),k("div",Dn,[y("h1",{onClick:t[0]||(t[0]=o=>e.toggleFullscreen())},"Данные бурения"),e.store.drillInitialized?Kt("",!0):(C(),k("div",Hn,[v(Gn,{onClick:t[1]||(t[1]=o=>e.store.initDrill()),variant:"outlined",style:{margin:"1em"}},{default:le(()=>[Xt("за счёт фирмы!")]),_:1}),Un])),qn,Jn,y("span",null,"Пробурено кубов: "+E(e.store.getSteps()),1),Yn,y("span",null,"Потрачено кредитов: "+E(e.store.getCreditsSpent()),1),Xn,Kn,e.store.getTimeToShutdown()==0?(C(),k("div",Qn,ts)):(C(),k("div",ns,[ss,is,y("h2",null,E(e.shutdownTime),1)])),as,os,(C(!0),k(q,null,te(e.journal,o=>(C(),k("div",{key:o},[y("span",null,E(o.time)+" ("+E("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[o.tile.i])+" "+E(o.tile.j+1)+") "+E(e.getTypeName(o.type)),1),ls]))),128))])}const us=j(Wn,[["render",rs],["__scopeId","data-v-6fbb429f"]]),ye=R({name:"SingleTile",props:{i:Number,j:Number},setup(){return{store:z()}},computed:{opacity(){const e=this.store.getTile(this.i,this.j).visibility;let t;switch(e){case L.Closed:t=1;break;case L.Opened:t=0;break;case L.Revealed:t=.5;break;case L.Scanned:t=.3;break;default:t=0}return(this.i==this.store.mouseI-1||this.j==this.store.mouseJ-1)&&(t=Math.max(.3,t)),t},color(){const e=this.store.getTile(this.i,this.j).visibility,t=this.store.isAvailable(this.i,this.j);let n;return e==L.Scanned?n=t?"#ff00ff":"#2e002e":n=t?"#277a33":"#2a2a2a",(this.i==this.store.mouseI-1||this.j==this.store.mouseJ-1)&&(n=this.brighten(n,.1)),n},borderColor(){const e=this.store.getTile(this.i,this.j).visibility,t=e==L.Scanned?"#ff00ff":"#01ff12";return(this.i==this.store.mouseI-1||this.j==this.store.mouseJ-1)&&e==L.Opened?"transparent":t}},methods:{tap(){this.store.tapTile(this.i,this.j)},mouseOver(){this.store.mouseI=this.i+1,this.store.mouseJ=this.j+1},brighten(e,t){const n=e.substring(1),s=parseInt(n,16),i=s>>16&255,a=s>>8&255,o=s>>0&255,r=Math.min(255,i+255*t),u=Math.min(255,a+255*t),m=Math.min(255,o+255*t);return`#${(r<<16|u<<8|m).toString(16)}`}}}),Ne=()=>{he(e=>({"2c4fffad":e.color,"0e6f7761":e.borderColor,"57a44456":e.opacity}))},je=ye.setup;ye.setup=je?(e,t)=>(Ne(),je(e,t)):Ne;function cs(e,t,n,s,i,a){return C(),k("div",{onClick:t[0]||(t[0]=(...o)=>e.tap&&e.tap(...o)),onMouseover:t[1]||(t[1]=(...o)=>e.mouseOver&&e.mouseOver(...o)),class:"tile"},null,32)}const ds=j(ye,[["render",cs],["__scopeId","data-v-8ab1988a"]]),be=R({name:"TileGrid",setup(){return{store:z()}},computed:{width(){return this.store.getWidth()},height(){return this.store.getHeight()}}}),Re=()=>{he(e=>({20119707:e.width,"6f5b5ff4":e.height}))},ze=be.setup;be.setup=ze?(e,t)=>(Re(),ze(e,t)):Re;const fs={class:"tile-grid"};function vs(e,t,n,s,i,a){const o=ds;return C(),k("div",fs,[(C(!0),k(q,null,te(e.width*e.height,r=>(C(),k("div",{key:r},[v(o,{i:Math.floor((r-1)/e.width),j:(r-1)%e.width},null,8,["i","j"])]))),128))])}const ms=j(be,[["render",vs],["__scopeId","data-v-1b6b557c"]]),hs="/gnome-field/assets/explosion-BA5Pr_7q.png",gs=R({name:"ExplosionTile",props:{i:Number,j:Number},setup(){return{store:z()}},mounted(){ee(()=>this.store.getTile(this.i,this.j).isOpened(),e=>{e&&!this.opened&&(this.opened=!0,setTimeout(()=>{this.opacity=1},1e3))})},data:()=>({opened:!1,opacity:0})});function ps(e,t,n,s,i,a){return C(),k("img",{src:hs,style:re([{top:`calc((${e.i} - 1) / ${e.store.getHeight()} * 99%)`,left:`calc((${e.j} - 1) / ${e.store.getWidth()} * 100%)`,opacity:`${e.opacity}`,height:`calc(100% / ${e.store.getHeight()/3})`},{"aspect-ratio":"1",position:"absolute","z-index":"5"}])},null,4)}const ys=j(gs,[["render",ps]]),bs="/gnome-field/assets/map-BJdT-GUl.png",_s=R({name:"GameField",setup(){return{store:z()}}}),Cs=y("img",{src:bs,style:{width:"100%"}},null,-1);function ks(e,t,n,s,i,a){const o=ys,r=ms;return C(),k("div",null,[Cs,(C(!0),k(q,null,te(e.store.getBombs(),u=>(C(),Ue(o,{key:u,i:u.i,j:u.j},null,8,["i","j"]))),128)),v(r,{style:{"z-index":"10",position:"absolute",top:"0",left:"0"}})])}const $s=j(_s,[["render",ks]]),_e=R({name:"BorderTile",props:{index:Number},setup(){return{store:z()}},computed:{value(){const e=Math.floor(this.index/(this.store.getWidth()+2)),t=this.index%(this.store.getWidth()+2),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return e==0&&t==0||e==0&&t==this.store.getWidth()+1||e==this.store.getHeight()+1&&t==0||e==this.store.getHeight()+1&&t==this.store.getWidth()+1?"":e==0||e==this.store.getHeight()+1?t:t==0||t==this.store.getWidth()+1?n[e-1]:"?"},color(){const e=Math.floor(this.index/(this.store.getWidth()+2)),t=this.index%(this.store.getWidth()+2),n=this.store.mouseI,s=this.store.mouseJ;return n==0||n==this.store.getHeight()+1||s==0||s==this.store.getWidth()+1?"transparent":this.store.mouseI==e||this.store.mouseJ==t?"#018a0a":"transparent"}},methods:{mouseOver(){const e=Math.floor(this.index/(this.store.getWidth()+2)),t=this.index%(this.store.getWidth()+2);this.store.mouseI=e,this.store.mouseJ=t}}}),Oe=()=>{he(e=>({"8e58ef44":e.color}))},Ae=_e.setup;_e.setup=Ae?(e,t)=>(Oe(),Ae(e,t)):Oe;function Ss(e,t,n,s,i,a){return C(),k("div",{onMouseover:t[0]||(t[0]=o=>e.mouseOver()),class:"border-tile"},E(e.value),33)}const ws=j(_e,[["render",Ss],["__scopeId","data-v-257faada"]]),Ts=b({fluid:{type:Boolean,default:!1},...M(),...F()},"VContainer"),Is=V()({name:"VContainer",props:Ts(),setup(e,t){let{slots:n}=t;const{rtlClasses:s}=He();return G(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},n)),{}}}),Ce=["start","end","center"],mt=["space-between","space-around","space-evenly"];function ke(e,t){return tn.reduce((n,s)=>{const i=e+nn(s);return n[i]=t(),n},{})}const xs=[...Ce,"baseline","stretch"],ht=e=>xs.includes(e),gt=ke("align",()=>({type:String,default:null,validator:ht})),Es=[...Ce,...mt],pt=e=>Es.includes(e),yt=ke("justify",()=>({type:String,default:null,validator:pt})),Vs=[...Ce,...mt,"stretch"],bt=e=>Vs.includes(e),_t=ke("alignContent",()=>({type:String,default:null,validator:bt})),Me={align:Object.keys(gt),justify:Object.keys(yt),alignContent:Object.keys(_t)},Ps={align:"align",justify:"justify",alignContent:"align-content"};function Bs(e,t,n){let s=Ps[e];if(n!=null){if(t){const i=t.replace(e,"");s+=`-${i}`}return s+=`-${n}`,s.toLowerCase()}}const Ls=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ht},...gt,justify:{type:String,default:null,validator:pt},...yt,alignContent:{type:String,default:null,validator:bt},..._t,...M(),...F()},"VRow"),Ns=V()({name:"VRow",props:Ls(),setup(e,t){let{slots:n}=t;const s=d(()=>{const i=[];let a;for(a in Me)Me[a].forEach(o=>{const r=e[o],u=Bs(a,o,r);u&&i.push(u)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return en(e.tag,{class:["v-row",s.value,e.class],style:e.style},(i=n.default)==null?void 0:i.call(n))}}}),js=R({name:"FieldPage",setup(){return{store:z()}}}),Rs={style:{width:"22rem",padding:"1em",height:"100%"}};function zs(e,t,n,s,i,a){const o=ws,r=$s,u=us;return C(),Ue(Is,{fluid:"","fill-height":"",style:{height:"100%"}},{default:le(()=>[v(Ns,{align:"start",dense:"","fill-height":"",style:{height:"100%"}},{default:le(()=>[y("div",{style:re([{position:"relative",width:"max(calc(100% - 23.5rem), 50%)",margin:"auto"},{aspectRatio:(e.store.getWidth()+2)/(e.store.getHeight()+2),display:"grid",gridTemplateColumns:`repeat(${e.store.getWidth()+2}, calc(100% / ${e.store.getWidth()+2}))`,gridTemplateRows:`repeat(${e.store.getHeight()+2}, calc(100% / ${e.store.getHeight()+2}))`}])},[(C(!0),k(q,null,te((e.store.getWidth()+2)*(e.store.getHeight()+2),m=>(C(),k("div",{key:m},[v(o,{index:m-1},null,8,["index"])]))),128)),y("div",{style:re([{position:"absolute"},{width:`calc(100% / ${e.store.getWidth()+2} * ${e.store.getWidth()})`,top:`calc(100% / ${e.store.getHeight()+2})`,left:`calc(100% / ${e.store.getWidth()+2})`}])},[v(r)],4)],4),y("div",Rs,[v(u)])]),_:1})]),_:1})}const As=j(js,[["render",zs]]);export{As as default};
