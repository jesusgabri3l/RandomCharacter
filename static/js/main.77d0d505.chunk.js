(this["webpackJsonprickandmorty-api"]=this["webpackJsonprickandmorty-api"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),i=n.n(c),s=n(14),r=n.n(s),o=(n(22),n(3)),l=(n(23),n(5)),j=n.n(l),d=n(15),f=n(16),m=n.n(f);var u=function(e){var t=e.idValue,n=Object(c.useState)({}),i=Object(o.a)(n,2),s=i[0],r=i[1];function l(){return(l=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://rickandmortyapi.com/api/character/".concat(t));case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[t]),Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{src:s.image,alt:s.name})}),Object(a.jsxs)("div",{className:"info-container",children:[Object(a.jsx)("h2",{className:"name-title",children:s.name}),Object(a.jsxs)("p",{className:"info-text first",children:[s.status," - ",s.species]}),Object(a.jsxs)("p",{className:"info-text-title",children:[Object(a.jsx)("i",{className:"fa fa-globe-americas mr-2"}),"Origin : "]}),Object(a.jsx)("p",{className:"info-text",children:void 0===s.origin?"Undefined":s.origin.name}),Object(a.jsxs)("p",{className:"info-text-title",children:[Object(a.jsx)("i",{className:"fa fa-map-marker-alt mr-2"}),"Last known location : "]}),Object(a.jsx)("p",{className:"info-text",children:void 0===s.location?"Undefined":s.location.name})]})]})};var b=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){i(Math.floor(200*Math.random())+1)};return Object(a.jsxs)("div",{className:"container-app",children:[Object(a.jsx)("button",{className:"change-button",onClick:s,children:Object(a.jsx)("i",{className:"fa fa-sync-alt"})}),Object(a.jsx)(u,{idValue:n})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.77d0d505.chunk.js.map