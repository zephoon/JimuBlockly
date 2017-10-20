/**
 * Description: Field for entering params of touch sensor
 * Author: Created by ubt
 * Date: 2016/9/2
 */

'use strict';
goog.provide('Blockly.FieldTouchSensor');
goog.require('Blockly.Field');
require('./block_extension')(Blockly.Block);

var eventsListener = require('../common/events_listener');
var popupShow = require('../common/dialog/popup_show');
var jsxManage = require('../service/jsx_manage_service.js');

Blockly.FieldTouchSensor = function(key, val, opt_validator) {
    Blockly.FieldTouchSensor.superClass_.constructor.call(this, val, opt_validator);
    var text = MSG[key];
    this.setText(text);
    this.setValue(val);
};
goog.inherits(Blockly.FieldTouchSensor, Blockly.Field);

Blockly.FieldTouchSensor.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldTouchSensor.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldTouchSensor.prototype.getText = function() {
    return MSG[this._value]; 
};

/**
 * render the block
 * @private
 */
Blockly.FieldTouchSensor.prototype.showEditor_ = function() {
    var block = this.sourceBlock_;
    var initData = block.popupService();
    //未连接设备 返回
    if(window.blocklyObj){
        if (!popupShow.isShowAlert(block['popupKey'], initData))  return;
    }
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    jsxManage.renderComponentByCondition('touchSelect',initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldTouchSensor;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldTouchSensor; });
} else {
    this.FieldTouchSensor = Blockly.FieldTouchSensor;
}