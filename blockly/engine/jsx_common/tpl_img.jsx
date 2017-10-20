var React = require('react');
var ReactDOM = require('react-dom');
var jsxManage = require('./../service/jsx_manage_service.js');
var eventsListener = require('./../common/events_listener');
var TplImg = React.createClass({
    getInitialState : function(){
        return {
            img:this.props.img,
            replaceImg : this.props.replaceImg
        };
    },
    _changeImg : function() {
        if (this.state.replaceImg) {
            var newImgState = {
                img : this.state.replaceImg,
                replaceImg : this.state.img
            };
            this.setState(newImgState);
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return nextProps.ifReRenderImg;
    },
    componentDidMount: function() {
        eventsListener.on('changeImg', this._changeImg);
    },
    componentWillUnmount: function() {
        eventsListener.off('changeImg');
    },
    answerPicClick:function(item,e){
        var srcStr = item.src;
        if(srcStr.substring(srcStr.length-10)!= "answer.png") return ;
        var data = {picSrc:item.src};
        jsxManage.renderComponentByCondition('courseAnswerShow',data,null,"course_answerpic");
    },
    _renderImg:function(){
        var imglist = this.state.img;
        var listArr = [];
        if(imglist){
            for(var i=0;i<imglist.length;i++){
                var item = imglist[i];
                // console.log(item);
                var typeOf = typeof item;
                if(typeOf == 'string'){
                    listArr.push(<div key={i} className="flex tpl_img">
                        {/*如果是动效图，则添加时间戳，使浏览器重新加载动图*/}
                        <img src={item.indexOf('.gif')>0?item+'?'+new Date().getTime():item}></img>
                    </div>);
                }
                if(typeOf=='object'){
                    listArr.push(<div key={i} className="flex tpl_img" style={item.style} onClick={this.answerPicClick.bind(this,item)}>
                        {/*如果是动效图，则添加时间戳，使浏览器重新加载动图*/}
                        <img src={item.src.indexOf('.gif')>0?item.src+'?'+new Date().getTime():item.src}></img>
                    </div>);
                }
            }
        }
        return listArr;
    },
    render: function(){
        var imglist = this._renderImg();
        return  <div className="flex tpl_img_box">
            {imglist}
        </div>;
    }
});
module.exports = TplImg;