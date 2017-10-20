if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_19/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_19/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_19/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_19/common';
}
var courseData = {
    courseId : 19,
    courseName : '课程19',
    courseTitle:MSG.course19_title,
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
                            value:MSG.c19_startstory_1,
                            directioin:'left',
                            x:14,
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
                        value:commonPath+'/calmtanxingyihao@1x.png',
                        directioin:'left',
                        x:0,
                        y:60,
                        hide_ele_index:null
                    },
                    {
                        index:1,
                        type:'text',
                        value:MSG.c19_endstory_1,
                        directioin:'left',
                        x:12,
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
                                                    desc:MSG.c19_step_page1_1,
                                                    style:{textAlign:'left',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_2,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_4,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'15px',fontSize:'0.9em',color:'#A1B3B7'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_5,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_6,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_7,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_8,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_9,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'15px',fontSize:'0.9em',color:'#A1B3B7'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_10,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_11,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_12,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'15px',fontSize:'0.9em',color:'#A1B3B7'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_13,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_14,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_15,
                                                    style:{textAlign:'left',margin:'1.5% 10px',paddingLeft:'5px'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page1_16,
                                                    style:{textAlign:'left',margin:'1.5% 10px'}
                                                }
                                                
                                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_1]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page2_1,
                                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page2_2,
                                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page1_1.gif',
                                                style:{textAlign:'center',margin:'8% 12%'}
                                            }
                                        ]
                        },
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page2_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page1_2.png',
                                                style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                            }
                                        ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_2]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page3_1,
                                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page3_2,
                                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page2_1.png',
                                                style:{textAlign:'center',margin:'8% 20%'}
                                            }
                                        ]
                        },
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page3_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page2_2.png',
                                                style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                            }
                                        ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_3]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page4_1,
                                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page4_2,
                                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page3_1.gif',
                                                style:{textAlign:'center',margin:'8% 12%'}
                                            }
                                        ]
                        },
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page4_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page1_2.png',
                                                style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                                            }
                                        ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_4]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page5_1,
                                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page5_2,
                                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page1_1.gif',
                                                style:{textAlign:'center',margin:'8% 12%'}
                                            }
                                        ]
                        },
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page5_3,
                                                    style:{textAlign:'left',margin:'1.5% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page4_2.png',
                                                style:{textAlign:'center',margin:'10% 2%',height:window.innerHeight>700?'300px':'140px'}
                                            }
                                        ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_5]},
                        {key:'text',value:  [
                                {
                                    desc:MSG.c19_step_page6_1,
                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c19_step_page6_2,
                                    style:{textAlign:'left',margin:'2% 30px',fontSize:'1.1em',textAlign:'center'}
                                }
                            ]
                        },
                        {key:'img',value:[
                                {
                                    src:imagePath+'/page5.gif',
                                    style:{textAlign:'center',margin:'8% 12%'}
                                }
                            ]
                        },
                        {key:'text',value:  [
                                {
                                    desc:MSG.c19_step_page6_3,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                },
                                {
                                    desc:MSG.c19_step_page6_4,
                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                }
                            ]
                        }
                    ],
                    [
                        {key:'title',value:[MSG.step_6]},
                        {key:'text',value:  [
                                                {
                                                    desc:MSG.c19_step_page7_1,
                                                    style:{textAlign:'center',margin:'1.8% 10px',fontSize:'1.1em'}
                                                },
                                                {
                                                    desc:MSG.c19_step_page7_2,
                                                    style:{textAlign:'left',margin:'2% 10px',fontSize:'1.1em'}
                                                }
                                            ]
                        },
                        {key:'img',value:[
                                            {
                                                src:imagePath+'/page6.png',
                                                style:{textAlign:'center',margin:'30% 2%',height:window.innerHeight>700?'70px':'35px'}
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
    videoSrc :bgPath+"/course_19.mp4",
    isShowTrash : true,
    toolConfig :'<xml id="toolbox" style="display: none"><category id="id_start" name="'+MSG.id_start+'" colour="#0ae8c0" default="true"><block type="program_goto_start"></block></category><category id="id_actions" name="'+MSG.id_actions+'" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636233527487833810"></block><block type="actions_636233528239565150"></block></category><category id="id_control" name="'+MSG.id_control+'" colour="#7d94e1"><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block><block type="custom_control_if"></block></category><category id="id_events" name="'+MSG.id_events+'" colour="#fda674"><block type="event_phone_pad_tilt"></block></category><category id="id_show" name="'+MSG.id_show+'" colour="#51da6d" ><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="'+MSG.id_sensors+'" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="'+MSG.id_math+'" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow : [1,1,1,1,0,0,0],//菜单是否锁定
    initProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram : '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="-43" y="-4"><next><block type="custom_control_if" id="H[]{o!TT#z/M`z%39Na]"><value name="CUSTOM_CONTROL_IF"><block type="event_phone_pad_tilt" id="1^0S%81#V9vHSGlFjA{t"><field name="TILT_TYPE">up</field></block></value><statement name="CUSTOM_CONTROL_DO0"><block type="movement_servo_rotate_circle" id="dv7)i;,f0Y!KTeGV1:if"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="q*^20R=YEO}skAldIk{]"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="9GJmDU{@WfDutkk`*?d0"><field name="NUM">1500</field></shadow></value><next><block type="movement_servo_rotate_circle" id="IXi,bjkJLd6bW54*j9p@"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233527487833810" id="X`M7/+.?(mmy9-zyCF%o"><next><block type="movement_servo_rotate_circle" id="yRmF6,z6#cqK.yFm%J]8"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"2","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="yV6v#X^nIk2I:vG9ijvQ"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="p02%s]jDGrJTd%fVQdgM"><field name="NUM">1500</field></shadow></value><next><block type="movement_servo_rotate_circle" id="uAn,Cwa#lHWUoje-JR(Q"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id=")pUX1;,VX8Zf299LXxi~"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="f~qo_k],*hw!#C/OH}bK"><field name="NUM">2000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="_Fax}p19(XnZCy@e;3GY"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233528239565150" id="]VzWNx!g:7g8jTAwL?N]"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type="program_goto_start" id="(m/0q%%6{GdE80!zMl6*"></block></next></block></next></block></xml>',
};