var xlsx = require('node-xlsx');
// var list = xlsx.parse("./course2_12.xls");
var list = xlsx.parse("./course13_24.xls");
var fs = require('fs');
/*
* 读取标准翻译文档 courses.xslx
* 输出翻译文件js到配置文件目录
*  zh-hans.js/en.js/ar.js/de.js
*/ 
for(var i=0; i < list.length; i++){
    var page = list[i];
    console.log("language type:" + page.name);
    var data = page.data;
    if(data[0]){
        var colNum = data[0].length;
        for(var colIdx = 1; colIdx < colNum; colIdx++ ){ 
            var fileName = data[0][colIdx]+'.js';
            console.log(fileName);
            var course_name = page.name;
            // var path_file = "../../courses/"+page.name+"/msg/"+fileName;
            var jsonArr = {
                '丹麦':'da',
                '俄语':'ru',
                '土耳其':'tr',
                '德语':'de',
                '意大利语':'it',
                '日语':'ja',
                '法语':'fr',
                '波兰':'pl',
                '简体中文':'zh-hans',
                '繁体中文':'zh-hant',
                '英文':'en',
                '葡萄牙':'pt',
                '西班牙语':'es',
                '阿拉伯语':'ar',
                '韩语':'ko'
            };
            var courseid = (13+i);
            var key = data[0][colIdx];
            var path_file = "./c__"+courseid+jsonArr[key]+".js";
            // var path_file = "../../courses/course_"+courseid+"/msg/"+jsonArr[key]+".js";
            var content = '';
            for(var j=1; j < data.length; j++){
                if(data[j][colIdx]==undefined) continue;
                content += 'MSG.'+data[j][0] +' = "'+ data[j][colIdx] + '"';
                content += ';\n';            
            }               
            fs.appendFile(path_file, 'var MSG = window.MSG;\n' + content, function (err) {
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
            });
        }
    }
}