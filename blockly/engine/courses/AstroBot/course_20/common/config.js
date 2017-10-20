if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_20/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_20/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_20/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_20/common';
}
var courseData = {
    courseId: 20,
    courseName: '课程20',
    courseTitle: MSG.course20_title,
    backgroundImg: bgPath + '/bg.jpg',
    startStory: [
        [
            {
                index: 0,
                type: 'img',
                value: commonPath + '/calmtanxingyihao@1x.png',
                directioin: 'left',
                x: 0,
                y: 60,
                hide_ele_index: null
            },
            {
                index: 1,
                type: 'text',
                value: MSG.c20_startstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c20_startstory_2,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 1
            }

        ]
    ],
    endStory: [
        [
            {
                index: 0,
                type: 'img',
                value: commonPath + '/l_happytanxingyihao.png',
                directioin: 'left',
                x: 0,
                y: 60,
                hide_ele_index: null
            },
            {
                index: 1,
                type: 'text',
                value: MSG.c20_endstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            }

        ]
    ],
    allStepPage: [
        [
            {key: 'title', value: [MSG.task]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page1_1,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1.1em'}
                },
                {
                    desc: MSG.c20_step_page1_2,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_3,
                    style: {textAlign: 'left', margin: '1.5% 20px'}
                },
                {
                    desc: MSG.c20_step_page1_4,
                    style: {textAlign: 'left', margin: '1.5% 20px'}
                },
                {
                    desc: MSG.c20_step_page1_5,
                    style: {textAlign: 'left', margin: '1.5% 20px'}
                },
                {
                    desc: MSG.c20_step_page1_6,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_7,
                    style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                },
                {
                    desc: MSG.c20_step_page1_8,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_9,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_10,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_11,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_12,
                    style:{textAlign:'left',margin:'1.5% 20px',fontSize:'0.9em',color:'#A1B3B7'}
                },
                {
                    desc: MSG.c20_step_page1_13,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_14,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_15,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_16,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_17,
                    style:{textAlign:'left',margin:'1.5% 26px',fontSize:'0.9em',color:'#A1B3B7'}
                },
                {
                    desc: MSG.c20_step_page1_18,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_19,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c20_step_page1_20,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
            ]
            }
        ],
        [
            {key: 'title', value: [MSG.step_1]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page2_1,
                    style: {textAlign: 'center', margin: '2% 30px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page2_2,
                    style: {textAlign: 'center', margin: '0 10px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page1.gif',
                    style: {textAlign: 'center', margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page2_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page2_4,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page2_5,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            }
        ],
        [
            {key: 'title', value: [MSG.step_2]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page3_1,
                    style: {textAlign: 'center', margin: '1.5% 30px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page3_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page2_1.gif',
                    style: {textAlign: 'center',margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page3_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page2_2.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                }
            ]
            }

        ],
        [
            {key: 'title', value: [MSG.step_3]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page4_1,
                    style: {textAlign: 'center', margin: '2% 30px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page4_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page3_1.png',
                    style: {textAlign: 'center', margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page3_2.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                }
            ]
            }

        ],
        [
            {key: 'title', value: [MSG.step_4]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page5_1,
                    style: {textAlign: 'center', margin: '1.5% 10px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page5_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page4_1.gif',
                    style: {textAlign: 'center', margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page5_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page4_2.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                }
            ]
            }

        ],
        [
            {key: 'title', value: [MSG.step_5]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page6_1,
                    style: {textAlign: 'center', margin: '1.5% 10px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page6_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page5_1.gif',
                    style: {textAlign: 'center', margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c20_step_page6_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page5_2.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'300px':'140px'}
                }
            ]
            }
        ],
        [
            {key: 'title', value: [MSG.see_example]},
            {
                key: 'text', value: [
                {desc: MSG.course_tips, style: {textAlign: 'center', margin: '4% 10px', fontSize: '1.1em'}}
            ]
            },
            {
                key: 'img', value: [
                {
                    src: commonPath + '/eye_close.png',
                    style: {height: '197px'}
                }
            ],
                replaceValue: [
                    {
                        src: imagePath+ '/answer.png',
                        style: {height: '197px'}
                    }
                ]
            },
            {key: 'btn', value: [MSG.course_show], replaceValue: [MSG.course_hide]}
        ]
    ],
    videoSrc: bgPath + "/course_20.mp4",
    isShowTrash: true,
    toolConfig: '<xml id="toolbox" style="display: none"><category id="id_start" name="' + MSG.id_start + '" colour="#0ae8c0" default="true"><block type="program_goto_start"></block><block type="program_goto_phone_condition"></block><block type="program_goto_touch_condition"></block><block type="program_goto_infrared_condition"></block></category><category id="id_actions" name="' + MSG.id_actions + '" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636233527487833810"></block><block type="actions_636233528239565150"></block><block type="actions_636250975382721730"></block><block type="actions_636250882787328100"></block></category><category id="id_control" name="' + MSG.id_control + '" colour="#7d94e1"><block type="custom_control_do_while"></block><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block></category><category id="id_events" name="' + MSG.id_events + '" colour="#fda674" ><block type="event_phone_pad_tilt"></block></category><category id="id_show" name="' + MSG.id_show + '" colour="#51da6d" ><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="' + MSG.id_sensors + '" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="' + MSG.id_math + '" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow: [0, 1, 1, 1, 1, 0, 0],//菜单是否锁定
    initProgram: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="7" y="4"><next><block type="custom_control_do_while" id="7hg/-)yR~mDBXB;SpWfW"><statement name="DO"><block type="id_show_emoji" id="uZNP0{YRgkv9T8zas{M%"><field name="Emotion">{"lightArray":[{"emotionIndex":8,"color":"#01ffff","id":"1"},{"emotionIndex":8,"color":"#01ffff","id":"2"}],"islightLock":true}</field><value name="value_input"><shadow type="custom_math_num" id="AyY!d{fRBuy3=J@-hHW_"><field name="NUM">1</field></shadow></value><next><block type="id_show_play_effects" id="uLihL]xeco]Sf,?#]916"><field name="Effect">{"key":"nonsense","description":"呓语","type":"emotion","isDelay":false}</field><next><block type="actions_636250882787328100" id="^}@g^nTlf-A7p8}MPn+o"></block></next></block></next></block></statement><value name="BOOL"><block type="event_phone_pad_tilt" id="7ktL0`cK*VACL-DZ}(yP"><field name="TILT_TYPE">down</field></block></value><next><block type="movement_servo_rotate_circle" id="DNLFjVk}UUnYCCF97!q}"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id=":%U`cfgOC(6Qh*J.(UGL"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="3%,rb4j}h-2O#zhR{xAA"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="N]PZ(=(zQ[~^#:3~UqVS"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233527487833810" id="{.`qY9@w%%K@l:SZ1U5w"><next><block type="movement_servo_rotate_circle" id="hF^g4(+}z1oP%11hZ,E{"><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="lO-3k^BEJX`Y,nEs(26-"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="h?;)4D9md1p03=]X1LG~"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="kWBA`pyP_mWF)eC/!pW#"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233528239565150" id="{P1HxjMZ%%d3ltc)u:(R"><next><block type="movement_servo_rotate_circle" id="w[5k[QnE+=RA)Ou4]2D["><field name="servoGroup">[{"servoId":"1","direction":"1","speed":"VF"},{"servoId":"2","direction":"2","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="`DvBfy:JIU6_SFB46u4R"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="AAeYcG(`N`/HGEp;tui["><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="JU!q^JtA#Wu0F0{B%+mt"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636250975382721730" id="m`c7k{E)^roI0%!=.V_n"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
};