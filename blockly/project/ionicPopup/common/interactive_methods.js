/* @preserve
 * Copyright (c) 2016 UBT Company
 */
/**
 * interactiveMethods.js version 1.0
 * 功能 ：js与IOS或者android交互的模块(主要用于IOS或者android回调 js)
 * feature js interact with IOS or Android;
 */
'use strict';
;(function() {
    var jsxManage = require('./../../../engine/service/jsx_manage_service.js');
    var eventsListener = require('./../../../engine/common/events_listener');
    var programManager = require('./../../../engine/common/program/program_manager');
    var ubtUtils = require('./../../../engine/common/utils/utils');
    var RobatCommand = require('./../../../engine/service/robat_command');
    var blocklyDatas = require('./../../../engine/service/blockly_datas');
    var api = require('./../../../engine/API');
    var blocklyUtils = require('./../../../engine/common/utils/blockly_utils');
    var _ = require('lodash');
    var isExecute = true;

    /**
     * When running a program, the {ProgramRunner} will wait for this method to be called before executing the next step.
     */
    // branchId当前命令所在分支；commondStatus:当前命令执行状态
    window.continueSteps = function(branchId,commondStatus){
        console.log('callback branchId:'+branchId);
        var timer = blocklyDatas.getDataByKey('currentTime');
        if (window.blocklyObj && window.blocklyObj.logInfo) {
            window.blocklyObj.logInfo('block finish command, cost time:'+ timer.timeElapsed() +' unit.');
        }
        var programRunnerIndex = '';
        if (branchId &&　!isNaN(branchId)) {
            programRunnerIndex = branchId;
        } else {
            programRunnerIndex = programManager.getProgramRunnerIndex();
        }
        console.log('next_step'+programRunnerIndex);
        console.log('continueSteps----------->'+commondStatus);
        if(commondStatus != undefined) {
            var _commondStatus = parseInt(commondStatus);
        }
        if(commondStatus == undefined||_commondStatus){//执行状态为ture 就开始下一步程序
            eventsListener.trigger('next_step' + programRunnerIndex);
        }else {//当前命令执行失败，立即停止程序
            eventsListener.trigger('stop_execution');
        }
    };

    window.nextFn = function(){
        eventsListener.trigger('next_function');
    };

    window.showException = function(exception){
        // Error表示机器人出现异常，此时应该避免再给机器人发送命令
        // ReceiveMemoryWarning表示内存耗尽
        // EnterBackground表示程序进入后台
        console.log('exception:'+ exception);
        if (exception) {
            blocklyDatas.setKeyData('canSendStoprobot', false);
            if(exception =='EnterBackground'){//按了home键，允许发送停止机器人命令
                blocklyDatas.setKeyData('canSendStoprobot', true);
            }
            if (exception =='ReceiveMemoryWarning') {//内存耗尽调用 
                blocklyDatas.setKeyData('canSendStoprobot', true);
                eventsListener.trigger("infnite_loop_error");
            }
            eventsListener.trigger("stop_execution");
            
        }
    };

    //修改轮模式舵机后的回调函数
    window.refreshAllServo = function(param) {
        var allServo = JSON.parse(decodeURI(param));
        var commonServo = allServo['commonServo'];
        var circleServo = allServo['circleServo'];
        blocklyDatas.setKeyData('servos', commonServo);
        blocklyDatas.setKeyData('circleServos', circleServo);
        //初始化普通舵机和轮模式舵机
        blocklyDatas.initServosId();
        blocklyDatas.initCircleServosId();
        //遍历工作空间的块，判断是否属于合法的块
        blocklyUtils.iterateBlocks(function(block){
            if (block.type == 'movement_servo_rotate_circle') {
                //获取轮模式舵机的信息
                var servoGroup = block.getFieldValue('servoGroup');
                if(servoGroup.indexOf('#') > -1 || servoGroup.indexOf('ID') > -1) return;
                var servoInfoArr  = JSON.parse(servoGroup);
                //程序块中的轮模式舵机
                var circleServoIds = [];
                for (var i = 0; i < servoInfoArr.length; i++) {
                    circleServoIds.push(servoInfoArr[i]['servoId']);
                }
                var currentCircleServoId = blocklyDatas.getCircleServosIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var unionResultId = _.intersection(circleServoIds, currentCircleServoId);
                var isDisabled = _.isEqual(unionResultId, circleServoIds);
                block.setDisabled(!isDisabled?true:false);
            }
            if (block.type == 'movement_servo_change_angle_multi') {
                //获取舵机的信息
                var servoGroup = block.getFieldValue('servoGroup');
                if(servoGroup.indexOf('#') > -1 || servoGroup.indexOf('ID') > -1) return;
                var servoInfoArr  = servoGroup.split(',');
                //程序块中的舵机
                var servoIds = [];
                for (var i = 0; i < servoInfoArr.length; i++) {
                    servoIds.push(servoInfoArr[i].split(':')[0]);
                }
                var currentServoId = blocklyDatas.getServoIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var unionResultId = _.intersection(servoIds, currentServoId);
                var isDisabled = _.isEqual(unionResultId, servoIds);
                block.setDisabled(!isDisabled?true:false);
            }
            if (block.type == 'sensor_servo_angle') {
                //获取当前块的舵机信息
                var sensorId = block.getFieldValue('SENSOR_ID');
                var currentServoId = blocklyDatas.getServoIds();
                //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
                var isContain = _.includes(currentServoId, sensorId);
                block.setDisabled(!isContain?true:false);
            }
        });

    };

/**
     * @branchId 程序的分支ID， 
     * @jsonParam 传递给小胡的参数
     */
    window.sensorCallback = function(branchId, jsonParam) {
        console.log(branchId);
        console.log(jsonParam);
        //一旦接受到跳转到其他分支的命令，则直接停止机器人
        var stopRobatCommand = new RobatCommand('stopRobot');
        stopRobatCommand.send();
        var programStatus = blocklyDatas.getDataByKey('programRunning');
        console.log('程序的运行状态为：' + programStatus);
        if (programStatus) {
            eventsListener.once('forward_another', function() {
                api.wwGotoConditionStart(branchId);
            });
            eventsListener.trigger("stop_execution"); 
        } else if (!programStatus && !blocklyDatas.getDataByKey('programStopManner')) {
            //没有点击停止才启动程序，如果点击了停止，则不能再启动程序
            console.log('停止后再次来了一个分支');
            api.wwGotoConditionStart(branchId);
        }  
    };
    /**
     * 返回blockly的当前版本，此版本记录了有多少个块的信息
     */
    window.getBlocklyVersion = function() {
        return Blockly.Blocks.version;
    };
    /**
     * 项目列表操作
     */
    // 读取项目列表并返回
    window.xmlListCallBack = function (data) {
        eventsListener.trigger('setXmlList',data);
    };
    // 保存项目并返回
    window.saveXmlCallBack = function (data){
        eventsListener.trigger('saveXml',data);
    };
    // 删除项目并返回
    window.deleteXmlCallBack = function (data) {
        eventsListener.trigger('deleteXml',data);
    };
    // 读取单个项目内容并返回
    window.readXmlCallBack = function (data) {
        blocklyDatas.setKeyData("isXmlBus",false);
        eventsListener.trigger('readXml',data);
    };
    // 编辑项目返回
    window.editXmlCallBack = function(data){
        eventsListener.trigger('editXml',data);
    };
    /**
     * 获取红外传感器的值
     */
    window.readInfraredCallBack = function (data) {
        eventsListener.trigger('refreshInfrared',data);
    };

    /**
     * 获取陀螺仪传感器的值
     */
    window.readDeviceCallBack = function(data) {
        eventsListener.trigger('refreshGyro',data);
    };
    /**
     * 连接／断开   蓝牙
     */
    window.blueConnectCallBack = function(data) {
        eventsListener.trigger('ConnectBLE',data);
        eventsListener.trigger('DisconnectBLE',data);
    };
    /**
     * 系统提示  data：{ tipsContent:"",   tipsType:""}  tipsContent:提示信息   tipsType：提示类型   error错误类型
     */
    window.systemPrompt = function(data){
        eventsListener.trigger('systemPrompt',data);
    };
    //日志打印
    window.blockObj_log = function(logMsg){
        var timer = blocklyDatas.getDataByKey('currentTime');
        if (window.blocklyObj && window.blocklyObj.logInfo) {
            window.blocklyObj.logInfo("block log:"+logMsg + "--log time:"+timer.timeElapsed());
        }else{
            console.log("block log:"+logMsg + "--log time:"+timer.timeElapsed());
        }
    };
    /**
     * 充电保护提示
     * @param msg
     */
    window.chargeProtection = function(data){
        //回掉函数
        var callBack_ = function(){
            var temp_command = new RobatCommand('CloseWindow');
            temp_command.send();
        };
        var _data =  {
            "title":MSG.porject_alert_title,
            "content":data,
            "btnText":MSG.porject_alert_btnText
        };
        //充电保护弹框提示
        jsxManage.renderComponentByCondition('chargeProtectTip',_data,callBack_,"messagetip_div");
    };

    /**
     * 判断蓝牙连接状态
     * @param callBack  当前蓝牙处于连接状态业务处理
     */
    window.blueContentJudge = function(callBack){
        var blueState = blocklyDatas.getDataByKey('blueState');
        if (window.blocklyObj == undefined) {
            blueState = 1;
        }
        if (blueState == 0) {
            var blueContent = new RobatCommand('ConnectBLE');
            blueContent.send();
        } else {
            if(callBack){
                callBack();
            }
        }
    };
    //iOS 或者Java调用js显示最新的红外传感器的值
    /**
     * parameters 最新的传感器的值
     */
    window.showInfraredRef = function(ref) {
        var _data = {
            infraredValue: decodeURI(ref),
            showStatus:true
        };
        // console.log("iOS 或者Java调用js显示最新的红外传感器回调函数返回值："+_data.infraredValue);
        if (showObj.isCanShowAll) {
            jsxManage.renderComponentByCondition('infaredSensorShow',_data,"","infoShower");
        }
    };

    function InteractiveMethods () {

    };

    InteractiveMethods.timerValue = 0;
    InteractiveMethods.startInfaredTimerCallback = function () {
        var random = ubtUtils.generateRandom(1000,2500);
        window.showInfraredRef(random);
        this.timerValue = setTimeout('InteractiveMethods.startInfaredTimerCallback()',1000);
    };

    InteractiveMethods.stopInfaredTimerCallback = function () {
        clearTimeout(this.timerValue);
    };

    var ContainGoBack = {
        isContain : false
    };

    InteractiveMethods.setContainGoBack = function(isContain) {
        ContainGoBack.isContain = isContain;
    };

    InteractiveMethods.isContainGoBack = function() {
        return ContainGoBack.isContain;
    };

    //是否应该显示所有传感器的信息
    var showObj = {
        isCanShowAll : false
    }
    InteractiveMethods.setIsCanShowAll = function(isCanShowAll) {
        showObj.isCanShowAll = isCanShowAll;
    }

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = InteractiveMethods;
        window.InteractiveMethods = InteractiveMethods;
    } else if (typeof define === 'function' && define.amd) {
        define(function() { return InteractiveMethods; });
    } else {
        this.interactiveMethods = InteractiveMethods;
    }
}).call(this);