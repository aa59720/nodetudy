var fs = require('fs');

fs.readdir('D:',function (err, filse) {
    if(err) {
        return  console.log("目录不存在")
    }
    console.log(filse)
})