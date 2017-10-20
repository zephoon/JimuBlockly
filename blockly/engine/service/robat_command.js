/**
 * 封装发送指令
 */
'use strict';
; (function () {

  var programManager = require('./../common/program/program_manager');
  var utils = require('./../common/utils/utils');
  var blocklyDatas = require('./blockly_datas');
  var Timer = require('./../common/timer/timer');
  function RobotCommand(params) {
      this.params = params;
      
  }
  // 停止轮模式
  RobotCommand.prototype.sendStopCircle = function(){
    var servoArr = blocklyDatas.getCircleServosIds();
    var outPutArr = [];
    if(servoArr&&servoArr.length>1){
      for (var i = 0 ; i < servoArr.length; i++ ) {
          var tempObj = {};
          //舵机ID,初始化赋值为默认值
          tempObj.servoId = servoArr[i];
          tempObj.direction = '3';
          tempObj.speed = 'M';
          outPutArr.push(tempObj);
      }
      this.params = 'servoSetbySpeed|'+ JSON.stringify(outPutArr);
      console.log(this.params);
      this.send();
    }
  };
  RobotCommand.prototype.send = function() {  
     console.log('send command:' + this.params);
     var timer = new Timer();
     timer.start();
     blocklyDatas.setKeyData('currentTime',timer);
     if (window.blocklyObj && window.blocklyObj.logInfo) {
       window.blocklyObj.logInfo('block send command:' + this.params);
     }
     var branchId = programManager.getProgramRunnerIndex();
     //添加命令属于哪条程序分支
     //if (utils.getPlatformString() == 'android') {//如果是android平台，则添加分支参数，否则不用添加
         this.params +='|{"branchId":"'+branchId+'"}';  
     //}
     if (document) {
       var iFrame = document.createElement("iframe");     
       // 默认采用jimu://协议头
       iFrame.setAttribute("src", encodeURI("jimu://"+this.params));

       // 如果是iOS平台,就采用https://js.jimu.com/
       if(goog.userAgent.IPHONE || goog.userAgent.IPAD){
         iFrame.setAttribute("src", encodeURI("https://js.jimu.com/"+this.params));
       } 
       iFrame.setAttribute("style", "display:none;");
       document.body.appendChild(iFrame);
       iFrame.parentNode.removeChild(iFrame);
       iFrame = null;
     } else {
       console.log('debug send command:' + this.params);
    }      
  };
  RobotCommand.executeByCmd = function(params) {
    var branchId = programManager.getProgramRunnerIndex();
    params +='|{"branchId":"'+branchId+'"}';  
    if (goog.userAgent.IPHONE || goog.userAgent.IPAD) {
        this.params = 'https://js.jimu.com/'+ params;
    } else {
        this.params = 'jimu://'+ params;
    }
    //发送命令
    if (window.blocklyObj && window.blocklyObj.executeByCmd) {
        window.blocklyObj.executeByCmd(this.params);
    }
  };

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = RobotCommand;
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return RobotCommand; });
  } else {
    this.robotCommand = RobotCommand;
  }
}).call(this);