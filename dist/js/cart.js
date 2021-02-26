var name1=getCookie("user"),url=location.href,box=document.querySelector(".box"),cartList=localStorage.getItem("cartList3");function show(){var a,t,s;0<cartList.length?(a=cartList.every(a=>1==a.alisa_2),t=total(),s=`
                 <div class="top">
                    <h4 class="top_1 h4"><input type="checkbox" value="全选" name="a0" ${a?"checked":""}>&nbsp;&nbsp;全选</h4>
                    <h4 class="top_2 h4">商品信息</h4>
                    <h4 class="h4">单价（元）</h4>
                    <h4 class="h4">数量</h4>
                    <h4 class="h4">金额（元）</h4>
                    <h4 class="h4">操作</h4>
                    <div class="clear"></div>
                </div>
        `,cartList.forEach(a=>{s+=`
                <div class="content">
                    <h4 class="top_1 h4"><input type="checkbox" data-id="${a.id}"name="xuan" ${1==a.alisa_2?"checked":""}></h4>
                    <h4 class="top_2 h4">
                        <img src="${a.img}" height="100px" width="100px">
                        <span>${a.link_text_all}</span>
                    </h4>
                    <h4 class="h4">$<span>${a.price_int}</span></h4>
                    <h4 class="h4">
                     <button class="aa" data-id="${a.id}" >-</button><input type="text" value="${a.alisa_1}" value="1" class="cc"><button class="aa"  data-id="${a.id}">+</button> 
                    </h4>
                    <h4 class="h4">￥<span>${a.price_int*a.alisa_1}</span></h4>
                    <h4 class="h4"><input type="button" value="删除"  data-id="${a.id}"></h4>
                    <div class="clear"></div>
                </div>
                `}),s+=`
        <div class="footer11">
                    <div class="footer_011">
                        <input type="checkbox" value="全选" name="a0" class="quanxuan" ${a?"checked":""}>&nbsp;&nbsp;全选
                        <button href="#" class="del" value='清空购物车'>清空购物车</button>
                        <i class="chk">已选择 <span>${t[0]}</span> 件商品</i>
                        <i class="chk">所有商品 <span>${cartList.length}</span> 种类</i>
                    </div>
                    <div class="footer_022">
                        <span class="total"> 总计：$</span>
                        <span class="money">${t[1]}</span>
                        <a class="jiesuan">结算</a>
                    </div>
                </div>
        `,box.innerHTML=s):box.innerHTML=`
         <div class="noshop">
        <i class="ico"></i>
        <h4>您的购物车还没有商品</h4>
        <p>
            <a href="list.html" class="a1">马上去购物</a>
            <a href="#" class="a2">查看我的订单</a>
        </p>
        </div>
        `}function total(){var t=0,s=0;return cartList.forEach(a=>{1==a.alisa_2&&(t++,s+=a.alisa_1*a.price_int)}),[t,s]}cartList=JSON.parse(cartList)||[],name1?show():(alert("您还没有登录，请登录以后再进入哦"),location="./login.html?pathUrl="+url),box.onclick=function(a){var t,s=(a=a||window.event).target||a.srcElement;"+"==s.innerHTML&&(t=s.getAttribute("data-id"),cartList.forEach(a=>{a.id==t&&a.alisa_1++}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"-"==s.innerHTML&&(t=s.getAttribute("data-id"),"1"==s.nextElementSibling.value?(s.value=1,alert("当数量不能再减少了！")):(cartList.forEach(a=>{a.id==t&&a.alisa_1--}),localStorage.setItem("cartList3",JSON.stringify(cartList))),show()),"删除"==s.value&&(t=s.getAttribute("data-id"),cartList=cartList.filter(a=>a.id!=t),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"全选"==s.value&&(cartList.forEach(a=>{s.checked?a.alisa_2=1:a.alisa_2=0}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"xuan"==s.name&&(t=s.getAttribute("data-id"),cartList.forEach(a=>{a.id==t&&(1==a.alisa_2?a.alisa_2=0:a.alisa_2=1)}),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"结算"==s.innerHTML&&confirm("你确定要购买吗？")&&(alert("你需要支付：￥"+total()[1]+"元"),cartList=cartList.filter(a=>1!=a.alisa_2),localStorage.setItem("cartList3",JSON.stringify(cartList)),show()),"清空购物车"==s.innerHTML&&(localStorage.setItem("cartList3",JSON.stringify([])),show())};