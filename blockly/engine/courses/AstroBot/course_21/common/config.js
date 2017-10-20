if (window.blocklyObj) {
    var commonPath = '../../../courses/'+window.SERIAL_NAME+'/common';
    var imagePath = '../../../courses/'+window.SERIAL_NAME+'/course_21/'+window.LANGUAGE_CODE;
    var bgPath = '../../../courses/'+window.SERIAL_NAME+'/course_21/common';
} else {
    var commonPath = './../engine/courses/'+window.SERIAL_NAME+'/common';
    var imagePath = './../engine/courses/'+window.SERIAL_NAME+'/course_21/'+window.LANGUAGE_CODE;
    var bgPath = './../engine/courses/'+window.SERIAL_NAME+'/course_21/common';
}
var courseData = {
    courseId: 21,
    courseName: '课程21',
    courseTitle: MSG.course21_title,
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
                value: MSG.c21_startstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c21_startstory_2,
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
                value: MSG.c21_endstory_1,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: null
            },
            {
                index: 2,
                type: 'text',
                value: MSG.c21_endstory_2,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 1
            },
            {
                index: 3,
                type: 'text',
                value: MSG.c21_endstory_3,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 2
            },
            {
                index: 4,
                type: 'text',
                value: MSG.c21_endstory_4,
                directioin: 'left',
                x: 15,
                y: 65,
                hide_ele_index: 3
            },
            {
                index: 5,
                type: 'img',
                value: commonPath + '/r_xinbao1.png',
                directioin: 'right',
                x: 0,
                y: 7,
                hide_ele_index: null
            },
            {
                index: 6,
                type: 'text',
                value: MSG.c21_endstory_5,
                directioin: 'right',
                x: 13,
                y: 12,
                hide_ele_index: null
            },
            {
                index: 7,
                type: 'img',
                value: commonPath + '/r_lubao.png',
                directioin: 'right',
                x: 0,
                y: 38,
                hide_ele_index: null
            },
            {
                index: 8,
                type: 'text',
                value: MSG.c21_endstory_6,
                directioin: 'right',
                x: 13,
                y: 43,
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
                    desc: MSG.c21_step_page1_1,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1.1em'}
                },
                {
                    desc: MSG.c21_step_page1_2,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_3,
                    style: {textAlign: 'left', margin: '1.5% 20px', fontSize: '0.9em', color: '#A1B3B7'}
                },
                {
                    desc: MSG.c21_step_page1_4,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_5,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_6,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_7,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_8,
                    style: {textAlign: 'left', margin: '1.5% 20px', fontSize: '0.9em', color: '#A1B3B7'}
                },
                {
                    desc: MSG.c21_step_page1_9,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_10,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_11,
                    style: {textAlign: 'left', margin: '1.5% 20px', fontSize: '0.9em', color: '#A1B3B7'}
                },
                {
                    desc: MSG.c21_step_page1_12,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_13,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                },
                {
                    desc: MSG.c21_step_page1_14,
                    style: {textAlign: 'left', margin: '1.5% 10px'}
                }
            ]
            }
        ],
        [
            {key: 'title', value: [MSG.step_1]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page2_1,
                    style: {textAlign: 'center', margin: '2% 30px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page2_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page1_1.gif',
                    style: {textAlign: 'center', margin:'8% 12%'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page2_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page1_2.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'70px':'35px'}
                }
            ]
            }
        ],
        [
            {key: 'title', value: [MSG.step_2]},
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page3_1,
                    style: {textAlign: 'center', margin: '2% 30px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page3_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page2.png',
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
                    desc: MSG.c21_step_page4_1,
                    style: {textAlign: 'center', margin: '2% 10px', fontSize: '1.1em'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page4_2,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page3_1.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page4_3,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page3_1.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
                }
            ]
            },
            {
                key: 'text', value: [
                {
                    desc: MSG.c21_step_page4_4,
                    style: {textAlign: 'left', margin: '1.5% 10px', fontSize: '1em'}
                }
            ]
            },
            {
                key: 'img', value: [
                {
                    src: imagePath+ '/page3_3.png',
                    style: {textAlign: 'center', margin:'10% 2%',height:window.innerHeight>700?'150px':'70px'}
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
    videoSrc: bgPath + "/course_21.mp4",
    isShowTrash: true,
    toolConfig: '<xml id="toolbox" style="display: none"><category id="id_start" name="' + MSG.id_start + '" colour="#0ae8c0" default="true"><block type="program_goto_start"></block><block type="program_goto_phone_condition"></block><block type="program_goto_touch_condition"></block><block type="program_goto_infrared_condition"></block></category><category id="id_actions" name="' + MSG.id_actions + '" colour="#2dc1ea"><block type="movement_servo_rotate_circle"></block><block type="actions_636233527487833810"></block><block type="actions_636233528239565150"></block></category><category id="id_control" name="' + MSG.id_control + '" colour="#7d94e1"><block type="custom_control_wait_for"></block><block type="custom_control_wait_seconds"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num"><field name="NUM">5000</field></shadow></value></block></category><category id="id_events" name="' + MSG.id_events + '" colour="#fda674" ><block type="event_infrared_sensor"></block></category><category id="id_show" name="' + MSG.id_show + '" colour="#51da6d" ><block type="id_show_play_effects"></block><block type="id_show_emoji"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">3</field></shadow></value></block></category><category id="id_sensors" name="' + MSG.id_sensors + '" colour="#ffca05" ><block type="sensor_infrared_sensor_distance"></block><block type="sensor_gyroscope_sensor_angle"></block><block type="sensor_servo_angle"></block><block type="sensor_set_gyrocope_to_zero"></block></category><category id="id_math" name="' + MSG.id_math + '" colour="#809395"><block type="custom_math_num"></block><block type="custom_math_variables_get"></block><block type="custom_math_variables_set"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_variable_change"><value name="value_input"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_add_minus"><value name="FIRST_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="SECOND_EXPRESSION"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value></block><block type="custom_math_random_int"><value name="FROM"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="TO"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_constrain"><value name="VALUE"><shadow type="custom_math_num"><field  name="NUM">50</field></shadow></value><value name="LOW"><shadow type="custom_math_num"><field  name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="custom_math_num"><field  name="NUM">100</field></shadow></value></block><block type="custom_math_logic_compare"></block><block type="custom_math_logic_and"></block><block type="custom_math_logic_not"></block></category></xml>',//菜单可配置
    toolConfigShow: [0, 1, 1, 1, 0, 0, 0],//菜单是否锁定
    initProgram: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="87" y="38"></block></xml>',//xml字符串
    standardProgram: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="program_start" id="RBpqO=zS:Min@~s1YZVV" deletable="false" x="28" y="44"><next><block type="movement_servo_rotate_circle" id="suC]Dz]FOg`]#BKgVgxD"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"F"},{"servoId":"2","direction":"1","speed":"F"}]</field><next><block type="custom_control_wait_for" id="pp_N*Y.Csh)!V:D]BCvS"><value name="CUSTOM_CONTROL_WAIT_FOR"><block type="event_infrared_sensor" id="8?}=%loITjVv#Ft:W4m}"><field name="SENSOR_ID">1</field><field name="OP">LT</field><field name="DISTANCE">5</field></block></value><next><block type="movement_servo_rotate_circle" id="hsUG5@)~HM?{9}qt)OgK"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233527487833810" id="`s%JZb%n~mYSAF;x`Jlf"><next><block type="movement_servo_rotate_circle" id="1Eu`__OW7dkR-nZvJXi%"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"2","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="l^DLeJESM^5]L}=cM0ro"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="A,}1,n6kqjN*w--,j@{G"><field name="NUM">1500</field></shadow></value><next><block type="movement_servo_rotate_circle" id="!RiXAJ?2gr^CXF+J}^5i"><field name="servoGroup">[{"servoId":"1","direction":"2","speed":"VF"},{"servoId":"2","direction":"1","speed":"VF"}]</field><next><block type="custom_control_wait_seconds" id="ZAzI(BX))9)wVxs90+cG"><value name="CUSTOM_CONTROL_WAIT_SECONDS"><shadow type="custom_math_num" id="j7P@=irStkoiESFgfN-:"><field name="NUM">1000</field></shadow></value><next><block type="movement_servo_rotate_circle" id="Q*@}Wp0D-%klO,ebW-%v"><field name="servoGroup">[{"servoId":"1","direction":"3","speed":"VS"},{"servoId":"2","direction":"3","speed":"VS"}]</field><next><block type="actions_636233528239565150" id="U[O7QMM!+.vlgk4qSG9D"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
};