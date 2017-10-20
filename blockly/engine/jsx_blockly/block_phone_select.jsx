var BlockInputBottom = require('./block_input_bottom.jsx');
var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var React = require('react');
var $ = require('jquery');
var BlockContentSelect = require('./block_content_select.jsx');
var BlockPhoneSelect = React.createClass({
    getDefaultProps : function (){
        return {
            phoneStatus : 'left',
            phone_status:[{'src':'icon_left.png', value:'left', 'text':MSG['tilt_left']},
                            {'src':'icon_right.png' , value:'right','text':MSG['tilt_right']},
                            {'src':'icon_swing.png' , value:'swing','text':MSG['tilt_swing']},
                            {'src':'icon_up.png', value:'up','text':MSG['tilt_up']},
                            {'src':'icon_down.png' , value:'down','text':MSG['tilt_down']}]
        };
    },
    getInitialState: function() {
        return { 
            status : this.props.phoneStatus || 'left',
            phone_status : this.props.phone_status
        };
    },
    componentDidMount: function() {
        var status = this.props.data.direction;
    },
    onContinue: function() {
        return this.props.onRemove();
    },
    stopProgation :function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return e.stopPropagation();
    },
    savePhone :function() {
        var status = this.state.status;
        this.props.callback({direction:status});
    },
    selectStatus : function(item ,e) {
        var that = e.currentTarget;
        $(that).siblings().removeClass('active');
        $(that).addClass('active');
        var status= item.value;
        var obj = {status : status};
        this.setState(obj);
    },
    render :function() {
        var items = this.props.phone_status;
        var newArray =[];
        var itemClass = 'item5 ';
        var imgClass = 'picture phone_pic';
        var textClass = 'text phone_text flex';
        var status = this.props.data.direction;
        if (this.state === null) {
            return <div></div>;
        } else {
            return <div className="blockly_background flex" onTouchEnd={this.onContinue} >
                        <div className="blockly_popup" onTouchEnd={this.stopProgation} >
                            <BlockInputTitleBar1 showInfo={MSG['title_device_tilt']}/>
                            <div className="blockly_popupbody flex">
                                <BlockContentSelect status={status} itemClass={itemClass} 
                                    imgClass={imgClass} textClass={textClass} 
                                    selectStatus={this.selectStatus}>
                                </BlockContentSelect>
                            </div>
                            <BlockInputBottom type="common_button" onBackgroundTouched={this.onContinue} saveTime={this.savePhone}/>
                        </div>
                    </div>;
        }
    }
});
module.exports = BlockPhoneSelect;