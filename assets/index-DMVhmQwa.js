import{_ as m,d as y,u as $,T as c,o as r,c as l,a as i,t as p,F as b,r as v,p as D,b as K,e as f,f as A,g,w as W,n as Y,h as B,i as I,m as L,j as G,k as R,l as x,q as H,s as Q,v as X,x as Z,y as tt,z as w}from"./index-BqHTIvWq.js";const et=y({name:"StatsColumn",setup(){return{store:$()}},computed:{shutdownTime(){const t=this.store.getTimeToShutdown(),e=Math.floor(t/1e3)%60,n=Math.floor(t/6e4)%60;return`${n<10?"0":""}${n}:${e<10?"0":""}${e}`},journal(){return[...this.store.getJournal()].reverse()}},methods:{getTypeName(t){switch(t){case c.Water:return"вода";case c.Stone:return"земля";case c.Entrance:return"вход";case c.Cliff:return"скала";case c.Bomb:return"бомба";case c.Sand:return"песок";case c.Mole:return"крот";case c.PortalEntrance:return"портал (вход)";case c.Target:return"цель";case c.PortalExit:return"портал (выход)";default:return"неизвестно"}}}}),_=t=>(D("data-v-46ba8b8c"),t=t(),K(),t),nt={style:{border:"2px solid #01ff12",height:"93vh",padding:"1em","font-family":"monospace",overflow:"hidden"}},st=_(()=>i("h1",null,"Данные бурения",-1)),ot=_(()=>i("br",null,null,-1)),it=_(()=>i("br",null,null,-1)),at=_(()=>i("br",null,null,-1)),rt={key:0,class:"shutdown-msg"},lt={key:1},ct=_(()=>i("span",null,"До остановки бура:",-1)),ut=_(()=>i("br",null,null,-1)),dt=_(()=>i("h3",null,"Журнал:",-1)),pt=_(()=>i("br",null,null,-1));function _t(t,e,n,a,s,u){return r(),l("div",nt,[st,i("span",null,"Пробурено кубов: "+p(t.store.getSteps()),1),ot,i("span",null,"Потрачено кредитов: "+p(t.store.getCreditsSpent()),1),it,i("span",null,"Запуск: "+p(t.store.getTimeToShutdown()==0?"2 кредита":"1 кредит"),1),at,t.store.getTimeToShutdown()==0?(r(),l("h2",rt," БУР ОСТАНОВЛЕН! ")):(r(),l("div",lt,[ct,ut,i("h2",null,p(t.shutdownTime),1)])),dt,(r(!0),l(b,null,v(t.journal,o=>(r(),l("div",{key:o},[i("span",null,p(o.time)+" ("+p(o.tile.i)+", "+p(o.tile.j)+") "+p(t.getTypeName(o.type)),1),pt]))),128))])}const ht=m(et,[["render",_t],["__scopeId","data-v-46ba8b8c"]]),S=y({name:"SingleTile",props:{i:Number,j:Number},setup(){return{store:$()}},computed:{opacity(){switch(this.store.getTile(this.i,this.j).visibility){case f.Closed:return 1;case f.Opened:return 0;case f.Revealed:return .5;case f.Scanned:return .3;default:return 0}},color(){const t=this.store.getTile(this.i,this.j).visibility,e=this.store.isAvailable(this.i,this.j);return t!=f.Scanned?e?"#277a33":"#2a2a2a":e?"#ff00ff":"#2e002e"},borderColor(){return this.store.getTile(this.i,this.j).visibility==f.Scanned?"#ff00ff":"#01ff12"}},methods:{tap(){this.store.tapTile(this.i,this.j)}}}),k=()=>{A(t=>({"3aade0d5":t.color,"7dcc4aee":t.borderColor,"7acfd606":t.opacity}))},V=S.setup;S.setup=V?(t,e)=>(k(),V(t,e)):k;function ft(t,e,n,a,s,u){return r(),l("div",{onClick:e[0]||(e[0]=(...o)=>t.tap&&t.tap(...o)),class:"tile"})}const gt=m(S,[["render",ft],["__scopeId","data-v-2fff4459"]]),j=y({name:"TileGrid",setup(){return{}},data:()=>({height:24,width:32})}),N=()=>{A(t=>({"2dbb2fba":t.width,"6fdbcdb3":t.height}))},E=j.setup;j.setup=E?(t,e)=>(N(),E(t,e)):N;const mt={class:"tile-grid"};function yt(t,e,n,a,s,u){const o=gt;return r(),l("div",mt,[(r(!0),l(b,null,v(t.width*t.height,d=>(r(),l("div",{key:d},[g(o,{i:Math.floor((d-1)/t.width),j:(d-1)%t.width},null,8,["i","j"])]))),128))])}const $t=m(j,[["render",yt],["__scopeId","data-v-b70b524f"]]),bt="/gnome-field/assets/explosion-BA5Pr_7q.png",vt=y({name:"ExplosionTile",props:{i:Number,j:Number},setup(){return{store:$()}},mounted(){W(()=>this.store.getTile(this.i,this.j).isOpened(),t=>{t&&!this.opened&&(this.opened=!0,setTimeout(()=>{this.opacity=1},1e3))})},data:()=>({opened:!1,opacity:0})});function St(t,e,n,a,s,u){return r(),l("img",{src:bt,style:Y([{top:`calc((${t.i} - 1) / 24 * 99%)`,left:`calc((${t.j} - 1) / 32 * 100%)`,opacity:`${t.opacity}`,height:"calc(100% / 8)"},{"aspect-ratio":"1",position:"absolute","z-index":"5"}])},null,4)}const jt=m(vt,[["render",St]]),Ct="/gnome-field/assets/map-C3Lag0be.png",Tt=y({name:"GameField",setup(){return{store:$()}}}),wt=i("img",{src:Ct,style:{"aspect-ratio":"4/3",width:"100%"}},null,-1);function kt(t,e,n,a,s,u){const o=jt,d=$t;return r(),l(b,null,[wt,(r(!0),l(b,null,v(t.store.getBombs(),h=>(r(),B(o,{key:h,i:h.i,j:h.j},null,8,["i","j"]))),128)),g(d,{style:{"z-index":"10",position:"absolute",top:"0",left:"0"}})],64)}const Vt=m(Tt,[["render",kt]]),Nt=I({fluid:{type:Boolean,default:!1},...L(),...G()},"VContainer"),Et=R()({name:"VContainer",props:Nt(),setup(t,e){let{slots:n}=e;const{rtlClasses:a}=x();return H(()=>g(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},a.value,t.class],style:t.style},n)),{}}}),C=["start","end","center"],F=["space-between","space-around","space-evenly"];function T(t,e){return Z.reduce((n,a)=>{const s=t+tt(a);return n[s]=e(),n},{})}const Pt=[...C,"baseline","stretch"],M=t=>Pt.includes(t),O=T("align",()=>({type:String,default:null,validator:M})),At=[...C,...F],z=t=>At.includes(t),U=T("justify",()=>({type:String,default:null,validator:z})),Bt=[...C,...F,"stretch"],q=t=>Bt.includes(t),J=T("alignContent",()=>({type:String,default:null,validator:q})),P={align:Object.keys(O),justify:Object.keys(U),alignContent:Object.keys(J)},It={align:"align",justify:"justify",alignContent:"align-content"};function Lt(t,e,n){let a=It[t];if(n!=null){if(e){const s=e.replace(t,"");a+=`-${s}`}return a+=`-${n}`,a.toLowerCase()}}const Gt=I({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:M},...O,justify:{type:String,default:null,validator:z},...U,alignContent:{type:String,default:null,validator:q},...J,...L(),...G()},"VRow"),Rt=R()({name:"VRow",props:Gt(),setup(t,e){let{slots:n}=e;const a=Q(()=>{const s=[];let u;for(u in P)P[u].forEach(o=>{const d=t[o],h=Lt(u,o,d);h&&s.push(h)});return s.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),s});return()=>{var s;return X(t.tag,{class:["v-row",a.value,t.class],style:t.style},(s=n.default)==null?void 0:s.call(n))}}}),Ft=y({name:"FieldPage",setup(){return{store:$()}}}),Mt={style:{position:"relative","max-height":"100vh","aspect-ratio":"4/3",width:"70%",margin:"auto"}},Ot={style:{width:"30%",padding:"1em",height:"100%"}};function zt(t,e,n,a,s,u){const o=Vt,d=ht;return r(),B(Et,{fluid:"","fill-height":"",style:{height:"100%"}},{default:w(()=>[g(Rt,{align:"start",dense:"","fill-height":"",style:{height:"100%"}},{default:w(()=>[i("div",Mt,[g(o)]),i("div",Ot,[g(d)])]),_:1})]),_:1})}const qt=m(Ft,[["render",zt]]);export{qt as default};
