(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"44bf":function(e,t,n){"use strict";n("4611")},4611:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid p-0"},[e._m(0),n("div",{staticClass:"container p-0"},[n("DiscsContainer")],1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-nav"},[r("img",{attrs:{src:n("5c10"),alt:"logo"}})])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SelectGenre",{on:{genreClick:e.genreFilter}}),n("div",{staticClass:"row row-cols-5 g-4"},e._l(e.filteredGenreCom,(function(e,t){return n("div",{key:t,staticClass:"col"},[n("SingleDisc",{attrs:{poster:e.poster,title:e.title,author:e.author,genre:e.genre,year:e.year}})],1)})),0),!0===e.loading?n("Loader",{attrs:{label:"Pacman"}}):e._e()],1)},o=[],l=(n("4de4"),n("d3b7"),n("bc3a")),c=n.n(l),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:e.poster,alt:e.title}}),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v(e._s(e.title))]),n("p",{staticClass:"card-text"},[e._v(e._s(e.author))]),n("p",{staticClass:"card-text"},[e._v(e._s(e.year))])])])},p=[],f={name:"SingleDisc",props:{poster:String,title:String,author:String,genre:String,year:String}},d=f,v=n("2877"),g=Object(v["a"])(d,u,p,!1,null,null,null),m=g.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader-container"},[n("div",{staticClass:"loader"},[n("div",{staticClass:"circles"},[n("span",{staticClass:"one"}),n("span",{staticClass:"two"}),n("span",{staticClass:"three"})]),n("div",{staticClass:"pacman"},[n("span",{staticClass:"top"}),n("span",{staticClass:"bottom"}),n("span",{staticClass:"left"}),n("div",{staticClass:"eye"})])])])}],b={name:"Loader",props:["label"]},C=b,y=(n("44bf"),Object(v["a"])(C,h,_,!1,null,"95ab50ac",null)),w=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{directives:[{name:"model",rawName:"v-model",value:e.genreValue,expression:"genreValue"}],staticClass:"form-select",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genreValue=t.target.multiple?n:n[0]},function(t){return e.$emit("genreClick",e.genreValue)}]}},[n("option",{attrs:{value:""}},[e._v("Tutti i Generi")]),n("option",{attrs:{value:"rock"}},[e._v("Rock")]),n("option",{attrs:{value:"pop"}},[e._v("Pop")]),n("option",{attrs:{value:"jazz"}},[e._v("Jazz")]),n("option",{attrs:{value:"metal"}},[e._v("Metal")])])},O=[],S={name:"SelectGenre",data:function(){return{genreValue:""}}},j=S,G=Object(v["a"])(j,x,O,!1,null,null,null),P=G.exports,$={name:"DiscsContainer",components:{SingleDisc:m,Loader:w,SelectGenre:P},data:function(){return{discList:[],loading:!0,filteredGenre:""}},methods:{genreFilter:function(e){this.filteredGenre=e}},mounted:function(){var e=this;c.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.discList=t.data.response,setTimeout((function(){e.loading=!1}),1500)}))},computed:{filteredGenreCom:function(){var e=this;return this.filteredGenre?this.discList.filter((function(t){return e.filteredGenre===t.genre.toLowerCase()})):this.discList}}},k=$,L=Object(v["a"])(k,s,o,!1,null,null,null),E=L.exports,D={name:"App",components:{DiscsContainer:E}},M=D,T=(n("5c0b"),Object(v["a"])(M,a,i,!1,null,null,null)),V=T.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5c10":function(e,t,n){e.exports=n.p+"img/spotify-logo-png.daf13776.png"},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.28ca2967.js.map