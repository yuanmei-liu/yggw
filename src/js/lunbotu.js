window.addEventListener('load', function() {
    //获取元素
    var arrow_l = document.querySelector('#arrow_l');
    var arrow_r = document.querySelector('#arrow_r');
    var focus = document.querySelector('.focus')
    var focusWidth = focus.offsetWidth;

    // console.log(arrow_r)
    // 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // console.log(arrow_r)
        //鼠标经过停止播放
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用右侧按钮点击事件
            arrow_r.click();
        }, 2000)

    })

    //动态的生成小圆圈  有几张图，就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle')
        // console.log(ul.children.length)
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i)
            //把小li插入到ol里面
        ol.appendChild(li);
        //4.小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接帮i是哪个点击事件
        li.addEventListener('click', function() {
            //干掉所有人 把所有的小li 清楚current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //5.点击小圆圈，移动图片
            //ul的移动距离就是小圆圈的索引号 乘以图片的宽度 注意是负值
            //当我们点击了某个小li 就拿到当前小li d的索引号
            var index = this.getAttribute('index');
            //当我们点击了某个小li就要把这个小li的索引给mun
            num = index;
            //当我们点击了某个小li就要把这个小li的索引给circle;
            circle = index;
            // var focusWidth = focus.offsetWidth;这是一个局部变量，将其提出至最外层，公共使用
            // console.log(focusWidth)
            // console.log(index)
            animatess(ul, -index * focusWidth);
        })
    }
    //把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';

    //克隆第一张图片（li）放到ul 最后面  克隆在生成小圆圈之后，所以小圆圈不会变多
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
        //7.点击右侧按钮，图片滚动一张
    var num = 0;
    var circle = 0;
    //circle 控制小圆圈的播放
    arrow_r.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animatess(ul, -num * focusWidth) //animate(ul,target,callback)
            //8.点击右侧按钮，小圆圈跟随一起变化，可以在声明一个变量控制小圆圈的播放
        circle++;
        //如果circle==4  说明走到最后我们克隆的这张图片了，我们就复原
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange()
            //以下左右箭头公用部分可用封装函数调用 circleChange()来替代
            // //先清除其余小圆圈的类名，留下当前小圆圈的类名
            // for (var i = 0; i < ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }
            // //留下当前小圆圈的类名

        // ol.children[circle].className = 'current';

    })

    //左侧按钮做法
    arrow_l.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';

        }
        num--;
        animatess(ul, -num * focusWidth) //animate(ul,target,callback)
            //8.点击右侧按钮，小圆圈跟随一起变化，可以在声明一个变量控制小圆圈的播放
        circle--;
        //如果circle<0  说明第一张图片，则小圆圈改为第五个小圆圈(4)
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange()
            //以下左右箭头公用部分可用封装函数调用 circleChange()来替代
            /*  //先清除其余小圆圈的类名，留下当前小圆圈的类名
             for (var i = 0; i < ol.children.length; i++) {
                 ol.children[i].className = '';
             }
             //留下当前小圆圈的类名

             ol.children[circle].className = 'current'; */

    })

    function circleChange() {
        //先清除其余小圆圈的类名，留下当前小圆圈的类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下当前小圆圈的类名

        ol.children[circle].className = 'current';
    }
    //自动播放轮播图
    var timer = setInterval(function() {
        //手动调用右侧按钮点击事件
        arrow_r.click();
    }, 2000)
})