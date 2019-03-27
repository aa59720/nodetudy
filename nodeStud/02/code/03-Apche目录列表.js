var http = require('http');
var fs = require('fs');

var server = http.createServer();
var wwwDir = 'D:';

// 使用Apache 服务软件，这个软件默认有www目录，所有存放在www目录中的 资源都可以通过网址得到，
server.on('request',function (req, res) {
    var url = req.url;
    fs.readFile('./template.html', function (err, data) {
        if(err) {
            return res.end('404 Not Found')
        }
        // 1. 如何得到目录文件 和目录文件名

        // 2. 如何将得到的文件名和目录名替换到template
        fs.readdir(wwwDir ,function(err, file) {
            if(err) {
                return  console.log("can not find"+wwwDir)
            }
            var conent = '';
            // console.log(file)
            file.forEach(function (item) {
                conent += `
                <tr>
                    <td data-value="${item}/">
                        <a class="icon dir" href="/D:/${item}/">${item}/</a>
                    </td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1553358875">2019/3/24 上午12:34:35</td>
                </tr>
                `

               
            })
            data = data.toString();
            data = data.replace('^_^', conent)
            res.end(data)
            
        })

        
    })
}).listen(3000)