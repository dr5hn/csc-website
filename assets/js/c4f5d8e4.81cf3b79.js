(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[195],{5162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},5488:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),s=n(6010),o=n(2389),l=n(7392),i=n(7094),c=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var E=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==E&&!y.some((function(e){return e.value===E})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.U)(),_=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(E),C=w[0],T=w[1],P=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var Z=_[g];null!=Z&&Z!==C&&y.some((function(e){return e.value===Z}))&&T(Z)}var z=function(e){var t=e.currentTarget,n=P.indexOf(t),r=y[n].value;r!==C&&(S(t),T(r),null!=g&&N(g,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=P.indexOf(e.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var s,o=P.indexOf(e.currentTarget)-1;n=null!=(s=P[o])?s:P[P.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:z,onClick:z},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),a=n(4669),s=n(2263),o="main_dzIC",l=n(7410),i=n(7462),c=n(3746),u=n(2949),p="code_wkJ7";var d=function(e){var t=(0,s.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,a=(0,r.useState)(!1),o=a[0],l=a[1];(0,r.useEffect)((function(){l(!0)}),[]);var d=(0,u.I)(),m=d.colorMode,f=(d.setColorMode,n.theme),g=n.darkTheme||f,h="dark"===m?g:f,v=e.language,y=void 0===v?"rust":v,b=e.code;return r.createElement(c.ZP,(0,i.Z)({},c.lG,{code:b,language:y,key:o,theme:h}),(function(e){var t=e.className,n=e.style,a=e.tokens,s=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{className:t+" "+p,style:n},a.map((function(e,t){return r.createElement("div",s({line:e,key:t}),e.map((function(e,t){return r.createElement("span",o({token:e,key:t}))})))})))}))},m=n(5488),f=n(5162),g=n(5697),h="headline_gSTO",v="category_BK2h",y="title_g1jT",b="subtitle_Unu5";function E(e){var t=e.category,n=e.title,a=e.subtitle,s=e.offset;return r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--"+(12-s)+" col--offset-"+s},r.createElement("div",{className:h},t&&r.createElement("span",{className:v},t),n&&r.createElement("h2",{className:y},n),a&&r.createElement("h3",{className:b},a))))}E.propTypes={category:g.PropTypes.string,title:g.PropTypes.string,subtitle:g.PropTypes.string,offset:g.PropTypes.number},E.defaultProps={offset:0};var k=E,_=[{label:"Countries",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n    "},{label:"States of Country",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\n// Pass Country Code -- Eg: Country Code : IN\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));"},{label:"Cities of State",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\n// Pass Country & State Code -- Eg: Country Code : IN & State Code : MH\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states/MH/cities\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));"}],N={examples:"examples_duO3"};var w=function(){return r.createElement(r.Fragment,null,_&&_.length&&r.createElement("section",{id:"examples",className:N.examples},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--10 col--offset-1"},r.createElement(k,{category:"Examples",title:"Quick snippets to get started with Country State City API"}),r.createElement(m.Z,{defaultValue:_[0].label,values:_.map((function(e,t){return{label:e.label,value:e.label}})),className:N.tabs},_.map((function(e,t){return r.createElement(f.Z,{key:t,value:e.label},r.createElement(d,(0,i.Z)({key:t},e)))}))))))))},C=n(6010),T=n(4996),P="features_ET2H",S="feature_lArP",Z="header_vAHs",z="icon_LU_H",I="title_heH4",O=[{title:r.createElement(r.Fragment,null,"Countries"),icon:"img/features/countries-w.svg",iconDark:"img/features/countries-b.svg",description:r.createElement(r.Fragment,null,"Get a list of countries with ISO2, ISO3, Phonecode, Capital, Currency, Flag etc.")},{title:r.createElement(r.Fragment,null,"States"),icon:"img/features/states-w.svg",iconDark:"img/features/states-b.svg",description:r.createElement(r.Fragment,null,"Get a list of states with ISO2 code and attached to its belonging country code.")},{title:r.createElement(r.Fragment,null,"Cities"),icon:"img/features/cities-w.svg",iconDark:"img/features/cities-b.svg",description:r.createElement(r.Fragment,null,"Get a list of cities attached with state and country code, longitude and latitude information.")}];function x(e){var t=e.icon,n=e.iconDark,a=e.title,s=e.description,o=(0,u.I)(),l=o.colorMode;o.setColorMode;return r.createElement("div",{className:(0,C.Z)("col col--4",S)},r.createElement("div",{className:"item"},t&&r.createElement("div",{className:z},r.createElement("img",{src:"dark"===l?(0,T.Z)(n):(0,T.Z)(t),alt:a,width:64})),r.createElement("div",{className:Z},r.createElement("h2",{className:I},a)),r.createElement("p",null,s)))}var A=function(){return r.createElement(r.Fragment,null,O&&O.length&&r.createElement("section",{id:"features",className:P},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--11 col--offset-1"},r.createElement("div",{className:"row"},O.map((function(e,t){return r.createElement(x,(0,i.Z)({key:t},e))}))))))))},D=n(9960),F={banner:"banner_TLY1",logo:"logo_s_8U",buttons:"buttons_C3jr",subtitle:"subtitle_IB6R",githubStars:"githubStars_Ga8m",githubStarsButton:"githubStarsButton_YzS6"};var L=function(){var e=(0,s.Z)().siteConfig,t=void 0===e?{}:e;return r.createElement("header",{id:"hero",className:(0,C.Z)("hero",F.banner)},r.createElement("div",{className:"container"},r.createElement("img",{src:(0,T.Z)("img/world.svg"),alt:"Logo",className:F.logo}),r.createElement("h1",{className:"hero__title"},t.title),r.createElement("p",{className:(0,C.Z)("hero__subtitle",F.subtitle)},t.tagline),r.createElement("div",{className:F.buttons},r.createElement(D.Z,{className:(0,C.Z)("button button--primary button--lg",F.getStarted),to:(0,T.Z)("docs/")},"Get Started")),r.createElement("div",{className:(0,C.Z)(F.buttons,F.githubStars)},r.createElement("iframe",{className:F.githubStarsButton,src:"https://ghbtns.com/github-btn.html?user=dr5hn&repo=countries-states-cities-database&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))};(void 0!==n.g?n.g:window).Prism=l.Z,n(767);var j=function(){var e=(0,s.Z)().siteConfig,t=(void 0===e?{}:e).tagline;return r.createElement(a.Z,{description:t},r.createElement(L,null),r.createElement("main",{className:o},r.createElement(A,null),r.createElement(w,null)))}},3746:function(e,t,n){"use strict";n.d(t,{ZP:function(){return g},lG:function(){return o}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s=n(7294),o={Prism:r.Z,theme:a};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,s=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(s.style=o.plain),void 0!==a&&(s.style=void 0!==s.style?i({},s.style,a):a),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return s[n[0]];var o=r?{display:"inline-block"}:{},l=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[o].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,s=e.token,o=i({},m(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),l(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var s=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,s=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],s=0,o=0,l=[],i=[l];o>-1;){for(;(s=r[o]++)<a[o];){var d=void 0,m=t[o],f=n[o][s];if("string"==typeof f?(m=o>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var g=d.split(c),h=g.length;l.push({types:m,content:g[0]});for(var v=1;v<h;v++)u(l),i.push(l=[]),l.push({types:m,content:g[v]})}else o++,t.push(m),n.push(d),r.push(0),a.push(d.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return u(l),i}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(s.Component),g=f},767:function(){!function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,(function(){return t}));t=t.replace(/<self>/g,(function(){return/[^\s\S]/.source})),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(Prism)}}]);