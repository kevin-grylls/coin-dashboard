(this["webpackJsonpcoin-chart"]=this["webpackJsonpcoin-chart"]||[]).push([[0],{204:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var r=t(8),a=t(5);function c(){var e=Object(r.a)(["\n  border: none;\n  outline: none;\n  ","\n  ","\n"]);return c=function(){return e},e}function o(){var e=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 20px 0;\n"]);return o=function(){return e},e}var i=a.default.div(o()),u=a.default.select(c(),(function(e){var n=e.theme;return"\n    font-size: ".concat(n.fonts.xs,";\n    color: ").concat(n.colors.gray[500],";")}),(function(e){var n=e.marginLeft;return"margin-left: ".concat(n,";")}))},24:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return u}));var r=t(70),a=function(e){var n=r.b;switch(e){case"red":return n.colors.red;case"blue":return n.colors.blue;case"yellow":return n.colors.yellow;case"black":return n.colors.black;default:return n.colors.gray[500]}},c=function(e){var n=r.b;switch(e){case"sm":return n.fonts.sm;case"xs":return n.fonts.xs;case"lg":return n.fonts.lg;case"xl":return n.fonts.xl;case"xxs":return n.fonts.xxs;default:return n.fonts.default}},o={set:function(e,n){return localStorage.setItem(e,n)},get:function(e){return localStorage.getItem(e)},remove:function(e){return localStorage.removeItem(e)},clear:function(){return localStorage.clear()},getAll:function(){return Object.keys(localStorage)}},i={getCurrencyFormat:function(e){return Number(e).toLocaleString(void 0,{minimumFractionDigits:2})},getPercentFormat:function(e,n){return Number(e).toFixed(n)}},u={getTransferredValue:function(e,n){return Number(e)*Number(n)}};t(0),t(325),t(5)},32:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return f})),t.d(n,"d",(function(){return m}));var r=t(8),a=t(5),c=t(24);function o(){var e=Object(r.a)(["\n  cursor: pointer;\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  cursor: pointer;\n  color: ",";\n"]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n  ",";\n  color: ",";\n  border-bottom: solid 0.5px ",";\n  border: ",";\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  width: 100%;\n\n  th {\n    line-height: 24px;\n    ","\n  }\n\n  td {\n    line-height: 32px;\n    ","\n  }\n\n  a {\n    text-decoration: none;\n    ","\n  }\n"]);return l=function(){return e},e}var s=a.default.table(l(),(function(e){var n=e.theme;return"\n            font-size: ".concat(n.fonts.xxs,";\n            color: ").concat(n.colors.gray[200],";\n            background-color: ").concat(n.colors.gray[50],";\n            ")}),(function(e){var n=e.theme;return"font-size: ".concat(n.fonts.xs,";")}),(function(e){var n=e.theme;return"color: ".concat(n.colors.gray[400],";")})),d=a.default.td(u(),(function(e){var n=e.align;return"text-align: ".concat(n,";")}),(function(e){var n=e.color;return Object(c.c)(n)}),(function(e){return e.theme.colors.gray[100]}),(function(e){return e.noBorder&&"none"})),f=a.default.span(i(),(function(e){var n=e.theme;return e.isSelected?n.colors.yellow:n.colors.gray[100]})),m=a.default.span(o())},328:function(e,n,t){e.exports=t(858)},39:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return l}));var r=t(34),a=t(35),c=t(0),o=t.n(c),i=Object(c.createContext)({updateCnt:0,isLoading:!1,isToast:{status:!1,msg:""},viewType:"all",currencyType:"krw",page:1,displayRow:50,inc:function(){},setIsLoading:function(){},setToast:function(){},setViewType:function(){},setCurrencyType:function(){},setPage:function(){},setDisplayRow:function(){},init:function(){}});i.displayName="GlobalContext";var u=function(){return Object(c.useContext)(i)},l=function(e){var n=e.children,t=function(e){g((function(n){return Object(a.a)(Object(a.a)({},n),{},{viewType:e})}))},u=function(e){g((function(n){return Object(a.a)(Object(a.a)({},n),{},{currencyType:e})}))},l=function(e){g((function(n){return Object(a.a)(Object(a.a)({},n),{},{page:e})}))},s=function(e){g((function(n){return Object(a.a)(Object(a.a)({},n),{},{displayRow:e})}))},d={isLoading:!1,isToast:{status:!1,msg:""},updateCnt:0,viewType:"all",currencyType:"krw",page:1,displayRow:50,inc:function(){g((function(e){return Object(a.a)(Object(a.a)({},e),{},{updateCnt:e.updateCnt+1})}))},setIsLoading:function(e){g((function(n){return Object(a.a)(Object(a.a)({},n),{},{isLoading:e})}))},setToast:function(e){var n=e.status,t=e.msg;g((function(e){return Object(a.a)(Object(a.a)({},e),{},{isToast:{status:n,msg:t}})}))},setViewType:t,setCurrencyType:u,setPage:l,setDisplayRow:s,init:function(){l(1),t("all"),u("krw"),s(50)}},f=Object(c.useState)(d),m=Object(r.a)(f,2),b=m[0],g=m[1];return o.a.createElement(i.Provider,{value:b},n)}},52:function(e,n,t){"use strict";t.d(n,"c",(function(){return f})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return E})),t.d(n,"e",(function(){return v})),t.d(n,"a",(function(){return y})),t.d(n,"f",(function(){return d})),t.d(n,"i",(function(){return b})),t.d(n,"d",(function(){return k})),t.d(n,"b",(function(){return x}));var r=t(71),a=t.n(r),c=t(100),o=t(34),i=t(0),u=function(e){var n=e.vsCurrency,t=e.ids,r=void 0===t?"":t,a=e.order,c=void 0===a?"market_cap_desc":a,o=e.perPage,i=e.page,u=void 0===i?1:i,l=e.sparkLine,s=void 0!==l&&l,d=e.priceChangePercentage,f=void 0===d?"1h,24h,7d":d;return fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(n,"&order=").concat(c,"&per_page=").concat(o,"&page=").concat(u,"&sparkline=").concat(s,"&price_change_percentage=").concat(f,"&ids=").concat(r),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return{ok:e.ok,data:e.json()}})).then((function(e){return e.ok?e.data:[]})).catch((function(e){return console.error(e)}))},l=function(e){var n=e.id;return fetch("https://api.coingecko.com/api/v3/coins/".concat(n,"?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return{ok:e.ok,data:e.json()}})).then((function(e){return e.ok?e.data:{id:"",symbol:"",name:"",market_cap_rank:0,market_data:{total_volume:{usd:0,krw:0},market_cap:{usd:0,krw:0},market_cap_change_percentage_24h:{usd:0,krw:0},market_cap_change_24h_in_currency:{usd:0,krw:0},price_change_24h:{usd:0,krw:0},price_change_24h_in_currency:{usd:0,krw:0},price_change_percentage_1h_in_currency:{usd:0,krw:0},current_price:{usd:0,krw:0}},localization:{en:"",ko:""},description:{en:"",ko:""},image:{thumb:"",small:"",large:""},links:{homepage:[""]}}})).catch((function(e){return console.error(e)}))},s=t(39);function d(){var e=Object(s.b)(),n=e.isLoading,t=e.setIsLoading;return{isLoading:n,loading:function(){t(!0),setTimeout((function(){return t(!1)}),1e3)}}}function f(){var e=Object(s.b)(),n=e.viewType,t=e.currencyType,r=e.page,l=e.displayRow,f=e.setPage,m=e.init,b=d().loading,g=Object(i.useState)([]),p=Object(o.a)(g,2),h=p[0],E=p[1],v=function(e){f(r+1),E(h.concat(e))},y=function(){var e=Object(c.a)(a.a.mark((function e(n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({vsCurrency:t,order:"market_cap_desc",perPage:l,page:"fetch"===n?1:r+1,sparkLine:!1});case 2:c=e.sent,"fetch"===n?E(c):v(c);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b(),y("fetch")}),[l,t]),Object(i.useEffect)((function(){m()}),[]),{currency:h,currencyType:t,loadMoreCurrency:function(){b(),y("update")},viewType:n}}var m=t(24);function b(){var e=Object(s.b)(),n=e.isToast,t=e.setToast;return{isToast:n,toast:function(e){t({status:!0,msg:e}),setTimeout((function(){return t({status:!1,msg:""})}),1e3)}}}var g=t(9);function p(){var e=function(){var e=m.e.get("bookmark");return e?JSON.parse(e):[]},n=Object(i.useState)(e()),t=Object(o.a)(n,2),r=t[0],a=t[1],c=b().toast,u=Object(s.b)(),l=u.updateCnt,d=u.inc;return Object(i.useEffect)((function(){a(e())}),[l]),{bookmark:r,updateBookmark:function(e){setTimeout((function(){return function(e){var n=m.e.get("bookmark"),t=n?JSON.parse(n):[],r=t.includes(e);m.e.set("bookmark",JSON.stringify(r?t.filter((function(n){return n!==e})):[e].concat(t))),c(r?g.b.BOOKMARK_MSG[1]:g.b.BOOKMARK_MSG[0]),d()}(e)}),500)}}}var h=t(23);function E(){var e=Object(h.g)().pathname,n="/"===e||"/market"===e,t=function(){return n?0:1},r=Object(i.useState)(t()),a=Object(o.a)(r,2),c=a[0],u=a[1],l=function(e){u(e)};return Object(i.useEffect)((function(){l(t())}),[]),{tabIdx:c,updateTabIdx:l}}function v(){var e=Object(s.b)(),n=e.setViewType,t=e.setCurrencyType,r=e.setDisplayRow,a=e.inc;return{updateFilter:function(e){switch(e){case g.b.FILTER.VIEW_TYPE[0]:n("all");break;case g.b.FILTER.VIEW_TYPE[1]:n("bookmark");break;case g.b.FILTER.CURRENCY[0]:t("krw"),setTimeout((function(){return a()}),200);break;case g.b.FILTER.CURRENCY[1]:t("usd"),setTimeout((function(){return a()}),200);break;case g.b.FILTER.LIST_NUMBER[0]:r(50),setTimeout((function(){return a()}),200);break;case g.b.FILTER.LIST_NUMBER[1]:r(30),setTimeout((function(){return a()}),200);break;case g.b.FILTER.LIST_NUMBER[2]:r(10)}}}}function y(){var e=p().bookmark,n=d().loading,t=Object(i.useState)([]),r=Object(o.a)(t,2),l=r[0],s=r[1],f=function(){var n=Object(c.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u({vsCurrency:"krw",ids:e.join(",").toLowerCase(),order:"market_cap_desc",sparkLine:!1});case 2:t=n.sent,s(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){n(),f()}),[]),{favorites:l}}function k(e){var n=e.id,t=Object(s.b)().currencyType,r=d().loading,u=Object(i.useState)(!1),f=Object(o.a)(u,2),m=f[0],b=f[1],g=Object(i.useState)({id:"",symbol:"",name:"",market_cap_rank:0,market_data:{total_volume:{usd:0,krw:0},market_cap:{usd:0,krw:0},market_cap_change_percentage_24h:{usd:0,krw:0},market_cap_change_24h_in_currency:{usd:0,krw:0},price_change_24h:{usd:0,krw:0},price_change_24h_in_currency:{usd:0,krw:0},price_change_percentage_1h_in_currency:{usd:0,krw:0},current_price:{usd:0,krw:0}},localization:{en:"",ko:""},description:{en:"",ko:""},image:{thumb:"",small:"",large:""},links:{homepage:[""]}}),p=Object(o.a)(g,2),h=p[0],E=p[1],v=function(){var e=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.next=3,l({id:n});case 3:t=e.sent,E(t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){v(n)}),[]),{details:h,open:m,setOpen:b,currencyType:t}}function x(){var e=Object(i.useState)({crypto:"",currency:""}),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(i.useEffect)((function(){r({crypto:"",currency:""})}),[]),{result:t,getCurrency:function(e,n){var t=m.a.getTransferredValue(Number(e).toFixed(8),n),a=new RegExp(/(^\d+$)|(^\d{1,}.\d{0,8}$)/);if(e.length>1&&e.startsWith("0")&&!e.startsWith("0."))return r({crypto:Number(e).toString(),currency:t.toString()});r((function(n){return{crypto:""===e?"":a.test(e)?e:n.crypto,currency:t.toString()}}))},getCrypto:function(e,n){var t=m.a.getTransferredValue(Number(Number(n)/Number(e)),1);r({crypto:t.toLocaleString(),currency:n})}}}},70:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return u}));var r={colors:{red:"#B22222",blue:"#0066FF",black:"#000000",yellow:"#FFD700",gray:{50:"#F8F8F8",100:"#E8E8E8",200:"#808080",300:"#696969",400:"#808080",500:"#505050"}},fonts:{xxs:"0.5rem",xs:"0.7rem",sm:"0.9rem",default:"12px",lg:"1.2rem",xl:"1.5rem"}},a=t(8),c=t(5),o=t(321);function i(){var e=Object(a.a)(["\n    ","\n\n    * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }\n    \n    body {\n        padding: 20px 40px;\n    }\n\n    table {\n        border-spacing: 0;\n        border-style: none;\n        padding: 0;\n    }\n\n    td {\n        border-spacing: 0;\n        border-style: none;\n        padding: 0;\n    }\n"]);return i=function(){return e},e}var u=Object(c.createGlobalStyle)(i(),o.normalize)},81:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return O}));var r=t(0),a=t.n(r),c=t(69),o=t(32),i=t(9),u=t(24);function l(e){var n=e.isOnlyBookmark,t=void 0!==n&&n,r=e.viewType,l=void 0===r?"all":r,s=e.bookMark,d=void 0===s?[]:s,f=e.currency,m=void 0===f?[]:f,b=e.currencyType,g=void 0===b?"krw":b,p=e.onClick,h=e.onAddClick,E="usd"===g?"$":"\u20a9";return a.a.createElement(o.c,{"data-test-id":"currency-table"},a.a.createElement("thead",null,a.a.createElement("tr",null,i.b.TABLE.map((function(e,n){var t=e.name,r=e.width,c=e.align;return a.a.createElement("th",{key:"th-".concat(n),style:{width:r,textAlign:c}},t)})))),a.a.createElement("tbody",null,m.map((function(e,n){var r=e.id,i=e.name,s=e.symbol,f=e.current_price,m=e.price_change_percentage_1h_in_currency,b=e.price_change_percentage_24h_in_currency,g=e.price_change_percentage_7d_in_currency,h=e.total_volume,v=t||d.includes(r),y=Number(f),k=Number(m),x=Number(b),O=Number(g),_=Number(h),w=a.a.createElement("tr",{key:"currency-row-".concat(s,"-").concat(n)},a.a.createElement(o.b,{align:"center",color:"black"},a.a.createElement(o.a,{"data-test-id":"bookmark-add",isSelected:v,className:"fa fa-star",onClick:function(e){return p(r)}})),a.a.createElement(o.b,{align:"left",color:"black"},a.a.createElement("strong",null,a.a.createElement(c.b,{to:"/details/".concat(r)},i))),a.a.createElement(o.b,{align:"left"},a.a.createElement("strong",null,s.toUpperCase())),a.a.createElement(o.b,{align:"right",color:"black"},a.a.createElement("strong",null,"".concat(E).concat(u.b.getCurrencyFormat(y)))),a.a.createElement(o.b,{align:"right",color:k>0?"red":"blue"},k.toFixed(1),"%"),a.a.createElement(o.b,{align:"right",color:x>0?"red":"blue"},x.toFixed(1),"%"),a.a.createElement(o.b,{align:"right",color:O>0?"red":"blue"},O.toFixed(1),"%"),a.a.createElement(o.b,{align:"right",color:"black"},a.a.createElement("strong",null,"".concat(E).concat(u.b.getCurrencyFormat(_)))),a.a.createElement(o.b,null));return"bookmark"===l?v?w:null:w}))),!t&&a.a.createElement("tfoot",null,a.a.createElement("tr",null,a.a.createElement(o.b,{colSpan:9,align:"center"},a.a.createElement(o.d,{onClick:h},i.b.ADD_BTN)))))}var s=t(8),d=t(5);function f(){var e=Object(s.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n"]);return f=function(){return e},e}function m(){var e=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  text-align: center;\n  background-color: ",";\n"]);return m=function(){return e},e}var b=d.default.div(m(),(function(e){return e.theme.colors.gray[200]})),g=d.default.img(f()),p=function(){return a.a.createElement(b,{"data-test-id":"spinner"},a.a.createElement(g,{src:"".concat("/coin-chart","/tail-spin.svg")}))};function h(){var e=Object(s.a)(["\n  position: fixed;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  ",";\n  color: ",";\n  font-size: ",";\n  font-weight: bold;\n  text-align: center;\n  width: 180px;\n  line-height: 40px;\n  border-radius: 3px;\n  border: solid 1px ",";\n  background-color: ",";\n"]);return h=function(){return e},e}function E(){var e=Object(s.a)(["\n  animation-duration: 2.3s;\n  animation-timing-function: ease-out;\n  animation-name: ",";\n  animation-fill-mode: forwards;\n  animation-iteration-count: infinite;\n"]);return E=function(){return e},e}function v(){var e=Object(s.a)(["\n0% {\n    opacity: 1;\n}\n\n100% {\n    opacity: 0.3;\n}\n"]);return v=function(){return e},e}var y=Object(d.keyframes)(v()),k=Object(d.css)(E(),y),x=d.default.div(h(),k,(function(e){return e.theme.colors.black}),(function(e){return e.theme.fonts.xxs}),(function(e){return e.theme.colors.gray[500]}),(function(e){return e.theme.colors.blue})),O=function(e){var n=e.message;return a.a.createElement(x,{"data-test-id":"toast-popup"},n)}},858:function(e,n,t){"use strict";t.r(n);t(329),t(228),t(378);var r=t(0),a=t.n(r),c=t(63),o=t.n(c),i=t(69),u=t(23),l=t(5),s=t(39),d=t(70),f=t(8);function m(){var e=Object(f.a)([""]);return m=function(){return e},e}function b(){var e=Object(f.a)(["\n  width: 50%;\n  text-align: center;\n  line-height: 32px;\n  font-weight: bold;\n  box-sizing: border-box;\n\n  ","\n\n  a {\n    text-decoration: none;\n    ","\n  }\n\n  ","\n"]);return b=function(){return e},e}function g(){var e=Object(f.a)(["\n  background-color: white;\n  border-radius: 3px;\n  ","\n\n  a {\n    text-decoration: none;\n    ","\n  }\n"]);return g=function(){return e},e}function p(){var e=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"]);return p=function(){return e},e}function h(){var e=Object(f.a)(["\n  width: 100%;\n"]);return h=function(){return e},e}function E(){var e=Object(f.a)(["\n  margin: 0 auto;\n  min-width: 720px;\n"]);return E=function(){return e},e}function v(){var e=Object(f.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  }\n"]);return v=function(){return e},e}var y=l.default.div(v()),k=l.default.div(E()),x=l.default.section(h()),O=l.default.div.attrs((function(){return{"data-test-id":"tab"}}))(p()),_=Object(l.css)(g(),(function(e){var n=e.theme;return"color: ".concat(n.colors.black,";")}),(function(e){var n=e.theme;return"color: ".concat(n.colors.black,";")})),w=l.default.span.attrs((function(){return{"data-test-id":"tab-item"}}))(b(),(function(e){var n=e.theme;return"\n    color: ".concat(n.colors.gray[400],";\n    font-size: ").concat(n.fonts.default,";\n    border: solid 1px ").concat(n.colors.gray[100],";\n    background-color: ").concat(n.colors.gray[100],";")}),(function(e){var n=e.theme;return"color: ".concat(n.colors.gray[400],";")}),(function(e){return e.active&&_})),j=(l.default.div(m()),t(9)),T=t(52);function C(){var e=Object(T.h)(),n=e.tabIdx,t=e.updateTabIdx;return a.a.createElement(O,null,j.b.TAB.map((function(e,r){return a.a.createElement(w,{active:r===n,key:"tab-".concat(r)},a.a.createElement(i.b,{to:j.a.TAB[r],onClick:function(){return t(r)}},e))})))}var S=t(81),L=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,860))})),R=Object(r.lazy)((function(){return t.e(3).then(t.bind(null,861))})),A=function(){var e=Object(T.f)().isLoading,n=Object(T.i)().isToast;return a.a.createElement(y,null,a.a.createElement(k,null,a.a.createElement("header",null,a.a.createElement(x,null,a.a.createElement(C,null))),a.a.createElement("main",null,a.a.createElement(x,null,a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"".concat(j.a.CURRENCY)},a.a.createElement(r.Suspense,{fallback:a.a.createElement(S.a,null)},a.a.createElement(L,null))),a.a.createElement(u.b,{path:"".concat(j.a.BOOKMARK)},a.a.createElement(r.Suspense,{fallback:a.a.createElement(S.a,null)},a.a.createElement(R,null))),a.a.createElement(u.a,{from:"".concat(j.a.HOME),to:"".concat(j.a.CURRENCY)})))),e&&a.a.createElement(S.a,null),n.status&&a.a.createElement(S.c,{message:n.msg})))},I=t(204),N=t(32),F=t(24);function z(){var e=Object(f.a)(["\n  font-size: ",";\n  padding-top: 10px;\n  white-space: pre-line;\n  word-break: break-all;\n"]);return z=function(){return e},e}function B(){var e=Object(f.a)(["\n  width: 100%;\n  padding-top: 20px;\n  text-align: center;\n  line-height: 40px;\n  cursor: pointer;\n  font-size: ",";\n  border-bottom: solid 0.5px ",";\n"]);return B=function(){return e},e}function D(){var e=Object(f.a)(["\n  width: 10%;\n  border: none;\n  vertical-align: middle;\n  line-height: 32px;\n  padding-inline-start: 5px;\n  background-color: #f5f5f5;\n"]);return D=function(){return e},e}function M(){var e=Object(f.a)(["\n  width: ",";\n  border: ",";\n  line-height: ",";\n  height: ",";\n  margin-left: ",";\n  margin-right: ",";\n  padding: ",";\n"]);return M=function(){return e},e}function P(){var e=Object(f.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n"]);return P=function(){return e},e}function U(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n"]);return U=function(){return e},e}function K(){var e=Object(f.a)(["\n  width: 25%;\n  min-width: 120px;\n  padding: 5px 12px;\n  border: none;\n  text-align: right;\n  outline: none;\n  font-size: ",";\n"]);return K=function(){return e},e}function H(){var e=Object(f.a)(["\n  padding: 10px 10px;\n  box-sizing: border-box;\n  background-color: ",";\n\n  span {\n    font-size: ",";\n    font-weight: bold;\n  }\n"]);return H=function(){return e},e}function V(){var e=Object(f.a)(["\n  width: 50%;\n  border-style: solid;\n  border: solid 0.2px ",";\n  border-bottom: none;\n\n  tr {\n    line-height: 40px;\n  }\n\n  th {\n    text-align: left;\n    padding-inline-start: 10px;\n    box-sizing: border-box;\n\n    ","\n  }\n\n  th:first-child {\n    border-bottom: solid 0.2px ",";\n  }\n\n  td {\n    font-size: ",";\n    padding-inline-start: 10px;\n    border-bottom: solid 0.2px ",";\n\n    input {\n      line-height: 40px;\n      border: none;\n      text-align: right;\n      padding-inline-end: 10px;\n    }\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(f.a)(["\n  display: flex;\n"]);return Y=function(){return e},e}function G(){var e=Object(f.a)(["\n  font-size: ",";\n  line-height: 42px;\n\n  img {\n    padding: 0 7px;\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n  }\n"]);return G=function(){return e},e}var W=l.default.span(G(),(function(e){return e.theme.fonts.lg})),J=l.default.div(Y()),$=l.default.table(V(),(function(e){return e.theme.colors.gray[100]}),(function(e){var n=e.theme;return"\n            font-size: ".concat(n.fonts.xs,";\n            color: ").concat(n.colors.black,";\n            background-color: ").concat(n.colors.gray[100],";\n            ")}),(function(e){return e.theme.colors.gray[100]}),(function(e){return e.theme.fonts.default}),(function(e){return e.theme.colors.gray[100]})),X=l.default.div(H(),(function(e){return e.theme.colors.gray[100]}),(function(e){return e.theme.fonts.xxs})),q=l.default.input(K(),(function(e){return e.theme.fonts.xs})),Q=l.default.div(U()),Z=l.default.span(P(),(function(e){var n=e.fontSize;return Object(F.d)(n)}),(function(e){var n=e.color;return Object(F.c)(n)}),(function(e){return e.bold&&"bold"})),ee=l.default.div(M(),(function(e){return e.width}),(function(e){return e.border}),(function(e){return e.lineHeight}),(function(e){return e.height}),(function(e){return e.marginLeft}),(function(e){return e.marginRight}),(function(e){return e.padding})),ne=l.default.div(D()),te=l.default.div(B(),(function(e){return e.theme.fonts.xxs}),(function(e){return e.theme.colors.gray[100]})),re=l.default.p(z(),(function(e){return e.theme.fonts.xs}));function ae(){var e=Object(T.d)(Object(u.h)()),n=e.details,t=e.open,r=e.setOpen,c=e.currencyType,o=Object(T.f)().isLoading,i=Object(T.i)().isToast,l=Object(T.e)().updateFilter,s=Object(T.g)(),d=s.bookmark,f=s.updateBookmark,m=Object(T.b)(),b=m.result,g=m.getCurrency,p=m.getCrypto,h=n.id,E=n.symbol,v=n.market_cap_rank,O=n.market_data,_=O.market_cap_change_percentage_24h,w=O.market_cap_change_24h_in_currency,C=O.total_volume,L=O.price_change_percentage_1h_in_currency,R=O.current_price,A=n.localization,z=n.description,B=n.image.thumb,D=n.links.homepage,M="usd"===c?"$":"\u20a9",P="usd"===c?A.en:A.ko,U="usd"===c?L.usd:L.krw,K="usd"===c?z.en:z.ko,H="usd"===c?C.usd:C.krw,V="usd"===c?w.usd:w.krw,Y=_,G="usd"===c?R.usd:R.krw;return a.a.createElement(y,null,a.a.createElement(k,null,a.a.createElement(I.a,null,a.a.createElement(W,null,a.a.createElement(N.a,{"data-test-id":"bookmark-add",isSelected:d.includes(h),className:"fa fa-star",onClick:function(){return f(h)}}),a.a.createElement("img",{src:B||"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",alt:"thumbnail"}),P," ","(".concat(E.toUpperCase(),")")),a.a.createElement(I.b,{"data-test-id":"details-currency-type-select",marginLeft:"auto",onChange:function(e){return l(e.target.value)}},j.b.FILTER.CURRENCY.map((function(e){return a.a.createElement("option",{key:"view-type-".concat(e),value:e},e)})))),a.a.createElement(x,null,a.a.createElement(J,null,a.a.createElement($,null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{width:"20%"}},j.b.DETAILS.RANK),a.a.createElement("td",null,"Rank #".concat(v))),a.a.createElement("tr",null,a.a.createElement("th",null,j.b.DETAILS.SITE),a.a.createElement("td",null,D[0])))),a.a.createElement("div",{style:{width:"50%"}},a.a.createElement(Q,null,a.a.createElement("div",{style:{width:"25%",marginLeft:"auto"}},a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{"data-test-id":"currency-text",fontSize:"sm",color:"black",bold:!0},"".concat(M).concat(F.b.getCurrencyFormat(G)))),a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{fontSize:"xs"},"1.00000000 ".concat(String(E).toUpperCase())))),a.a.createElement("div",{style:{marginLeft:"10px"}},a.a.createElement("div",null,a.a.createElement(Z,{color:Number(U)>0?"red":"blue",bold:!0},F.b.getPercentFormat(U,1),"%")),a.a.createElement("div",null,a.a.createElement(Z,{color:Number(Y)>0?"red":"blue",fontSize:"xxs"},F.b.getPercentFormat(Y,1),"%")))),a.a.createElement(Q,null,a.a.createElement("div",{style:{width:"25%",marginLeft:"25%"}},a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{fontSize:"xs",color:"black"},j.b.DETAILS.MARKET_CAP)),a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{fontSize:"xs",color:"black"},"".concat(M).concat(F.b.getCurrencyFormat(H))))),a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{fontSize:"xs",color:"black"},j.b.DETAILS.EXCHANGE_AMT_24)),a.a.createElement("div",{style:{textAlign:"right"}},a.a.createElement(Z,{fontSize:"xs",color:"black"},"".concat(M).concat(F.b.getCurrencyFormat(V))))))))),a.a.createElement(ee,{padding:"20px 0 0 0"}),a.a.createElement(x,null,a.a.createElement(X,null,a.a.createElement(ee,null,a.a.createElement("span",null,j.b.DETAILS.CALCULATE_PRICE)),a.a.createElement(Q,null,a.a.createElement(ne,null,String(E).toUpperCase()),a.a.createElement(q,{"data-test-id":"crypto-input",type:"text",value:b.crypto,onChange:function(e){return g(e.target.value.replace(/[^0-9.]/g,""),G)}}),a.a.createElement("div",{style:{width:"10%",lineHeight:"32px",textAlign:"center"}},"\u21c6"),a.a.createElement(ne,{"data-test-id":"currency-type-title"},String(c).toUpperCase()),a.a.createElement(q,{"data-test-id":"currency-input",type:"text",value:Number(b.currency||0).toLocaleString(),onChange:function(e){return p(G,e.target.value.replace(/[^0-9]/g,""))}})),a.a.createElement(ee,{height:"20px"}))),a.a.createElement(x,null,a.a.createElement(te,{"data-test-id":"show-desc-btn",onClick:function(){return r(!0)}},j.b.DETAILS.DESCRIPTION," \u25bc"),t&&a.a.createElement(re,{"data-test-id":"show-desc-content"},K)),o&&a.a.createElement(S.a,null),i.status&&a.a.createElement(S.c,{message:i.msg})))}var ce=function(){return a.a.createElement(l.ThemeProvider,{theme:d.b},a.a.createElement(s.a,null,a.a.createElement(i.a,{basename:"/coin-chart"},a.a.createElement(u.d,null,a.a.createElement(u.b,{path:"".concat(j.a.DETAILS,"/:id")},a.a.createElement(ae,null)),a.a.createElement(u.b,{path:["".concat(j.a.HOME),"".concat(j.a.BOOKMARK),"*"]},a.a.createElement(A,null))))))},oe=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,859)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d.a,null),a.a.createElement(ce,null)),document.getElementById("root")),oe()},9:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r=Object.freeze({DETAILS:{RANK:"\uc2dc\uac00\ucd1d\uc561 Rank",SITE:"\uc6f9\uc0ac\uc774\ud2b8",MARKET_CAP:"\uc2dc\uac00\ucd1d\uc561",EXCHANGE_AMT_24:"\uac70\ub798\ub300\uae08",CALCULATE_PRICE:"\uac00\uaca9\uacc4\uc0b0",DESCRIPTION:"\uc124\uba85\ubcf4\uae30"},TAB:["\uac00\uc0c1\uc790\uc0b0 \uc2dc\uc138 \ubaa9\ub85d","\ubd81\ub9c8\ud06c \ubaa9\ub85d"],FILTER:{VIEW_TYPE:["\uc804\uccb4\ubcf4\uae30","\ubd81\ub9c8\ud06c \ubcf4\uae30"],CURRENCY:["KRW \ubcf4\uae30","USD \ubcf4\uae30"],LIST_NUMBER:["50\uac1c \ubcf4\uae30","30\uac1c \ubcf4\uae30","10\uac1c \ubcf4\uae30"]},ADD_BTN:"+ \ub354\ubcf4\uae30",BOOKMARK_MSG:["\ubd81\ub9c8\ud06c\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.","\ubd81\ub9c8\ud06c\uac00 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."],TABLE:[{name:"",width:"5%",align:"center"},{name:"\uc790\uc0b0",width:"20%",align:"left"},{name:"",width:"5%",align:"right"},{name:"Price",width:"15%",align:"right"},{name:"1H",width:"10%",align:"right"},{name:"24H",width:"10%",align:"right"},{name:"7D",width:"10%",align:"right"},{name:"24H Volume",width:"22%",align:"right"},{name:"",width:"3%",align:"center"}]}),a=Object.freeze({HOME:"/",CURRENCY:"/market",BOOKMARK:"/bookmark",DETAILS:"/details",TAB:["/market","/bookmark"]})}},[[328,1,2]]]);
//# sourceMappingURL=main.72c7a831.chunk.js.map