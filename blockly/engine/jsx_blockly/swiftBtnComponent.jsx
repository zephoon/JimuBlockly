var React = require('react');
var ReactDOM = require('react-dom');
var blocklyDatas = require('./../service/blockly_datas');
var jsxManage = require('./../service/jsx_manage_service.js');
var SwiftComponent = React.createClass({
     getDefaultProps : function() {
        return {
                'swiftButton': { btnImgUrl : 'images\/index\/bt_swift.png',btnClass : 'swiftbtn_box'}
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
    // click wift button  
    _clickSwiftBtn:function(){
        console.log('_clickSwiftBtn====================>');
        Blockly.DropDownDiv.hide();
        if(blocklyDatas.getDataByKey("programRunning")) return;
        jsxManage.renderComponentByCondition('swiftPopup',null,null,"infoShower");
    },
    render: function(){
        return  <div className={"function_btn_box flex "+this.props.swiftButton.btnClass} onTouchEnd={this._clickSwiftBtn}>
                    <img id="saveImg" src={this.props.swiftButton.btnImgUrl}/>
                </div>;
    }
    
});
module.exports = SwiftComponent;