var React = require('react');
var ReactDOM = require('react-dom');
var jsxManage = require('./../service/jsx_manage_service.js');
var blocklyDatas = require('./../service/blockly_datas');
var dataService = require('./../service/data_service');
var ubtUtils = require('./../common/utils/utils');
var ReturnbtnComponent = React.createClass({
    getDefaultProps : function () {
        return {
            returnBtnTips : {
                title : MSG.exit_popup_title,
                tips : MSG.exit_tips
            }
        };
    },
    getInitialState : function(){
        var platformType = blocklyDatas.getDataByKey("platformType");
        return {
            platformType : platformType
        };
    },
    componentDidMount: function() {
    },
    handleReturn:function() {
        var isXmlChange = this._isWorkspaceXmlChange();
        //判断平台
        if(this.state.platformType == 3||(this.state.platformType!=3&&isXmlChange==false)){//课程版直接退出，其他版 但xml 无变化直接退出
            this._sendReturnCommand();
        }else {
            Blockly.DropDownDiv.hide();//去掉数字键盘
            if(blocklyDatas.getDataByKey("programRunning")) return;//判断程序是否处于运行状态 运行中 不做处理
            var that = this;
            var callback = function(){
                that._sendReturnCommand();
            };
            jsxManage.renderComponentByCondition('returnSaveTip',this.props.returnBtnTips,callback,"messagetip_div");
        }
    },
    // 判断工作空间的xml是否有变化 true 无变化（直接返回），false 有变化（普通版教育版需要提示保存）
    _isWorkspaceXmlChange:function(){
        var isXmlChange = false;//默认无变化
        var current_editobj = blocklyDatas.getDataByKey('currentProgramXml');//当前编辑程序块什生成的 xml内容
        var defaultXml = blocklyDatas.getDataByKey('defaultXml');//默认的只有开始的程序块时
        var loadProgramXml = dataService.curXmlObj.xmlContent;//载入的程序块时
        var compare_tempobj = (dataService.curXmlObj.xmlId == "") ? defaultXml : loadProgramXml;//等待被比较的对象
        if(current_editobj!=undefined&&current_editobj!=''){
            console.log("current_editobj----->"+current_editobj);
            console.log("compare_tempobj----->"+compare_tempobj);
            var compareResult = ubtUtils.xmlComparison(compare_tempobj,current_editobj);
            isXmlChange = compareResult?false :true;
        }
        return isXmlChange;
    },
    // 发送返回命令
    _sendReturnCommand: function(){
        dataService.command("closeWindow",null);
    },
    render: function(){
        return <div className="returnbtn_box flex" onTouchEnd={this.handleReturn}>
            <div className="returnbtn_innerbox flex">
                <span className="fa fa-angle-left return_icon"></span>
                <span id="go_back" className="blocklyTreeLabel goback_btn_patch">{MSG.index_back}</span>
            </div>
        </div>;
    }
});
module.exports = ReturnbtnComponent;