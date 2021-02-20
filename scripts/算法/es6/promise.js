function test(resolve, reject) {
    let timeOut = Math.random() * 10;
    if (timeOut < 1) {
        console.log('call resolve()...');
        resolve('200 OK');
    }
    else {
        console.log('call reject()...');
        reject('timeout in ' + timeOut + ' seconds.');
    }
}

new Promise(test).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});