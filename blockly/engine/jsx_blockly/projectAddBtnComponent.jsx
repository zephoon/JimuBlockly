var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('./../common/events_listener');
var blocklyDatas = require('./../service/blockly_datas');
var RobatCommand = require('./../service/robat_command');
var jsxManage = require('./../service/jsx_manage_service.js');
var dataService = require('../service/data_service');
var ubtUtils = require('./../common/utils/utils');
var StorageFactory = require('./../storage/base_storage');
var ProjectAddBtnComponent = React.createClass({
     getDefaultProps : function() {
        return {
                'saveButton': { btnImgUrl : 'images\/index\/bt_save.png',btnClass : 'savebtn_box'}
        };
    },
    getInitialState : function(){
        return {
           popupKey : this.props.popupKey//区分按钮类型
        };
    },
    componentDidMount: function() {
        eventsListener.on('saveXml',this.saveProjectXml);
        eventsListener.on('editXml',this.editProjectXmlCallBack);
    },
    componentWillUnmount: function() {
        eventsListener.off('saveXml');
        eventsListener.off('editXml');
    },
    // 检查工作空间的初始化程序是否发生变化:true change,false nochange
    isWorkspaceProjectChange: function () {
        Blockly.DropDownDiv.hide();
        //判断当前是否有拖动程序块
        var currentSaveXml = blocklyDatas.getDataByKey('currentProgramXml');
        var defaultXml = blocklyDatas.getDataByKey('defaultXml');
        console.log("currentSaveXml--->"+currentSaveXml);
        console.log("defaultXml--->"+defaultXml);
        return !ubtUtils.xmlComparison(defaultXml,currentSaveXml);
    },
    // 判断项目是新增还是编辑0：新增，1：编辑
    checkProjectIsAddOrEdit:function(){
        var currentSaveXml = blocklyDatas.getDataByKey('currentProgramXml');
        var isDefault = dataService.curXmlObj.isDefault;// 1 就是default
        var xmlId = dataService.curXmlObj.xmlId;
        var xmlContent = dataService.curXmlObj.xmlContent;
        if(isDefault===true ||xmlId === ""||(xmlId !== "" && isDefault === true)){ //新增
            console.log("add project");
            return 0;
        }else{//编辑
            console.log("edit project");
            return 1;
        }
    },
    // 保存成功的回调函数
    saveProjectXml:function(data){
        var saveXMlRes = JSON.parse(decodeURI(data));
        if(saveXMlRes.retCode && saveXMlRes.retCode=="0000"){
            //得到当前保存的项目ID
            dataService.curXmlObj.xmlId =saveXMlRes.result.xmlId;
            dataService.curXmlObj.xmlContent = blocklyDatas.getDataByKey('currentProgramXml');
            eventsListener.trigger('systemPrompt',{tipsContent:dataService.curXmlObj.xmlName +MSG.porject_alert_content_06, tipsType:'tips'});
        }else if(saveXMlRes.retCode && saveXMlRes.retCode=="0001"){
            //关闭model弹出框
            eventsListener.trigger('systemPrompt',{tipsContent:MSG.porject_alert_content_01, tipsType:'error'});
        }else{
            //关闭model弹出框
            eventsListener.trigger('systemPrompt',{tipsContent:MSG.porject_alert_content_02+saveXMlRes.retMsg, tipsType:'error'});
        }
    },
    // 新增项目
    _addProject:function() {
        var _callback = function (data) {
            console.log("add project--->"+data.name);
            var curSaveXmlName = data.name==''?MSG.newProjectName:data.name;
            var currentXml = blocklyDatas.getDataByKey('currentProgramXml');
            dataService.curXmlObj.xmlName = curSaveXmlName;
            var jsonParam = {
                xmlName : curSaveXmlName,
                xmlContent : currentXml,
                blocklyVersion : window.getBlocklyVersion()
            };
            console.log(jsonParam);
            if(window.blocklyObj){
                dataService.command("add", jsonParam);
            }else{
                var xmlId = ubtUtils.genUuid(8,14);
                jsonParam.xmlId = xmlId;
                var jsonStringParam = JSON.stringify(jsonParam);    
                StorageFactory.createStorage('localStorage').saveProgram(jsonStringParam, xmlId);
            }
        };
        var initData = {
            title: MSG.add_project_pop_title,
            placeholder: MSG.add_project_placeholder,
            inputTips: MSG.variable_inputrule_msg
        };
        jsxManage.renderComponentByCondition('blocklySave',initData,_callback,"business_container");
    },
    // 编辑项目
    _editProject:function() {
        var currentSaveXml = blocklyDatas.getDataByKey('currentProgramXml');
        var xmlContent = dataService.curXmlObj.xmlContent;
        var isEqual = ubtUtils.xmlComparison(xmlContent,currentSaveXml);
        if(currentSaveXml !=undefined && !isEqual){
            console.log("currentProgramXml:"+currentSaveXml);
            console.log("dataService.curXmlObj.xmlContent:"+xmlContent);
            var blocklyVersion = window.getBlocklyVersion();
            //增加一个逻辑编程的程序的版本字段
            var ifreamParam = {
                xmlId:dataService.curXmlObj.xmlId,
                xmlName:dataService.curXmlObj.xmlName,
                xmlContent:currentSaveXml, 
                blocklyVersion:blocklyVersion
            };
            console.log("参数："+JSON.stringify(ifreamParam));
            if (window.blocklyObj) {
                dataService.command("edit",ifreamParam);
            } else {
                StorageFactory.createStorage('localStorage').saveProgram(JSON.stringify(ifreamParam), ifreamParam.xmlId);
            }
        }
    },

    _getProjectXmlListBySendCommond:function () {
        dataService.command('projectList',null,null);// 发送命令给后台调用相应的回调函数获取内置的xml内容
    },
    // click save button
    _clickSaveBtn:function(){
        console.log('_clickSaveBtn====================>');
        //运行中 按钮不可点击 programRunning
        if(blocklyDatas.getDataByKey("programRunning")) return;
        if (this.isWorkspaceProjectChange()) {//工作空间有变化
            if(this.checkProjectIsAddOrEdit()==0){//新增
                this._addProject();
            }else{//编辑
                this._editProject();
            }
        }else { //工作空间内容无变化
            eventsListener.trigger('systemPrompt',{tipsContent:MSG.project_has_no_change,tipsType:'tips'});
        }
    },
    editProjectXmlCallBack:function(data){
        if(data){
            var saveXMlRes = JSON.parse(decodeURI(data));
            //系统提示 类似U3D提示
            var tips_temp_obj = "";
            if(saveXMlRes.retCode && saveXMlRes.retCode=="0000"){
                //编辑成功
                dataService.curXmlObj.xmlContent = blocklyDatas.getDataByKey('currentProgramXml');
                //关闭model弹出框
                tips_temp_obj =dataService.curXmlObj.xmlName+" "+MSG.porject_alert_content_06;
                eventsListener.trigger('systemPrompt',{tipsContent:tips_temp_obj,tipsType:'tips'});
            }else{
                tips_temp_obj = MSG.porject_alert_content_02+saveXMlRes.retMsg;
                eventsListener.trigger('systemPrompt',{tipsContent:tips_temp_obj,tipsType:'error'});
            }
        }
    },
    render: function(){
        return  <div className={"function_btn_box flex "+this.props.saveButton.btnClass} onTouchEnd={this._clickSaveBtn}>
                    <img id="saveImg" src={this.props.saveButton.btnImgUrl}/>
                </div>;
    }
    
});
module.exports = ProjectAddBtnComponent;