(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c4ffc62"],{"4daf":function(t,e,n){"use strict";var o=n("9fc8"),i=n.n(o);i.a},"9fc8":function(t,e,n){},ab95:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editWrapper"},[n("h1",[t._v("编辑文章")]),n("h3",[t._v("文章标题")]),n("el-input",{attrs:{type:"text",placeholder:"请输入内容",maxlength:"40","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("p",{staticClass:"msg"},[t._v("限40个字")]),n("h3",[t._v("文章内容")]),n("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},placeholder:"请输入内容",resize:"none"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("p",{staticClass:"msg"},[t._v("限30个字")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onUpdateBlog()}}},[t._v("发表文章")])],1)},i=[],s=n("864d"),l=n("56be"),a={data:function(){return{blogId:0,blog:{}}},computed:{content:{get:function(){return this.blog.content},set:function(t){this.blog.content=t}},title:{get:function(){return this.blog.title},set:function(t){this.blog.title=t}}},created:function(){var t=this;this.blogId=this.$route.params.blogId,s["a"].getDetail({blogId:this.blogId}).then(function(e){t.blog=e.data})},methods:{onUpdateBlog:function(){var t=this;s["a"].updateBlog({blogId:this.blogId},{title:this.blog.title,content:this.blog.content}).then(function(e){l["Message"].success(e.msg),t.$router.push({path:"/mine"})})}}},c=a,u=(n("4daf"),n("17cc")),r=Object(u["a"])(c,o,i,!1,null,"f6405c3a",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1c4ffc62.d068566d.js.map