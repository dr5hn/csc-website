"use strict";(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[35],{3479:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(4848),r=n(8453),a=n(1470),i=n(9365);const l={id:"state",title:"Get the state details from ISO2 Code",sidebar_label:"State Details"},o=void 0,c={id:"api/state",title:"Get the state details from ISO2 Code",description:"GET https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]",source:"@site/docs/api/state.md",sourceDirName:"api",slug:"/api/state",permalink:"/docs/api/state",draft:!1,unlisted:!1,editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/state.md",tags:[],version:"current",lastUpdatedAt:1660722908e3,frontMatter:{id:"state",title:"Get the state details from ISO2 Code",sidebar_label:"State Details"},sidebar:"docs",previous:{title:"States By Country",permalink:"/docs/api/states-by-country"},next:{title:"Cities By State & Country",permalink:"/docs/api/cities-by-state-country"}},u={},d=({children:e,color:t})=>{const n={span:"span",...(0,r.R)()};return(0,s.jsx)(n.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})},h=[{value:"Security",id:"security",level:2},{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2},{value:"Example Not Found Response",id:"example-not-found-response",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(d,{color:"#25c2a0",children:"GET"})," ",(0,s.jsx)(t.a,{href:"https://api.countrystatecity.in/v1/countries/%5Bciso%5D/states/%5Bsiso",children:"https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso"}),"]"]}),"\n",(0,s.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,s.jsx)(t.p,{children:"This api use API KEY as an authentication method."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(d,{color:"#1877F2",children:"X-CSCAPI-KEY"})]}),"\n",(0,s.jsx)(t.li,{children:"In: header"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Located in"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[ciso]"}),(0,s.jsx)(t.td,{children:"URL"}),(0,s.jsx)(t.td,{children:"ISO2 Code of Country"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(d,{color:"#d73232",children:"Required"})}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"[siso]"}),(0,s.jsx)(t.td,{children:"URL"}),(0,s.jsx)(t.td,{children:"ISO2 Code of State"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(d,{color:"#d73232",children:"Required"})}),(0,s.jsx)(t.td,{children:"string"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Code"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"Return a details of state"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"401"}),(0,s.jsx)(t.td,{children:"Unauthorized."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"404"}),(0,s.jsx)(t.td,{children:"Not Found."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"js",label:"Javascript",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n method: 'GET',\n headers: headers,\n redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states/MH\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));\n"})})}),(0,s.jsx)(i.A,{value:"php",label:"PHP",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title="countries-states-cities.php"',children:"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries/IN/states/MH',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    'X-CSCAPI-KEY: API_KEY'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"})})}),(0,s.jsx)(i.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",metastring:'title="countries-states-cities.py"',children:"import requests\n\nurl = \"https://api.countrystatecity.in/v1/countries/IN/states/MH\"\n\nheaders = {\n  'X-CSCAPI-KEY': 'API_KEY'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n"})})}),(0,s.jsx)(i.A,{value:"axios",label:"Axios",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:"var axios = require('axios');\n\nvar config = {\n  method: 'get',\n  url: 'https://api.countrystatecity.in/v1/countries/IN/states/MH',\n  headers: {\n    'X-CSCAPI-KEY': 'API_KEY'\n  }\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"})})}),(0,s.jsx)(i.A,{value:"dart",label:"Dart",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",metastring:'title="countries-states-cities.dart"',children:"var headers = {\n  'X-CSCAPI-KEY': 'API_KEY'\n};\n\nvar request = http.Request('GET', Uri.parse('https://api.countrystatecity.in/v1/countries/IN/states/MH'));\n\nrequest.headers.addAll(headers);\n\nhttp.StreamedResponse response = await request.send();\n\nif (response.statusCode == 200) {\n  print(await response.stream.bytesToString());\n} else {\n  print(response.reasonPhrase);\n}\n"})})}),(0,s.jsx)(i.A,{value:"jquery",label:"jQuery",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:'var settings = {\n  "url": "https://api.countrystatecity.in/v1/countries/IN/states/MH",\n  "method": "GET",\n  "headers": {\n    "X-CSCAPI-KEY": "API_KEY"\n  },\n};\n\n$.ajax(settings).done(function (response) {\n  console.log(response);\n});\n'})})}),(0,s.jsx)(i.A,{value:"go",label:"Go",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="countries-states-cities.go"',children:'url:="https://api.countrystatecity.in/v1/countries/IN/states/MH"\n\nclient := &http.Client{}\nreq, _ := http.NewRequest("GET", url, nil)\nreq.Header.Add("X-CSCAPI-KEY", "API_KEY")\nres, _ := client.Do(req)\ndefer res.Body.Close()\nbytes ,err := ioutil.ReadAll(res.Body)\nif err != nil {\n  fmt.Println(err.Error())\n}\nfmt.Println(string(bytes))\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"example-success-response",children:"Example Success Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "4008,",\n  "name": "Maharashtra,",\n  "country_id": "101,",\n  "country_code": "IN,",\n  "iso2": "MH"\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-error-response",children:"Example Error Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"example-not-found-response",children:"Example Not Found Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "error\'": "No State/Region found."\n}\n'})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>E});var s=n(6540),r=n(4164),a=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=x({queryString:n,groupId:r}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function E(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);