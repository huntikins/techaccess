(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{309:function(t,e,r){"use strict";var o=r(141);e.a=o.a},331:function(t,e,r){var content=r(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5db1c400",content,!0,{sourceMap:!1})},332:function(t,e,r){(e=r(11)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{-webkit-box-flex:1;flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{-webkit-box-align:center;align-items:center;border-radius:inherit;display:-webkit-box;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},339:function(t,e,r){"use strict";r(10),r(7),r(5),r(4),r(9);var o=r(1),n=(r(35),r(36),r(331),r(53)),l=r(309),c=r(71),d=r(37),v=r(19),h=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=r(6),m=r(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(_.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},n.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},399:function(t,e,r){"use strict";r.r(e);r(88);var o,n=r(25),l={data:function(){return{alert:!0}},asyncData:(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,t.next=3,r.$axios.post("https://cms.kclibrary.org/api/singletons/get/launchcode?token=1aadabebd095d1512d2ededa2395b8",JSON.stringify({}),{headers:{"Content-Type":"application/json"}});case 3:return o=t.sent,t.abrupt("return",{session1Heading:o.data.session_1_heading,session1Text:o.data.session_1_text,session2Heading:o.data.session_2_heading,session2Text:o.data.session_2_text,locationHeading:o.data.location_heading,qualifications:o.data.qualifications,benefits:o.data.benefits,heading:o.data.heading,hero:"https://cms.kclibrary.org/storage/uploads/"+o.data.hero.path});case 5:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},c=r(42),d=r(58),v=r.n(d),h=r(339),_=r(134),m=r(116),f=r(322),x=r(114),y=r(135),C=r(325),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pa-5"},[r("v-alert",{staticClass:"white--text",attrs:{prominent:"",color:"green",border:"right",type:"success",elevation:"10",icon:"mdi-alert-circle",dark:"true"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n    New applications will be taken at the beginning of 2020.\n  ")]),t._v(" "),r("v-row",[r("v-col",{attrs:{md:7,sm:12}},[r("v-row",[r("v-col",{attrs:{md:6,sm:12}},[r("v-img",{staticClass:"pa-4",attrs:{src:t.hero,contain:"",alt:"Heading Image"}})],1),t._v(" "),r("v-col",{attrs:{md:6,sm:12}},[r("p",{staticClass:"pa-4",domProps:{innerHTML:t._s(t.heading)}})])],1)],1),t._v(" "),r("v-col",{attrs:{md:5,sm:12}},[r("v-row",[r("v-col",{staticClass:"col-12",attrs:{md:6,sm:12}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"text-center justify-center",attrs:{"primary-title":""},domProps:{innerHTML:t._s(t.session1Heading)}}),t._v(" "),r("v-card-text",{domProps:{innerHTML:t._s(t.session1Text)}})],1)],1),t._v(" "),r("v-col",{staticClass:"col-12",attrs:{md:6,sm:12}},[r("v-card",{attrs:{hover:""}},[r("v-card-title",{staticClass:"text-center justify-center",attrs:{"primary-title":""},domProps:{innerHTML:t._s(t.session2Heading)}}),t._v(" "),r("v-card-text",{domProps:{innerHTML:t._s(t.session2Text)}})],1)],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{md:8,sm:12,"offset-md":2}},[r("v-row",[r("v-col",{attrs:{sm:12,md:6}},[r("h1",{staticClass:"text-center"},[t._v("Qualifications")]),t._v(" "),r("v-list",{staticClass:"px-2",domProps:{innerHTML:t._s(t.qualifications)}})],1),t._v(" "),r("v-col",{attrs:{md:6,sm:12}},[r("h1",{staticClass:"text-center"},[t._v("Benefits Provided")]),t._v(" "),r("v-list",{staticClass:"px-2",domProps:{innerHTML:t._s(t.benefits)}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAlert:h.a,VCard:_.a,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VImg:x.a,VList:y.a,VRow:C.a})}}]);