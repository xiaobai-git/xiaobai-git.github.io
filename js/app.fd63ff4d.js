(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],d=0,h=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17fc":function(t,e,n){},"1fe7":function(t,e,n){"use strict";n("23da")},"218c":function(t,e,n){"use strict";n("a9a5")},"23da":function(t,e,n){},"3cd2":function(t,e,n){},"3e87":function(t,e,n){"use strict";n("17fc")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={name:"App"},c=o,s=(n("1fe7"),n("2877")),l=Object(s["a"])(c,a,r,!1,null,"39eef07a",null),u=l.exports,d=n("5f2b"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[t._m(0),n("p",{attrs:{id:"checkContainer"}},[n("el-checkbox",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._v(t._s(t.char))]),t._m(1)],1),n("el-button",{attrs:{type:"primary",disabled:!t.value},on:{click:t.face}},[t._v("下一步")])],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head"}},[n("div",{attrs:{id:"headIcon"}},[n("i",{staticClass:"el-icon-user"})]),n("p",{attrs:{id:"headExplain"}},[t._v("请进行人脸识别验证身份"),n("br"),t._v("并保证本人操作")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"checkExplain"}},[t._v("你悉知并同意，华为将使用并传送你所提交的相关数据"),n("a",{staticStyle:{"text-decoration":"none",color:"gray"}},[t._v("查看详情")])])}],f={data:function(){return{char:"",value:!1}},methods:{face:function(){this.$router.push("/face")}}},m=f,g=(n("b69c"),Object(s["a"])(m,h,p,!1,null,"0afbac3a",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[t._m(0),n("p",[t._v(t._s(t.context))]),n("canvas",{staticStyle:{display:"none"},attrs:{id:"canvas"}})])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("div",{staticClass:"circle left"},[n("div",{staticClass:"circleleft"})]),n("div",{staticClass:"circle right"},[n("div",{staticClass:"circleright"})]),n("div",{attrs:{id:"vedioContaniner"}},[n("video",{attrs:{id:"video"}})])])}],x=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),{data:function(){return{mediaStreamTrack:null,containerWidth:null,containerHeight:null,pictureUrl:null,context:"摄像头载入中，请稍后"}},created:function(){var t=this;this.$nextTick((function(){t.getValue(),t.startVedio(),setTimeout((function(){t.context="屏幕即将闪烁，请保持姿势不变"}),2e3),setTimeout((function(){t.createPicture(),t.closeVedio(),t.$router.push({name:"confirm",params:{pictureUrl:t.pictureUrl}}).catch((function(t){console.log(t)}))}),8e3)}))},methods:{startVedio:function(){var t=this;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e?new Promise((function(n,i){e.call(navigator,t,n,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia({video:{width:1e3,height:1e3}}).then((function(e){var n=document.querySelector("video");t.mediaStreamTrack=e,"srcObject"in n?n.srcObject=e:n.src=window.URL.createObjectURL(e),n.onloadedmetadata=function(){n.play()}})).catch((function(t){console.log(t.name+": "+t.message)}))},closeVedio:function(){console.log("close"),this.mediaStreamTrack.getTracks()[0].stop()},getStyle:function(){var t=document.getElementById("container");return console.log(t),window.getComputedStyle?(console.log("getComputedStyle"),window.getComputedStyle(t,null)):(console.log("currentStyle"),t.currentStyle)},getValue:function(){var t=this.getStyle();console.log("height:",t.height),console.log("width:",t.width),this.containerWidth=t.width,this.containerHeight=t.height;var e=document.getElementById("box"),n=document.getElementsByClassName("circleleft"),i=document.getElementsByClassName("circleright"),a=document.getElementsByClassName("circle"),r=document.getElementById("video"),o=document.getElementById("canvas");console.log(n),e.style.height=parseFloat(this.containerWidth)/3*2+"px",e.style.width=parseFloat(this.containerWidth)/3*2+"px",n[0].style.height=parseFloat(this.containerWidth)/3*2+"px",n[0].style.width=parseFloat(this.containerWidth)/3*2+"px",i[0].style.height=parseFloat(this.containerWidth)/3*2+"px",i[0].style.width=parseFloat(this.containerWidth)/3*2+"px",a[0].style.height=parseFloat(this.containerWidth)/3*2+"px",a[0].style.width=parseFloat(this.containerWidth)/3+"px",a[1].style.height=parseFloat(this.containerWidth)/3*2+"px",a[1].style.width=parseFloat(this.containerWidth)/3+"px",r.style.height=parseFloat(this.containerWidth)/3*2+"px",r.style.width=parseFloat(this.containerWidth)/3*2+"px",o.style.height=parseFloat(this.containerWidth)/3*2+"px",o.style.width=parseFloat(this.containerWidth)/3*2+"px",e.style.marginTop=(parseFloat(this.containerHeight)-parseFloat(this.containerWidth))/2+"px",e.style.marginLeft=parseFloat(this.containerWidth)/6+"px",console.log("box.style.height:",e.style.height,"box.style.width:",e.style.width)},createPicture:function(){var t=document.getElementById("canvas"),e=document.getElementById("video"),n=t.getContext("2d"),i=parseFloat(this.containerWidth)/3*2,a=parseFloat(this.containerWidth)/3*2;n.drawImage(e,0,0,i,a),this.pictureUrl=t.toDataURL().substr(22)}}}),_=x,w=(n("218c"),Object(s["a"])(_,b,y,!1,null,"6fd0d6ca",null)),E=w.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("div",{attrs:{id:"picture"}},[i("img",{attrs:{src:n("7f30")}})])])}],O=n("bc3a"),W=n.n(O),F=W.a.create({timeout:16e4}),S=F,k={data:function(){return{pictureUrl:null}},created:function(){var t=this;this.pictureUrl=this.$route.params.pictureUrl,this.sendReq().then((function(e){var n=e.data;console.log("data--",n),console.log("msg--",n.msg),console.log("imgbase64--",n.imgbase64),"success"==n.msg?t.$router.push({name:"success",params:{imgbase64:n.imgbase64}}).catch((function(t){console.log(t)})):"null"==n.msg&&t.$router.push({name:"fail"}).catch((function(t){console.log(t)}))})).catch((function(e){console.log(e),t.$router.push({name:"fail"}).catch((function(t){console.log(t)}))}))},methods:{sendReq:function(){return S.post("http://zxz.vaiwan.com/API/face",{img:this.pictureUrl})}}},U=k,C=(n("3e87"),Object(s["a"])(U,$,j,!1,null,"36f37188",null)),P=C.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[t._m(0),n("el-button",{attrs:{type:"primary"},on:{click:t.goback}},[t._v("返回")])],1)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"icon"}},[n("i",{staticClass:"el-icon-warning-outline"}),n("p",[t._v("人脸认证失败")])])}],B={data:function(){return{}},methods:{goback:function(){this.$router.push("/")}}},I=B,D=(n("d5cb"),Object(s["a"])(I,T,M,!1,null,"57772488",null)),V=D.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.imgbase644,alt:""}})])},L=[],q={data:function(){return{imgbase64:null}},created:function(){this.imgbase64="data:image/jpeg;base64,"+this.$route.params.imgbase64}},z=q,H=Object(s["a"])(z,R,L,!1,null,null,null),N=H.exports;i["default"].use(d["a"]);var A=[{path:"*",redirect:"/"},{path:"/",component:v},{path:"/face",component:E},{path:"/confirm",component:P,name:"confirm"},{path:"/fail",component:V,name:"fail"},{path:"/success",component:N,name:"success"}],G=new d["a"]({routes:A}),J=G,K=n("5c96"),Q=n.n(K);n("0fae");i["default"].use(Q.a),i["default"].config.productionTip=!1,new i["default"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"7f30":function(t,e,n){t.exports=n.p+"img/confirm.a5994e29.png"},a9a5:function(t,e,n){},b56c:function(t,e,n){},b69c:function(t,e,n){"use strict";n("3cd2")},d5cb:function(t,e,n){"use strict";n("b56c")}});
//# sourceMappingURL=app.fd63ff4d.js.map