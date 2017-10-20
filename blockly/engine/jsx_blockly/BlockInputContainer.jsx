var React = require('react');
module.exports = React.createClass({
  backgroundTouched: function(e) {
    if (e) {
  	    e.stopPropagation();
  	    e.preventDefault();
  	}else{
  	    window.event.returnValue = false;
  	    window.event.cancelBubble = true;
  	}
    return this.props.onBackgroundTouched();
  },
  render: function() {
    return <div id="BlocklyInputContainer" 
               className="modalBackground_first" onTouchEnd={this.backgroundTouched}>
           </div>;
  }
});
