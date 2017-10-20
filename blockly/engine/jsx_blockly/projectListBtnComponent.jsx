var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('./../common/events_listener');
var blocklyDatas = require('./../service/blockly_datas');
var RobatCommand = require('./../service/robat_command');
var jsxManage = require('./../service/jsx_manage_service.js');
var dataService = require('../service/data_service');
var StorageFactory = require('./../storage/base_storage');
var ProjectListBtnComponent = React.createClass({
     getDefaultProps : function() {
        return {

                'projectButton': { btnImgUrl : 'images\/index\/bt_project.png',btnClass : 'projectbtn_box'},

        };
    },
    getInitialState : function(){
        return {
           popupKey : this.props.popupKey//区分按钮类型
        };
    },
    componentDidMount: function() {
        eventsListener.on('setXmlList',this._setXmlList);
    },
    componentWillUnmount: function() {
        eventsListener.off('setXmlList');
    },
    // 获取默认内置的xml程序块,设置在state变量里面,回调函数时候调用
    _setXmlList:function(data){
        console.log('_setXmlList'+'-------------------->被调用');
        var dataJson = JSON.parse(decodeURI(data));
        if(dataJson.retCode == "0000"){
            var iframeCallBackResult = null;
            if(navigator.userAgent.toLowerCase().indexOf("android") > 0){
                iframeCallBackResult = dataJson.result;
            }else{
                iframeCallBackResult = JSON.parse(dataJson.result);
            }
            this._createProjectList(iframeCallBackResult.xmlList);
        }else {
            // 系统提示：项目文件读取错误
            eventsListener.trigger('systemPrompt',{tipsContent:MSG.porject_alert_content_02+readXml_res.retMsg, tipsType:'error'});
        }
    },
    // 根据projectList 创建项目列表组件
    _createProjectList : function(xmlList){
        console.log("创建project list 列表------------------------>");
        var initData = {xmlList: xmlList};
        var languageCode = blocklyDatas.getDataByKey('languageCode');
        for (var i = 0 ; i < initData.xmlList.length; i++) {
            var objProjectData = initData.xmlList[i];
            if (objProjectData['xmlNameLang'] && !objProjectData['xmlNameLang'][languageCode]) {
                initData.xmlList[i]['xmlNameLang'][languageCode] = objProjectData['xmlNameLang']['en'];
            }
        }
        jsxManage.renderComponentByCondition('projectList',initData,null,"business_container");
    },
    // click project button
    _clickProjectBtn:function(){
        console.log('_clickProjectBtn====================>');
        //运行中 按钮不可点击 programRunning
        if(blocklyDatas.getDataByKey("programRunning")) return;
        /*//当点击返回，新增按钮时，控制左边菜单按钮事件瞬时相应
        blocklyDatas.setKeyData("stopEventStatus","1");*/
        Blockly.DropDownDiv.hide();
        if (window.blocklyObj){
            dataService.command('projectList',null,null);// 发送命令给后台调用相应的回调函数获取内置的xml内容
        }else{
            //项目列表
            data =[
                    {"xmlId": "ID02", "xmlName": "楼上的肯定是", "isDefault": 1, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID03", "xmlName": "楼上的肯定1是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID04", "xmlName": "楼上的肯定3是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID05", "xmlName": "楼上的肯4定是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID06", "xmlName": "楼上的肯6定是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID07", "xmlName": "楼上的肯7定是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID08", "xmlName": "楼上的肯77定是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID09", "xmlName": "楼上的肯8定是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID19", "xmlName": "楼上的肯8定是", "isDefault": 1, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"},
                    {"xmlId": "ID029", "xmlName": "楼上的肯8定是", "isDefault": 1, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12","xmlNameLang":{"en":"Mebot","zh-hans":"小黄人"}},
                    {"xmlId": "ID020", "xmlName": "楼上的肯定9是", "isDefault": 0, "createDate": "2016-09-23 11:00","updateDate":"2016-12-21 12:12"}
                ];
            this._createProjectList(data);
        }
    },
    render: function(){
        var obj = this.props[this.state.popupKey];
        return  <div className={"function_btn_box flex "+this.props.projectButton.btnClass} onTouchEnd={this._clickProjectBtn}>
                    <img id="saveImg" src={this.props.projectButton.btnImgUrl}/>
                </div>;
    }
    
});
module.exports = ProjectListBtnComponent;