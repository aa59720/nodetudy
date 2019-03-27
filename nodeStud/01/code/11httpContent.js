var  http = require('http');

var server = http.createServer();
server.on('request', function (req,res) {
// 服务器默认发送utf8编码
// 但浏览器不知道是utf8
// 浏览器不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析

// 解决方法 正确的告诉浏览器给你发送到内容是什么编码
// 在http 中Content-Type 就是用来告诉对方我给你发送的数据内容是什么类型
    var url = req.url;
    if(url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('你好，世界')
    } else if (url === '/html'){
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<h1>你好</h1>')
    }
}).listen(3000)