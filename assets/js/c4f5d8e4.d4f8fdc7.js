(self.webpackChunkcountry_stat_city_api_docs=self.webpackChunkcountry_stat_city_api_docs||[]).push([[195],{2360:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),o="tabItem_OmH5";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),s=n(7392),l=n(7094),i=n(2466),c=n(6010),u="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,m=e.block,f=e.defaultValue,g=e.values,h=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),E=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,l.U)(),N=_.tabGroupChoices,w=_.setTabGroupChoices,C=(0,r.useState)(k),T=C[0],S=C[1],P=[],Z=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=N[h];null!=O&&O!==T&&b.some((function(e){return e.value===O}))&&S(O)}var z=function(e){var t=e.currentTarget,n=P.indexOf(t),a=b[n].value;a!==T&&(Z(t),S(a),null!=h&&w(h,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,c.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:z,onClick:z},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},990:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var a=n(7294),r=n(2899),o=n(2263),s="main_dzIC",l=n(7410),i=n(7462),c=n(3746),u=n(2949),p="code_wkJ7";var d=function(e){var t=(0,o.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,r=(0,a.useState)(!1),s=r[0],l=r[1];(0,a.useEffect)((function(){l(!0)}),[]);var d=(0,u.I)(),m=d.colorMode,f=(d.setColorMode,n.theme),g=n.darkTheme||f,h="dark"===m?g:f,v=e.language,y=void 0===v?"rust":v,b=e.code;return a.createElement(c.ZP,(0,i.Z)({},c.lG,{code:b,language:y,key:s,theme:h}),(function(e){var t=e.className,n=e.style,r=e.tokens,o=e.getLineProps,s=e.getTokenProps;return a.createElement("pre",{className:t+" "+p,style:n},r.map((function(e,t){return a.createElement("div",o({line:e,key:t}),e.map((function(e,t){return a.createElement("span",s({token:e,key:t}))})))})))}))},m=n(9877),f=n(2360),g=n(5697),h="headline_gSTO",v="category_BK2h",y="title_g1jT",b="subtitle_Unu5";function E(e){var t=e.category,n=e.title,r=e.subtitle,o=e.offset;return a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--"+(12-o)+" col--offset-"+o},a.createElement("div",{className:h},t&&a.createElement("span",{className:v},t),n&&a.createElement("h2",{className:y},n),r&&a.createElement("h3",{className:b},r))))}E.propTypes={category:g.PropTypes.string,title:g.PropTypes.string,subtitle:g.PropTypes.string,offset:g.PropTypes.number},E.defaultProps={offset:0};var k=E,_=[{label:"Countries",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\nfetch(\"https://api.countrystatecity.in/v1/countries\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n    "},{label:"States of Country",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\n// Pass Country Code -- Eg: Country Code : IN\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));"},{label:"Cities of State",code:"var headers = new Headers();\nheaders.append(\"X-CSCAPI-KEY\", \"API_KEY\");\n\nvar requestOptions = {\n  method: 'GET',\n  headers: headers,\n  redirect: 'follow'\n};\n\n// Pass Country & State Code -- Eg: Country Code : IN & State Code : MH\nfetch(\"https://api.countrystatecity.in/v1/countries/IN/states/MH/cities\", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));"}],N={examples:"examples_duO3"};var w=function(){return a.createElement(a.Fragment,null,_&&_.length&&a.createElement("section",{id:"examples",className:N.examples},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--10 col--offset-1"},a.createElement(k,{category:"Examples",title:"Quick snippets to get started with Country State City API"}),a.createElement(m.Z,{defaultValue:_[0].label,values:_.map((function(e,t){return{label:e.label,value:e.label}})),className:N.tabs},_.map((function(e,t){return a.createElement(f.Z,{key:t,value:e.label},a.createElement(d,(0,i.Z)({key:t},e)))}))))))))},C=n(6010),T=n(4996),S="features_ET2H",P="feature_lArP",Z="header_vAHs",O="icon_LU_H",z="title_heH4",I=[{title:a.createElement(a.Fragment,null,"Countries"),icon:"img/features/countries-w.svg",iconDark:"img/features/countries-b.svg",description:a.createElement(a.Fragment,null,"Get a list of countries with ISO2, ISO3, Phonecode, Capital, Currency, Flag etc.")},{title:a.createElement(a.Fragment,null,"States"),icon:"img/features/states-w.svg",iconDark:"img/features/states-b.svg",description:a.createElement(a.Fragment,null,"Get a list of states with ISO2 code and attached to its belonging country code.")},{title:a.createElement(a.Fragment,null,"Cities"),icon:"img/features/cities-w.svg",iconDark:"img/features/cities-b.svg",description:a.createElement(a.Fragment,null,"Get a list of cities attached with state and country code, longitude and latitude information.")}];function x(e){var t=e.icon,n=e.iconDark,r=e.title,o=e.description,s=(0,u.I)(),l=s.colorMode;s.setColorMode;return a.createElement("div",{className:(0,C.Z)("col col--4",P)},a.createElement("div",{className:"item"},t&&a.createElement("div",{className:O},a.createElement("img",{src:"dark"===l?(0,T.Z)(n):(0,T.Z)(t),alt:r,width:64})),a.createElement("div",{className:Z},a.createElement("h2",{className:z},r)),a.createElement("p",null,o)))}var A=function(){return a.createElement(a.Fragment,null,I&&I.length&&a.createElement("section",{id:"features",className:S},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--11 col--offset-1"},a.createElement("div",{className:"row"},I.map((function(e,t){return a.createElement(x,(0,i.Z)({key:t},e))}))))))))},D=n(9960),F={banner:"banner_TLY1",logo:"logo_s_8U",buttons:"buttons_C3jr",subtitle:"subtitle_IB6R",githubStars:"githubStars_Ga8m",githubStarsButton:"githubStarsButton_YzS6"};var L=function(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e;return a.createElement("header",{id:"hero",className:(0,C.Z)("hero",F.banner)},a.createElement("div",{className:"container"},a.createElement("img",{src:(0,T.Z)("img/world.svg"),alt:"Logo",className:F.logo}),a.createElement("h1",{className:"hero__title"},t.title),a.createElement("p",{className:(0,C.Z)("hero__subtitle",F.subtitle)},t.tagline),a.createElement("div",{className:F.buttons},a.createElement(D.Z,{className:(0,C.Z)("button button--primary button--lg",F.getStarted),to:(0,T.Z)("docs/")},"Get Started")),a.createElement("div",{className:(0,C.Z)(F.buttons,F.githubStars)},a.createElement("iframe",{className:F.githubStarsButton,src:"https://ghbtns.com/github-btn.html?user=dr5hn&repo=countries-states-cities-database&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))};(void 0!==n.g?n.g:window).Prism=l.default,n(767);var j=function(){var e=(0,o.Z)().siteConfig,t=(void 0===e?{}:e).tagline;return a.createElement(r.Z,{description:t},a.createElement(L,null),a.createElement("main",{className:s},a.createElement(A,null),a.createElement(w,null)))}},3746:function(e,t,n){"use strict";n.d(t,{ZP:function(){return g},lG:function(){return s}});var a=n(7410),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(7294),s={Prism:a.default,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=a[s]++)<r[s];){var d=void 0,m=t[s],f=n[s][o];if("string"==typeof f?(m=s>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var g=d.split(c),h=g.length;l.push({types:m,content:g[0]});for(var v=1;v<h;v++)u(l),i.push(l=[]),l.push({types:m,content:g[v]})}else s++,t.push(m),n.push(d),a.push(0),r.push(d.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),g=f},767:function(){!function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,(function(){return t}));t=t.replace(/<self>/g,(function(){return/[^\s\S]/.source})),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string}(Prism)}}]);