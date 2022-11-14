/*! For license information please see d5724579.39409d33.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[9224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9480:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7378),n(3905));const i={sidebar_position:1,sidebar_label:"Setup",title:"Setup"},o=void 0,l={unversionedId:"getting-started/setup",id:"getting-started/setup",isDocsHomePage:!1,title:"Setup",description:"Before You Start: UILib Packages",source:"@site/../docs/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/react-native-ui-lib/docs/getting-started/setup",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/getting-started/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Setup",title:"Setup"},sidebar:"tutorialSidebar",next:{title:"Usage",permalink:"/react-native-ui-lib/docs/getting-started/usage"}},p=[{value:"Before You Start: UILib Packages",id:"before-you-start-uilib-packages",children:[{value:"Why packages are important?",id:"why-packages-are-important",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]}]},{value:"Install UILib",id:"install-uilib",children:[{value:"Peer Dependencies",id:"peer-dependencies",children:[]},{value:"Optional Dependencies",id:"optional-dependencies",children:[]}]},{value:"Install Native Dependencies",id:"install-native-dependencies",children:[]},{value:"Demo App",id:"demo-app",children:[]},{value:"Starter Kits",id:"starter-kits",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"before-you-start-uilib-packages"},"Before You Start: UILib Packages"),(0,a.kt)("p",null,"Starting with version 5.12.0 UILib exports individual packages so you can import only what you need.  "),(0,a.kt)("h3",{id:"why-packages-are-important"},"Why packages are important?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Smaller bundle size. By importing only the components you need, your bundle size will be reduced to the files that were imported."),(0,a.kt)("li",{parentName:"ul"},"Quicker setup. Avoid installing peer dependencies and linking native dependencies you don't need. ")),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import View from 'react-native-ui-lib/view';\nimport Text from 'react-native-ui-lib/text';\nimport {KeyboardTrackingView, KeyboardAwareInsetsView, KeyboardRegistry, KeyboardAccessoryView, KeyboardUtils} from 'react-native-ui-lib/keyboard';\n...\n")),(0,a.kt)("h2",{id:"install-uilib"},"Install UILib"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install react-native-ui-lib"),"  "),(0,a.kt)("li",{parentName:"ul"},"Install mandatory ",(0,a.kt)("a",{parentName:"li",href:"#peer-dependencies"},"peer dependencies"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i react-native-reanimated react-native-gesture-handler")),(0,a.kt)("li",{parentName:"ul"},"Install ios pods, ",(0,a.kt)("inlineCode",{parentName:"li"},"cd ios && pod install"))),(0,a.kt)("p",null,"If you plan on using specific components, see ",(0,a.kt)("strong",{parentName:"p"},"UILib Packages")," above.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"For some packages you might still need to install one of the peer dependencies")),(0,a.kt)("h3",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.kt)("p",null,"UILIb has mandatory peer dependencies on the following packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"react-native-reanimated (Make sure to follow ",(0,a.kt)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation"},"Reanimated setup guide"),")"),(0,a.kt)("li",{parentName:"ul"},"react-native-gesture-handler")),(0,a.kt)("h3",{id:"optional-dependencies"},"Optional Dependencies"),(0,a.kt)("p",null,"Some dependencies are optional and required by specific components or features (e.g. Card's blur features requires installing ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-native-community/blur")," package)"),(0,a.kt)("p",null,"The following are optional dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@react-native-community/blur"),(0,a.kt)("li",{parentName:"ul"},"@react-native-community/datetimepicker"),(0,a.kt)("li",{parentName:"ul"},"@react-native-community/netinfo"),(0,a.kt)("li",{parentName:"ul"},"@react-native-picker/picker")),(0,a.kt)("h2",{id:"install-native-dependencies"},"Install Native Dependencies"),(0,a.kt)("p",null,"If you plan on using specific components, see ",(0,a.kt)("strong",{parentName:"p"},"UILib Packages"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"For some packages you might still need to install one of the native dependencies")),(0,a.kt)("p",null,"Some of the components are using the native dependencies listed below - those are defined as peer dependencies, so you can install the version that suits you.  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's important to run ",(0,a.kt)("inlineCode",{parentName:"p"},"cd ios && pod install")," if you are using a component that has a native dependency.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"react-native-gesture-handler": ">=1.9.0" (mandatory)'),(0,a.kt)("li",{parentName:"ul"},'"react-native-reanimated": ">=2.1.0" (mandatory)'),(0,a.kt)("li",{parentName:"ul"},'"@react-native-community/blur": ">=3.4.1" (required for Card component when passing ',(0,a.kt)("inlineCode",{parentName:"li"},"enableBlur")," prop)"),(0,a.kt)("li",{parentName:"ul"},'"@react-native-community/datetimepicker": "^2.1.0"'),(0,a.kt)("li",{parentName:"ul"},'"@react-native-community/netinfo": "^5.6.2" (required for ConnectionStatusBar component)'),(0,a.kt)("li",{parentName:"ul"},'"@react-native-picker/picker": "^1.9.4" (required for Picker component when passing ',(0,a.kt)("inlineCode",{parentName:"li"},"useNativePicker")," prop)")),(0,a.kt)("h2",{id:"demo-app"},"Demo App"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the project ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:wix/react-native-ui-lib.git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd react-native-ui-lib")),(0,a.kt)("li",{parentName:"ul"},"Install dependencies ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")),(0,a.kt)("li",{parentName:"ul"},"(for iOS) ",(0,a.kt)("inlineCode",{parentName:"li"},"cd ios && pod install")),(0,a.kt)("li",{parentName:"ul"},"Start the packager ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ul"},"Build the app ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run ios")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run android")," (or from Xcode or Android Studio).")),(0,a.kt)("h2",{id:"starter-kits"},"Starter Kits"),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kanzitelli"},"Batyr")," we have these amazing starter kits "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kanzitelli/rnn-starter"},"RNUILib + ReactNativeNavigation Starter Kit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kanzitelli/rn-starter"},"RNUILib + ReactNavigation Starter Kit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kanzitelli/expo-starter"},"RNUILib + Expo Starter Kit"))))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,l,p=a(e),u=1;u<arguments.length;u++){for(var s in o=Object(arguments[u]))n.call(o,s)&&(p[s]=o[s]);if(t){l=t(o);for(var c=0;c<l.length;c++)r.call(o,l[c])&&(p[l[c]]=o[l[c]])}}return p}},1535:(e,t,n)=>{var r=n(2525),a=60103,i=60106;var o=60109,l=60110,p=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),i=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),o=c("react.provider"),l=c("react.context"),p=c("react.forward_ref"),c("react.suspense"),u=c("react.memo"),s=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k={};function y(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}function b(){}function h(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=h.prototype=new b;g.constructor=h,r(g,y.prototype),g.isPureReactComponent=!0;var v={current:null},N=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var p=arguments.length-2;if(1===p)i.children=n;else if(1<p){for(var u=Array(p),s=0;s<p;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===i[r]&&(i[r]=p[r]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case a:case i:p=!0}}if(p)return o=o(p=e),e=""===r?"."+P(p,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),C(o,t,n,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),t.push(o)),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+P(l=e[u],u);p+=C(l,t,n,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)p+=C(l=l.value,t,n,s=r+P(l,u++),o);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function _(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function U(){var e=x.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,n)=>{n(1535)}}]);