var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var LEDEmotion = React.createClass({
    getInitialState: function() {
         return {
            scenelights : this.props.scenelights,
            curSceneLight:this.props.curSceneLight
         };
    },
    componentDidMount: function() {
    },
    handleSceneselect:function(i,e){
        var that = e.currentTarget;
        $(".scene_item_box").removeClass('active');
        $(that).addClass('active');
        this.setState({
            curSceneLight:i+12
        },()=>{
            console.log("curSceneLight-->>"+this.state.curSceneLight);
            this.props.onScenelightChange(this.state.curSceneLight);
        });
    },
    _renderScenelightlist:function(){
        var liArray = [];
        var baseIndex = 12;
        var scenelights = this.state.scenelights;
        for(var i=0;i<scenelights.length;i++){
            var src_temp = 'images/popup/emotion/'+scenelights[i]+'.png';
            var text_temp = MSG['id_'+scenelights[i]];
            var scene_index = this.props.curSceneLight-baseIndex;
            liArray.push(<div key={i} className={"scene_item_box flex "+ (scene_index==i?"active":"")} onClick={this.handleSceneselect.bind(null,i)}>
                            <img className="scene_img" src={src_temp}/>
                            <span className="scene_text flex">{text_temp}</span>
                        </div>);
        }
        return liArray;
    },
    render: function(){
        var liarraycomponent = this._renderScenelightlist();
        return  <div className="popupbody_content flex">
                    <div className="scenelight_box flex">
                        {liarraycomponent}
                    </div>
                </div>;
    }
});
module.exports = LEDEmotion;





