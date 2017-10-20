/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldDeviceTilt');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var jsxManage = require('../service/jsx_manage_service.js');

Blockly.FieldTimeAdapter = function(text, opt_validator, popupKey) {
    Blockly.FieldTimeAdapter.superClass_.constructor.call(this, text, opt_validator);
    this.setText(text);
    this.popupKey = popupKey;
};
goog.inherits(Blockly.FieldTimeAdapter, Blockly.Field);
/**
 * render the block
 * @private
 */
Blockly.FieldTimeAdapter.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
    };
    var block = this.sourceBlock_;
    var objToPopup = block.popupTimeDialog();
    //如果当前的块不可用
    if (block.disabled) {
        eventsListener.trigger('systemPrompt',{tipsContent:MSG['servo_mode_error'], tipsType:'error'});
    }else {
        var data = {currentValue: objToPopup.time};
        jsxManage.renderComponentByCondition('timeSelect',data,callback,"business_container");
    }
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldTimeAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldTimeAdapter; });
} else {
    this.FieldTimeAdapter = Blockly.FieldTimeAdapter;
}