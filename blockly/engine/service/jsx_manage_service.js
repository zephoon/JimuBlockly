/**
 * 封装创建所有的jsx 入口 
 * add by 朱黎明 2017-05-26
 */
'use strict';
; (function () {
    var React = require('react');
    var ReactDOM =  require('react-dom');
    var $ = require('jquery');
    var JsxManageService = function() {};
    JsxManageService.prototype.hideCourseDesc = function () {
        if($("#id_cousetask")){
            $("#id_cousetask").removeClass("active");
        }
    };
    /*
    *  ===========================开始模块组件引入 ===============================
    */
    // 蓝牙断开提示弹出框
    JsxManageService.prototype.getBlueDisConnectTips = function(){
        var Component = require('../../engine/jsx_common/blueDisContent.jsx');
        return Component;
    };
    // 单击，双击，长按 选择组件
    JsxManageService.prototype.getTouchSelectFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_touch_select.jsx');
        return Component;
    };
    // 手机平板倾斜
    JsxManageService.prototype.getPhoneSelectFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_phone_select.jsx');
        return Component;
    };
    // 触碰传感
    JsxManageService.prototype.getGyroSelectFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_gyro_select.jsx');
        return Component;
    };
    // 红外传感器
    JsxManageService.prototype.getInfraredSensorFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_infrared_select.jsx');
        return Component;
    };
    // 陀螺仪组件
    JsxManageService.prototype.getGyroRotateDirectionFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_gyro_select.jsx');
        return Component;
    };
    // 弹框提示 组件
    JsxManageService.prototype.getMessageTipFunc = function(){
        var Component = require('../../engine/jsx_common/message_tip.jsx');
        return Component;
    };
    /*
    *  ===========================运动模块组件引入 ===============================
    */
    // 设置舵机旋转角度
    JsxManageService.prototype.getServoAngleFunc = function(){
        var Component = require('../../engine/jsx_blockly/set_servo_angle.jsx');
        return Component;
    };
    // 360度旋转舵机
    JsxManageService.prototype.getRotateServoFunc = function(){
        var Component = require('../../engine/jsx_blockly/rotate_servo.jsx');
        return Component;
    };
    // 执行动作保存动作
    JsxManageService.prototype.getSaveActionFunc = function(){
        var Component = require('../../engine/jsx_blockly/save_action.jsx');
        return Component;
    };

    /*
    *  ===========================事件模块组件引入 ===============================
    */

    /*
    *  ===========================展示模块组件引入 ===============================
    */
    // 表情，情景灯 灯光组件
    JsxManageService.prototype.getLEDComponentFun = function(){
        var Component = require('../../engine/jsx_blockly/led_component.jsx');
        return Component;
    };
    /*
    *  ===========================感知模块组件引入 ===============================
    */
    // 运行时 红外 触碰 陀螺仪参数实时显示界面
    JsxManageService.prototype.getInfaredSensorShowerFun = function(){
        var Component = require('../../engine/jsx_blockly/block_infared_sensor_shower.jsx');
        return Component;
    };
    /*
    *  ===========================数学模块组件引入 ===============================
    */

    /*
    *  ===========================课程模块组件引入 ===============================
    */
    // 课程故事组件
    JsxManageService.prototype.getCourseStoryFunc = function(){
        var Component = require('../../engine/jsx_course/course_story.jsx');
        return Component;
    };
    // 课程标题组件
    JsxManageService.prototype.getCourseTitleFunc = function(){
        var Component = require('../../engine/jsx_course/course_title.jsx');
        return Component;
    };
    // 课程菜单锁组件
    JsxManageService.prototype.getCourseMenuLockFunc = function(){
        var Component = require('../../engine/jsx_course/menu_lock.jsx');
        return Component;
    };
    // 课程任务描述组件
    JsxManageService.prototype.getCourseTaskDescFunc = function(){
        var Component = require('../../engine/jsx_course/course_task.jsx');
        return Component;
    };
    // 课程视频组件
    JsxManageService.prototype.getCourseVideoFunc = function(){
        var Component = require('../../engine/jsx_course/block_video_player.jsx');
        return Component;
    };
    /*
    *  ===========================公共模块组件引入 ===============================
    */
    // 返回按钮组件
    JsxManageService.prototype.getReturnButtonFunc = function(){
        var Component = require('../../engine/jsx_blockly/returnbtn_component.jsx');
        return Component;
    };
    // 运行按钮组件
    JsxManageService.prototype.getRunButtonFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_run_btn.jsx');
        return Component;
    };
    //主界面蓝牙连接按钮
    JsxManageService.prototype.getBluetoothButtonFunc = function(){
        var Component = require('../../engine/jsx_common/bluetoothBtnComponent.jsx');
        return Component;
    };
    //主界面帮助按钮
    JsxManageService.prototype.getHelpBtnComponentFunc = function(){
        var Component = require('../../engine/jsx_common/helpBtnComponent.jsx');
        return Component;
    };
    //主界面swift code按钮
    JsxManageService.prototype.getSwiftBtnComponentFunc = function(){
        var Component = require('../../engine/jsx_blockly/swiftBtnComponent.jsx');
        return Component;
    };
    //主界面保存项目按钮
    JsxManageService.prototype.getProjectAddBtnComponentFunc = function(){
        var Component = require('../../engine/jsx_blockly/projectAddBtnComponent.jsx');
        return Component;
    };
    //主界面项目列表按钮
    JsxManageService.prototype.getProjectListBtnComponentFunc = function(){
        var Component = require('../../engine/jsx_blockly/projectListBtnComponent.jsx');
        return Component;
    };
    // 指引组件
    JsxManageService.prototype.getBlocklyGuideFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_guide.jsx');
        return Component;
    };
    //展示swift 面板弹出框组件
    JsxManageService.prototype.getSwiftPopupFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_show_swift.jsx');
        return Component;
    };
    // 系统提示组件（从屏幕上方滑出的那个提示组件）
    JsxManageService.prototype.getSystemTipFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_system_tips.jsx');
        return Component;
    };
    // 系统提示 :充电保护
    JsxManageService.prototype.getChargeProtectFunc = function(){
        var Component = require('../../engine/jsx_common/chargeProtectedComponent.jsx');
        return Component;
    };
    // blockly help 展示
    JsxManageService.prototype.getBlocklyHelpHtmlFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_help.jsx');
        return Component;
    };
    // blockly saveproject// blockly create variable 
    JsxManageService.prototype.getBlocklyInputPopupFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_input_popup.jsx');
        return Component;
    };
    //  项目列表
    JsxManageService.prototype.getProjectListFunc = function(){
        var Component = require('../../engine/jsx_blockly/blockly_project_list.jsx');
        return Component;
    };
    JsxManageService.prototype.getCourseAnserShowFunc = function(){
        var Component = require('../../engine/jsx_course/course_answer.jsx');
        return Component;
    };
    JsxManageService.prototype.getPlaySoundFunc = function(){
        var Component = require('../../engine/jsx_blockly/play_sound.jsx');
        return Component;
    };
    JsxManageService.prototype.getPlayToneFunc = function(){
        var Component = require('../../engine/jsx_blockly/play_tone.jsx');
        return Component;
    };
    JsxManageService.prototype.getTiemSelectFunc = function(){
        var Component = require('../../engine/jsx_blockly/block_time_select.jsx');
        return Component;
    };
    
    /**
     *   根据key值创建不同的组件
     *   @key   关键值唯一
     *   返回   引入不同的组件
     */ 
    JsxManageService.prototype.requireByKey = function(key){
        var componet_obj = {
            // blockly 菜单所有弹出框 业务弹出框组件
            'servoAngle': this.getServoAngleFunc,//设置舵机角度
            'rotateServo': this.getRotateServoFunc,//360度旋转舵机
            'postureNamed': this.getSaveActionFunc,//执行动作
            'blockly_info': this.getMessageTipFunc,//信息提示
            'emotionDisplay' : this.getLEDComponentFun,//led灯
            'sceneLightDisplay' : this.getLEDComponentFun,//secnelight灯
            'settingLight' : this.getLEDComponentFun,
            'deviceTilt' : this.getPhoneSelectFunc,//手机倾斜
            'touchSensor' : this.getGyroSelectFunc,//触碰传感
            'infraredSensor' : this.getInfraredSensorFunc,//红外传感器
            'gyroRotateDirection' : this.getGyroRotateDirectionFunc,
            'createVariable' : this.getBlocklyInputPopupFunc,//创建变量
            // blockly 主页面 初始化公共组件
            'returnButton' : this.getReturnButtonFunc,
            'runButton' : this.getRunButtonFunc,
            'helpButton' : this.getBluetoothButtonFunc,
            'bluetoothButton' : this.getHelpBtnComponentFunc,
            'swiftButton' : this.getSwiftBtnComponentFunc,
            'projectButton' : this.getProjectListBtnComponentFunc,
            'saveButton' : this.getProjectAddBtnComponentFunc,
            'guide' : this.getBlocklyGuideFunc,
            'swiftPopup' : this.getSwiftPopupFunc,
            'systemTips' : this.getSystemTipFunc,
            'blocklyHelpHtml' : this.getBlocklyHelpHtmlFunc,
            'blocklySave' : this.getBlocklyInputPopupFunc,
            'projectList' : this.getProjectListFunc,
            'soundEffects' : this.getPlaySoundFunc,
            'playTune' : this.getPlayToneFunc,
            'timeSelect' : this.getTiemSelectFunc,
            // 信息提示弹出组件
            'returnSaveTip' : this.getMessageTipFunc,//返回 保存提示
            'chargeProtectTip' : this.getChargeProtectFunc,//充电 保护提示
            'blueDisconnectTip' : this.getMessageTipFunc,//蓝牙 断开提示
            'infaredSensorShow':this.getInfaredSensorShowerFun,//红外陀螺仪等运行参数实时显示
            'touchSelect':this.getTouchSelectFunc,
            // 课程初始化组件
            'courseStory' : this.getCourseStoryFunc,
            'courseTitle' : this.getCourseTitleFunc,
            'courseMenuLock' : this.getCourseMenuLockFunc,
            'courseTaskDesc' : this.getCourseTaskDescFunc,
            'videoPlay':this.getCourseVideoFunc,
            'courseAnswerShow':this.getCourseAnserShowFunc//答案放大效果
        };
        return componet_obj[key]();
    };
    /**
     *   根据key值创建不同的组件
     *   @key   关键值唯一
     *   @data  传入的数据
     *   @callback   回调函数
     *   @id     组件挂靠的容器id
     *   返回   不同的组件
     */ 
    JsxManageService.prototype.renderComponentByCondition = function(key,data,callback,id){
        var Component = this.requireByKey(key);
        var removeComponent = function() {
            ReactDOM.unmountComponentAtNode(document.getElementById(id));
            document.getElementById(id).innerHTML = "";
        };
        var json = {
                        onRemove:removeComponent,
                        data:data,
                        callback:callback,
                        popupKey:key
        };
        this.hideCourseDesc();
        ReactDOM.render(React.createElement(Component,json), document.getElementById(id));
    };

    var jsxManage = new JsxManageService();

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = jsxManage;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return jsxManage; });
    } else {
        this.jsxManage = jsxManage;
    }
}).call(this);