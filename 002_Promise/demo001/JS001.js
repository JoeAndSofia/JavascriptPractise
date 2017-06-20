window.onload = function() {
    function pms1() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('执行任务1');
                resolve('执行任务1成功');
            }, 2000);
        });
    }

    function pms2() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('执行任务2');
                resolve('执行任务2成功');
            }, 2000);
        });
    }

    function pms3() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('执行任务3');
                resolve('执行任务3成功');
            }, 2000);
        });
    }
    pms1()
        .then(function(data) {
            console.log('第1个回调：' + data);
            return pms2();
        })
        .then(function(data) {
            console.log('第2个回调：' + data);
            return pms3();
        })
        .then(function(data) {
            console.log('第3个回调：' + data);
            return '还没完！该结束了吧！'
        })
        .then(function(data) {
            console.log(data);
        });
}
