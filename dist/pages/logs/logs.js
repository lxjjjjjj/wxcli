!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map((function(e){return r.formatTime(new Date(e))}))})}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=function(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[t,n,o].map(r).join("/")+" "+[u,i,a].map(r).join(":")};var r=function(e){var t=e.toString();return t[1]?t:"0"+t}}]);