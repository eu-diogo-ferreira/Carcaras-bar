(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var r=a(7),n=a.n(r),o=a(0),s=a.n(o),i=a(162),l=a(164),c=a(170),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=this.props.pageContext.tag,a=this.props.data.allMarkdownRemark.edges,r=this.props.data.site.siteMetadata.title;return s.a.createElement(i.a,{location:this.props.location,title:r},s.a.createElement(l.a,{title:"#"+(t.charAt(0).toUpperCase()+t.slice(1)),keywords:[""+t,"blog","gatsby","javascript","react"]}),s.a.createElement("header",{className:"tag-page-head"},s.a.createElement("h1",{className:"page-head-title"},"#",t,"(",e.data.allMarkdownRemark.totalCount,")")),s.a.createElement("div",{className:"post-feed"},a.map(function(e){var t=e.node;return s.a.createElement(c.a,{key:t.fields.slug,node:t,postClass:"post"})})))},t}(s.a.Component);t.default=m;var d="4070167462"},160:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),o=a(4),s=a.n(o),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(161);var c=n.a.createContext({}),m=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,a){var r;e.exports=(r=a(163))&&r.default||r},162:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(160);t.a=function(e){var t=e.title,a=e.children,r=n.a.useState(!1),s=r[0],i=r[1];return n.a.createElement("div",{className:"site-wrapper "+(s?"site-head-open":"")},n.a.createElement("header",{className:"site-head"},n.a.createElement("div",{className:"site-head-container"},n.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return i(!s)}},n.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},n.a.createElement("div",{className:"hamburger-box"},n.a.createElement("div",{className:"hamburger-inner"})))),n.a.createElement("nav",{id:"swup",class:"site-head-left"},n.a.createElement("ul",{className:"nav",role:"menu"},n.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},n.a.createElement(o.a,{to:"/"},"Início")),n.a.createElement("li",{className:"nav-tags",role:"menuitem"},n.a.createElement(o.a,{to:"/tags"},"Cardápio")),n.a.createElement("li",{className:"nav-elements",role:"menuitem"},n.a.createElement(o.a,{to:"/blog"},"Blog")),n.a.createElement("li",{className:"nav-about",role:"menuitem"},n.a.createElement(o.a,{to:"/about"},"Saiba +")))),n.a.createElement("div",{className:"site-head-center"},n.a.createElement(o.a,{className:"site-head-logo",to:"/"},t)),n.a.createElement("div",{className:"site-head-right"},n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5519991621576&text=Olá,%20eu%20gostaria%20de%20fazer%20um%20pedido",title:"Whatsapp",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{class:"whatts"},"Whatsapp")),n.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),n.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))),n.a.createElement("main",{id:"site-main",className:"site-main"},n.a.createElement("div",{id:"swup",className:"transition-fade"},a)),n.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",n.a.createElement(o.a,{to:"/"},t)," — Development by "," ",n.a.createElement("a",{href:"https://diogodeveloper.netlify.com/",target:"_blank",rel:"noopener noreferrer"},"Diogo Ferreira")))}},163:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),o=a(4),s=a.n(o),i=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var r=a(165),n=a(0),o=a.n(n),s=a(4),i=a.n(s),l=a(166),c=a.n(l);function m(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,i=e.title,l=r.data.site,m=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"pt-br",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras",author:"Diogo Ferreira"}}}}},170:function(e,t,a){"use strict";var r=a(7),n=a.n(r),o=a(0),s=a.n(o),i=a(160),l=a(168),c=a.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.tags;return s.a.createElement("div",{className:"post-card-tags"},e&&e.map(function(e){return s.a.createElement("span",{key:e},s.a.createElement(i.a,{className:"post-card-tag-link",key:e,to:"/tags/"+c.a.kebabCase(e)},"#",e)," ")}))},t}(o.Component),d=(t.a=function(e){return s.a.createElement("article",{className:"post-card "+(e.count%3==0&&"post-card-large")+" "+e.postClass+" "+(e.node.frontmatter.thumbnail?"with-image":"no-image"),style:e.node.frontmatter.thumbnail&&{backgroundImage:"url("+e.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},e.node.frontmatter.thumbnail?s.a.createElement(p,{props:e}):s.a.createElement(d,{props:e}))},function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.props;return s.a.createElement("div",{className:"post-card-content"},s.a.createElement("div",null,s.a.createElement(m,{tags:e.node.frontmatter.tags})),s.a.createElement("div",null,s.a.createElement(i.a,{to:e.node.fields.slug,className:"post-card-link"},s.a.createElement("h2",{className:"post-card-title"},e.node.frontmatter.title||e.node.fields.slug))),s.a.createElement("div",{className:"post-card-date"},e.node.frontmatter.date),s.a.createElement("div",{className:"post-card-body"},e.node.frontmatter.description||e.node.excerpt),s.a.createElement("div",null,s.a.createElement(i.a,{to:e.node.fields.slug,className:"post-card-link post-card-readmore"},e.node.frontmatter.description||e.node.excerpt?"Read more":null)))},t}(o.Component)),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.props;return s.a.createElement(i.a,{to:e.node.fields.slug,className:"post-card-link"},s.a.createElement("div",{className:"post-card-content"},s.a.createElement("h2",{className:"post-card-title"},e.node.frontmatter.title||e.node.fields.slug)))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-6daff36a0bbc8c62b2c1.js.map