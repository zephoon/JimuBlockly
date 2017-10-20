/**
 * Created by ubt on 2016/9/8.
 */

'use strict';
goog.require('Blockly.Field');

var blocklyDatas = require('./../service/blockly_datas');
var dataService = require('./../service/data_service');
var eventsListener = require('../common/events_listener');

Blockly.FieldDefaultIdAdapter = function(text, opt_validator, popupKey) {
    Blockly.FieldDefaultIdAdapter.superClass_.constructor.call(this, text, opt_validator);
    this.setText(text);
    this.popupKey = popupKey;
};
goog.inherits(Blockly.FieldDefaultIdAdapter, Blockly.Field);

/**
 * render the block
 * @private
 */
Blockly.FieldDefaultIdAdapter.prototype.showEditor_ = function() {
    var blueStatus =  blocklyDatas.getDataByKey('blueState');
    if (!blueStatus || blueStatus =='0') {
        dataService.command('blueConnect');
        return;
    }
    var block = this.sourceBlock_;
    var touchIds =  blocklyDatas.getTouchIds();
    var sensorId = block.getFieldValue('SENSOR_ID');
    var condition1 = touchIds[0] == 'ID' && sensorId && sensorId =='ID';
    var condition2 = (!isNaN(touchIds[0]) && sensorId && sensorId =='ID');
    var touch_msg_key = condition1 ? MSG['touch_tips']:(condition2 ? MSG['touch_tips_error']:'');
    var temp_json = {
        'infrared' : { tipsContent : MSG['infrared_tips'], tipsType:'error'},
        'touch' : { tipsContent : touch_msg_key, tipsType:'error'},
        'gyroscope' : { tipsContent : MSG['gyroscope_tips'], tipsType:'error'},
        'servo' : { tipsContent : MSG['speed_only_360_value'], tipsType:'error'},
    };
    eventsListener.trigger('systemPrompt',temp_json[this.popupKey]);
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldDefaultIdAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldDefaultIdAdapter; });
} else {
    this.FieldDefaultIdAdapter = Blockly.FieldDefaultIdAdapter;
}