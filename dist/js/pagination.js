function Pagination(t,e){this.ele=t,this.options=e||{},this.cb=this.options.cb||function(){},this.default={pageInfo:{pagenum:1,pagesize:9,totalsize:200,totalpage:23},textInfo:{first:"first",prev:"prev",list:"",next:"next",last:"last"}},this.list=null,this.init()}function createP(t,e){var n=document.createElement("p");return n.innerHTML=t,setCss(n,t==e?{border:"1px solid #000",padding:"0px 5px",margin:"0px 5px",backgroundColor:"pink"}:{border:"1px solid #000",padding:"0px 5px",margin:"0px 5px"}),n}function setCss(t,e){for(var n in e)t.style[n]=e[n]}Pagination.prototype.init=function(){this.updateDefault(),this.show1()},Pagination.prototype.updateDefault=function(){if(this.options.pageInfo)for(var t in this.options.pageInfo)this.default.pageInfo[t]=this.options.pageInfo[t];if(this.options.textInfo)for(var e in this.options.textInfo)this.default.textInfo[e]=this.options.textInfo[e]},Pagination.prototype.show1=function(){this.ele.innerHTML="",this.textShow(),this.showP(),this.dongcidaci(),this.jinyong(),this.addInput(),this.cb(this.default.pageInfo.pagenum)},Pagination.prototype.addInput=function(){var t=document.createElement("input");t.type="number",t.value=this.default.pageInfo.pagenum,t.max=this.default.pageInfo.totalpage,t.min=1;var e=document.createElement("button");e.innerHTML="go",this.ele.appendChild(t),this.ele.appendChild(e)},Pagination.prototype.jinyong=function(){var t=this.default.pageInfo.pagenum,e=this.default.pageInfo.totalpage,n=this.ele.querySelectorAll("div");1==t&&(n[0].style.backgroundColor="#ccc",n[1].style.backgroundColor="#ccc"),t==e&&(n[3].style.backgroundColor="#ccc",n[4].style.backgroundColor="#ccc")},Pagination.prototype.textShow=function(){var t,e=this.default.textInfo;for(t in e){var n=document.createElement("div");n.className=t,"list"==t?setCss(this.list=n,{display:"flex",justifyContent:"center",alignItems:"center"}):(setCss(n,{border:"1px solid #000",padding:"0px 5px",margin:"0px 5px"}),n.innerHTML=e[t]),this.ele.appendChild(n)}},Pagination.prototype.showP=function(){var t=this.default.pageInfo,e=t.pagenum,n=t.totalpage;if(n<10)for(let t=1;t<=n;t++){var i=createP(t,e);this.list.appendChild(i)}else if(e<5){for(var a=1;a<=5;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=n-1;a<=n;a++){i=createP(a,e);this.list.appendChild(i)}}else if(5==e){for(a=1;a<=7;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=n-1;a<=n;a++){i=createP(a,e);this.list.appendChild(i)}}else if(5<e&&e<n-4){for(a=1;a<=2;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=e-2;a<=e+2;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=n-1;a<=n;a++){i=createP(a,e);this.list.appendChild(i)}}else if(e==n-4){for(a=1;a<=2;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=n-6;a<=n;a++){i=createP(a,e);this.list.appendChild(i)}}else if(n-4<e){for(var s,a=1;a<=2;a++){i=createP(a,e);this.list.appendChild(i)}(s=document.createElement("span")).innerHTML="...",this.list.appendChild(s);for(a=n-4;a<=n;a++){i=createP(a,e);this.list.appendChild(i)}}},Pagination.prototype.dongcidaci=function(){this.ele.onclick=t=>{t=(t=t||window.event).target||t.srcElement;"next"==t.className&&this.default.pageInfo.pagenum!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum++,this.show1()),"prev"==t.className&&1!=this.default.pageInfo.pagenum&&(this.default.pageInfo.pagenum--,this.show1()),"first"==t.className&&1!=this.default.pageInfo.pagenum&&(this.default.pageInfo.pagenum=1,this.show1()),"last"==t.className&&this.default.pageInfo.pagenum!=this.default.pageInfo.totalpage&&(this.default.pageInfo.pagenum=this.default.pageInfo.totalpage,this.show1()),"P"==t.nodeName&&t.innerHTML!=this.default.pageInfo.pagenum&&(this.default.pageInfo.pagenum=parseInt(t.innerHTML),this.show1()),"go"==t.innerHTML&&this.default.pageInfo.pagenum!=t.previousElementSibling.value&&(this.default.pageInfo.pagenum=parseInt(t.previousElementSibling.value),this.show1())}};