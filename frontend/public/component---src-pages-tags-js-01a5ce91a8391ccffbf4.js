(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,a){"use strict";a.r(t);var r=a(179),n=a(0),i=a.n(n),o=a(167),s=a.n(o),c=a(159),l=a(161),m=a(163),d=(a(148),a(149),function(e){var t=e.data,a=t.site.siteMetadata.title,r=t.allMarkdownRemark.distinct;return i.a.createElement(l.a,{title:a},i.a.createElement(m.a,{title:"Tags"}),i.a.createElement("header",{className:"tag-page-head"},i.a.createElement("h1",{className:"page-head-title"},"Tags(",r.length,")")),i.a.createElement("div",{className:"tag-container"},r.map(function(e){return i.a.createElement(c.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+s.a.kebabCase(e)},i.a.createElement("div",{className:"tag-item"},"#",e))})))});t.default=function(e){return i.a.createElement(c.b,{query:"3719143620",render:function(e){return i.a.createElement(d,{props:!0,data:e})},data:r})}},159:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(160);var l=n.a.createContext({}),m=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},161:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(159);t.a=function(e){var t=e.title,a=e.children,r=n.a.useState(!1),o=r[0],s=r[1];return n.a.createElement("div",{className:"site-wrapper "+(o?"site-head-open":"")},n.a.createElement("header",{className:"site-head"},n.a.createElement("div",{className:"site-head-container"},n.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!o)}},n.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},n.a.createElement("div",{className:"hamburger-box"},n.a.createElement("div",{className:"hamburger-inner"})))),n.a.createElement("nav",{id:"swup",class:"site-head-left"},n.a.createElement("ul",{className:"nav",role:"menu"},n.a.createElement("li",{className:"nav-about",role:"menuitem"},n.a.createElement(i.a,{to:"/about"},"Saiba +")),n.a.createElement("li",{className:"nav-elements",role:"menuitem"},n.a.createElement(i.a,{to:"/elements"},"Elements")),n.a.createElement("li",{className:"nav-tags",role:"menuitem"},n.a.createElement(i.a,{to:"/tags"},"Cardápio")))),n.a.createElement("div",{className:"site-head-center"},n.a.createElement(i.a,{className:"site-head-logo",to:"/"},t)),n.a.createElement("div",{className:"site-head-right"},n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.facebook.com",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),n.a.createElement("a",{href:"https://twitter.com",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Twitter"),n.a.createElement(i.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"),n.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))),n.a.createElement("main",{id:"site-main",className:"site-main"},n.a.createElement("div",{id:"swup",className:"transition-fade"},a)),n.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",n.a.createElement(i.a,{to:"/"},t)," — Development by "," ",n.a.createElement("a",{href:"https://github.com/ArikBartzadok/",target:"_blank",rel:"noopener noreferrer"},"Diogo Ferreira")))}},162:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var r=a(164),n=a(0),i=a.n(n),o=a(4),s=a.n(o),c=a(165),l=a.n(c);function m(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title,c=r.data.site,m=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras",author:"Diogo Ferreira"}}}}},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras"}},allMarkdownRemark:{distinct:["batata-frita","coca-cola","fanta","lanches","peixe-frito","porção","refrigerantes","x-tudo"]}}}}}]);
//# sourceMappingURL=component---src-pages-tags-js-01a5ce91a8391ccffbf4.js.map