/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * UbtBlocklyApp.js version 1.0
 * 
 * app main js
 * 
 * feature init document
 * 
 */
'use strict'

;(function(){
    //引入资源 
    require('./adapter/field_textinput_extension')();
    require('./adapter/xml_extension')(Blockly.Xml);
    require('./../project/swift/swift');
    // 引入css样式
    require('./../project/css/font-awesome.min.css');
    require('./../project/css/common.css');
    require('./../project/css/blockly_guide.css');
    require('./../project/css/servo_angle.css');
    require('./../project/css/time.css');
    require('./../project/css/phone.css');
    require('./../project/css/infrared.css');

    //重写onClick事件，解决某些移动端onClick事件响应慢（兼容IOS与Android）
    require('react-fastclick')();

    var interactiveRobot = require('./common/program/interactive_robot');
    var blocklyDatas = require('./service/blockly_datas');
        blocklyDatas.setKeyData('platformType',1);//平台1  -- index版本
        blocklyDatas.setKeyData('programRunning',false);//初始化运行状态
    var ubtUtils = require('./common/utils/utils');
    var codeLanguage = require('./common/program/program_init');

    //重写垃圾箱——暂时没用
    //require('./adapter/block_trashcan')();
    var infraredSensor = require('./../project/ionicPopup/common/infrared_sensor');

    function UbtBlocklyApp(params) {     
        Blockly.Blocks.version = '1.0.0.0';
    }
    // 初始化语言，调用blockly初始化入口
    UbtBlocklyApp.prototype.init = function() {
        interactiveRobot.init();
        var languageCode = blocklyDatas.getDataByKey('languageCode');
        if (!languageCode || languageCode =='')  {
            languageCode = 'zh-hans';
        }
        var platformType = blocklyDatas.getDataByKey("platformType");
        if (platformType == 2){//教育版
            if(languageCode == "zh-hans" || languageCode == "zh-hant"){
                languageCode = 'zh-hans';
            }else{
                languageCode = 'en';
            }
        }   
        blocklyDatas.setKeyData('languageCode',languageCode);
        this.loadLanguageResource(languageCode);
        window.addEventListener('load', codeLanguage.init);
        infraredSensor.init();
    };

    /**
    * 载入国际化资源
    */
    UbtBlocklyApp.prototype.loadLanguageResource = function(languageCode) {
        window.LANGUAGE_CODE = languageCode;
        ubtUtils.loadScript('../project/msg/'+languageCode+'.js', function () {
            console.log('../project/msg/'+languageCode+'.js');
            ubtUtils.loadScript('../msg/js/'+languageCode+'.js',function() {
                console.log('../msg/js/'+languageCode+'.js');
                //等到载入国际化的语言后，才开始载入自定义的块
                // 引入自定义block块
                require('../project/blocks/blockSpace');
            });
        });
    };

    var ubtBlocklyApp = new UbtBlocklyApp();
    ubtBlocklyApp.init();

      
    if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = UbtBlocklyApp;

    } else if (typeof define === 'function' && define.amd) {
        define(function() { return UbtBlocklyApp; });
    } else {
        this.UbtBlocklyApp = UbtBlocklyApp;
    }

}).call(this);
