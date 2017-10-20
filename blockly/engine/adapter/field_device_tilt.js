/**
 * Created by ubt on 2016/9/8.
 */

'use strict';
goog.require('Blockly.FieldDeviceTilt');
goog.require('Blockly.Field');
var eventsListener = require('../common/events_listener');

Blockly.FieldDeviceTilt = function(value, opt_validator) {
    Blockly.FieldDeviceTilt.superClass_.constructor.call(this, value, opt_validator);
    var text = MSG['tilt_'+value];
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldDeviceTilt, Blockly.Field);

Blockly.FieldDeviceTilt.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldDeviceTilt.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldDeviceTilt.prototype.getText = function() {
    return MSG['tilt_'+this._value]; 
};

/**
 * render the block
 * @private
 */
Blockly.FieldDeviceTilt.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var initData = block.popupService();
    var jsxManage = require('../../engine/service/jsx_manage_service.js');
    // 根据key 去创建相应的组件
    jsxManage.renderComponentByCondition(block['popupKey'],initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldDeviceTilt;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldDeviceTilt; });
} else {
    this.FieldDeviceTilt = Blockly.FieldDeviceTilt;
}
