//获取当前地址栏中的参数信息
// console.log(location)
var box = document.querySelector(".de_container")
var search = location.search
var dt;
//判断当前对象中是否有值
if (search) {
    //分割search字符串
    var id = search.split('=')[1];
    (async function() {
        dt = await promiseAjax({
                url: '../php/xiangqing.php',
                data: 'id=' + id,
                datatype: 'json'
            })
            // 找到对应id的商品信息
            // console.log(dt)
        var str = `
            <!-- 面包屑导航 -->
            <div class="crumb_wrap">
                <a href="#">食品饮料</a> 〉 <a href="#">方便食品   </a> 〉 <a href="#">其他食品   </a> 〉 <a href="#">${dt.link_text_all}</a>
            </div>
            <!-- 产品介绍模块 -->
            <div class="product_intro clearfix">
                <!-- 预览区域 -->
                <div class="preview_wrap fl">
                    <!-- 要做放大镜的地方 -->
                    <div class="preview_img">
                        <img src="${dt.img_max}" alt="">
                        <div class="mask"></div>
                        <div class="big">
                            <img src="${dt.img_max}" alt="" class="bigImg">
                        </div>
                    </div>
                    <div class="preview_list">
                        <ul class="list_item">
                            <li class="current">
                                <img src="${dt.img_min_1}" alt="">
                            </li>
                            <li>
                                <img src="${dt.img_min_2}" alt="">
                            </li>
                            <li>
                                <img src="${dt.img_min_3}" alt="">
                            </li>
                            <li>
                                <img src="${dt.img_min_4}" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 产品详细信息 -->
                <div class="itemInfo_wrap fl">
                    <div class="sku_name">
                    ${dt.link_text_all}
                    </div>
                    <div class="news">
                    ${dt.link_text_add}
                </div>
                    <div class="ncs-meta">
                        <dl class="goods-price clearfix">
                            <dt class="fl">价格</dt>
                            <dd class="fl">
                                <span class="goods-price-real">
                                    <strong class="number">
                                        <span class="yuan">￥</span>
                                <span class="integer">${dt.price_int}</span>
                                <span class="pointer">.</span>
                                <span class="decimal">${dt.price_float}</span>
                                </strong>
                                </span>
                            </dd>
                        </dl>
                    </div>
                    <!--  -->
                    <div class="logi">
                        <p>物流&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 配送至 江西省南昌市东湖区 ∨ 有货免运费
                        </p>
                        <p>服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 由<a href="javascript:;">官方店铺</a>   发货，并提供售后服务。</p>
                    </div>
                    <div class="buy">
                        <p>数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="javascript:;" class="cut">-</a>
                            <input type="text" value="1" class="cartext pnum">
                            <a href="javascript:;" class="add">+</a>
                        </p>
                    </div>
                    <div class="bo">
                        <a href="javascript:;" class="get">点击购买</a>
                        <a href="javascript:;" class="join">加入购物车</a>
                    </div>
                    <p class="pp">服务承诺&nbsp;&nbsp;&nbsp; 15天无理由退换货，30天只换不修</p>
                    <p class="pp">温馨提示 &nbsp;&nbsp;&nbsp;国家药监局提示您：如您购买化妆品类商品，请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等
                    </p>
                </div>
                <div class="part-r fr">
                    <p>橱窗推荐 &nbsp;&nbsp;&nbsp; 换一批</p>
                    <div class="do1"></div>
                    <p>￥9880.00</p>
                    <div class="do2"></div>
                    <p>￥9880.00</p>
                    <div class="do3"></div>
                    <p>￥9880.00</p>
                </div>
            </div>
    
            <!-- 产品细节模块 	 -->
            <div class="rain">
                <!-- 左边部分 -->
                <div class="rain-left">
    
                    <div class="lefto">
                        <ul>
                            <div class="title">热销商品排行</div>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_sale_1}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_sale_2}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_sale_3}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_sale_4}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_sale_5}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <div class="title">热门收藏排行</div>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_store_1}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_store_2}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_store_3}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_store_4}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:;" class="img"><img src="${dt.img_store_5}" alt=""></a>
                                <div class="text">
                                    <a href="javascript:;">御品膏方茯苓薏仁草本膏套组 货号126238</a>
                                    <p>￥828.00</p>
                                    <p>售出：3532</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="leftt"></div>
                </div>
                <!-- 右边tab栏部分 -->
                <div class="tab">
                    <div class="tab-tit">
                        <ul>
                            <li class="red">
                                <a href="javascript:;">商品详情</a>
                            </li>
                            <li> <a href="javascript:;">售后保障</a></li>
                            <li><a href="javascript:;">客户评价</a></li>
                            <li><a href="javascript:;">购买咨询</a></li>
                        </ul>
                    </div>
                    <div class="tabdown">
                        <!-- 商品详情栏 :包含了图片详情+售后保障模块+底部足迹+footer-->
                        <!-- 图片详情  要从数据库中获取图片-->
                        <div class="box1 ddd" style="display:block">
                            <!-- 这里要放商品细节图，从后端调 -->
                            <img src="${dt.img_detail_0}" alt="">
                            <img src="${dt.img_detail_1}" alt="">
                            <img src="${dt.img_detail_2}" alt="">
                            <img src="${dt.img_detail_3}" alt="">
                            <img src="${dt.img_detail_4}" alt="">
                            <img src="${dt.img_detail_5}" alt="">
                            <img src="${dt.img_detail_6}" alt="">
                            <img src="${dt.img_detail_7}" alt="">
                            <img src="${dt.img_detail_8}" alt="">
                        </div>
                   
                    <!-- 售后保障 -->
                    <div class="box2 ddd">
    
                        <div class="case">
                            <h4>央广承诺</h4>
                            <p>央广商城向您保证所售商品均为正品行货，央广自营商品由央广购物提供发票。</p>
                            <h4>无忧退换货</h4>
                            <p>“十五天无理由退货，三十天免费换货”保障。商品签收之日起15天之内对商品不满，在主商品及配件齐全的情况下可享受免费退货服务，收藏品类、贵金属商品类、3C数码类、食品及化妆品类除外；商品使用中出现非人为所致的功能故障或残损，30天</p>
                        </div>
                        <div class="reminder">
                            <p><span style="color: red;">温馨提示：</span></p>
                            <p>国家药监局提示您：如您购买化妆品类商品，请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病。</p>
                            <p>权利声明：</p>
                            <p>商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是商城重要的经营资源，未经许可，禁止非法转载使用。</p>
                            <p>注：本站商品信息均来自于合作方，其真实性、准确性和合法性由信息拥有者（合作方）负责。本站不提供任何保证，并不承担任何法律责任。</p>
                            <div class="pr">
                                <p><span style="color: red;">价格说明：</span></p>
                                <p>价格：价格为商品的销售价，是您最终决定是否购买商品的依据。</p>
                                <p>划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在商城平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
                            </div>
                        </div>
                    </div>
                    <div class="box2 ddd">
                    <img src="../img/pingjia.png" alt="">
                    </div>
                    <div class="box2 ddd">
                    <img src="../img/consult.png" alt="">
                     </div>
                    </div>
                </div>
            </div>
            `
            //把当前内容添加到大盒子中
        box.innerHTML = str
        $(function() {
            //商品介绍模块tab栏切换
            // 点击相应的li给其添加对应的类名
            $('.tab-tit ul li').on('click', function() {
                $(this).addClass('red').siblings().removeClass('red');
                // 点击的同时获取他的索引号
                var index = $(this).index();
                console.log(index)
                $('.tabdown .ddd').eq(index).show().siblings().hide()


            })

            //放大镜模块
            //小图鼠标移入是切换切换边框
            $('.list_item li').on('mouseenter', function() {
                    $(this).addClass('current').siblings().removeClass('current');
                })
                //鼠标移入中图时，遮罩层与大图显示
            $('.preview_img').on('mouseenter', function(e) {
                $('.mask').css('display', 'block')
                $('.big').css('display', 'block')
                    //鼠标移动时的事件
                $(this).on('mousemove', function(e) {
                    //计算鼠标在盒子内的坐标
                    var x = e.pageX - $('.preview_img').offset().left - $('.mask').width() / 2;
                    var y = e.pageY - $('.preview_img').offset().top - $('.mask').height() / 2;
                    // console.log(x, y)
                    //计算小盒子在大盒子中的移动范围                  
                    var maskMax = $('.preview_img').width() - $('.mask').width() //遮罩层最大移动距离

                    if (x <= 0) {
                        x = 0;
                    }
                    if (x >= maskMax) {

                        x = maskMax
                    }
                    if (y <= 0) {
                        y = 0
                    }
                    if (y > maskMax) {
                        y = maskMax
                    }
                    //实现小盒子跟随鼠标移动
                    $('.mask').css({
                            left: x,
                            top: y,
                        })
                        //放大镜比例关系
                        //大图片移动距离=遮罩层移动距离*大图片最大移动距离/遮罩层最大移动距离
                        //大图片最大移动距离=大图片宽度（高度）-大盒子的宽度（高度）
                    var bigmax = $('.big img').width() - $('.big').width()
                        // console.log(bigmax)
                        //大图片移动距离
                    var bigx = x * bigmax / maskMax
                    var bigy = y * bigmax / maskMax
                    $('.big img').css({
                        left: -bigx,
                        top: -bigy,
                    })



                })
            })

            //鼠标移出中图时，遮罩层与大图隐藏
            $('.preview_img').on('mouseleave', function(e) {
                $('.mask').css('display', 'none')
                $('.big').css('display', 'none')
            })

        })
    })()
} else {
    alert("你还没有选中商品")
    location = "./list.html"
}


//给大盒子绑定点击事件,采用事件委托
box.onclick = function(e) {
    var e = e || window.event
        //获取点击对象
    var target = e.target || e.srcElement
        // console.log(111)
        //判断点击的对象是否为加入购物车按钮
    if (target.innerHTML == "加入购物车" || target.innerHTML == "+") {
        //获取localStorage中的cartList3
        var cartList = localStorage.getItem("cartList3")
            //判断当前获取的cartList是否存在
        if (cartList) {
            //把localStorage中获取的内容转为数组对象
            cartList = JSON.parse(cartList)
            var a = 0 //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
            cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    // 将数据库中的alisa_1定义为加入购物车数量
                    if (item.id == dt.id) {
                        a++
                        item.alisa_1++
                            var num = target.previousElementSibling.value
                                // console.log(num)
                                //给当前数量加加
                        num++
                        //在把计算后的结果赋值给输入框对象             
                        target.previousElementSibling.value = num
                    }
                })
                //判断a变量是否等于0  当前商品不存在于cartList中，则将其数量修改为1
            if (a == 0) {
                //修改商品数量    将数据库中的alisa_1定义为加入购物车数量
                dt.alisa_1 = 1
                    //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
        } else {
            // 打印一下dt。看看是否获取过来
            // console.log(dt)
            // 将数据库中的p21定义为加入购物车数量
            dt['alisa_1'] = 1
                // 把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([dt]))
        }
    }

    //判断点击的是否为 -
    if (target.innerHTML == "-") {
        //获取localStorage中的cartList3
        var cartList = localStorage.getItem("cartList3")
            //判断当前获取的cartList是否存在
        if (cartList) {
            //把localStorage中获取的内容转为数组对象
            cartList = JSON.parse(cartList)
            var a = 0 //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
            cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    // 将数据库中的alisa_1定义为加入购物车数量
                    if (item.id == dt.id) {
                        a++
                        item.alisa_1--
                            //获取当前对象后面的数量
                            var num = target.nextElementSibling.value
                                // 将数量减减
                        if (num <= 1) {
                            num = 1
                        } else {
                            num--
                        }
                        //重新把计算结果赋值给输入框
                        target.nextElementSibling.value = num
                    }
                })
                //判断a变量是否等于0  当前商品不存在于cartList中，则将其数量修改为1
            if (a == 0) {
                //修改商品数量    将数据库中的alisa_1定义为加入购物车数量
                dt.alisa_1 = 1
                    //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
        } else {
            // 打印一下dt。看看是否获取过来
            // console.log(dt)
            // 将数据库中的p21定义为加入购物车数量
            dt['alisa_1'] = 1
                // 把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([dt]))
        }
    }

    if (target.innerHTML == "点击购买") {
        //获取localStorage中的cartList3
        var cartList = localStorage.getItem("cartList3")
            //判断当前获取的cartList是否存在
        if (cartList) {
            //把localStorage中获取的内容转为数组对象
            cartList = JSON.parse(cartList)
            var a = 0 //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
            cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    // 将数据库中的alisa_1定义为加入购物车数量
                    if (item.id == dt.id) {
                        a++
                        item.alisa_1++
                    }
                })
                //判断a变量是否等于0  当前商品不存在于cartList中，则将其数量修改为1
            if (a == 0) {
                //修改商品数量    将数据库中的alisa_1定义为加入购物车数量
                dt.alisa_1 = 1
                    //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
            location.href = "./cart.html"
        } else {
            // 打印一下dt。看看是否获取过来
            // console.log(dt)
            // 将数据库中的p21定义为加入购物车数量
            dt['alisa_1'] = 1
                // 把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([dt]))
            location.href = "./cart.html"
        }
    }

}