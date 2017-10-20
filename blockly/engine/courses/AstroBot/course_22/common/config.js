if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_22/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_22/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_22/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_22/common';
}
var courseData = {
    courseId : 22,
    courseName : '课程22',
    courseTitle:MSG.course22_title,
    backgroundImg:bgPath+'/bg.jpg',
    startStory : [
                    [
                        {
                            index:0,
                            type:'img',
                            value:commonPath+'/r_Enemy2.png',
                            directioin:'right',
                            x:0,
                            y:30,
                            hide_ele_index:null
                        },
                        {
                            index:1,
                            type:'text',
                            value:MSG.c22_startstory_1,
                            directioin:'right',
                            x:12,
                            y:35,
                            hide_ele_index:null
                        },
                        {
                            index:2,
                            type:'text',
                            value:MSG.c22_startstory_2,
                            directioin:'right',
                            x:12,
                            y:35,
                            hide_ele_index:1
                        },
                        {
                            index:3,
                            type:'img',
                            value:commonPath+'/l_angury.png',
                            directioin:'left',
                            x:0,
                            y:60,
                            hide_ele_index:null
                        },
                        {
                            index:4,
                            type:'text',
                            value:MSG.c22_startstory_3,
                            directioin:'left',
                            x:14,
                            y:65,
                            hide_ele_index:2
                        },
                        {
                            index:5,
                            type:'text',
                            value:MSG.c22_startstory_4,
                            directioin:'left',
                            x:14,
                            y:65,
                            hide_ele_index:4
                        },
                        {
                            index:5,
                            type:'text',
                            value:MSG.c22_startstory_5,
                            directioin:'right',
                            x:12,
                            y:35,
                            hide_ele_index:null
                        }
                    ]
    ],
    endStory:[
                [
                    {
                        index:0,
                        type:'img',
                        value:commonPath+'/r_Enemy2.png',
                        directioin:'right',
                        x:0,
                        y:30,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c22_endstory_1,
                        directioin:'right',
                        x:12,
                        y:35,
                        hide_ele_index:null
                    },
                    {
                        index:2,
                        type:'img',
                        value:commonPath+'/l_angury.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:3,
                        type:'text',
                        value:MSG.c22_endstory_2,
                        directioin:'left',
                        x:14,
                        y:65,
                        hide_ele_index:null
                    }
                ]
    ],
    allStepPage: [ 
                    [
                        {key:'title',value:[MSG.task]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c22_step_page1_1,
                                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_2,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_4,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_5,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_6,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_7,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_8,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_9,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_10,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_11,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_12,
                                                    style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_13,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_14,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_15,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_16,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_17,
                                                    style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_18,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_19,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_20,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_21,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_22,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_23,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c22_step_page1_24,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                }
                                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_1]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page2_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page2_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page1.png',
                                    style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                        },
                    ],
                    [
                        {key:'title',value:[MSG.step_2]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page3_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page3_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page2.png',
                                    style:{textAlign:'center',margin:'22% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        },
                    ],
                    [
                        {key:'title',value:[MSG.step_3]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page4_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page4_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page3.gif',
                                    style:{textAlign:'center',margin:'0',width:'300px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_4]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page5_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page5_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page4.gif',
                                    style:{textAlign:'center',margin:'0',width:'300px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_5]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page6_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page6_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page1.png',
                                    style:{textAlign:'center',margin:'6% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page6_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page5_2.png',
                                    style:{textAlign:'center',margin:'6% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_6]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page7_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page7_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page6.gif',
                                    style:{textAlign:'center',margin:'2%'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page7_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                },
                                {
                                    desc:MSG.c22_step_page7_4,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_7]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page8_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page8_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page7.png',
                                    style:{textAlign:'center',margin:'22% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_8]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page9_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page9_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page8_1.png',
                                    style:{textAlign:'center',margin:'6% 2%',height:window.innerHeight>700?'75px':'40px'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page9_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page8_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_9]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page10_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page10_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page9_1.gif',
                                    style:{textAlign:'center',margin:"8% 12%"}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page10_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page9_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_10]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page11_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c22_step_page11_2,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page10_1.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page11_3,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page10_2.png',
                                    style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c22_step_page11_4,
                                    style:{textAlign:'left',margin:'2% 10px'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page5_2.png',
                                    style:{textAlign:'center',margin:'6% 2%',height:window.innerHeight>700?'75px':'40px'}
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
    videoSrc :bgPath+"/course_22.mp4",
    isShowTrash : true,
    toolConfig :'<xml id="toolbox" style="display: none"><category id="id_start" name="'+MSG.id_start+'" colour="#0ae8c0" default="true"><block type="program_goto_start"></block></category><category id="id_actions" name="'+MSG.id_actions+'" colour="#2dc1ea"><block type="movement_servo_change_angle_multi"></block><block type="movement_servo_rotate_circle"></block><block type="actions_636233531979600550"></block><block type="actions_636233527487833810"></block><block type="actions_636250847172220020"></block><block type="actions_636251070101840250"></block></category><category id="id_control" name="'+MSG.id_control+'" colour="#7d94e1"><block type="custom_control_do_while"></block><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block><block type="custom_control_wait_for"></block></category><category id="id_events" name="'+MSG.id_events+'" colour="#fda674"><block type="event_infrared_sensor"></block><block type="event_phone_pad_tilt"></block></category><category id="id_show" name="'+MSG.id_show+'" colour="#51da6d"><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="'+MSG.id_sensors+'" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="'+MSG.id_math+'" colour="#809395"><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block></category></xml>',//菜单可配置
    toolConfigShow : [0,1,1,1,1,0,1],//菜单是否锁定
    initProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="42" y="4"><next><block type="movement_servo_change_angle_multi" id="Bf~#Tb)QG7rddO8f}myx"><field name="servoGroup">3:114</field><field name="TIME">400</field><field name="servo3">114</field><next><block type="custom_control_do_while" id="Q=W!hG?wYxj(ZSpC*{N%"><statement name="DO"><block type="id_show_emoji" id="i^W~vkN1)Lc,DvLSWF_Q"><field name="Emotion">{"lightArray":[{"emotionIndex":4,"color":"#01ffff","id":"1"},{"emotionIndex":4,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id=",okOQ,u2=Wos}a.:I:Jl"><field name="NUM">1</field></shadow></value><next><block type="id_show_play_effects" id="!L*Iq1i;P%tLQ#Mv:rsK"><field name="Effect">{"key":"lose","description":"失落","type":"emotion","isDelay":false}</field><next><block type="custom_math_variables_set" id="C#j*.=/xvw`_`1Ko9%r7"><field name="VAR">X</field><value name="VALUE"><shadow type="custom_math_num" id="JweB9sipQ}lA`JJI0j_S"><field name="NUM">1</field></shadow><block type="custom_math_random_int" id=":4Q]_HtexL~7_H}t%U{@"><value name="FROM"><shadow type="custom_math_num" id="SdyJ~ErBZ]HA#rZM;sY_"><field name="NUM">-10</field></shadow></value><value name="TO"><shadow type="custom_math_num" id="_,[zE0[;J6BAEgWr3xf@"><field name="NUM">80</field></shadow></value></block></value><next><block type="custom_math_variables_set" id="RKyW{V(I(Y1x{NUY;:(h"><field name="VAR">Y</field><value name="VALUE"><shadow type="custom_math_num" id="G(emP8[7K2A-]bNzn4pk"><field name="NUM">1</field></shadow><block type="custom_math_random_int" id="F]f2)c6ZSF3s{N96Pw!t"><value name="FROM"><shadow type="custom_math_num" id="98AoxPvRRmExbDZ.nPli"><field name="NUM">-80</field></shadow></value><value name="TO"><shadow type="custom_math_num" id="J?LN.Zvbp4F)3NP7EbN/"><field name="NUM">10</field></shadow></value></block></value><next><block type="movement_servo_change_angle_multi" id="AjkqS0cr4~TJyyiK!-7b"><field name="servoGroup">4:X,5:Y</field><field name="TIME">200</field><field name="servo4">X</field><field name="servo5">Y</field><next><block type="custom_control_wait_seconds" id="+8-/F*m7Tm~(ps~NI-pJ"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="ec#cSw}ys47G4i?;9{J+"><field name="NUM">1500</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></statement><value name="BOOL"><block type="event_phone_pad_tilt" id="Q;:pyASURJb=}S!FdieA"><field name="TILT_TYPE">down</field></block></value><next><block type="actions_636233531979600550" id=":CZxC4ns6t{cskPDzO;*"><next><block type="movement_servo_rotate_circle" id="Qz2?Of+R]HbZ0W;8bg~;"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"F"},{"servoId":"2","direction":"1","speed":"F"}]</field><next><block type="custom_control_wait_for" id="D1u!k#3^25/KY%Zup0dI"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="event_infrared_sensor" id="TEX08Q5ruZxkEIVT+%WY"><field name="SENSOR_ID">1</field><field name="OP">LT</field><field name="DISTANCE">5</field></block></value><next><block type="movement_servo_rotate_circle" id="!Rsd.`5xno[DMcd2jNEb"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233527487833810" id="0C)=.;2vR6dyNK7]+,Ax"><next><block type="movement_servo_rotate_circle" id="x87h9`pC#FsMFYDB_Wr)"><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"F"},{"servoId":"2","direction":"2","speed":"F"}]</field><next><block type="custom_control_wait_seconds" id="b+BWucp/zx0KA^C[@XVg"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="edfd`XkpIY`+i_xZwFZ]"><field name="NUM">2000</field></shadow></value><next><block type="id_show_play_effects" id="Joxu]o?=DI;US6S8x3/~"><field name="Effect">{"key":"angry","description":"生气","type":"emotion","isDelay":false}</field><next><block type="movement_servo_rotate_circle" id="IW-!-hESO8={NnDP5M0Q"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636250847172220020" id="C1sFhP9bi^{q3D4HNzWV"><next><block type="actions_636251070101840250" id="uqC)c2K.Ypa6my07v@ZQ"><next><block type="id_show_emoji" id="LK6b4VqINQN^+0Xhaz/w"><field name="Emotion">{"lightArray":[{"emotionIndex":3,"color":"#01ffff","id":"1"},{"emotionIndex":3,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id="x3uZ2k(I1lN12-)E7c04"><field name="NUM">2</field></shadow></value><next><block type="custom_control_wait_seconds" id="E{^W5[e.UAQ,xa{Me0?N"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="gs0Ii3Ksn*cWl_R,4AsQ"><field name="NUM">1000</field></shadow></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
};