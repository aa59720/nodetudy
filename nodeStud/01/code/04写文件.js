var fs = require('fs');

// 第一个参数，文件路径
// 第二个参数 文件内容
// 第二个参数 回调函数
fs.writeFile('./添加文件测试.txt', '文件测试',function(err) {
    console.log(err)
})