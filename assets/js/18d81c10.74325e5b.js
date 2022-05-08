"use strict";(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[811],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),l=n(2389),o=n(7392),s=n(7094),i=n(2466),u=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,y=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,s.U)(),T=E.tabGroupChoices,x=E.setTabGroupChoices,O=(0,a.useState)(N),C=O[0],P=O[1],w=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var R=T[y];null!=R&&R!==C&&b.some((function(e){return e.value===R}))&&P(R)}var _=function(e){var t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==C&&(I(t),P(r),null!=y&&x(y,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:S,onFocus:_,onClick:_},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9703:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return f},assets:function(){return d},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),s=n(2360),i=["components"],u={id:"state",title:"Get the state details from ISO2 Code",sidebar_label:"State Details"},c=void 0,p={unversionedId:"api/state",id:"api/state",title:"Get the state details from ISO2 Code",description:"GET https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]",source:"@site/docs/api/state.md",sourceDirName:"api",slug:"/api/state",permalink:"/docs/api/state",draft:!1,editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/state.md",tags:[],version:"current",lastUpdatedAt:1633863773,formattedLastUpdatedAt:"10/10/2021",frontMatter:{id:"state",title:"Get the state details from ISO2 Code",sidebar_label:"State Details"},sidebar:"docs",previous:{title:"States By Country",permalink:"/docs/api/states-by-country"},next:{title:"Cities By State & Country",permalink:"/docs/api/cities-by-state-country"}},d={},m=[{value:"Security",id:"security",level:2},{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2},{value:"Example Not Found Response",id:"example-not-found-response",level:2}],f=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:m,Highlight:f};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(f,{color:"#25c2a0",mdxType:"Highlight"},"GET")," https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]",(0,l.kt)("h2",{id:"security"},"Security"),(0,l.kt)("p",null,"This api use API KEY as an authentication method."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)(f,{color:"#1877F2",mdxType:"Highlight"},"X-CSCAPI-KEY")),(0,l.kt)("li",{parentName:"ul"},"In: header")),(0,l.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Located in"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[ciso]"),(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO2 Code of Country"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#d73232",mdxType:"Highlight"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[siso]"),(0,l.kt)("td",{parentName:"tr",align:null},"URL"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO2 Code of State"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(f,{color:"#d73232",mdxType:"Highlight"},"Required")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"Return a details of state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401"),(0,l.kt)("td",{parentName:"tr",align:null},"Unauthorized.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Found.")))),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="countries-states-cities.js"',title:'"countries-states-cities.js"'},"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n method: 'GET',\n headers: headers,\n redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states/MH\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));\n"))),(0,l.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="countries-states-cities.php"',title:'"countries-states-cities.php"'},"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries/IN/states/MH',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    'X-CSCAPI-KEY: API_KEY'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"))),(0,l.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="countries-states-cities.py"',title:'"countries-states-cities.py"'},"import requests\n\nurl = \"https://api.countrystatecity.in/v1/countries/IN/states/MH\"\n\nheaders = {\n  'X-CSCAPI-KEY': 'API_KEY'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")))),(0,l.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "4008,",\n  "name": "Maharashtra,",\n  "country_id": "101,",\n  "country_code": "IN,",\n  "iso2": "MH"\n}\n')),(0,l.kt)("h2",{id:"example-error-response"},"Example Error Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n')),(0,l.kt)("h2",{id:"example-not-found-response"},"Example Not Found Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "error\'": "No State/Region found."\n}\n')))}y.isMDXComponent=!0}}]);