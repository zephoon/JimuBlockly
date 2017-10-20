/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * blockly_utils.js version 1.0
 * 
 * blockly utils 
 * blockly 工具类
 * 
 * feature blockly utils
 * @author hekai
 */
'use strict'
;(function() {

    var codeLanguage = require('./../program/program_init');
    var _ = require('lodash');
    var FieldDropDownAdapter = require('../../adapter/field_dropdown_adapter');
    var blocklyDatas = require('../../service/blockly_datas');
    var FieldDefaultIdAdapter = require('../../adapter/field_default_id_adapter');
    var colours = require('../../service/colours');
    function BlocklyUtils() {

    }

    /**
     * @params workspace 工作空间
     * @params type block块的类型
     * 
     * @return 返回找到的块
     */
    BlocklyUtils.findBlockByType = function(type, workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        var returnBlock = null;
        _.forEach(listOfBlocks, function(block) {
            if (block.type === type) {
                returnBlock = block;
            }
        });
        return returnBlock;
    };

    /**
     * @params workspace 工作空间
     * @params type block块的类型
     * 
     * @return 返回找到的块组成的数组
     */
    BlocklyUtils.findBlocksByType = function(type, workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        var returnBlocks = [];
        _.forEach(listOfBlocks, function(block) {
            if (block.type === type) {
                returnBlocks.push(block);
            }
        });
        return returnBlocks;
    };

    /**
     * @params workspace 工作空间
     * @params isDeletable true 可以删除 false 不可以删除
     * 
     * 
     * 设置所有的块可以删除，除了开始的块
     */
    BlocklyUtils.setAllBlocksDeletable = function(isDeletable,workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        _.forEach(listOfBlocks, function(block) {
            if (block.type !== 'program_start') {
                block.setDeletable(isDeletable);
            }
        });
    };

    /**
     * @params workspace 工作空间
     * @params isEditable true 可以删除 false 不可以删除
     * 
     * 
     * 设置所有的块可以编辑，
     */
    BlocklyUtils.setAllBlocksEditable = function(isEditable,workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        _.forEach(listOfBlocks, function(block) {         
            block.setEditable(isEditable);       
        });
    };

    /**
     * @params workspace 工作空间
     * @params isMovable true 可以移动 false 不可以移动
     * 
     * 
     * 设置所有的块可以移动，
     */
    BlocklyUtils.setAllBlocksMovable = function(isMovable,workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        _.forEach(listOfBlocks, function(block) {
            block.setMovable(isMovable);
        });
    };


    /**
     * 
     * 迭代所有的block块的时候做的操作
     * 
     */
    BlocklyUtils.iterateBlocks = function(callback, workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        var listOfBlocks = workspace.getAllBlocks();
        _.forEach(listOfBlocks, function(block) {       
            callback(block);
        });
    };

    /**
     * @params block 指定的block块
     * @params workspace  指定的工作空间
     * 
     * 生成指定部分块的js代码
     * @return 返回指定的代码
     * 
     */
    BlocklyUtils.blockToCodeInWorkspace = function (block, workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
        Blockly.JavaScript.addReservedWords('highlightBlock');
        Blockly.JavaScript.INFINITE_LOOP_TRAP = '  LoopTrap = LoopTrap-1;\n  if(LoopTrap == 0){throw "Infinite loop."};\n';
        Blockly.JavaScript.init(workspace);

        // 
        var code = '';
        if (Blockly.JavaScript.definitions_['variables']) {         
            //code = Blockly.JavaScript.definitions_['variables'] + '\n';
        }     
        code = Blockly.JavaScript.blockToCodeInWorkspace(block, workspace);
        code = BlocklyUtils.finish(code);
        console.log("blockly utils.js-----------------生成指定部分块的js代码 begin-------------------->");
        console.log(code);
        console.log("--------------------------生成指定部分块的js代码 end--------------------------->");
        return code;
    };

    BlocklyUtils.finish = function (code) {
        var definitions = [];
        for (var name in Blockly.JavaScript.definitions_) {
            definitions.push(Blockly.JavaScript.definitions_[name]);
        }
        // Clean up temporary data.
        delete Blockly.JavaScript.definitions_;
        delete Blockly.JavaScript.functionNames_;
        Blockly.JavaScript.variableDB_.reset();
        code = definitions.join('\n\n') + '\n\n\n' + code;
        return code;
    };

    /**
     * @params block 指定的block块
     * @params workspace  指定的工作空间
     * 
     * 生成指定部分块的swift代码
     * @return 返回指定的代码
     * 
     */
    BlocklyUtils.blockToSwiftCodeInWorkspace = function (block, workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        //Blockly.Swift.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
       // Blockly.Swift.addReservedWords('highlightBlock');
        //Blockly.Swift.INFINITE_LOOP_TRAP = '  LoopTrap = LoopTrap-1;\n  if(LoopTrap == 0){throw "Infinite loop."};\n';
        Blockly.Swift.init(workspace);

        // 
        var code = '';
        if (Blockly.Swift.definitions_['variables']) {         
            //code = Blockly.JavaScript.definitions_['variables'] + '\n';
        }     
        code = Blockly.Swift.blockToCodeInWorkspace(block, workspace);
        code = BlocklyUtils.swiftFinish(code);
        console.log(code);
        return code;
    };

    BlocklyUtils.swiftFinish = function (code) {
        var definitions = [];
        for (var name in Blockly.Swift.definitions_) {
            definitions.push(Blockly.Swift.definitions_[name]);
        }
        // Clean up temporary data.
        delete Blockly.Swift.definitions_;
        delete Blockly.Swift.functionNames_;
        Blockly.Swift.variableDB_.reset();
        if(definitions.length ==0){
            return code;
        }
        code = definitions.join('\n\n') +'\n'+ code;
        return code;
    };
    /**
     * swift代码转换
     * @param workspace
     * @returns {string}
     */
    BlocklyUtils.blockToSwiftInWorkspace = function (workspace) {
        if (!workspace) {
            workspace = codeLanguage.workspace;
        }
        
        // 初始化变量
        Blockly.Swift.init(workspace);

        // 
        var code = '';
        code = Blockly.Swift.workspaceToCode(workspace);
        // code = BlocklyUtils.swiftFinish(code);
        return code;
    };

    // BlocklyUtils.swiftFinish = function (code) {
    //     var definitions = [];
    //     for (var name in Blockly.Swift.definitions_) {
    //         definitions.push(Blockly.Swift.definitions_[name]);
    //     }
    //     // Clean up temporary data.
    //     delete Blockly.Swift.definitions_;
    //     delete Blockly.Swift.functionNames_;
    //     Blockly.Swift.variableDB_.reset();
    //     code = definitions.join('\n\n') + '\n\n\n' + code;
    //     return code;
    // };

    /**
     * @params block 指定的block块
     * @params hook 指定的函数
     * 
     * 在指定的块上绑定一个函数
     */
    BlocklyUtils.addInputControlUI = function (block, hook) {
        if (typeof hook !== 'undefined') {
            var oldOnMouseUp = block.onMouseUp_;
            block.onMouseUp_ = function () {
            if (Blockly.dragMode_ !== Blockly.DRAG_FREE) {
                //eventsListener.trigger('open_block_input');
                hook.apply(this, arguments);
            }
            return oldOnMouseUp.apply(this, arguments);
            };
        }
    };
    /**
     * 当前程序块ID是否存在当前实际传感器中
     * @param current_sensor_arr   当前实际传感器ID集合
     * @param sensorId  当前需要检测的block块中传感器ID值
     * @returns {Array}
     */
    var is_has_current_block = function(current_sensor_array,sensorId){
        var temp_arr = [];
        for(var i=0;i<current_sensor_array.length;i++){
            var temp_child_arr = current_sensor_array[i];
            if(temp_child_arr[1]==sensorId){ //当前ID中含有xml中ID，保持原有程序块值，并将程序块设置可编辑状态
                temp_arr.push(temp_child_arr);
            }
        }
        return temp_arr;
    };

    /**
     * //所有传感器（红外，触碰，陀螺仪）程序块值控制
     * @param block  当前程序块
     */
    var  sensor_block_util=function(block){
        var current_sensor_array = [];
        var input = null;
        var sensorId = "";
        var temp_str = "touch";
        if(block.type.indexOf("infrared")>0){//红外传感器
             current_sensor_array =  blocklyDatas.getInfraredIdArr();
             input = block.getInput('infrared_sensor_input');
             sensorId = block.getFieldValue('SENSOR_ID');
             temp_str = "infrared";
        }else if(block.type.indexOf("touch")>0){
             current_sensor_array =  blocklyDatas.getTouchIdArr();
             input = block.getInput('touch_sensor_input');
             sensorId = block.getFieldValue('SENSOR_ID');
            temp_str = "touch";
        }else if(block.type.indexOf("gyrocope")>0 || block.type.indexOf("gyroscope")>0){
             current_sensor_array = blocklyDatas.getGyroscopeIdArr();
             input = block.getInput('gyro_sensor_input');
             sensorId = block.getFieldValue('SENSOR_ID');
            temp_str = "gyroscope";
        }
        //如果是非正常值，需要修正，否则不需要更新
        if(current_sensor_array.length!=0){
            if(current_sensor_array && current_sensor_array[0][0]=="ID"){
                input.removeField('SENSOR_ID');
                var _a_temp_arr = [];
                _a_temp_arr.push(["ID-"+sensorId,""+sensorId+""]);
                input.appendField(new FieldDropDownAdapter(_a_temp_arr),'SENSOR_ID');
                block.setDisabled(true);
            }else{
                input.removeField('SENSOR_ID');
                if (!isNaN(sensorId)) {
                    if (current_sensor_array.length == 1 && current_sensor_array[0][0] == sensorId) {
                        var adapter = new FieldDefaultIdAdapter('ID',function() {
                        },temp_str);
                        input.appendField(adapter,'SENSOR_ID');
                        block.addWrongClass(sensorId);
                    } else {
                        //当前程序块ID是否存在当前实际传感器中
                        if(is_has_current_block(current_sensor_array,sensorId).length!=0){
                            input.appendField(new FieldDropDownAdapter(is_has_current_block(current_sensor_array,sensorId)),'SENSOR_ID');
                            block.setDisabled(false);
                            //改变程序块颜色
                            if(block.type == "program_goto_infrared_condition"){
                                //设置程序块中<=/=>的正确值
                                // infrared_sensor_operator
                                if(block_value == "GTE"|| block_value=="GT"){
                                    var infraed_input =  block.getInput('infrared_sensor_operator');
                                    var block_value = block.getFieldValue("OP");
                                    infraed_input.removeField('OP');
                                    infraed_input.appendField(new FieldDropDownAdapter([[">=", "GTE"],["<=", "LTE"]]), 'OP').appendField(" ");
                                }
                                console.log("program_goto_infrared_condition  setColor"+colours['id_start'].primary);
                                block.setColor(colours['id_start'].primary);
                            }
                        }else{
                            var temp_arr_01 = [];
                            temp_arr_01.push(["ID-"+sensorId,""+sensorId+""]);
                            input.appendField(new FieldDropDownAdapter(temp_arr_01),'SENSOR_ID');
                            block.setDisabled(true);
                        }
                    }
                }else{
                    input.appendField(new FieldDropDownAdapter(current_sensor_array),'SENSOR_ID');
                    block.setDisabled(false);
                    //改变程序块颜色
                    if(block.type == "program_goto_infrared_condition"){
                        //设置程序块中<=/=>的正确值
                        if(block_value == "GTE"|| block_value=="GT"){
                            var infraed_input =  block.getInput('infrared_sensor_operator');
                            var block_value = block.getFieldValue("OP");
                            infraed_input.removeField('OP');
                            infraed_input.appendField(new FieldDropDownAdapter([[">=", "GTE"],["<=", "LTE"]]), 'OP').appendField(" ");
                        }
                        console.log("program_goto_infrared_condition  setColor"+colours['id_start'].primary);
                        block.setColor(colours['id_start'].primary);
                    }
                }
            }
        }

    };

    /**
     * 处理工作空间中block块（更新工作空间block块正确数据）
     * @param block 工作空间块
     */
    BlocklyUtils.handleWorkspaceBlock = function(block) {
        //所有传感器（红外，触碰，陀螺仪）程序块值控制
        sensor_block_util(block);
        // led 灯光
        if (block.type == 'id_show_led') {
            //获取块的文本
            var lightId = block.getField('Light').getText();
            //获取真实的灯光ID
            var lightIds = blocklyDatas.getLightsIds(); 
            //如果是非正常值，需要修正，否则不需要更新
            if (lightIds[0] != 'ID'  && lightId.indexOf("-")=='-1') { //连接后需要更新，灯光ID数组0元素不是ID则为有真实灯光
                var input = block.getInput('light_input');
                input.removeField('Light');               
                var lightStr = '';        
                var len = lightIds.length;
                for (var i = 0 ; i < len; i++) {
                    lightStr+='ID-'+lightIds[i] + ':'+ MSG['id_all_bright'] +';';
                }
                lightStr = lightStr.substring(0, lightStr.length-1);
                //组装灯光的数组
                var lightsData = {};
                lightsData.islightLock = true;
                var lightArray = [];
                for(var idx = 0; idx < lightIds.length; idx++){
                    var objTemp = {};
                    objTemp.id = lightIds[idx];
                    // objTemp.lights = ['#39c6ea','#ff0000','#ff7f00','#ffff00','#00ff00','#00ffff','#0000ff','#8b00ff'];
                    objTemp.lights = ['#fe0000','#ff7f00','#fff000','#00ff01','#01ffff','#0000fe','#ff00fe','#ffffff'];
                    lightArray.push(objTemp);
                }  
                lightsData.lightArray =  lightArray;
                var light = new Blockly.FieldSettingLight(JSON.stringify(lightsData), lightStr, function(param) {
                    this.sourceBlock_.updateText(param);
                });
                input.appendField(light,'Light');
                block.setDisabled(false);                  
            } else {
                //没有灯光的提示错误
                if (lightId.indexOf('-') == -1) {
                    block.addWrongClass(lightId);
                }          
            }
        }
        // 情景灯
        if (block.type == 'id_show_scenelight') {
            //获取块的文本
            var lightId = block.getField('SceneLight').getText();
            //获取真实的灯光ID
            var lightIds = blocklyDatas.getLightsIds();
            //如果是非正常值，需要修正，否则不需要更新
            if (lightIds[0] != 'ID'&& lightId.indexOf("-")=='-1') { //连接后需要更新，灯光ID数组0元素不是ID则为有真实灯光
                var input = block.getInput('scene_light_input');
                input.removeField('SceneLight');               
                var lightStr = '';        
                var len = lightIds.length;
                for (var i = 0 ; i < len; i++) {
                    lightStr+='ID-'+lightIds[i] + ':'+ MSG['id_deng'] +';';
                }
                lightStr = lightStr.substring(0, lightStr.length-1);
                //组装情景灯的数组
                var lightsData = {};
                lightsData.islightLock = true;
                var lightArray = [];
                for(var idx = 0; idx < lightIds.length; idx++){
                    var objTemp = {};
                    objTemp.id = lightIds[idx];
                    objTemp.emotionIndex = 12;
                    lightArray.push(objTemp);
                }   
                lightsData.lightArray =  lightArray;
                var displayEmotion = new Blockly.FieldDisplayEmotion(lightStr, JSON.stringify(lightsData), function (params) {
                    this.sourceBlock_.updateShape_(params);
                });
                input.appendField(displayEmotion,'SceneLight');
                block.setDisabled(false);                  
            } else {
                //没有灯光的提示错误
                if (lightId.indexOf('-') == -1) {
                    block.addWrongClass(lightId);
                }          
            }
        }
        // 表情
        if (block.type == 'id_show_emoji') {
            //获取块的文本
            var lightId = block.getField('Emotion').getText();
            //获取真实的灯光ID
            var lightIds = blocklyDatas.getLightsIds(); 
            //如果是非正常值，需要修正，否则不需要更新
            if (lightIds[0] != 'ID'&& lightId.indexOf("-")=='-1') { //连接后需要更新，灯光ID数组0元素不是ID则为有真实灯光
                var input = block.getInput('emotion_input');
                input.removeField('Emotion');               
                var lightStr = '';        
                var len = lightIds.length;
                for (var i = 0 ; i < len; i++) {
                    lightStr+='ID-'+lightIds[i] + ':'+ MSG['id_smile'] +';';
                }
                lightStr = lightStr.substring(0, lightStr.length-1);
                //组装表情灯光的数组
                var lightsData = {};
                lightsData.islightLock = true;
                var lightArray = [];
                for(var idx = 0; idx < lightIds.length; idx++){
                    var objTemp = {};
                    objTemp.id = lightIds[idx];
                    objTemp.emotionIndex = 0;
                    objTemp.color = '#01ffff';
                    lightArray.push(objTemp);
                }   
                lightsData.lightArray =  lightArray;
                var displayEmotion = new Blockly.FieldDisplayEmotion(lightStr, JSON.stringify(lightsData), function (params) {
                    this.sourceBlock_.updateShape_(params);
                });
                input.appendField(displayEmotion,'Emotion');
                block.setDisabled(false);                  
            } else {
                //没有灯光的提示错误
                if (lightId.indexOf('-') == -1) {
                    block.addWrongClass(lightId);
                }          
            }
        }

        if (block.type == 'id_show_play_effects') {
            if (window.blocklyObj &&window.blocklyObj.customSoundList) {
                var customerSound = window.blocklyObj.customSoundList();
                var effect = block.getFieldValue('Effect');
                var jsonEffect = JSON.parse(effect);
                var key = jsonEffect['key'];
                if (isNaN(key)) {
                    return;
                }
                if (customerSound !='') {
                    var customerSoundArray = JSON.parse(customerSound);
                } else {
                    customerSoundArray = [];
                }
                
                var len = customerSoundArray.length;
                var customKeySoundArray = [];
                if (len  > 0) {
                    for (var i = 0 ; i< len; i++) {
                        var objSound = customerSoundArray[i];
                        var soundKey = objSound['key'];
                        customKeySoundArray.push(soundKey);
                    }
                }
                if (!_.includes(customKeySoundArray,key) || len==0) {
                    block.setDisabled(true);
                }
            }
        }

        if (block.type == 'movement_servo_change_angle_multi') {
            //获取舵机的信息
            var servoGroup = block.getFieldValue('servoGroup');
            if(servoGroup.indexOf('#') > -1 || servoGroup.indexOf('ID') > -1) {
                return;
            }
            var servoInfoArr  = servoGroup.split(',');
            //程序块中的舵机
            var servoIds = [];
            for (var i = 0; i < servoInfoArr.length; i++) {
                servoIds.push(servoInfoArr[i].split(':')[0]);
            }
            var currentServoId = blocklyDatas.getServoIds();
            //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
            var unionResultId = _.intersection(servoIds, currentServoId);
            if (!_.isEqual(unionResultId, servoIds)) {
                block.setDisabled(true);
            } else {
                block.setDisabled(false);
            }
        }

        if (block.type == 'movement_servo_rotate_circle') {
            //获取轮模式舵机的信息
            var servoGroup = block.getFieldValue('servoGroup');
            if(servoGroup.indexOf('#') > -1 || servoGroup.indexOf('ID') > -1) {
                return;
            }
            var servoInfoArr  = JSON.parse(servoGroup);
            //程序块中的轮模式舵机
            var circleServoIds = [];
            for (var i = 0; i < servoInfoArr.length; i++) {
                circleServoIds.push(servoInfoArr[i]['servoId']);
            }
            var currentCircleServoId = blocklyDatas.getCircleServosIds();
            //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
            var unionResultId = _.intersection(circleServoIds, currentCircleServoId);
            if (!_.isEqual(unionResultId, circleServoIds)) {
                block.setDisabled(true);
            } else {
                block.setDisabled(false);
            }
        }

        if (block.type == 'sensor_servo_angle') {
            //获取当前块的舵机信息
            var sensorId = block.getFieldValue('SENSOR_ID');  
            var currentServoId = blocklyDatas.getServoIds();
            //获取这两个集合的交集，如果交集与当前的的块的值一样，则这个块是可以使用的，否则灰掉这个块
            var isContain = _.includes(currentServoId, sensorId);
            if (!isContain) {
                block.setDisabled(true);
            } else {
                block.setDisabled(false);
            }
        }
        if (block.type == 'custom_math_num') {
            if (block.parentBlock_ && block.parentBlock_.type == 'custom_control_wait_seconds') {
                var oldDuration = block.getFieldValue('NUM');
                oldDuration = parseInt(oldDuration,10);
                var newDuration = 0;
                //处理老数据将时间的单位修改成毫秒
                if (oldDuration <= 500 ) {
                    //newDuration = oldDuration*1000;  当前值小于500时，全部按照最小值500来取值
                    newDuration = 500;
                } else {
                    newDuration = oldDuration;
                }
                block.setFieldValue(newDuration, 'NUM');
            }
        }
        if(block.type == "program_goto_phone_condition"){
           // if(navigator.userAgent.toLowerCase().indexOf("android") > 0){
                console.log("program_goto_condition  setColor"+colours['id_start'].primary);
                block.setColor(colours['id_start'].primary);
            //}
        }

    };
    /**
     * 处理工作空间中block块（更新工作空间block块正确数据）
     * @param block 工作空间块
     */
    BlocklyUtils.setCustomMathNum = function(block){
        if(block.parentBlock_ != null){
            if (block.type == 'custom_math_num') {
                if (block.parentBlock_ && block.parentBlock_.type == 'custom_control_wait_seconds') {
                    var oldDuration = block.getFieldValue('NUM');
                    oldDuration = parseInt(oldDuration,10);
                    if(isNaN(oldDuration)){
                        oldDuration = 500;
                    }
                    var newDuration = 0;
                    //处理老数据将时间的单位修改成毫秒
                    if (oldDuration <= 500 ) {
                        //newDuration = oldDuration*1000;  当前值小于500时，全部按照最小值500来取值
                        newDuration = 500;
                    } else {
                        newDuration = oldDuration;
                    }
                    var temp =  block.getField("NUM");
                    console.log("temp:"+temp);
                    console.log("temp typeof:"+typeof (temp));
                    if(typeof(temp) != null){
                        block.setFieldValue(newDuration, 'NUM');
                    }

                }
            }
        }

    };

    // 导出
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = BlocklyUtils;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return BlocklyUtils });
    } else {
        this.blocklyUtils = BlocklyUtils;
    }

}).call(this);