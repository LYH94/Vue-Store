(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0f23":function(t,e,a){t.exports=a.p+"img/about_animated.92d76de1.svg"},"0f91":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=e.sendForm=e.send=e.init=void 0;var s=a("3245");Object.defineProperty(e,"EmailJSResponseStatus",{enumerable:!0,get:function(){return s.EmailJSResponseStatus}});var o=a("5129"),r=null,i="https://api.emailjs.com";function n(t,e,a){return void 0===a&&(a={}),new Promise((function(o,r){var i=new XMLHttpRequest;for(var n in i.addEventListener("load",(function(t){var e=new s.EmailJSResponseStatus(t.target);200===e.status||"OK"===e.text?o(e):r(e)})),i.addEventListener("error",(function(t){r(new s.EmailJSResponseStatus(t.target))})),i.open("POST",t,!0),a)i.setRequestHeader(n,a[n]);i.send(e)}))}function c(t){var e=document&&document.getElementById("g-recaptcha-response");return e&&e.value&&(t["g-recaptcha-response"]=e.value),e=null,t}function l(t){return"#"!==t[0]&&"."!==t[0]?"#"+t:t}function m(t,e){r=t,i=e||"https://api.emailjs.com"}function u(t,e,a,s){var o={lib_version:"2.6.4",user_id:s||r,service_id:t,template_id:e,template_params:c(a)};return n(i+"/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})}function b(t,e,a,s){if("string"===typeof a&&(a=document.querySelector(l(a))),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";o.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.4"),c.append("service_id",t),c.append("template_id",e),c.append("user_id",s||r),n(i+"/api/v1.0/email/send-form",c).then((function(t){return o.UI.successState(a),t}),(function(t){return o.UI.errorState(a),Promise.reject(t)}))}e.init=m,e.send=u,e.sendForm=b,e.default={init:m,send:u,sendForm:b}},"14ca":function(t,e,a){t.exports=a.p+"img/about2.b0174911.jpg"},"2a2e":function(t,e,a){t.exports=a.p+"img/about1.ab2f3587.jpg"},3245:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=void 0;var s=function(){function t(t){this.status=t.status,this.text=t.responseText}return t}();e.EmailJSResponseStatus=s},5129:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var s=function(){function t(){}return t.clearAll=function(t){t.classList.remove(this.PROGRESS),t.classList.remove(this.DONE),t.classList.remove(this.ERROR)},t.progressState=function(t){this.clearAll(t),t.classList.add(this.PROGRESS)},t.successState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.DONE)},t.errorState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.ERROR)},t.PROGRESS="emailjs-sending",t.DONE="emailjs-success",t.ERROR="emailjs-error",t}();e.UI=s},"5f83":function(t,e,a){},"6a62":function(t,e,a){t.exports=a.p+"img/about3.c46b84a9.jpg"},"86d5":function(t,e,a){t.exports=a.p+"img/bg.683cab08.jpg"},f26d:function(t,e,a){"use strict";a("5f83")},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"p-0 h-100",attrs:{fluid:"",id:"about"}},[t.isShow?s("div",{staticClass:"about-svg h-100"},[s("div",{staticClass:"svg-hover h-100 d-flex flex-column justify-content-center align-items-center"},[s("b-img",{attrs:{src:a("0f23"),width:"400"},on:{click:t.toggleAbout}})],1)]):s("div",[s("b-container",{staticClass:"mt-5"},[s("b-img",{staticClass:"mb-2",attrs:{src:a("86d5"),fluid:""}})],1),s("b-container",{staticClass:"p-0 my-5"},[s("b-row",[s("b-col",[s("div",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[s("b-card",{staticClass:"w-100",attrs:{overlay:"","img-src":a("2a2e"),"img-alt":"調香原料","text-variant":"white","border-variant":"light",title:"調香原料"}},[s("b-card-text",{staticClass:"aboutimg"},[t._v(" 調和各種原料混合，增加了味道的深度。 ")])],1)],1)]),s("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("p",[t._v("使用天然的原料來調和香味")]),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.about-1",modifiers:{"about-1":!0}}]},[t._v("了解更多")])],1)],1)],1),s("b-container",[s("b-collapse",{staticClass:"mt-2",attrs:{id:"about-1"}},[s("b-card",[s("b-container",[s("h3",[t._v("調香原料")]),s("b-container",{attrs:{id:"flavor"}},[s("b-row",t._l(t.flavors,(function(e){return s("b-col",{key:e.id,attrs:{cols:"6",lg:"4"}},[s("b-card",{attrs:{"border-variant":"light","img-src":e.img[0]}},[s("b-card-text",[t._v(" "+t._s(e.name)+" ")]),s("b-card-text",[t._v(" "+t._s(e.intro)+" ")])],1)],1)})),1)],1)],1)],1)],1)],1),s("b-container",[s("b-row",{staticClass:"p-0"},[s("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("p",[t._v("沉香原料介紹")]),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.about-2",modifiers:{"about-2":!0}}]},[t._v("了解更多")])],1),s("b-col",[s("div",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[s("b-card",{staticClass:"w-100",attrs:{overlay:"","img-src":a("14ca"),"img-alt":"沉香原料",title:"沉香原料","text-variant":"dark","border-variant":"light"}})],1)])],1)],1),s("b-container",[s("b-collapse",{staticClass:"mt-2",attrs:{id:"about-2"}},[s("b-card",[s("b-container",[s("h3",[t._v("沉香原料")]),s("b-container",{attrs:{id:"powder"}},[s("b-row",t._l(t.powders,(function(e){return s("b-col",{key:e.id,attrs:{cols:"6",lg:"3"}},[s("b-card",{attrs:{"border-variant":"light","img-src":e.img[0]}},[s("b-card-text",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1)],1)],1)],1)],1)],1),s("b-container",{staticClass:"mt-5"},[s("b-row",[s("b-col",[s("div",{attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[s("b-card",{staticClass:"w-100",attrs:{overlay:"","img-src":a("6a62"),"img-alt":"沉香辨別","text-variant":"white","border-variant":"light",title:"沉香辨別"}})],1)]),s("b-col",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("p",[t._v("將沉香加熱燻烤或點燃聞其香味。好的沉香首先分發的是油脂香味，必定不會立即呈現焦味。")]),s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.about-3",modifiers:{"about-3":!0}}]},[t._v("了解更多")])],1)],1)],1),s("b-container",[s("b-collapse",{staticClass:"mt-2",attrs:{id:"about-3"}},[s("b-card",[s("b-container",[s("h3",[t._v("真偽辨別")]),s("b-row",[s("b-col",{attrs:{cols:"6"}},[s("p",[t._v("自然")]),s("p",[t._v("自然沉香與人造沉香在紋路與色澤等方面有明顯區別。自然構成的沉香，需終年累月。紋路，即油脂線呈現不勻，色澤間也存在一定的差異")])]),s("b-col",{attrs:{cols:"6"}},[s("p",[t._v("化學")]),s("p",[t._v("人造構成的沉香，製造的十分皆有統一的規範，其油脂腺散布通常黑而含糊。")])])],1)],1)],1)],1)],1),s("b-container",{staticClass:"p-0 bg-white",attrs:{fluid:""}},[s("b-container",{staticClass:"mt-5"},[s("b-row",[s("b-col",{attrs:{cols:"12",lg:"6"}},[s("h2",[t._v("聯絡我們")]),s("b-form",{on:{submit:function(e){return e.preventDefault(),t.sendEmail(e)}}},[s("b-form-group",{attrs:{label:"姓名"}},[s("b-form-input",{attrs:{type:"text",required:"required",placeholder:"請輸入名字"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("b-form-group",{attrs:{label:"電話"}},[s("b-form-input",{attrs:{required:"required",placeholder:"請輸入電話"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),s("b-form-group",{attrs:{id:"input-group-1",label:"電子信箱","label-for":"input-1"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[s("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"請輸入電子信箱",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{staticClass:"mb-0",attrs:{label:"備註"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}},[s("b-form-textarea",{attrs:{placeholder:"我們會盡快聯絡你"}})],1),s("b-form-group",[s("b-button",{staticClass:"mt-2 btn-md",attrs:{type:"submit"}},[t._v("送出")])],1)],1)],1),s("b-col",{attrs:{"align-self":"center",cols:"12",lg:"6"}},[s("b-embed",{attrs:{type:"iframe",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.814597305804!2d121.4195156!3d25.0441293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1611034324609!5m2!1szh-TW!2stw"}})],1)],1)],1)],1),s("b-container",{staticClass:"p-0",attrs:{fluid:""}},[s("footer",{staticClass:"py-5 bg-light w-100 bg-dark text-white"},[s("b-container",[s("b-row",{attrs:{"align-h":"between"}},[s("b-col",{attrs:{cols:"12",lg:"4"}},[s("font-awesome-icon",{attrs:{icon:["fas","map-marker-alt"]}}),t._v(" 243 新北市泰山區貴子里致遠新村55之1號 ")],1),s("b-col",{attrs:{cols:"12",lg:"3"}},[s("font-awesome-icon",{attrs:{icon:["fas","phone"]}}),t._v(" 0999-888-168 ")],1),s("b-col",{staticClass:"text-lg-right",attrs:{cols:"12",lg:"2"}},[s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","facebook"]}}),s("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","instagram"]}}),s("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)],1),s("b-row",{attrs:{"align-h":"between"}},[s("b-col",{attrs:{cols:"12",lg:"4"}},[t._v("所有圖片皆來自於網路僅為練習用")]),s("b-col",{staticClass:"text-lg-right",attrs:{cols:"12",lg:"4"}},[t._v("Created by Lee Y.H")])],1)],1)],1)]),s("div",{attrs:{id:"go_top_page"}},[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"shopping-cart",attrs:{icon:["fas","chevron-up"]}})],1)])],1)])},o=[],r=(a("b0c0"),a("0f91")),i=a.n(r),n={data:function(){return{isShow:!0,flavors:[{name:"白壇",intro:"原產地為印度，它有獨特的安撫作用可以使人清心、凝神、排除雜念，是修生養性的輔助工具。",img:["./about/flavor1.jpg"]},{name:"奇楠",intro:"最高質量的沉香，僅在越南的某些區域內生產。",img:["./about/flavor2.jpg"]},{name:"沉香",intro:"植物流出的樹脂與木質結合在一起的融合物。",img:["./about/flavor3.jpg"]},{name:"龍涎香",intro:"從抹香鯨消化系統所產生。龍涎香有其獨特的甘甜土質香味。",img:["./about/flavor4.jpg"]},{name:"肉桂",intro:"是最早被人類使用的香料之一，桂皮的氣味芳香。",img:["./about/flavor5.jpg"]}],powders:[{name:"老山檀香",img:["./about/powder1.png"]},{name:"新山檀香",img:["./about/powder2.png"]},{name:"星洲沉香",img:["./about/powder3.png"]},{name:"惠安沉香",img:["./about/powder4.png"]}],form:[{name:"",phone:"",email:"",note:""}]}},methods:{toggleAbout:function(){this.isShow=!this.isShow},sendEmail:function(){var t=this,e={userName:this.form.name,userPhone:this.form.phone,userEmil:this.form.email,content:this.form.note};i.a.send("gmail","template_5ejwnft",e,"user_1HFWK3ADiB3ud0ZgKgI2I").then((function(){t.$swal({icon:"success",title:"已成功送出，請留意您的信箱",timer:2e3,timerProgressBar:!0})}),(function(t){console.log("FAILED...",t)}))}}},c=n,l=(a("f26d"),a("2877")),m=Object(l["a"])(c,s,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=about.58fbbf63.js.map