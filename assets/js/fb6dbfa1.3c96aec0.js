/*! For license information please see fb6dbfa1.3c96aec0.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[1269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1966:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7378),n(3905));const o={id:"Carousel",title:"Carousel",sidebar_label:"Carousel"},i=void 0,l={unversionedId:"components/layout/Carousel",id:"components/layout/Carousel",isDocsHomePage:!1,title:"Carousel",description:"Carousel for scrolling pages",source:"@site/../docs/components/layout/Carousel.md",sourceDirName:"components/layout",slug:"/components/layout/Carousel",permalink:"/react-native-ui-lib/docs/components/layout/Carousel",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layout/Carousel.md",tags:[],version:"current",frontMatter:{id:"Carousel",title:"Carousel",sidebar_label:"Carousel"},sidebar:"tutorialSidebar",previous:{title:"Section",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card.Section"},next:{title:"LoaderScreen",permalink:"/react-native-ui-lib/docs/components/layout/LoaderScreen"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"allowAccessibleLayout",id:"allowaccessiblelayout",children:[]},{value:"animated",id:"animated",children:[]},{value:"animatedScrollOffset",id:"animatedscrolloffset",children:[]},{value:"autoplay",id:"autoplay",children:[]},{value:"autoplayInterval",id:"autoplayinterval",children:[]},{value:"containerMarginHorizontal",id:"containermarginhorizontal",children:[]},{value:"containerPaddingVertical",id:"containerpaddingvertical",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"counterTextStyle",id:"countertextstyle",children:[]},{value:"horizontal",id:"horizontal",children:[]},{value:"initialPage",id:"initialpage",children:[]},{value:"itemSpacings",id:"itemspacings",children:[]},{value:"loop",id:"loop",children:[]},{value:"onChangePage",id:"onchangepage",children:[]},{value:"onScroll",id:"onscroll",children:[]},{value:"pageControlPosition",id:"pagecontrolposition",children:[]},{value:"pageControlProps",id:"pagecontrolprops",children:[]},{value:"pageHeight",id:"pageheight",children:[]},{value:"pageWidth",id:"pagewidth",children:[]},{value:"pagingEnabled",id:"pagingenabled",children:[]},{value:"showCounter",id:"showcounter",children:[]}]}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Carousel for scrolling pages",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CarouselScreen.tsx"},"(code example)")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component extends ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/scrollview"},"ScrollView"))," props."))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component support **** modifiers."))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,a.kt)("img",{style:{maxHeight:"420px"},src:"https://user-images.githubusercontent.com/1780255/107120258-40b5bc80-6895-11eb-9596-8065d3a940ff.gif"}),(0,a.kt)("img",{style:{maxHeight:"420px"},src:"https://user-images.githubusercontent.com/1780255/107120257-3eebf900-6895-11eb-9800-402e9e0dc692.gif"})),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<Carousel onChangePage={() => console.log('page changed')}>\n {_.map(items, item => (\n  return this.renderItem(item, index);\n ))}\n</Carousel>\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"allowaccessiblelayout"},"allowAccessibleLayout"),(0,a.kt)("p",null,"Whether to layout Carousel for accessibility",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"animated"},"animated"),(0,a.kt)("p",null,"Should the container be animated (send the animation style via containerStyle)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"animatedscrolloffset"},"animatedScrollOffset"),(0,a.kt)("p",null,"Pass to attach to ScrollView's Animated.event in order to animated elements base on Carousel scroll offset (pass new Animated.ValueXY())",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.ValueXY ")," "),(0,a.kt)("h3",{id:"autoplay"},"autoplay"),(0,a.kt)("p",null,"Enable to switch automatically between the pages",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"autoplayinterval"},"autoplayInterval"),(0,a.kt)("p",null,"Time is ms to wait before switching to the next page (requires 'autoplay' to be enabled)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"containermarginhorizontal"},"containerMarginHorizontal"),(0,a.kt)("p",null,"Horizontal margin for the carousel container",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"containerpaddingvertical"},"containerPaddingVertical"),(0,a.kt)("p",null,"Vertical padding for the carousel container (Sometimes needed when there are overflows that are cut in Android).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,a.kt)("p",null,"The carousel container style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"countertextstyle"},"counterTextStyle"),(0,a.kt)("p",null,"The counter's text style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"horizontal"},"horizontal"),(0,a.kt)("p",null,"Whether pages will be rendered horizontally or vertically",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"initialpage"},"initialPage"),(0,a.kt)("p",null,"The initial page to start at",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"itemspacings"},"itemSpacings"),(0,a.kt)("p",null,"The spacing between the pages",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"loop"},"loop"),(0,a.kt)("p",null,"If true, will have infinite scroll (works only for horizontal carousel)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"onchangepage"},"onChangePage"),(0,a.kt)("p",null,"Callback for page change event",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(pageIndex, oldPageIndex, info) => void ")," "),(0,a.kt)("h3",{id:"onscroll"},"onScroll"),(0,a.kt)("p",null,"Attach a callback for onScroll event of the internal ScrollView",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"function ")," "),(0,a.kt)("h3",{id:"pagecontrolposition"},"pageControlPosition"),(0,a.kt)("p",null,"The position of the PageControl component ","['over', 'under']",", otherwise it won't display",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"PageControlPosition ")," "),(0,a.kt)("h3",{id:"pagecontrolprops"},"pageControlProps"),(0,a.kt)("p",null,"PageControl component props",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"PageControlProps ")," "),(0,a.kt)("h3",{id:"pageheight"},"pageHeight"),(0,a.kt)("p",null,"The page height (all pages should have the same height).",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"pagewidth"},"pageWidth"),(0,a.kt)("p",null,"The page width (all pages should have the same width). Does not work if passing 'loop' prop",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"pagingenabled"},"pagingEnabled"),(0,a.kt)("p",null,"Will block multiple pages scroll (will not work with 'pageWidth' prop)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"showcounter"},"showCounter"),(0,a.kt)("p",null,"Whether to show a page counter (will not work with 'pageWidth' prop)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,p=a(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(p[s]=i[s]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(p[l[u]]=i[l[u]])}}return p}},1535:(e,t,n)=>{var r=n(2525),a=60103,o=60106;var i=60109,l=60110,p=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),s=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function g(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var y=b.prototype=new k;y.constructor=b,r(y,g.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){for(var c=Array(p),s=0;s<p;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===o[r]&&(o[r]=p[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case o:p=!0}}if(p)return i=i(p=e),e=""===r?"."+j(p,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=r+j(l=e[c],c);p+=P(l,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(l=e.next()).done;)p+=P(l=l.value,t,n,s=r+j(l,c++),i);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function x(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function z(){var e=T.current;if(null===e)throw Error(m(321));return e}},7378:(e,t,n)=>{n(1535)}}]);