(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{402:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(88);var n=r(25),o={asyncData:function(t){var e=t.app,r=t.params,o=t.error,c=t.payload;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=4;break}return t.abrupt("return",{posts:c,category:r.tag});case 4:return t.next=6,e.$axios.post("https://cms.kclibrary.org/api/collections/get/posts?token=8b3ccafd2c8ef8abb067346e3a35b6",JSON.stringify({filter:{published:!0,tags:{$has:r.tag}},sort:{_created:-1},populate:1}),{headers:{"Content-Type":"application/json"}});case 6:if(n=t.sent,(data=n.data).entries[0]){t.next=10;break}return t.abrupt("return",o({message:"404 Page not found",statusCode:404}));case 10:return t.abrupt("return",{posts:data.entries,category:r.tag});case 11:case"end":return t.stop()}}),t)})))()}},c=r(42),l=r(58),d=r.n(l),v=r(142),m=r(134),_=r(116),h=r(322),f=r(114),y=r(84),w=r(51),x=r(325),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pa-5"},[r("h1",{staticClass:"mb-6"},[t._v('Posts tagged with "'+t._s(t.category)+'"')]),t._v(" "),r("v-row",t._l(t.posts,(function(e,n){return r("v-col",{key:n,attrs:{md:3,sm:"6"}},[r("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",hover:""}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline",attrs:{to:"/blog/"+e.title_slug}},[t._v(t._s(e.title))]),t._v(" "),r("v-list-item-subtitle",[t._v("by "+t._s(e.author))])],1)],1),t._v(" "),r("v-img",{attrs:{src:"https://cms.kclibrary.org/storage/uploads/"+e.image.path,height:"194",to:"/blog/"+e.title_slug}}),t._v(" "),r("v-card-text",{domProps:{innerHTML:t._s(e.excerpt)}}),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"secondary",to:"/blog/"+e.title_slug}},[t._v("\n            Read More\n          ")])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.c,VCol:h.a,VImg:f.a,VListItem:y.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VRow:x.a})}}]);