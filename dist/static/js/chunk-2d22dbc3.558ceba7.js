(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22dbc3"],{f982:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"main-container"},a=Object(o["createTextVNode"])("添加 "),c=Object(o["createTextVNode"])("编辑"),i=Object(o["createTextVNode"])("删除"),l=Object(o["createTextVNode"])("菜单权限");function d(e,t,n,d,u,s){var f=Object(o["resolveComponent"])("el-button"),b=Object(o["resolveComponent"])("TableHeader"),h=Object(o["resolveComponent"])("el-table-column"),p=Object(o["resolveComponent"])("el-table"),m=Object(o["resolveComponent"])("TableBody"),O=Object(o["resolveComponent"])("BaseForm"),j=Object(o["resolveComponent"])("Dialog"),C=Object(o["resolveComponent"])("el-tree"),x=Object(o["resolveDirective"])("loading");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])(b,{"can-collapsed":!1},{right:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{type:"primary",size:"mini",icon:"el-icon-plus",onClick:e.onAddItem},{default:Object(o["withCtx"])((function(){return[a]})),_:1},8,["onClick"])]})),_:1}),Object(o["createVNode"])(m,{ref:"tableBody"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(p,{ref:"table",data:e.dataList,"header-cell-style":e.tableConfig.headerCellStyle,size:e.tableConfig.size,stripe:e.tableConfig.stripe,border:e.tableConfig.border},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,{align:"center",label:"序号",fixed:"left",width:"80"},{default:Object(o["withCtx"])((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$index+1),1)]})),_:1}),Object(o["createVNode"])(h,{align:"center",label:"角色名称",prop:"name"}),Object(o["createVNode"])(h,{align:"center",label:"角色编号",prop:"roleCode"}),Object(o["createVNode"])(h,{align:"center",label:"角色描述",prop:"description"}),Object(o["createVNode"])(h,{align:"center",label:"创建时间",prop:"createTime",width:"160px"}),Object(o["createVNode"])(h,{align:"center",label:"操作"},{default:Object(o["withCtx"])((function(t){return[Object(o["createVNode"])(f,{disabled:"ROLE_admin"===t.row.roleCode,type:"text",size:"mini",onClick:function(n){return e.onUpdateItem(t.row)}},{default:Object(o["withCtx"])((function(){return[c]})),_:2},1032,["disabled","onClick"]),Object(o["createVNode"])(f,{disabled:"ROLE_admin"===t.row.roleCode,type:"text",size:"mini",onClick:function(n){return e.onDeleteItem(t.row)}},{default:Object(o["withCtx"])((function(){return[i]})),_:2},1032,["disabled","onClick"]),Object(o["createVNode"])(f,{type:"text",size:"mini",onClick:function(n){return e.showMenu(t.row)}},{default:Object(o["withCtx"])((function(){return[l]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","header-cell-style","size","stripe","border"]),[[x,e.tableLoading]])]})),_:1},512),Object(o["createVNode"])(j,{ref:"dialog"},{content:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{ref:"baseForm","form-items":e.formItems},null,8,["form-items"])]})),_:1},512),Object(o["createVNode"])(j,{ref:"menuDialog",title:"菜单权限"},{content:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{data:e.menuData,"show-checkbox":"","node-key":"menuUrl","default-expanded-keys":e.defaultExpandedKeys,"default-checked-keys":e.defaultCheckedKeys,props:e.defaultProps},null,8,["data","default-expanded-keys","default-checked-keys","props"])]})),_:1},512)])}n("159b"),n("b0c0");var u=n("e959"),s=n("5c40"),f=n("3fd4"),b=Object(s["y"])({name:"Role",mixins:[u["d"]],data:function(){return{roleModel:{id:0,name:"",roleCode:"",description:"",createTime:""},menuData:[],defaultProps:{children:"children",label:"menuName"},defaultCheckedKeys:[],defaultExpandedKeys:[],formItems:[{label:"角色名称",type:"input",name:"name",value:"",maxLength:50,inputType:"text",placeholder:"请输入角色名称",validator:function(e){return!!e.value||(f["p"].error(e.placeholder),!1)},reset:function(){this.value=""}},{label:"角色编号",type:"input",name:"roleCode",value:"",maxLength:20,inputType:"text",placeholder:"请输入角色编号",validator:function(e){return!!e.value||(f["p"].error(e.placeholder),!1)},reset:function(){this.value=""}},{label:"角色描述",type:"input",name:"description",value:"",maxLength:50,inputType:"text",placeholder:"请输入角色描述",validator:function(e){return!!e.value||(f["p"].error(e.placeholder),!1)},reset:function(){this.value=""}}]}},mounted:function(){this.doRefresh()},methods:{doRefresh:function(){this.$post({url:this.$urlPath.getRoleList,data:{}}).then(this.handleSuccess).catch(console.log)},showMenu:function(e){var t=this;this.$post({url:this.$urlPath.getAllMenuByRoleId,data:{roleId:e.id}}).then((function(e){t.menuData=e.data,t.defaultCheckedKeys=[],t.defaultExpandedKeys=[],t.handleRoleMenusSelected(t.menuData),t.$refs.menuDialog.show().then((function(e){f["p"].success("模拟菜单修改成功"),e.close()}))})).catch(console.log)},onAddItem:function(){var e=this;this.formItems.forEach((function(e){return e.reset&&e.reset()})),this.$refs.dialog.show({showSubmitLoading:!0}).then((function(t){f["q"].confirm("角色模拟添加成功，参数为："+JSON.stringify(e.$refs.baseForm.generatorParams())),t.close()}))},onUpdateItem:function(e){var t=this;this.formItems.forEach((function(t){var n=t.name;if(n){var o=e[n];o&&(t.value=e[n])}})),this.$refs.dialog.show({showSubmitLoading:!0}).then((function(e){f["q"].confirm("角色模拟修改成功，参数为："+JSON.stringify(t.$refs.baseForm.generatorParams())),e.close()}))},onDeleteItem:function(e){f["q"].confirm("是否要删除此信息，删除后不可恢复？","提示").then((function(){f["q"].confirm("角色模拟删除成功，参数为："+JSON.stringify({id:e.id}))}))},handleRoleMenusSelected:function(e){var t=this;e.forEach((function(e){e.isSelect&&t.defaultCheckedKeys.push(e.menuUrl),e.children&&(t.defaultExpandedKeys.push(e.menuUrl),t.handleRoleMenusSelected(e.children))}))}}});b.render=d;t["default"]=b}}]);