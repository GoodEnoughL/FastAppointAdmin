(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a5bf3d6"],{"705b":function(e,t,a){"use strict";a.r(t);var l=a("7a23"),n=a("3ef4"),o={class:"main-container flex flex-direction"},r=Object(l["createTextVNode"])("请填写会议基本信息"),c={class:"form-wrapper padding-top"},u={class:"text-center"},i=Object(l["createTextVNode"])("提交"),d=Object(l["defineComponent"])({setup:function(e){var t={labelWidth:100,size:"small",labelPosition:"right"},a=[{label:"会议名称：",type:"input",name:"name",value:"",maxLength:50,inputType:"text",placeholder:"请输入会议名称",validator:function(e){var t=e.value,a=void 0===t?"":t,l=e.placeholder,o=void 0===l?"":l;return!!a||(n["a"].error(o),!1)}},{label:"会议类型：",type:"radio-group",name:"meetType",associatedOption:"address",value:0,radioOptions:[{label:"普通",value:0},{label:"紧急",value:1}],onChange:function(){}},{label:"会议内容：",type:"input",name:"content",value:"",maxLength:10,inputType:"text",placeholder:"请输入会议内容",validator:function(e){var t=e.value,a=void 0===t?"":t,l=e.placeholder,o=void 0===l?"":l;return!!a||(n["a"].error(o),!1)}},{label:"起止时间：",type:"date-range",name:"startEndTime",placeholder:"请选择会议起止时间",value:"",validator:function(e){var t=e.value,a=void 0===t?"":t,l=e.placeholder,o=void 0===l?"":l;return!!a||(n["a"].error(o),!1)}},{label:"起止地点：",type:"select",name:"address",value:"",placeholder:"请选择会议地点",selectOptions:[{label:"会议一室",value:1},{label:"会议二室",value:2},{label:"会议三室",value:3},{label:"会议四室",value:4}],validator:function(e){var t=e.value,a=void 0===t?"":t,l=e.placeholder,o=void 0===l?"":l;return!!a||(n["a"].error(o),!1)}}],d=Object(l["shallowReactive"])({value:"",options:[{label:"张三",value:"zhangsan"},{label:"李四",value:"lisi"},{label:"江小鱼",value:"jiangxiaoyu"},{label:"花无缺",value:"huawuque"},{label:"燕南天",value:"yannantian"}]}),b=Object(l["ref"])(""),v=Object(l["ref"])(!1),s=Object(l["ref"])();function p(){var e;if(null!==(e=s.value)&&void 0!==e&&e.checkParams()){if(!d.value)return n["a"].error("请选择与会人员"),!1;v.value=!0,setTimeout((function(){n["a"].success("保存成功"),v.value=!1}),1e3)}}return function(e,n){var f=Object(l["resolveComponent"])("el-link"),m=Object(l["resolveComponent"])("el-card"),O=Object(l["resolveComponent"])("el-option"),j=Object(l["resolveComponent"])("el-select"),h=Object(l["resolveComponent"])("el-form-item"),x=Object(l["resolveComponent"])("el-input"),w=Object(l["resolveComponent"])("el-button"),y=Object(l["resolveComponent"])("BaseForm");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createVNode"])(m,{"body-style":{padding:"15px"},shadow:"hover"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(f,{underline:!1},{default:Object(l["withCtx"])((function(){return[r]})),_:1})]})),_:1}),Object(l["createVNode"])(m,{"body-style":{padding:"10px"},shadow:"nerve",class:"margin-top-xs flex-sub"},{default:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("div",c,[Object(l["createVNode"])(y,{ref:function(e,t){t["baseForm"]=e,s.value=e},"form-items":a,config:t},{extra:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(h,{label:"与会人员：",class:"form-item"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(j,{modelValue:Object(l["unref"])(d).value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return Object(l["unref"])(d).value=e}),multiple:"",placeholder:"请选择与会人员",style:{width:"100%"}},{default:Object(l["withCtx"])((function(){return[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(Object(l["unref"])(d).options,(function(e){return Object(l["openBlock"])(),Object(l["createBlock"])(O,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,{label:"备注：",class:"form-item"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(x,{modelValue:b.value.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return b.value.value=e}),placeholder:"请输入备注信息（选填）",type:"textarea",rows:3,style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),Object(l["createVNode"])(h,null,{default:Object(l["withCtx"])((function(){return[Object(l["createElementVNode"])("div",u,[Object(l["createVNode"])(w,{type:"primary",size:"small",loading:v.value,onClick:p},{default:Object(l["withCtx"])((function(){return[i]})),_:1},8,["loading"])])]})),_:1})]})),_:1},512)])]})),_:1})])}}}),b=(a("a45a"),a("6b0d")),v=a.n(b);const s=v()(d,[["__scopeId","data-v-5a67a7d6"]]);t["default"]=s},"970c":function(e,t,a){},a45a:function(e,t,a){"use strict";a("970c")}}]);