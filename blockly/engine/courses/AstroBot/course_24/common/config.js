if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_24/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_24/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_24/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_24/common';
}
var courseData = {
    courseId : 24,
    courseName : '课程24',
    courseTitle:MSG.course24_title,
    backgroundImg:bgPath+'/bg.jpg',
    startStory : [
        [
            {
                index:0,
                type:'img',
                value:commonPath+'/l_happytanxingyihao.png',
                directioin:'left',
                x:0,
                y:60,
                hide_ele_index:null
            },
            {
                index:1,
                type:'text',
                value:MSG.c24_startstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            }

        ]
    ],
    endStory:[
        [
            {
                index:0,
                type:'img',
                value:commonPath+'/l_meebot.png',
                directioin:'left',
                x:0,
                y:60,
                hide_ele_index:null
            },
            {
                index:1,
                type:'text',
                value:MSG.c24_endstory_1,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:null
            },
            {
                index:2,
                type:'text',
                value:MSG.c24_endstory_2,
                directioin:'left',
                x:15,
                y:65,
                hide_ele_index:1
            }
        ]
    ],
    allStepPage: [
        [
            {key:'title',value:[MSG.task]},
            {key:'text',value:  [
                {
                    desc:MSG.c24_step_page1_1,
                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                },
                {
                    desc:MSG.c24_step_page1_2,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_3,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_4,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_5,
                    style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                },
                {
                    desc:MSG.c24_step_page1_6,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_7,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_8,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_9,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                },
                {
                    desc:MSG.c24_step_page1_10,
                    style:{textAlign:'left',margin:'1.5% 10px'}
                }
            ]
            }
        ],
        [
            {key:'title',value:[MSG.step_1]},
            {key:'text',value:  [
                {
                    desc:MSG.c24_step_page2_1,
                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                }
            ]
            },
            {key:'img',value:[
                {
                    src:imagePath+'/page1.png',
                    style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'75px':'40px'}
                }
            ]
            }
        ],
        [
            {key:'title',value:[MSG.step_2]},
            {key:'text',value:  [
                {
                    desc:MSG.c24_step_page3_1,
                    style:{textAlign:'left',margin:'2% 10px'}
                }
            ]
            },
            {key:'img',value:[
                {
                    src:imagePath+'/page2_1.png',
                    style:{textAlign:'center',margin:'6% 2%',height:window.innerHeight>700?'75px':'40px'}
                }
            ]
            },
            {key:'text',value:  [
                {
                    desc:MSG.c24_step_page3_2,
                    style:{textAlign:'left',margin:'2% 10px'}
                }
            ]
            },
            {key:'img',value:[
                {
                    src:imagePath+'/page2_2.gif',
                    style:{textAlign:'center',margin:'8% 12%'}
                }
            ]
            }

        ],
        [
            {key:'title',value:[MSG.step_3]},
            {key:'text',value:  [
                {
                    desc:MSG.c24_step_page4_1,
                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                }
            ]
            },
            {key:'img',value:[
                {
                    src:imagePath+'/page3.png',
                    style:{textAlign:'center',margin:'20% 2%',height:window.innerHeight>700?'375px':'170px'}
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
    videoSrc :bgPath+"/course_24.mp4",
    isShowTrash : true,
    toolConfig :'<xml id="toolbox" style="display: none"><category id="id_start" name="'+MSG.id_start+'" colour="#0ae8c0" default="true"><block type="program_goto_start"></block><block type="program_goto_phone_condition"></block><block type="program_goto_touch_condition"></block><block type="program_goto_infrared_condition"></block></category><category id="id_actions" name="'+MSG.id_actions+'" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636250882787328100"></block><block type="actions_636250975382721730"></block></category><category id="id_control" name="'+MSG.id_control+'" colour="#7d94e1"><block type="custom_control_wait_for"></block><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block></category><category id="id_events" name="'+MSG.id_events+'" colour="#fda674" ><block type="event_infrared_sensor"></block></category><category id="id_show" name="'+MSG.id_show+'" colour="#51da6d" ><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="'+MSG.id_sensors+'" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="'+MSG.id_math+'" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow : [0,1,1,1,1,0,0],//菜单是否锁定
    initProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="11" y="35"><next><block type="id_show_emoji" id="hU@fAM7?u6F!L3Loo-sh"><field name="Emotion">{"lightArray":[{"emotionIndex":3,"color":"#01ffff","id":"1"},{"emotionIndex":3,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id="xb}J*G+v5}MDdkdRJRw?"><field name="NUM">3</field></shadow></value><next><block type="custom_control_wait_for" id="QE4%tgb1gnM!Fan%(ir9"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="event_infrared_sensor" id="-za.pmN^XXP.VKS0PvRR"><field name="SENSOR_ID">1</field><field name="OP">LT</field><field name="DISTANCE">10</field></block></value><next><block type="movement_servo_rotate_circle" id="RXb.wfG!Up=c[SeW]uuZ"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="id_show_play_effects" id="QK*Vd]npir+*#MK6v]nz"><field name="Effect">{"key":"surprise","description":"惊喜","type":"emotion","isDelay":false}</field><next><block type="custom_control_wait_seconds" id="G8-+(Fed[_gw[]Dp[ZqO"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="09N:l^C=Dt-]mxINb-V#"><field name="NUM">1500</field></shadow></value><next><block type="movement_servo_rotate_circle" id="H)0O:gv#9-*TilNy+K-:"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636250882787328100" id="i)Q8xJ*khigf:NcfQVou"><next><block type="actions_636250975382721730" id="~juXwj{31]`HraN]@Pz]"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
};