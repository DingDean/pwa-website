webpackJsonp([3],[,,function(t,n,e){"use strict";n.a={data:function(){return{isShown:{mainHeader:!0,info:!1,projects:!1,music:!1,install:!1}}},components:{project:function(){return e.e(0).then(e.bind(null,18))},music:function(){return e.e(1).then(e.bind(null,19))}},methods:{toggle:function(t){this.isShown.hasOwnProperty(t)&&(this.isShown[t]=!this.isShown[t],"info"===t&&(this.isShown.install=this.isShown.info&&document.__pwaPrompt))},install:function(){document.__pwaPrompt.prompt(),document.__pwaPrompt.userChoice.then(function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),document.__pwaPrompt=null})}}}},,function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(1),a=e(8),s=e(14);i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,render:function(t){return t(a.a)}})},,,,function(t,n,e){"use strict";function i(t){e(9)}var a=e(2),s=e(11),r=e(3),o=i,c=r(a.a,s.a,!1,o,null,null);n.a=c.exports},function(t,n){},,function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("main",[e("div",{staticClass:"grid-center"}),t._v(" "),e("header",{staticClass:"grid-center",attrs:{id:"welcome-msg"}},[e("transition",{attrs:{appear:"",name:"slide-left-right",mode:"out-in"}},[t.isShown.mainHeader?e("div",{key:"default",staticClass:"laminated",on:{click:function(n){t.toggle("mainHeader")}}},[e("h1",[t._v("哦，嘿，你来了")]),t._v(" "),e("h1",[t._v("倍感荣幸")]),t._v(" "),e("h1",[t._v("我叫丁科")]),t._v(" "),e("h1",[t._v("欢迎来到我的二向箔")])]):t._e(),t._v(" "),t.isShown.mainHeader?t._e():e("div",{key:"hidden",staticClass:"laminated",on:{click:function(n){t.toggle("mainHeader")}}},[e("h1",[t._v("弹星者与二向箔")]),t._v(" "),e("p",[t._v("音乐，终端与命令行。")]),t._v(" "),e("p",[t._v("平日的生活简单如斯。")]),t._v(" "),e("p",[t._v("在一个喧嚣的都市，却活在一个容器里。")]),t._v(" "),e("p",[t._v("这容器是自我，是象牙塔。")]),t._v(" "),e("p",[t._v("难以分享，难以自察。")]),t._v(" "),e("p",[t._v("挣扎于内心，却外示以冷静。")]),t._v(" "),e("p",[t._v("在每日的独行中，笑过，怒过，哭过，之后重头来过。")]),t._v(" "),e("p",[t._v("无意或有意，自己正在二维化。")]),t._v(" "),e("p",[t._v("所以每天唯有音乐，终端与命令行。")]),t._v(" "),e("p",[t._v("现实塌陷在网络，然投影却比真身更加代表自己。")]),t._v(" "),e("p",[t._v("我是我自己的弹星者，向宇宙广播着我的存在。")]),t._v(" "),e("p",[t._v("这是我力所能及的尝试。")]),t._v(" "),e("p",[t._v("我将我自己掷入二向箔。")]),t._v(" "),e("p",[t._v("所以，你好，歌者，再次欢迎你来到我的这片水塘。")])])])],1),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[e("div",{staticClass:"grid-center",attrs:{id:"contact-info"}},[e("p",[t._v("请让我"),e("span",{staticClass:"togglebtn",on:{click:function(n){t.toggle("info")}}},[t._v("介绍下自己")]),t._v("吧。")]),t._v(" "),e("p",[t._v("或者，你也可以直接给我发邮件: me@dingkewz.com")]),t._v(" "),e("p",[t._v("再或者，让我请你喝杯咖啡吧！")]),t._v(" "),e("p",[t._v("不出意外，我周末的早晨(9点到11点半)会在\n          "),e("a",{attrs:{rel:"noopener",target:"_blank",href:"http://map.baidu.com/?newmap=1&s=inf%26uid%3Db343657433ec89504354d775%26wd%3D%E5%8F%8C%E5%9F%8E%E5%9B%BD%E9%99%85+%E6%98%9F%E5%B7%B4%E5%85%8B%26all%3D1%26c%3D179&from=alamap&tpl=mapdots"}},[t._v("\n            这个星巴克\n          ")]),t._v("\n          喝咖啡，写代码。\n        ")]),t._v(" "),e("p",[t._v("如果你正好也在附近，我很乐意用一杯咖啡与你聊聊，无论聊什么！")]),t._v(" "),e("p",[t._v("期待遇见你！")])])]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"programmer"}},[e("p",[t._v("我是一名后端工程师，擅长使用NodeJS。我以编程为生，也以编程为乐。\n          我有这么一些"),e("span",{staticClass:"togglebtn",on:{click:function(n){t.toggle("projects")}}},[t._v("小项目")]),t._v("，你或许会觉得有用。\n        ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade"}},[t.isShown.projects?e("project",{staticClass:"grid-all",attrs:{id:"projects"}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"writter"}},[e("p",[t._v("我平时也会写一些文章，它们大部分都被收录于我的\n          "),e("a",{attrs:{rel:"noopener",target:"_blank",href:"https://blog.dingkewz.com"}},[t._v("静态博客")]),t._v("\n          之中。\n        ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"athlete"}},[e("p",[t._v("在编程和写作之余，我喜欢运动。\n          "),t._v("\n          我擅长"),e("span",{},[t._v("长跑")]),t._v("，也擅长"),e("span",{},[t._v("网球")]),t._v("。\n          最近正在尝试去健身房练器械。\n        ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"musicoholic"}},[e("p",[t._v(" 我非常喜欢"),e("span",{staticClass:"togglebtn",on:{click:function(n){t.toggle("music")}}},[t._v("听音乐")]),t._v("，以至于耳机不离身，大概是一个人太久了吧，哈哈哈。我欧美的歌曲听得比较多，最近迷上了在油管上听各种电子remix，有毒。 ")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.music?e("music",{staticClass:"grid-all",attrs:{id:"music"}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"bookworm"}},[e("p",[t._v("买书和看书也是我的一大爱好，除了专业书籍，我喜欢买科幻小说。你大概也发现了，我非常喜欢《三体》，它是我的最爱。除此之外，《沙丘》是我最喜欢的外国科幻小说。这是我的"),e("a",{attrs:{rel:"noopener",href:"https://www.douban.com/people/deanacroic/",target:"_blank"}},[t._v("豆瓣")]),t._v("，欢迎随时向我推荐好看的书籍。")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.info?e("div",{staticClass:"grid-center",attrs:{id:"thankyou"}},[e("p",[e("span",{},[t._v("谢谢")]),t._v("你能看到这里。")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-fade",appear:""}},[t.isShown.install?e("div",{staticClass:"grid-center"},[e("p",[t._v("如果你喜欢的话，你可以将这个网页"),e("span",{staticClass:"togglebtn",on:{click:t.install}},[t._v("安装")]),t._v("到你的桌面。")])]):t._e()]),t._v(" "),e("div",{staticClass:"grid-center",staticStyle:{"margin-bottom":"64px"}})],1)])},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("nav",[i("ul",{attrs:{id:"bottom-nav"}},[i("li",[i("a",{attrs:{rel:"noopener",href:"https://github.com/DingDean",target:"_blank"}},[i("img",{attrs:{src:e(12),alt:"github"}})])]),t._v(" "),i("li",[i("a",{attrs:{rel:"noopener",href:"https://www.douban.com/people/deanacroic/",target:"_blank"}},[i("img",{attrs:{src:e(13),alt:"douban"}})])])])])}],s={render:i,staticRenderFns:a};n.a=s},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},function(t,n,e){t.exports=e.p+"static/img/douban_32x32.3415813.png"},function(t,n,e){"use strict";var i=e(1),a=e(15);i.a.use(a.a),n.a=new a.a({mode:"history",routes:[]})}],[4]);
//# sourceMappingURL=app.8682979ef6f59c9b6bfe.js.map