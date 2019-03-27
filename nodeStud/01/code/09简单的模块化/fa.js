// require 是一个方法
// 他的作用就是来加载模块的
// 在Node 中 模块有三种
//     具名的核心模块 列： fs、http
//     用户自己编写的文件模块
        // 相对路径必须加./
// Node没有全局作用域，只有模块作用域
 // 外部访问不到内部
 // 内部访问不到外部
var foo = "fa";

console.log('a start')

require('./child')

console.log('a end')

console.log('fa的值：'+foo) // 