var React = require('react');
var ReactDOM = require('react-dom');
var InputComponent = require('./inputComponent.jsx');
var $ = require('jquery');
// blockly 输入框 弹出框组件
var BlocklyInputPopup= React.createClass({
    getInitialState: function() {
        return {
            callback:this.props.callback,
            title:this.props.data.title,
            placeholder: this.props.data.placeholder,
            inputTips: this.props.data.inputTips,
            popupKey : this.props.popupKey,
            maxInputLength:30
        };
    },
    goCancel:function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return this.props.onRemove();
    },
    goSure:function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        var inputContent = this.refs.getInputValue.outPutValue();
        console.log("当前输入值信息:"+inputContent);
        this.state.callback({name:inputContent});
        return this.props.onRemove();
    },
    render: function(){
        return   <div className="blockly_background flex">
                    <div className="blockly_popup">
                        <div className="blockly_popuphead flex">
                            <div className="model_title">
                                {this.state.title}
                            </div>
                        </div>
                        <div  className="blockly_popupbody flex">
                            <InputComponent ref="getInputValue" 
                                placeholder={this.state.placeholder} 
                                inputTips={this.state.inputTips.replace('%1', this.state.maxInputLength).replace('%2', this.state.maxInputLength/2)} maxInputLength={this.state.maxInputLength} ></InputComponent>
                        </div>
                        <div className="blockly_popupfooter flex">
                            <div className="btn_cancel flex" onClick={this.goCancel}>{MSG.project_pop_cancel_btn}</div>
                            <div className="btn_ok flex" onClick={this.goSure}>{MSG.project_pop_ok_btn}</div>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = BlocklyInputPopup;