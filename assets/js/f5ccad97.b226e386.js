"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[2004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(f,r(r({ref:n},p),{},{components:t})):i.createElement(f,r({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},r="Notifications",s={unversionedId:"integration/notifications",id:"integration/notifications",title:"Notifications",description:"Vous avez la possibilit\xe9 de g\xe9rer diff\xe9rents types de notifications sur l'application Jeedom Connect. Ces notifications peuvent \xeatre utilis\xe9es comme vous le feriez d\xe9j\xe0 avec l'envoi par Jeedom d'un SMS, Telegram, et autres sortes de messagerie.",source:"@site/docs/integration/notifications.md",sourceDirName:"integration",slug:"/integration/notifications",permalink:"/jc-doc/docs/integration/notifications",draft:!1,editUrl:"https://github.com/jared-94/jc-doc/edit/main/docs/integration/notifications.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"G\xe9olocalisation",permalink:"/jc-doc/docs/integration/geoloc"},next:{title:"Service",permalink:"/jc-doc/docs/integration/service"}},l={},u=[{value:"Les Canaux",id:"les-canaux",level:2},{value:"Les notifications",id:"les-notifications",level:2},{value:"Comment envoyer une notification ?",id:"comment-envoyer-une-notification-",level:3},{value:"Comment envoyer une notification \xe0 tous les appareils ?",id:"comment-envoyer-une-notification-\xe0-tous-les-appareils-",level:3},{value:"Quelles sont les options possibles dans les notifications ?",id:"quelles-sont-les-options-possibles-dans-les-notifications-",level:3},{value:"Utilisation avec Ask",id:"utilisation-avec-ask",level:3},{value:"Envoyer des images",id:"envoyer-des-images",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,"Vous avez la possibilit\xe9 de g\xe9rer diff\xe9rents types de notifications sur l'application Jeedom Connect. Ces notifications peuvent \xeatre utilis\xe9es comme vous le feriez d\xe9j\xe0 avec l'envoi par Jeedom d'un SMS, Telegram, et autres sortes de messagerie.",(0,o.kt)("br",{parentName:"p"}),"\n","Vous pouvez donc vous envoyer des notifications (via des sc\xe9narios par exemple) : lorsque votre porte d'entr\xe9e s'ouvre alors que vous \xeates absent, pour vous pr\xe9venir de sortir la poubelle, indiquer que le facteur est pass\xe9, ... vers votre application JeedomConnect."),(0,o.kt)("h2",{id:"les-canaux"},"Les Canaux"),(0,o.kt)("p",null,"Dans le param\xe9trage des notifications, vous avez la possibilit\xe9 de cr\xe9er plusieurs canaux.",(0,o.kt)("br",{parentName:"p"}),"\n","Ces canaux permettent de d\xe9finir diff\xe9rentes fa\xe7on de r\xe9agir qu'aura votre smartphone \xe0 la r\xe9ception d'une notification JeedomConnect.  "),(0,o.kt)("p",null,"Par exemple depuis le plugin, vous pourriez cr\xe9er un canal ",(0,o.kt)("inlineCode",{parentName:"p"},"D\xe9faut"),", un ",(0,o.kt)("inlineCode",{parentName:"p"},"Silence")," et enfin un ",(0,o.kt)("inlineCode",{parentName:"p"},"Urgent")," (propre \xe0 chaque \xe9quipement).\nCes canaux sont ensuite disponibles sur votre application mobile JeedomConnect. Faites un clic long sur l'icone JeedomConnect, puis 'informations', ensuite allez dans le menu 'notification' : vous devez alors voir les 3 canaux pr\xe9c\xe9demment cr\xe9\xe9s ",(0,o.kt)("inlineCode",{parentName:"p"},"D\xe9faut"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Silence")," et ",(0,o.kt)("inlineCode",{parentName:"p"},"Urgent"),".  "),(0,o.kt)("p",null,"Vous pouvez alors les personnaliser : (toujours ",(0,o.kt)("u",null,"en exemple"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"le canal ",(0,o.kt)("inlineCode",{parentName:"li"},"Silence")," recevra toutes les notifications pour lesquels je ne souhaite pas \xeatre d\xe9rang\xe9 : donc je choisis de ne pas avoir de son"),(0,o.kt)("li",{parentName:"ul"},"la canal ",(0,o.kt)("inlineCode",{parentName:"li"},"Urgent")," par contre il faut absolument que je lise les notifications au plus vite, du coup je choisis une sonnerie bien particuli\xe8re (je peux augmenter \xe9galement le son), et je choisis l'option 'Ignorer ne pas d\xe9ranger'")),(0,o.kt)("img",{src:"../../img/JeedomConnect_notif_canaux.gif",width:"20%"}),(0,o.kt)("h2",{id:"les-notifications"},"Les notifications"),(0,o.kt)("p",null,"Il faut ensuite cr\xe9er les commandes notifications qui auront un lien avec nos canaux.\nDans l'onglet ",(0,o.kt)("inlineCode",{parentName:"p"},"notification"),", (toujours en partant de ",(0,o.kt)("u",null,"l'exemple")," donn\xe9e au dessus), je cr\xe9e donc 3 notifications : ",(0,o.kt)("inlineCode",{parentName:"p"},"notification")," (cr\xe9\xe9 automatiquement) en lien avec le canal ",(0,o.kt)("inlineCode",{parentName:"p"},"D\xe9faut"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"notif silencieuse")," que je lie au canal ",(0,o.kt)("inlineCode",{parentName:"p"},"Silence"),", et ",(0,o.kt)("inlineCode",{parentName:"p"},"notif urgente")," que je rattache au canal ",(0,o.kt)("inlineCode",{parentName:"p"},"Urgent"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Vous pouvez \xe9galement :  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mettre \xe0 jour l'existante : si coch\xe9e, alors vous ne verrez qu'une seule notification du m\xeame type dans votre barre de notification sur votre smartphone. (si d\xe9coch\xe9e, chaque notification sera affich\xe9e)"),(0,o.kt)("li",{parentName:"ul"},"couleur : d\xe9finit la couleur du titre de la notification sur votre smarphone, ainsi que celle de la notification"),(0,o.kt)("li",{parentName:"ul"},"image : permet d'ajouter une image sur le coin en haut \xe0 droite de la notification"),(0,o.kt)("li",{parentName:"ul"},"actions : permet de r\xe9aliser commandes et/ou sc\xe9nario \xe0 chaque fois qu'une notification est envoy\xe9e. (",(0,o.kt)("u",null,"par exemple")," : si envoi d'une notification urgente, je veux avoir la possibilit\xe9 d'ex\xe9cuter le sc\xe9nario qui permet de d\xe9clencher l'alarme de la maison)")),(0,o.kt)("img",{src:"../../img/JeedomConnect_notif_edit.png",width:"50%"}),(0,o.kt)("h3",{id:"comment-envoyer-une-notification-"},"Comment envoyer une notification ?"),(0,o.kt)("p",null,"Une fois que vous avez param\xe9tr\xe9 vos diff\xe9rentes notifications, les commandes associ\xe9es sont automatiquement cr\xe9\xe9es sur votre \xe9quipement (apr\xe8s ",(0,o.kt)("inlineCode",{parentName:"p"},"sauvegarde"),"), dans l'onglet d\xe9di\xe9 comme sur tout \xe9quipement Jeedom :  "),(0,o.kt)("img",{src:"../../img/JeedomConnect_notif_cmd.png",width:"40%"}),(0,o.kt)("p",null,"vous pouvez donc vous en servir dans un sc\xe9nario ou n'importe quel autre type (interraction, bloc code, ...) :"),(0,o.kt)("img",{src:"../../img/JeedomConnect_notif_sc.png",width:"60%"}),(0,o.kt)("p",null,"Voici par exemple la r\xe9ception d'une notification : (avec les configurations pr\xe9sent\xe9es pr\xe9c\xe9demment, \xe7a reste donc toujours qu'un exemple possible ! )"),(0,o.kt)("img",{src:"../../img/JeedomConnect_notif_example.gif",width:"20%"}),(0,o.kt)("p",null,"C'est une ",(0,o.kt)("inlineCode",{parentName:"p"},"notif Urgente")," qui a \xe9t\xe9 envoy\xe9e, donc puisque la notification est param\xe9tr\xe9e sur le canal ",(0,o.kt)("inlineCode",{parentName:"p"},"Urgent"),", mon t\xe9l\xe9phone sonne donc avec un fort volume m\xeame si je suis en mode 'ne pas d\xe9ranger'.",(0,o.kt)("br",{parentName:"p"}),"\n","La notification est affich\xe9e en rouge dans la barre de notification Android, ainsi que lorsque je la visualise en enti\xe8re dans l'application JeedomConnect, et on voit la pr\xe9sence d'un ic\xf4ne 'sir\xe8ne rouge' dans le coin sup\xe9rieur droit.\nEt j'ai \xe9galement la possibilit\xe9 de cliquer sur le bouton ",(0,o.kt)("inlineCode",{parentName:"p"},"Alarme maison")," pour ex\xe9cuter le sc\xe9nario que j'ai param\xe9tr\xe9 et qui d\xe9clenchera l'alarme de ma maison."),(0,o.kt)("h3",{id:"comment-envoyer-une-notification-\xe0-tous-les-appareils-"},"Comment envoyer une notification \xe0 tous les appareils ?"),(0,o.kt)("p",null,"Par d\xe9faut le fait d'envoyer \xe0 \"tous\" les appareils JC n'existe pas.",(0,o.kt)("br",{parentName:"p"}),"\n","En effet, il est possible de configurer plusieurs types de notifications par appareil, il nous est donc impossible de deviner lesquelles sont \xe0 utiliser.",(0,o.kt)("br",{parentName:"p"}),"\n","Vous pouvez cr\xe9er plusieurs notification de type ",(0,o.kt)("inlineCode",{parentName:"p"},"Notifier tous"),", il faut :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"aller sur la page principale du plugin et s\xe9lectionner sur ",(0,o.kt)("inlineCode",{parentName:"li"},"Notification multiples")),(0,o.kt)("li",{parentName:"ul"},"cliquer sur ",(0,o.kt)("inlineCode",{parentName:"li"},"ajouter")," pour cr\xe9er un nouveau type de notification (on peut par exemple imaginer avoir un ",(0,o.kt)("inlineCode",{parentName:"li"},"Notifier les parents"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Notifier les enfants"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Notifier toute la famille"),")"),(0,o.kt)("li",{parentName:"ul"},"selectionner l'ensemble des notifications qui devront \xeatre utilis\xe9es lorsque l'action sera r\xe9alis\xe9e"),(0,o.kt)("li",{parentName:"ul"},"sauvegarder les modifications pour ne pas les perdre"),(0,o.kt)("li",{parentName:"ul"},"Lors de la sauvegarde, une nouvelle commande est automatiquement cr\xe9\xe9e sur chaque \xe9quipement qui ont \xe9t\xe9 coch\xe9")),(0,o.kt)("img",{src:"../../img/JeedomConnect_notifyAll.png",width:"70%"}),(0,o.kt)("h3",{id:"quelles-sont-les-options-possibles-dans-les-notifications-"},"Quelles sont les options possibles dans les notifications ?"),(0,o.kt)("p",null,"Vous avez la possibilit\xe9 de passer quelques options dans les notifications sous la forme ",(0,o.kt)("inlineCode",{parentName:"p"},"cl\xe9=valeur"),", chaque option doit \xeatre s\xe9par\xe9 par un ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"title")," : permet de donner un titre \xe0 la notification (c'est l'option qui est prise par d\xe9faut si jamais vous n'indiquez aucune option)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gotoWidgetId")," : permet d'afficher un bouton sur la notification qui vous redirige directement sur un widget"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gotoPageId")," : permet d'afficher un bouton sur la notification qui vous redirige directement sur une page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"files")," :  permet d'envoyer des images/fichiers (! il faut indiquer le chemin complet pour aller sur le fichier)")),(0,o.kt)("p",null,"par exemple : ",(0,o.kt)("inlineCode",{parentName:"p"},"title=y'a du courrier | gotoPageId=10 | files=/var/www/html/data/img/courrier.png"),(0,o.kt)("br",{parentName:"p"}),"\n","permettra d'avoir une notification ayant comme titre \"Y'a du courrier\", une image sera pr\xe9sente et un bouton permettra d'aller sur la page ayant l'id = 10 de votre application."),(0,o.kt)("h3",{id:"utilisation-avec-ask"},"Utilisation avec Ask"),(0,o.kt)("p",null,"Les notifications Jeedom Connect sont compatibles avec la fonction Ask de Jeedom. Vous pouvez indiquer autant de r\xe9ponses souhait\xe9es, ou bien attendre une r\xe9ponse tap\xe9e en texte libre directement dans la notification. Il est \xe9galement possible de d\xe9finir un timeout au del\xe0 duquel il n'est plus possible de r\xe9pondre."),(0,o.kt)("h2",{id:"envoyer-des-images"},"Envoyer des images"),(0,o.kt)("p",null,"Il est possible d'envoyer des images aux notifications (par exemple des shot de cam\xe9ras). La premi\xe8re image sera visible dans la notification Android directement. Pour acc\xe9der aux autres il faut se rendre dans la page de notification de l'application."))}d.isMDXComponent=!0}}]);