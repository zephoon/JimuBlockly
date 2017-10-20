var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var InputComponent = React.createClass({
    getInitialState: function () {
        return {
            postureName: "",
            inputMsgClassName: "input_msg_div",
            inputTipsMsg: this.props.inputTips,
            //输入过程中的检查锁（针对拼音输入法）
            cpLock: false
        };
    },
    inputFocusBus: function (param) {
        if (param === "focus") {
            console.log("获取焦点");
            this.setState({
                inputMsgClassName: "input_msg_div"
            });

            //如果是Android手机，则输入时调高输入框
            if (navigator.userAgent.toLowerCase().indexOf("android") > 0) {
                setTimeout(function () {
                    $('.blockly_popup:last').css({
                        'top': '-50%',
                        'transform': 'translateY(25%)'
                    })
                },100)
            }
        } else {
            console.log("失去焦点");
            var that = this;
            setTimeout(function () {
                that.setState({
                    inputMsgClassName: "hidden_clear_btn"
                });

                //如果是Android手机，则失去焦点时还原输入框位置
                if (navigator.userAgent.toLowerCase().indexOf("android") > 0) {
                    $('.blockly_popup:last').css({
                        'top': '',
                        'transform': ''
                    })
                }
            }, 0)
        }
    },
    componentWillMount: function () {
        //清空输入框的值
        this.setState({postureName: ""});
    },
    stripScript: function (s) {  //检查特殊字符
        console.log("str --------> " + s);
        var pattern = /[`~!@#$%^&*()+=|{}':;',\[\].<>/?~！@#￥％……&*（）——+|{}【】‘；：”“'。，、？]/g;
        //过滤Emoji
        s = s.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\ud83d[\ude80-\udeff]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]/g, "").replace(/\s/g, "").replace(/(^\d*)/, "").replace(pattern, '');
        return s;
    },
    handleChange: function (v) {
        var actionName = v;
        //拼音输入法输入过程中不检查
        if (!this.state.cpLock) {
            //一边检查字符串长度，一边删除超出部分字符
            ///realLength为换算后的长度（中，繁，日，韩，俄，阿为2个长度，其余为1个长度）
            var strLen = actionName.length, realLength = 0, charCode = -1;
            for (var j = 0; j < strLen; j++) {
                charCode = actionName.charCodeAt(j);
                //双字节字符为2个长度
                if (actionName[j].match(/[^\x00-\xff]/)) realLength += 2;
                //单字节字符为1个长度
                else realLength += 1;
                console.log("输入值：" + v + "      real_len" + realLength);
                if (realLength > this.props.maxInputLength){
                    actionName = actionName.substr(0, j);
                    break;
                }
            }

            //检查特殊字符
            actionName = this.stripScript(actionName);
        }

        this.setState({
            postureName: actionName
        });
    },
    clearInputValue: function (e) {  //清除输入框内容
        this.setState({
            postureName: ""
        });
    },
    outPutValue: function () {
        return this.state.postureName;
    },
    errorMsgShow: function (msg) {
        console.log(msg);
        if (msg !== "") {
            this.setState({
                inputMsgClassName: "input_msg_div"
            });
            $(".input_msg_div")[0].style.color = "red";
            this.setState({
                inputTipsMsg: msg
            });
        }
    },
    //拼音输入法输入过程中不检查字符
    lockCp: function () {
        this.setState({
            cpLock: true
        })
    },
    //拼音输入法输入结束时再检查字符
    unLockCp: function (v) {
        this.setState({
            cpLock: false
        }, () => this.handleChange(v))
    },
    render: function () {
        var clear_btn_className = "";
        if (this.state.postureName && this.state.postureName.length != "") {
            clear_btn_className = "clear_div";
        } else {
            clear_btn_className = "hidden_clear_btn";
        }
        return <div className="input_out_div">
            <div className="action_name_div">
                <input id="postureName" type="text" ref="postureName" value={this.state.postureName}
                       onFocus={(e) => this.inputFocusBus('focus')}
                       onBlur={(e) => this.inputFocusBus('blur')}
                       onChange={(e) => this.handleChange(e.target.value)}
                       onCompositionStart={this.lockCp}
                       onCompositionEnd={(e) => this.unLockCp(e.target.value)}
                       placeholder={this.props.placeholder}/>
                <div className="clear_btn_outer">
                    <div className={clear_btn_className} onTouchEnd={(e) => this.clearInputValue(e)}></div>
                </div>
            </div>
            <div className={this.state.inputMsgClassName}>{this.state.inputTipsMsg}</div>
        </div>
    }
});
module.exports = InputComponent;
