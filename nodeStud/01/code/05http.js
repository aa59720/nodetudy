// http模块  帮助创建服务器

// 加载http模块
var http = require('http');

// 使用http..createServer()方法创建一个web服务器

var server= http.createServer();

//服务器提供服务 对数据服务
// 发送请求
// 接受请求接受请求
// 处理请求
// 给个反馈

// 注册request 请求
// 当客户端请求过来， 就会自动触发服务器的request请求事件 然后执行第二个参数，回调函数
server.on('request', function() {
    console.log('收到请求')
})

// 4 .绑定端口号 启动服务
server.listen(3000, function() {
    console.log('服务启动成功')
});