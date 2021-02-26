var car = document.querySelector('.header')
var cartList = localStorage.getItem("cartList3")
cartList = JSON.parse(cartList) || []
var str
cartnum()

function cartnum() {
    // console(111)
    // 判断当前localStorage中是否有内容
    if (cartList.length > 0) {
        //获取当前被选中商品的种类和价格
        str = `
        <div class="w">
        <!-- logo -->
        <div class="logo">
            <h1>
                <a href="index.html" title="央广购物">央广购物 </a>
            </h1>
        </div>
        <!-- search -->
        <div class="search">
            <input type="text" placeholder="保暖">
            <button>搜索</button>
        </div>
        <!-- hotwrods -->
        <div class="hotwrods">
            <a href="#" class="style-red">热门关键字</a>
            <a href="#">冰丝席</a>
            <a href="#">鲜花饼</a>
            <a href="#">垃圾袋</a>
            <a href="#">牛排</a>
            <a href="#">红酒</a>
            <a href="#">老花镜</a>
            <a href="#">水果</a>
            <a href="#">枣</a>
            <a href="#">大米</a>
        </div>
        <!-- shopcar -->
        <div class="shopcar">
            <a href="cart.html"> 我的购物车</a>
            <span class="iconfont">&#xe611;</span>
            <i class="count">${cartList.length}</i>
        </div>

    </div>
        `

        // 把拼接好的内容添加到box中
        car.innerHTML = str
    }
}