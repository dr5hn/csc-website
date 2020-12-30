(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"Highlight",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(82)),c={id:"all-states",title:"Get a list of States",sidebar_label:"All States"},l={unversionedId:"api/all-states",id:"api/all-states",isDocsHomePage:!1,title:"Get a list of States",description:"export const Highlight = ({children, color}) => (",source:"@site/docs/api/all-states.md",slug:"/api/all-states",permalink:"/docs/api/all-states",editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/all-states.md",version:"current",lastUpdatedBy:"Darshan Gada",lastUpdatedAt:1609348144,sidebar_label:"All States",sidebar:"docs",previous:{title:"Get the country details from ISO2 Code",permalink:"/docs/api/country"},next:{title:"Get a list of States within country",permalink:"/docs/api/states-by-country"}},i=[{value:"Security",id:"security",children:[]},{value:"Request Parameters",id:"request-parameters",children:[]},{value:"Response",id:"response",children:[]},{value:"Example Success Response",id:"example-success-response",children:[]},{value:"Example Error Response",id:"example-error-response",children:[]}],s=function(e){var t=e.children,r=e.color;return Object(o.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={rightToc:i,Highlight:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{color:"#25c2a0",mdxType:"Highlight"},"GET")," /v1/states",Object(o.b)("h2",{id:"security"},"Security"),Object(o.b)("p",null,"This api use API KEY as an authentication method."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: ",Object(o.b)(s,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),Object(o.b)("li",{parentName:"ul"},"In: header")),Object(o.b)("h2",{id:"request-parameters"},"Request Parameters"),Object(o.b)("p",null,"No parameters"),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Code"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return a list of states")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"401"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unauthorized.")))),Object(o.b)("h2",{id:"example-success-response"},"Example Success Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 4008,\n    "name": "Maharashtra",\n    "country_id": 101,\n    "country_code": "IN",\n    "iso2": "MH"\n  },\n  ...\n]\n')),Object(o.b)("h2",{id:"example-error-response"},"Example Error Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')))}u.isMDXComponent=!0},82:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);