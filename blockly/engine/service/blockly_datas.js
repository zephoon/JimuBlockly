/* @preserve
 * 
 * 
 * Copyright (c) 2016 UBT Company
 *
 * 
 */

/**
 * BlocklyDatas.js version 1.0
 * 
 * blockly data center
 * blockly的数据中心
 * 
 * feature blockly data center
 * 
 */
'use strict'
;(function() {

    function BlocklyDatas() {
        this.datas = {};
        this.init();
    }

    //普通舵机数组
    var arrServos = '';
    //普通舵机下拉数组ID
    var servoIdArray = [];

    //灯光传感器数组
    var arrLights = '';
    //情景灯数组
    var sceneLights = '';
    // 轮模式舵机数组
    var arrCircleServos = '';

    //红外传感器id数组
    var arrInfraredIds = '';
    //红外传感器下拉数组列表
    var infraredIdArray = [];

    //触碰传感器id数组
    var arrTouchIds = '';
    //触碰传感器下拉数组列表
    var touchIdArray = [];

    //陀螺仪传感器id数组
    var gyroscopeIds = '';
    //陀螺仪传感器下拉数组列表
    var gyroscopeIdArray = [];

    BlocklyDatas.DEFAULT_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>';

    /**
     * 初始化参数
     */
    BlocklyDatas.prototype.init = function() {
        //初始化参数（逻辑编程／教育）
        this.initDefaultXml();
        var requestStrParams = '';
        //这里直接调用IOS或者Java的方法获取初始化的参数
        if (window.blocklyObj) {//真机环境
            requestStrParams = window.blocklyObj.getServoID();
            console.log(requestStrParams);
        } else {//本地环境
            var serialName = 'AstroBot';//系列名称
            // var id = window.location.search;
            console.log("--->",GetQueryString('id'));
            var id = GetQueryString('id');
            console.log("--->",GetQueryString('lang'));
            this.setKeyData('languageCode',GetQueryString('lang'));
            // id = id.substring(id.indexOf('=')+1,id.length);
            var courseId =id||2;//这里修改课程id（windows 环境下 非真机环境 可以在浏览器上地址栏里改）
            requestStrParams = '&servos=1|2|3|4|5&isFirst=1&serialName='+serialName+'&courseId='+courseId+'&actions=';
            var jsonArr =[
                            [//星宝
                                {
                                    actionId:'actions_5d519114-fbd3-4a30-9239-86c213d841f1',
                                    actionName:'鬼步'
                                },
                                {
                                    actionId:'actions_8e07f32d-ba72-4e43-a603-710264bc4308',
                                    actionName:'后退'
                                },
                                {
                                    actionId:'actions_9b30bcec-548d-4562-be9c-57676cb36fde',
                                    actionName:'左移'
                                },
                                {
                                    actionId:'actions_408e1fd5-0610-49c6-b857-b790233edc3f',
                                    actionName:'高兴'
                                },
                                {
                                    actionId:'actions_6227af3e-fcc0-4141-87a9-948574190e20',
                                    actionName:'右移'
                                },
                                {
                                    actionId:'actions_636235593108306100',
                                    actionName:'漫步'
                                },
                                {
                                    actionId:'actions_636252715835204660',
                                    actionName:'待命'
                                },
                                {
                                    actionId:'actions_636252801900625730',
                                    actionName:'街舞'
                                },
                                {
                                    actionId:'actions_a182b7de-e32f-4445-8c0f-80b4491082f6',
                                    actionName:'扭动'
                                },
                                {
                                    actionId:'actions_f70e0fd9-1ed8-4fd2-b00c-821ac1e8046c',
                                    actionName:'前进'
                                }
                            ],
                            [//路宝
                                {
                                    actionId:'actions_5a43d07f-e930-4c2f-8499-d9ff07266ef8',
                                    actionName:'后退'
                                },
                                {
                                    actionId:'actions_7e068cd5-d95e-4b1e-a72b-aed2157e325d',
                                    actionName:'右转'
                                },
                                {
                                    actionId:'actions_636235567348806950',
                                    actionName:'探测'
                                },
                                {
                                    actionId:'actions_636253592061755220',
                                    actionName:'待命'
                                },
                                {
                                    actionId:'actions_c1eef9aa-3e79-4e87-bea8-d14e83aa0399',
                                    actionName:'左转'
                                },
                                {
                                    actionId:'actions_ef8aaf68-dfe2-4009-b761-e9dcc25fe610',
                                    actionName:'前进'
                                }
                            ],
                            [//探星一号
                                {
                                    actionId:'actions_95d4b4b7-1ce5-44d9-b0df-fc5823aa7f1f',
                                    actionName:'左转'
                                },
                                {
                                    actionId:'actions_452116bc-c1bc-43a4-9e8b-d2304181a0ac',
                                    actionName:'前进'
                                },
                                {
                                    actionId:'actions_636233527487833810',
                                    actionName:'捡起'
                                },
                                {
                                    actionId:'actions_636233528239565150',
                                    actionName:'放置'
                                },
                                {
                                    actionId:'actions_636233531979600550',
                                    actionName:'待命'
                                },
                                {
                                    actionId:'actions_636235487842201480',
                                    actionName:'伸懒腰'
                                },
                                {
                                    actionId:'actions_636250847172220020',
                                    actionName:'生气'
                                },
                                {
                                    actionId:'actions_636250861685596490',
                                    actionName:'拳击'
                                },
                                {
                                    actionId:'actions_636250882787328100',
                                    actionName:'抱抱'
                                },
                                {
                                    actionId:'actions_636250975382721730',
                                    actionName:'高兴'
                                },
                                {
                                    actionId:'actions_636251070101840250',
                                    actionName:'鼓掌'
                                },
                                {
                                    actionId:'actions_636251128037642830',
                                    actionName:'睡觉'
                                },
                                {
                                    actionId:'actions_636258736348904760',
                                    actionName:'通行'
                                },
                                {
                                    actionId:'actions_ae504535-cbe2-4712-8da4-9a90f0745da8',
                                    actionName:'跳舞'
                                },
                                {
                                    actionId:'actions_d3ed9f86-76d1-40b0-9810-ad1806175926',
                                    actionName:'后退'
                                },
                                {
                                    actionId:'actions_e7070699-933c-430b-b176-89947c375ebe',
                                    actionName:'右转'
                                }
                            ]
            ];
            var actionList = [];
            if(courseId==2||courseId==3||courseId==4||courseId==5||courseId==6||courseId==7||courseId==8){
                actionList=jsonArr[0];//星宝动作命令列表
            }
            if(courseId==10||courseId==11||courseId==12||courseId==13||courseId==14||courseId==15||courseId==16){
                actionList=jsonArr[1];//路宝动作命令列表
            }
            if(courseId==18||courseId==19||courseId==20||courseId==21||courseId==22||courseId==23||courseId==24){
                actionList=jsonArr[2];//探星一号动作命令列表
            }
            for(var i =0;i<actionList.length;i++){
                var item = actionList[i];
                if(i===0){
                    requestStrParams+=item.actionId+","+item.actionName;
                }else{
                    requestStrParams+="|"+item.actionId+","+item.actionName;
                }
            }
        }
        if (requestStrParams === '') {
            return;
        }
        console.log('my test for requestStrParams : ' + requestStrParams);

        var arrRequest = requestStrParams.split("&");
        for (var i = 0; i < arrRequest.length; i++) {
            this.datas[arrRequest[i].split("=")[0]] = decodeURI(arrRequest[i].split("=")[1]);
        }
        if(this.getDataByKey("platformType")==2){ //1--通用版  2--教育版
            var xml =  window.blocklyObj.projectDataFromEdu();
            if(xml!=undefined && xml!="" && xml!=null){
                this.datas["sysXmlObj"]=JSON.parse(xml);
            }else{
                this.datas["sysXmlObj"]="";
            }
        }
        //初始化将舵机字符串转化为数组
        this.initServosId();
        //初始化LED等为数组
        this.initLightsId();
        //初始化情景灯数组
        this.initsceneLightsId();
        //初始化轮模式舵机ID为数组
        this.initCircleServosId();
        //初始化红外传感器ID为数组
        this.initInfraredId();
        //初始化触碰传感器ID为数组
        this.initTouchId();
        //初始化陀螺仪传感器ID为数组
        this.initGyroScopeId();
    };

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return  unescape(r[2]); 
        return null;
    }

    /**
     * 初始化轮模式ID
     */
    BlocklyDatas.prototype.initCircleServosId = function() {
        var circleServos = this.getDataByKey('circleServos');
        if (!circleServos || circleServos =='') {
            arrCircleServos = ['ID'];           
        } else {
            arrCircleServos = circleServos.split('|');
        }
        if (!window.blocklyObj) {
            arrCircleServos = ['1','2','3','4']; 
        }
    };

    /**
     * 初始化默认的程序
     */
    BlocklyDatas.prototype.initDefaultXml = function() {
        this.datas['defaultXml'] = BlocklyDatas.DEFAULT_XML;
    };

    /**
     * 初始化普通的舵机ID
     */
    BlocklyDatas.prototype.initServosId = function() {
        var servos = this.getDataByKey('servos');
        servoIdArray = [];
        if (!servos || servos =='' || servos == null ) {
            arrServos =['ID'];
            servoIdArray = [["ID", "ID"]];
        } else {
            arrServos = servos.split('|');
            for (var i = 0; i < arrServos.length; i++) {
                var tempObj = [];
                tempObj[0] = 'ID-'+arrServos[i];
                tempObj[1] = arrServos[i];
                servoIdArray.push(tempObj);
            }
        }
    };

    /**
     * 初始化红外传感器的ID
     */
    BlocklyDatas.prototype.initInfraredId = function() {
        var infraredId = this.getDataByKey('infraredId');
        infraredIdArray = [];
        if (infraredId) {
            arrInfraredIds = infraredId.split('|');
            var len = arrInfraredIds.length;           
            for (var i = 0 ; i <len; i++ ) {
                var tempObj = [];
                tempObj[0] = 'ID-'+arrInfraredIds[i];
                tempObj[1] = arrInfraredIds[i];
                infraredIdArray.push(tempObj);
            }
        } else {
            if (infraredIdArray.length == 0) {
                arrInfraredIds = ["ID"];
                infraredIdArray = [["ID", "ID"]];
                //infraredIdArray = [["ID-2", "2"]];
               /* arrInfraredIds = ["1","2"];
                infraredIdArray = [["ID-1", "1"],["ID-2", "2"]];*/
            }
        }         
    };

    /**
     * 初始化触碰传感器的ID
     */
    BlocklyDatas.prototype.initTouchId = function() {
        var touchIdStr = this.getDataByKey('touchId');
        touchIdArray = [];
        if (touchIdStr) {
           arrTouchIds = touchIdStr.split('|');           
           for (var i = 0; i < arrTouchIds.length; i++) {
             var tempObj = [];
             tempObj[0] = 'ID-'+arrTouchIds[i];
             tempObj[1] = arrTouchIds[i];
             touchIdArray.push(tempObj);
           }
        } else {
           if (0 == touchIdArray.length){
               arrTouchIds = ["ID"];
               touchIdArray = [["ID", "ID"]];

               //arrTouchIds = ["1","2"];
               //touchIdArray = [["ID-1", "1"],["ID-2", "2"]];
           }
        }       
    };

    /**
     * 初始化陀螺仪传感器的ID
     */
    BlocklyDatas.prototype.initGyroScopeId = function() {
        var gyroscopeIdStr = this.getDataByKey('gyroscopeId');
        gyroscopeIdArray = [];
        if (gyroscopeIdStr) {
          gyroscopeIds = gyroscopeIdStr.split('|');
          for (var i = 0; i < gyroscopeIds.length; i++) {
            var tempObj = [];
            tempObj[0] = 'ID-'+gyroscopeIds[i];
            tempObj[1] = gyroscopeIds[i];
            gyroscopeIdArray.push(tempObj);
          }
        } else {
            if (0 == gyroscopeIdArray.length) {
                gyroscopeIds =  ["ID"];
                gyroscopeIdArray = [["ID", "ID"]];
                //gyroscopeIds = ["1","2"];
                //gyroscopeIdArray = [["ID-1", "1"],["ID-2", "2"]];
            }
        }

             
    };

    /**
     * 初始化普通的灯光ID
     */
    BlocklyDatas.prototype.initLightsId = function() {
        var lights = this.getDataByKey('lights');
        if (!lights || lights =='') {
            arrLights = ['ID'];
        } else {
            arrLights = lights.split('|');
        }
        if(!window.blocklyObj){
            arrLights = [1,2];
        }      
    };
    /**
     * 初始化情景灯ID
     */
    BlocklyDatas.prototype.initsceneLightsId = function() {
        var scenelights = this.getDataByKey('scenelights');
        if (!scenelights || scenelights =='') {
            sceneLights = ['ID'];
        } else {
            sceneLights = lights.split('|');
        }
        if(!window.blocklyObj){
            sceneLights = [1];
        }      
    };

    /**
     * 根据key获取参数的值
     */
    BlocklyDatas.prototype.getDataByKey = function(key) {
        if (key) {
            return this.datas[key];
        }
        return 'key is invalid';
    };


    /**
     * 设置参数的值
     */
    BlocklyDatas.prototype.setKeyData = function(key, data) {
        if (key) {
            this.datas[key] = data ;
        }
    };

    /**
     * 返回普通舵机的数组
     */
    BlocklyDatas.prototype.getServoIds = function() {
        return arrServos;
    };

    //返回用于下拉列表选择的舵机数组
    BlocklyDatas.prototype.getServoIdArr = function() {
        return servoIdArray;
    };

    //返回LED的数组
    BlocklyDatas.prototype.getLightsIds = function() {
        return arrLights;
    };
    //返回情景灯的数组
    BlocklyDatas.prototype.getsceneLightsIds = function() {
        return sceneLights;
    };

    //返回轮模式舵机ID数组
    BlocklyDatas.prototype.getCircleServosIds = function() {
        return arrCircleServos;
    };

    //返回红外传感器ID的数组
    BlocklyDatas.prototype.getInfraredIds = function() {
        return arrInfraredIds;
    };

    //返回红外传感器ID的下拉数组
    BlocklyDatas.prototype.getInfraredIdArr = function() {
        return infraredIdArray;
    };

    //返回触碰传感器ID的数组
    BlocklyDatas.prototype.getTouchIds = function() {
        return arrTouchIds;
    };

    //返回触碰传感器ID的下拉数组
    BlocklyDatas.prototype.getTouchIdArr = function() {
        return touchIdArray;
    };

    //返回陀螺仪传感器ID的数组
    BlocklyDatas.prototype.getGyroscopeIds = function() {
        return gyroscopeIds;
    };

    //返回陀螺仪传感器ID的下拉数组
    BlocklyDatas.prototype.getGyroscopeIdArr = function() {
        return gyroscopeIdArray;
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        var blocklyDatas = new BlocklyDatas;
        module.exports = blocklyDatas;
    } else if (typeof define === 'function' && define.amd) {
        define(function () { return new BlocklyDatas; });
    } else {
        this.blocklyDatas = new BlocklyDatas;
    }

}).call(this);