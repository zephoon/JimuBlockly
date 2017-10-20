/**
 * event_utils.js version 1.0
 *  zhuliming 2017-05-26
 *  utils feature
 *  工具函数类
 */
'use strict';
;(function() {
    var timeOutEvent = 0;//计时器返回的值
    var  EventUtils = function(){};
    /**
     * 长按单击事件的区分处理start
     */
    EventUtils.prototype.onTouchStart = function (param,callback) {
        console.log("_onTouchStart--"+param);
        timeOutEvent = setTimeout(this.showLong(param,callback), 200);
    };
    EventUtils.prototype.showLong = function (param,callback) {
        var that = this;
        return function() {  
            that._longPress(param,callback);  
        }
    };
    EventUtils.prototype.onTouchMove = function (param) {
        console.log("_onTouchMove--"+param);
        /*clearTimeout(timeOutEvent);
        timeOutEvent = 0;*/
    };
    EventUtils.prototype.onTouchEnd = function (param,callback) {
        console.log("_onTouchEnd--"+param);
        clearTimeout(timeOutEvent);
        if (timeOutEvent != 0) {
            this._onClick(param,callback);
        }
        return false;
    };
    EventUtils.prototype._longPress = function(param,callback) {
        timeOutEvent = 0;
        console.log("长按事件触发----->"+param);
        console.log(callback);
        callback(param);
    };
    EventUtils.prototype._onClick = function(param,callback) {
        timeOutEvent = 0;
        console.log("单击事件触发----->"+param);
        console.log(callback);
        callback(param);
    };
    /**
     * 长按单击事件的区分处理end
     */
    var eventUtils = new EventUtils();
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = eventUtils;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return eventUtils; });
    } else {
        this.ubtUtils = eventUtils;
    }

}).call(this);