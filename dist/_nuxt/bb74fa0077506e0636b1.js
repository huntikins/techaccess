(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{398:function(e,t,r){"use strict";r.r(t);r(88);var n,l=r(25),o={data:function(){return{valid:!0,alert:!1,partner:"",message:"",firstname:"",phone:"",nameRules:[function(e){return!!e||"Name is required"}],email:"",emailRules:[function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],partnerType:["Individual","Organization"]}},asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function e(t){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,e.next=3,r.$axios.post("https://cms.kclibrary.org/api/singletons/get/resources_page?token=1aadabebd095d1512d2ededa2395b8",JSON.stringify({}),{headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,data=n.data,e.abrupt("return",{alert_message:data.email_confirmation_message});case 6:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),methods:{validate:function(){var e=this;this.alert=!1,this.$refs.form.validate()&&fetch("https://cms.kclibrary.org/api/forms/submit/partner_form?token=3ec2158e2f5e2fa37fa4b09c5335c0",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({form:{Name:this.firstname,Email:this.email,Phone:this.phone,"Partner Type":this.partner,Message:this.message}})}).then((function(e){return e.json()})).then((function(){e.$refs.form.reset(),e.alert=!0}))}}},c=r(42),d=r(58),m=r.n(d),f=r(339),v=r(141),h=r(134),y=r(116),k=r(322),x=r(387),_=r(325),C=r(389),w=r(360),V=r(388),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form"},[r("div",{staticClass:"pa-5"},[r("v-alert",{staticClass:"white--text",attrs:{prominent:"",color:"green",border:"right",type:"success",elevation:"10",icon:"mdi-email-check",dark:"true"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v("\n        "+e._s(e.alert_message)+"\n      ")]),e._v(" "),r("v-row",{staticClass:"px-md-10 mx-md-10"},[r("v-col",{attrs:{md:12,sm:12}},[r("v-card",{staticClass:"pa-4"},[r("v-card-title",{staticClass:"text-center d-block headline",staticStyle:{"word-break":"normal"}},[e._v("\n              Tech Coach Partner Application\n            ")]),e._v(" "),r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Your Name",color:"secondary",filled:"",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"Email Address (of individual or organization's contact) ",color:"secondary",filled:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Phone Number (of individual or organization's contact)",color:"secondary",filled:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-select",{attrs:{items:e.partnerType,filled:"",color:"secondary",label:"Individual or Organization?",required:""},model:{value:e.partner,callback:function(t){e.partner=t},expression:"partner"}})],1),e._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-textarea",{attrs:{filled:"",name:"input-7-1",label:"Brief summary of need or potential partnership",value:"",color:"secondary",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),e._v(" "),r("v-btn",{attrs:{block:"",color:"secondary",dark:"",disabled:!e.valid},on:{click:e.validate}},[e._v("Submit")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VAlert:f.a,VBtn:v.a,VCard:h.a,VCardTitle:y.d,VCol:k.a,VForm:x.a,VRow:_.a,VSelect:C.a,VTextField:w.a,VTextarea:V.a})}}]);