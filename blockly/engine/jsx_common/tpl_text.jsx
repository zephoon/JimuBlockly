var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TplText = React.createClass({
    getInitialState : function(){
        return {
            text:this.props.text
        };
    },
    componentDidMount: function() {

    },
    _renderText:function(){
        var textlist = this.state.text;
        var listArr = [];
        var len = textlist.length;
        for(var i=0;i<textlist.length;i++){
            var txt_item = textlist[i];
            var typeOf = typeof txt_item;
            if(typeOf == 'string'){
                listArr.push(<div key={i} className="tpl_text">
                                <span>{txt_item}</span>
                             </div>);
            }
            if(typeOf=='object'){
                if(txt_item.specialType!==undefined && txt_item.specialType.type==="li"){
                    listArr.push(<div key={i} className="tpl_text" style={txt_item.style}>
                        <span style={txt_item.specialType.style}>•</span><span>{txt_item.desc}</span>
                    </div>);
                }else{
                    listArr.push(<div key={i} className="tpl_text" style={txt_item.style}>
                        <span>{txt_item.desc}</span>
                    </div>);
                }

            }

        }
        return listArr;
    },
    render: function(){
        var textlist = this._renderText();
        return  <div className="tpl_text_box">
                    {textlist}
                </div>;
    }
});
module.exports = TplText;