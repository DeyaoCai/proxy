webpackJsonp([6],{"1H4c":function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,"\n.platform-content[data-v-57e204f0]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  background-color: #f8f8f8;\n  overflow: hidden;\n}\n.platform-content-left[data-v-57e204f0]{\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 180px;\n          flex: 0 0 180px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.platform-content-right[data-v-57e204f0]{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  padding: 10px;\n}\n.platform-content-title[data-v-57e204f0]{\n  line-height: 70px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #D9DEE4;\n}\n.platform-content-menu[data-v-57e204f0]{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  overflow: scroll;\n\n  background-color: #EAEDF1;\n}\n.platform-content-menu[data-v-57e204f0]::-webkit-scrollbar{\n  display: none;\n}\n","",{version:3,sources:["D:/work-space/vue-dev-tool/work-space-vuc-dev-platform/vuc-dev-platform/src/views/tape/Tape.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,kBAAkB;UACd,YAAY;EACpB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;CAChC;AACD;EACE,oBAAoB;MAChB,kBAAkB;UACd,YAAY;EACpB,cAAc;CACf;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;CAC3B;AACD;EACE,oBAAoB;MAChB,kBAAkB;UACd,YAAY;EACpB,iBAAiB;;EAEjB,0BAA0B;CAC3B;AACD;EACE,cAAc;CACf",file:"Tape.vue",sourcesContent:["\n.platform-content[data-v-57e204f0]{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  background-color: #f8f8f8;\n  overflow: hidden;\n}\n.platform-content-left[data-v-57e204f0]{\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 180px;\n          flex: 0 0 180px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.platform-content-right[data-v-57e204f0]{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  padding: 10px;\n}\n.platform-content-title[data-v-57e204f0]{\n  line-height: 70px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #D9DEE4;\n}\n.platform-content-menu[data-v-57e204f0]{\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  overflow: scroll;\n\n  background-color: #EAEDF1;\n}\n.platform-content-menu[data-v-57e204f0]::-webkit-scrollbar{\n  display: none;\n}\n"],sourceRoot:""}])},"5SqO":function(n,e,t){var o=t("6r4h");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("878115f8",o,!0,{})},"6r4h":function(n,e,t){(n.exports=t("UTlt")(!0)).push([n.i,'\n.dir-tree[data-v-23b0314e],\n.dir-list>div[data-v-23b0314e]{\n  padding: 5px 0 5px 20px;\n  line-height: 30px;\n  color: #333;\n  cursor: pointer;\n}\n.dir-tree>div[data-v-23b0314e]{\n  position: relative;\n  padding-left: 5px;\n}\n.dir-tree>div[data-v-23b0314e]:hover{\n  background-color: #e0e4e8;\n}\n.dir-tree>ul>div.chose[data-v-23b0314e]{\n  background-color: #e0e4e8;\n}\n.dir-tree>div[data-v-23b0314e]:before{\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(-90deg);\n          transform: translateY(-50%) rotate(-90deg);\n  left: -14px;\n  content: "";\n  display: block;\n  border-top: 5px solid #333;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.dir-tree.active>div[data-v-23b0314e]:before{\n  -webkit-transform: translateY(-50%) rotate(0deg);\n          transform: translateY(-50%) rotate(0deg);\n}\n.dir-tree > ul[data-v-23b0314e]{\n  opacity: 0;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  overflow: hidden;\n}\n.dir-tree.active > ul[data-v-23b0314e]{\n  opacity: 1;\n}\n',"",{version:3,sources:["D:/work-space/vue-dev-tool/work-space-vuc-dev-platform/vuc-dev-platform/src/units/DirTree.vue"],names:[],mappings:";AACA;;EAEE,wBAAwB;EACxB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,mDAAmD;UAC3C,2CAA2C;EACnD,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,mCAAmC;EACnC,oCAAoC;EACpC,4BAA4B;EAC5B,oBAAoB;CACrB;AACD;EACE,iDAAiD;UACzC,yCAAyC;CAClD;AACD;EACE,WAAW;EACX,4BAA4B;EAC5B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ",file:"DirTree.vue",sourcesContent:['\n.dir-tree[data-v-23b0314e],\n.dir-list>div[data-v-23b0314e]{\n  padding: 5px 0 5px 20px;\n  line-height: 30px;\n  color: #333;\n  cursor: pointer;\n}\n.dir-tree>div[data-v-23b0314e]{\n  position: relative;\n  padding-left: 5px;\n}\n.dir-tree>div[data-v-23b0314e]:hover{\n  background-color: #e0e4e8;\n}\n.dir-tree>ul>div.chose[data-v-23b0314e]{\n  background-color: #e0e4e8;\n}\n.dir-tree>div[data-v-23b0314e]:before{\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%) rotate(-90deg);\n          transform: translateY(-50%) rotate(-90deg);\n  left: -14px;\n  content: "";\n  display: block;\n  border-top: 5px solid #333;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.dir-tree.active>div[data-v-23b0314e]:before{\n  -webkit-transform: translateY(-50%) rotate(0deg);\n          transform: translateY(-50%) rotate(0deg);\n}\n.dir-tree > ul[data-v-23b0314e]{\n  opacity: 0;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  overflow: hidden;\n}\n.dir-tree.active > ul[data-v-23b0314e]{\n  opacity: 1;\n}\n'],sourceRoot:""}])},"7ltL":function(n,e,t){var o=t("1H4c");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("FIqI")("3b63cb0d",o,!0,{})},KQMA:function(n,e,t){"use strict";var o={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"dir-tree",class:{active:n.active}},[t("div",{on:{click:function(e){n.active=!n.active}}},[n._v(n._s(n.conf.name))]),n._v(" "),t("ul",{staticClass:"dir-list",style:{height:(n.active?40*(n.conf.child.length+n.conf.list.length):0)+"px"}},[n._l(n.conf.list,function(e,o){return t("dir-tree",{key:o,attrs:{conf:e,treeConf:n.treeConf}})}),n._v(" "),n._l(n.conf.child,function(e,o){return t("div",{key:"_"+o,class:{chose:n.treeConf.choseChild===e},on:{click:function(t){n.treeConf.choseChild=e}}},[n._v(n._s(e.name))])})],2)])},staticRenderFns:[]};var r=t("C7Lr")({name:"dir-tree",props:["conf","treeConf"],data:function(){return{active:!1}},methods:{}},o,!1,function(n){t("5SqO")},"data-v-23b0314e",null);e.a=r.exports},UpxW:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={components:{DirTree:t("KQMA").a},name:"home",data:function(){return{treeConf:{choseNode:null,choseChild:null,choseNodeList:[],choseChildList:[]},treeList:[{name:"镜像操作",list:[],child:[{name:"镜像列表",path:"ConfigManager"},{name:"镜像上传"},{name:"在线构建"}]},{name:"工作空间",list:[],child:[]},{name:"图表生成",list:[],child:[]},{name:"环境版本",list:[],child:[]}]}},methods:{},mounted:function(){},computed:{},watch:{"treeConf.choseChild":function(){var n=this.treeConf.choseChild.path;this.$router.push({name:n})}}},r={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"platform-content"},[t("div",{staticClass:"platform-content-left"},[t("div",{staticClass:"platform-content-title",on:{click:function(e){return n.$router.push({name:"Home"})}}},[n._v("NACOS 1.0.0-RC1")]),n._v(" "),t("div",{staticClass:"platform-content-menu"},n._l(n.treeList,function(e,o){return t("DirTree",{key:o,attrs:{conf:e,treeConf:n.treeConf}})}),1)]),n._v(" "),t("div",{staticClass:"platform-content-right"},[t("router-view")],1)])},staticRenderFns:[]};var i=t("C7Lr")(o,r,!1,function(n){t("7ltL")},"data-v-57e204f0",null);e.default=i.exports}});
//# sourceMappingURL=6.8e2cfb8d1421aa049e9d.js.map