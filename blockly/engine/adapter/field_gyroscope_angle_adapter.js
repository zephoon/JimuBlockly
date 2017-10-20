/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldGyroscopeAngleAdapter');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var popupShow = require('../common/dialog/popup_show');
var jsxManage = require('../../engine/service/jsx_manage_service.js');

Blockly.FieldGyroscopeAngleAdapter = function(value, opt_validator) {
    Blockly.FieldGyroscopeAngleAdapter.superClass_.constructor.call(this, value, opt_validator);
    var text = MSG[value];
    this.setText(text);
    this.setValue(value);
};
goog.inherits(Blockly.FieldGyroscopeAngleAdapter, Blockly.Field);

Blockly.FieldGyroscopeAngleAdapter.prototype.setValue = function(value) {
    this._value = value;
};

Blockly.FieldGyroscopeAngleAdapter.prototype.getValue = function() {
    return this._value;
};

Blockly.FieldGyroscopeAngleAdapter.prototype.getText = function() {
    return MSG[this._value]; 
};

/**
 * render the block
 * @private
 */
Blockly.FieldGyroscopeAngleAdapter.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
             thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    console.log("popupkey--->"+block['popupKey']);
    var initData = block.popupService();
    if(window.blocklyObj){//真机环境下弹出提示
        if (!popupShow.isShowAlert(block['popupKey'], initData)) return;
    }
    jsxManage.renderComponentByCondition(block['popupKey'],initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldGyroscopeAngleAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldGyroscopeAngleAdapter; });
} else {
    this.FieldGyroscopeAngleAdapter = Blockly.FieldGyroscopeAngleAdapter;
}