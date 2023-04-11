"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[9846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),s=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={id:"geoloc",title:"G\xe9olocalisation",sidebar_position:1},a=void 0,l={unversionedId:"integration/geoloc",id:"integration/geoloc",title:"G\xe9olocalisation",description:"G\xe9olocalisation",source:"@site/docs/integration/geoloc.md",sourceDirName:"integration",slug:"/integration/geoloc",permalink:"/jc-doc/docs/integration/geoloc",draft:!1,editUrl:"https://github.com/jared-94/jc-doc/edit/main/docs/integration/geoloc.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"geoloc",title:"G\xe9olocalisation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Param\xe8tres de connexion",permalink:"/jc-doc/docs/app/preferences/connection"},next:{title:"Notifications",permalink:"/jc-doc/docs/integration/notifications"}},u={},s=[{value:"G\xe9olocalisation",id:"configGeofence",level:2},{value:"Comment ajouter une zone ?",id:"comment-ajouter-une-zone-",level:3},{value:"Comment supprimer une zone de mon \xe9quipement ?",id:"comment-supprimer-une-zone-de-mon-\xe9quipement-",level:3},{value:"Comment centrer ma carte sur une zone ?",id:"comment-centrer-ma-carte-sur-une-zone-",level:3},{value:"Comment d\xe9placer une zone ?",id:"comment-d\xe9placer-une-zone-",level:3},{value:"Localisation depuis le plugin",id:"localisation",level:2}],p={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configGeofence"},"G\xe9olocalisation"),(0,r.kt)("p",null,"Jeedom Connect dispose d'une fonction de Geofencing : d\xe9finissez des lieux g\xe9ographiques sur une carte et des commandes binaires seront cr\xe9\xe9es dans votre \xe9quipement vous indiquant si l'appareil est dans ce lieu ou pas."),(0,r.kt)("p",null,"Commencez par ouvrir l'application et rendez-vous dans les Pr\xe9f\xe9rences puis activez la g\xe9olocalisation.  "),(0,r.kt)("img",{src:"../../img/screen-geo1.png",width:"200px"}),(0,r.kt)("img",{src:"../../img/screen-geo2.png",width:"200px"}),(0,r.kt)("img",{src:"../../img/screen-geo3.png",width:"200px"}),(0,r.kt)("p",null,"Pour le bon fonctionnement du service, il est imp\xe9ratif d'accepter toutes les autorisations, en particulier la ",(0,r.kt)("inlineCode",{parentName:"p"},"Localisation")," doit \xeatre sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Toujours autoriser")," (Android 10+)"),(0,r.kt)("p",null,"Vous pouvez ensuite aller sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Gestion des lieux"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pour ",(0,r.kt)("strong",{parentName:"li"},"d\xe9finir une zone"),", faites un appui long sur la carte puis donner un nom et un rayon (en m\xe8tres). Le binaire est imm\xe9diatement cr\xe9\xe9 c\xf4t\xe9 Jeedom."),(0,r.kt)("li",{parentName:"ul"},"Pour ",(0,r.kt)("strong",{parentName:"li"},"supprimer ou \xe9diter une zone"),", appuyez sur le marqueur puis sur le nom qui apparait."),(0,r.kt)("li",{parentName:"ul"},"Pour ",(0,r.kt)("strong",{parentName:"li"},"d\xe9placer une zone"),", faites un appui long sur le marqueur puis glisser.\nJeedom Connect poss\xe8de aussi une fonction de Tracking qui vous permet de connaitre \xe0 tout moment la position de votre appareil. Les coordonn\xe9es GPS (latitude,longitude) sont accessibles dans la commande ",(0,r.kt)("inlineCode",{parentName:"li"},"Position")," de votre \xe9quipement.  ")),(0,r.kt)("br",null),(0,r.kt)("a",{name:"configGeofence"}),"Ces actions peuvent \xe9galement \xeatre r\xe9alis\xe9es depuis le plugin, en utilisant la petite `cible` sous votre \xe9quipement, ou via le bouton `Personnaliser les Geofencing` sur la page de configuration de votre \xe9quipement JC :",(0,r.kt)("img",{src:"../../img/JeedomConnect_geofencing_icon.png",width:"200px"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Vous arrivez sur une nouvelle fen\xeatre qui vous donne acc\xe8s \xe0 2 infos :  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"la 1\xe8re partie concerne les zones utilis\xe9es pour faire du geofencing d\xe9j\xe0 disponible sur votre \xe9quipement. Ces zones sont repr\xe9sent\xe9es en vert sur la carte.  "),(0,r.kt)("li",{parentName:"ul"},'La 2nd partie, permet de voir toutes les zones qui ont \xe9t\xe9 cr\xe9\xe9es sur le plugin et qui peuvent \xeatre partag\xe9es entre diff\xe9rents \xe9quipements (ce qui \xe9vite d\'avoir \xe0 recr\xe9er une zone "Maison" sur tous les appareils !). Ces zones sont repr\xe9sent\xe9es en rouge sur la carte.  ')),(0,r.kt)("img",{src:"../../img/JeedomConnect_geofencing.png",width:"600px"}),(0,r.kt)("h3",{id:"comment-ajouter-une-zone-"},"Comment ajouter une zone ?"),(0,r.kt)("p",null,"Cliquez sur la carte \xe0 l'endroit o\xf9 vous d\xe9sirez cr\xe9er une zone puis sur le bouton ",(0,r.kt)("inlineCode",{parentName:"p"},"Cr\xe9er une zone ici"),". Celle-ci sera automatiquement ajout\xe9e dans la partie ",(0,r.kt)("inlineCode",{parentName:"p"},"Tous les points disponibles"),". Pour l'ajouter \xe0 votre \xe9quipement, il vous suffit de cliquer sur le petit ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," en bout de ligne, ce qui aura pour action de d\xe9placer cette ligne sur votre \xe9quipement et de cr\xe9er la commande correspondante dans votre \xe9quipement."),(0,r.kt)("h3",{id:"comment-supprimer-une-zone-de-mon-\xe9quipement-"},"Comment supprimer une zone de mon \xe9quipement ?"),(0,r.kt)("p",null,"Cliquez sur l'ic\xf4ne ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," en bout de ligne, la zone est supprim\xe9e :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"de votre \xe9quipement, si c'est un point de la partie 'Mon \xe9quipement'"),(0,r.kt)("li",{parentName:"ul"},"de la configuration, si c'est un point de la partie 'Tous les points disponibles'. Dans ce dernier cas, cette zone ne sera plus propos\xe9e pour configurer un autre \xe9quipement.")),(0,r.kt)("h3",{id:"comment-centrer-ma-carte-sur-une-zone-"},"Comment centrer ma carte sur une zone ?"),(0,r.kt)("p",null,"Cliquez simplement sur le dernier icone en forme de ",(0,r.kt)("inlineCode",{parentName:"p"},"pin"),", la carte se centre automatiquement sur ce point"),(0,r.kt)("h3",{id:"comment-d\xe9placer-une-zone-"},"Comment d\xe9placer une zone ?"),(0,r.kt)("p",null,"Les petits pin bleus utilis\xe9s pour caract\xe9riser la zone peuvent \xeatre d\xe9plac\xe9s. Cliquez sur le point \xe0 d\xe9placer, allez au nouvel endroit d\xe9sir\xe9, relachez la souris, voil\xe0 le point est d\xe9plac\xe9 !",(0,r.kt)("br",{parentName:"p"}),"\n","Si vous connaissez les coordonn\xe9es GPS du nouveau point, vous pouvez \xe9galement directement les saisir dans le tableau de droite, et la zone se mettra \xe9galement \xe0 jour."),(0,r.kt)("h2",{id:"localisation"},"Localisation depuis le plugin"),(0,r.kt)("p",null,"Il est possible de suivre la localisation de vos \xe9quipements JC.",(0,r.kt)("br",{parentName:"p"}),"\n","Pour cela :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"l'option de tracking doit \xeatre activ\xe9e sur votre application JC, de fa\xe7on \xe0 ce que votre position soit remont\xe9e au plugin"),(0,r.kt)("li",{parentName:"ul"},"sur chaque \xe9quipement (sur le plugin), vous devez cocher la case ",(0,r.kt)("inlineCode",{parentName:"li"},"Afficher la position sur la carte globale")," (et vous avez la possibilit\xe9 de personnaliser le rep\xe8re utilis\xe9 sur la carte pour identifier cet \xe9quipement)")),(0,r.kt)("p",null,"Ensuite il suffit de cliquer sur le bouton ",(0,r.kt)("inlineCode",{parentName:"p"},"Localisation")," disponible sur la page principale du plugin pour acc\xe8der \xe0 la carte."),(0,r.kt)("img",{src:"../../img/JeedomConnect_localisation.png",width:"600px"}),(0,r.kt)("p",null,"Cette m\xeame carte peut \xeatre affich\xe9e sous forme de widget (au sens Jeedom du terme). Pour se faire, vous devez cocher la case ",(0,r.kt)("inlineCode",{parentName:"p"},"Visible")," sur cette fen\xeatre, et s\xe9lectionner sous quel objet le widget devra \xeatre affich\xe9.  "),(0,r.kt)("p",null,"En cliquant sur les ic\xf4nes pr\xe9sents vous aurez acc\xe8s \xe0 plus de d\xe9tails sur la position : le nom, la derni\xe8re mise \xe0 jour, les coordonn\xe9es, la distance entre ce point et votre jeedom (cf la page de configuration du plugin) et un lien pour rejoindre directement cette position."))}d.isMDXComponent=!0}}]);