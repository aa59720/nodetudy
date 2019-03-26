// 浏览器中js没有操作文件的能力
// 但是node红JavaScript具有操作文件的能力

// fs是file-system的简写，就是文件系统的意思
// 在node中如果要进行文件操作就必须引入fs这个核心模快
// 在fs这个核心模块中就提供了所有文件操作的相关API


// 1.使用require 方法加载 fs 核心模块
var fs = require('fs');

// 2. 读取文件
    // 第一个参数就是文件对象
    // 第二个是回调函数
    //     成功
    //         data是数据，error null
    //     失败
    //         data是null,error 错误对象

fs.readFile('./hello.txt', function(error, data) {
    // 文件里都是二进制码
    // toString() 转化成我们认识的字符
    if(error) {
        console.log(error);
    }else{
        console.log(data.toString());
    }
})
