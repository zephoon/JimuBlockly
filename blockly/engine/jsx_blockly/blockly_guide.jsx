var React = require('react');
var ReactDOM = require('react-dom');
var blocklyDatas = require('./../service/blockly_datas');
var CourseTaskdesc = require('./../jsx_course/course_task.jsx');
var eventsListener = require('./../common/events_listener');
var $ = require('jquery');
var GuideComponent = React.createClass({
    getDefaultProps: function() {
        return {
            index_baseurl: "images/help/introduce/",
            index:  [
                        {id:"id_save",imgicon:"save_img.png",arrorimg:"arror2x.png",imgsrc:"save.png",desctext:MSG.save_project_msg},
                        {id:"id_project",imgicon:"project_img.png",arrorimg:"arror2x.png",imgsrc:"project.png",desctext:MSG.projectlist_msg},
                        {id:"id_swift",imgicon:"swift_img.png",arrorimg:"arror2x.png",imgsrc:"swift.png",desctext:MSG.swift_msg},
                        {id:"id_help",imgicon:"help_img.png",arrorimg:"arror2x.png",imgsrc:"help.png",desctext:MSG.help_msg},
                        {id:"id_run",imgicon:"",arrorimg:"down2x.png",imgsrc:"run.png",desctext:MSG.run_msg}
                    ],
            course_baseurl: "images/help/course/",
            course: [
                        {id:"id_video",imgicon:"video.png",arrorimg:"arror.png",desctext:MSG.video_desc},
                        {id:"id_help",imgicon:"help.png",arrorimg:"arror.png",desctext:MSG.help_desc}
                    ]
         };
    },
    getInitialState: function() {
        var platformType = blocklyDatas.getDataByKey("platformType");
        return {
            platformType : platformType
        };
    },
    // dom卸载之前
    componentWillUnmount: function() {
    },
    // 跳过
    goSkip :function(e){
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        return this.props.onRemove();
    },
    // 下一步
    goNext : function(e){
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        var index = parseInt($(".guide_item.active").attr("data-index"));
        console.log("goNext"+index);
        var target = e.currentTarget;
        $(".guide_item[data-index="+index+"]").removeClass("active");
        $(".guide_item[data-index="+(index+1)+"]").addClass('active');
        $(".introduce").hide();
        $(".introduce[data-index="+(index+1)+"]").show();
        if(this.state.platformType == 3){  //课程指引
            if(index>=1){
                $(".guide_item[data-index=0]").addClass('active');
                this.goSkip(e);
                eventsListener.trigger('showCourseTask');
            }
        }else if(this.state.platformType == 1){//blockly指引
            if(index>3){
                $(".guide_item[data-index=0]").addClass('active');
                this.goSkip();
            }
        }
    },
    // 创建Blockly指引
    _renderIndexGuide:function(){
        var _index =this.props.index;
        var guideArr = [];
        var _len = _index.length;
        for(var i = 0;i<_len;i++){
            var item = _index[i];
            var _arrowrimg = this.props.index_baseurl+item.arrorimg;
            var _imgIcon = this.props.index_baseurl+item.imgicon;
            var _imgsrc = this.props.index_baseurl+item.imgsrc;
            var _class = item.imgsrc.substring(0,item.imgsrc.indexOf("."));
            if(i==3){
                guideArr.push(<div key={"coltxt"+i} className="col"><div></div></div>);
            }
            if(i==4){
                guideArr.push(<div key={"introduce"+i} className={"guide_item blockly_zIndex "+(i==0?"active":"")} data-index={i}>
                                    <div className="run_btn executebtn_box flex">
                                        <div className="execute_btn flex">
                                            <i className="icon ion-play fa fa-play"></i>
                                            <span>{MSG['id_start_info']}</span>
                                        </div>
                                    </div>
                                    <div className="down_arror_div"><img src={_arrowrimg} className="arror_img"/></div>
                                    <img src={_imgsrc} className={"introduce_img "+_class+"_img"}/>
                                    <span className={"flex desc_text "+_class+"_text"}>{item.desctext}</span>
                                </div>);
            }else{
                guideArr.push(<div key={"introduce"+i} className={"guide_item blockly_zIndex "+(i==0?"active":"")} data-index={i}>
                                    <div className={"function_btn_box "+_class+"btn_box"}>
                                        <img src={_imgIcon}/>
                                        <img src={_arrowrimg} className="arror_img"/>
                                    </div>
                                    <img src={_imgsrc} className={"introduce_img "+_class+"_img"}/>
                                    <span className={"flex desc_text "+_class+"_text"}>{item.desctext}</span>
                                </div>);
            }
        }
        return guideArr;
    },
    // 创建课程指引
    _renderCourseGuide:function(){
        var _course =this.props.course;
        var guideArr = [];
        var _len = _course.length;
        for(var i = 0;i<_len;i++) {
            var item = _course[i];
            var _arrowrimg = this.props.course_baseurl+item.arrorimg;
            var _imgIcon = this.props.course_baseurl+item.imgicon;
            var _class = item.imgicon.substring(0,item.imgicon.indexOf("."));
            guideArr.push(  <div key={"course"+i} className={"guide_item course_zIndex "+(i==0?"active":"")} data-index={i}>
                                <span className={"function_btn_box "+_class+"btn_box " + (_class=="help"?"":"span_video flex")}>
                                    <img src={_imgIcon} />
                                </span>
                                <img src={_arrowrimg} className={_class+"arror_img"}/>
                                <span className={_class+"_desc_text"}>
                                    <span>{item.desctext}</span>
                                </span>
                            </div>);
        }
        return guideArr;
    },
    render: function(){
        console.log("guide log");
        var guide_componnet = null;
        if(this.state.platformType == 1){  //blockly指引
            guide_componnet = this._renderIndexGuide();
        }
        if(this.state.platformType == 3){  //课程指引
            guide_componnet = this._renderCourseGuide();
        }
        return  <div id="blockly_guidediv" className="blockly_guide" onTouchEnd={this.goNext}>
                    <div>{guide_componnet}</div>
                </div>;
    }
});
module.exports = GuideComponent;