(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2826794e"],{f447:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("VersionTool",{on:{success:t.getData}}),t._v(" "),n("div",{staticStyle:{height:"20px"}}),t._v(" "),n("VersionTable",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list},on:{success:t.getData}})],1)},s=[],a=(n("9382"),n("ed32")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mo-table",t._g(t._b({},"mo-table",t.$attrs,!1),t.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.$index+1)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"版本号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.version)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"上传时间",align:"center",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s(e.row.format_version)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"移除版本",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("VersionDelete",{attrs:{version:e.row.version},on:{success:function(e){return t.$emit("success")}}})]}}])})],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-button",t._b({attrs:{size:"mini"},on:{click:t.handleDelete}},"el-button",t.$attrs,!1),[t._v("删除")])],1)},l=[],u={name:"",props:{version:{type:String}},components:{},data:function(){return{project:""}},computed:{},methods:{handleDelete:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydDeleteVersion({project:this.project,version:this.version});case 2:e=t.sent,0==e.code?(this.$message.success("删除成功"),this.$emit("success")):this.$message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.project=this.$route.params.project}},p=u,d=n("5d22"),f=Object(d["a"])(p,c,l,!1,null,"4fcb0b92",null),m=f.exports,h={name:"",props:[],components:{VersionDelete:m},data:function(){return{}},computed:{},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},v=h,g=Object(d["a"])(v,i,o,!1,null,"7a1b86f9",null),_=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ProjectAdd",{attrs:{project:t.project},on:{success:function(e){return t.$emit("success")}}})],1)},j=[],w=n("f794"),$={name:"",props:[],components:{ProjectAdd:w["a"]},data:function(){return{project:""}},computed:{},methods:{},created:function(){this.project=this.$route.params.project}},x=$,y=Object(d["a"])(x,b,j,!1,null,"a3fcadaa",null),k=y.exports,V={components:{VersionTable:_,VersionTool:k},data:function(){return{project:"",list:null,listLoading:!0}},created:function(){this.project=this.$route.params.project,this.getData()},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,this.$Http.scrapydlistVersions({project:this.project});case 3:e=t.sent,this.listLoading=!1,this.list=e.data;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},S=V,D=Object(d["a"])(S,r,s,!1,null,"23c7fcc2",null);e["default"]=D.exports},f794:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("el-button",{attrs:{size:"mini",icon:"el-icon-document-add"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加")]),t._v(" "),n("el-dialog",{attrs:{title:"添加项目",visible:t.dialogVisible,width:"500px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{attrs:{model:t.form,"status-icon":"","label-width":"80px",size:"small"}},[n("el-form-item",{attrs:{label:"项目名称",prop:"project",required:""}},[n("ProjectSearch",{staticStyle:{width:"360px"},attrs:{value:t.form.project,disabled:null!=t.project},on:{"update:value":function(e){return t.$set(t.form,"project",e)}}})],1),t._v(" "),n("el-form-item",{attrs:{label:"项目文件",prop:"egg",required:""}},[n("el-upload",{ref:"upload",attrs:{drag:"",action:"",accept:".egg","auto-upload":!1,multiple:!1,"show-file-list":!1,"on-change":t.handleChange}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),n("em",[t._v("点击上传")])]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传egg文件")])]),t._v(" "),n("span",[t._v(t._s(t.form.egg.name))])],1)],1),t._v(" "),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addVersion}},[t._v("确 定")])],1)],1)],1)},s=[],a=(n("9382"),n("ed32")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-autocomplete",t._b({attrs:{"fetch-suggestions":t.querySearch},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("span",[t._v(t._s(r.project))])]}}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}},"el-autocomplete",t.$attrs,!1))},o=[],c={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("update:value",t)}}},methods:{querySearch:function(t,e){var n=t?this.filterItem(t):this.list;e(n)},filterItem:function(t){return this.list.filter((function(e){return 0==e.project.toLowerCase().indexOf(t.toLowerCase())}))},handleSelect:function(t){this._value=t.project},getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$Http.scrapydListProjects();case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getData()}},l=c,u=n("5d22"),p=Object(u["a"])(l,i,o,!1,null,"a50c045a",null),d=p.exports,f={name:"",props:{project:{type:String,default:null}},components:{ProjectSearch:d},data:function(){return{dialogVisible:!1,form:{project:"",egg:""}}},computed:{},watch:{dialogVisible:function(t){t&&(this.form.project=this.project)}},methods:{addVersion:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("project",this.form.project),e.append("egg",this.form.egg),t.next=5,this.$Http.scrapydAddVersion(e);case 5:n=t.sent,0==n.code?(this.$message.success("上传成功"),this.$emit("success"),this.dialogVisible=!1):this.$message.error(n.msg);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleChange:function(t,e){this.form.egg=t.raw}},created:function(){}},m=f,h=Object(u["a"])(m,r,s,!1,null,"55932485",null);e["a"]=h.exports}}]);