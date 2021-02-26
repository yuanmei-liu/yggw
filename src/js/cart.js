//获取账号cookie
var name1 = getCookie("user")
    //获取地址栏中的地址
var url = location.href
    // 获取大盒子对象
var box = document.querySelector(".box")
    //判断当前cookie是否存在，则证明账号已登录过,则获取localStorage中cartList3商品信息
    // 否则返回登录页面进行登录
var cartList = localStorage.getItem("cartList3")
    //把当前cartList字符串转为数组对象
cartList = JSON.parse(cartList) || []
if (name1) {
    show()
} else {
    alert("您还没有登录，请登录以后再进入哦")
    location = "./login.html?pathUrl=" + url
}



function show() {
    // console(111)
    // 判断当前localStorage中是否有内容
    if (cartList.length > 0) {
        //获取全选框是否被选中
        var aa = cartList.every(item => {
                //判断当前商品是否被选中  alisa_2 是选中框状态
                return item.alisa_2 == 1
            })
            //获取当前被选中商品的种类和价格
        var sum = total()
        var str2 = `
                 <div class="top">
                    <h4 class="top_1 h4"><input type="checkbox" value="全选" name="a0" ${aa?"checked":''}>&nbsp;&nbsp;全选</h4>
                    <h4 class="top_2 h4">商品信息</h4>
                    <h4 class="h4">单价（元）</h4>
                    <h4 class="h4">数量</h4>
                    <h4 class="h4">金额（元）</h4>
                    <h4 class="h4">操作</h4>
                    <div class="clear"></div>
                </div>
        `
            // 遍历数组中所有商品

        cartList.forEach(item => {
                str2 += `
                <div class="content">
                    <h4 class="top_1 h4"><input type="checkbox" data-id="${item.id}"name="xuan" ${item.alisa_2 ==1?"checked":''}></h4>
                    <h4 class="top_2 h4">
                        <img src="${item.img}" height="100px" width="100px">
                        <span>${item.link_text_all}</span>
                    </h4>
                    <h4 class="h4">$<span>${item.price_int}</span></h4>
                    <h4 class="h4">
                     <button class="aa" data-id="${item.id}" >-</button><input type="text" value="${item.alisa_1 }" value="1" class="cc"><button class="aa"  data-id="${item.id}">+</button> 
                    </h4>
                    <h4 class="h4">￥<span>${item.price_int*item.alisa_1}</span></h4>
                    <h4 class="h4"><input type="button" value="删除"  data-id="${item.id}"></h4>
                    <div class="clear"></div>
                </div>
                `
            })
            //拼接脚部
        str2 += `
        <div class="footer11">
                    <div class="footer_011">
                        <input type="checkbox" value="全选" name="a0" class="quanxuan" ${aa?"checked":''}>&nbsp;&nbsp;全选
                        <button href="#" class="del" value='清空购物车'>清空购物车</button>
                        <i class="chk">已选择 <span>${sum[0]}</span> 件商品</i>
                        <i class="chk">所有商品 <span>${cartList.length}</span> 种类</i>
                    </div>
                    <div class="footer_022">
                        <span class="total"> 总计：$</span>
                        <span class="money">${sum[1]}</span>
                        <a class="jiesuan">结算</a>
                    </div>
                </div>
        `

        // 把拼接好的内容添加到box中
        box.innerHTML = str2
    } else {
        var str1 = `
         <div class="noshop">
        <i class="ico"></i>
        <h4>您的购物车还没有商品</h4>
        <p>
            <a href="list.html" class="a1">马上去购物</a>
            <a href="#" class="a2">查看我的订单</a>
        </p>
        </div>
        `
            // 把当前内容添加到box中
        box.innerHTML = str1
    }
}



// 给box对象绑定点击事件，采用事件委托方式才行，不然渲染进去的标签没有功能
box.onclick = function(e) {
    var e = e || window.event
    var target = e.target || e.srcElement
        // 判断当前点击的是否为+
    if (target.innerHTML == "+") {
        // 获取当前对象的id属性
        var id = target.getAttribute('data-id')
            // 遍历cartList数组对象
        cartList.forEach(item => {
                //判断当前遍历出来的商品是否为当前操作的商品
                if (item.id == id) {
                    // alisa_1 是我自己设定的加购数量
                    item.alisa_1++
                }
            })
            // 重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
            // 调用show方法，重新把页面渲染
        show()
    }



    if (target.innerHTML == "-") {
        //获取当前对象中的id属性
        var id = target.getAttribute("data-id")
        if (target.nextElementSibling.value == "1") {
            target.value = 1
            alert("当数量不能再减少了！")
        } else {
            //遍历cartList数组对象
            cartList.forEach(item => {
                    //判断遍历出来的商品是否为当前操作商品
                    if (item.id == id) {
                        item.alisa_1--
                    }
                })
                //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
                //调用show方法，重新把页面再次渲染

        }
        show()


    }


    // 删除操作
    if (target.value == "删除") {
        //获取当前点击对象的id
        var id = target.getAttribute("data-id")
        cartList = cartList.filter(item => {
                //过滤被删除的商品
                return item.id != id
            })
            //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
        show()
    }


    // 全选
    if (target.value == "全选") {
        //遍历所有商品
        cartList.forEach(item => {
                //判断当前全选框是否被选中
                if (target.checked) {
                    item.alisa_2 = 1
                } else {
                    item.alisa_2 = 0
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
        show()
    }
    // a1是选中框
    if (target.name == "xuan") {
        //获取当前商品对应的id 
        var id = target.getAttribute("data-id")
            //遍历数组中所有的商品对象
        cartList.forEach(item => {
                if (item.id == id) {

                    // item.alisa_2 = item.alisa_2 == 1 ? "0" : "1"
                    if (item.alisa_2 == 1) {
                        item.alisa_2 = 0
                    } else {
                        item.alisa_2 = 1
                    }
                }
            })
            //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
        show()
    }

    //去结算
    if (target.innerHTML == "结算") {
        //添加确认框
        if (confirm("你确定要购买吗？")) {
            alert("你需要支付：￥" + total()[1] + "元")
            cartList = cartList.filter(item => {
                    return item.alisa_2 != 1
                })
                //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
                //调用show方法，重新把页面再次渲染
            show()
        }
    }

    //清空购物车
    if (target.innerHTML == "清空购物车") {
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList3", JSON.stringify([]))
            //调用show方法，重新把页面再次渲染
        show()
    }

}

//统计所选商品种类和价格
function total() {
    var num = 0 //所选商品种类
    var price = 0 //所选商品总价格
        //遍历cartList数组对象
    cartList.forEach(item => {
        //判断当前商品是否被选中,alisa_1是购物车中商品数量，alisa_2是选中框状态
        if (item.alisa_2 == 1) {
            num++
            price += item.alisa_1 * item.price_int
        }
    })
    return [num, price]
}