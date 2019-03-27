var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    console.log('收到请求,路径是:' + req.url);
    // 根据不同的路径获取不同的响应
    var url = req.url;
    
    // 1、 获取请求路径

    // 2、判断了路径处理响应

    var data = '';
  // if (url === '/') {
    //     data = '首页'
    // } else if  (url === '/a') {
    //     data = 'login'
    // } else {
    //     data = '404'
    // }

    if(url == '/products') {
        var products = [{
            name: '苹果10',
            price: 8888
        }, 
        {
            name: '苹果10',
            price: 8888
        }]

        data = JSON.stringify(products);
    }

    // 结束的同时发送响应
    // 响应内容只能是 二进制数据或字符串
    // 数字
    // 对象
    // 数组
    // 布尔

    // res.end('hello world');
    res.end(data);
}).listen(3000, function () {
    console.log('服务启动成功')
});