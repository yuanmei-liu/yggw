var maxtime=3600;function countDown(){0<maxtime?(Math.floor(maxtime/60/60)<=9?$(".h").text("0"+Math.floor(maxtime/60/60)):$(".h").text(Math.floor(maxtime/60/60)),Math.floor(maxtime/60%60)<=9?$(".m").text("0"+Math.floor(maxtime/60%60)):$(".m").text(Math.floor(maxtime/60%60)),Math.floor(maxtime%60)<=9?$(".s").text("0"+Math.floor(maxtime%60)):$(".s").text(Math.floor(maxtime%60)),--maxtime):(clearInterval(timer),$(".h").text("00"),$(".m").text("00"),$(".s").text("00"))}var timer=setInterval("countDown()",1e3);