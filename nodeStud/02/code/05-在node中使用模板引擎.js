// art-template
// 不仅可以浏览其中是有，也可以在node中用
// npm install art-template

// 在 Node 中使用art-template 引擎
// 1. 安装npm install art - template
// 2. 加载art - template 
// 3. 查看文档使用引擎API

var template = require('art-template');

// template.render(模板字符串，替换对象，options);

var fs = require('fs');

var http = require('http');

var server = http.createServer();

var content = '';
var obj = {
    name: '张三',
    age: '12',
    like: ['唱歌', '打游戏', '哒啪']
}
server.on('request',function (req, res) {
    fs.readFile('./../www/index.html',function (err, data) {
        if(err) {
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            return res.end('失败')
        }
        content = template.render(data.toString(), obj);
        
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(content)
    })
    // res.end()

}).listen(3000)