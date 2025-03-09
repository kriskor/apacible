import{D as F}from"./DashboardLayout-BBi3JFie.js";import{d as j,r as m,h as Q,o as W,i as X,j as M,k as h,l as Z,c as f,b as c,m as ee,p as l,a as s,n as k,w as g,q as B,g as x,v as ae,F as te,f as oe,e as J,s as se,t as $}from"./index-D_VXg4dx.js";import{a as le}from"./_plugin-vue_export-helper-C37Bh1MN.js";const re=""+new URL("logo2-BNTHxxGj.png",import.meta.url).href,ne={class:"space-y-4 overflow-x-auto"},ie={class:"p-4 space-y-4"},de={class:"flex items-center gap-2"},ue={class:"space-y-2"},ce={class:"flex gap-2"},me={key:2,class:"flex justify-between items-center mb-4 relative min-w-[768px] md:min-w-0"},pe={class:"flex gap-2"},fe={class:"flex gap-2"},ge={class:"flex items-center gap-2"},be=["onClick"],ve=["onUpdate:modelValue"],xe=["onClick"],Ce={key:0,class:"flex justify-center items-center"},he={key:1},ke=j({__name:"TeamsTable",setup(z){const S=localStorage.getItem("teams")?JSON.parse(localStorage.getItem("teams")):[{id:1,name:"TEJAR",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#4a5568"},{id:2,name:"YUNGUYO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:3,name:"JORDAN",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:4,name:"SHEKINA",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:5,name:"ALTO LIMA",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:6,name:"CUERPO DE CRISTO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:7,name:"CANNAÁN",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:8,name:"BUEN SAMARITANO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"}],U=localStorage.getItem("columns")?JSON.parse(localStorage.getItem("columns")):[{field:"primera",header:"PRIMERA"},{field:"segunda",header:"SEGUNDA"},{field:"tercera",header:"TERCERA"},{field:"cuarta",header:"CUARTA"},{field:"quinta",header:"QUINTA"},{field:"extra",header:"EXTRA"}],n=m(!1),d=m(S),b=m(U),G=Q(()=>n.value?[...d.value].sort((a,e)=>e.total-a.total):[...d.value]),u=m(""),_=m(null),v=m(""),C=m(!1),y=m(!1),w=()=>{y.value=window.innerWidth<768},H=()=>{C.value=!C.value};W(()=>{w(),window.addEventListener("resize",w)}),X(()=>{window.removeEventListener("resize",w)}),M(d,a=>{localStorage.setItem("teams",JSON.stringify(a))},{deep:!0}),M(b,a=>{localStorage.setItem("columns",JSON.stringify(a))},{deep:!0});const V=a=>{a.total=Object.values(a.scores).reduce((e,o)=>e+o,0)},q=()=>{if(u.value){const a=u.value.toLowerCase();b.value.push({field:a,header:u.value.toUpperCase()}),d.value.forEach(e=>{e.scores[a]=0,V(e)}),u.value=""}},K=(a,e)=>{_.value=a,v.value=e},R=a=>{const e=b.value.find(o=>o.field===a);e&&v.value.trim()&&(e.header=v.value.toUpperCase()),_.value=null},O=()=>{const a={};b.value.forEach(e=>{a[e.field]=0}),d.value.unshift({id:Date.now(),name:"NUEVA IGLESIA",scores:a,total:0,backgroundColor:"#4a5568"})},P=a=>{const e=d.value.find(o=>o.id===a);if(e&&confirm(`¿Estás seguro de que quieres eliminar el equipo "${e.name}"?`)){const o=d.value.findIndex(i=>i.id===a);o!==-1&&d.value.splice(o,1)}},Y=a=>{const{data:e,newValue:o,field:i}=a,p=parseInt(o)||0;e.scores[i]=p,V(e),n.value&&d.value.sort((E,T)=>T.total-E.total)},A=a=>{const e=parseInt(a.slice(1,3),16),o=parseInt(a.slice(3,5),16),i=parseInt(a.slice(5,7),16);return(e*299+o*587+i*114)/1e3>128?"#000000":"#ffffff"},L=()=>{confirm("¿Estás seguro de que quieres limpiar todos los datos? Esto restaurará los valores por defecto.")&&(localStorage.clear(),d.value=[{id:1,name:"TEJAR",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#4a5568"},{id:2,name:"YUNGUYO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:3,name:"JORDAN",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:4,name:"SHEKINA",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:5,name:"ALTO LIMA",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:6,name:"CUERPO DE CRISTO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:7,name:"CANNAÁN",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"},{id:8,name:"BUEN SAMARITANO",scores:{primera:0,segunda:0,tercera:0,cuarta:0,quinta:0,extra:0},total:0,backgroundColor:"#2d3748"}],b.value=[{field:"primera",header:"PRIMERA"},{field:"segunda",header:"SEGUNDA"},{field:"tercera",header:"TERCERA"},{field:"cuarta",header:"CUARTA"},{field:"quinta",header:"QUINTA"},{field:"extra",header:"EXTRA"}])};return(a,e)=>{const o=h("Button"),i=h("InputText"),p=h("Column"),E=h("DataTable"),T=Z("focus");return c(),f("div",ne,[y.value?(c(),f("button",{key:0,onClick:H,class:"fixed top-4 right-4 z-50 p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors"},[s("i",{class:k(["pi",C.value?"pi-times":"pi-bars"])},null,2)])):ee("",!0),y.value?(c(),f("div",{key:1,class:k(["fixed inset-y-0 right-0 w-64 bg-white/10 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40",C.value?"translate-x-0":"translate-x-full"])},[s("div",ie,[s("div",de,[e[5]||(e[5]=s("span",{class:"text-2xl font-bold text-white"},"Equipos",-1)),l(o,{icon:"pi pi-plus",onClick:O,label:"Iglesias",class:"p-button-sm"})]),s("div",ue,[l(i,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),placeholder:"Nombre de columna",class:"w-full h-8 text-sm"},null,8,["modelValue"]),s("div",ce,[l(o,{icon:"pi pi-plus",onClick:q,disabled:!u.value,class:"p-button-sm flex-1"},null,8,["disabled"]),l(o,{icon:n.value?"pi pi-sort-alt":"pi pi-sort",onClick:e[1]||(e[1]=t=>n.value=!n.value),class:k(["p-button-sm flex-1",{"p-button-success":n.value}]),label:n.value?"Ordenado":"Ordenar"},null,8,["icon","class","label"])]),l(o,{icon:"pi pi-trash",onClick:L,class:"p-button-sm p-button-danger w-full",label:"Limpiar"})])])],2)):(c(),f("div",me,[s("div",pe,[e[6]||(e[6]=s("span",{class:"text-2xl font-bold text-white"},"Equipos",-1)),l(o,{icon:"pi pi-plus",onClick:O,label:"Iglesias",class:"p-button-sm"})]),e[7]||(e[7]=s("div",{class:"absolute left-1/2 transform -translate-x-1/2"},[s("img",{src:re,alt:"Logo",class:"h-12"})],-1)),s("div",fe,[l(i,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),placeholder:"Nombre de columna",class:"w-48 h-8 text-sm"},null,8,["modelValue"]),l(o,{icon:"pi pi-plus",onClick:q,disabled:!u.value,class:"p-button-sm"},null,8,["disabled"]),l(o,{icon:n.value?"pi pi-sort-alt":"pi pi-sort",onClick:e[3]||(e[3]=t=>n.value=!n.value),class:k(["p-button-sm",{"p-button-success":n.value}]),label:n.value?"Ordenado":"Ordenar"},null,8,["icon","class","label"]),l(o,{icon:"pi pi-trash",onClick:L,class:"p-button-sm p-button-danger",label:"Limpiar"})])])),l(E,{value:G.value,class:"p-datatable-sm",editMode:"cell",dataKey:"id",responsiveLayout:"scroll"},{default:g(()=>[l(p,{field:"actions",header:"-",style:{width:"10px"}},{body:g(({data:t})=>[s("div",ge,[s("i",{class:"pi pi-trash text-red-500 hover:text-red-300 cursor-pointer text-sm transition-colors",onClick:r=>P(t.id)},null,8,be)])]),_:1}),l(p,{field:"name",header:"IGLESIAS",style:{width:"200px"}},{body:g(({data:t})=>[s("div",{class:"flex items-center gap-2",style:x({backgroundColor:t.backgroundColor||"#4a5568",borderRadius:"0.5rem",padding:"0.5rem"})},[l(i,{modelValue:t.name,"onUpdate:modelValue":r=>t.name=r,class:"flex-1",style:x({color:A(t.backgroundColor||"#4a5568"),backgroundColor:"transparent",border:"none",fontWeight:"bold"})},null,8,["modelValue","onUpdate:modelValue","style"]),B(s("input",{type:"color","onUpdate:modelValue":r=>t.backgroundColor=r,class:"w-8 h-8 rounded cursor-pointer",style:{border:"none"}},null,8,ve),[[ae,t.backgroundColor]])],4)]),_:1}),(c(!0),f(te,null,oe(b.value,t=>(c(),J(p,{key:t.field,field:`scores.${t.field}`,style:{width:"150px","justify-items":"center"}},{header:g(()=>[s("div",{class:"text-center cursor-pointer",onClick:r=>K(t.field,t.header)},[_.value===t.field?(c(),f("div",Ce,[B(l(i,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=r=>v.value=r),class:"w-full text-center",onKeyup:se(r=>R(t.field),["enter"]),onBlur:r=>R(t.field)},null,8,["modelValue","onKeyup","onBlur"]),[[T]])])):(c(),f("span",he,$(t.header),1))],8,xe)]),body:g(({data:r,field:I})=>[l(i,{modelValue:r.scores[I.split(".")[1]],"onUpdate:modelValue":N=>r.scores[I.split(".")[1]]=N,onChange:N=>{var D;return Y({data:r,newValue:((D=N.target)==null?void 0:D.value)??"",field:I.split(".")[1]})},class:"w-full text-center score-input",style:x({backgroundColor:r.backgroundColor||"#4a5568",color:A(r.backgroundColor||"#4a5568")})},null,8,["modelValue","onUpdate:modelValue","onChange","style"])]),_:2},1032,["field"]))),128)),l(p,{field:"total",header:"TOTAL",style:{width:"150px","justify-items":"center"}},{body:g(({data:t})=>[s("div",{class:"flex justify-center w-full",style:x({backgroundColor:t.backgroundColor||"#4a5568",borderRadius:"0.5rem",padding:"0.5rem"})},[s("span",{class:"font-bold text-center text-6xl",style:x({color:A(t.backgroundColor||"#4a5568")})},$(t.total),5)],4)]),_:1})]),_:1},8,["value"])])}}}),_e=le(ke,[["__scopeId","data-v-c06d7d98"]]),Ee=j({__name:"TeamsView",setup(z){return(S,U)=>(c(),J(F,null,{default:g(()=>[l(_e)]),_:1}))}});export{Ee as default};
