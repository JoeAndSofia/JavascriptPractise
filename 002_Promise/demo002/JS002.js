window.onload = function() {
    function pms1() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
                if(num <= 5) {
                    resolve(num);
                } else {
                    reject('数字太大了吧！:' + num);
                }
            }, 2000);
        });
    }
    setInterval(function() {
        pms1().then(function(data) {    //小于等于5的
            console.log(data);
        }, function(data) {     //大于的
            console.log(data);
        })
    }, 1000);
}
