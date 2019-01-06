webpackJsonp([1],{"+6dX":function(t,a){},"5SJC":function(t,a){},KlcD:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var e=n("VU/8")({name:"App"},i,!1,function(t){n("duau")},null,null).exports,r=n("/ocq"),o={hiragana:[["あ","い","う","え","お"],["か","き","く","け","こ"],["さ","し","す","せ","そ"],["た","ち","つ","て","と"],["な","に","ぬ","ね","の"],["は","ひ","ふ","へ","ほ"],["ま","み","む","め","も"],["や","い","ゆ","え","よ"],["ら","り","る","れ","ろ"],["わ","い","う","え","を"]],katakana:[["ァ","ィ","ゥ","ェ","ォ"],["カ","キ","ク","ケ","コ"],["サ","シ","ス","セ","ソ"],["タ","チ","ツ","テ","ト"],["ナ","ニ","ヌ","ネ","ノ"],["ハ","ヒ","フ","ヘ","ホ"],["マ","ミ","ム","メ","モ"],["ャ","ィ","ュ","ェ","ョ"],["ラ","リ","ル","レ","ロ"],["ヮ","ィ","ゥ","ェ","ヲ"]],sound:[["a","i","u","e","o"],["ka","ki","ku","ke","ko"],["sa","shi","su","se","so"],["ta","chi","tsu","te","to"],["na","ni","nu","ne","no"],["ha","hi","fu","he","ho"],["ma","mi","mu","me","mo"],["ya","i","yu","e","yo"],["ra","ri","ru","re","ro"],["wa","i","u","e","o"]]},l={name:"Words",computed:{hiragana:function(){return this.isHiragana?o.hiragana:o.katakana}},data:function(){return{isHiragana:!0}},methods:{toggle:function(t){this.isHiragana=t}}},c={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",[n("div",{staticClass:"btn-group"},[n("button",{class:["btn",t.isHiragana&&"active"],on:{click:function(a){t.toggle(!0)}}},[t._v("平假名")]),t._v(" "),n("button",{class:["btn",t.isHiragana||"active"],on:{click:function(a){t.toggle(!1)}}},[t._v("片假名")])]),t._v(" "),n("div",{staticClass:"grid"},t._l(t.hiragana,function(a,s){return n("div",{key:s,staticClass:"row"},t._l(a,function(a,s){return n("div",{key:s,staticClass:"cell"},[n("span",{staticClass:"text"},[t._v(t._s(a))])])}),0)}),0)]),t._v(" "),n("div",{staticStyle:{overflow:"hidden"}},[n("router-link",{staticClass:"btn btn-primary left",attrs:{to:"/test"}},[t._v("开始测评")]),t._v(" "),n("router-link",{staticClass:"btn btn-default right",attrs:{to:"/list"}},[t._v("生词表")])],1)])},staticRenderFns:[]};var d=n("VU/8")(l,c,!1,function(t){n("+6dX")},"data-v-64e7b9fa",null).exports,u=n("mvHQ"),v=n.n(u),h={data:function(){return{ind:[0,0]}},computed:{hiragana:function(){return o.hiragana[this.ind[0]][this.ind[1]]},katakana:function(){return o.katakana[this.ind[0]][this.ind[1]]}},methods:{generateInd:function(){this.ind=[this.getRandom(10),this.getRandom(5)]},getRandom:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(t-a))},forget:function(){var t=window.localStorage.getItem("wordIndexArr"),a=JSON.parse(t)||{},n=this.ind[0]+""+this.ind[1];a[n]?a[n]++:a[n]=1,window.localStorage.setItem("wordIndexArr",v()(a)),this.generateInd()},remember:function(){var t=window.localStorage.getItem("wordIndexArr")||"{}",a=JSON.parse(t)||{},n=this.ind[0]+""+this.ind[1];a[n]&&delete a[n],window.localStorage.setItem("wordIndexArr",v()(a)),this.generateInd()},toggle:function(t){var a=document.querySelectorAll(".box");t?(a[0].style.transform="rotateY(180deg)",a[1].style.transform="rotateY(0deg)"):(a[1].style.transform="rotateY(-180deg)",a[0].style.transform="rotateY(0deg)")}},created:function(){this.generateInd()}},_={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("h5",{staticClass:"title"},[t._v("随机测评")]),t._v(" "),n("div",{staticClass:"card-wpt"},[n("div",{staticClass:"card"},[n("div",{staticClass:"box",on:{click:function(a){t.toggle(!0)}}},[t._v(t._s(t.hiragana))]),t._v(" "),n("div",{staticClass:"box",on:{click:function(a){t.toggle(!1)}}},[t._v(t._s(t.katakana))])]),t._v(" "),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn left btn-default",on:{click:t.forget}},[t._v("x")]),t._v(" "),n("button",{staticClass:"btn right btn-success",on:{click:t.remember}},[t._v("√")])])]),t._v(" "),n("div",{staticClass:"bottom"},[n("router-link",{staticClass:"btn btn-primary left",attrs:{to:"/"}},[t._v("基础音图")]),t._v(" "),n("router-link",{staticClass:"btn btn-default right",attrs:{to:"/list"}},[t._v("生词本")])],1)])},staticRenderFns:[]};var f=n("VU/8")(h,_,!1,function(t){n("5SJC")},"data-v-29dff924",null).exports,m={data:function(){return{arr:[],modal:!1}},created:function(){var t=JSON.parse(window.localStorage.getItem("wordIndexArr"));console.log(t);var a=[];for(var n in t){var s=n.split("");a.push({s:o.sound[s[0]][s[1]],hira:o.hiragana[s[0]][s[1]],kata:o.katakana[s[0]][s[1]],count:t[n]})}this.arr=a},methods:{showModal:function(t){this.modal=t},clear:function(){window.localStorage.removeItem("wordIndexArr"),this.arr=[],this.modal=!1}}},g={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("h5",{staticClass:"title"},[t._v("生词本")]),t._v(" "),t.arr.length>0?n("div",{staticClass:"list-wpt"},[t._m(0),t._v(" "),n("ul",{staticClass:"list-body"},t._l(t.arr,function(a,s){return n("li",{key:s,staticClass:"list-item"},[n("span",{staticClass:"col col1"},[t._v(t._s(a.s))]),t._v(" "),n("span",{staticClass:"col col2"},[t._v(t._s(a.hira))]),t._v(" "),n("span",{staticClass:"col col3"},[t._v(t._s(a.kata))]),t._v(" "),n("span",{staticClass:"col col4"},[t._v(t._s(a.count))])])}),0)]):n("div",{staticClass:"no-list"},[t._v("很棒哦，生词一个都没有え")]),t._v(" "),n("div",{staticClass:"btn-group"},[t.arr.length>0?n("button",{staticClass:"btn btn-default",staticStyle:{"margin-right":"30px"},on:{click:function(a){t.showModal(!0)}}},[t._v("清空生词本")]):t._e(),t._v(" "),n("router-link",{staticClass:"btn btn-primary",attrs:{tag:"button",to:"/test"}},[t._v("开始评测")])],1),t._v(" "),n("transition",{attrs:{name:"modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modal-bg"},[n("div",{staticClass:"modal"},[n("h3",{staticClass:"modal-title"},[t._v("\n                    清空操作会删除所有生词记录，确定清空生词表吗？\n                ")]),t._v(" "),n("div",{staticClass:"modal-bottom"},[n("button",{staticClass:"btn btn-default",on:{click:function(a){t.showModal(!1)}}},[t._v("取消")]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:t.clear}},[t._v("确定")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"list-title"},[a("span",{staticClass:"col col1"},[this._v("读音")]),this._v(" "),a("span",{staticClass:"col col2"},[this._v("平假名")]),this._v(" "),a("span",{staticClass:"col col3"},[this._v("片假名")]),this._v(" "),a("span",{staticClass:"col col4"},[this._v("频率")])])}]};var p=n("VU/8")(m,g,!1,function(t){n("KlcD")},"data-v-139fbe57",null).exports;s.a.use(r.a);var b=new r.a({routes:[{path:"/",name:"Words",component:d},{path:"/test",name:"Test",component:f},{path:"/list",name:"Lists",component:p}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:b,components:{App:e},template:"<App/>"})},duau:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.82f0890b003bea481bce.js.map