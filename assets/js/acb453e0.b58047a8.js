"use strict";(self.webpackChunkjc_doc=self.webpackChunkjc_doc||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Gestion des donn\xe9es",sidebar_position:2},c=void 0,i={unversionedId:"app/preferences/connectionData/dataManagement",id:"app/preferences/connectionData/dataManagement",title:"Gestion des donn\xe9es",description:"Recharger la configuration",source:"@site/docs/app/preferences/connectionData/dataManagement.md",sourceDirName:"app/preferences/connectionData",slug:"/app/preferences/connectionData/dataManagement",permalink:"/jc-doc/docs/app/preferences/connectionData/dataManagement",draft:!1,editUrl:"https://github.com/jared-94/jc-doc/edit/main/docs/app/preferences/connectionData/dataManagement.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Gestion des donn\xe9es",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Param\xe8tres de connexion",permalink:"/jc-doc/docs/app/preferences/connectionData/connection"},next:{title:"Th\xe8me et couleurs",permalink:"/jc-doc/docs/app/preferences/interface/theme"}},l={},s=[{value:"Recharger la configuration",id:"recharger-la-configuration",level:3},{value:"Recharger les donn\xe9es",id:"recharger-les-donn\xe9es",level:3},{value:"Rechargement auto",id:"rechargement-auto",level:3},{value:"Vider le cache",id:"vider-le-cache",level:3},{value:"Param\xe8tres syst\xe8me",id:"param\xe8tres-syst\xe8me",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"../../../../img/app/dataManagement.png",width:"400"}),(0,a.kt)("h3",{id:"recharger-la-configuration"},"Recharger la configuration"),(0,a.kt)("p",null,"Force le rechargement de la ",(0,a.kt)("a",{parentName:"p",href:"../../../plugin/equipment/deviceConfig"},"configuration de l'\xe9quipement"),"."),(0,a.kt)("h3",{id:"recharger-les-donn\xe9es"},"Recharger les donn\xe9es"),(0,a.kt)("p",null,"Permet de recharger les donn\xe9es de l'installation Jeedom : Objets, \xe9quipements, commandes et sc\xe9narios."),(0,a.kt)("h3",{id:"rechargement-auto"},"Rechargement auto"),(0,a.kt)("p",null,"Permet de recharger automatiquement les donn\xe9es de fa\xe7on p\xe9riodiques.",(0,a.kt)("br",{parentName:"p"}),"\n","Le rechargement s'effectue uniquement au d\xe9marrage de l'application, lorsque la condition de p\xe9riodicit\xe9 est valide."),(0,a.kt)("h3",{id:"vider-le-cache"},"Vider le cache"),(0,a.kt)("p",null,"Permet de vider le cache de l'application (mais pas la base de donn\xe9es). Il contient en particulier une copie des images persos."),(0,a.kt)("h3",{id:"param\xe8tres-syst\xe8me"},"Param\xe8tres syst\xe8me"),(0,a.kt)("p",null,"Permet d'acc\xe9der \xe0 la configuration syst\xe8me de l'application."))}u.isMDXComponent=!0}}]);