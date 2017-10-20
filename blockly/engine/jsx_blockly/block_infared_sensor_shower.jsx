var React = require('react');
var eventsListener = require('./../common/events_listener');
var ubtUtils = require('./../common/utils/utils');
var blocklyDatas = require('./../service/blockly_datas');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            display: 'block'
        };
    },
    componentDidMount: function() {
        eventsListener.on('show_infrared_sensor',this._changeState);    
    },
    componentWillUnmount: function() {
        eventsListener.off('show_infrared_sensor');
    },
    _changeState : function(param) {
        this.setState({
            display:param
        });
    },
    backgroundTouched: function(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return this.props.onBackgroundTouched();
    },
    getGyroData:function(realValue){
        var gyroHtml =[];
        var resultJson = JSON.parse(realValue);
        var gyroData = resultJson['Gyro'];
        if(gyroData==undefined&&window.blocklyObj == undefined) {
            gyroData = [{"id":1,"x":2204,"y":2204,"z":2204},{"id":2,"x":2204,"y":2204,"z":2204}];
        }
        if(gyroData){
            for(var i = 0;i<gyroData.length;i++){
                var gyroId = gyroData[i].id;
                var standardGyro = blocklyDatas.getDataByKey('resetGyroscope'+ gyroId);
                var paddingX = 0;
                var paddingY = 0;
                var paddingZ = 0;
                var showX = 0;
                var showY = 0;
                var showZ = 0;
                if (standardGyro) {
                    paddingX = standardGyro[0].x;
                    paddingY = standardGyro[0].y;
                    paddingZ = standardGyro[0].z;
                    if (paddingX > 0 && (gyroData[i].x - paddingX) < -180) {
                        showX = gyroData[i].x - paddingX + 360;
                    } else if (paddingX < 0 && (gyroData[i].x - paddingX) > 180) {
                        showX = gyroData[i].x - paddingX - 360;
                    } else {
                        showX = gyroData[i].x - paddingX;
                    }

                    if (paddingY > 0 && (gyroData[i].y - paddingY) < -90) {
                        showY = gyroData[i].y - paddingY + 180;
                    } else if (paddingY < 0 && (gyroData[i].y - paddingY) > 90) {
                        showY = gyroData[i].y - paddingY - 180;
                    } else {
                        showY = gyroData[i].y - paddingY;
                    }

                    if (paddingZ > 0 && (gyroData[i].z - paddingZ) < -180) {
                        showZ = gyroData[i].z - paddingZ + 360;
                    } else if (paddingZ < 0 && (gyroData[i].z - paddingZ) > 180) {
                        showZ = gyroData[i].z - paddingZ - 360;
                    } else {
                        showZ = gyroData[i].z - paddingZ;
                    }
                }  else {
                    showX  = gyroData[i].x;
                    showY  = gyroData[i].y;
                    showZ  = gyroData[i].z;
                }
                gyroHtml.push(<div className="gyroClass" key={i+'gyro'}>
                                <div className="gyro-x gyroFontClass" key={i+'x'}>
                                    <span key={i+'span'} className="outer_gyroFontClass">
                                        {MSG.id_sensor_gyroscope}&nbsp;&nbsp;
                                    </span>
                                    <label>
                                        {gyroData[i].id}:{MSG.x_axie}:{showX}
                                    </label>
                                </div>
                                <div className="gyro-y gyroFontClass" key={i+'y'}>
                                    {MSG.y_axie}:{showY}
                                </div>
                                <div className="gyro-z gyroFontClass" key={i+'z'}>
                                    {MSG.z_axie}:{showZ}
                                </div>
                            </div>);
            }
        }
        return gyroHtml;
    },
    getInfraredData:function(realValue){
        var InfraredJson = {
            InfraredTitle : [],
            InfraredHtml : []
        };
        var resultJson = JSON.parse(realValue);
        var infraredData = resultJson['Infrared'];
        if(infraredData==undefined&&window.blocklyObj == undefined) {
            infraredData = [{"id":1,"result":2204},{"id":2,"result":2204}];
        }
        if(infraredData && infraredData.length > 0 ) {
            InfraredJson.InfraredTitle.push( <span key={"span_1"} className="outer_gyroFontClass">
                                    <label>{MSG.id_sensor_IR_sensor}&nbsp;&nbsp;</label>
                                </span>);
            for(var i = 0;i<infraredData.length;i++){
                if(i!=0){
                    InfraredJson.InfraredHtml.push(<span key={"test"+i} className="gyroFontClass"><label> , </label></span>);
                }
                InfraredJson.InfraredHtml.push( <span key={i} className="gyroFontClass" >
                                                    {infraredData[i].id}:<span className="gyroFontClass">{infraredData[i].result}</span>
                                                </span>);
            }
        }
        return InfraredJson;
    },
    render: function() {
        var realValue = this.props.data.infraredValue;
        if (realValue == '') {
          return null;
        }
        var InfraredJson = this.getInfraredData(realValue);
        var gyroHtml = this.getGyroData(realValue);
        return  <div id="obstacleShow" className="currentInfraredIdClass" style={{display: this.state.display}}>
                    <div className="gyroClass">{InfraredJson.InfraredTitle}
                    {InfraredJson.InfraredHtml}
                    </div>
                    {gyroHtml}
                </div>;
    }
});