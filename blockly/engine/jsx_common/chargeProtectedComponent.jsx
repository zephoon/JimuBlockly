var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ChargeProtectedComponent = React.createClass({
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
        this.props.callback();
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return this.props.onRemove();
    },
    render: function(){
        return   <div className="blockly_background flex messagetip_container">
                    <div className="blockly_popup" style={{width:"50%"}}>
                        <div  className="blockly_popupbody flex">
                            {this.props.data.content}
                        </div>
                        <div className="blockly_popupfooter flex">
                            <div className="btn_ok flex" onTouchEnd={this.goSure}>{this.props.data.btnText}</div>
                        </div>
                    </div>
                </div>;
    }
});
module.exports = ChargeProtectedComponent;