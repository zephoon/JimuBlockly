var React = require('react');
var ReactDOM = require('react-dom');
var SliderComponent = require('./../jsx_common/slider_component.jsx');
var $ = require('jquery');
var Promise = require("bluebird");
var utils = require('../common/utils/utils.js');
var CourseStory = React.createClass({
    getInitialState : function(){
        var courseData = require('../service/course_data');
        var _data = courseData.getCourseData();
        var _story = (this.props.data.type === 'startStory'?_data.startStory:_data.endStory);
        // console.log(_story);
        return {
            courseId:_data.courseId,
            bgImg:_data.backgroundImg,
            story: _story,
            type:this.props.data.type
        };
    },
    // 页面加载完成
    componentDidMount: function() {
        var _that = this;
        var _story = this.state.story[0];
        var _len = this.state.story[0].length;
        var storyAnimal = [];
        for(var i = 0 ; i < _len ; i++){
            var obj = _story[i];
            // console.log(obj.hide_ele_index+"==="+obj.index);
            if(obj.hide_ele_index!=null&&obj.index!=null){
                var hide_delay = (obj.index-obj.hide_ele_index)*1500-200*i;
            }
            if(obj.hide_ele_index!=null){
                $("#item_"+obj.hide_ele_index).delay(hide_delay).fadeOut();
            }
            if(i+1 == _len){
                $("#item_"+i).delay(1500*i).fadeIn(function(){
                    window.setTimeout(function(){
                        _that._colseStory();
                    },1500);
                });
            }else{
                $("#item_"+i).delay(1500*i).fadeIn(); 
            }
        }
    },
    // 加载故事内容
    _loadStoryPage:function(item){
        var dialog_arr = [];
        for(var j=0;j<item.length;j++){
            var obj = item[j];
            // console.log(obj);
            var _x = obj.x+"%";
            var _y = obj.y+"%";
            var _direction = obj.directioin;
            var _style = "";
            if( obj.directioin =="left" ){
                _style ={  
                            top:_y,  
                            left:_x
                        };
            }else if( obj.directioin =="right" ){
                _style ={  
                            top:_y,  
                            right:_x 
                        };
            }else if( obj.directioin =="top" ){
                _style ={  
                            left:_y,  
                            top:_x 
                        };
            }else if( obj.directioin =="bottom" ){
                _style ={  
                            left:_y,  
                            bottom:_x 
                        };
            }
            if(obj.type == "img"){
                dialog_arr.push(<div key={"item"+j} id={"item_"+j} className={"item_box "+obj.type+"_box "+obj.type+"_"+obj.directioin} style={_style}>
                                    <img src={obj.value} />
                                </div>);
            }
            if(obj.type == "text"){
                dialog_arr.push(<div key={"item"+j} id={"item_"+j} className={"item_box "+obj.type+"_box "+obj.type+"_"+obj.directioin} style={_style}>
                                    <span>{obj.value}</span>
                                </div>);
            }
        }
        return dialog_arr;
        
    },
    // 创建故事
    _renderContentLi:function(data){
        var story = this.state.story;
        var liArr = [];
        for(var k=0;k<story.length;k++){
            var item = story[k];
            var story =this._loadStoryPage(item);
            liArr.push( <li key={"story"+k} className={k==0?"active":""} data-index={k}>
                            <div className="div_bgopcity"><span></span></div>
                            <div className="storyitem_container">
                                {story}
                            </div>
                        </li>);
        }
        return liArr;
    },
    // 创建索引
    _renderOlIndex:function(data){
        var story = this.state.story;
        var _olArr = [];
        if(story.length==1){
            return _olArr;
        }
        for(var i=0;i<story.length;i++){
            _olArr.push(<li key={i} className={i==0?"active":""} data-index={i}><span></span></li>);
        }
        return _olArr;
    },
    // 创建视频
    _renderBlockVideo:function(){
        var videoJsOptions = {
            autoplay: false,
            controls: true,
            loop: true,
            preload : 'auto',
            sources: [{
                src: 'http://7xl1fl.com5.z0.glb.clouddn.com/jimu/video/170118160330246416.mp4',
                type: 'video/mp4'
            }]
        };
        var BlockVideoPlayer = require('./block_video_player.jsx');
        var removeComponent = function() {
            ReactDOM.unmountComponentAtNode(document.getElementById("course_video"));
            $("#course_video").empty();
        };
        ReactDOM.render(
            React.createElement(
                BlockVideoPlayer, 
                {   
                    onRemove:  removeComponent,
                    isVideoBtn: false,
                    videoJsOptions:videoJsOptions
                }
            ), document.getElementById("course_video")
        );
    },
    // 故事结束时候调用
    _colseStory:function(){
        this.props.onRemove();
        if(this.state.type=="startStory"){
            // 开始故事结束调用视频自动弹出
            this._renderBlockVideo();
        }else if(this.state.type=="endStory"){
            if(window.blocklyObj&&window.blocklyObj.courseSuccessPopup){// 成功故事结束，调用雷达图 撒花 界面
                window.blocklyObj.courseSuccessPopup(this.state.courseId);
            }
        }
    },
    render: function(){
        return  <div id="id_cousestory" className={"story_container"+" courseid_"+this.state.courseId}>
                    <SliderComponent dataArray={this.state.story} bgImg={this.state.bgImg}
                        renderContentLi={this._renderContentLi}
                        renderOlIndex={this._renderOlIndex}></SliderComponent>
                </div>;
    }
});
module.exports = CourseStory;