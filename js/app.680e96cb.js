(function(e){function t(t){for(var n,o,c=t[0],s=t[1],l=t[2],u=0,h=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,c=1;c<i.length;c++){var s=i[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"03bc":function(e,t,i){"use strict";i("c861")},1779:function(e,t,i){"use strict";i("2405")},"1fe7":function(e,t,i){"use strict";i("23da")},"23da":function(e,t,i){},2405:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o={name:"App"},c=o,s=(i("1fe7"),i("2877")),l=Object(s["a"])(c,r,a,!1,null,"39eef07a",null),d=l.exports,u=i("5f2b"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("video",{attrs:{id:"video"}}),i("br"),i("button",{on:{click:e.closeVedio}},[e._v("close")])])},p=[],v=(i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"App",data:function(){return{mediaStreamTrack:null}},created:function(){var e=this;this.$nextTick((function(){var t=e;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(i,n){t.call(navigator,e,i,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:{width:1e3,height:1e3}}).then((function(e){var i=document.querySelector("video");t.mediaStreamTrack=e,"srcObject"in i?i.srcObject=e:i.src=window.URL.createObjectURL(e),i.onloadedmetadata=function(){i.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))}))},methods:{closeVedio:function(){this.mediaStreamTrack.getTracks()[0].stop(),this.mediaStreamTrack.getTracks()[1].stop()}}}),g=v,m=(i("03bc"),Object(s["a"])(g,h,p,!1,null,null,null)),f=m.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("router-link",{attrs:{to:"/faceDetect"}},[e._v("人脸识别")]),i("br"),i("router-link",{attrs:{to:"/face"}},[e._v("缓冲")])],1)},b=[],w={},x=Object(s["a"])(w,y,b,!1,null,null,null),S=x.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"box"}},[i("div",{staticClass:"circle left"},[i("div",{staticClass:"circleleft"})]),i("div",{staticClass:"circle right"},[i("div",{staticClass:"circleright"})]),i("div",{attrs:{id:"vedioContaniner"}},[i("video",{attrs:{id:"video"}})])]),i("p",[e._v("屏幕即将闪烁，请保持姿势不变")]),i("canvas",{staticStyle:{display:"none"},attrs:{id:"canvas"}})])}],_={data:function(){return{mediaStreamTrack:null,containerWidth:null,containerHeight:null,pictureUrl:null}},created:function(){var e=this;this.$nextTick((function(){e.getValue(),e.startVedio(),setTimeout((function(){e.createPicture(),e.closeVedio()}),5e3)}))},methods:{startVedio:function(){var e=this;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(i,n){t.call(navigator,e,i,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:{width:1e3,height:1e3}}).then((function(t){var i=document.querySelector("video");e.mediaStreamTrack=t,"srcObject"in i?i.srcObject=t:i.src=window.URL.createObjectURL(t),i.onloadedmetadata=function(){i.play()}})).catch((function(e){console.log(e.name+": "+e.message)}))},closeVedio:function(){console.log("close"),this.mediaStreamTrack.getTracks()[0].stop()},getStyle:function(){var e=document.getElementById("container");return console.log(e),window.getComputedStyle?(console.log("getComputedStyle"),window.getComputedStyle(e,null)):(console.log("currentStyle"),e.currentStyle)},getValue:function(){var e=this.getStyle();console.log("height:",e.height),console.log("width:",e.width),this.containerWidth=e.width,this.containerHeight=e.height;var t=document.getElementById("box"),i=document.getElementsByClassName("circleleft"),n=document.getElementsByClassName("circleright"),r=document.getElementsByClassName("circle"),a=document.getElementById("video"),o=document.getElementById("canvas");console.log(i),t.style.height=parseFloat(this.containerWidth)/3*2+"px",t.style.width=parseFloat(this.containerWidth)/3*2+"px",i[0].style.height=parseFloat(this.containerWidth)/3*2+"px",i[0].style.width=parseFloat(this.containerWidth)/3*2+"px",n[0].style.height=parseFloat(this.containerWidth)/3*2+"px",n[0].style.width=parseFloat(this.containerWidth)/3*2+"px",r[0].style.height=parseFloat(this.containerWidth)/3*2+"px",r[0].style.width=parseFloat(this.containerWidth)/3+"px",r[1].style.height=parseFloat(this.containerWidth)/3*2+"px",r[1].style.width=parseFloat(this.containerWidth)/3+"px",a.style.height=parseFloat(this.containerWidth)/3*2+"px",a.style.width=parseFloat(this.containerWidth)/3*2+"px",o.style.height=parseFloat(this.containerWidth)/3*2+"px",o.style.width=parseFloat(this.containerWidth)/3*2+"px",t.style.marginTop=(parseFloat(this.containerHeight)-parseFloat(this.containerWidth))/2+"px",t.style.marginLeft=parseFloat(this.containerWidth)/6+"px",console.log("box.style.height:",t.style.height,"box.style.width:",t.style.width)},createPicture:function(){var e=document.getElementById("canvas"),t=document.getElementById("video"),i=e.getContext("2d"),n=parseFloat(this.containerWidth)/3*2,r=parseFloat(this.containerWidth)/3*2;i.drawImage(t,0,0,n,r),this.pictureUrl=e.toDataURL().substr(22),console.log(this.pictureUrl)}}},k=_,U=(i("1779"),Object(s["a"])(k,j,O,!1,null,"019c64ee",null)),W=U.exports;n["a"].use(u["a"]);var F=[{path:"*",redirect:"/"},{path:"/faceDetect",component:f},{path:"/",component:S},{path:"/face",component:W}],T=new u["a"]({routes:F}),E=T;n["a"].config.productionTip=!1,new n["a"]({router:E,render:function(e){return e(d)}}).$mount("#app")},c861:function(e,t,i){}});
//# sourceMappingURL=app.680e96cb.js.map