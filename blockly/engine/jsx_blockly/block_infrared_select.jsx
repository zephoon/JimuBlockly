var BlockInputBottom = require('./block_input_bottom.jsx');
var BlockInputTitleBar1 = require('./block_input_titlebar.jsx');
var React = require('react');
var $ = require('jquery');
var eventsListener = require('./../common/events_listener');
var dataService = require('../service/data_service');
var eventUtils = require('../common/utils/event_utils.js');
var interval=0;
var BlockInfraredSelect = React.createClass({
    getDefaultProps : function() {
        return {
            eventClick:0,//单击
            longPress:1,//长按
            maxValue : 20,
            minValue : 0,
            stepValue : 1,
            currentValue : 10,
            actualImgSrc : 'images/popup/event/event_infrared_sensor_none.png'
        };
    },
    getInitialState: function() {
        //在窗口弹出的时候，发送指定的命令让红外传感器的灯光亮起来
        this._sendCommand();  
        return { max : this.props.maxValue || 20,
                 min : this.props.minValue || 0,
                 step : this.props.stepValue || 1,
                 currentValue : this.props.data.changeValue || 10,
                 acturalValue : this.props.acturalValue || MSG['disconnected'],
                 actualImgSrc : this.props.actualImgSrc
               };
    },
    componentDidMount: function() {
        eventsListener.on('refreshInfrared',this._refreshInfrared);
    },
    componentWillUnmount: function() {
        eventsListener.off('refreshInfrared');
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
        // var baseStep = eventType===0?step:6;//单击角度基值1，长按6
        var baseStep =1;
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
        var state = {
            currentValue : currentValue
        };
        this.setState(state);
        return this.stopProgation(e);
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
    _refreshInfrared :function (data) {
        if(data != ""){
            var resultJson = JSON.parse(decodeURI(data));
            var infraredData =  resultJson['Infrared'];
            var objState = {};
            if (infraredData.length>0) {           
                var temp_infrared = '';
                if (!this.props.data.sensorId) {
                    temp_infrared = infraredData[0];
                } else {
                    for(var i=0;i<infraredData.length;i++){
                        var temp_data = infraredData[i];
                        if(temp_data.id == this.props.data.sensorId){
                            temp_infrared =  infraredData[i];
                            break;
                        }
                    }
                }
            }
            if (temp_infrared !='') {
                objState.acturalValue = MSG["current_value"] + ':'+temp_infrared.result;
                objState.actualImgSrc = 'images/popup/event/event_infrared_sensor_icon.png';
                if (this.isMounted()) {
                    this.setState(objState);
                }               
            }
        }
    },
    _sendCommand :function() {
        var sensorId = this.props.data.sensorId;
        var infraredSensorObj = {};
        infraredSensorObj.id = sensorId;
        infraredSensorObj.sensorType = 'Infrared';
        infraredSensorObj.duration = '300';
        infraredSensorObj.times = 4;
        infraredSensorObj.controlType = '02';
        dataService.command('InfraredShow', infraredSensorObj);
        if (!this.props.acturalValue) {
            dataService.command("read_infrared",null);
        }
    },
    onContinue: function() {
        dataService.command("stop_device",null);
        return this.props.onRemove();
    },
    saveInfrared :function() { 
        var changeValue = this.state.currentValue;
        var infraredObj = {};
        infraredObj.changeValue = changeValue;
        this.props.callback(infraredObj);
        dataService.command("stop_device",null);
    },
    render : function() {
        var max = this.state.max;
        var min = this.state.min;
        var step = this.state.step;
        var currentValue = this.state.currentValue;
        var acturalValue = this.state.acturalValue;
        var actualImgSrc = this.state.actualImgSrc;
        var unit = this.state.unit;
        if (this.state === null) {
            return <div></div>;
        } else {
            return <div className="blockly_background flex" onTouchEnd={this.onContinue} >
                        <div className="blockly_popup" onTouchEnd={this.stopProgation} >
                            <BlockInputTitleBar1 showInfo={MSG['title_infrared_sensor']}/>
                            <div className="blockly_popupbody flex">
                                <div className="common_container" id="infrared_status_container" >
                                    <div className="gyro_status flex">
                                        <img src={actualImgSrc}></img>
                                        <span>{acturalValue}</span>
                                    </div>
                                    <div className="infrared_item flex">
                                        <div className="left_button time_select">
                                            <img className="infrared_pic" src="images\/popup\/event\/event_robot.png"></img>
                                        </div>
                                        <div className="time_bar time_select">
                                            <div className="infrared_item_info">
                                               <div className="connect_info flex"></div>
                                               <div className="range_show"><span className="current_value_01">{currentValue}</span></div>
                                            </div>                                         
                                        </div>
                                        <div className="right_button time_select">
                                            <img className="infrared_pic" src="images/popup/event/event_obstacle.png"></img>
                                        </div>
                                    </div>
                                    <div className="infrared_item flex">
                                        <div className="left_button time_select">
                                            <div className="icon_minus flex" >
                                                <i className="fa fa-minus-circle"  
                                                    onTouchStart={this._onTouchStart.bind(this,'reduce')}
                                                    onTouchMove={this._onTouchMove.bind(this,'reduce')} 
                                                    onTouchEnd={this._onTouchEnd.bind(this,'reduce')}></i>
                                            </div>
                                        </div>
                                        <div className="time_bar time_select"> 
                                            <div className="infrared_bar_top flex">
                                                <div className="min_value flex">{min}</div>
                                                <div className="max_value flex">{max}</div>
                                            </div>                                      
                                            <div className="infrared_bar_content flex"><input type="range" max={max}  min={min} step={step} 
                                                value={currentValue} onChange={this.changeValue} />
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
                                </div>
                            </div>
                            <BlockInputBottom type="common_button" onBackgroundTouched={this.onContinue} saveTime={this.saveInfrared}/>
                        </div>
                    </div>;
        }
    }
});
module.exports = BlockInfraredSelect;