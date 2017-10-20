if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_14/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_14/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_14/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_14/common';
}
var courseData = {
    courseId : 14,
    courseName : '课程14',
    courseTitle: MSG.course14_title,
    backgroundImg:bgPath+'/bg.jpg',
    startStory : [
                    [
                        {
                            index:0,
                            type:'img',
                            value:commonPath+'/l_xinbao1.png',
                            directioin:'left',
                            x:0,
                            y:60,
                            hide_ele_index:null
                        },
                        {
                            index:1,
                            type:'text',
                            value:MSG.c14_startstory_1,
                            directioin:'left',
                            x:12,
                            y:65,
                            hide_ele_index:null
                        },
                        {
                            index:2,
                            type:'img',
                            value:commonPath+'/r_lubao1.png',
                            directioin:'right',
                            x:0,
                            y:35,
                            hide_ele_index:null
                        },
                        {
                            index:3,
                            type:'text',
                            value:MSG.c14_startstory_2,
                            directioin:'right',
                            x:12,
                            y:40,
                            hide_ele_index:null
                        },
                        {
                            index:4,
                            type:'text',
                            value:MSG.c14_startstory_3,
                            directioin:'left',
                            x:12,
                            y:65,
                            hide_ele_index:1
                        },
                        {
                            index:5,
                            type:'text',
                            value:MSG.c14_startstory_4,
                            directioin:'right',
                            x:12,
                            y:40,
                            hide_ele_index:3
                        }
                    ]
    ],
    endStory:[
                [
                    {
                        index:0,
                        type:'img',
                        value:commonPath+'/r_lubao1.png',
                        directioin:'right',
                        x:0,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c14_endstory_1,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'text',
                        value:MSG.c14_endstory_2,
                        directioin:'right',
                        x:12,
                        y:40,
                        hide_ele_index:1
                    },
                    {
                        index:3,
                        type:'img',
                        value:commonPath+'/l_xinbao1.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:4,
                        type:'text',
                        value:MSG.c14_endstory_3,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }
                ]
    ],
        allStepPage: [ 
                        [
                            {key:'title',value:[MSG.c14_step_page1_1]},
                            {key:'text',value:  [
                                                    {
                                                        desc:MSG.c14_step_page1_2,
                                                        style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_3,
                                                        specialType:{type:"li",style:{width:"12px",height:"12px",fontSize:"1.1em",color:"black",position:"absolute",left:"-10px"}},
                                                        style:{textAlign:'left',margin:'1.5% 10px',position:'relative'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_4,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_5,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_6,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_7,
                                                        specialType:{type:"li",style:{width:"12px",height:"12px",fontSize:"1.1em",color:"black",position:"absolute",left:"-10px"}},
                                                        style:{textAlign:'left',margin:'1.5% 10px',position:'relative'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_8,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_9,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_10,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_11,
                                                        specialType:{type:"li",style:{width:"12px",height:"12px",fontSize:"1.1em",color:"black",position:"absolute",left:"-10px"}},
                                                        style:{textAlign:'left',margin:'1.5% 10px',position:'relative'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_12,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_13,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_14,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_15,
                                                        specialType:{type:"li",style:{width:"12px",height:"12px",fontSize:"1.1em",color:"black",position:"absolute",left:"-10px"}},
                                                        style:{textAlign:'left',margin:'1.5% 10px',position:'relative'}
                                                    },
                                                    {   desc:MSG.c14_step_page1_16,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {   desc:MSG.c14_step_page1_17,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_18,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_19,
                                                        specialType:{type:"li",style:{width:"12px",height:"12px",fontSize:"1.1em",color:"black",position:"absolute",left:"-10px"}},
                                                        style:{textAlign:'left',margin:'1.5% 10px',position:'relative'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_20,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_21,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c14_step_page1_22,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    }
                                                ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c14_step_page2_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page2_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page2_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                            {
                                                src:imagePath+'/page2_1.png',
                                                style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                            }
                                          ]
                            },
                            {key:'text',value:[
                                                {
                                                        desc:MSG.c14_step_page2_4,
                                                        style:{textAlign:'left',margin:'2% 10px'}
                                                }
                                            ]
                            },
                            {key:'img',value:[
                                            {
                                                src:imagePath+'/page2_2.png',
                                                style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                            }
                                          ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page2_5,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_3.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c14_step_page3_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page3_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                                {
                                                    desc:MSG.c14_step_page3_3,
                                                    style:{textAlign:'left',margin:'2% 10px'}
                                                }
                                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_1.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'200px':'140px'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                                {
                                                        desc:MSG.c14_step_page3_4,
                                                        style:{textAlign:'left',margin:'2% 10px'}
                                                }
                                            ]
                            },
                            {key:'img',value:[
                                            {
                                                src:imagePath+'/page3.gif',
                                                style:{textAlign:'center',margin:'0 4%'}
                                            }
                                          ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page3_5,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_3.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c14_step_page4_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page4_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page4_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_1.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'200px':'140px'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page4_4,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page4.gif',
                                    style:{textAlign:'center',margin:'0 4%'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page4_5,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_3.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c14_step_page5_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page5_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page5_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_1.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'200px':'140px'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page5_4,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page5.gif',
                                    style:{textAlign:'center',margin:'0 4%'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page5_5,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_3.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c14_step_page6_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page6_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c14_step_page6_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_1.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'200px':'140px'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page6_4,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6.gif',
                                    style:{textAlign:'center',margin:'0 4%'}
                                }
                            ]
                            },
                            {key:'text',value:[
                                {
                                    desc:MSG.c14_step_page6_5,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3_3.png',
                                    style:{textAlign:'center',margin:'2%',height:window.innerHeight>700?'70px':'40px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.see_example]},
                            {key:'text',value:  [
                                {desc:MSG.course_tips,style:{textAlign:'center',margin:'4% 10px',fontSize:'1.1em'}}
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:commonPath+'/eye_close.png',
                                    style:{height:'197px'}
                                }
                            ],
                                replaceValue : [
                                    {
                                        src:imagePath+'/answer.png',
                                        style:{height:'197px'}
                                    }
                                ]
                            },
                            {key:'btn',value:[MSG.course_show], replaceValue:[MSG.course_hide]}
                        ]
    ],
    videoSrc :bgPath+"/course_14.mp4",
    isShowTrash : true,
    toolConfig :'<xml id="toolbox" style="display: none"><category id="id_start" name="'+MSG.id_start+'" colour="#0ae8c0" default="true"><block type="program_goto_start"></block><block type="program_goto_phone_condition"></block></category><category id="id_actions" name="'+MSG.id_actions+'" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636253592061755220"></block></category><category id="id_control" name="'+MSG.id_control+'" colour="#7d94e1"><block type="custom_control_do_while"></block></category><category id="id_events" name="'+MSG.id_events+'" colour="#fda674" ><block type="event_mainboard_power"></block></category><category id="id_show" name="'+MSG.id_show+'" colour="#51da6d"><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="'+MSG.id_sensors+'" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="'+MSG.id_math+'" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow : [1,1,1,1,1,0,0],//菜单是否锁定
    initProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"><next><block type="actions_636253592061755220" id="*XWP4+,S~G0-#Z:*NgzA"><next><block type="id_show_emoji" id="RKI0._T(hbQ:#j.5?5OH"><field name="Emotion">{"lightArray":[{"emotionIndex":11,"color":"#01ffff","id":"1"},{"emotionIndex":11,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id="H[;_iLDQQ[u6ui+n1jJ-"><field name="NUM">3</field></shadow></value><next><block type="program_goto_start" id="u^Z^pknsPqeL]%XrGkWp"></block></next></block></next></block></next></block><block type="program_goto_phone_condition" id=":ZgXrUS=:/NcE{3Q@QhR" x="-65" y="172"><field name="PROGRAM_BRANCH">10</field><field name="SENSOR">phone</field><field name="OP">EQ</field><field name="SENSOR_ID">0</field><field name="VALUE">up</field><field name="TILT_TYPE">up</field><next><block type="custom_control_do_while" id="poR=r8%e_batK/45lagl"><statement name="DO"><block type="movement_servo_rotate_circle" id="u6E}z_l)^0RBn}*})D7/"><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VF"},{"servoId":"2","direction":"2","speed":"VF"},{"servoId":"3","direction":"1","speed":"VF"},{"servoId":"4","direction":"2","speed":"VF"}]</field></block></statement><value name="BOOL"><block type="event_mainboard_power" id="3xNiC,3qn.n~Wrb!xImr"></block></value><next><block type="program_goto_start" id="ruo;cfesn/kaHJ`05Bm5"></block></next></block></next></block><block type="program_goto_phone_condition" id="+LqctQvbILMaZIfUX`qr" x="237" y="173"><field name="PROGRAM_BRANCH">25</field><field name="SENSOR">phone</field><field name="OP">EQ</field><field name="SENSOR_ID">0</field><field name="VALUE">left</field><field name="TILT_TYPE">left</field><next><block type="custom_control_do_while" id="Fc5T!z%Vx%uDm0t@~X+5"><statement name="DO"><block type="movement_servo_rotate_circle" id="^HH3b!W7EIMpF(u501.("><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VF"},{"servoId":"2","direction":"2","speed":"VS"},{"servoId":"3","direction":"1","speed":"VF"},{"servoId":"4","direction":"2","speed":"VS"}]</field></block></statement><value name="BOOL"><block type="event_mainboard_power" id="x~{*hq0*7g(Yw]W9D)EY"></block></value><next><block type="program_goto_start" id="6v}L*tsIje2`M%^EuCwn"></block></next></block></next></block><block type="program_goto_phone_condition" id="i*Q/+apN.@V?W[Fe%0my" x="-59" y="318"><field name="PROGRAM_BRANCH">40</field><field name="SENSOR">phone</field><field name="OP">EQ</field><field name="SENSOR_ID">0</field><field name="VALUE">down</field><field name="TILT_TYPE">down</field><next><block type="custom_control_do_while" id="76lNIbdTx./fygFtEsC0"><statement name="DO"><block type="movement_servo_rotate_circle" id="mR.*m]S8{#y=!k,/{ZZ~"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"},{"servoId":"3","direction":"2","speed":"VF"},{"servoId":"4","direction":"1","speed":"VF"}]</field></block></statement><value name="BOOL"><block type="event_mainboard_power" id="H~NHL!?Q-ap!149LC3tc"></block></value><next><block type="program_goto_start" id="XkNq2u_3Z/v2H{+tam`j"></block></next></block></next></block><block type="program_goto_phone_condition" id="c5v-1TkZHfB-=zQzrM=5" x="255" y="320"><field name="PROGRAM_BRANCH">60</field><field name="SENSOR">phone</field><field name="OP">EQ</field><field name="SENSOR_ID">0</field><field name="VALUE">right</field><field name="TILT_TYPE">right</field><next><block type="custom_control_do_while" id="HI%2pG?GhyC{27,Z%Px{"><statement name="DO"><block type="movement_servo_rotate_circle" id="loTXXO0%f,74Fq_!})*t"><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VS"},{"servoId":"2","direction":"2","speed":"VF"},{"servoId":"3","direction":"1","speed":"VS"},{"servoId":"4","direction":"2","speed":"VF"}]</field></block></statement><value name="BOOL"><block type="event_mainboard_power" id="hm@zyhk!J39e0H[.E`z`"></block></value><next><block type="program_goto_start" id="rKnHgz(BzfJ@yCyuA7J0"></block></next></block></next></block></xml>',
};