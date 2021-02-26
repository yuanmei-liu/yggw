//焦点轮播图
//1.鼠标移入后箭头显示
$(function() {
    var ulPage = 0;
    $('.next').on('click', function() {
        console.log(ulPage);
        ulPage++
        if (ulPage >= 4) {
            ulPage = 3;
            return
        }
        $('.goods').animate({
            left: -$('.skill-text').width() * ulPage
        }, 500)
    })
    $('.prev').on('click', function() {
        ulPage--;
        if (ulPage < 0) {
            ulPage = 0;
            return;
        }
        console.log(ulPage);
        $('.goods').animate({
            left: -$('.skill-text').width() * ulPage
        }, 500)
    })
})