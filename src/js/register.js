window.onload = function() {
    // 获取账号。密码以及密码验证元素
    var zhao = document.querySelector("#zhao")
    var pwsd = document.querySelector("#pwsd")
    var surepwd = document.querySelector("#surepwd")
    var pArr = document.querySelectorAll('.warn')
    var btn = document.querySelector("#btn")
    var regzhao = /^[\u4e00-\u9fa5]{2,}$/
        // var regzhao = /^[\u4e00-\u9fa5]{1，7}$/ //账号必须为2-6位的汉字
        //强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
    var regpwsd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/

    // 方法二
    // 账号正则验证
    zhao.onblur = function() {
        if (regzhao.test(this.value)) {
            // console.log(111)
            pArr[0].className = 'success'
            pArr[0].innerHTML = "success"
                // 密码正则验证
            pwsd.onblur = function() {
                if (regpwsd.test(this.value)) {
                    // console.log(111)
                    pArr[1].className = 'success'
                    pArr[1].innerHTML = "succes"
                    surepwd.onblur = function() {
                        // 验证密码是否输入一致
                        if (this.value == pwsd.value) {
                            pArr[2].className = 'success'
                            pArr[2].innerHTML = "succes"
                            btn.onclick = function() {
                                // 打印一下看看是否能获取到账号跟密码
                                // console.log(zhao.value)
                                // console.log(pwsd.value)
                                var u1 = zhao.value
                                var p1 = pwsd.value
                                Ajax({
                                    url: "../php/register.php",
                                    data: `username=${u1}&password=${p1}`,
                                    success: function(dt) {
                                        //成功时的回调
                                        // console.log(dt)
                                        location.href = "./login.html"
                                    },
                                    error: function() {
                                        alert("注册失败，请输入有效账号")
                                    }

                                })
                                return false; //禁用掉button按钮自带的提交功能，我们要从后端请求
                            }
                        } else {
                            pArr[2].className = 'warn'
                            pArr[2].innerHTML = '两次密码输入不一致，请重新输入 '
                        }
                    }

                } else {
                    pArr[1].className = 'warn'
                    pArr[1].innerHTML = '必须包含大小写字母和数字组合，不能使用特殊字符，长度在 8-10 之间'
                        // console.log(222)
                }
            }
        } else {
            pArr[0].className = 'warn'
            pArr[0].innerHTML = '账号必须为2-6位的汉字'
            console.log(222)
        }
    }

    //     // 封装账号
    //     function zhanghao(str, dom) {
    //         if (regzhao.test(str)) {
    //             // console.log(111)
    //             dom.className = 'success'
    //             dom.innerHTML = "输入用户名有效"
    //             return true
    //         } else {
    //             dom.className = 'warn'
    //             dom.innerHTML = '账号必须为2-6位的汉字'
    //             return false
    //                 // console.log(222)
    //         }
    //     }

    //     // 密码正则验证
    //     function mima(str, dom) {
    //         if (regpwsd.test(str)) {
    //             // console.log(111)
    //             dom.className = 'success'
    //             dom.innerHTML = "success"
    //             return true
    //         } else {
    //             dom.className = 'warn'
    //             dom.innerHTML = '必须包含大小写字母和数字组合，不能使用特殊字符，长度在 8-10 之间'
    //             return false
    //                 // console.log(222)
    //         }
    //     }
    //     // 密码二次验证
    //     function mimayanzheng(str, dom) {
    //         if (this.value == pwsd.value) {
    //             dom.className = 'success'
    //             dom.innerHTML = "密码验证通过"
    //             return true
    //         } else {
    //             dom.className = 'warn'
    //             dom.innerHTML = '两次密码输入不一致，请重新输入 '
    //             return false
    //         }
    //     }





}