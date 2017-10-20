/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * number_validate.js version 1.0
 * 
 * number_validate js  数据存储的基类
 * interbase_number_validate 工具类
 * 
 * 数字验证的基类
 * @author hekai
 */
'use strict'
;(function() {

    var Interface = require('../../storage/interface.js');
    var LedNumberValidate = require('./led_number_validate');
    var EmojiNumberValidate = require('./emoji_number_validate');
    var ScenelightNumberValidate = require('./scenelight_number_validate');
    var TimesNumberValidate = require('./times_number_validate');
    var TimeNumberValidate = require('./time_number_validate');
    var DeaultNumberValidate = require('./default_number_validate');
    /**
     * new Interface 定义接口
     * 接口定义  NumberValidate：接口名  ['validate']：方法名称集合（validate：方法名）
     * @type {*}
     */
    var NumberValidate = new Interface('NumberValidate',['validate']);
    
    var NumberValidateFactory  = {
        createValidator : function (type) {
            var validator;
            switch (type) {
                case  'id_show_led':
                validator = new LedNumberValidate();
                break;
                case  'id_show_emoji':
                validator = new EmojiNumberValidate();
                break;
                case  'id_show_scenelight':
                validator = new ScenelightNumberValidate();
                break;
                case 'custom_control_repeat_times':
                validator = new TimesNumberValidate();
                break;
                case 'custom_control_wait_seconds':
                validator = new TimeNumberValidate();
                break;
                default :
                validator = new DeaultNumberValidate();
            }
            /**
             * ensureImplements：接口注入实现方法名称
             * 接口实现注入 NumberValidate：接口名称  validator：实现类
             *
             * 被调用方式：NumberValidateFacroty.createValidator(customType).validate(value)
             */
            Interface.ensureImplements(validator, NumberValidate);
            return validator;
        }
    };   


    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = NumberValidateFactory;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return NumberValidateFactory });
    } else {
        this.NumberValidateFactory = NumberValidateFactory;
    }

}).call(this)