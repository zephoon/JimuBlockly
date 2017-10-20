var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('./../common/events_listener');
var blocklyDatas = require('./../service/blockly_datas');
var jsxManage = require('./../service/jsx_manage_service.js');
var dataService = require('../service/data_service');
var HelpComponent = React.createClass({
     getDefaultProps : function() {
        return {
                'helpButton': { btnImgUrl : 'images\/index\/bt_help.png',btnClass : 'helpbtn_box'}
        };
    },
    getInitialState : function(){
        return {
           popupKey : this.props.popupKey//区分按钮类型
        };
    },
    componentDidMount: function() {

    },
    componentWillUnmount: function() {

    },
    _clickHelpBtn:function(){
        console.log('_clickHelpBtn====================>');
        if(blocklyDatas.getDataByKey("programRunning")) return;//运行中 按钮不可点击
        var platformType = blocklyDatas.getDataByKey("platformType");
        if(platformType == 1||platformType == 2){//教育版或者普通版
            console.log('blockly 帮助展示页面');
            var initData = dataService.getHelpList(window.LANGUAGE_CODE);
            if ((navigator.userAgent.toLowerCase().indexOf("ios") > 0 || navigator.userAgent.toLowerCase().indexOf("iphone") > 0) || (navigator.userAgent.toLowerCase().indexOf("ipad") > 0)) {
                if(window.blocklyObj != undefined && window.blocklyObj.helpUrl != undefined){
                    window.blocklyObj.helpUrl();
                }
            } else if (navigator.userAgent.toLowerCase().indexOf("android") > 0) {
                jsxManage.renderComponentByCondition('blocklyHelpHtml',initData,null,"business_container");
            }
        }
        if(platformType == 3){//课程版
            eventsListener.trigger('showCourseTask');
        }
    },
    render: function(){
        return  <div className={"function_btn_box flex "+this.props.helpButton.btnClass} onTouchEnd={this._clickHelpBtn}>
                    <img id="saveImg" src={this.props.helpButton.btnImgUrl}/>
                </div>;
    }
    
});
module.exports = HelpComponent;