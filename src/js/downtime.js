//页面倒计时的功能实现
//倒计的时间
var maxtime = 60 * 60;
//倒计时的函数
function countDown() {
    if (maxtime > 0) {
        Math.floor(maxtime / 60 / 60) <= 9 ? $('.h').text('0' + Math.floor(maxtime / 60 / 60)) : $('.h').text(Math.floor(maxtime / 60 / 60))
        Math.floor(maxtime / 60 % 60) <= 9 ? $('.m').text('0' + Math.floor(maxtime / 60 % 60)) : $('.m').text(Math.floor(maxtime / 60 % 60))
        Math.floor(maxtime % 60) <= 9 ? $('.s').text('0' + Math.floor(maxtime % 60)) : $('.s').text(Math.floor(maxtime % 60))
            --maxtime
    } else {
        clearInterval(timer)
        $('.h').text('0' + '0')
        $('.m').text('0' + 0)
        $('.s').text('0' + 0)
    }
}
var timer = setInterval("countDown()", 1000);