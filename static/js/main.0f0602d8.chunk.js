(this.webpackJsonpreserva_de_hoteles=this.webpackJsonpreserva_de_hoteles||[]).push([[0],[,,,,,,,,,function(e,a,o){},function(e,a,o){},function(e,a,o){},function(e,a,o){},,function(e,a,o){},function(e,a,o){},function(e,a,o){},function(e,a,o){},function(e,a,o){},function(e,a,o){"use strict";o.r(a);var i=o(1),t=o.n(i),n=o(4),r=o.n(n),l=(o(9),o(2)),s=(o(10),o(11),o(12),o(0));function c(e){return Object(s.jsxs)("div",{className:"flex-row padding-left-3",children:[Object(s.jsx)("div",{className:"container-svg",children:Object(s.jsx)("img",{className:"svg",src:e.image,alt:"imagen"})}),Object(s.jsx)("h4",{className:"detail",children:e.description})]})}o(14);function d(e){return Object(s.jsx)("div",{className:"container-svg container-price",children:function(){for(var a=[],o=1;o<5;o++)o<=e.price?a.push(Object(s.jsx)("i",{className:"price dolar-white fas fa-dollar-sign"},o)):a.push(Object(s.jsx)("i",{className:"dolar-grey fas fa-dollar-sign"},o));return a}()})}o(15);function u(e){return Object(s.jsx)("div",{className:"container-btn-reset",children:Object(s.jsx)("input",{className:"btn-reset",onClick:e.handlerReset,type:"button",value:"Limpiar filtros"})})}function m(e){function a(e){var a=new Date(e+" 00:00"),o=a.getMonth(),i=a.getDate(),t=a.getFullYear();return o=0===o?"Enero":1===o?"Febrero":2===o?"Marzo":3===o?"Abril":4===o?"Mayo":5===o?"Junio":6===o?"Julio":7===o?"Agosto":8===o?"Septiembre":9===o?"Octubre":10===o?"Noviembre":"Diciembre","".concat(i," de ").concat(o," del ").concat(t)}return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsxs)("div",{className:"flex-row",children:[Object(s.jsx)("h1",{className:"principal-title font-roboto",children:"Hoteles"}),Object(s.jsx)(u,{handlerReset:e.handlerReset})]}),Object(s.jsx)("h2",{className:"font-roboto detail-header",children:"B\xfasqueda para hoteles: \n        ".concat("all"===e.size?"cualquier tama\xf1o":e.size,", \n        de precio ").concat("all"===e.price?"indefinido":"nivel: ".concat(e.price),", \n        desde el ").concat(e.dateFrom?a(e.dateFrom):"___"," \n        hasta el ").concat(e.dateTo?a(e.dateTo):"___"," \n        en ").concat("all"===e.country?"todos los pa\xedses":e.country)}),Object(s.jsxs)("div",{className:"flex-row container-description",children:[e.dateFrom?Object(s.jsx)(c,{image:"./images/calendar.svg",description:"Desde el d\xeda: ".concat(e.dateFrom)}):"",e.dateTo?Object(s.jsx)(c,{image:"./images/calendar.svg",description:"Hasta el d\xeda: ".concat(e.dateTo)}):""]}),Object(s.jsxs)("div",{className:"flex-row container-description",children:["all"===e.country?"":e.country?Object(s.jsx)(c,{image:"./images/location.svg",description:e.country}):"","all"===e.price?"":e.price?Object(s.jsx)(d,{price:e.price}):"","all"===e.size?"":e.size?Object(s.jsx)(c,{image:"./images/room.svg",description:e.size}):""]})]})}o(16);function p(e){return Object(s.jsxs)("nav",{className:"filter",children:[Object(s.jsx)("input",{value:e.dateFrom,onChange:e.handlerDateFrom,className:"filter-box",type:"date"}),Object(s.jsx)("input",{value:e.dateTo,onChange:e.handlerDateTo,className:"filter-box",type:"date"}),Object(s.jsxs)("select",{value:e.country,onChange:e.handlerCountry,className:"filter-box",name:"country",children:[Object(s.jsx)("option",{value:"all",children:" Todos los pa\xedses "}),Object(s.jsx)("option",{value:"Argentina",children:" Argentina "}),Object(s.jsx)("option",{value:"Brasil",children:" Brasil "}),Object(s.jsx)("option",{value:"Chile",children:" Chile "}),Object(s.jsx)("option",{value:"Uruguay",children:" Uruguay "})]}),Object(s.jsxs)("select",{value:e.price,onChange:e.handlerPrice,className:"filter-box",name:"price",children:[Object(s.jsx)("option",{value:"all",children:" Cualquier precio "}),Object(s.jsx)("option",{value:"1",children:" $ "}),Object(s.jsx)("option",{value:"2",children:" $$ "}),Object(s.jsx)("option",{value:"3",children:" $$$ "}),Object(s.jsx)("option",{value:"4",children:" $$$$ "})]}),Object(s.jsxs)("select",{value:e.size,onChange:e.handlerSize,className:"filter-box",name:"rooms",children:[Object(s.jsx)("option",{value:"all",children:" Cualquier tama\xf1o "}),Object(s.jsx)("option",{value:"Chico",children:" Chico "}),Object(s.jsx)("option",{value:"Mediano",children:" Mediano "}),Object(s.jsx)("option",{value:"Grande",children:" Grande "})]})]})}o(17);function b(e){return Object(s.jsxs)("section",{className:"card",children:[Object(s.jsx)("img",{className:"image",src:e.photo,alt:"hotel"}),Object(s.jsx)("h2",{className:"font-roboto",children:e.name}),Object(s.jsx)("p",{className:"font-roboto description",children:e.description}),Object(s.jsxs)("div",{className:"description",children:[Object(s.jsx)(c,{image:"./images/location.svg",description:"".concat(e.city,", ").concat(e.country)}),Object(s.jsxs)("div",{className:"flex-row width100",children:[Object(s.jsx)(c,{image:"./images/room.svg",description:"".concat(e.rooms," habitaciones")}),Object(s.jsx)(d,{price:e.price})]})]}),Object(s.jsx)("button",{onClick:function(){return alert('Has reservado el Hotel "'.concat(e.name,'"'))},className:"btn-book font-roboto",children:"Reservar"})]})}o(18);function j(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("div",{className:"text-footer font-roboto-footer",children:"Copyright \xa9"}),Object(s.jsxs)("div",{className:"container-icono-footer",children:[Object(s.jsx)("a",{className:"icono-footer",href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-instagram"})}),Object(s.jsx)("a",{className:"icono-footer",href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-twitter"})}),Object(s.jsx)("a",{className:"icono-footer",href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-facebook"})}),Object(s.jsx)("a",{className:"icono-footer",href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("i",{className:"fab fa-telegram"})})]})]})}var v=new Date,h=[{slug:"la-bamba-de-areco",name:"La Bamba de Areco",photo:"./images/la-bamba-de-areco.jpg",description:"La Bamba de Areco est\xe1 ubicada en San Antonio de Areco, en el coraz\xf3n de la pampa. Es una de las estancias m\xe1s antiguas de la Argentina, recientemente restaurada para ofrecer a sus hu\xe9spedes todo el confort y esplendor colonial.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+864e6,rooms:11,city:"Buenos Aires",country:"Argentina",price:4},{slug:"sainte-jeanne",name:"Sainte Jeanne Boutique & Spa",photo:"./images/sainte-jeanne.jpg",description:"Sainte Jeanne Hotel Boutique & Spa est\xe1 ubicado en el coraz\xf3n de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasi\xf3n por los detalles dan personalidad a esta c\xe1lida propuesta.",availabilityFrom:v.valueOf()+864e6,availabilityTo:v.valueOf()+1296e6,rooms:23,city:"Mar del Plata",country:"Argentina",price:2},{slug:"entre-cielos",name:"Entre Cielos",photo:"./images/entre-cielos.jpg",description:"Ubicado en una de las regiones vitivin\xedcolas m\xe1s grandes de Am\xe9rica Latina, Entre Cielos fue pensado y construido en un campo de 8 hect\xe1reas rodeado de vi\xf1edos malbec y una imponente vista de la Cordillera de Los Andes.",availabilityFrom:v.valueOf()+432e6,availabilityTo:v.valueOf()+1296e6,rooms:16,city:"Mendoza",country:"Argentina",price:4},{slug:"huacalera",name:"Hotel Huacalera",photo:"./images/huacalera.jpg",description:"Esta casona neocolonial, construida en la d\xe9cada de 1940, est\xe1 ubicada en el coraz\xf3n de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas monta\xf1osas, recorrido por el R\xedo Grande y declarado Patrimonio de la Humanidad en 2003.",availabilityFrom:v.valueOf()+1728e6,availabilityTo:v.valueOf()+2592e6,rooms:32,city:"Jujuy",country:"Argentina",price:1},{slug:"merced-del-alto",name:"La Merced del Alto",photo:"./images/merced-del-alto.jpg",description:"Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, r\xedos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaqu\xedes o simplemente a disfrutar de la paz del lugar.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+432e6,rooms:14,city:"Salta",country:"Argentina",price:2},{slug:"azur-real",name:"Azur Real Hotel",photo:"./images/azur-real.jpg",description:"La exclusividad rodeada de historia. Azur Real Hotel Boutique est\xe1 ubicado en el coraz\xf3n de la zona comercial y el centro hist\xf3rico de C\xf3rdoba, dentro de uno de los principales circuitos culturales y tur\xedsticos de la ciudad.",availabilityFrom:v.valueOf()+1296e6,availabilityTo:v.valueOf()+2592e6,rooms:16,city:"C\xf3rdoba",country:"Argentina",price:1},{slug:"rincon-del-socorro",name:"Rinc\xf3n del Socorro",photo:"./images/rincon-del-socorro.jpg",description:"Rinc\xf3n del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iber\xe1, un santuario de vida silvestre, donde la Fundaci\xf3n Conservation Land Trust decidi\xf3 desarrollar un ambicioso proyecto de recuperaci\xf3n y conservaci\xf3n.",availabilityFrom:v.valueOf()+432e6,availabilityTo:v.valueOf()+1296e6,rooms:11,city:"Corrientes",country:"Argentina",price:2},{slug:"luma-casa-de-montana",name:"Luma Casa de Monta\xf1a",photo:"./images/luma-casa-de-montana.jpg",description:"Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Monta\xf1a se presenta majestuosa pero a la vez simple y hogare\xf1a: un lugar diferente, atemporal y m\xe1gico.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+1296e6,rooms:8,city:"Villa La Angostura",country:"Argentina",price:2},{slug:"casa-turquesa",name:"Casa Turquesa",photo:"./images/casa-turquesa.jpg",description:"Casa Turquesa es una hist\xf3rica mansi\xf3n del siglo XVIII que recrea el encanto t\xedpico de Paraty, una de las herencias coloniales m\xe1s bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+432e6,rooms:9,city:"R\xedo de Janeiro",country:"Brasil",price:3},{slug:"vila-da-santa",name:"Vila Da Santa",photo:"./images/vila-da-santa.jpg",description:"Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su esp\xedritu original. Se abre a un gran patio central con dos piscinas de dise\xf1o, una de ellas climatizada.",availabilityFrom:v.valueOf()+864e6,availabilityTo:v.valueOf()+1296e6,rooms:19,city:"Buzios",country:"Brasil",price:3},{slug:"uxua-casa",name:"UXUA Casa Hotel & Spa",photo:"./images/uxua-casa.jpg",description:"UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extra\xeddos de la selva.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+864e6,rooms:11,city:"Bah\xeda",country:"Brasil",price:4},{slug:"ponta-dos-ganchos",name:"Ponta dos Ganchos",photo:"./images/uxua-casa.jpg",description:"Ubicado a pasos de San Pablo, R\xedo de Janeiro, e incluso Buenos Aires, en una pen\xednsula privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa m\xe1s exclusivos del sur de Brasil.",availabilityFrom:v.valueOf()+432e6,availabilityTo:v.valueOf()+864e6,rooms:25,city:"Santa Catarina",country:"Brasil",price:4},{slug:"alto-atacama",name:"Alto Atacama",photo:"./images/alto-atacama.jpg",description:"Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukar\xe1 de Quitor en el imponente desierto de Atacama al norte de Chile.",availabilityFrom:v.valueOf(),availabilityTo:v.valueOf()+864e6,rooms:42,city:"San Pedro de Atacama",country:"Chile",price:4},{slug:"tierra-patagonia",name:"Tierra Patagonia",photo:"./images/tierra-patagonia.jpg",description:"Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de monta\xf1as, cascadas, glaciares, lagos y pe\xf1ascos, declarado Reserva de la Biosfera por la UNESCO en 1978.",availabilityFrom:v.valueOf()+2592e6,availabilityTo:v.valueOf()+3456e6,rooms:40,city:"Torres del Paine",country:"Chile",price:4},{slug:"vira-vira",name:"Vira Vira",photo:"./images/vira-vira.jpg",description:"Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicaci\xf3n privilegiada, muy cerca de Puc\xf3n, Chile. Su impresionante parque nativo de 23 hect\xe1reas a orillas del r\xedo Liucura ofrece un oasis \xfanico de paz y tranquilidad.",availabilityFrom:v.valueOf()+864e6,availabilityTo:v.valueOf()+1728e6,rooms:21,city:"Puc\xf3n",country:"Chile",price:4},{slug:"vik-chile",name:"Vik Chile",photo:"./images/vik-chile.jpg",description:"Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el dise\xf1o de vanguardia, una ubicaci\xf3n sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atenci\xf3n por el medioambiente.",availabilityFrom:v.valueOf()+432e6,availabilityTo:v.valueOf()+1728e6,rooms:22,city:"Millahue",country:"Chile",price:4},{slug:"casa-higueras",name:"Casa Higueras",photo:"./images/casa-higueras.jpg",description:"Ubicada en el coraz\xf3n del Cerro Alegre, frente a la imponente bah\xeda de Valpara\xedso, se encuentra Casa Higueras, el primer hotel boutique y de dise\xf1o del puerto.",availabilityFrom:v.valueOf()+432e6,availabilityTo:v.valueOf()+1296e6,rooms:20,city:"Valpara\xedso",country:"Chile",price:4},{slug:"campo-tinto",name:"Campo Tinto",photo:"./images/campo-tinto.jpg",description:"Campo Tinto es una chacra de 25 hect\xe1reas ubicada en el coraz\xf3n de San Roque, en medio del ondulante Carmelo, una zona de chacras, vi\xf1edos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.",availabilityFrom:v.valueOf()+216e7,availabilityTo:v.valueOf()+2592e6,rooms:4,city:"Colonia",country:"Uruguay",price:1}];var g=function(){var e=Object(i.useState)(""),a=Object(l.a)(e,2),o=a[0],t=a[1],n=Object(i.useState)(""),r=Object(l.a)(n,2),c=r[0],d=r[1],u=Object(i.useState)("all"),v=Object(l.a)(u,2),g=v[0],f=v[1],y=Object(i.useState)("all"),O=Object(l.a)(y,2),x=O[0],C=O[1],N=Object(i.useState)("all"),T=Object(l.a)(N,2),A=T[0],F=T[1],z=Object(i.useState)([]),S=Object(l.a)(z,2),w=S[0],D=S[1];function q(){var e=new Date,a=""+(e.getMonth()+1),o=""+e.getDate(),i=e.getFullYear();return a.length<2&&(a="0"+a),o.length<2&&(o="0"+o),[i,a,o].join("-")}return Object(i.useEffect)((function(){var e=h.filter((function(e){return function(e){return"all"===g||e.country===g}(e)&&function(e){return"all"===x||("1"===x?1===e.price:"2"===x?2===e.price:"3"===x?3===e.price:4===e.price)}(e)&&function(e){return"all"===A||("Chico"===A?e.rooms<11:"Mediano"===A?e.rooms>10&&e.rooms<21:e.rooms>20)}(e)&&function(e){return!o||!c||e.availabilityFrom<=new Date(o).valueOf()&&e.availabilityTo>=new Date(o).valueOf()&&e.availabilityFrom<=new Date(c).valueOf()&&e.availabilityTo>=new Date(c).valueOf()}(e)}));D(e)}),[g,x,A,o,c]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(m,{dateFrom:o,dateTo:c,country:g,price:x,size:A,handlerReset:function(){t(""),d(""),f("all"),C("all"),F("all")}}),Object(s.jsx)(p,{dateFrom:o,handlerDateFrom:function(e){new Date(e.target.value)<new Date(q())?alert("La fecha no puede ser anterior al ".concat(q())):c&&new Date(e.target.value)>new Date(c)?alert("La fecha no puede ser posterior al ".concat(c)):t(e.target.value)},dateTo:c,handlerDateTo:function(e){new Date(e.target.value)<new Date(q())?alert("La fecha no puede ser anterior al ".concat(q())):o&&new Date(e.target.value)<new Date(o)?alert("La fecha no puede ser anterior al ".concat(o)):d(e.target.value)},country:g,handlerCountry:function(e){return f(e.target.value)},price:x,handlerPrice:function(e){return C(e.target.value)},size:A,handlerSize:function(e){return F(e.target.value)}}),Object(s.jsx)("div",{className:"container-cards",children:w.length>0?w.map((function(e,a){return Object(s.jsx)(b,{name:e.name,photo:e.photo,description:e.description,rooms:e.rooms,city:e.city,country:e.country,price:e.price},a)})):Object(s.jsxs)("div",{className:"container-no-result",children:[Object(s.jsx)("h2",{className:"font-roboto",children:"Lo sentimos"}),Object(s.jsxs)("p",{className:"font-roboto",children:["No hemos encontrado resultados coincidentes con los filtros aplicados.",Object(s.jsx)("br",{}),"Le sugerimos realizar una nueva busqueda aplicando otros par\xe1metros.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Para inicializar una nueva busqueda debe limpiar los filtros preexistentes"]})]})}),Object(s.jsx)(j,{})]})},f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,20)).then((function(a){var o=a.getCLS,i=a.getFID,t=a.getFCP,n=a.getLCP,r=a.getTTFB;o(e),i(e),t(e),n(e),r(e)}))};r.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.0f0602d8.chunk.js.map