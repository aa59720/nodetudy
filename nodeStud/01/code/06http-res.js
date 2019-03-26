var http = require('http');


var server= http.createServer();

// request 请求事件处理函数，要两个参数
    // Requuest 请求对象
        // 请求对象可以活客户端的一些请求信息  比如请求路径
    // Response 响应对象
        // 相应对象可以用客户端发送响应消息

server.on('request', function(request, response) {
    // http://127.0.0.1:3000/a
    console.log('收到请求,路径是:'+request.url);

    // response 对心象有一个方法write 可以用来给客户端发送响应数据
    // write 可以使用多次，但最后一点使用end 来结束响应，否则客户端会一直等待

    response.write('hello');
    response.write(' node');

    // 告诉客户端我的话说完了 可以给用户了
    response.end()

})

server.listen(3000, function() {
    console.log('服务启动成功')
});