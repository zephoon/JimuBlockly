var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var BlockInputBottom = require('./block_input_bottom.jsx');
var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var $ = require('jquery');
var React = require('react');
var eventUtils = require('../common/utils/event_utils.js');
var BlockTimeSelect = React.createClass({
    getDefaultProps : function () {
        return {
            eventClick:0,//单击
            longPress:1,//长按
            maxValue : 5000,
            minValue : 80,
            stepValue : 20,
            currentValue : 400,
            unit : 'ms'
        };
    },
    getInitialState: function() {
        return { max : this.props.maxValue || 5000,
                 min : this.props.minValue || 80,
                 step : this.props.stepValue || 10,
                 currentValue : this.props.data.currentValue || 400,
                 unit : this.props.unit || 'ms'
               };
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    onContinue: function() {
        return this.props.onRemove();
    },
    _onTouchStart:function(type,e){
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        var that = this;
        var callback = function(type) {
            // 长按处理事件
            interval=setInterval(function(){
              that._setAngle(type,that.props.longPress);
            },100);
        };
        eventUtils.onTouchStart(type,callback);
    },
    _onTouchMove:function(type,e){
       if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        eventUtils.onTouchMove(type);
    },
    _onTouchEnd:function(type,e){
       if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
      var that = this;
      var callback = function(type) {
        // 单击处理事件
        that._setAngle(type,that.props.eventClick);
      };
      eventUtils.onTouchEnd(type,callback);
      clearInterval(interval);
    },
    _setAngle:function(type,eventType){
        var step = this.state.step;
        console.log("=========>type->"+type + "eventType->"+eventType);
        var baseStep = eventType===0?step:60;//单击角度基值1，长按60
        var currentValue = parseInt(this.state.currentValue);
        if(type==='reduce'){
            currentValue = currentValue-baseStep;
        }
        if(type==='add'){
            currentValue = currentValue+baseStep;
        }
        //改变当前按钮显示
        if (currentValue <=this.state.min) {
            currentValue = this.state.min;
            $(".icon_minus")[0].style.color = "#ddd";
           
        }else{
            $(".icon_minus")[0].style.color = "#4cd964";
        }
        //改变当前按钮显示
        if (currentValue >=this.state.max) {
            currentValue = this.state.max;
            $(".icon_add")[0].style.color = "#ddd";
        }else{
            $(".icon_add")[0].style.color = "#4cd964";
        }

        var state = {
            currentValue : currentValue
        };
        this.setState(state);
    },
    changeValue :function(e) {
        var currentValue = e.target.value;
        //改变当前按钮显示
        if(currentValue<=this.state.min){
            currentValue = this.state.min;
            $(".icon_minus")[0].style.color = "#ddd";
        }else{
            $(".icon_minus")[0].style.color = "#4cd964";
        }
        if (currentValue >=this.state.max) {
            currentValue = this.state.max;
            $(".icon_add")[0].style.color = "#ddd";
        }else{
            $(".icon_add")[0].style.color = "#4cd964";
        }
        //设置值
        var state = {
            currentValue : currentValue
        };
        this.setState(state);
        return this.stopProgation(e);
    },
    saveTime :function() {
        var time = this.state.currentValue;
        var timeObj = {};
        timeObj.time = time;
        this.props.callback(timeObj);
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
    render: function() {
        var max = this.state.max;
        var min = this.state.min;
        var step = this.state.step;
        var currentValue = this.state.currentValue;
        var unit = this.state.unit;
        if (this.state === null) {
            return <div></div>;
        } else {
            return  <div className="blockly_background flex" onTouchEnd={this.onContinue}>
                        <div className="blockly_popup" onTouchEnd={this.stopProgation}>
                            <BlockInputTitleBar1 showInfo={MSG['title_time_adjust']}></BlockInputTitleBar1>
                            <div className="blockly_popupbody flex">
                                <div className="left_button time_select">
                                    <div className="icon_minus flex">
                                        <i className="fa fa-minus-circle"  
                                            onTouchStart={this._onTouchStart.bind(this,'reduce')}
                                            onTouchMove={this._onTouchMove.bind(this,'reduce')} 
                                            onTouchEnd={this._onTouchEnd.bind(this,'reduce')}></i>
                                    </div>
                                </div>
                                <div className="time_bar time_select">
                                    <div className="time_bar_top flex">{currentValue}{unit}</div>
                                    <div className="time_bar_content flex"><input type="range" max={max}  min={min} step={step} 
                                        value={currentValue} onChange={this.changeValue} />
                                    </div>
                                    <div className="time_bar_bottom flex">
                                        <div className="min_value flex">{min}{unit}</div>
                                        <div className="max_value flex">{max}{unit}</div>
                                    </div>
                                </div>
                                <div className="right_button time_select">
                                    <div className="icon_add flex">
                                        <i className="fa fa-plus-circle" 
                                            onTouchStart={this._onTouchStart.bind(this,'add')}
                                            onTouchMove={this._onTouchMove.bind(this,'add')} 
                                            onTouchEnd={this._onTouchEnd.bind(this,'add')}></i> 
                                    </div>
                                </div>                           
                            </div>
                            <BlockInputBottom type="common_button" onBackgroundTouched={this.onContinue} saveTime={this.saveTime}/>
                        </div>
                    </div>;
        }
    }
});
BlockTimeSelect.timer = 0;
module.exports = BlockTimeSelect;