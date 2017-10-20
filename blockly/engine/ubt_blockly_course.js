/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * UbtBlocklyCourse.js version 1.0
 * 
 * course main js
 * 
 * feature init document
 * 
 */
'use strict'
;(function(){
    // 引入组件
    require('./adapter/field_textinput_extension')();
    require('./adapter/xml_extension')(Blockly.Xml);
    require('./../project/swift/swift');
    //引入css
    require('./../project/css/font-awesome.min.css');
    require('./../project/css/common.css');
    require('./../project/css/servo_angle.css');
    require('./../project/css/time.css');
    require('./../project/css/phone.css');
    require('./../project/css/infrared.css');
    require('./../project/css/default-player.css');
    require('./../project/css/blockly_guide.css');

    //重写onClick事件，解决某些移动端onClick事件响应慢（兼容IOS与Android）
    require('react-fastclick')();

    window.kaiguan = 1;//控制指引只放一次
    var interactiveRobot = require('./common/program/interactive_robot');//控制程序单不执行，是否需要等待后台返回运行结果
    //初始化数据，各传感器数据管理
    var blocklyDatas = require('./service/blockly_datas');
        blocklyDatas.setKeyData('platformType',3);//平台3  -- 课程
        blocklyDatas.setKeyData('programRunning',false);//初始化运行状态
    //工具类
    var ubtUtils = require('./common/utils/utils');
    //初始化界面数据以及各组件
    var codeLanguage = require('./common/program/program_init');
    //重写垃圾箱——暂时没用
    //require('./adapter/block_trashcan')();
    var infraredSensor = require('./../project/ionicPopup/common/infrared_sensor');
   
    function UbtBlocklyCourse(params) {     
        Blockly.Blocks.version = '1.0.0.0';
    }
    // 初始化语言，调用课程初始化入口
    UbtBlocklyCourse.prototype.init = function() {
        interactiveRobot.init();
        var languageCode = blocklyDatas.getDataByKey('languageCode');
        if (!languageCode || languageCode =='')  {
            languageCode = 'zh-hans';
            blocklyDatas.setKeyData('languageCode',languageCode);
        }
        blocklyDatas.setKeyData('languageCode',languageCode);
        this.loadLanguageResource(languageCode); 
        window.addEventListener('load', codeLanguage.initCourse);
        infraredSensor.init();
    };

    /**
    * 载入国际化资源
    */
    UbtBlocklyCourse.prototype.loadLanguageResource = function(languageCode) {
        window.LANGUAGE_CODE = languageCode;
        ubtUtils.loadScript('../project/msg/'+languageCode+'.js', function () {
            console.log('../project/msg/'+languageCode+'.js');
            ubtUtils.loadScript('../msg/js/'+languageCode+'.js',function() {
                console.log('../msg/js/'+languageCode+'.js');
                var serialName =blocklyDatas.getDataByKey('serialName')||'AstroBot';
                window.SERIAL_NAME = serialName;
                var courseId =blocklyDatas.getDataByKey('courseId');
                if (window.blocklyObj) {
                    var course_msg = '../../../courses/'+serialName+'/course_'+ courseId +'/'+languageCode+'/'+languageCode+'.js';
                    var courseJsInfo = '../../../courses/'+serialName+'/course_'+ courseId +'/common/config.js';
                } else {
                    var course_msg = '../engine/courses/'+serialName+'/course_'+ courseId +'/'+languageCode+'/'+languageCode+'.js';;
                    var courseJsInfo = '../engine/courses/'+serialName+'/course_'+ courseId +'/common/config.js';
                }
                console.log(courseJsInfo);
                ubtUtils.loadScript(course_msg, function() {
                    console.log(window.MSG);
                    ubtUtils.loadScript(courseJsInfo, function() {
                        var courseData = require('./service/course_data');
                        console.log(courseData, '之前的数据');
                        courseData.refreshData(window.courseData);
                        console.log(courseData, '刷新后的数据');
                        //等到载入国际化的语言后，才开始载入自定义的块
                        // 引入自定义block块
                        require('../project/blocks/blockSpace');
                    });
                }); 
            });
        });
    };

  var ubtBlocklyCourse = new UbtBlocklyCourse();
  ubtBlocklyCourse.init();

}).call(this);

