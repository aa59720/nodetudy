var http = require('http');
var fs = require('fs');
var template = require('art-template');

var server = http.createServer();
var wwwDir = 'D:';
var conent = '';
// 使用Apache 服务软件，这个软件默认有www目录，所有存放在www目录中的 资源都可以通过网址得到，
server.on('request', function (req, res) {
    fs.readFile('./template-07.html', function (err, data) {
        if (err) {
            return res.end('404 Not Found')
        }
        // 1. 如何得到目录文件 和目录文件名

        // 2. 如何将得到的文件名和目录名替换到template
        fs.readdir(wwwDir, function (err, file) {
            if (err) {
                return console.log("can not find" + wwwDir)
            }
            conent = template.render(data.toString(), { name:"嘿嘿", files: file });
            res.end(conent)

        })
    })
}).listen(3000)