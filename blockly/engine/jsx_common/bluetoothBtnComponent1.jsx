var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var blocklyDatas = require('../service/blockly_datas');
var RobatCommand = require('../service/robat_command');
var BlueDisContentComponent = require('./blueDisContent.jsx');
var eventsListener = require('./../common/events_listener');
var blocklyUtils = require('./../common/utils/blockly_utils');
var InteractiveMethod = require('../../project/ionicPopup/common/interactive_methods');
var jsxManage = require('./../service/jsx_manage_service.js');

var BluetoothComponent = React.createClass({
    getDefaultProps : function() {
        return {
            connectBleImg:'images/index/bt_bluetooth.png',
            noConnectBleImg:'images/index/bt_bluetooth_noconnet.png'
        };
    },
    getInitialState : function(){
        var blueState = this.getBlueState();
        return {
            // imgUrl:tempImgUrl,
            blueContentStates:blueState //蓝牙链接状态
        };
    },
    componentDidMount: function() {
        eventsListener.on('ConnectBLE',this._blueContentCallBack);
        eventsListener.on('DisconnectBLE',this._blueContentCallBack);
        eventsListener.on('_stopProgram',this._handleProgram);
    },
    componentWillUnmount: function() {
        eventsListener.off('ConnectBLE');
        eventsListener.off('DisconnectBLE');
        eventsListener.off('_stopProgram');
    },
    getBlueState:function(){
        if(!window.blocklyObj) {//浏览器环境
            blocklyDatas.setKeyData('blueState',1);
        }
        //蓝牙链接状态
        var blueState = blocklyDatas.getDataByKey('blueState');
        blueState = blueState == undefined?0:parseInt(blueState);
        return blueState;
    },
    //处理蓝牙断开时候，停止运行的程序和运转的机器
    _handleProgram:function(){
        console.log("我要停止运行的程序块 并且给机器发送停止的命令，此时不能算是通关");
        
        eventsListener.trigger("stop_execution");//停掉程序
        eventsListener.trigger("sendStopRobotCommond");//停掉机器
        if (Blockly.selected) { Blockly.selected.unselect(); }//程序块取消选中
    },
    _blueContentCallBack:function(data){
        //1，首先应该更新蓝牙状态，设置蓝牙值
        var param = JSON.parse(decodeURI(data));
        blocklyDatas.setKeyData('blueState',param.blueState);
        eventsListener.trigger('changeRunBtnState',param.blueState?true:false);
        this.setState({
            blueContentStates:param.blueState
        });
        this._refreshData(param);
        
        // var imgUrl = "images/index/bt_bluetooth.png";
        // if(param.blueState == 0 || param.blueState == false){//未连接
        //     imgUrl = "images/index/bt_bluetooth_noconnet.png";
        //     this._handleProgram();
        // }
        // if (this.isMounted()) {
        //     this.setState({imgUrl:imgUrl});
        // }
        // if(param.blueState == 0 || param.blueState == false){
        //     //有重新开始的块，停止后将标志清空
        //     blocklyDatas.setKeyData('wwGotoStart',false);
        //     //点击停止的时候清除掉注册的传感器条件监听
        //     if (window.blocklyObj && window.blocklyObj.unRegisterAllSensorObserver) {
        //         window.blocklyObj.unRegisterAllSensorObserver();
        //     }
        //     console.log('设置程序的运行状态为false');
        //     blocklyDatas.setKeyData("programRunning", false);
        //     blocklyDatas.setKeyData("programStopManner", true);
        //     blocklyUtils.setAllBlocksEditable(true);
        //     blocklyUtils.setAllBlocksMovable(true);
        //     // eventsListener.trigger('closeBackGround');
        //     //停止运行程序块
        //     programRunner.stopProgram(true);
        //     InteractiveMethod.setContainGoBack(false);
        // }
        //设置红外
        // blocklyDatas.setKeyData('infraredId',param.infraredId) ;
        // blocklyDatas.setKeyData('touchId',param.touchId) ;
        // blocklyDatas.setKeyData('gyroscopeId',param.gyroscopeId) ;
        // blocklyDatas.setKeyData('lights',param.lights) ;
        // //初始化将舵机字符串转化为数组
        // blocklyDatas.initServosId();
        // //初始化LED等为数组
        // blocklyDatas.initLightsId();
        // //初始化轮模式舵机ID为数组
        // blocklyDatas.initCircleServosId();
        // //初始化红外传感器ID为数组
        // blocklyDatas.initInfraredId();
        // //初始化触碰传感器ID为数组
        // blocklyDatas.initTouchId();
        // //初始化陀螺仪传感器ID为数组
        // blocklyDatas.initGyroScopeId();
        // if(param.blueState == 1 || param.blueState == true) { //连接
        //     blocklyUtils.iterateBlocks(function (block) {
        //         blocklyUtils.handleWorkspaceBlock(block);
        //     });
        // }
        // blocklyDatas.setKeyData('needRefresh', true);
    },
    _refreshData:function(param){
        blocklyDatas.setKeyData('infraredId',param.infraredId) ;
        blocklyDatas.setKeyData('touchId',param.touchId) ;
        blocklyDatas.setKeyData('gyroscopeId',param.gyroscopeId) ;
        blocklyDatas.setKeyData('lights',param.lights) ;
        //初始化将舵机字符串转化为数组
        blocklyDatas.initServosId();
        //初始化LED等为数组
        blocklyDatas.initLightsId();
        //初始化轮模式舵机ID为数组
        blocklyDatas.initCircleServosId();
        //初始化红外传感器ID为数组
        blocklyDatas.initInfraredId();
        //初始化触碰传感器ID为数组
        blocklyDatas.initTouchId();
        //初始化陀螺仪传感器ID为数组
        blocklyDatas.initGyroScopeId();
        if(param.blueState == 1 || param.blueState == true) { //连接
            blocklyUtils.iterateBlocks(function (block) {
                blocklyUtils.handleWorkspaceBlock(block);
            });
        }
        blocklyDatas.setKeyData('needRefresh', true);
    },
    // 点击蓝牙图标按钮触发
    blueContentStatesFun:function(){
        //1,运行中 按钮不可点击 programRunning
        if(blocklyDatas.getDataByKey("programRunning")) return;
        //2-1,蓝牙处于链接状态，弹出提示是否需要关闭蓝牙弹出框
        if(this.state.blueContentStates){
            var callBack_ = this.blueContentFun;
            var initData = {
                title: MSG.title_bluetooth_connect,
                tips: MSG.close_blue
            };
            jsxManage.renderComponentByCondition('blueDisconnectTip', initData, callBack_, 'messagetip_div');
        }else{
            //2-2,蓝牙处于断开状态直接链接蓝牙
            this.blueContentFun("connectblue"); 
        }
    },
    blueContentFun:function(param){
        console.log(param);
        var temp_command = new RobatCommand(param == "connectblue"?'ConnectBLE':'DisconnectBLE');
        temp_command.send();
    },
    render: function(){
        var blueImg = this.state.blueContentStates == 0 ? this.props.noConnectBleImg:this.props.connectBleImg;
        return  <div className="function_btn_box flex bluetooth_box" onTouchEnd={this.blueContentStatesFun}>
                   <img id="blueImg" src={blueImg}/>
                </div>;
    }
});
module.exports = BluetoothComponent;