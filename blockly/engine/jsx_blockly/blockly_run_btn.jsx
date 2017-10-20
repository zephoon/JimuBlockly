var React = require('react');
var ReactDOM = require('react-dom');
var programRunner = require('../common/program/program_runner');
var programManager = require('../common/program/program_manager');
var ubtBlocklyUtils = require('../common/utils/blockly_utils');
var eventsListener = require('../common/events_listener');
var codeLanguage = require('../common/program/program_init');
var InfraredSensor = require('../../project/ionicPopup/common/infrared_sensor');
var InteractiveMethod = require('../../project/ionicPopup/common/interactive_methods');
var RobatCommand = require('../service/robat_command');
var blocklyDatas = require('../service/blockly_datas');
var Background = require('./blockly_run_bg.jsx');
var jsxManage = require('./../service/jsx_manage_service.js');
var $ = require('jquery');
var _ = require('lodash');
var SensorCondition = require('./../common/condition/sensor_condition');

var ProgCtrlButton = React.createClass({
    getInitialState: function () {
        console.log(this.props.data);
        return {
            isRunning: this.props.data.isRunning
        }
    },
    componentDidMount: function () {
        console.log("componentDidMount 绑定事件");
        eventsListener.on('changeRunBtnState', this.updateRunBtnState);
        eventsListener.on('canvas changed', this._saveProgram);
        eventsListener.on("stop_execution", this._stopProgramExecution);
        eventsListener.on("start_background", this._startBackGround);
        eventsListener.once("infnite_loop_error", this._infniteLoopError);
        eventsListener.on("control_block_status", this._controlBlockStatus);
        eventsListener.on('sendStopRobotCommond', this.stopRobotCommond);
        eventsListener.on('renderEndStory', this._renderEndStory);
        eventsListener.on('stopCircleCommond', this._stopCicleCommond);
        eventsListener.on('phoneConditionChange', this._phoneConditionChange);
        eventsListener.on('renderEndStory', this._renderEndStory);
    },
    componentWillUnmount: function () {
        eventsListener.off('changeRunBtnState');
        eventsListener.off('canvas changed');
        eventsListener.off("stop_execution");
        eventsListener.off("start_background");
        eventsListener.off("infnite_loop_error");
        eventsListener.off("control_block_status");
        eventsListener.off('sendStopRobotCommond');
        eventsListener.off('renderEndStory');
        eventsListener.off('stopCircleCommond');
        eventsListener.off('phoneConditionChange');
        
    },
    // 01,创建结束故事
    _renderEndStory: function () {
        var initData = {type: 'endStory'};
        jsxManage.renderComponentByCondition('courseStory', initData, null, 'course_story');
    },
    // 02,控制程序块的编辑和移动
    _controlBlockStatus: function (flag) {
        //设置程序块是否可编辑／移动
        ubtBlocklyUtils.setAllBlocksEditable(flag);
        ubtBlocklyUtils.setAllBlocksMovable(flag);
    },
    // 03,无限循环块报错提示
    _infniteLoopError: function () {
        //回掉函数
        var callBack_ = function(){};
        var _data =  {
                        "title":"",
                        "content":MSG['id_infinite_loop_error'],
                        "btnText":MSG['porject_alert_btnText']
        };
        //弹出框显示内存耗尽
        jsxManage.renderComponentByCondition('chargeProtectTip',_data,callBack_,"messagetip_div");
    },
    // 获取最新的phonecondition
    _phoneConditionChange: function () {
      var programContent = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(codeLanguage.workspace));
      var existCondition = [];
      if(programContent.indexOf('>up>') > -1){
        existCondition.push('up');
      }
      if(programContent.indexOf('>down<') > -1){
        existCondition.push('down');
      }
      if(programContent.indexOf('>right<') > -1){
        existCondition.push('right');
      }
      if(programContent.indexOf('>left<') > -1){
        existCondition.push('left');
      }
      if(programContent.indexOf('>swing<') > -1){
        existCondition.push('swing');
      }
      blocklyDatas.setKeyData('program_goto_phone_condition', existCondition);
      blocklyDatas.setKeyData('needRefresh', true);
    },
    // 04,保存更新xml 内容
    _saveProgram: function () {
        // console.log("_saveProgram 更新xml内容");
        if (blocklyDatas.getDataByKey("platformType") == 3) {
            $("#id_cousetask").removeClass('active');
        }
        var currentProgramContent = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(codeLanguage.workspace));
        console.log("_saveProgram 更新xml内容:" + currentProgramContent);
        blocklyDatas.setKeyData('currentProgramXml', currentProgramContent);
        // this._phoneConditionChange();
    },
    // 05,显示菜单背景遮罩层
    _startBackGround: function () {
        ReactDOM.render(<Background />, document.getElementById('popupWindow'));
    },
    // 06,异常调用程序停止
    _stopProgramExecution: function () {
        console.log('异常停止程序的执行');
        programRunner.stopProgram(true);
        ubtBlocklyUtils.setAllBlocksEditable(true);
        ubtBlocklyUtils.setAllBlocksMovable(true);
        eventsListener.trigger('closeBackGround');
        // // (如果调用过showexception 那么就不要发送stoprobot命令了，因为只要showException被执行后，所有的命令发过去都返回0，包括stoprobot)：
        if(blocklyDatas.getDataByKey('canSendStoprobot')){
            this.stopRobotCommond();
        }
    },
    // 07,调用停止机器人命令
    stopRobotCommond:function(){
        console.log('调用啦-停止机器人的命令-------------->');
        var stopRobatCommand = new RobatCommand('stopRobot');
        stopRobatCommand.send();
    },
    // 15,获取workspace code；
    getWorkSpaceCode:function(){
        var startBlock = ubtBlocklyUtils.findBlocksByType('program_start');
        var code = ubtBlocklyUtils.blockToCodeInWorkspace(startBlock[0]);
        return code;
    },
    // 14,程序中是否存在无限循环的程序块
    isExistInfinite_loopInProgram:function(code){
        // var code = this.getWorkSpaceCode();
        if(code!=undefined){
            if ((code.indexOf('LoopTrap') > -1)&&(code.indexOf('while') > -1)) {
                blocklyDatas.setKeyData('Infinite_loop', true);
                return true;
            } else {
                blocklyDatas.setKeyData('Infinite_loop', false);
                return false;
            }
        }else{
            return false;
        }
    },
    // 13.设置程序块是否可编辑／移动
    _controlBlockStatus: function (flag) {
        ubtBlocklyUtils.setAllBlocksEditable(flag);
        ubtBlocklyUtils.setAllBlocksMovable(flag);
    },
    // 12.程序中是否存在重新开始的块
    isExistwwGotoStartInProgram:function(code){
        // var code = this.getWorkSpaceCode();
        if(code!=undefined){
            if (code.indexOf('wwGotoStart') > -1) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    },
    // 10，注册红外，触碰，手机倾斜传感器条件监听器
    _addSensorConditionListener: function () { 
        var conditionSensorBlock = ubtBlocklyUtils.findBlocksByType('program_goto_phone_condition');
        var touchSensorBlock = ubtBlocklyUtils.findBlocksByType('program_goto_touch_condition');
        var infraredSensorBlock = ubtBlocklyUtils.findBlocksByType('program_goto_infrared_condition');
        conditionSensorBlock = _.union(conditionSensorBlock, touchSensorBlock);
        conditionSensorBlock = _.union(conditionSensorBlock, infraredSensorBlock);
        var len = conditionSensorBlock.length;
        var conditionArray = [];
        if (len == 0) return ;
        for (var i = 0; i < len; i++) {
            var block = conditionSensorBlock[i];
            if (block.disabled == true) {
                continue;
            }
            var sensor = block.getFieldValue('SENSOR');
            var operator = block.getFieldValue('OP');//操作符 > < = <= >=
            var value = block.getFieldValue('VALUE');  //红外传感器的值
            var sensorId = block.getFieldValue('SENSOR_ID'); //红外传感器ID
            var branchId = block.getFieldValue('PROGRAM_BRANCH'); //当前分支ID
            var sensorCondition = new SensorCondition(sensor, operator, value, sensorId, branchId);
            conditionArray.push(sensorCondition);
        }
        if (window.blocklyObj && window.blocklyObj.registerSensorObservers) {
            var conditionParam = JSON.stringify(conditionArray);
            console.log('----------添加红外，触碰，手机倾斜传感器条件监听器 定时器------------------------->',conditionParam);
            window.blocklyObj.registerSensorObservers(conditionParam);
        } else {
            console.log('----------后台registerSensorObservers方法不存在 定时器----------------------->',JSON.stringify(conditionArray));
        }
    },
    // 9，更新运行按钮的状态
    updateRunBtnState:function(state){
        this.setState({
            isRunning: state
        });
        //如果存在重新开始的块，不要调用停止机器人的命令
        if (!state && !blocklyDatas.getDataByKey('wwGotoStart')) {
            console.log('调用停止机器人的命令');
            var stopRobatCommand = new RobatCommand('stopRobot');
            stopRobatCommand.send();
        }   
    },
    // 8,程序错误提示
    showSystemPrompt:function(){
        var data = {tipsContent: MSG['block_error_info'], tipsType: 'error'};
        eventsListener.trigger('systemPrompt', data);
    },
    // 设置是否存在重新开始块标识
    setwwGotoStartState:function(param){
        blocklyDatas.setKeyData('wwGotoStart', param);
    },
    // 设置是否存在无限循环块标识
    setInfinite_loopState:function(param){
        blocklyDatas.setKeyData('Infinite_loop', param);
    },
    // 7,程序比对出 错误的地方
    handleWrongProgram:function(errorBlockId){
        codeLanguage.workspace.traceOn(true);
        codeLanguage.workspace.highlightBlock(errorBlockId);//高亮错误的程序块
        // 错误block块对象暂时没有用到，以后要用到具体的错误块位置提示时候需要用到
        // var errorBlock = codeLanguage.workspace.getBlockById(errorBlockId);
        this.showSystemPrompt();// 课程程序答案错误提示
        //更新运行按钮的状态
        this.updateRunBtnState(false);
    },
    // 6,课程平台判断xml程序是否正确
    comPareCurrentAndstandardProgram:function(standardProgram,currentProgramXml){
        var errorBlockId = window.blocklyObj.verifyCourse(standardProgram, currentProgramXml);
        if (errorBlockId && isNaN(errorBlockId)) {  //匹配到具体的错误的blockID
            console.log('匹配到具体的错误的blockID---->'+errorBlockId);
            this.handleWrongProgram(errorBlockId);
            return false;
        } else if (errorBlockId == '0') {  //匹配成功
            console.log('匹配成功----->match OK');
            return true;
        } else if (errorBlockId == '-1') {  //程序不完整
            console.log('程序不完整--->params exception');
            this.handleWrongProgram(errorBlockId);
            return false;
        }
    },
    // 5，获取课程数据
    getCourseData:function(){
        var courseData = require('../service/course_data');
        return courseData.getCourseData();
    },
    // 4，获取蓝牙状态
    getBLEState:function(){
        var blueState = blocklyDatas.getDataByKey('blueState');
        if (window.blocklyObj == undefined) {
            blueState = 1;
        }
        return parseInt(blueState);
    },
    // 3, 发送蓝牙连接
    sendConnectBLE:function(){
        var blueContent = new RobatCommand('ConnectBLE');
        blueContent.send();
    },
    // 2，获取平台（如果是课程平台收起右边的任务描述）,返回平台参数
    getPlatformType:function(){
        var platformType = blocklyDatas.getDataByKey('platformType');
        return parseInt(platformType);
    },
    // 1,收起展开的左边菜单
    closeLeftMenu:function(){
        var toolboxExtension = require('../adapter/toolbox_extension');
        $(".blocklyFlyout").css("display", "none");
        Blockly.terminateDrag_();
        Blockly.hideChaff();
        Blockly.DropDownDiv.hide();
        toolboxExtension.nodeClick();
    },
    // a 开启程序运行
    handleRunProgram:function(){
        blocklyDatas.setKeyData("stopBtnClick", false);
        blocklyDatas.setKeyData("programStopManner", false);
        //a1,收起左边菜单
        this.closeLeftMenu();
        //a3,获取蓝牙状态
        //a3-1,蓝牙没连接发送蓝牙连接
        if(this.getBLEState() == 0){
            this.sendConnectBLE();
        }else{//a3-2,蓝牙已经连接开始启动程序
            var compareResult = true;
            if (window.blocklyObj && window.blocklyObj.verifyCourse && this.getPlatformType() == 3) {
                //a4,比对程序并进行相应处理
                var data = this.getCourseData();
                var currentProgram = blocklyDatas.getDataByKey('currentProgramXml');
                compareResult = this.comPareCurrentAndstandardProgram(data.standardProgram,currentProgram);
            }
            if(compareResult){//比对正确程序处理
                this.programRunnerStart();
            }
        }
    },
    // main 正式开始运行程序块
    programRunnerStart:function(){
        //a7，增加传感器条件的监听
        this._addSensorConditionListener();
        // a5,启动左边菜单背景遮罩层
        this._startBackGround();
        // a6，设置工作空间块不可编辑移动
        this._controlBlockStatus(false);
        // a8，正式运行程序块
        var code = this.getWorkSpaceCode();
        this.setCodeFlag(code);
        programRunner.programRunnerIndex = 1;
        programManager.setProgramRunnerIndex(1);//设置主线程ID
        programRunner.startProgram(code);//开始运行程序块
    },
    setCodeFlag:function(code){
        // 查看是否存在重新开始块，并设置标识
        var isExist = this.isExistwwGotoStartInProgram(code);
        this.setwwGotoStartState(isExist);
        // 查看是否存在无限循环块，并设置标识
        var infinite_loop = this.isExistInfinite_loopInProgram(code);
        this.setInfinite_loopState(infinite_loop);
    },
    // b 停止程序运行
    handleStopProgram:function(){
        blocklyDatas.setKeyData("stopBtnClick", true);
        var code = this.getWorkSpaceCode();
        this.setCodeFlag(code);
        this.updateRunBtnState(false);
        //b1,点击停止的时候清除掉注册的传感器条件监听
        if (window.blocklyObj && window.blocklyObj.unRegisterAllSensorObserver) {
            window.blocklyObj.unRegisterAllSensorObserver();
        }
        // b2,设置程序的运行状态为false
        blocklyDatas.setKeyData("programRunning", false);
        blocklyDatas.setKeyData("programStopManner", true);
        // b3,解锁程序块不可编辑移动的控制
        this._controlBlockStatus(true);
        // b4,关闭菜单背景遮罩层
        eventsListener.trigger('closeBackGround');
        // b7,停止运行程序块
        programRunner.stopProgram(true);
        // 停止机器人动作
        this.stopRobotCommond();
        // b8,清空一些标识
        this.clearSomeTag();
        // 清空块选中的状态
        this.resetSelectState();
    },
    // 停止轮模式
    _stopCicleCommond:function(){
        console.log('调用停止轮模式的命令-------------->');
        var stopRobatCommand = new RobatCommand();
        stopRobatCommand.sendStopCircle();
    },
    // 清空一些标识
    clearSomeTag:function(){
        InteractiveMethod.setContainGoBack(false);
    },
    // 清空块选中的状态
    resetSelectState:function(){
        if (Blockly.selected) {//清空块选中状态
            Blockly.selected.unselect();
        }
    },
    render: function(){
        return  <div className="executebtn_box flex">
                    <div className={"execute_btn flex "+(this.state.isRunning?"hide":" ")} onClick={this.handleRunProgram} >
                        <i className="icon ion-play fa fa-play "></i>
                        <span>{MSG.id_start_info}</span>
                    </div>
                    <div className={"execute_btn flex "+(this.state.isRunning?" ":" hide")} onClick={this.handleStopProgram}>
                        <i className="icon ion-stop fa fa-stop"></i>
                        <span>{MSG.id_stop_info}</span>
                    </div>
                </div>;
    }

});
module.exports = ProgCtrlButton;
