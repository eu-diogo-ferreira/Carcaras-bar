(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(A,e,a){"use strict";a.r(e);a(34);var t=a(178),r=a(0),n=a.n(r),c=a(159),i=a(161),s=a(163),o=a(168),l=(a(148),a(149),function(A,e){var a=A.data,t=a.site.siteMetadata.title,r=a.allMarkdownRemark.edges,c=0;return n.a.createElement(i.a,{title:t},n.a.createElement(s.a,{title:"Posts",keywords:["devlog","blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&n.a.createElement("header",{className:"page-head"},n.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description)),n.a.createElement("div",{className:"post-feed"},r.map(function(A){var e=A.node;return c++,n.a.createElement(o.a,{key:e.fields.slug,count:c,node:e,postClass:"post"})})))});e.default=function(A){return n.a.createElement(c.b,{query:"2371347515",render:function(e){return n.a.createElement(l,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},159:function(A,e,a){"use strict";a.d(e,"b",function(){return l});var t=a(0),r=a.n(t),n=a(4),c=a.n(n),i=a(33),s=a.n(i);a.d(e,"a",function(){return s.a});a(160);var o=r.a.createContext({}),l=function(A){return r.a.createElement(o.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},160:function(A,e,a){var t;A.exports=(t=a(162))&&t.default||t},161:function(A,e,a){"use strict";var t=a(0),r=a.n(t),n=a(159);e.a=function(A){var e=A.title,a=A.children,t=r.a.useState(!1),c=t[0],i=t[1];return r.a.createElement("div",{className:"site-wrapper "+(c?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return i(!c)}},r.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))),r.a.createElement("nav",{id:"swup",class:"site-head-left"},r.a.createElement("ul",{className:"nav",role:"menu"},r.a.createElement("li",{className:"nav-about",role:"menuitem"},r.a.createElement(n.a,{to:"/about"},"Saiba +")),r.a.createElement("li",{className:"nav-elements",role:"menuitem"},r.a.createElement(n.a,{to:"/elements"},"Elements")),r.a.createElement("li",{className:"nav-tags",role:"menuitem"},r.a.createElement(n.a,{to:"/tags"},"Cardápio")))),r.a.createElement("div",{className:"site-head-center"},r.a.createElement(n.a,{className:"site-head-logo",to:"/"},e)),r.a.createElement("div",{className:"site-head-right"},r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.facebook.com",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),r.a.createElement("a",{href:"https://twitter.com",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Twitter"),r.a.createElement(n.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"),r.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},a)),r.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",r.a.createElement(n.a,{to:"/"},e)," — Development by "," ",r.a.createElement("a",{href:"https://github.com/ArikBartzadok/",target:"_blank",rel:"noopener noreferrer"},"Diogo Ferreira")))}},162:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),r=a.n(t),n=a(4),c=a.n(n),i=a(55),s=a(2),o=function(A){var e=A.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=o},163:function(A,e,a){"use strict";var t=a(164),r=a(0),n=a.n(r),c=a(4),i=a.n(c),s=a(165),o=a.n(s);function l(A){var e=A.description,a=A.lang,r=A.meta,c=A.keywords,i=A.title,s=t.data.site,l=e||s.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=l},164:function(A){A.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras",author:"Diogo Ferreira"}}}}},168:function(A,e,a){"use strict";var t=a(7),r=a.n(t),n=a(0),c=a.n(n),i=a(159),s=a(167),o=a.n(s),l=function(A){function e(){return A.apply(this,arguments)||this}return r()(e,A),e.prototype.render=function(){var A=this.props.tags;return c.a.createElement("div",{className:"post-card-tags"},A&&A.map(function(A){return c.a.createElement("span",{key:A},c.a.createElement(i.a,{className:"post-card-tag-link",key:A,to:"/tags/"+o.a.kebabCase(A)},"#",A)," ")}))},e}(n.Component),d=(e.a=function(A){return c.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},A.node.frontmatter.thumbnail?c.a.createElement(E,{props:A}):c.a.createElement(d,{props:A}))},function(A){function e(){return A.apply(this,arguments)||this}return r()(e,A),e.prototype.render=function(){var A=this.props.props;return c.a.createElement("div",{className:"post-card-content"},c.a.createElement("div",null,c.a.createElement(l,{tags:A.node.frontmatter.tags})),c.a.createElement("div",null,c.a.createElement(i.a,{to:A.node.fields.slug,className:"post-card-link"},c.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))),c.a.createElement("div",{className:"post-card-date"},A.node.frontmatter.date),c.a.createElement("div",{className:"post-card-body"},A.node.frontmatter.description||A.node.excerpt),c.a.createElement("div",null,c.a.createElement(i.a,{to:A.node.fields.slug,className:"post-card-link post-card-readmore"},A.node.frontmatter.description||A.node.excerpt?"Read more":null)))},e}(n.Component)),E=function(A){function e(){return A.apply(this,arguments)||this}return r()(e,A),e.prototype.render=function(){var A=this.props.props;return c.a.createElement(i.a,{to:A.node.fields.slug,className:"post-card-link"},c.a.createElement("div",{className:"post-card-content"},c.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug)))},e}(n.Component)},178:function(A){A.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras"}},allMarkdownRemark:{edges:[{node:{excerpt:"R$ 4.00",fields:{slug:"/bebidas/fanta_laranja/"},frontmatter:{date:"April 1, 2020",title:"Fanta laranja 350ml - R$4.00",description:"Refrigerante Fanta laranja de 350 ml - R$4.50",tags:["refrigerantes","fanta"],thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAADkElEQVQozz2Te0ybVQDFb+nK6GACFZENnFndCoaZFWQsOLaxjK2AmGHiXMCNQaYkOhejW5aJic+YsEyNMZQhtOBoKcjXB20ttKxQ6GsTW0TonI8MlOmMiYqUjj6/7/h9/GFy/7rJL+eec+4hUBD0EQwS6AnMAthyMSaGYxdc+XDswHgxnCVwlcK+Da4i7l4nhGYjR3URAiWBmoBKgnETRrbAJsG4FNN1+PoI3FJ4ZbGJ6vj0Sdw8CE853GUYyYUuEz0E3YQkBlNorZAxpGNkG2wFuCGDtwqzzZitR6CeHpcx1ofj3ooVyzO0txLeCpgfBJUCdTIHRyhBSMW7PyiCvRRT5Zhrhq8B06eYn87S7uMJbTo8WZCT1bdz/racYFz7YRXDVsg5VRKyRvGDvanBz7KZ0SLM1GO+BT9cwNxpzDViIAuTKYySn7hAmLa0UP/ef0xVcO+HZQdUhH05CV8VhjtEtC4fzkOYbcLPF5m772DhzJL29MvKgmFVHt4SRl4n9LWcuKEsPnYIznJQGVDz0csG1psOXR5suzH9HGYamRuNWDq/4juvoQLi1vdkzVsSrY8wHakRTVHcfQrzjbCXQCuCWrAO92dAtx1jezBRDn9DYqwOi2e7qbY35d5+pePD9zvdXU3ffrwxYqjFL5fgfx4WCaj/4b7N0IsxVYnrpTFX7aq9FoE6s+ZwXsvJVz+4Qhkm2vraFQNVWGylb7/CNgfzdlCZ6ONzgeGLFBjz4a6BtSRiO/YrJUXg2YjhqOJyc9enNdpPXvKrzmD+Rfjq4TuO8ScxvBVfbmY0AqaXzyoLYSqEszLueTpirvQrpH9ocvFdNe16IWo8EBp6nL7zGrPQipkGrkiLGPqHaF1qVCuImpIJVGkwSuA4EPE33OmWLFufcn4kXh4Q098cjd1uiS1cTPz2LvwnMFkG62MwZTO6tPDQhjX2qDewcAbMu2CWYLhw0VS11LN1xbH3Vs/Ohc70381Ff/qaoh7W0U6MPsr9LX0yPZgUVGSuylNjV1jP3XyMlOCrJ2Lm4qBx3z3bwb8oCX29IDxZfP/mkZC9gu7Phi0H5k0wJGGIG0JCzqPbeevDuMqKPwDbPnhq7tqP3dPvXp6SRZyyxNTh4Kj038si5nOC0SRucxTbKxvw+pa6CDo4mIdOAk0W3NXM9+dWAm+Ebp2L/tiyNrkn3C6KXyIY5kFHOE0NwbV1snNdUk7+A8EPSW9xNlufAAAAAElFTkSuQmCC",aspectRatio:1.2784810126582278,src:"/static/fe70f99105367e5751fd05a4522b9a19/bbb9c/fanta.png",srcSet:"/static/fe70f99105367e5751fd05a4522b9a19/fa754/fanta.png 340w,\n/static/fe70f99105367e5751fd05a4522b9a19/bbb9c/fanta.png 404w",sizes:"(max-width: 404px) 100vw, 404px"}}}}}},{node:{excerpt:"R$ 15.00",fields:{slug:"/porcoes/porcao_batata_frita/"},frontmatter:{date:"April 1, 2020",title:"Porção de batatas fritas - R$15.00",description:"Porção de Batatas fritas - R$15.00",tags:["porção","batata-frita"],thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAgP/2gAMAwEAAhADEAAAAbvHCIY5hpH/xAAbEAEAAgIDAAAAAAAAAAAAAAACAQMABBESE//aAAgBAQABBQKuuOJpOeBjBbKh29A9hl//xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/AYaSP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhES/9oACAECAQE/AW3ZiR//xAAfEAACAQIHAAAAAAAAAAAAAAAAAQISIRExMkFRUpH/2gAIAQEABj8Cxl4apXNyL7FVNxxTy5P/xAAcEAEAAgMAAwAAAAAAAAAAAAABACERMVFBYcH/2gAIAQEAAT8hWVbhwm3dzSH2t+TQ3nkxoseyvEvLM//aAAwDAQACAAMAAAAQ+M//xAAYEQACAwAAAAAAAAAAAAAAAAAAASExYf/aAAgBAwEBPxCSxlBH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxDComK0/8QAHBABAQACAwEBAAAAAAAAAAAAAREAMSFRsWGR/9oACAEBAAE/EOtMa/vsx0AUQJV8yMuBzbL90xrDZUOxbHpyazEjw3iauJUS5//Z",aspectRatio:1.5367965367965368,src:"/static/4075ae0c55bce64370950b6c5838f8e0/a8139/porcao_batata_frita.jpg",srcSet:"/static/4075ae0c55bce64370950b6c5838f8e0/467b3/porcao_batata_frita.jpg 340w,\n/static/4075ae0c55bce64370950b6c5838f8e0/e1ddd/porcao_batata_frita.jpg 680w,\n/static/4075ae0c55bce64370950b6c5838f8e0/a8139/porcao_batata_frita.jpg 710w",sizes:"(max-width: 710px) 100vw, 710px"}}}}}},{node:{excerpt:"R$ 4.50",fields:{slug:"/bebidas/coca_cola/"},frontmatter:{date:"April 1, 2020",title:"Coca Cola 350ml - R$4.50",description:"Refrigerante Coca Cola de 350 ml - R$4.50",tags:["refrigerantes","coca-cola"],thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAP/2gAMAwEAAhADEAAAActtRh2kLI//xAAaEAACAgMAAAAAAAAAAAAAAAABAhEyEiEx/9oACAEBAAEFAluavGSnZYlW7//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwETJv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAAICAwAAAAAAAAAAAAAAAAEQAAIRUXH/2gAIAQEABj8CEtjbPV//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMYH/2gAIAQEAAT8hSW8lDYJXyG3JSMuMPBhvc//aAAwDAQACAAMAAAAQcy//xAAWEQEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQMBAT8QNE0Lv//EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPxBNn//EAB4QAQACAgEFAAAAAAAAAAAAAAEAESExQVFhcYGh/9oACAEBAAE/EBY1ol7iPQRN7XX2Sg4VRveIj0cs+YMUBaq/sWlCoLjtP//Z",aspectRatio:1.5,src:"/static/d87d8f783ce6729ececf457ae39ace6d/10fb1/coca.jpg",srcSet:"/static/d87d8f783ce6729ececf457ae39ace6d/467b3/coca.jpg 340w,\n/static/d87d8f783ce6729ececf457ae39ace6d/e1ddd/coca.jpg 680w,\n/static/d87d8f783ce6729ececf457ae39ace6d/10fb1/coca.jpg 1360w,\n/static/d87d8f783ce6729ececf457ae39ace6d/fda29/coca.jpg 2040w,\n/static/d87d8f783ce6729ececf457ae39ace6d/c82f6/coca.jpg 2400w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"R$ 15.00",fields:{slug:"/lanches/x_tudo/"},frontmatter:{date:"April 1, 2020",title:"X-Tudo - R$15.00",description:"Lanche X-Tudo- R$ 15.00",tags:["lanches","x-tudo"],thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAcNiycrEWkf/xAAZEAEAAwEBAAAAAAAAAAAAAAACAAMSARH/2gAIAQEAAQUCVQ0aQp2qv3Sm3NKf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/AYmv/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAExESEiMsH/2gAIAQEABj8CXBY0LEs2ZLP/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMZFxgfH/2gAIAQEAAT8hSTUPYSM8l5iB1opLsum7k9sbs7j/2gAMAwEAAgADAAAAEEsP/8QAFxEBAQEBAAAAAAAAAAAAAAAAEQABUf/aAAgBAwEBPxBxSeZf/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBMVH/2gAIAQIBAT8QZWRof//EAB4QAQEAAgICAwAAAAAAAAAAAAERACExQVFxgZHx/9oACAEBAAE/EAex2pYeEvPrPhQBDu3vePVDoXT7zXiEiKk4z9jilU+VZ//Z",aspectRatio:1.7777777777777777,src:"/static/73a1bf1abc39577db325174d7ea9f0f6/0a89a/lanche.jpg",srcSet:"/static/73a1bf1abc39577db325174d7ea9f0f6/467b3/lanche.jpg 340w,\n/static/73a1bf1abc39577db325174d7ea9f0f6/e1ddd/lanche.jpg 680w,\n/static/73a1bf1abc39577db325174d7ea9f0f6/0a89a/lanche.jpg 960w",sizes:"(max-width: 960px) 100vw, 960px"}}}}}},{node:{excerpt:"R$ 15.00",fields:{slug:"/porcoes/porcao_peixe/"},frontmatter:{date:"April 1, 2020",title:"Porção de Peixe frito - R$15.00",description:"Porção de Batatas fritas - R$15.00",tags:["porção","peixe-frito"],thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAFs3W5LzChj/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIRABL/2gAIAQEAAQUCa43XFzyZwzcn/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAESMWH/2gAIAQMBAT8BTVE8P//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwFEbG//xAAaEAACAgMAAAAAAAAAAAAAAAAAERAxEiFB/9oACAEBAAY/At1FHDJCP//EABoQAAMBAQEBAAAAAAAAAAAAAAABETEhUXH/2gAIAQEAAT8h2TyrfBpUro4fUvwSmMswaOz5piKf/9oADAMBAAIAAwAAABB0P//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxAwqzP/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8Q3UObf//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVHR/9oACAEBAAE/ECeSAtdPc7h3dJAWsX1mQftn5LJ1QOqjQVLOiLU4rV7n/9k=",aspectRatio:1.5367965367965368,src:"/static/b1ce5525a87bcf0f4be38909c0f8318c/a8139/porcao_peixe.jpg",srcSet:"/static/b1ce5525a87bcf0f4be38909c0f8318c/467b3/porcao_peixe.jpg 340w,\n/static/b1ce5525a87bcf0f4be38909c0f8318c/e1ddd/porcao_peixe.jpg 680w,\n/static/b1ce5525a87bcf0f4be38909c0f8318c/a8139/porcao_peixe.jpg 710w",sizes:"(max-width: 710px) 100vw, 710px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c410d90d83b503590aab.js.map