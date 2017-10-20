/**
 * data_service.js version 1.0  zlm
 * 
 *  功能 ：提供数据服务 (区别于原来的data_service 不依赖angular)
 * 
 *  
 * 
 */
'use strict';
;(function (){
    var RobatCommand = require('./robat_command');

    function DataService() {
        this.curXmlObj = {"xmlId": "", "xmlName": "", "isDefault": false, "xmlContent": ""};
    };
    /**
     *   初始化当前xml obj 对象
     *   {{xmlId: string, xmlName: string, isDefault: boolean, xmlContent: string}}
     *   //xmlId -xmlID  xmlName -xml名称  isDefault--是否系统默认案例  xmlContent--当前xml内容
     */
    DataService.prototype.initCurXmlObj = function() {
        this.curXmlObj = {
            "xmlId": "",
            "xmlName": "",
            "isDefault": false,
            "xmlContent": ""
        };
    };
    /**
     *   获取当前编辑xml obj对象
     */    
    DataService.prototype.getCurXmlObj = function() {
        return this.curXmlObj;
    };

    var XMLHttpReqScript;
    function createXMLHttpReqScript() {
        if(window.XMLHttpRequest) { //Mozilla 浏览器
            XMLHttpReqScript = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) { // IE浏览器
            try {
                XMLHttpReqScript = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    XMLHttpReqScript = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
    }
    /**
     * 根据路径读取xml内容
     * @param xmlFile xml路径
     * @returns {*}
     */
    var loadXML = function (xmlFile) {
        createXMLHttpReqScript();
        var  xmlDoc = null;
        var nowTime = new Date().getTime();//获取当前时间作为随机数
        var url = xmlFile + "?time=" + nowTime;
        XMLHttpReqScript.open("GET", url, true);
        XMLHttpReqScript.send(null);
        if (XMLHttpReqScript.readyState == 4) {
            if (XMLHttpReqScript.responseXML != null) {
                //xmlDoc = xmlhttp.responseXML.documentElement;
                xmlDoc = XMLHttpReqScript.responseText;
            } else {
                xmlDoc = null;
            }
        }
        return xmlDoc;

    };

    /**
     * // 首先对xml对象进行判断
     * @param xmlFile xml路径
     */
    DataService.prototype.readXmlFromUrl = function (xmlFile) {
        var xmlDoc = loadXML(xmlFile);
        return xmlDoc;
    };

    /**
     *   获取发送命令参数
     *   @type  项目保存类型
     *   @param 项目保存参数
     */    
    DataService.prototype.getCommandParam = function(type,param,closeParams) {
        //发送参数
        var temp_param = null;
        if (param != undefined && param != null) {
            temp_param = JSON.stringify(param);
        }
        var lightTime = 255000;
        if (closeParams) {
            lightTime = 0;
        }
        var commandParms = {
            //新增项目
            'add': 'SaveXml|' + temp_param + '|saveXmlCallBack',
            //编辑项目
            'edit': 'SaveXml|' + temp_param + '|editXmlCallBack',
            //删除项目
            'delete': 'DeleteXml|' + temp_param + '|deleteXmlCallBack',
            //读取xml
            'read': 'ReadXml|' + temp_param + '|readXmlCallBack',
            //读取外设实时值
            'read_device': 'startInfraredTimer|null|readDeviceCallBack',
            //读取红外设备实时值
            'read_infrared': 'startInfraredTimer|null|readInfraredCallBack',
            //关闭外设实时值
            'stop_device' : 'stopInfraredTimer|null|null',
            //关闭窗口，即退出逻辑编程界面
            'closeWindow': 'CloseWindow',
            //获取项目列表
            'projectList' : 'XmlList|null|xmlListCallBack',
            //蓝牙连接
            'blueConnect' : 'ConnectBLE',
            //蓝牙关闭
            'blueDisconnect': 'DisconnectBLE',
            //触碰传感器的显示
            'touchShow': 'setSensorLED|' + temp_param,
            //陀螺仪传感器的显示
            'gyroShow': 'setSensorLED|' + temp_param,
            //红外传感器的显示
            'InfraredShow': 'setSensorLED|' + temp_param,
            //表情
            'emojiRealTime': 'setEmoji|' + temp_param + '|3|0',
            // led灯光
            'LEDRealTime': 'setLEDs|' + temp_param + '|'+lightTime,
            // 旋转舵机角度
            'changeServo' : 'servoSet|' + temp_param

        };
        // console.log("data_service ==>"+commandParms[type]);
        return commandParms[type];
    };
    /**
     *  项目命令发送
     *   @type  项目保存类型
     *   @param 项目保存参数
     */    
    DataService.prototype.command = function(type, param,isclose) {
        var temp_command = null;
        var comond_param = this.getCommandParam(type, param,isclose);
        temp_command = new RobatCommand(comond_param);
        temp_command.send();
    };

    /**
     * 根据语言获取到程序块介绍列表
     * @param languageCode 语言代码
     */
    DataService.prototype.getHelpList = function(languageCode){
        var list = [];
        if(languageCode=='zh-hans'||languageCode=='zh-hant'){
            list = [
                    "images/help/zh-hans/zh_01.jpg",
                    "images/help/zh-hans/zh_02.jpg",
                    "images/help/zh-hans/zh_03.jpg",
                    "images/help/zh-hans/zh_04.jpg",
                    "images/help/zh-hans/zh_05.jpg",
                    "images/help/zh-hans/zh_06.jpg",
                    "images/help/zh-hans/zh_07.jpg"
                ];

        }else {
            list = [
                    "images/help/en/en_01.jpg",
                    "images/help/en/en_02.jpg",
                    "images/help/en/en_03.jpg",
                    "images/help/en/en_04.jpg",
                    "images/help/en/en_05.jpg",
                    "images/help/en/en_06.jpg",
                    "images/help/en/en_07.jpg"
                ];

        }
        return list;
    };
    /**
     * 根据不同的平台获取不同的组件集合来初始化数据
     * 系统初始化界面组件数据
     * @returns {Array} 组件数据集合
     */
    DataService.prototype.initComponentData = function(platformType){
        var config_data = [];
        var condition = (platformType==1||platformType==2)?'one':'two';
        switch (condition) {
            case 'one' : //普通版 教育版
                    config_data = [
                        { key:'returnButton', data:null, callback:null, id:'prog_return_div'}, //返回按钮
                        { key:'runButton', data:{isRunning:false}, callback:null, id:'prog_ctrl_div'},  //运行按钮
                        { key:'saveButton', data:null, callback:null, id:'blockly_savebtn'},  //保存项目按钮
                        { key:'projectButton', data:null, callback:null, id:'blockly_projectbtn'}, //项目列表按钮
                        { key:'swiftButton', data:null, callback:null, id:'blockly_swiftbtn'},   //swift代码按钮
                        { key:'bluetoothButton', data:null, callback:null, id:'bluetooth_btn'},  //蓝牙连接标识
                        { key:'helpButton', data:null, callback:null, id:'help_btn'},  //帮助提示按钮
                        { key:'systemTips', data:null, callback:null, id:'system_prompt'},//系统信息提示
                        { key:'guide', data:null, callback:null, id:'guide_blockly'}  //指引介绍 容器
                    ];
                break;
            case 'two' :  //课程版
                    config_data = [
                        { key:'returnButton', data:null, callback:null, id:'prog_return_div'}, //返回按钮
                        { key:'runButton', data:{isRunning:false}, callback:null, id:'prog_ctrl_div'}, //运行按钮
                        { key:'courseStory', data:{type:'startStory'}, callback:null, id:'course_story'}, //课程开始故事(结束故事)容器
                        { key:'courseMenuLock', data:null, callback:null, id:'menulock_box'},  //菜单锁容器
                        { key:'courseTitle', data:null, callback:null, id:'course_title'},  //任务标题
                        { key:'bluetoothButton', data:null, callback:null, id:'bluetooth_btn'},  //蓝牙连接标识
                        { key:'helpButton', data:null, callback:null, id:'help_btn'}, //帮助提示按钮
                        { key:'courseTaskDesc', data:null, callback:null, id:'course_task_desc'}, // 任务帮助描述介绍
                        { key:'systemTips', data:null, callback:null, id:'system_prompt'}   //系统信息提示
                    ];
                break;
        }
        return config_data
    };

    var dataService = new DataService();

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = dataService;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return dataService; });
    } else {
        this.dataService = dataService;
    }

}).call(this);