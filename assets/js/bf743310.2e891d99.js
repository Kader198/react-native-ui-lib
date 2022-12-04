/*! For license information please see bf743310.2e891d99.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[8941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4565:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7378),n(3905));const i={sidebar_position:3,sidebar_label:"Migrating v4 -> v5",title:"Migrating v4 -> v5"},o=void 0,l={unversionedId:"getting-started/v5",id:"getting-started/v5",isDocsHomePage:!1,title:"Migrating v4 -> v5",description:"react-native-ui-lib@5.x.x",source:"@site/../docs/getting-started/v5.md",sourceDirName:"getting-started",slug:"/getting-started/v5",permalink:"/react-native-ui-lib/docs/getting-started/v5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/getting-started/v5.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Migrating v4 -> v5",title:"Migrating v4 -> v5"},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/react-native-ui-lib/docs/getting-started/usage"},next:{title:"Migrating v5 -> v6",permalink:"/react-native-ui-lib/docs/getting-started/v6"}},p=[{value:"<code>react-native-ui-lib@5.x.x</code>",id:"react-native-ui-lib5xx",children:[{value:"Presets Updates",id:"presets-updates",children:[]},{value:"Components",id:"components",children:[]},{value:"Removed Dependencies",id:"removed-dependencies",children:[]},{value:"New Peer Dependencies (these should be installed separately)",id:"new-peer-dependencies-these-should-be-installed-separately",children:[]},{value:"Removed components",id:"removed-components",children:[]}]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"react-native-ui-lib5xx"},(0,a.kt)("inlineCode",{parentName:"h2"},"react-native-ui-lib@5.x.x")),(0,a.kt)("h3",{id:"presets-updates"},"Presets Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Typography")," - Now provides a full set of typographies in all weights"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Colors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spacings")," - Unified both platforms to the same spacing presets (multiples of 4s).")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"components"},"Components"),(0,a.kt)("h4",{id:"animatedimage"},"AnimatedImage"),(0,a.kt)("p",null,"props change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"imageSource")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"imageStyle")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"style")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"testId")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"testID"))),(0,a.kt)("h4",{id:"animatedscanner"},"AnimatedScanner"),(0,a.kt)("p",null,"props change:\n",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," accepts number instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")),(0,a.kt)("h4",{id:"button"},"Button"),(0,a.kt)("p",null,"props change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"containerStyle")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"style"))),(0,a.kt)("h4",{id:"dialog"},"Dialog"),(0,a.kt)("p",null,"Old implementation was deprecated. See new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DialogScreen.js"},"example screen")),(0,a.kt)("h4",{id:"textinput"},"TextInput"),(0,a.kt)("p",null,"Component renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"TextField")," and enhanced with more form capabilities like validations.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'<TextField placeholder="Enter email" validate="email" errorMessage="Email is invalid" />')),(0,a.kt)("h4",{id:"radiogroup"},"RadioGroup"),(0,a.kt)("p",null,"props change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"initialValue"))),(0,a.kt)("h4",{id:"toast"},"Toast"),(0,a.kt)("p",null,"Implementation had slightly changed, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ToastsScreen.js"},"example screen")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"relative")," value for ",(0,a.kt)("inlineCode",{parentName:"li"},"position")," prop was removed"),(0,a.kt)("li",{parentName:"ul"},"Blur effect is not part of the component")),(0,a.kt)("h4",{id:"listitem"},"ListItem"),(0,a.kt)("p",null,"Component not supporting animation out of the box (animatable wrapper was removed)."),(0,a.kt)("h4",{id:"loaderscreen"},"LoaderScreen"),(0,a.kt)("p",null,"Remove ",(0,a.kt)("inlineCode",{parentName:"p"},"animationProps")),(0,a.kt)("h4",{id:"drawer"},"Drawer"),(0,a.kt)("p",null,"Component implementation was completely changed and is using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," as its base infrastructure instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-interactable"),"\nPlease see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DrawerScreen.tsx"},"example screen")),(0,a.kt)("h4",{id:"carousel"},"Carousel"),(0,a.kt)("p",null,"Component API and implementation has changed.\nNow supports non-full-page carousel and a better way of rendering Carousel children."),(0,a.kt)("p",null,"Please refer to our ",(0,a.kt)("a",{parentName:"p",href:"https://wix.github.io/react-native-ui-lib/"},"Docs")," to learn more about the new API."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removed-dependencies"},"Removed Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"react-native-interactable")),(0,a.kt)("h3",{id:"new-peer-dependencies-these-should-be-installed-separately"},"New Peer Dependencies (these should be installed separately)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"react-native-gesture-handler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@react-native-community/blur")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@react-native-community/datetimepicker"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removed-components"},"Removed components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MultipleShadow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tour")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Notification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CardItem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CardSection"))))}u.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,l,p=a(e),s=1;s<arguments.length;s++){for(var u in o=Object(arguments[s]))n.call(o,u)&&(p[u]=o[u]);if(t){l=t(o);for(var c=0;c<l.length;c++)r.call(o,l[c])&&(p[l[c]]=o[l[c]])}}return p}},1535:(e,t,n)=>{var r=n(2525),a=60103,i=60106;var o=60109,l=60110,p=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),i=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),l=c("react.context"),p=c("react.forward_ref"),c("react.suspense"),s=c("react.memo"),u=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function k(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=k.prototype;var g=b.prototype=new v;g.constructor=b,r(g,k.prototype),g.isPureReactComponent=!0;var y={current:null},N=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,i={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var p=arguments.length-2;if(1===p)i.children=n;else if(1<p){for(var s=Array(p),u=0;u<p;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===i[r]&&(i[r]=p[r]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:y.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case i:p=!0}}if(p)return o=o(p=e),e=""===r?"."+x(p,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),S(o,t,n,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+x(l=e[s],s);p+=S(l,t,n,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(l=e.next()).done;)p+=S(l=l.value,t,n,u=r+x(l,s++),o);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function P(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function E(){var e=D.current;if(null===e)throw Error(m(321));return e}},7378:(e,t,n)=>{n(1535)}}]);