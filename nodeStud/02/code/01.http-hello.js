var http = require('http');
var fs = require('fs');

var server = http.createServer();
var wwwDir = './../www';

// 使用Apache 服务软件，这个软件默认有www目录，所有存放在www目录中的 资源都可以通过网址得到，
server.on('request',function (req, res) {
    var url = req.url;
    if(url === '/') {
        fs.readFile(wwwDir + '/index.html', function(err, data) {
            if (err) {
               return res.end('加载失败')
            } 
            res.end(data)
        })
    } else if (url === '/hello.txt') {
        fs.readFile(wwwDir + '/hello.txt', function(err, data) {
            if (err) {
               return res.end('加载失败')
            } 
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end(data)
        })
    } else if (url === '/01.jpg') {
        fs.readFile(wwwDir + '/01.jpg', function(err, data) {
            if (err) {
               return res.end('加载失败')
            } 
            res.setHeader('Content-Type', 'image/jpeg')
            res.end(data)
        }) 
    } else {
        res.end('404')
    }
}).listen(3000)