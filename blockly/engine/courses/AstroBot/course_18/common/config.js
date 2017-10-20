if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_18/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_18/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_18/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_18/common';
}
var courseData = {
    courseId : 18,
    courseName : '课程18',
    courseTitle:MSG.course18_title,
    backgroundImg:bgPath+'/bg.jpg',
    startStory : [
                    [
                        {
                            index:0,
                            type:'img',
                            value:commonPath+'/calmtanxingyihao@1x.png',
                            directioin:'left',
                            x:0,
                            y:60,
                            hide_ele_index:null
                        },
                        {
                            index:1,
                            type:'text',
                            value:MSG.c18_startstory_1,
                            directioin:'left',
                            x:12,
                            y:65,
                            hide_ele_index:null
                        },
                        {
                            index:2,
                            type:'text',
                            value:MSG.c18_startstory_2,
                            directioin:'left',
                            x:12,
                            y:65,
                            hide_ele_index:1
                        }

                    ]
    ],
    endStory:[
                [
                    {
                        index:0,
                        type:'img',
                        value:commonPath+'/calmtanxingyihao@1x.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c18_endstory_1,
                        directioin:'left',
                        x:12,
                        y:65,
                        hide_ele_index:null
                    }

                ]
    ],
        allStepPage: [ 
                        [
                            {key:'title',value:[MSG.c18_step_page1_1]},
                            {key:'text',value:  [
                                                    {
                                                        desc:MSG.c18_step_page1_2,
                                                        style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_3,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_4,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_5,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_6,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_7,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_8,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_9,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_10,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_11,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_12,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_13,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_14,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_15,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_16,
                                                        style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                    },
                                                    {
                                                        desc:MSG.c18_step_page1_17,
                                                        style:{textAlign:'left',margin:'1.5% 10px'}
                                                    }
                                                ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page2_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page2_2,
                                    style:{textAlign:'left',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:bgPath+'/page2_1.png',
                                    style:{textAlign:'center',margin:'8% 20%'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page2_3,
                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'0.9em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page2_4,
                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'0.9em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page2_5,
                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'0.9em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page2_6,
                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'0.9em'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page3_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page3_2,
                                    style:{textAlign:'center',margin:'1.5% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page2_2.png',
                                    style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                            }

                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page4_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page4_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page3.png',
                                    style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                            }

                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page5_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page5_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page5.png',
                                    style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                            }

                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page6_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page6_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page6_3,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6.gif',
                                    style:{textAlign:'center',margin:'8% 12%'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page6_4,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page7_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page7_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page7_3,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                                {
                                                    src:imagePath+'/page7.gif',
                                                    style:{textAlign:'center',margin:'8% 12%'}
                                                }
                                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page7_4,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page8_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page8_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page8_3,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page8.gif',
                                    style:{textAlign:'center',margin:'8% 12%'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page8_4,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                            }
                        ],
                        [
                            {key:'title',value:[MSG.c18_step_page9_1]},
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page9_2,
                                    style:{textAlign:'center',margin:'2% 30px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page9_3,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page8.gif',
                                    style:{textAlign:'center',margin:'8% 12%'}
                                }
                            ]
                            },
                            {key:'text',value:  [
                                {
                                    desc:MSG.c18_step_page9_4,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                            },
                            {key:'img',value:[
                                {
                                    src:imagePath+'/page6_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
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
    videoSrc :bgPath+"/course_18.mp4",
    isShowTrash : true,
    toolConfig :'<xml id="toolbox" style="display: none"><category id="id_start" name="'+MSG.id_start+'" colour="#0ae8c0" default="true"><block type="program_goto_start"></block><block type="program_goto_phone_condition"></block><block type="program_goto_touch_condition"></block><block type="program_goto_infrared_condition"></block></category><category id="id_actions" name="'+MSG.id_actions+'" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636233531979600550"></block></category><category id="id_control" name="'+MSG.id_control+'" colour="#7d94e1"><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block></category><category id="id_events" name="'+MSG.id_events+'" colour="#fda674" ><block type="event_mainboard_power"></block><block type="event_infrared_sensor"></block><block type="event_gyroscope"></block><block type="event_phone_pad_tilt"></block></category><category id="id_show" name="'+MSG.id_show+'" colour="#51da6d" ><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="'+MSG.id_sensors+'" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="'+MSG.id_math+'" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow : [0,1,1,0,1,0,0],//菜单是否锁定
    initProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="-57" y="-74"><next><block type="actions_636233531979600550" id="QVdEOkr;u3fDnbohP1qh"><next><block type="id_show_emoji" id="Buq12wFCA+c8V?FJd=e3"><field name="Emotion">{"lightArray":[{"emotionIndex":11,"color":"#01ffff","id":"1"},{"emotionIndex":11,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id="9)m[^kU5KN@!cCs/Cv[_"><field name="NUM">3</field></shadow></value><next><block type="id_show_play_effects" id="1lTMz}:xSF5v7V_v%a5y"><field name="Effect">{"key":"doubt","description":"疑问","type":"emotion","isDelay":false}</field><next><block type="movement_servo_rotate_circle" id="lSR~,RB0D~_i)Qyx@4)^"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="@Nd}@rw06A#RFWV;NyYc"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="M-L*Iuy9R3B%p2^,i`P;"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="fc?UJ-I07NKKh]`_0F)j"><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VF"},{"servoId":"2","direction":"2","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="%pkxC]o:1:`+NzfjMr6U"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="PXf`6jq!W3N.]d0L}LG_"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id=",oQ./q*56:Xo4mXJ8;ww"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VS"}]</field><next><block type="custom_control_wait_seconds" id="[q[it~]Op-H`*pMwjE+g"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="Ga5WCEc`!E?H62Tc21q5"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id=",9iXb-Yt1?e%bPgcBF_`"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VS"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="uoRT@2)h-+r@}}l@2,K."><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="TFzvv:AR@(#r]#VY=c9."><field name="NUM">1000</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
};