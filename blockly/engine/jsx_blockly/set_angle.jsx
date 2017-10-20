var React = require('react');
var ReactDOM = require('react-dom');
var eventsListener = require('../common/events_listener');
var $ = require('jquery');
var dataService = require('../service/data_service');
var eventUtils = require('../common/utils/event_utils.js');
var interval=0;
var AngleComponent = React.createClass({
    getDefaultProps: function() {
        return {
            eventClick:0,//单击
            longPress:1//长按
        };
    },
    getInitialState: function() {
         return {
            angle:this.props.angle
         };
    },
    componentDidMount: function() {
        this._setImgRoate(this.props.angle);//初始化旋转角度
    },
    componentWillUnmount: function() {
    },
    _onTouchStart:function(type,e){
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        if(this.props.switchIsClose===false) return;
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
        if(this.props.switchIsClose===false) return;
        var that = this;
        var callback = function(type) {
            // 单击处理事件
            that._setAngle(type,that.props.eventClick);
        };
        eventUtils.onTouchEnd(type,callback);
        clearInterval(interval);
    },
    _setAngle:function(type,eventType){
        console.log("=========>type->"+type + "eventType->"+eventType);
        var baseAngle = eventType===0?1:5;//单击旋转角度基值1，长按5
        if(this.props.switchIsClose===false){
            return ;
        }else{
            var angle =  parseInt(this.props.angle===""?"0":this.props.angle);
            if(type=='reduce'){
                angle=angle-baseAngle;
            }
            if(type=='add'){
                angle=angle+baseAngle;
            }
            if(angle>=118){
                angle = 118;
            }else if(angle<=-118){
                angle = -118;
            }
            console.log("---------end---------------角度："+angle);
            this.setState({
                angle:angle
            },()=>{
                this.props.onAngleChange(this.state.angle);
            });
            this._setImgRoate(angle);
            this._runCommand(angle);
        }
    },
    // 图片旋转角度值
    _setImgRoate:function(rotate){
        if(rotate === ''){
            rotate=0;
        }
        var imgObj = document.getElementById("servoAngleImage");
        if(imgObj!=null&&imgObj.style){
            imgObj.style.transform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.webkitTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.MozTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.msTransform="rotate("+parseInt(rotate)+"deg)";
            imgObj.style.OTransform="rotate("+parseInt(rotate)+"deg)";
        }
    },
    // 发送命令给模型
    _runCommand :function (angle) {
        var servos = this.props.servoId;
        var objParam = {};
        objParam.servo = servos;
        objParam.degree = angle;
        objParam.ms  = 400;
        var objTemp = [];
        objTemp.push(objParam);
        var strParams = JSON.stringify(objTemp);
        dataService.command('changeServo',objTemp);          
    },
    render: function(){
        this._setImgRoate(this.props.angle);//还原旋转角度
        return  <div className="angle_val_box flex">
                    <div className="angle_box flex">
                        <div className="adjust_box reduce_box flex" >
                            <i className="fa fa-minus-circle reduce_icon" 
                                onTouchStart={this._onTouchStart.bind(this,'reduce')}
                                onTouchMove={this._onTouchMove.bind(this,'reduce')}
                                onTouchEnd={this._onTouchEnd.bind(this,'reduce')}></i>
                        </div>
                        <div className="img_box flex">
                            <img id="servoAngleImage" className="servoAngleImage" src="images/index/Servo.png"/>
                        </div>
                        <div className="adjust_box add_box flex">
                            <i className="fa fa-plus-circle add_icon" 
                                onTouchStart={this._onTouchStart.bind(this,'add')}
                                onTouchMove={this._onTouchMove.bind(this,'add')}
                                onTouchEnd={this._onTouchEnd.bind(this,'add')}></i>
                        </div>
                    </div>
                    <div className="value_box flex">
                        <label id="angle_val">{this.props.angle===''?0:this.props.angle}°</label>
                    </div>
                </div>;
    }
});

module.exports = AngleComponent;





