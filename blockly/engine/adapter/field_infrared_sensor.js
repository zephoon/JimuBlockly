/**
 * Created by ubt on 2016/9/8.
 */

'use strict';

goog.require('Blockly.FieldInfraredSensor');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var popupShow = require('../common/dialog/popup_show');
var jsxManage = require('../service/jsx_manage_service.js');

Blockly.FieldInfraredSensor = function(value, opt_validator) {
    Blockly.FieldInfraredSensor.superClass_.constructor.call(this, value, opt_validator);
    this.setValue(value);
    this.setText(value);
};
goog.inherits(Blockly.FieldInfraredSensor, Blockly.Field);

/**
 * render the block
 * @private
 */
Blockly.FieldInfraredSensor.prototype.setValue = function(val){
    this._value = val;
}

Blockly.FieldInfraredSensor.prototype.getValue = function(){
    return this._value;
}

Blockly.FieldInfraredSensor.prototype.getText = function(key){
    return this._value;
}

Blockly.FieldInfraredSensor.prototype.showEditor_ = function() {
    var block = this.sourceBlock_;
    var initData = block.popupService();
    if(window.blocklyObj){
        if (!popupShow.isShowAlert('infraredSensor', initData)) return;
    }
    var thisField = this;
    var callback = function(param) {
        if (thisField.validator_) {
            thisField.validator_(param);
        }
        eventsListener.trigger('canvas changed');
    };
    jsxManage.renderComponentByCondition('infraredSensor',initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldInfraredSensor;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldInfraredSensor; });
} else {
    this.FieldInfraredSensor = Blockly.FieldInfraredSensor;
}
