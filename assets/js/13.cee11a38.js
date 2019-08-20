(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{135:function(t,o,n){},17:function(t,o,n){},235:function(t,o,n){"use strict";var s=n(135);n.n(s).a},294:function(t,o,n){"use strict";n.r(o);n(28),n(172);var s={name:"SButtonGroup"},e=(n(235),n(1)),c=Object(e.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"group"},[this._t("default")],2)},[],!1,null,"34c35e2f",null).exports,i=n(47),r=(n(56),n(30)),u={name:"button-demos",data:function(){return{selectedTab:[],code1:"\n      <s-button>按钮</s-button>\n      ".replace(/(^\s)+|(\s*$)+/g,""),code2:'\n    <s-button-group>\n      <s-button icon="left" position="left">按钮</s-button>\n      <s-button>1</s-button>\n      <s-button>2</s-button>\n      <s-button>3</s-button>\n      <s-button icon="right" position="right">按钮</s-button>\n    </s-button-group>\n      '.replace(/(^\s)+|(\s*$)+/g,""),code3:'\n      <s-button icon="setting">按钮</s-button>\n      <s-button icon="right" position="right">按钮</s-button>\n    '.replace(/(^\s)+|(\s*$)+/g,""),code4:'<s-button :loading="true">按钮</s-button>'.replace(/(^\s)+|(\s*$)+/g,""),code5:"<s-button disabled>按钮</s-button>".replace(/(^\s*)+|(\s*$)+/g,""),code6:'\n      <s-button types="circle danger" icon="errormsg"></s-button>\n      <s-button types="circle normal" icon="setting"></s-button>\n      <s-button types="circle success" icon="collection"></s-button>'.replace(/(^\s)+|(\s*$)+/g,""),code7:'\n      <s-button types="danger" icon="error">error</s-button>\n      <s-button types="success" icon="correct">success</s-button>\n      <s-button types="normal" icon="message" position="right">normal</s-button>\n      <s-button disabled icon="pen">disabled</s-button>'.replace(/(^\s)+|(\s*$)+/g,"")}},components:{"s-button":i.a,"s-button-group":c,"s-showcode":r.a},methods:{}},a=Object(e.a)(u,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("h4",[t._v("1. 默认按钮")]),t._v(" "),n("s-button",[t._v("按钮")]),t._v(" "),n("s-showcode",{attrs:{code:t.code1},on:{"update:code":function(o){t.code1=o}}}),t._v(" "),n("h4",[t._v("2. 按钮组合")]),t._v(" "),n("p",[t._v("--直接嵌套 button 组件使用")]),t._v(" "),n("s-button-group",[n("s-button",{attrs:{icon:"left",position:"left"}},[t._v("按钮")]),t._v(" "),n("s-button",[t._v("1")]),t._v(" "),n("s-button",[t._v("2")]),t._v(" "),n("s-button",[t._v("3")]),t._v(" "),n("s-button",{attrs:{icon:"right",position:"right"}},[t._v("按钮")])],1),t._v(" "),n("s-showcode",{attrs:{code:t.code2},on:{"update:code":function(o){t.code2=o}}}),t._v(" "),n("h4",[t._v("3. 带 icon 的按钮")]),t._v(" "),n("s-button",{attrs:{icon:"setting"}},[t._v("按钮")]),t._v(" "),n("s-button",{attrs:{icon:"right",position:"right"}},[t._v("按钮")]),t._v(" "),n("s-showcode",{attrs:{code:t.code3},on:{"update:code":function(o){t.code3=o}}}),t._v(" "),n("h4",[t._v("4. loading 状态的按钮")]),t._v(" "),n("s-button",{attrs:{loading:!0}},[t._v("按钮")]),t._v(" "),n("s-showcode",{attrs:{code:t.code4},on:{"update:code":function(o){t.code4=o}}}),t._v(" "),n("h4",[t._v("5. 禁用状态的按钮")]),t._v(" "),n("s-button",{attrs:{disabled:""}},[t._v("按钮")]),t._v(" "),n("s-button",{attrs:{readonly:""}},[t._v("按钮")]),t._v(" "),n("s-showcode",{attrs:{code:t.code5},on:{"update:code":function(o){t.code5=o}}}),t._v(" "),n("h4",[t._v("6. 圆形按钮")]),t._v(" "),n("p",[t._v("--嵌套 icon 使用")]),t._v(" "),n("div",{attrs:{id:"round-button"}},[n("s-button",{attrs:{types:"circle danger",icon:"errormsg"}}),t._v(" "),n("s-button",{attrs:{types:"circle normal",icon:"setting"}}),t._v(" "),n("s-button",{attrs:{types:"circle success",icon:"collection"}})],1),t._v(" "),n("s-showcode",{attrs:{code:t.code6},on:{"update:code":function(o){t.code6=o}}}),t._v(" "),n("h4",[t._v("7. 不同状态的按钮")]),t._v(" "),n("div",{attrs:{id:"rect-button"}},[n("s-button",{attrs:{types:"danger",icon:"error"}},[t._v("error")]),t._v(" "),n("s-button",{attrs:{types:"success",icon:"correct"}},[t._v("success")]),t._v(" "),n("s-button",{attrs:{types:"normal",icon:"message",position:"right"}},[t._v("normal")]),t._v(" "),n("s-button",{attrs:{disabled:"",icon:"pen"}},[t._v("disabled")])],1),t._v(" "),n("s-showcode",{attrs:{code:t.code7},on:{"update:code":function(o){t.code7=o}}})],1)},[],!1,null,null,null);o.default=a.exports},46:function(t,o,n){"use strict";var s=n(17);n.n(s).a},47:function(t,o,n){"use strict";n(22);var s=n(0),e=n(56);s.a.component("s-icon",e.a);var c={name:"SButton",props:{types:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},icon:{type:String},loading:{type:Boolean},position:{type:String,default:"left",validator:function(t){return["left","right"].indexOf(t)>=0}}}},i=(n(46),n(1)),r=Object(i.a)(c,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("button",{staticClass:"s-button",class:[""+t.types,"icon-"+t.position],attrs:{disabled:t.disabled},on:{click:function(o){return t.$emit("click")}}},[t.icon&&!t.loading?n("s-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?n("s-icon",{staticClass:"icon loading",attrs:{name:"loading"}}):t._e(),t._v(" "),n("span",{staticClass:"s-content"},[t._t("default")],2)],1)},[],!1,null,"7c05a15b",null);o.a=r.exports}}]);