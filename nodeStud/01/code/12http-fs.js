var http = require('http');
var fs = require('fs');

var server= http.createServer();

server.on('request', function(req, res) {
    var url = req.url;
    if(url === '/'){
        fs.readFile('./resource/index.html',function(err, data) {
            if(err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败')
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/01.jpg') {
        // url统一资源定位符
        // URL 最终是要定位到一个资源的
        fs.readFile('./resource/01.jpg',function(err, data) {
            if(err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败')
            } else {
                // 图片不需要编码了，因为我们常说的编码一般指的是：字符编码
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }

})

server.listen(3000, function() {
    console.log('服务启动成功')
});