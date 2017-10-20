/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldDisplayEmotion');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var popupShow = require('../common/dialog/popup_show');
var jsxManage = require('../../engine/service/jsx_manage_service.js');

Blockly.FieldDisplayEmotion = function(text, value, opt_validator) {
    Blockly.FieldDisplayEmotion.superClass_.constructor.call(this, text, opt_validator);
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldDisplayEmotion, Blockly.Field);

Blockly.FieldDisplayEmotion.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldDisplayEmotion.prototype.getValue = function() {
    return this._value;
};

/**
 * render the block
 * @private
 */
Blockly.FieldDisplayEmotion.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(param) {
        console.log('返回值');
        console.log(param);
        if (thisField.validator_) {
            thisField.validator_(param);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var initData = block.popupService();
    console.log(initData);
    console.log('传出的值'+block['popupKey']);
    
    if (!popupShow.isShowAlert(block['popupKey'], initData)) return;
    jsxManage.renderComponentByCondition(block['popupKey'],initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldDisplayEmotion;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldDisplayEmotion; });
} else {
    this.FieldDisplayEmotion = Blockly.FieldDisplayEmotion;
}