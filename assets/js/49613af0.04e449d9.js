/*! For license information please see 49613af0.04e449d9.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[9983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1387:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7378),r(3905));const a={id:"SortableList",title:"SortableList",sidebar_label:"SortableList"},i=void 0,c={unversionedId:"components/lists/SortableList",id:"components/lists/SortableList",isDocsHomePage:!1,title:"SortableList",description:"A sortable list component",source:"@site/../docs/components/lists/SortableList.md",sourceDirName:"components/lists",slug:"/components/lists/SortableList",permalink:"/react-native-ui-lib/docs/components/lists/SortableList",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/lists/SortableList.md",tags:[],version:"current",frontMatter:{id:"SortableList",title:"SortableList",sidebar_label:"SortableList"},sidebar:"tutorialSidebar",previous:{title:"SortableGridList",permalink:"/react-native-ui-lib/docs/components/lists/SortableGridList"},next:{title:"Timeline",permalink:"/react-native-ui-lib/docs/components/lists/Timeline"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"data",id:"data",children:[]},{value:"enableHaptic",id:"enablehaptic",children:[]},{value:"onOrderChange",id:"onorderchange",children:[]},{value:"scale",id:"scale",children:[]}]}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A sortable list component",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SortableListScreen.tsx"},"(code example)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This component extends ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/flatlist"},"FlatList"))," props."))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<SortableList\ndata={data}\nonOrderChange={onOrderChange}\nrenderItem={renderItem}\nkeyExtractor={keyExtractor}\n/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"data"},"data"),(0,o.kt)("h4",{id:"do-not-update-data-in-onorderchange-ie-for-each-order-change-only-update-it-when-you-change-the-items-ig-adding-and-removing-an-item"},"Do not update 'data' in 'onOrderChange' (i.e. for each order change); only update it when you change the items (i.g. adding and removing an item)."),(0,o.kt)("p",null,"The data of the list, with an id prop as unique identifier.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ItemT[] (ItemT extends {id: string}) ")," "),(0,o.kt)("h3",{id:"enablehaptic"},"enableHaptic"),(0,o.kt)("p",null,"Whether to enable the haptic feedback.\n(please note that react-native-haptic-feedback does not support the specific haptic type on Android starting on an unknown version, you can use 1.8.2 for it to work properly)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"onorderchange"},"onOrderChange"),(0,o.kt)("p",null,"A callback to get the new order (or swapped items).",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(data: ItemT[]) => void ")," "),(0,o.kt)("h3",{id:"scale"},"scale"),(0,o.kt)("p",null,"Scale the item once dragged.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))r.call(i,p)&&(l[p]=i[p]);if(t){c=t(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(l[c[u]]=i[c[u]])}}return l}},1535:(e,t,r)=>{var n=r(2525),o=60103,a=60106;var i=60109,c=60110,l=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var g=v.prototype=new y;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+x(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+x(c=e[s],s);l+=_(c,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(c=e.next()).done;)l+=_(c=c.value,t,r,p=n+x(c,s++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function E(){var e=L.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,r)=>{r(1535)}}]);