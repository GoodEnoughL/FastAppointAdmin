(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-967b4830"],{6974:function(e,t,n){},7059:function(e,t,n){"use strict";n("6974")},"93f0":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=function(e){return Object(a["pushScopeId"])("data-v-0590d829"),e=e(),Object(a["popScopeId"])(),e},r={class:"margin-top"},o=c((function(){return Object(a["createElementVNode"])("div",{class:"text-bold"}," 全年销售额分析图（数据为模拟，只为演示效果） ",-1)})),l={ref:"fullYearSalesChart",class:"chart-item"};function i(e,t,n,c,i,u){var d=Object(a["resolveComponent"])("el-skeleton-item"),s=Object(a["resolveComponent"])("el-card"),b=Object(a["resolveComponent"])("el-skeleton");return Object(a["openBlock"])(),Object(a["createBlock"])(b,{loading:e.loading,animated:""},{template:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{variant:"h3",style:{width:"50%"}}),Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(d,{variant:"text"}),Object(a["createVNode"])(d,{variant:"text",class:"margin-top"}),Object(a["createVNode"])(d,{variant:"text",class:"margin-top"}),Object(a["createVNode"])(d,{variant:"text",class:"margin-top"})])]})),_:1})]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{class:"chart-item-container","body-style":{padding:0},shadow:"never"},{header:Object(a["withCtx"])((function(){return[o]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",l,null,512)]})),_:1})]})),_:1},8,["loading"])}var u=n("7996"),d=n("313e"),s=n("2ef0"),b=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function f(){var e=[];while(e.length<b.length)e.push(Object(s["random"])(100,150));return e}var O=Object(a["defineComponent"])({name:"FullYearSalesChart",setup:function(){var e=Object(a["ref"])(!0),t=Object(a["ref"])(null),n=null,c=function(){var c={color:["rgba(64, 58, 255)"],grid:{top:"10%",left:"2%",right:"2%",bottom:"5%",containLabel:!0},legend:{data:["2020全年销售额"]},tooltip:{trigger:"axis"},xAxis:{type:"category",data:b},yAxis:{type:"value",max:200},series:[{type:"bar",name:"2020全年销售额",stack:"总量",data:f(),label:{show:!0,formatter:function(e){return e.data+"万"}},itemStyle:{color:new d["c"].LinearGradient(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])}}]};setTimeout((function(){e.value=!1,Object(a["nextTick"])((function(){return Object(u["c"])(t.value).setOption(c)})),n=setInterval((function(){var e={series:[{data:f()}]};Object(u["c"])(t.value).setOption(e)}),5e3)}),1e3)},r=function(){Object(u["c"])(t.value).resize()};return Object(a["onMounted"])(c),Object(a["onBeforeUnmount"])((function(){Object(d["a"])(t.value),clearInterval(n)})),{loading:e,fullYearSalesChart:t,updateChart:r}}}),j=(n("7059"),n("6b0d")),p=n.n(j);const v=p()(O,[["render",i],["__scopeId","data-v-0590d829"]]);t["default"]=v}}]);