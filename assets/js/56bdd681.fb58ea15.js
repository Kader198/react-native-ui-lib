/*! For license information please see 56bdd681.fb58ea15.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[6445],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9582:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7378),r(3905));const a={id:"KeyboardTrackingView",title:"KeyboardTrackingView",sidebar_label:"KeyboardTrackingView"},i=void 0,l={unversionedId:"components/infra/KeyboardTrackingView",id:"components/infra/KeyboardTrackingView",isDocsHomePage:!1,title:"KeyboardTrackingView",description:"A UI component that enables 'keyboard tracking' for this view and it's sub-views.",source:"@site/../docs/components/infra/KeyboardTrackingView.md",sourceDirName:"components/infra",slug:"/components/infra/KeyboardTrackingView",permalink:"/react-native-ui-lib/docs/components/infra/KeyboardTrackingView",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/infra/KeyboardTrackingView.md",tags:[],version:"current",frontMatter:{id:"KeyboardTrackingView",title:"KeyboardTrackingView",sidebar_label:"KeyboardTrackingView"},sidebar:"tutorialSidebar",previous:{title:"KeyboardRegistry",permalink:"/react-native-ui-lib/docs/components/infra/KeyboardRegistry"},next:{title:"Overlay",permalink:"/react-native-ui-lib/docs/components/infra/Overlay"}},s=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"addBottomView",id:"addbottomview",children:[]},{value:"allowHitsOutsideBounds",id:"allowhitsoutsidebounds",children:[]},{value:"bottomViewColor",id:"bottomviewcolor",children:[]},{value:"manageScrollView",id:"managescrollview",children:[]},{value:"ref",id:"ref",children:[]},{value:"requiresSameParentToManageScrollView",id:"requiressameparenttomanagescrollview",children:[]},{value:"revealKeyboardInteractive",id:"revealkeyboardinteractive",children:[]},{value:"scrollBehavior",id:"scrollbehavior",children:[]},{value:"scrollToFocusedInput",id:"scrolltofocusedinput",children:[]},{value:"style",id:"style",children:[]},{value:"trackInteractive",id:"trackinteractive",children:[]},{value:"useSafeArea",id:"usesafearea",children:[]},{value:"usesBottomTabs",id:"usesbottomtabs",children:[]}]}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A UI component that enables 'keyboard tracking' for this view and it's sub-views.\nWould typically be used when you have a TextField or TextInput inside this view.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/nativeComponentScreens/KeyboardTrackingViewScreen.js"},"(code example)")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This view is useful only for iOS."))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/KeyboardTrackingView/KeyboardTrackingView.gif?raw=true"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<KeyboardTrackingView\n style={}\n trackInteractive\n useSafeArea\n>\n \n</KeyboardTrackingView>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"addbottomview"},"addBottomView"),(0,o.kt)("h4",{id:"ios-only"},"iOS only"),(0,o.kt)("p",null,"Add a view beneath the KeyboardAccessoryView.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"allowhitsoutsidebounds"},"allowHitsOutsideBounds"),(0,o.kt)("h4",{id:"ios-only-1"},"iOS only"),(0,o.kt)("p",null,"Allow hitting sub-views that are placed beyond the view bounds.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"bottomviewcolor"},"bottomViewColor"),(0,o.kt)("h4",{id:"ios-only-2"},"iOS only"),(0,o.kt)("p",null,"The bottom view's color.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"managescrollview"},"manageScrollView"),(0,o.kt)("h4",{id:"ios-only-3"},"iOS only"),(0,o.kt)("p",null,"Set to false to turn off inset management and manage it yourself.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"ref"},"ref"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"any ")," "),(0,o.kt)("h3",{id:"requiressameparenttomanagescrollview"},"requiresSameParentToManageScrollView"),(0,o.kt)("h4",{id:"ios-only-4"},"iOS only"),(0,o.kt)("p",null,"Set to true manageScrollView is set to true and still does not work,\nit means that the ScrollView found is the wrong one and you'll have\nto have the KeyboardAccessoryView and the ScrollView as siblings\nand set this to true.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"revealkeyboardinteractive"},"revealKeyboardInteractive"),(0,o.kt)("h4",{id:"ios-only-5"},"iOS only"),(0,o.kt)("p",null,"Show the keyboard on a negative scroll.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"scrollbehavior"},"scrollBehavior"),(0,o.kt)("h4",{id:"ios-only-6"},"iOS only"),(0,o.kt)("p",null,"The scrolling behavior (use KeyboardTrackingView.scrollBehaviors.NONE | SCROLL_TO_BOTTOM_INVERTED_ONLY | FIXED_OFFSET)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"scrolltofocusedinput"},"scrollToFocusedInput"),(0,o.kt)("p",null,"Should the scrollView scroll to the focused input",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"trackinteractive"},"trackInteractive"),(0,o.kt)("p",null,"Enables tracking of the keyboard when it's dismissed interactively (false by default).\nWhy? When using an external keyboard (BT),\nyou still get the keyboard events and the view just hovers when you focus the input.\nAlso, if you're not using interactive style of dismissing the keyboard\n(or if you don't have an input inside this view) it doesn't make sense to track it anyway.\n(This is caused because of the usage of inputAccessory to be able to track the keyboard interactive change and it introduces this bug)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"usesafearea"},"useSafeArea"),(0,o.kt)("h4",{id:"ios-only-7"},"iOS only"),(0,o.kt)("p",null,"Whether or not to handle SafeArea.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"usesbottomtabs"},"usesBottomTabs"),(0,o.kt)("h4",{id:"ios-only-8"},"iOS only"),(0,o.kt)("p",null,"Whether or not to include bottom tab bar inset.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,s=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var d=0;d<l.length;d++)n.call(i,l[d])&&(s[l[d]]=i[l[d]])}}return s}},1535:(e,t,r)=>{var n=r(2525),o=60103,a=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),a=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),l=d("react.context"),s=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var k=v.prototype=new m;k.constructor=v,n(k,h.prototype),k.isPureReactComponent=!0;var w={current:null},g=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function V(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+T(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),V(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+T(l=e[c],c);s+=V(l,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=V(l=l.value,t,r,u=n+T(l,c++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,r){if(null==e)return e;var n=[],o=0;return V(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function P(){var e=C.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,r)=>{r(1535)}}]);