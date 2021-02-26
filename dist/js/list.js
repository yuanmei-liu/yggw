var row=document.querySelector(".list_pic"),pagination1=document.querySelector(".pagination");!async function(){var i=await promiseAjax({url:"../php/list.php",datatype:"json"});new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:50,totalsize:i.length,totalpage:Math.ceil(i.length/50)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"},cb:function(a){var a=i.slice(50*(a-1),50*a),s="";a.forEach(a=>{s+=`
                    <li class="itemm">
                    <div class="goods-content" goods-item>
                        <!--商品大图-->
                        <div class="goods-pic">
                            <a href="javascript:;" target="_blank" title="${a.link_text_all}"> <img src="${a.img}" nc-goods-pic title="云南墨江紫贡新米秒杀组" alt="${a.link_text_all}" /> </a>
                        </div>
    
                        <!--商品详细信息-->
                        <div class="goods-info">
                            <div class="goods-price-deal offer-1">
                                <!--该商品如果是批发模式-->
                                <div class="goods-price-offer retail_goods_price"><span class="number number-20 number-thin sale-price" title="商城价：￥94.00"><span class='yuan'>￥</span><span class='integer'>${a.price_int}</span><span class='pointer'>.</span><span class='decimal'>${a.price_float}</span></span><i>${a.discount_flag}</i></div>
                            </div>
                            <div class="p-name">
                                <a href="./detail.html?id=${a.id};" target="_blank" title="${a.link_text_add}">
                                    <em>
                                      <!-- 商品类型_Star -->
                                    <!--零售-->
                                                    <!-- 商品类型_End -->
                                     ${a.link_text_all}
                                     <i>${a.link_text_add}</i>
                                    
                                    </em>
                                </a>
                            </div>
                            <div class="p-commit"><strong class="m-r-20"><a href="javascript:;" class="num" target="_blank" title="成交量">${a.deal_text}</a></strong><strong class="m-r-10"><a href="#" class="num" style="color: #999" target="_blank" title="评论数">${a.evaluate_text}</a> </strong></div>
                            <div class="p-shop"><span><a href="javascript:;" title="官方店铺" class="name" >官方店铺</a></span></div>
                            <div class="p-icons"><i class="goods-icons">自营</i></div>
                            <!-- S 添加到购物车区域-->
                            <div class="p-operate" nc-shopping-box>
                                <div class="p-o-btn focus"><a href="javascript:;"><i class="shop_common"></i>收藏</a> <a nc_type="favorited" style="display: none;"><span class="fa fa-star" style="font-size:16px; margin-right:4px; vertical-align:middle"></span>已收藏</a></div>
                                <!-- S 加入购物车等按钮区域-->
                                <div class="p-o-btn addcart">
                                    <a class='' href="javascript:;" nc-add-cart data-common-id="210092"><i class="shopping-cart" ></i>加入购物车</a >
                                  </div>
                                </div>
                             </div>
                        </div>>
                    </li>
                    `}),row.innerHTML=s}})}();