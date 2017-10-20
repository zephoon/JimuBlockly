var React = require('react');
var ReactDOM = require('react-dom');
var RobatCommand = require('./../service/robat_command');
var MessageTipComponent = React.createClass({
    getInitialState : function(){
        return {
            popupKey : this.props.popupKey,
            data : this.props.data,
            callback :this.props.callback
        };
    },
    goCancel: function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return this.props.onRemove();
    },
    goSure: function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        this.props.callback();
        if(this.state.data.type !== undefined && this.state.data.type === "360Servo"){
            var setServoModeCommand = new RobatCommand('setServoMode');
            //调用弹出轮模式和普通舵机的切换页面
            setServoModeCommand.send();
        }
        return this.props.onRemove();
    },
    render: function(){
        var okBtnText = MSG.project_pop_ok_btn;
        if(this.state.data.type !== undefined){
            okBtnText = MSG['set_servo_mode'];
        }
        return  <div className="blockly_background flex messagetip_container">
                    <div className="blockly_popup">
                        <div className="blockly_popuphead flex">
                            <div className="model_title">
                                {this.props.data.title}
                            </div>
                        </div>
                        <div className="blockly_popupbody flex">
                            {this.props.data.tips}
                        </div>
                        <div className="blockly_popupfooter flex">
                            <div className="btn_cancel flex" onClick={this.goCancel}>{MSG.project_pop_cancel_btn}</div> 
                            <div className="btn_ok flex" onClick={this.goSure}>{okBtnText}</div>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = MessageTipComponent;