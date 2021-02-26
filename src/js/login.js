var user = document.querySelector(".account")
var pass = document.querySelector('[type="password"]')
var submit = document.querySelector('[type="submit"]')
    // 获取地址栏中的参数
var search = location.search

submit.onclick = function() {
    //获取账号输入框中的value
    var u1 = user.value
    var p1 = pass.value

    //调用Ajax发送请求
    Ajax({
        url: '../php/login.php',
        data: `username=${u1}&password=${p1}`,
        success: function(dt) {

            // 判断当前返回值是否等于1
            //第一个if代表登录成功
            // 第二个if代表是否有参
            if (dt == 1) {
                // 登录成功有两种情况：1主要看地址栏中是否有带参地址，带地址的是进入到购物车页面
                // 2.不带地址的是进入到列表页
                if (search) {
                    //获取参数中传入的地址，需进行分割
                    var new_url = search.split('=')[1]
                    location.href = new_url

                } else {
                    location.href = "./list.html"
                }
                setCookie("user", u1)

            } else {
                alert("登录失败，请输入正确的账号或密码")
            }

        }

    })
    return false
}


$(function() {
    //商品介绍模块tab栏切换
    // 点击相应的li给其添加对应的类名
    $('.login p a').on('click', function() {
        $(this).addClass('now').siblings().removeClass('now');
        // 点击的同时获取他的索引号
        var index = $(this).index();
        console.log(index)
        $('.login form').eq(index).show().siblings().hide()


    })
})