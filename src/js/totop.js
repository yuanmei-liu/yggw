//返回顶部动画
$(function() {
    $(".gotop").click(function() {
        // console.log(111)
        $("body,html").stop().animate({
            scrollTop: 0
        }, )
    })
})