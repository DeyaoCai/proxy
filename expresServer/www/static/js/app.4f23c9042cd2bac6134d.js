webpackJsonp([9],{"/wAz":function(e,t){},"8cJp":function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("xd7I"),o=(i("/wAz"),i("NYWk"),{render:function(){var e=this.$createElement;return(this._self._c||e)("router-view")},staticRenderFns:[]}),n=i("C7Lr")({name:"App"},o,!1,null,null,null).exports,a=i("riQL");const r={music:{shallShowPics:!1,likeLists:null,musicDailyRecommendConf:{show:!1,full:!0,stop:!0,scope:this,direction:"right"},musicDailySheetConf:{show:!1,full:!0,stop:!0,scope:this,direction:"right"},musicDailySheetDetailConf:{show:!1,full:!0,stop:!0,scope:this,sheetDto:null,direction:"right"},musicRankConf:{show:!1,full:!0,stop:!0,scope:this,direction:"right"},musicRankListConf:{show:!1,full:!0,stop:!0,scope:this,listDto:null,direction:"right"},musicFMConf:{show:!1,full:!0,stop:!0,scope:this,listDto:null,direction:"right"},musicRecentPlayConf:{show:!1,full:!0,stop:!0,scope:this,list:null,direction:"right"},musicPlayConf:{show:!1,full:!0,stop:!0,scope:this,prevSongDto:null,songDto:null,list:[],direction:"bottom"},musicPlayingConf:{show:!1,full:!1,stop:!1,scope:this,prevSongDto:null,songDto:null,list:[],direction:"bottom"}}};["musicDailyRecommendConf","musicDailySheetConf","musicDailySheetDetailConf","musicRankConf","musicRankListConf","musicFMConf","musicRecentPlayConf","musicPlayConf","musicPlayingConf"].forEach(e=>r.music[e].bg={backgroundColor:"rgba(255,255,255,.95)"}),["musicPlayingConf"].forEach(e=>r.music[e].bg={borderRadius:".5rem .5rem 0 0",overflow:"hidden",backgroundColor:"rgba(255,255,255,.95)"}),["musicPlayingConf"].forEach(e=>r.music[e].wrapBg={backgroundColor:"rgba(255,255,255,0)"});const l={showRecommend:()=>{r.music.musicDailyRecommendConf.show=!0},showDailySheet:()=>{r.music.musicDailySheetConf.show=!0},showDailySheetDetail:e=>{r.music.musicDailySheetDetailConf.sheetDto=e,r.music.musicDailySheetDetailConf.show=!0},showRank:()=>{r.music.musicRankConf.show=!0},showRankList:e=>{r.music.musicRankListConf.listDto=e,r.music.musicRankListConf.show=!0},showRecentPlay:e=>{r.music.music.musicRecentPlayConf.list=e,r.music.musicRecentPlayConf.show=!0},showFM:()=>{r.music.musicFMConf.show=!0},showPlayingMusic:e=>{r.music.musicPlayingConf.show=!0},showMusic:e=>{let t,i,s;[e.songDto,e.songs,e.needShowPop].forEach(e=>{a.b.type.isBoolean(e)&&(s=e),a.b.type.isArray(e)&&(i=e),a.b.type.isObject(e)&&(t=e)}),t&&(r.music.musicPlayConf.prevSongDto=r.music.musicPlayConf.songDto,r.music.musicPlayConf.songDto=t),i&&(r.music.musicPlayConf.list=i),a.b.type.isUndefined(s)||s&&(r.music.musicPlayConf.show=s)}};const h=[{state:r,mutations:l}],c={state:{},getters:{},mutations:{},actions:{}};Object.keys(c).forEach(e=>{h.forEach(t=>{t[e]&&Object.keys(t[e]).forEach(i=>{if(c[e][i])return console.log(`warning store.${e}.${i} has been defined!`);c[e][i]=t[e][i]})})});var u=c,p=[{path:"/",name:"Index",component(e){Promise.all([i.e(0),i.e(8)]).then(function(){var t=[i("WNK3")];e.apply(null,t)}.bind(this)).catch(i.oe)},children:[{path:"/tape",name:"Tape",component(e){Promise.all([i.e(0),i.e(6)]).then(function(){var t=[i("UpxW")];e.apply(null,t)}.bind(this)).catch(i.oe)},children:[{path:"/",name:"ConfigIndex",component(e){Promise.all([i.e(0),i.e(1)]).then(function(){var t=[i("qJLi")];e.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"config-manager",name:"ConfigManager",component(e){Promise.all([i.e(0),i.e(2)]).then(function(){var t=[i("fFmh")];e.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"config-detail",name:"ConfigDetail",component(e){Promise.all([i.e(0),i.e(5)]).then(function(){var t=[i("Givv")];e.apply(null,t)}.bind(this)).catch(i.oe)}}]},{path:"/platform",name:"Platform",component(e){Promise.all([i.e(0),i.e(7)]).then(function(){var t=[i("oRQu")];e.apply(null,t)}.bind(this)).catch(i.oe)},children:[{path:"/",name:"ConfigIndex",component(e){Promise.all([i.e(0),i.e(1)]).then(function(){var t=[i("qJLi")];e.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/devs",name:"Devs",component(e){Promise.all([i.e(0),i.e(3)]).then(function(){var t=[i("tDJr")];e.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"test-codes",name:"TestCodes",component(e){Promise.all([i.e(0),i.e(4)]).then(function(){var t=[i("Nesj")];e.apply(null,t)}.bind(this)).catch(i.oe)}}]}]}],m=(i("8cJp"),i("nUxk"),{comps:{},store:[u],router:[[],p],callback:[e=>{}]}),d=a.c.getInitRouter,f=a.c.getInitVuex,y=d.apply(null,m.router),g=f.apply(null,m.store);s.a.config.productionTip=!1,m.callback&&m.callback.forEach(function(e){e&&e({router:y,store:g})});t.default=new s.a({el:"#app",store:g,router:y,components:{App:n},template:"<App/>"})},NYWk:function(e,t){},nUxk:function(e,t){},riQL:function(e,t,i){"use strict";const s=e=>Object.prototype.toString.call(e).slice(8,-1);s.isNumber=(e=>"Number"===s(e)),s.isString=(e=>"String"===s(e)),s.isArray=(e=>"Array"===s(e)),s.isObject=(e=>"Object"===s(e)),s.isBoolean=(e=>"Boolean"===s(e)),s.isNull=(e=>"Null"===s(e)),s.isUndefined=(e=>"Undefined"===s(e)),s.isFunction=(e=>"Function"===s(e)),s.isDate=(e=>"Date"===s(e));var o=s;function n(e){return e?o.isString(e)?e:o.isNumber(e)?e+"":o.isObject(e)?Object.keys(e).filter(t=>e[t]).join(" "):o.isArray(e)?e.map(e=>n(e)).join(" "):void 0:""}var a={timePickerPop:{show:!1,full:!1,onConfirm(e){console.log(e)}},slidePop:{show:!1,type:""},loadingPop:{show:!1,stop:!1},alertPop:{show:!1,title:"alert",content:"alert tip",onConfirm(){}},confirmPop:{type:"confirm",show:!1,title:"alert",content:"alert tip",onConfirm(){}},radioPop:{show:!1,list:[{name:"最早触发",isActive:!1},{name:"最晚触发",isActive:!1},{name:"最低价格",isActive:!1}]},checkPop:{show:!1,list:[{name:"最早触发",isActive:!1},{name:"最晚触发",isActive:!1},{name:"最低价格",isActive:!1},{name:"最早触发",isActive:!1},{name:"最晚触发",isActive:!1},{name:"最低价格",isActive:!1}]},datePickerPop:{full:!0,renderConf:[2018,5,3],show:!1,num:1,time:[],onSelect(){}},datePickerPop1:{full:!0,renderConf:[2018,5,3],show:!1,num:1,time:[],start:new Date(2018,4,25),end:new Date(2018,5,15),onSelect(){}},datePickerPop2:{full:!0,renderConf:[2018,5,3],show:!1,num:2,time:[],onSelect(){}},datePickerPop3:{full:!0,renderConf:[2018,5,3],show:!1,num:2,time:[],start:new Date(2018,4,25),end:new Date(2018,5,15),onSelect(){}},datePickerPop4:{full:!1,renderConf:[2018,5,3],show:!1,num:1,time:[],onSelect(){}},datePickerPop5:{full:!1,renderConf:[2018,5,3],show:!1,num:1,time:[],start:new Date(2018,4,25),end:new Date(2018,5,15),onSelect(){}},datePickerPop6:{full:!1,renderConf:[2018,5,3],show:!1,num:2,time:[],onSelect(){}},datePickerPop7:{full:!1,renderConf:[2018,5,3],show:!1,num:2,time:[],start:new Date(2018,4,25),end:new Date(2018,5,15),onSelect(){}},filterPop:{show:!1,full:!1,data:[{type:"radio",withAll:!0,title:"",list:[{name:"",isActive:!0},{name:"",isActive:!1}]},{type:"radio",withAll:!0,title:"",list:[{name:"",isActive:!0},{name:"",isActive:!1}]},{type:"radio",withAll:!0,title:"",list:[{name:"",isActive:!0},{name:"",isActive:!1}]}],oncancle(){},onConfirm(e){console.log(e)}}};var r=class{constructor(){this.ori=[{x:0,y:0},{x:0,y:0}],this.pre=[{x:0,y:0},{x:0,y:0}],this.now=[{x:0,y:0},{x:0,y:0}],this.isTouching=!1,this.touched=!1}touchEv(e){this.touched=!0;const t=e.touches[0],i=e.touches[1];this.ori=[{x:t.clientX,y:t.clientY},{x:i.clientX,y:i.clientY}],this.pre=[{x:t.clientX,y:t.clientY},{x:i.clientX,y:i.clientY}],this.now=[{x:t.clientX,y:t.clientY},{x:i.clientX,y:i.clientY}],this.isTouching=!0,this.moved=!1,this.drection=""}moveEv(e){if(!this.touched)return;const t=e.touches[0],i=e.touches[1];this.pre=this.now,this.now=[{x:t.clientX,y:t.clientY},{x:i.clientX,y:i.clientY}]}endEv(){this.touched=!1,this.isTouching=!1}getlen(e){return Math.sqrt(Math.pow(e[0].x-e[1].x,2)+Math.pow(e[0].y-e[1].y,2))}getStartCenter(){const e=this.ori;return{x:(e[0].x+e[1].x)/2,y:(e[0].y+e[1].y)/2}}getOffset(){return this.getlen(this.now)-this.getlen(this.ori)}};function l(){this.rate=1,this.nowRate=1,this.origin={x:0,y:0},this.nowOrigin={x:0,y:0}}l.prototype.setRate=function(e){(e||0===e)&&(this.rate=this.nowRate=e)},l.prototype.setNowRate=function(e){(e||0===e)&&(this.nowRate=e)};var h=l;var c=class{constructor(){this.ori={x:0,y:0},this.pre={x:0,y:0},this.now={x:0,y:0},this.isTouching=!1,this.prevent="",this.drection="",this.touched=!1}touchEv(e){this.touched=!0;const t=e.touches[0];this.ori={x:t.clientX,y:t.clientY},this.pre={x:t.clientX,y:t.clientY},this.now={x:t.clientX,y:t.clientY},this.isTouching=!0,this.moved=!1,this.drection=""}moveEv(e){if(!this.touched)return;const t=e.touches[0];this.pre=this.now,this.now={x:t.clientX,y:t.clientY},this.drection||(this.drection=Math.abs(this.now.x-this.pre.x)>Math.abs(this.now.y-this.pre.y)?"x":"y"),this.prevent!==this.drection&&(e.cancelBubble=!0),this.prevent&&(this.now["xy".replace(this.drection,"")]=this.ori["xy".replace(this.drection,"")]),"x"!==this.prevent&&"y"!==this.prevent||(this.now[this.prevent]=this.ori[this.prevent])}endEv(){this.touched=!1,this.isTouching=!1}getOffset(){return{x:this.now.x-this.ori.x,y:this.now.y-this.ori.y}}getSpeed(){return{x:this.now.x-this.pre.x,y:this.now.y-this.pre.y}}};var u=class{constructor(e,t,i,s){this.map=e,this.heros=t,this.heros.forEach(e=>e.roleType="heros"),this.enemys=i,this.enemys.forEach(e=>e.roleType="enemys"),this.wrapConfig=s,this.roles=t.concat(i),this.selectedRole=null,this.list=e.list,this.routeList=[],this.resultList=[],this.attackRangeList=[],this.turnType="heros",this.autoList=[],this.enemys.forEach(e=>e.actioned=!0),this.width=e.width,this.height=e.height}startAuto(e){const t=this.heros.filter(e=>e.curHp>0),i=this.enemys.filter(e=>e.curHp>0);this.autoList="heros"===e?t:i;const s="heros"===e?i:t;i.length?t.length?s.length&&this.auto():this.wrapConfig.showAlert({title:"you lose",content:""}):this.wrapConfig.showAlert({title:"you win",content:""})}auto(){const e=this.autoList.shift();if(!e)return this.newTurn();setTimeout(()=>{this.search(e),setTimeout(()=>{this.attackRangeList[0]?(this.move(this.attackRangeList[0]),setTimeout(()=>{this.hattack(),setTimeout(()=>{const e=this.attackRangeList[0].attackList[0],t={x:e.pos.x-this.selectedRole.pos.x,y:e.pos.y-this.selectedRole.pos.y};this.attack(t,!0)},500)},500)):(this.hend(),this.auto())},500)},500)}move(e){const t=this.selectedRole;t&&(e.showls?(t.prevPos={x:t.pos.x,y:t.pos.y},t.pos={x:e.pos.x,y:e.pos.y}):this.hcancle()),this.clearRoute()}newTurn(){const e=this.heros.filter(e=>e.curHp>0);this.enemys.filter(e=>e.curHp>0).length?e.length||this.wrapConfig.showAlert({title:"you lose",content:""}):this.wrapConfig.showAlert({title:"you win",content:""}),"heros"===this.turnType?(this.turnType="enemys",this.startAuto("enemys"),this.heros.forEach(e=>e.actioned=!0),this.enemys.forEach(e=>e.actioned=!1)):(this.turnType="heros",this.enemys.forEach(e=>e.actioned=!0),this.heros.forEach(e=>e.actioned=!1))}showArena(e,t,i){this.wrapConfig.showGameArena({hero:e,enemy:t,end:t=>{t&&(t.pos={x:-5,y:-5}),i&&this.auto(e.roleType)}})}attack(e,t){const i=this.selectedRole,s=this.roles.filter(t=>t.pos.x===i.pos.x+e.x&&t.pos.y===i.pos.y+e.y)[0];s&&i.roleType!==s.roleType&&(s&&this.showArena(i,s,t),s&&this.hend())}hstay(){this.selectedRole&&this.hend()}hattack(){this.selectedRole&&(this.selectedRole.attacking=!0)}hcancle(){const e=this.selectedRole;e&&(e.prevPos&&(e.pos=e.prevPos),e.attacking=!1,e.prevPos=null,this.selectedRole=null),this.clearAttackList()}hend(){const e=this.selectedRole;e.attacking=!1,e.actioned=!0,e.prevPos=null,this.selectedRole=null,this.clearRoute(),this.clearAttackList()}search(e){if(e.actioned)return;if(this.selectedRole===e)return this.move(this.list[e.pos.x+e.pos.y*this.width]);this.move({}),this.selectedRole=e;const t=this.list[e.pos.x+e.pos.y*this.width];this.clearRoute(),t.rest=10,this.resultList.push(t),this.startSearch(t),this.resultList.forEach(e=>e.showls=!0)}startSearch(e){Array.from("urdl",t=>e.reached[t]||this.tryDer(e,t));const t=this.routeList.shift();t&&this.startSearch(t)}tryAttackRange(e,t){let i=e.pos.y,s=e.pos.x;const o=this.selectedRole;if("u"===t&&i++,"d"===t&&i--,"l"===t&&s--,"r"===t&&s++,i<0||i>this.height-1||s<0||s>this.width-1)return;const n=this.list[s+i*this.width],a=this.roles.filter(e=>e!==o&&e.roleType!==o.roleType&&n.pos.x===e.pos.x&&n.pos.y===e.pos.y);this.roles.some(t=>t!==o&&t.pos.x===e.pos.x&&t.pos.y===e.pos.y)||!a.length||this.attackRangeList.includes(e)||(e.attackList=a,this.attackRangeList.push(e))}tryDer(e,t){e.reached[t]=!0;let i=e.pos.y,s=e.pos.x;if("u"===t&&i++,"d"===t&&i--,"l"===t&&s--,"r"===t&&s++,i<0||i>this.height||s<0||s>this.height)return;const o=this.list[s+i*this.width];if(o){const i=e.rest-o.damp;i>=0&&(this.resultList.includes(o)||(this.resultList.push(o),Array.from("urdl",e=>this.tryAttackRange(o,e))),this.routeList.includes(o)||this.routeList.push(o),i>o.rest&&(o.rest=i,o.reached={u:!1,r:!1,d:!1,l:!1},o.reached[{u:"d",r:"l",l:"r",d:"u"}[t]]=!0))}}clearRoute(){this.resultList.forEach(e=>{e.showls=null,e.reached={u:!1,r:!1,d:!1,l:!1},e.rest=null,e.attack=!1}),this.attacking=!1,this.routeList=[],this.resultList=[]}clearAttackList(){this.attackRangeList.forEach(e=>e.attackList=null),this.attackRangeList=[]}};var p=function(e={}){const t={relativeComp:e};return function e(t={relativeComp:{}}){return[].forEach.call(this,i=>{i&&i.relativeComp&&(Object.keys(i.relativeComp).forEach(e=>t.relativeComp[e]=i.relativeComp[e]),e.call(Object.values(i.relativeComp),t))}),t}.call(Object.values(e),t),t.relativeComp};function m(e,t){const i={id:()=>({key:"id",hide:!0,val:"",name:"id",code:null,inputType:"number"}),name:()=>({key:"name",hide:!0,val:"",name:"name",code:null}),hp:()=>({key:"hp",hide:!0,val:"",name:"hp",code:null,inputType:"number"}),ap:()=>({key:"ap",hide:!0,val:"",name:"hp",code:null,inputType:"number"}),pow:()=>({key:"pow",hide:!0,val:"",name:"pow",code:null,inputType:"number"}),mag:()=>({key:"mag",hide:!0,val:"",name:"mag",code:null,inputType:"number"}),ski:()=>({key:"ski",hide:!0,val:"",name:"ski",code:null,inputType:"number"}),spe:()=>({key:"spe",hide:!0,val:"",name:"spe",code:null,inputType:"number"}),def:()=>({key:"def",hide:!0,val:"",name:"def",code:null,inputType:"number"}),luc:()=>({key:"luc",hide:!0,val:"",name:"luc",code:null,inputType:"number"}),res:()=>({key:"res",hide:!0,val:"",name:"res",code:null,inputType:"number"}),mov:()=>({key:"mov",hide:!0,val:"",name:"mov",code:null,inputType:"number"}),dutyType:()=>({key:"dutyType",hide:!0,val:"",name:"dutyType",code:null,click:()=>t.showRadio()}),srcName:()=>({key:"srcName",hide:!0,val:"",name:"srcName",code:null,click:()=>t.showSlide("right")})};this.list=e.map(e=>i[e]&&i[e]()).filter(e=>e),this.maps={},this.list.forEach(e=>this.maps[e.key]=e)}m.prototype.getVal=function(){const e={};return this.list.forEach(t=>e[t.key]=t.code||t.val),e};var d=m;function f(e){e||(e={}),this.config=e,this.latestEnd=0,this.latestDBClick=0,this.moved=!1,this.mode=null;["iDBClick","iClick","iTouch","iMove","iEnd","iDoubleTouch","iDoubleMove","iDoubleEnd"].forEach(t=>this[t]=e[t])}f.prototype.changeEvFunc=function(e,t){return this[e]=t,this},f.prototype.drageMode=function(e){this.mode="single",e.touches.length>1&&(this.mode="double"),!this.canNotBeDouble&&e.touches.length>2&&(this.mode="muti")},f.prototype.touchEv=function(e){this.canNotBeDouble="single"===this.mode&&!0===this.moved,this.moved=!1,this.drageMode(e),this.startEv=e,"single"===this.mode&&this.iTouch&&this.iTouch(e),"single"!==this.mode&&this.iDoubleTouch&&this.iDoubleTouch(e)},f.prototype.moveEv=function(e){return this.moved=!0,"single"===this.mode&&1===e.touches.length&&this.iMove&&this.iMove(e),e.touches.length>1&&this.iDoubleMove&&this.iDoubleMove(e),!1},f.prototype.endEv=function(){if("single"===this.mode)if(this.iEnd&&this.iEnd(this.startEv),this.moved)this.latestEnd=0;else{const e=(new Date).getTime();this.latestEnd>e-300?this.latestDBClick<e-300&&(this.iDBClick&&this.iDBClick(this.startEv),this.latestDBClick=e):setTimeout(()=>{this.latestEnd!==e||this.moved||this.iClick&&this.iClick(this.startEv)},300),this.latestEnd=e}else this.iDoubleEnd&&this.iDoubleEnd();this.moved=!1};var y=f,g=i("xd7I"),w=i("R4Sj"),v=i("KGCO");g.a.use(w.a),g.a.use(v.a);var k={getInitRouter:function(){return[].forEach.call(arguments,e=>e.forEach(e=>e.path=e.path.replace(/\/\//g,"/"))),new v.a({routes:[].concat.apply([],arguments)})},getInitVuex:function(){const e={state:{},getters:{},mutations:{},actions:{}};return Object.keys(e).forEach(t=>{[].forEach.call(arguments,i=>{i[t]&&Object.keys(i[t]).forEach(s=>{if(e[t][s])return console.log(`warning store.${t}.${s} has been defined!`);e[t][s]=i[t][s]})})}),e}};function P(){var e=document.getElementsByTagName("html")[0];e.style.fontSize=e.offsetWidth/750*40+"px"}window.onresize=P,window.addEventListener("onbeforeunload",function(e){history.pushState("456","45678",document.URL.split("?")[0])});var b={onresize:P,appendAudio:function(){const e=document.createElement("audio");e.id="audio",document.querySelector("body").appendChild(e)}};let T;class D{getSession(){return window.sessionStorage.his?JSON.parse(window.sessionStorage.his):[]}pushSession(e){const t=this.getSession();this.session.push(e),window.sessionStorage.his=JSON.stringify(t)}saveSession(e){window.sessionStorage.his=JSON.stringify(e)}}class x{constructor(){this.isGoingBack=!1}goBackTo(e){if(this.isGoingBack=!0,!e)return this.goBack();let t=null;const i=A.getSession(),s=i.filter(t=>t.name===e.name);if(s.length){const o=i.indexOf(s[0]);o+1?(i.length=o+1,t=i.pop()):t=e}else t=e;t=e,i.push(t),A.saveSession(i),T.replace(t)}goBack(){this.isGoingBack=!0;const e=A.getSession(),t=(e.pop(),e.pop());A.saveSession(e),t?this.push(t,!0):history.go(-1)}push(e,t){this.isGoingBack=!!t;const i=A.getSession();i.push(e),A.saveSession(i),T.replace(e)}replace(e){this.isGoingBack=!1;const t=A.getSession();t.pop(),t.push(e),A.saveSession(t),T.replace(e)}userRouterList(e){const t={fromLogin:[{name:"login"},{name:"index"}],gcamp:[{name:"index"},{name:"game"},{name:"gcamp"}]}[e]||[{name:"index"}];A.saveSession(t),this.replace(t[t.length-1])}parsePath(){const e={};return location.hash.replace("#/","").split("?").pop().split("&").forEach(t=>{const i=t.split("=");e[i[0]]=i[1]}),e}}history.pushState(null,null,document.href);const A=new D,C=new x;window.onhashchange=(()=>{A.getSession().length&&history.pushState(null,null,document.href),C.goBack()});var S={Session:D,Router:x,setRouter(e){g.a.prototype.cRouter=C,T=e}},E=function(e,t,i){const s={userNmae:()=>({key:"userNmae",val:"",code:"",name:"姓名",placeholder:"请输入姓名",isMustFill:!0,noNeedPlaceholder:!1,icon:"yonghutouxiang",showFlag:!0,onclick(){},disableReg(){},submitReg(){},showReg(){}}),password:()=>({key:"password",val:i.password,code:"",name:"密码",type:"password",icon:"mima"}),repeatPassword:()=>({key:"repeatPassword",val:"",code:"",name:"密码",type:"password",icon:"mima"}),phone:()=>({key:"phone",icon:"shoujihao",name:"手机号",val:i.phone,isMustFill:!0,type:"tel",submitReg:e=>!!e}),mail:()=>({icon:"youxiang",name:"邮箱",val:"",isMustFill:!0})},o={},n=e.map(e=>o[e]=s[e]&&s[e]());return{map:o,list:n,getVal:function(){const e={};return n.forEach(t=>e[t.key]=t.code||t.val),e}}};function R(e){let t=0;return function(){const i=t=`${Date.now()} ${Math.random()}`;setTimeout(()=>{i===t&&e.apply(null,arguments)},340)}}var O=class{constructor(e,t,i){this.width=e,this.height=t,this.lsMap=i}getList(e){return e||(e=new Array(this.width*this.height).fill(1)),this.list=e.map((e,t)=>({pos:{x:t%this.width,y:Math.floor(t/this.width)},ls:e.ls||"ls-glass",showls:null,attack:!1,prev:null,reached:{u:!1,r:!1,d:!1,l:!1},rest:null,damp:0})),this}addDamp(){return this.list.forEach(e=>e.damp=this.lsMap[e.ls]),this}init(e){return this.getList(e).addDamp(),this}};function I(){return{array:[],object:[],string:"",number:0,boolean:!1,funtion:""}}var j={getNextVal:function(e){return parseObjectToTreeTools()[e]},getAllValType:I,getAllVal:function(e,t){const i={array:[],object:[],string:"",number:0,boolean:!1,funtion:""};return void 0!==e&&void 0!==t&&(i[e]=t),i}};const{getAllVal:L}=j;var M=function e(t,i){if(o.isArray(i)){const s="array",o=i.map((t,i)=>e(i,t));return{values:L(s,o),key:t,val:o,valType:s}}if(o.isObject(i)){const s="object",o=Object.keys(i).map(t=>e(t,i[t]));return{values:L(s,o),key:t,val:o,valType:s}}if(o.isBoolean(i)){const e="boolean",s=!!i;return{values:L(e,s),key:t,val:s,valType:e}}if(o.isString(i)){const e=/@func/,s=e.test(i),o=s?"function":"string",n=s?i.replace(e,""):i;return{values:L(o,n),key:t,val:n,valType:o}}if(o.isNumber(i)){const e="number",s=i;return{values:L(e,s),key:t,val:s,valType:e}}const s=i;return{values:L("undefined",s),key:t,val:s,valType:"undefined"}};var N=function e(t,i={}){return"number"!==t.valType&&"string"!==t.valType||(i[t.key]=t.val),"boolean"===t.valType&&(i[t.key]=!!t.val),"function"===t.valType&&(i[t.key]="@func"+t.val),"undefined"===t.valType&&(i[t.key]=void 0),"object"===t.valType&&(i[t.key]={},t.val.forEach(s=>e(s,i[t.key]))),"array"===t.valType&&(i[t.key]=[],t.val.forEach(s=>e(s,i[t.key]))),i};class F{constructor(e){this.hero=e,this.exp=e.exp,this.init()}init(){const e=this.hero,t=B[e.dutyType];return this.name=e.name,this.caculateLv(),["hp","ap","pow","mag","ski","spe","def","res","luc","mov"].forEach(i=>this[i]=Math.round((e[i]+t[i])*this.lv)),this.curHp=this.hp,this.roleImg=e.roleImg,this.roleHeadImg=e.roleHeadImg,this.weapeon=[],this.skill=[],this.items=[],this.commonSkill=[],this.injuring=!1,this}action(){this.attack()}cure(){this.partner.recover(this)}recover(e){let t=e.mag;this.curHp+t>this.hp&&(t=this.hp-this.curHp),this.curHp=this.curHp+t}attack(){this.enemy.suffer(this)}suffer(e){this.injuring=!0,this.injuryValue=null,setTimeout(()=>this.injuring=!1,150);const t=(this.luc-e.luc)/10>Math.random(),i=(e.ski-this.ski)/10>Math.random(),s=(e.pow-this.def)*(i?1.5:1)*(t?0:1);this.injuryValue={val:s>0?s:0,isShanbi:t,isBaoji:i},t||(this.curHp=this.curHp-this.injuryValue.val)}useSkill(){}caculateLv(){[100,210,331,464,610,771,948,1143,1357,1593,1852,2137,2451,2796,3176,3594,4053,4558,5114,5726].some((e,t)=>(this.lv=t,this.exp<e))}}const B={prince:{name:"王子",hp:18,ap:14,pow:8,mag:6,ski:10,spe:10,def:6,res:6,luc:10,mov:7},princess:{name:"公主",hp:18,ap:14,pow:8,mag:6,ski:10,spe:10,def:6,res:6,luc:10,mov:40},thief:{name:"小偷",hp:16,ap:16,pow:6,mag:0,ski:10,spe:10,def:4,res:4,luc:8,mov:6},mauler:{name:"盾兵",hp:20,ap:10,pow:6,mag:0,ski:6,spe:6,def:8,res:2,luc:4,mov:5},cavalry:{name:"骑兵",hp:18,ap:12,pow:8,mag:0,ski:8,spe:8,def:6,res:4,luc:6,mov:8},archer:{name:"弓手",hp:16,ap:10,pow:10,mag:0,ski:6,spe:6,def:4,res:4,luc:6,mov:5},wizard:{name:"法师",hp:16,ap:10,pow:0,mag:6,ski:6,spe:6,def:4,res:6,luc:6,mov:5},swordman:{name:"剑兵",hp:18,ap:16,pow:8,mag:0,ski:8,spe:8,def:6,res:4,luc:6,mov:6}},H={name:"关羽",dutyType:"cavalry",exp:100,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./guanyu.png",roleHeadImg:"./lolimg/Irelia.png"},Y={name:"张飞",dutyType:"cavalry",exp:100,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./zhangfei.png",roleHeadImg:"./lolimg/Irelia.png"},V={name:"赵云",dutyType:"cavalry",exp:100,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./zhaoyun.jpg",roleHeadImg:"./lolimg/Irelia.png"},X={name:"马超",dutyType:"cavalry",exp:100,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./machao.png",roleHeadImg:"./lolimg/Irelia.png"},G={name:"黄忠",dutyType:"cavalry",exp:100,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./huangzhong.png",roleHeadImg:"./lolimg/Irelia.png"},z={name:"黄月英",dutyType:"swordman",exp:1e3,hp:2.5,ap:2,pow:1,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./yueying.png",roleHeadImg:"./lolimg/Irelia.png"},J={name:"马云禄",dutyType:"cavalry",exp:350,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./yunlu.jpg",roleHeadImg:"./lolimg/Ahri.png"},$={name:"孙尚香",dutyType:"cavalry",exp:350,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./shangxiang.jpg",roleHeadImg:"./lolimg/Ashe.png"},K={name:"蔡文姬",dutyType:"cavalry",exp:350,hp:2.5,ap:2,pow:.8,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./wenji.jpg",roleHeadImg:"./lolimg/MissFortune.png"};var U={hero:[new F({name:"刘备",dutyType:"swordman",exp:100,hp:2.5,ap:2,pow:1,mag:.1,ski:.3,spe:.3,def:.3,res:.2,luc:.4,mov:0,roleImg:"./guanyu.png",roleHeadImg:"./lolimg/Irelia.png"}),new F(H),new F(Y),new F(V),new F(X),new F(G)],hero2:[new F(z),new F(J),new F($),new F(K)],dutys:B,Role:F};function W(){this.posi={x:0,y:0},this.nowPosi={x:0,y:0}}W.prototype.setPosi=function(e){e&&((e.x||0===e.x)&&(this.posi.x=this.nowPosi.x=e.x),(e.y||0===e.y)&&(this.posi.y=this.nowPosi.y=e.y))},W.prototype.setNowPosi=function(e){e&&((e.x||0===e.x)&&(this.nowPosi.x=e.x),(e.y||0===e.y)&&(this.nowPosi.y=e.y))};var _=W;class q{constructor(e){e||(e=new Date),this.yea=e.getFullYear(),this.mon=e.getMonth()+1,this.dat=e.getDate(),this.time=e.getTime(),this.timeStamp=e}former(e,t){const i=t||this.timeStamp,s=this._to00;return e.replace("yea",this.yea).replace("mon",s(this.mon)).replace("dat",s(this.dat)).replace("hou",s(i.getHours())).replace("min",s(i.getMinutes())).replace("sec",s(i.getSeconds())).replace("day","日一二三四五六"[i.getDay()])}isInSomeDays(e,t){return t||(t=30),!e.isLater(new q(new Date(this.yea,this.mon-1,this.dat+t)))}isLater(e,t){return t||(t=864e5),Math.floor(this.time/t)>Math.floor(e.time/t)}yesterday(){return new q(new Date(this.yea,this.mon-1,this.dat-1))}tomorrow(){return new q(new Date(this.yea,this.mon-1,this.dat+1))}getFirSecOfDay(e){const t=e||this.timeStamp;return new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()}isNotPrev(e){const t=e?new Date(e):new Date;return this.getFirSecOfDay()>=this.getFirSecOfDay(t)}isNotNext(e){const t=e?new Date(e):new Date;return this.getFirSecOfDay()<=this.getFirSecOfDay(t)}isToday(){return this.getFirSecOfDay()===this.getFirSecOfDay(new Date)}isBetween(e,t){return!e&&!t||(t?e?this.isNotPrev(e)&&this.isNotNext(t):this.isNotNext(t):this.isNotPrev(e))}_to00(e){return(e>9?"":"0")+e}}var Q=q;class Z{constructor(){}setSTime(e){e&&(this.startTime=e,this.sTime={yea:e.getFullYear(),mon:e.getMonth(),dat:e.getDate(),hou:e.getHours(),min:e.getMinutes(),sec:e.getSeconds()})}isRun(e){return e%400==0||e%100!=0&&e%4==0}daysOfMonth(e,t){return{0:31,1:null,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31}[e]||(this.isRun(t)?29:28)}getDateArr(e,t,i){if(!i){let i=this.daysOfMonth(t,e),s=new Array(i).fill(1);s.forEach((i,o)=>s[o]=new Q(new Date(e,t,o+1)));const o=s[0].timeStamp,n=new Array(o.getDay()).fill({}).concat(s);return(s=new Q(o)).list=n,s}return new Array(i).fill(0).map((i,s)=>this.getDateArr(e,t+s))}getArr(e,t){return new Array(t).fill(0).map((t,i)=>({num:e+i,isActive:!1}))}getArrs(e,t,i){let s=0,o=0;this.sTime&&(e<this.sTime.yea?e=this.sTime.yea:e===this.sTime.yea&&(s=this.sTime.mon,o=this.sTime.dat-1));const n=new Array(t).fill(1).map((t,i)=>Z.getYeaObj(e+i));if(s||o){const t=Z.getYeaObj(e,!0);s&&(t.list=t.list.slice(s)),o&&(t.list[0].list=t.list[0].list.slice(o)),n.splice(0,1,t)}return n}getTimeArr(e,t){let i;return t&&(t.constructor===Q&&(i=t),t.constructor===Date&&(i=new Q(t))),i||(i=new Q),new Array(e||30).fill(0).map((e,t)=>new Q(new Date(i.yea,i.mon,i.dat+t)))}}Z.data={yea:{},monArr:{true:null,false:null},datArr:{28:null,29:null,30:null,31:Z.prototype.getArr(1,31)}},Z.getDatArr=((e,t)=>{let i=Z.data.datArr[e];return i&&!t||(i=Z.data.datArr[31].slice(0,e)),i}),Z.getMonArr=((e,t)=>{let i=Z.data.monArr[!!e];return i&&!t||((i=Z.prototype.getArr(0,12)).forEach(i=>{const s=Z.getDaysOfMonthByisRun(i.num,e);i.list=Z.getDatArr(s,t)}),t||(Z.data.monArr[!!e]=i)),i}),Z.getYeaObj=((e,t)=>({num:e,isActive:!1,list:Z.getMonArr(Z.prototype.isRun(e),t)})),Z.getDaysOfMonthByisRun=((e,t)=>({0:31,1:null,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31})[e]||(t?29:28));var ee=Z,te=function(){return Array.prototype.forEach.call(arguments,(e,t)=>{this.type.isObject(e)&&Object.keys(e).forEach(t=>{this[t]=e[t]})}),this};const{getAllVal:ie}=j,se={49:"string",50:"number",51:"boolean",52:"array",53:"object"},oe={prevItem(e){const{conf:t,parent:i,popConf:s}=e,o=i.val.indexOf(t);o>0&&(s.focusItem=i.val[o-1]),ev.stopPropagation()},nextItem(e,t){const{conf:i,parent:s,popConf:o}=e,n=s.val.indexOf(i);n<s.val.length-1&&(o.focusItem=s.val[n+1]),t.stopPropagation()},addItem(e,t){const{conf:i,parent:s,popConf:o}=e,n=s.val.indexOf(i),a=ie("string","");s.val.splice(n+1,0,{values:a,key:n+1,val:"",valType:"string"}),o.focusItem=s.val[n+1],"array"===s.valType&&s.val.forEach((e,t)=>e.key=t),t.stopPropagation()},removeItem(e,t){if(!t.target.value||!t.target.value.length){const{conf:i,parent:s,popConf:o}=e,n=s.val.indexOf(i);n&&s.val.splice(n,1),o.focusItem=s.val[n]||s.val[n-1],"array"===s.valType&&s.val.forEach((e,t)=>e.key=t),t.stopPropagation(),t.preventDefault()}},setInputVal(e,t){const{conf:i,parent:s,popConf:o}=e;"boolean"===i.valType&&(i.val=!i.val)},changeValType(e,t){const{conf:i,parent:s,popConf:o}=e,n=se[t.which];n&&(i.valType=n,i.val=i.values[n],console.log(n)),o.focusItem=null,e.nextTick=(e=>{o.focusItem=i})},focusKeyInput(e){e.$refs.key.focus()},handelTab(e,t){const i=t.target.value,s=t.target.selectionStart,o=i.slice(0,s),n=i.slice(t.target.selectionEnd,i.length);try{t.target.value=o+"  "+n,t.target.setSelectionRange(s+2,s+2)}catch(e){}t.stopPropagation(),t.preventDefault()}},ne={37:oe.focusKeyInput,49:oe.changeValType,50:oe.changeValType,51:oe.changeValType,52:oe.changeValType,53:oe.changeValType},ae={},re={},le={8:oe.removeItem,9:oe.handelTab,13:oe.addItem,30:oe.prevItem,37:oe.setInputVal,39:oe.setInputVal,40:oe.nextItem};function he(e,t){if(console.log(e.which),e.shiftKey){const i=ae[e.which];i&&i(t,e)}if(e.ctrlKey){const i=re[e.which];i&&i(t,e)}if(e.altKey){const i=ne[e.which];i&&i(t,e)}else{const i=le[e.which];i&&i(t,e)}}var ce=class{constructor(e){this.list={},e||(this.callback=(()=>{})),o.isFunction(e)&&(this.callback=(t=>e(t))),o.isObject(e)&&(this.callback=(t=>e.wrapConfig.showAlert(t)))}on(e,t){const i=o.isArray(e),s=o.isObject(e)||i,n=s?"undefined":e,a=s?e:t;return this.list[n]||(this.list[n]=[]),i||this.list[n].push(a),i&&(this.list[n]=this.list[n].concat(a)),this}check(e){const t=o.isObject(e)?"undefined":e,i=this.list[t]&&this.list[t].filter(e=>o.isFunction(e.val)?!e.val():!e.val);return i&&(this.list[t].fails=i),i&&i[0]&&this.callback(this.list[t].fails[0]),!!i&&!i[0]}};const ue=new Date;var pe=class{constructor(){this.slidePop={show:!1,type:""},this.loadingPop={show:!1,stop:!1,full:!0},this.alertPop={show:!1,direction:"bottom",full:!0,title:"",content:""},this.confirmPop={show:!1,full:!0,type:"confirm",direction:"bottom",title:"",content:""},this.radioPop={show:!1,list:[{name:"条件一",isActive:!1},{name:"条件二",isActive:!1}]},this.checkPop={show:!1,list:[{name:"条件一",isActive:!1},{name:"条件二",isActive:!1}]},this.datePickerPop={show:!1,full:!1,renderConf:[ue.getFullYear(),ue.getMonth(),2],num:1,start:new Date(ue.getFullYear(),ue.getMonth(),ue.getDate()),end:new Date(ue.getFullYear(),ue.getMonth(),ue.getDate()+29),onSelect:e=>{console.log(e)},time:[]},this.timePickerPop={show:!1,full:!1,format:"yea-mon-dat",yearNum:40,startYea:(new Date).getFullYear(),isValidty:new Date(2019,3,10),selectedTime:new Date(2019,4,15),onConfirm(e){console.log(e.former("yea-mon-dat"))}},this.gameArenaPop={show:!1,full:!0}}hideAll(){Object.keys(this).forEach(e=>{this.hasOwnProperty(e)&&(this[e].show=!1)})}showTimePicker(e){if(this.timePickerPop.show)return this.timePickerPop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.timePickerPop[t]=e[t]),this.timePickerPop.show=!0}showLoading(e){this.hideAll(),e&&Object.keys(e).forEach(t=>this.loadingPop[t]=e[t]),this.loadingPop.show=!0}showConfirm(e){if(this.confirmPop.show)return this.confirmPop.show=!1;this.hideAll(),this.alertPop.content="",this.alertPop.title="",e&&Object.keys(e).forEach(t=>this.confirmPop[t]=e[t]),this.confirmPop.show=!0}showSlide(e){if(this.slidePop.show)return this.slidePop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.slidePop[t]=e[t]),this.slidePop.show=!0}showAlert(e){if(this.alertPop.show)return this.alertPop.show=!1;this.hideAll(),this.alertPop.content="",this.alertPop.title="",e&&Object.keys(e).forEach(t=>this.alertPop[t]=e[t]),this.alertPop.show=!0}showRadio(e){if(this.radioPop.show)return this.radioPop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.radioPop[t]=e[t]),this.radioPop.show=!0}showCheck(e){if(this.checkPop.show)return this.checkPop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.checkPop[t]=e[t]),this.checkPop.show=!0}showDatePicker(e){if(this.datePickerPop.show)return this.datePickerPop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.datePickerPop[t]=e[t]),this.datePickerPop.show=!0}showGameArena(e){if(this.gameArenaPop.show)return this.gameArenaPop.show=!1;this.hideAll(),e&&Object.keys(e).forEach(t=>this.gameArenaPop[t]=e[t]),this.gameArenaPop.show=!0}};i.d(t,!1,function(){return n}),i.d(t,!1,function(){return a}),i.d(t,!1,function(){return r}),i.d(t,!1,function(){return h}),i.d(t,!1,function(){return c}),i.d(t,!1,function(){return u}),i.d(t,!1,function(){return p}),i.d(t,!1,function(){return d}),i.d(t,!1,function(){return y}),i.d(t,"c",function(){return k}),i.d(t,!1,function(){return b}),i.d(t,!1,function(){return S}),i.d(t,!1,function(){return E}),i.d(t,!1,function(){return R}),i.d(t,!1,function(){return O}),i.d(t,"e",function(){return j}),i.d(t,"d",function(){return M}),i.d(t,"f",function(){return N}),i.d(t,!1,function(){return U}),i.d(t,!1,function(){return _}),i.d(t,"a",function(){return Q}),i.d(t,!1,function(){return ee}),i.d(t,!1,function(){return o}),i.d(t,!1,function(){return te}),i.d(t,"g",function(){return he}),i.d(t,!1,function(){return ce}),i.d(t,!1,function(){return pe});t.b={compType:n,copyWrapConfigs:a,DoubleDrag:r,DoubleDragData:h,Drag:c,filedProxy:u,getRelativeComp:p,GHeroEditConf:d,IEvent:y,init:k,initAudio:b,initCRouter:S,inputConf:E,makeExecLater:R,maps:O,parseObjectToTreeTools:j,parseObjToTree:M,parseTreeToObj:N,roles:U,SingleDragData:_,Time:Q,Timer:ee,type:o,useComp:te,valShortCut:he,Verify:ce,WrapConfig:pe}}},["NHnr"]);
//# sourceMappingURL=app.4f23c9042cd2bac6134d.js.map