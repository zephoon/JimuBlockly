var BlockInputContinueButton, React;

React = require('react');

BlockInputContinueButton = React.createClass({
  handleTouchUp: function(e) {
  	if (e) {
  	    e.stopPropagation();
  	    e.preventDefault();
  	}else{
  	    window.event.returnValue = false;
  	    window.event.cancelBubble = true;
  	}
    return this.props.onContinue(e);
  },
  render: function() {
    return <div id="inputControlNextButton" className="block-input-control-next-button" 
              onTouchEnd={this.handleTouchUp}>
            </div>;
  }
});

module.exports = BlockInputContinueButton;