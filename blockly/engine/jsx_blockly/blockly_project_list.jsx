var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('./../common/events_listener');
var StorageFactory = require('./../storage/base_storage');
var dataService = require('../service/data_service');
var blocklyDatas = require('./../service/blockly_datas');
var utils = require('./../common/utils/utils');
var blocklyUtils = require('./../common/utils/blockly_utils');
var CodeLanguage = require('./../common/program/program_init.js');
var sensorConditionValue = require('./../common/condition/sensor_condition_value');
var $ = require('jquery');
var BlocklyProjectList = React.createClass({
    getDefaultProps: function () {
        return null;
    },
    getInitialState: function () {
        return {
            xmlList: this.props.data.xmlList,
            curDeletexmlId: "",
            curDeleteTarget: null
        };
    },
    componentDidMount: function () {
        eventsListener.on('deleteXml', this._deleteXml);//删除选择的项目
        eventsListener.on('readXml', this._readXml);//读取选中的项目
        if (this.state.xmlList.length == 0) {
            $("#no_project_tip").show();
        }
    },
    componentWillUnmount: function () {
        eventsListener.off('deleteXml');
        eventsListener.off('readXml');
    },
    deleteXmlObjInXmlList: function (xmlId) {
        console.log("current delete project id:" + xmlId);
        var xmlList = this.state.xmlList;
        for (var i = 0; i < xmlList.length; i++) {
            var temp = xmlList[i];
            if (temp.xmlId == xmlId) {
                xmlList.splice(i, 1);//删除数组下标为i的元素
                dataService.curXmlObj.xmlId = "";
                break;
            }
        }
        return xmlList;
    },
    // 删除选择的xml
    _deleteXml: function (data) {
        var that = this;
        if (data) {
            var deleteXml_res = JSON.parse(decodeURI(data));
            console.log("End---" + deleteXml_res.retCode + "------result:" + deleteXml_res.result);
            if (deleteXml_res.retCode) {
                if (deleteXml_res.retCode === "0000") {
                    if (that.refs.deleteTest) {
                        var xmlId = dataService.curXmlObj.xmlId;
                        if (xmlId != "" && xmlId != null) {
                            console.log("current delete list length  before:" + that.state.xmlList.length + "delete project id:" + xmlId);
                            var newxmlList = that.deleteXmlObjInXmlList(xmlId);
                            that.setState({
                                xmlList: newxmlList
                            }, () => {
                                console.log("--->new xmlList");
                                console.log(that.state.xmlList);
                            });
                        }
                    }


                } else {
                    //关闭model弹出框
                    this._returnBlocly();
                    eventsListener.trigger('systemPrompt', {
                        tipsContent: MSG.porject_alert_content_02 + deleteXml_res.retMsg,
                        tipsType: 'error'
                    });
                }
            } else {
                //关闭model弹出框
                this._returnBlocly();
                eventsListener.trigger('systemPrompt', {tipsContent: MSG.porject_alert_content_03, tipsType: 'error'});
            }
        }
    },
    _xmlIsCorrect: function (readXml) {
        //检查当前xml文件是否正确
        var isCorrect = utils.xmlIsCorrect(readXml.xmlContent);
        if (isCorrect == true) {
            dataService.curXmlObj.xmlContent = readXml.xmlContent;
            this._returnBlocly();
            //清空工作空间
            // var temp_xml_rep = readXml.xmlContent.replace(/\#g/,"%23");
            console.log("获取的xml内容为：" + readXml.xmlContent);
            CodeLanguage.loadBlocks(readXml.xmlContent);
            //载入程序的时候更新那些有错误的ID
            blocklyUtils.iterateBlocks(function (block) {
                blocklyUtils.handleWorkspaceBlock(block);
            });
        } else {
            //关闭model弹出框
            this._returnBlocly();
            // 系统提示：项目文件读取错误
            eventsListener.trigger('systemPrompt', {tipsContent: MSG.porject_alert_content_05, tipsType: 'error'});
        }
    },
    // 读取选择的xml 并加载在项目里
    _readXml: function (data) {
        var  _that = this;
        var isXmlBus = blocklyDatas.getDataByKey("isXmlBus");
        if (!isXmlBus) {
            blocklyDatas.setKeyData("isXmlBus", true);
            if (data) {
                blocklyDatas.setKeyData('program_goto_touch_condition', undefined);
                blocklyDatas.setKeyData('program_goto_phone_condition', undefined);
                blocklyDatas.setKeyData('program_goto_infrared_condition', undefined);
                var readXml_res = JSON.parse(decodeURIComponent(data));
                console.log("End---" + readXml_res.retCode + "------result:" + readXml_res.result);
                if (readXml_res.retCode) {
                    if (readXml_res.retCode == "0000") {
                        if (readXml_res.result) {
                            var xml_detail_temp = readXml_res.result;
                            var readXml = {"xmlContent": ""};
                            if ((navigator.userAgent.toLowerCase().indexOf("ios") > 0 || navigator.userAgent.toLowerCase().indexOf("iphone") > 0) || (navigator.userAgent.toLowerCase().indexOf("ipad") > 0)) {
                                readXml.xmlContent = JSON.parse(xml_detail_temp).xmlContent;
                                _that._xmlIsCorrect(readXml);
                            } else if (navigator.userAgent.toLowerCase().indexOf("android") > 0) {
                                $.ajax({
                                    url: xml_detail_temp.xmlContent, context: document.body, success: function (data) {
                                        readXml.xmlContent = data;
                                        _that._xmlIsCorrect(readXml);
                                    }, error: function (data) {
                                        eventsListener.trigger('systemPrompt', {
                                            tipsContent: MSG.porject_alert_content_04,
                                            tipsType: 'error'
                                        });
                                    }
                                });
                            }

                        } else {
                            //关闭model弹出框
                            this._returnBlocly();
                            // 系统提示：项目文件读取错误
                            eventsListener.trigger('systemPrompt', {
                                tipsContent: MSG.porject_alert_content_03,
                                tipsType: 'error'
                            });
                        }
                    } else {
                        //关闭model弹出框
                        this._returnBlocly();
                        // 系统提示：项目文件读取错误
                        eventsListener.trigger('systemPrompt', {
                            tipsContent: MSG.porject_alert_content_02 + readXml_res.retMsg,
                            tipsType: 'error'
                        });
                    }

                } else {
                    //关闭model弹出框
                    this._returnBlocly();
                    // 系统提示：项目文件读取错误
                    eventsListener.trigger('systemPrompt', {
                        tipsContent: MSG.porject_alert_content_03,
                        tipsType: 'error'
                    });
                }
            }
        }

    },
    localReadXml: function (key) {
        // sensorConditionValue.removeAllCondition();
        blocklyDatas.setKeyData('program_goto_touch_condition', undefined);
        blocklyDatas.setKeyData('program_goto_phone_condition', undefined);
        var localStore = StorageFactory.createStorage('localStorage');
        var xmlValue = localStore.getItemByKey(key);
        var jsonValue = JSON.parse(xmlValue);
        jsonValue = {
            // "xmlContent" : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block><block type="program_goto_infrared_condition" id="bZq1%4@Nqn4wyYJ9edQ-" disabled="true" x="40" y="134"><field name="PROGRAM_BRANCH">15</field><field name="SENSOR">infrared</field><field name="VALUE">10</field><field name="SENSOR_ID">7</field><field name="OP">LTE</field><field name="DISTANCE">10</field></block></xml>',
            "xmlContent": '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block><block type="program_goto_infrared_condition" id="bZq1%4@Nqn4wyYJ9edQ-" x="40" y="134"><field name="PROGRAM_BRANCH">15</field><field name="SENSOR">infrared</field><field name="VALUE">10</field><field name="SENSOR_ID">7</field><field name="OP">&lt;=</field><field name="DISTANCE">10</field></block><block type="program_goto_infrared_condition" id="8beXT9E@w,4plYfYA?#@" disabled="true" x="118" y="209"><field name="PROGRAM_BRANCH">20</field><field name="SENSOR">infrared</field><field name="VALUE">10</field><field name="SENSOR_ID">1</field><field name="OP">LTE</field><field name="DISTANCE">10</field></block></xml>',
            "isDefault": true
        };
        var xmlContent = jsonValue['xmlContent'];
        localStore.loadProgram(key, xmlContent);
        //载入程序的时候更新那些有错误的ID                            
        blocklyUtils.iterateBlocks(function (block) {
            blocklyUtils.handleWorkspaceBlock(block);
        });
        this._returnBlocly();
    },
    // 加载选中的项目
    loadSelectProject: function (obj, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        console.log("加载项目数据------------------------------------->");
        if (window.blocklyObj) {
            dataService.curXmlObj.xmlId = obj.xmlId;//设置参数
            dataService.curXmlObj.xmlName = obj.xmlName;
            dataService.curXmlObj.isDefault = obj.isDefault;
            var param = {"xmlId": obj.xmlId};
            dataService.command("read", param);
        } else {
            this.localReadXml(obj.xmlId);
        }
    },
    // 删除选中的项目
    deleteProject: function (obj, e) {
        this.setState({curDeleteTarget: e.currentTarget});
        console.log("删除项目数据Id-------------------------------->" + obj.xmlId);
        if (window.blocklyObj) {
            dataService.curXmlObj.xmlId = obj.xmlId;
            //设置参数
            var param = {"xmlId": obj.xmlId};
            dataService.command("delete", param);
        } else {
            var that = e.currentTarget;
            var index = $(that).attr('data-index');
            var xmlList = this.state.xmlList;
            xmlList.splice(parseInt(index), 1);
            console.log(xmlList);
            var localStorage = StorageFactory.createStorage('localStorage');
            localStorage.deleteProgram(obj.xmlId);
            this.setState({
                xmlList: xmlList
            }, () => {
                if (this.state.xmlList.length == 0) {
                    $("#no_project_tip").show();
                }
            });
        }
    },

    // 创建project list 代码
    _renderProjectList: function () {
        var languageCode = blocklyDatas.getDataByKey('languageCode');
        var projectArr = [];
        var xmlList = this.state.xmlList;
        console.log(xmlList.length);
        for (var i = 0; i < xmlList.length; i++) {
            var class_name = "xmlNamebox flex";
            var item = xmlList[i];
            // 列表中默认案例具有国际化语言
            if (item.xmlNameLang !== undefined) {
                item.xmlName = item.xmlNameLang[languageCode]
            }
            projectArr.push(<li id={item.xmlId} className="project_box" key={"project" + i}>
                <div className={(item.isDefault ? "default_xml" : "" ) + " xmlNamebox flex"}
                     onClick={this.loadSelectProject.bind(this, item)}>{item.xmlName}</div>
                <span className={item.isDefault ? "project_delete_hide" : "project_delete"}
                      onClick={this.deleteProject.bind(this, item)} data-index={i} style={{display: 'none'}}>
                                    <i className="fa fa-trash-o"></i>
                                </span>
            </li>);
        }
        return projectArr;
    },
    _returnBlocly: function (e) {
        //当点击返回，新增按钮时，控制左边菜单按钮事件瞬时相应
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        this.props.onRemove();
    },
    createNewProject: function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        dataService.initCurXmlObj();
        //清空工作空间
        CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
        sensorConditionValue.removeAllCondition();
        blocklyDatas.setKeyData('program_goto_touch_condition', undefined);
        blocklyDatas.setKeyData('program_goto_phone_condition', undefined);
        blocklyDatas.setKeyData('program_goto_infrared_condition', undefined);
        this._returnBlocly();
    },
    showOkbutton: function (e) {
        $("#editButton_icon").hide();
        $("#okButton_icon").show();
        $("#project_list_ul li .project_delete").show();
    },
    showEditbutton: function (e) {
        $("#okButton_icon").hide();
        $("#editButton_icon").show();
        $("#project_list_ul li .project_delete").hide();
    },
    render: function () {
        var projectArr = this._renderProjectList();
        return <div className="blockly_background flex">
            <div className="blockly_popup">
                <div className="blockly_popuphead flex" ref="deleteTest">
                            <span className="return_blockly project_return flex" onClick={this._returnBlocly}>
                                <i className="fa fa-angle-left return_icon"></i>
                            </span>
                    <div className="model_title">{MSG.project_list_title}</div>
                    <span className="addButton_icon flex" onClick={this.createNewProject}>
                                <i className="fa fa-plus-square-o"></i>
                            </span>
                    <span id="editButton_icon" className="editButton_icon flex" onClick={this.showOkbutton}>
                                <i className="fa fa-pencil-square-o"></i>
                            </span>
                    <span id="okButton_icon" className="okButton_icon flex" onClick={this.showEditbutton}
                          style={{display: 'none'}}>
                                <i className="fa fa-check-square-o"></i>
                            </span>
                </div>
                <div className="blockly_popupbody blockly_popupbody2 flex">
                    <ul className="project_list_ul" id="project_list_ul">
                        {projectArr}
                    </ul>
                    <div id="no_project_tip" className="no_project_tip" style={{display: 'none'}}>
                        <span>{MSG.no_project_tip}</span>
                    </div>
                </div>
            </div>
        </div>;
    }

});
module.exports = BlocklyProjectList;