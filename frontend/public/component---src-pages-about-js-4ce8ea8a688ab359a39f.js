(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(e,t,a){"use strict";a.r(t);a(34);var r=a(178),i=a(0),n=a.n(i),s=a(160),o=a(167),l=a.n(o),c=a(162),d=a(164),u=(a(148),a(149),function(e,t){var a=e.data,r=a.site.siteMetadata.title;return n.a.createElement(c.a,{title:r},n.a.createElement(d.a,{title:"Saiba +",keywords:["carcaras","história","cerveja","lanchonete","bar","chopp"]}),n.a.createElement("article",{className:"post-content page-template no-image"},n.a.createElement("div",{className:"post-content-body"},n.a.createElement("h2",{id:"clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-"},"Esta página será responsável por contar a história do Carcarás Bar"),n.a.createElement("figure",{className:"kg-card kg-image-card kg-width-full"},n.a.createElement(l.a,{fluid:a.benchAccounting.childImageSharp.fluid,className:"kg-image"}),n.a.createElement("figcaption",null,"description")),n.a.createElement("h3",{id:"dynamic-styles"},"Subtítulo"),n.a.createElement("p",null,"um pouco da história"),n.a.createElement("p",null,"parágrafo"),n.a.createElement("p",null,"parágrafo"))))});t.default=function(e){return n.a.createElement(s.b,{query:"1426368524",render:function(t){return n.a.createElement(u,Object.assign({location:e.location,data:t},e))},data:r})}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(161);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},161:function(e,t,a){var r;e.exports=(r=a(163))&&r.default||r},162:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(160);t.a=function(e){var t=e.title,a=e.children,r=i.a.useState(!1),s=r[0],o=r[1];return i.a.createElement("div",{className:"site-wrapper "+(s?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return o(!s)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"})))),i.a.createElement("nav",{id:"swup",class:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},i.a.createElement(n.a,{to:"/"},"Início")),i.a.createElement("li",{className:"nav-tags",role:"menuitem"},i.a.createElement(n.a,{to:"/tags"},"Cardápio")),i.a.createElement("li",{className:"nav-elements",role:"menuitem"},i.a.createElement(n.a,{to:"/blog"},"Blog")),i.a.createElement("li",{className:"nav-about",role:"menuitem"},i.a.createElement(n.a,{to:"/about"},"Saiba +")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.a,{className:"site-head-logo",to:"/"},t)),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=5519991621576&text=Olá,%20eu%20gostaria%20de%20fazer%20um%20pedido",title:"Whatsapp",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{class:"whatts"},"Whatsapp")),i.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),i.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},a)),i.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",i.a.createElement(n.a,{to:"/"},t)," — Development by "," ",i.a.createElement("a",{href:"https://diogodeveloper.netlify.com/",target:"_blank",rel:"noopener noreferrer"},"Diogo Ferreira")))}},163:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var r=a(165),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"pt-br",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras",author:"Diogo Ferreira"}}}}},167:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,S=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:w?1:0,transition:S?"opacity "+E+"ms":"none"},o),j="boolean"==typeof b?"lightgray":b,R={transitionDelay:E+"ms"},B=(0,l.default)({opacity:this.state.imgLoaded?0:1},S&&R,o,A),I={title:t,alt:this.state.isVisible?"":a,style:B,className:f};if(p){var k=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),j&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&R)}),k.base64&&c.default.createElement(g,(0,l.default)({src:k.base64},I)),k.tracedSVG&&c.default.createElement(g,(0,l.default)({src:k.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(g,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},k))}}))}if(m){var L=m,Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete Q.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},j&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:j,width:L.width,opacity:this.state.imgLoaded?0:1,height:L.height},S&&R)}),L.base64&&c.default.createElement(g,(0,l.default)({src:L.base64},I)),L.tracedSVG&&c.default.createElement(g,(0,l.default)({src:L.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(g,{alt:a,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},L))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var v=b;t.default=v},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras"}},benchAccounting:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAEDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHcRAWBB//EABgQAAIDAAAAAAAAAAAAAAAAAAARAQIQ/9oACAEBAAEFAtko2f/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAABAgMf/aAAgBAQAGPwJKP//EABkQAAIDAQAAAAAAAAAAAAAAAAEQABEhMf/aAAgBAQABPyEviaLIr//aAAwDAQACAAMAAAAQQM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAwADAAAAAAAAAAAAAAAAAREhMRBh8P/aAAgBAQABPxDhIt7gbXLm/dCw/9k=",aspectRatio:1.5003750937734435,src:"/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg",srcSet:"/static/5e80cb2f67c2a4804561f9d0ccaa9685/467b3/bench-accounting-49909-unsplash.jpg 340w,\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/e1ddd/bench-accounting-49909-unsplash.jpg 680w,\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/10fb1/bench-accounting-49909-unsplash.jpg 1360w,\n/static/5e80cb2f67c2a4804561f9d0ccaa9685/883ab/bench-accounting-49909-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-4ce8ea8a688ab359a39f.js.map