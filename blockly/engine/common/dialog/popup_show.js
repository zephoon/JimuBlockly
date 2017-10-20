/* @preserve
 * Copyright (c) 2016 UBT Company
 */
/**
 * popup_show.js version 1.0
 * feature 显示消息的浮动延迟框
 */
'use strict'
;(function(){
    var React = require('react');
    var ReactDOM =  require('react-dom');
    var blocklyDatas = require('../../service/blockly_datas');
    var dataService = require('../../service/data_service');
    var RobatCommand = require('../../service/robat_command');
    var eventsListener = require('../../common/events_listener');
    var jsxManage = require('../../service/jsx_manage_service.js');
    var $ = require('jquery');
    function PopupShow() {};
    
    PopupShow.prototype.contains = function(arr, obj){
        var i = arr.length;  
        while (i--) {  
            if (arr[i] === obj) {  
                return true;  
            }  
        }  
        return false; 
    };
    // 根据popupType 获取数据
    PopupShow.prototype.getTempDataByType = function(popupType,popupData){
        if((popupType =='servoAngle')||(popupType =='servoStatus')){
            return { data:blocklyDatas.getServoIds(),attr:'servoId',showTips: MSG.speed_only_360_value,curData:popupData[0]};
        }
        if((popupType =='settingLight')||(popupType =='emotionDisplay')||(popupType =='sceneLightDisplay')){
            return { data:blocklyDatas.getLightsIds(),attr:'id',showTips: MSG.lights_tips,curData:popupData.lightArray[0]};
        }
        if(popupType =='rotateServo'){
            return { data:blocklyDatas.getCircleServosIds(),attr:'servoId',showTips: MSG.speed_no_value,curData:popupData[0]};
        }
        if(popupType =='infraredSensor'){
            return { data:blocklyDatas.getInfraredIds(),attr:'sensorId',showTips: MSG.infrared_tips,curData:popupData};
        }
        if(popupType =='touchSensor'){
           // return { data:blocklyDatas.getTouchIds(),attr:'sensorId',showTips: MSG.touch_tips_error,curData:popupData};
            return { data:blocklyDatas.getTouchIds(),attr:'sensorId',showTips: MSG.touch_tips,curData:popupData};
        }
        if(popupType =='gyroRotateDirection'){
            return { data:blocklyDatas.getGyroscopeIds(),attr:'gyroId',showTips: MSG.gyroscope_tips,curData:popupData};
        }
        return null;
    };
    // 当前舵机是否连接上舵机或者传感器
    PopupShow.prototype.isConnectEquipment = function(popupType,obj){
        if(obj===null || obj.data[0]==="ID"  || obj.curData[obj.attr] === 'ID'){
            return false;
        }
        return true;
    };
    // 蓝牙是否连接
    PopupShow.prototype.isConnectBlutooth = function(){
        var blueStatus =  blocklyDatas.getDataByKey('blueState');
        if(!window.blocklyObj){//windows 环境
            blueStatus =1;
        }
        if (!blueStatus || blueStatus =='0') {//未连接蓝牙，向后台发送命令
            dataService.command('blueConnect');
            return false;
        }
        return true;
    };
    // 展示系统提示
    PopupShow.prototype.showSystemPrompt = function(tipsContent,tipsType){
        eventsListener.trigger('systemPrompt',{tipsContent:tipsContent, tipsType:tipsType});
    };
    // 有无轮模式 false:无轮模式，true 有
    PopupShow.prototype.isHasCicleServos = function(){
        var condition_1 = blocklyDatas.getCircleServosIds().length == 1;//获取轮模式的舵机的数目
        var condition_2 = blocklyDatas.getCircleServosIds()[0] =='ID';
        return !(condition_1&&condition_2);
    };
    // 有无普通舵机模式 false:无轮模式，true 有
    PopupShow.prototype.isHasCommonServos = function(){
        var condition_1 = blocklyDatas.getServoIds().length == 1;//获取轮模式的舵机的数目
        var condition_2 = blocklyDatas.getServoIds()[0] =='ID';
        return !(condition_1&&condition_2);
    };
    PopupShow.prototype.handleServo = function (popupType,popupData,_modelType,funcName,tips) {
        if (_modelType == 0) {// 官方模型
            if(!funcName){//无轮模式 给出系统提示
                var obj = this.getTempDataByType(popupType,popupData);
                this.showSystemPrompt(obj.showTips,'error');
                return false;
            }  
        }else {// 自建模型
            if(!funcName){//无轮模式 给出设置轮模式
                var data = { 
                            title :MSG['porject_alert_tips'],
                            tips : tips,
                            type: "360Servo"
                        };
                var _callBack = function (){
                    ReactDOM.unmountComponentAtNode(document.getElementById("infoShower"));
                    $('#infoShower').empty();
                };
                jsxManage.renderComponentByCondition('blockly_info',data,_callBack,"infoShower");
                return false;
            }
        }
        return true;
    };
    PopupShow.prototype.handlePostureNamed = function (){
        var servoArr = blocklyDatas.getServoIds();
        var servoStr = servoArr.join(',');
        var pwerOnCommand = new RobatCommand('servoPowerOn|'+servoStr);
        pwerOnCommand.send();
    };
    // 弹出消息提示
    PopupShow.prototype.isShowAlert = function(popupType, popupData) {
        // 先去判断蓝牙有无连接蓝牙
        var popupTypeArr = ['settingLight','emotionDisplay','sceneLightDisplay','infraredSensor','touchSensor','gyroRotateDirection','postureNamed'];
        var isConnectEqui = true;
        if(this.contains(popupTypeArr,popupType)) {//包含需要检测蓝牙的popupkey
            var isConnecBLE = this.isConnectBlutooth();
            if(isConnecBLE) {
                if(popupType ==='postureNamed'){
                    this.handlePostureNamed();
                }else{
                    var obj = this.getTempDataByType(popupType,popupData);
                    isConnectEqui = this.isConnectEquipment(popupType,obj);
                    var showTips = isConnectEqui?"":obj.showTips;
                    if(!isConnectEqui){
                        this.showSystemPrompt(showTips,'error');
                    } 
                }
                return isConnectEqui;
            }else {
                return false;
            }
        }else {//不需要检测蓝牙的key 但是需要检测轮模式
            var _modelType = parseInt(blocklyDatas.getDataByKey('modelType'));
            var funcName = (popupType =='rotateServo')?this.isHasCicleServos() : this.isHasCommonServos();
            var tips = (popupType =='rotateServo')?MSG['no_circle_servo_info']: MSG['no_common_servo_info'];
            if(popupType =='rotateServo'||popupType =='servoAngle') {
                return this.handleServo(popupType,popupData,_modelType,funcName,tips);
            }
            return true;
        }
    };


    var popupShow = new PopupShow;
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = popupShow;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return popupShow; });
    } else {
        this.MessageDialog = popupShow;
    }
}).call(this);