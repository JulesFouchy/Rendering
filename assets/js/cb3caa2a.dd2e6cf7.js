"use strict";(self.webpackChunkrendering=self.webpackChunkrendering||[]).push([[387],{1083:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(4848),r=t(8453);const a={},i=void 0,o={id:"Shaders Unreal/Jour 4/Cours",title:"Cours",description:"Param\xe8tres expos\xe9s",source:"@site/docs/Shaders Unreal/05-Jour 4/01-Cours.md",sourceDirName:"Shaders Unreal/05-Jour 4",slug:"/Shaders Unreal/Jour 4/Cours",permalink:"/Rendering/Shaders Unreal/Jour 4/Cours",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"ShadersUnreal",previous:{title:"Exos 2",permalink:"/Rendering/Shaders Unreal/Jour 3/Exos 2"},next:{title:"RENDU 2",permalink:"/Rendering/Shaders Unreal/RENDU 2"}},u={},d=[{value:"Param\xe8tres expos\xe9s",id:"param\xe8tres-expos\xe9s",level:2},{value:"Customisation statique",id:"customisation-statique",level:2},{value:"Customisation dynamique",id:"customisation-dynamique",level:2}];function c(e){const s={code:"code",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"param\xe8tres-expos\xe9s",children:"Param\xe8tres expos\xe9s"}),"\n",(0,n.jsxs)(s.p,{children:["Il est possible d'exposer des param\xe8tres pour qu'ils soient modifiables depuis l'\xe9diteur et / ou depuis le code. Pour cela, au lieu d'utiliser un node ",(0,n.jsx)(s.code,{children:"Constant"}),", ou va utiliser un node Parameter (",(0,n.jsx)(s.code,{children:"ScalarParameter"}),", ",(0,n.jsx)(s.code,{children:"VectorParameter"}),", ",(0,n.jsx)(s.code,{children:"TextureParameter"}),", etc.)",(0,n.jsx)("br",{}),"\n(NB: il est aussi possible de convertir un node Constant existant en Parameter avec un clic-droit :"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(9054).A+"",width:"477",height:"314"})}),"\n",(0,n.jsx)(s.h2,{id:"customisation-statique",children:"Customisation statique"}),"\n",(0,n.jsxs)(s.p,{children:["Si vous voulez cr\xe9er une variante du mat\xe9riau, qui utilise des valeurs diff\xe9rentes pour un ou plusieurs param\xe8tres, et que ces valeurs ",(0,n.jsx)(s.strong,{children:"ne vont pas changer \xe0 runtime"}),", vous pouvez cr\xe9er une ",(0,n.jsx)(s.em,{children:"Material Instance"})," \xe0 partir de ce Material :"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(1151).A+"",width:"471",height:"844"})}),"\n",(0,n.jsx)(s.p,{children:"Puis s\xe9lectionner les param\xe8tres qu'on veut changer dans cette instance :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(2244).A+"",width:"1920",height:"632"})}),"\n",(0,n.jsx)(s.p,{children:"Avoir des Material Instance permet de faire des variantes d'un mat\xe9riau. C'est tr\xe8s performant car Unreal peut rendre tous les objets qui utilisent des Material Instance venant du m\xeame Material en une seule passe de rendu. C'est donc bien mieux que de faire diff\xe9rents Material qui ne diff\xe8rent que par la valeur d'une ou deux constantes."}),"\n",(0,n.jsx)(s.h2,{id:"customisation-dynamique",children:"Customisation dynamique"}),"\n",(0,n.jsxs)(s.p,{children:["Si vous voulez pouvoir changer les param\xe8tres \xe0 runtime, en fonction d'actions gameplay ou autre, alors il ne faut pas faire de Material Instance mais plut\xf4t, directement depuis un script, cr\xe9er un ",(0,n.jsx)(s.strong,{children:"Dynamic Material Instance"})," :"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(8304).A+"",width:"1391",height:"483"})}),"\n",(0,n.jsx)(s.p,{children:"Puis vous pouvez quand vous voulez changer la valeur des param\xe8tres du mat\xe9riau :"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(5209).A+"",width:"1020",height:"392"})})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2244:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-1-50c006be1c5439e2112c2061a8d093f8.png"},1151:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-2-3be04a4e49c71786109faa265db3b575.png"},5209:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-4-640f81dc5ea299b49742befd2ada4b48.png"},8304:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-5-4230194dbde74dc18ae799eac854338f.png"},9054:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/image-449173c4a94e90fbbb20e9a9e51b9857.png"},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var n=t(6540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);