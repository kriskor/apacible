import{D as m}from"./DashboardLayout-DfLHR-Ui.js";import{I as f,a as h,o as p,h as b,d as n,p as T,e as a,c as u,F as _,y as g,t as c,N as v}from"./vendor-CaVDtSer.js";import{a as x}from"./_plugin-vue_export-helper-C37Bh1MN.js";const k={class:"text-white"},C={class:"flex items-center gap-4 transform transition-all duration-500 ease-in-out hover:scale-102 hover:-translate-y-1"},N={class:"w-8 text-right font-bold text-4xl"},w={class:"flex-1"},A={class:"flex items-center justify-between mb-0"},S={class:"font-semibold text-2xl pl-3"},y={class:"font-bold text-4xl"},E={class:"h-8 rounded-full bg-white/10 overflow-hidden"},D=f({__name:"DashboardView",setup(I){const e=h([]),i=()=>{const l=localStorage.getItem("teams");if(l){const o=JSON.parse(l);e.value=o.map(t=>({name:t.name,backgroundColor:t.backgroundColor||"#2d3748",total:t.total||0,currentTotal:0}))}else e.value=[{name:"TEJAR",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"YUNGUYO",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"JORDAN",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"SHEKINA",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"ALTO LIMA",backgroundColor:"#4a5568",total:0,currentTotal:0},{name:"CUERPO DE CRISTO",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"CANNAÁN",backgroundColor:"#2d3748",total:0,currentTotal:0},{name:"BUEN SAMARITANO",backgroundColor:"#2d3748",total:0,currentTotal:0}];d();const r=()=>{let o=!1;e.value.forEach(t=>{if(t.currentTotal<t.total){const s=Math.max(Math.floor(t.total/100),10);t.currentTotal=Math.min(t.currentTotal+s,t.total),o=!0}}),o&&d(),e.value.some(t=>t.currentTotal<t.total)&&setTimeout(r,200)};setTimeout(r,200)},d=()=>{e.value.sort((l,r)=>r.currentTotal-l.currentTotal)};return p(()=>{i()}),(l,r)=>(n(),b(m,null,{default:T(()=>[a("div",k,[r[0]||(r[0]=a("h1",{class:"text-3xl font-bold mb-4 md:pl-0 pl-12"},"Ranking de Equipos",-1)),(n(!0),u(_,null,g(e.value,(o,t)=>(n(),u("div",{key:o.name,class:"bg-white/5 rounded-lg p-2 mb-2 backdrop-blur-sm"},[a("div",C,[a("div",N,"#"+c(t+1),1),a("div",w,[a("div",A,[a("span",S,c(o.name),1),a("span",y,c(o.currentTotal)+" pts",1)]),a("div",E,[a("div",{class:"h-full transition-all duration-300 ease-out",style:v({width:o.currentTotal/Math.max(...e.value.map(s=>s.total))*100+"%",backgroundColor:o.backgroundColor})},null,4)])])])]))),128))])]),_:1}))}}),B=x(D,[["__scopeId","data-v-ed84d49d"]]);export{B as default};
