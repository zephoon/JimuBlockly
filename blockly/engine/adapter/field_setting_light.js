/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldSettingLight');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var popupShow = require('../common/dialog/popup_show');
var jsxManage = require('../../engine/service/jsx_manage_service.js');

Blockly.FieldSettingLight = function(value, text, opt_validator) {
    Blockly.FieldSettingLight.superClass_.constructor.call(this, value, opt_validator);
    //var text = MSG['tilt_'+value];
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldSettingLight, Blockly.Field);

Blockly.FieldSettingLight.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldSettingLight.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldSettingLight.prototype.getText = function() {
    return this.text_;
};

/**
 * render the block
 * @private
 */
Blockly.FieldSettingLight.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    var initData = block.popupService();
    console.log('传递出去的值：'+block['popupKey']);
    console.log(initData);
    if(window.blocklyObj){//真机环境下弹出提示
        if (!popupShow.isShowAlert(block['popupKey'], initData)) return;
    }
    jsxManage.renderComponentByCondition(block['popupKey'],initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldSettingLight;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldSettingLight; });
} else {
    this.FieldSettingLight = Blockly.FieldSettingLight;
}