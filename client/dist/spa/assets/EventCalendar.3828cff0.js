import{Q,a as p}from"./QCard.d9c604e4.js";import{i as O,a as R,b as z,I as W,l as j,Q as S,F as H,c as E,d as U,e as J,f as K,C as q}from"./ru.fc4afebd.js";import{_ as X,u as Y,r as o,m as Z,k as ee,l as le,n as t,f as l,p as s,q as ae,t as i,Q as r,v as P,x as A,y as te,z as ne,A as oe}from"./index.572ae538.js";const d=m=>(ne("data-v-064454f6"),m=m(),oe(),m),se={class:"demo-app"},de={class:"demo-app-main"},ue=d(()=>t("p",{class:"text-h6 text-bold"},"\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0432 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C",-1)),ie=d(()=>t("span",null,"\u0422\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",-1)),re=d(()=>t("span",null,"\u041A\u043B\u0430\u0441\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",-1)),ve=d(()=>t("span",null,"\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",-1)),ce=d(()=>t("span",null,"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",-1)),pe=d(()=>t("span",{class:"q-ml-sm text-bold text-h6"},"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439",-1)),me=d(()=>t("span",null,"\u0422\u0438\u043F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",-1)),fe={class:"detailedInfo"},_e=d(()=>t("span",null,"\u041A\u043B\u0430\u0441\u0441 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",-1)),Ve={class:"detailedInfo"},Ce=d(()=>t("span",null,"\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",-1)),xe={class:"detailedInfo"},ye=d(()=>t("span",null,"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",-1)),Ee={class:"detailedInfo"},he={__name:"EventCalendar",setup(m){Y();const h=o(null),L=Z({plugins:[O,R,z],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialView:"dayGridMonth",initialEvents:W,editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,locale:j,select:$,eventClick:G,eventsSet:F}),b=o(""),M=o([]),f=o(!1),x=o(!1),v=o(""),u=o(""),_=o(""),y=o(""),V=o({}),g=()=>{v.value="",u.value="",_.value=""};function $(n){V.value={start:n.startStr,end:n.endStr,allDay:n.allDay},f.value=!0}async function B(){await te();const n=h.value.getApi();if(v.value&&u.value){const a=`${V.value.start.split("T")[0]}T${u.value}`;n.addEvent({id:K(),title:v.value,start:a,end:V.value.end,allDay:V.value.allDay,extendedProps:{eventTime:u.value,location:_.value,class:y.value}})}w(),g()}function w(){f.value=!1,g()}const I=o(""),k=o(""),T=o(""),D=o(""),C=o(null);function G(n){x.value=!0,I.value=n.event.title;const a=n.event.extendedProps.eventTime,e=n.event.extendedProps.location,c=n.event.extendedProps.class;k.value=a,T.value=e,D.value=c,C.value=n}function N(n){C.value&&C.value.event.remove()}function F(n){M.value=n}return(n,a)=>(ee(),le("div",se,[t("div",de,[l(ae(H),{class:"demo-app-calendar",options:L,ref_key:"fullCalendarRef",ref:h},{eventContent:s(e=>[t("b",null,i(e.timeText),1),t("i",null,i(e.event.title),1)]),_:1},8,["options"])]),l(S,{modelValue:f.value,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value=e),persistent:""},{default:s(()=>[l(Q,{style:{width:"450px"}},{default:s(()=>[l(E,null,{default:s(()=>[ue,ie,l(p,{class:"q-mb-sm",dense:"",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),autofocus:"",autogrow:""},null,8,["modelValue"]),re,l(p,{class:"q-mb-sm",dense:"",modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),autofocus:"",autogrow:""},null,8,["modelValue"]),ve,l(p,{class:"q-mb-sm",dense:"",modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value=e),autofocus:"",type:"time"},null,8,["modelValue"]),ce,l(p,{dense:"",modelValue:_.value,"onUpdate:modelValue":a[3]||(a[3]=e=>_.value=e),type:"text",autofocus:"",autogrow:""},null,8,["modelValue"])]),_:1}),l(U,null,{default:s(()=>[l(r,{label:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",onClick:w,color:"negative"}),l(r,{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",onClick:B,color:"green"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(S,{modelValue:x.value,"onUpdate:modelValue":a[7]||(a[7]=e=>x.value=e),persistent:""},{default:s(()=>[l(Q,null,{default:s(()=>[l(E,{class:"row items-center"},{default:s(()=>[pe]),_:1}),l(E,{class:"q-ml-sm"},{default:s(()=>[me,t("p",fe,i(I.value),1),_e,t("p",Ve,i(D.value),1),Ce,t("p",xe,i(k.value),1),ye,t("p",Ee,i(T.value),1),l(J,{modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=e=>b.value=e),validate:e=>e.length>3},{default:s(e=>[l(p,{autofocus:"",dense:"",modelValue:e.value,"onUpdate:modelValue":c=>e.value=c,rules:[c=>e.validate(c)||"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430"]},{after:s(()=>[l(r,{flat:"",dense:"",color:"negative",icon:"cancel",onClick:P(e.cancel,["stop","prevent"])},null,8,["onClick"]),l(r,{flat:"",dense:"",color:"positive",icon:"check_circle",onClick:P(e.set,["stop","prevent"]),disable:e.validate(e.value)===!1||e.initialValue===e.value},null,8,["onClick","disable"])]),_:2},1032,["modelValue","onUpdate:modelValue","rules"])]),_:1},8,["modelValue","validate"])]),_:1}),l(U,{align:"right"},{default:s(()=>[A(l(r,{flat:"",label:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",color:"primary"},null,512),[[q]]),A(l(r,{flat:"",label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043D\u044F\u0442\u0438\u0435",color:"negative",onClick:a[6]||(a[6]=e=>N(C.value))},null,512),[[q]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var Ie=X(he,[["__scopeId","data-v-064454f6"]]);export{Ie as default};
