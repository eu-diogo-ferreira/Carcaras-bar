(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(166),l=a.n(o),c=a(161),d=a(163),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("article",{className:"post-content "+(e.frontmatter.thumbnail||"no-image")},s.a.createElement("header",{className:"post-content-header"},s.a.createElement("h1",{className:"post-content-title"},e.frontmatter.title)),e.frontmatter.description&&s.a.createElement("p",{class:"post-content-excerpt"},e.frontmatter.description),e.frontmatter.thumbnail&&s.a.createElement("div",{className:"post-content-image"},s.a.createElement(l.a,{className:"kg-image",fluid:e.frontmatter.thumbnail.childImageSharp.fluid,alt:e.frontmatter.title})),s.a.createElement("div",{className:"post-content-body",dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("footer",{className:"post-content-footer"})))},t}(s.a.Component);t.default=u;var f="3008354207"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(160);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},160:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},161:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(159);t.a=function(e){var t=e.title,a=e.children,r=i.a.useState(!1),s=r[0],o=r[1];return i.a.createElement("div",{className:"site-wrapper "+(s?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return o(!s)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"})))),i.a.createElement("nav",{id:"swup",class:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-about",role:"menuitem"},i.a.createElement(n.a,{to:"/about"},"Saiba +")),i.a.createElement("li",{className:"nav-elements",role:"menuitem"},i.a.createElement(n.a,{to:"/elements"},"Elements")),i.a.createElement("li",{className:"nav-tags",role:"menuitem"},i.a.createElement(n.a,{to:"/tags"},"Cardápio")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.a,{className:"site-head-logo",to:"/"},t)),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://www.facebook.com",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),i.a.createElement("a",{href:"https://twitter.com",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement(n.a,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"),i.a.createElement("a",{href:"https://github.com/ArikBartzadok/",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"Instagram"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},a)),i.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",i.a.createElement(n.a,{to:"/"},t)," — Development by "," ",i.a.createElement("a",{href:"https://github.com/ArikBartzadok/",target:"_blank",rel:"noopener noreferrer"},"Diogo Ferreira")))}},162:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},163:function(e,t,a){"use strict";var r=a(164),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(165),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"pt-br",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Carcaras",description:"Teste de como seria o website Carcaras",author:"Diogo Ferreira"}}}}},166:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:S?1:0,transition:N?"opacity "+v+"ms":"none"},o),R="boolean"==typeof y?"lightgray":y,k={transitionDelay:v+"ms"},I=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&k,o,f),z={title:t,alt:this.state.isVisible?"":a,style:I,className:m};if(p){var O=p;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),R&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&k)}),O.base64&&c.default.createElement(b,(0,l.default)({src:O.base64},z)),O.tracedSVG&&c.default.createElement(b,(0,l.default)({src:O.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}if(h){var C=h,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete T.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},R&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:R,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},N&&k)}),C.base64&&c.default.createElement(b,(0,l.default)({src:C.base64},z)),C.tracedSVG&&c.default.createElement(b,(0,l.default)({src:C.tracedSVG},z)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(b,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},C))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-da78a19167736e0b403e.js.map