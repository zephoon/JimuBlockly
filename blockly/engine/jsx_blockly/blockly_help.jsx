var React = require('react');
var ReactDOM = require('react-dom');
var BlocklyHelp = React.createClass({
    getDefaultProps: function() {
        return null;
    },
    getInitialState: function() {
       return {
            helplist: this.props.data
        };
    },
    // dom 加载完成之后
    componentDidMount: function() {
      
    },
    // dom卸载之前
    componentWillUnmount: function() {

    },
    _renderHelpImgList: function() {
        var ImglistArr = [];
        if(window.blocklyObj != undefined && window.blocklyObj.helpUrl != undefined){  //若ios android提供帮助界面地址，则跳转到对应界面中去
            ImglistArr.push(<iframe src={window.blocklyObj.helpUrl()}></iframe>);
        }else{  //ios android未提供帮助界面地址，则跳转本地资源
            var helplist = this.state.helplist;
            for(var i=0;i<helplist.length;i++) {
                var item = helplist[i];
                ImglistArr.push(<div className="helpimg_box" key={"helpimg"+i}><img style={{width:'100%'}} src={item}/></div>);
            }
        }

        return ImglistArr;
    },
    _returnBlocly:function (e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }else{
            window.event.returnValue = false;
            window.event.cancelBubble = true;
        }
        this.props.onRemove();
    },
    render: function() {
        var imglistArr = this._renderHelpImgList();
        return  <div id="help_list_box" className="help_list_box flex">
                    <div className="help_list_title flex">
                        <span className="return_blockly flex" onTouchEnd={this._returnBlocly}>
                            <i className="fa fa-angle-left return_icon"></i>
                        </span>
                        <span>{MSG.help_title}</span>
                    </div>
                    <div className="help_list_content">
                        {imglistArr}
                      </div>
                </div>;
    }

});
module.exports = BlocklyHelp;