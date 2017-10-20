/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour input field.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';
goog.provide('Blockly.FieldColourAdapter');
goog.require('Blockly.Field');

var eventsListener = require('../common/events_listener');
var jsxManage = require('../../engine/service/jsx_manage_service.js');
var popupShow = require('../common/dialog/popup_show');
/**
 * Class for a colour input field.
 * @param {string} colour The initial colour in '#rrggbb' format.
 * @param {Function=} opt_validator A function that is executed when a new
 *     colour is selected.  Its sole argument is the new colour value.  Its
 *     return value becomes the selected colour, unless it is undefined, in
 *     which case the new colour stands, or it is null, in which case the change
 *     is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldColourAdapter = function(colour, opt_validator) {
    Blockly.FieldColourAdapter.superClass_.constructor.call(this, colour, opt_validator);
    this.setText(Blockly.Field.NBSP + Blockly.Field.NBSP + Blockly.Field.NBSP);
};
goog.inherits(Blockly.FieldColourAdapter, Blockly.Field);

/**
 * By default use the global constants for colours.
 * @type {Array.<string>}
 * @private
 */
Blockly.FieldColourAdapter.prototype.colours_ = null;

/**
 * By default use the global constants for columns.
 * @type {number}
 * @private
 */
Blockly.FieldColourAdapter.prototype.columns_ = 0;

/**
 * Install this field on a block.
 */
Blockly.FieldColourAdapter.prototype.init = function() {
    Blockly.FieldColourAdapter.superClass_.init.call(this);
    this.borderRect_.style['fillOpacity'] = 1;
    this.setValue(this.getValue());
};

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 */
Blockly.FieldColourAdapter.prototype.CURSOR = 'default';

/**
 * Close the colour picker if this input is being deleted.
 */
Blockly.FieldColourAdapter.prototype.dispose = function() {
    Blockly.WidgetDiv.hideIfOwner(this);
    Blockly.FieldColourAdapter.superClass_.dispose.call(this);
};

/**
 * Return the current colour.
 * @return {string} Current colour in '#rrggbb' format.
 */
Blockly.FieldColourAdapter.prototype.getValue = function() {
    return this.colour_;
};

/**
 * Set the colour.
 * @param {string} colour The new colour in '#rrggbb' format.
 */
Blockly.FieldColourAdapter.prototype.setValue = function(colour) {
    if (this.sourceBlock_ && Blockly.Events.isEnabled() && this.colour_ != colour) {
        Blockly.Events.fire(new Blockly.Events.Change(
        this.sourceBlock_, 'field', this.name, this.colour_, colour));
    }
    this.colour_ = colour;
  /*if (this.borderRect_) {
    this.borderRect_.style.fill = colour;
  }*/
};

/**
 * Get the text from this field.  Used when the block is collapsed.
 * @return {string} Current text.
 */
Blockly.FieldColourAdapter.prototype.getText = function() {
    var colour = this.colour_;
    // Try to use #rgb format if possible, rather than #rrggbb.
    var m = colour.match(/^#(.)\1(.)\2(.)\3$/);
    if (m) {
        colour = '#' + m[1] + m[2] + m[3];
    }
    return colour;
};

Blockly.FieldColourAdapter.prototype.getTextSpacial = function() {
    return this.text_;
};


/**
 * Number of columns in the palette.
 */
Blockly.FieldColourAdapter.COLUMNS = 7;

/**
 * Set a custom colour grid for this field.
 * @param {Array.<string>} colours Array of colours for this block,
 *     or null to use default (Blockly.FieldColourAdapter.COLOURS).
 * @return {!Blockly.FieldColourAdapter} Returns itself (for method chaining).
 */
Blockly.FieldColourAdapter.prototype.setColours = function(colours) {
    this.colours_ = colours;
    return this;
};

/**
 * Set a custom grid size for this field.
 * @param {number} columns Number of columns for this block,
 *     or 0 to use default (Blockly.FieldColourAdapter.COLUMNS).
 * @return {!Blockly.FieldColourAdapter} Returns itself (for method chaining).
 */
Blockly.FieldColourAdapter.prototype.setColumns = function(columns) {
    this.columns_ = columns;
    return this;
};

/**
 * Create a palette under the colour field.
 * @private
 */
Blockly.FieldColourAdapter.prototype.showEditor_ = function() {
    var thisField = this;
    var callback = function(index) {
        if (thisField.validator_) {
            thisField.validator_(index);
        }
        eventsListener.trigger('canvas changed');
    };
    var block = this.sourceBlock_;
    if (block.disabled ) {//如果当前的块不可用
        eventsListener.trigger('systemPrompt',{tipsContent:MSG['servo_mode_error'], tipsType:'error'});
    }
    var initData = block.popupService();
    // 查询是否已经连接设备
    if(window.blocklyObj){
        if (!popupShow.isShowAlert(block['popupKey'], initData)) return ;//未连接设备 返回
    }
    jsxManage.renderComponentByCondition(block['popupKey'],initData,callback,"business_container");
};

if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Blockly.FieldColourAdapter;
} else if (typeof define === 'function' && define.amd) {
    define(function() { return Blockly.FieldColourAdapter; });
} else {
    this.FieldColourAdapter = Blockly.FieldColourAdapter;
}

