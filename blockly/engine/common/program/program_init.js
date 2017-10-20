/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * program_init.js version 1.0
 * 
 * code local 
 * 
 * feature language international
 * 
 */
'use strict'
;(function() {
    var blocklyDatas = require('./../../service/blockly_datas');
    var eventsListener = require('./../events_listener');
    var $ = require('jquery');
    var jsxManage = require('./../../service/jsx_manage_service.js');
    var colours = require('./../../service/colours');
    var utils = require('./../../common/utils/utils');
    var dataService = require('./../../service/data_service');
    var ToolConfig = require('./../../adapter/toolbox_config');
    var CodeLanguage  = {};
    /**
     * Lookup for names of supported languages.  Keys should be in ISO 639 format.
     */
    CodeLanguage.LANGUAGE_NAME = {
        'ar': 'العربية',
        'be-tarask': 'Taraškievica',
        'br': 'Brezhoneg',
        'ca': 'Català',
        'cs': 'Česky',
        'da': 'Dansk',
        'de': 'Deutsch',
        'el': 'Ελληνικά',
        'en': 'English',
        'es': 'Español',
        'fa': 'فارسی',
        'fr': 'Français',
        'he': 'עברית',
        'hrx': 'Hunsrik',
        'hu': 'Magyar',
        'ia': 'Interlingua',
        'is': 'Íslenska',
        'it': 'Italiano',
        'ja': '日本語',
        'ko': '한국어',
        'mk': 'Македонски',
        'ms': 'Bahasa Melayu',
        'nb': 'Norsk Bokmål',
        'nl': 'Nederlands, Vlaams',
        'oc': 'Lenga d\'òc',
        'pl': 'Polski',
        'pms': 'Piemontèis',
        'pt-br': 'Português Brasileiro',
        'ro': 'Română',
        'ru': 'Русский',
        'sc': 'Sardu',
        'sk': 'Slovenčina',
        'sr': 'Српски',
        'sv': 'Svenska',
        'ta': 'தமிழ்',
        'th': 'ภาษาไทย',
        'tlh': 'tlhIngan Hol',
        'tr': 'Türkçe',
        'uk': 'Українська',
        'vi': 'Tiếng Việt',
        'zh-hans': '简体中文',
        'zh-hant': '正體中文'
    };

    /**
     * List of RTL languages.
     */
    CodeLanguage.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];
    /**
     * Extracts a parameter from the URL.
     * If the parameter is absent default_value is returned.
     * @param {string} name The name of the parameter.
     * @param {string} defaultValue Value to return if paramater not found.
     * @return {string} The parameter value or the default value if not found.
     */
    CodeLanguage.getStringParamFromUrl = function(name, defaultValue) {
        var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
        return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
    };
    /**
     * Get the language of this user from the URL.
     * @return {string} User's language.
     */
    CodeLanguage.getLang = function() {
        var lang = CodeLanguage.getStringParamFromUrl('lang', '');
        if (CodeLanguage.LANGUAGE_NAME[lang] === undefined) {
            // Default to English.
            lang = 'en';
        }
        return lang;
    };
    /**
     * Is the current language (Code.LANG) an RTL language?
     * @return {boolean} True if RTL, false if LTR.
     */
    CodeLanguage.isRtl = function() {
        return CodeLanguage.LANGUAGE_RTL.indexOf(CodeLanguage.LANG) != -1;
    };
    /**
     * Load blocks saved on App Engine Storage or in session/local storage.
     * @param {string} defaultXml Text representation of default blocks.
     */
    CodeLanguage.loadBlocks = function(defaultXml) {
        try {
            var loadOnce = window.sessionStorage.loadOnceBlocks;
        } catch(e) {
            // Firefox sometimes throws a SecurityError when accessing sessionStorage.
            // Restarting Firefox fixes this, so it looks like a bug.
            var loadOnce = null;
        }
        if ('BlocklyStorage' in window && window.location.hash.length > 1) {
            // An href with #key trigers an AJAX call to retrieve saved blocks.
            BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        } else if (loadOnce) {
            // Language switching stores the blocks during the reload.
            delete window.sessionStorage.loadOnceBlocks;
            var xml = Blockly.Xml.textToDom(loadOnce);
            Blockly.Xml.domToWorkspace(xml, CodeLanguage.workspace);
        } else if (defaultXml) {
            // Load the editor with default starting blocks.
            CodeLanguage.workspace.clear();
            var xml = Blockly.Xml.textToDom(defaultXml);
            Blockly.Xml.domToWorkspace(xml, CodeLanguage.workspace);
        } else if ('BlocklyStorage' in window) {
            // Restore saved blocks in a separate thread so that subsequent
            // initialization is not affected from a failed load.
            window.setTimeout(BlocklyStorage.restoreBlocks, 0);
        }
    };
// ======================初始化blockly 开始==============================================================//
    /*
     *  1，根据不同平台加载不同程序块
     *     获取系统版本  1--通用版  2--教育版 3-－课程版
     */
    CodeLanguage.loadProgramBlockByPlatform = function(){
        var platformType = blocklyDatas.getDataByKey("platformType");
        if(platformType == 2){
            var xmlObj = blocklyDatas.getDataByKey("sysXmlObj");
            if(xmlObj!=""){
                console.log(xmlObj.xmlContent);
                var res = utils.xmlIsCorrect(xmlObj.xmlContent);
                if(res){
                    CodeLanguage.loadBlocks(xmlObj.xmlContent);
                }else{
                    //载入默认的程序
                    CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
                }
            }else{
                //载入默认的程序
                CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
            }
        }else{
            //载入默认的程序
            var courseData = require('../../service/course_data');
            var initProgram = courseData.getCourseData().initProgram;
            if (initProgram && platformType == 3) {
                CodeLanguage.loadBlocks(initProgram);
                blocklyDatas.setKeyData('needRefresh', true);
                eventsListener.trigger('phoneConditionChange');
            } else {
                CodeLanguage.loadBlocks(blocklyDatas.getDataByKey('defaultXml'));
            }
        }
    };
    /**
     *  2， 初始化工作空间
     */
    CodeLanguage.initWorkSpace = function() {
        var blockScale = 0.9;
        // 如果横屏时，高度大于600就判定设备为平板设备，block块放大到1.5倍
        if (window.screen.availHeight > 600) {
            blockScale = 1.5;
        }
        var rtl = CodeLanguage.isRtl();
        var courseData = require('../../service/course_data');
        var isShowTrash = courseData.getCourseData().isShowTrash;
        var platformType = blocklyDatas.getDataByKey("platformType");
        var toolbox = document.getElementById('toolbox');
        if (platformType == 3) {  //课程
            toolbox = courseData.getCourseData().toolConfig;
        }else{  //逻辑编程，教育
            isShowTrash = true;// 显示垃圾桶
            var toolConfig = new ToolConfig();
            toolbox = toolConfig.getToolboxString();
        }
        CodeLanguage.workspace = Blockly.inject('content_blocks',
            {
            media: '../media/',
            rtl: rtl,
            toolbox: toolbox,
            trashcan : isShowTrash,
            zoom:
                {controls: true,
                    wheel: true,
                    startScale: blockScale, //default 0.9
                    maxScale: 3,
                    minScale: 0.3,               
                    scaleSpeed: 1.2}
            }
        );
        CodeLanguage.initIndexSpace();
        Blockly.svgResize(CodeLanguage.workspace);
        //载入工作空间后绑定一个工作空间改变事件
        var workspaceChangeEvent = function (event) {
            if (event.type == Blockly.Events.UI) {
                return;  // Don't mirror UI events.
            }
            eventsListener.trigger("canvas changed");
        };
        CodeLanguage.workspace.addChangeListener(workspaceChangeEvent);
    };

    /**
     *  3， 初始化设置index界面的样式
     */
    CodeLanguage.initIndexSpace = function(){
        var winHeight = document.body.clientHeight;// 获取窗口总高度
        $('#content_blocks')[0].style.height = (winHeight-2)+"px";// 设置工作区高度
        document.getElementsByTagName('svg')[0].getBBox().height = (winHeight)+ 'px';
        var abs_height = (winHeight - 8)/9;// 设置左侧工具栏高度(8是8个线条 9 是包括返回和运行以及菜单9个块)
        var icons = ['start', 'actions','control','events','show','sensors','math'];
        var blocklyTreeRoot = document.getElementsByClassName("blocklyTreeRoot");
        blocklyTreeRoot[0].style.marginTop = (abs_height-1)+"px" ;
        var objTemp = document.getElementsByClassName("blocklyTreeRow");
        if(objTemp.length>1){//由于第一个生成的菜单空间是隐藏区域，所以在总的菜单数量里面需要去掉一个
            for(var i = 1;i<objTemp.length;i++){
                objTemp[i].style.height = abs_height+"px";        
                objTemp[i].style.width = "110px";                
                $(objTemp[i]).addClass('blocklyTreeRow'+i);
                $('span.blocklyTreeIcon',objTemp[i]).addClass('blocklyTreeIcon_'+icons[i-1]);
                $('span.blocklyTreeIcon',objTemp[i]).attr('type',icons[i-1]);
                var color = colours['id_'+icons[i-1]]['primary'];
                $('span.blocklyTreeLabel',objTemp[i]).attr('style','color:'+color);
                objTemp[i].style.lineHeight = abs_height+"px";
            }
        }        
    };
    /**
     * 初始化课程 1、动态改变课程工作空间背景图片
     */
    CodeLanguage.dynamicChangeBgImg = function(){
        var courseData = require('./../../service/course_data');
        var course_data = courseData.getCourseData();
        $("#content_blocks>svg").css("background","url("+course_data.backgroundImg+") 0% 0% / cover no-repeat");
    };
    /**
     * 一，初始化index 入口
     */
    CodeLanguage.init = function() {
        CodeLanguage.initWorkSpace();//初始化工作空间
        // 到jsx 服务里面根据key 去创建相应的组件
        var platformType = blocklyDatas.getDataByKey("platformType");
        var isFirstEnter = parseInt(blocklyDatas.datas.isFirst);
        //系统初始化界面组件数据
        var config_data = dataService.initComponentData(platformType);
        if(config_data.length>0){
            for(var i=0;i<config_data.length;i++){
                var curData = config_data[i];
                var condition1 = curData.key == 'guide';
                var condition2 = (isFirstEnter == 1 && platformType == 1);
                if((condition1&&condition2)||!condition1){
                    jsxManage.renderComponentByCondition(curData.key,curData.data,curData.callback,curData.id);
                }
            }
        }
        window.setTimeout(function () {
             CodeLanguage.loadProgramBlockByPlatform();//根据平台加载不同的程序块
        }, 800);
    };
    /**
     *  二，初始化课程 入口 
     */
    CodeLanguage.initCourse = function() {
        CodeLanguage.initWorkSpace();//初始化工作空间
        //系统初始化界面组件数据
        var platformType = blocklyDatas.getDataByKey("platformType");
        var config_data = dataService.initComponentData(platformType);
        if(config_data.length>0){
            for(var i=0;i<config_data.length;i++){
                var curData = config_data[i];
                jsxManage.renderComponentByCondition(curData.key,curData.data,curData.callback,curData.id);
            }
        }
        CodeLanguage.dynamicChangeBgImg();//初始化课程工作空间背景图片
        // CodeLanguage.loadProgramBlockByPlatform();//根据平台加载不同的程序块
        window.setTimeout(function () {
            CodeLanguage.loadProgramBlockByPlatform();//根据平台加载不同的程序块
        }, 800);

    };
// ======================初始化blockly 结束==============================================================//
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = CodeLanguage;
        window.codeLanguage = CodeLanguage;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return CodeLanguage });
    } else {
        this.CodeLanguage = CodeLanguage;
    }

}).call(this);