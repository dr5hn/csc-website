"use strict";(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[708],{5328:(e,n,t)=>{t.r(n),t.d(n,{Highlight:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=t(4848),r=t(8453),a=t(1470),i=t(9365);const l={id:"country",title:"Get country details from ISO2 code",sidebar_label:"Country Details"},o=void 0,c={id:"api/country",title:"Get country details from ISO2 code",description:"GET https://api.countrystatecity.in/v1/countries/[ciso]",source:"@site/docs/api/country.md",sourceDirName:"api",slug:"/api/country",permalink:"/docs/api/country",draft:!1,unlisted:!1,editUrl:"https://github.com/dr5hn/csc-website/edit/main/docs/api/country.md",tags:[],version:"current",lastUpdatedAt:1729347054e3,frontMatter:{id:"country",title:"Get country details from ISO2 code",sidebar_label:"Country Details"},sidebar:"docs",previous:{title:"All Countries",permalink:"/docs/api/all-countries"},next:{title:"All States",permalink:"/docs/api/all-states"}},u={},d=({children:e,color:n})=>(0,s.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e}),p=[{value:"Security",id:"security",level:2},{value:"Request Parameters",id:"request-parameters",level:2},{value:"Response",id:"response",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Example Success Response",id:"example-success-response",level:2},{value:"Example Error Response",id:"example-error-response",level:2},{value:"Example Not Found Response",id:"example-not-found-response",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(d,{color:"#25c2a0",children:"GET"})," ",(0,s.jsx)(n.a,{href:"https://api.countrystatecity.in/v1/countries/%5Bciso",children:"https://api.countrystatecity.in/v1/countries/[ciso"}),"]"]}),"\n",(0,s.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,s.jsx)(n.p,{children:"This api use API KEY as an authentication method."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Name: ",(0,s.jsx)(d,{color:"#1877F2",children:"X-CSCAPI-KEY"})]}),"\n",(0,s.jsx)(n.li,{children:"In: header"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Located in"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Required"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ciso]"}),(0,s.jsx)(n.td,{children:"URL"}),(0,s.jsx)(n.td,{children:"ISO2 Code of Country"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(d,{color:"#d73232",children:"Required"})}),(0,s.jsx)(n.td,{children:"string"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"200"}),(0,s.jsx)(n.td,{children:"Return a details of country"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Unauthorized."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Not Found."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"js",label:"Javascript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n method: 'GET',\n headers: headers,\n redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries/IN\", requestOptions)\n.then(response => response.text())\n.then(result => console.log(result))\n.catch(error => console.log('error', error));\n"})})}),(0,s.jsx)(i.A,{value:"php",label:"PHP",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",metastring:'title="countries-states-cities.php"',children:"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries/IN',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_HTTPHEADER => array(\n    'X-CSCAPI-KEY: API_KEY'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"})})}),(0,s.jsx)(i.A,{value:"py",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",metastring:'title="countries-states-cities.py"',children:"import requests\n\nurl = \"https://api.countrystatecity.in/v1/countries/IN\"\n\nheaders = {\n  'X-CSCAPI-KEY': 'API_KEY'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n"})})}),(0,s.jsx)(i.A,{value:"axios",label:"Axios",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:"var axios = require('axios');\n\nvar config = {\n  method: 'get',\n  url: 'https://api.countrystatecity.in/v1/countries/IN',\n  headers: {\n    'X-CSCAPI-KEY': 'API_KEY'\n  }\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"})})}),(0,s.jsx)(i.A,{value:"dart",label:"Dart",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dart",metastring:'title="countries-states-cities.dart"',children:"var headers = {\n  'X-CSCAPI-KEY': 'API_KEY'\n};\n\nvar request = http.Request('GET', Uri.parse('https://api.countrystatecity.in/v1/countries/IN'));\n\nrequest.headers.addAll(headers);\n\nhttp.StreamedResponse response = await request.send();\n\nif (response.statusCode == 200) {\n  print(await response.stream.bytesToString());\n} else {\n  print(response.reasonPhrase);\n}\n"})})}),(0,s.jsx)(i.A,{value:"jquery",label:"jQuery",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="countries-states-cities.js"',children:'var settings = {\n  "url": "https://api.countrystatecity.in/v1/countries/IN",\n  "method": "GET",\n  "headers": {\n    "X-CSCAPI-KEY": "API_KEY"\n  },\n};\n\n$.ajax(settings).done(function (response) {\n  console.log(response);\n});\n'})})}),(0,s.jsx)(i.A,{value:"go",label:"Go",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'title="countries-states-cities.go"',children:'url:="https://api.countrystatecity.in/v1/countries/IN"\n\nclient := &http.Client{}\nreq, _ := http.NewRequest("GET", url, nil)\nreq.Header.Add("X-CSCAPI-KEY", "API_KEY")\nres, _ := client.Do(req)\ndefer res.Body.Close()\nbytes ,err := ioutil.ReadAll(res.Body)\nif err != nil {\n  fmt.Println(err.Error())\n}\nfmt.Println(string(bytes))\n'})})}),(0,s.jsx)(i.A,{value:"ruby",label:"Ruby",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",metastring:'title="countries-states-cities.ruby"',children:"require 'net/http'\nrequire 'json'\n\nuri = URI('https://api.countrystatecity.in/v1/countries/IN')\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nrequest = Net::HTTP::Get.new(uri)\nrequest['X-CSCAPI-KEY'] = 'API_KEY'\n\nresponse = http.request(request)\ncountries = JSON.parse(response.body)\np countries\n"})})}),(0,s.jsx)(i.A,{value:"csharp",label:"C#",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="countries-states-cities.cs"',children:'using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main(string[] args)\n    {\n        var client = new HttpClient();\n        var request = new HttpRequestMessage\n        {\n            Method = HttpMethod.Get,\n            RequestUri = new Uri("https://api.countrystatecity.in/v1/countries/IN"),\n            Headers =\n            {\n                { "X-CSCAPI-KEY", "API_KEY" },\n            },\n        };\n        using (var response = await client.SendAsync(request))\n        {\n            response.EnsureSuccessStatusCode();\n            var body = await response.Content.ReadAsStringAsync();\n            Console.WriteLine(body);\n        }\n    }\n}\n'})})}),(0,s.jsx)(i.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="countries-states-cities.java"',children:'import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create("https://api.countrystatecity.in/v1/countries/IN"))\n            .header("X-CSCAPI-KEY", "API_KEY")\n            .build();\n\n        HttpResponse<String> response = client.send(request,\n            HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n    }\n}\n'})})}),(0,s.jsx)(i.A,{value:"swift",label:"Swift",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",metastring:'title="countries-states-cities.swift"',children:'import Foundation\n\nlet headers = [\n  "X-CSCAPI-KEY": "API_KEY"\n]\n\nlet request = NSMutableURLRequest(url: NSURL(string: "https://api.countrystatecity.in/v1/countries/IN")! as URL,\n    cachePolicy: .useProtocolCachePolicy,\ntimeoutInterval: 10.0)\nrequest.httpMethod = "GET"\nrequest.allHTTPHeaderFields = headers\n\nlet session = URLSession.shared\nlet dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in\n  if (error != nil) {\n    print(error)\n  } else {\n    let httpResponse = response as? HTTPURLResponse\n    print(httpResponse)\n  }\n})\n\ndataTask.resume()\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"example-success-response",children:"Example Success Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": 101,\n    "name": "India",\n    "iso3": "IND",\n    "numeric_code": "356",\n    "iso2": "IN",\n    "phonecode": "91",\n    "capital": "New Delhi",\n    "currency": "INR",\n    "currency_name": "Indian rupee",\n    "currency_symbol": "\u20b9",\n    "tld": ".in",\n    "native": "\u092d\u093e\u0930\u0924",\n    "region": "Asia",\n    "region_id": 3,\n    "subregion": "Southern Asia",\n    "subregion_id": 14,\n    "nationality": "Indian",\n    "timezones": "[{\\"zoneName\\":\\"Asia/Kolkata\\",\\"gmtOffset\\":19800,\\"gmtOffsetName\\":\\"UTC+05:30\\",\\"abbreviation\\":\\"IST\\",\\"tzName\\":\\"Indian Standard Time\\"}]",\n    "translations": "{\\"kr\\":\\"\uc778\ub3c4\\",\\"pt-BR\\":\\"\xcdndia\\",\\"pt\\":\\"\xcdndia\\",\\"nl\\":\\"India\\",\\"hr\\":\\"Indija\\",\\"fa\\":\\"\u0647\u0646\u062f\\",\\"de\\":\\"Indien\\",\\"es\\":\\"India\\",\\"fr\\":\\"Inde\\",\\"ja\\":\\"\u30a4\u30f3\u30c9\\",\\"it\\":\\"India\\",\\"cn\\":\\"\u5370\u5ea6\\",\\"tr\\":\\"Hindistan\\"}",\n    "latitude": "20.00000000",\n    "longitude": "77.00000000",\n    "emoji": "\ud83c\uddee\ud83c\uddf3",\n    "emojiU": "U+1F1EE U+1F1F3"\n  }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-error-response",children:"Example Error Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "error\'": "Unauthorized. You shouldn\'t be here."\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-not-found-response",children:"Example Not Found Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "error\'": "Country not found."\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var a=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>I});var s=t(6540),r=t(4164),a=t(3104),i=t(6347),l=t(205),o=t(7485),c=t(1682),u=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),y=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==s&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function f(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function I(e){const n=(0,j.A)();return(0,g.jsx)(f,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);