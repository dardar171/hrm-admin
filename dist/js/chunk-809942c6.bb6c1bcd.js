(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-809942c6"],{"368e":function(e,t,i){},"8ce9":function(e,t,i){},cfe8:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[e.employee?i("v-card",[i("v-card-title",[i("span",[e._v("Basic Info")]),i("EditBasicInfo",{attrs:{id:e.employee.id,name:e.employee.name,email:e.employee.email}})],1),i("v-card-text",[i("p",[e._v("ID:"+e._s(e.employee.id))]),i("p",[e._v("Name:"+e._s(e.employee.name))]),i("p",[e._v("Email:"+e._s(e.employee.email))])])],1):e._e(),e.employee?i("div",[i("v-card",[i("v-card-title",[i("span",[e._v("Detail Info")]),i("EditDetailInfo",{attrs:{id:e.employee.employee_detail.id,mobile:e.employee.employee_detail.mobile,gender:e.employee.employee_detail.gender,dob:e.employee.employee_detail.dob,address:e.employee.employee_detail.address}})],1),i("v-card-text",[i("p",[e._v("Mobile:"+e._s(e.employee.employee_detail.mobile))]),i("p",[e._v("Gender:"+e._s(e.employee.employee_detail.gender))]),i("p",[e._v("Dob:"+e._s(e.employee.employee_detail.dob))]),i("p",[e._v("Address:"+e._s(e.employee.employee_detail.address))])])],1)],1):e._e()],1)},a=[],o=i("4360"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"warning",icon:""}},"v-btn",a,!1),n),[i("v-icon",[e._v("mdi-pencil")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(" Edit Basic Info ")]),i("v-card-text",[i("v-form",[i("v-container",[i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"text","prepend-icon":"mdi-account",label:"Name"},model:{value:e.empName,callback:function(t){e.empName=t},expression:"empName"}})],1)],1),i("v-row",[i("v-col",[i("v-text-field",{attrs:{type:"email","prepend-icon":"mdi-email",label:"Email"},model:{value:e.empEmail,callback:function(t){e.empEmail=t},expression:"empEmail"}})],1)],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:e.onUpdateBasicInfo}},[e._v(" Edit ")])],1)],1)],1)],1)},s=[],l=(i("b0c0"),i("96cf"),i("1da1")),c={props:["id","name","email"],computed:{employee:function(){return o["a"].getters.employee}},data:function(){return{empId:this.id,empName:this.name,empEmail:this.email,dialog:!1}},methods:{hideModal:function(){this.$refs["my-modal"].hide()},onUpdateBasicInfo:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i={id:e.empId,name:e.empName,email:e.empEmail},console.log(i);try{o["a"].dispatch("updateEmployee",i),e.dialog=!1}catch(n){console.log(n)}case 3:case"end":return t.stop()}}),t)})))()}}},d=c,u=i("2877"),m=i("6544"),p=i.n(m),v=i("8336"),h=i("b0af"),f=i("99d9"),b=i("62ad"),g=i("a523"),y=(i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("5530")),x=i("2909"),_=i("ade3"),w=(i("368e"),i("480e")),k=i("4ad4"),C=i("b848"),V=i("75eb"),O=i("e707"),D=i("e4d3"),E=i("21be"),A=i("f2e7"),$=i("a293"),I=i("58df"),B=i("d9bd"),j=i("80d2"),T=Object(I["a"])(k["a"],C["a"],V["a"],O["a"],D["a"],E["a"],A["a"]),S=T.extend({name:"v-dialog",directives:{ClickOutside:$["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(_["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(_["a"])(e,"v-dialog--active",this.isActive),Object(_["a"])(e,"v-dialog--persistent",this.persistent),Object(_["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(_["a"])(e,"v-dialog--scrollable",this.scrollable),Object(_["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(B["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):O["a"].options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===j["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(x["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(w["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(y["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(y["a"])({},e.style,{maxWidth:"none"===this.maxWidth?void 0:Object(j["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(j["f"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),M=(i("8ce9"),i("7560")),F=M["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(y["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(y["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}}),N=i("4bd4"),R=i("132d"),G=i("0fd9"),Z=i("2fa4"),L=i("8654"),U=Object(u["a"])(d,r,s,!1,null,null,null),W=U.exports;p()(U,{VBtn:v["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:b["a"],VContainer:g["a"],VDialog:S,VDivider:F,VForm:N["a"],VIcon:R["a"],VRow:G["a"],VSpacer:Z["a"],VTextField:L["a"]});var z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"warning",icon:""}},"v-btn",a,!1),n),[i("v-icon",[e._v("mdi-pencil")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(" Edit Detail Info ")]),i("v-card-text",[i("v-form",[i("v-container",[i("v-row",[i("v-text-field",{attrs:{"prepend-icon":"mdi-cellphone",label:"Mobile:",type:"text"},model:{value:e.empMobile,callback:function(t){e.empMobile=t},expression:"empMobile"}}),i("v-radio-group",{model:{value:e.empGender,callback:function(t){e.empGender=t},expression:"empGender"}},[i("v-radio",{attrs:{label:"Male",value:"Male"}}),i("v-radio",{attrs:{label:"Female",value:"Female"}})],1),i("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.empDob,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.empDob=t},"update:return-value":function(t){e.empDob=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.empDob,callback:function(t){e.empDob=t},expression:"empDob"}},"v-text-field",a,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[i("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.empDob,callback:function(t){e.empDob=t},expression:"empDob"}},[i("v-spacer"),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.empDob)}}},[e._v("OK")])],1)],1),i("v-text-field",{attrs:{"prepend-icon":"mdi-cellphone",label:"Address:",type:"text"},model:{value:e.empAddress,callback:function(t){e.empAddress=t},expression:"empAddress"}})],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:e.onUpdateEmployeeDetail}},[e._v(" Edit ")]),i("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")])],1)],1)],1)],1)},K=[],P={props:["id","mobile","gender","dob","address"],data:function(){return{dialog:!1,empGender:this.gender,empMobile:this.mobile,empAddress:this.address,empDob:this.dob,menu:!1}},methods:{onUpdateEmployeeDetail:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={id:e.id,gender:e.empGender,mobile:e.empMobile,address:e.empAddress,dob:e.empDob},t.prev=1,t.next=4,o["a"].dispatch("updateEmployeeDetail",i);case 4:e.dialog=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},q=P,J=i("2e4b"),H=i("e449"),Q=i("67b6"),X=i("43a6"),Y=Object(u["a"])(q,z,K,!1,null,null,null),ee=Y.exports;p()(Y,{VBtn:v["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:g["a"],VDatePicker:J["a"],VDialog:S,VDivider:F,VForm:N["a"],VIcon:R["a"],VMenu:H["a"],VRadio:Q["a"],VRadioGroup:X["a"],VRow:G["a"],VSpacer:Z["a"],VTextField:L["a"]});var te={components:{EditBasicInfo:W,EditDetailInfo:ee},created:function(){this.fetchData()},computed:{employee:function(){return o["a"].getters.employee}},beforeRouteLeave:function(e,t,i){return o["a"].dispatch("resetEmployee",null),i()},methods:{fetchData:function(){o["a"].dispatch("getEmployee",this.$route.params.id)}}},ie=te,ne=Object(u["a"])(ie,n,a,!1,null,null,null);t["default"]=ne.exports;p()(ne,{VCard:h["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:g["a"]})}}]);
//# sourceMappingURL=chunk-809942c6.bb6c1bcd.js.map