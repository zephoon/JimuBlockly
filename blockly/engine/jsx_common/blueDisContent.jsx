var React = require('react');
var ReactDOM = require('react-dom');
var BlueDisContentComponent = React.createClass({
    getInitialState: function() {
        return {
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
        this.props.callBack("close");
        return this.props.onRemove();
    },
    render: function(){
        return   <div className="blockly_background flex messagetip_container">
                    <div className="blockly_popup">
                        <div className="blockly_popuphead flex">
                            <div className="model_title">
                                {MSG.title_bluetooth_connect}
                            </div>
                        </div>
                        <div  className="blockly_popupbody flex">
                            {MSG.close_blue}
                        </div>
                        <div className="blockly_popupfooter flex">
                            <div className="btn_cancel flex" onClick={this.goCancel}>{MSG.project_pop_cancel_btn}</div>
                            <div className="btn_ok flex" onClick={this.goSure}>{MSG.project_pop_ok_btn}</div>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = BlueDisContentComponent;