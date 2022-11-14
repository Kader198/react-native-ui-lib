/*! For license information please see 0af7329b.c63a5789.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5901:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7378),n(3905));const a={id:"ColorPalette",title:"ColorPalette",sidebar_label:"ColorPalette"},i=void 0,l={unversionedId:"components/form/ColorPalette",id:"components/form/ColorPalette",isDocsHomePage:!1,title:"ColorPalette",description:"A component for displaying a color palette",source:"@site/../docs/components/form/ColorPalette.md",sourceDirName:"components/form",slug:"/components/form/ColorPalette",permalink:"/react-native-ui-lib/docs/components/form/ColorPalette",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/ColorPalette.md",tags:[],version:"current",frontMatter:{id:"ColorPalette",title:"ColorPalette",sidebar_label:"ColorPalette"},sidebar:"tutorialSidebar",previous:{title:"ChipsInput",permalink:"/react-native-ui-lib/docs/components/form/ChipsInput"},next:{title:"ColorPicker",permalink:"/react-native-ui-lib/docs/components/form/ColorPicker"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"animatedIndex",id:"animatedindex",children:[]},{value:"colors",id:"colors",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"containerWidth",id:"containerwidth",children:[]},{value:"loop",id:"loop",children:[]},{value:"numberOfRows",id:"numberofrows",children:[]},{value:"onValueChange",id:"onvaluechange",children:[]},{value:"style",id:"style",children:[]},{value:"swatchStyle",id:"swatchstyle",children:[]},{value:"testID",id:"testid",children:[]},{value:"usePagination",id:"usepagination",children:[]},{value:"value",id:"value",children:[]}]}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component for displaying a color palette",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ColorPickerScreen.tsx"},"(code example)")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a screen width component"))),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,o.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorPalette/ColorPalette.gif?raw=true"})),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<ColorPalette\n colors={['transparent', Colors.green30, Colors.yellow30, Colors.red30]}\n value={this.state.selectedColor}\n onValueChange={() => console.log('value changed')}\n/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"animatedindex"},"animatedIndex"),(0,o.kt)("h4",{id:"default-is-last"},"Default is last"),(0,o.kt)("p",null,"The index of the item to animate at first render",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"colors"},"colors"),(0,o.kt)("p",null,"Array of colors to render in the palette",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string[] ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Component's container style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"containerwidth"},"containerWidth"),(0,o.kt)("p",null,"The container margins",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"loop"},"loop"),(0,o.kt)("p",null,"Whether the colors pagination scrolls in a loop",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"numberofrows"},"numberOfRows"),(0,o.kt)("p",null,"The number of color rows from 2 to 5",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"onvaluechange"},"onValueChange"),(0,o.kt)("p",null,"Invoked once when value changes by selecting one of the swatches in the palette",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(value: string, options: object) => void ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"Component's style",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"swatchstyle"},"swatchStyle"),(0,o.kt)("p",null,"Style to pass all the ColorSwatches in the palette",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"The test id for e2e tests",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"usepagination"},"usePagination"),(0,o.kt)("p",null,"Whether to use pagination when number of colors exceeds the number of rows",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"value"},"value"),(0,o.kt)("p",null,"The value of the selected swatch",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),s=1;s<arguments.length;s++){for(var p in i=Object(arguments[s]))n.call(i,p)&&(c[p]=i[p]);if(t){l=t(i);for(var u=0;u<l.length;u++)r.call(i,l[u])&&(c[l[u]]=i[l[u]])}}return c}},1535:(e,t,n)=>{var r=n(2525),o=60103,a=60106;var i=60109,l=60110,c=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),l=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,r(k,y.prototype),k.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];a.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+N(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=r+N(l=e[s],s);c+=x(l,t,n,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)c+=x(l=l.value,t,n,p=r+N(l,s++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function S(e,t,n){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,n)=>{n(1535)}}]);