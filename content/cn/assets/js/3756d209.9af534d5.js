"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[78100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=u(r),d=i,f=y["".concat(l,".").concat(d)]||y[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},52667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"Apache Hudi Key Generators",excerpt:"Different key generators available with Apache Hudi",author:"shivnarayan",category:"blog"},o=void 0,c={permalink:"/cn/blog/2021/02/13/hudi-key-generators",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-02-13-hudi-key-generators.md",source:"@site/blog/2021-02-13-hudi-key-generators.md",title:"Apache Hudi Key Generators",description:"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where",date:"2021-02-13T00:00:00.000Z",formattedDate:"February 13, 2021",tags:[],readingTime:5.58,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Time travel operations in Hopsworks Feature Store",permalink:"/cn/blog/2021/02/24/Time-travel-operations-in-Hopsworks-Feature-Store"},nextItem:{title:"Optimize Data lake layout using Clustering in Apache Hudi",permalink:"/cn/blog/2021/01/27/hudi-clustering-intro"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where\nthe record belongs to. Using primary keys, Hudi can impose a) partition level uniqueness integrity constraint\nb) enable fast updates and deletes on records. One should choose the partitioning scheme wisely as it could be a\ndetermining factor for your ingestion and query latency."))}s.isMDXComponent=!0}}]);