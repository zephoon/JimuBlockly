/**
 * start.js version 1.0
 *
 * custom define js generator
 *
 * create by hsp 0906
 *自定义块文件引入
 * feature start block, goto start block
 *
 */
require('../../project/blocks/start/start.jsx')(Blockly.Blocks);
require('../../project/blocks/start/start.js')(Blockly.JavaScript);

require('../../project/blocks/control/control.jsx')(Blockly.Blocks);
require('../../project/blocks/control/control.js')(Blockly.JavaScript);

require('../../project/blocks/math/math.jsx')(Blockly.Blocks);
require('../../project/blocks/math/math.js')(Blockly.JavaScript);

require('../../project/blocks/movement/movement.jsx')(Blockly.Blocks);
require('../../project/blocks/movement/movement.js')(Blockly.JavaScript);

require('../../project/blocks/actions/actions.jsx')(Blockly.Blocks);
require('../../project/blocks/actions/actions.js')(Blockly.JavaScript);

require('../../project/blocks/sensors/sensors.jsx')(Blockly.Blocks);
require('../../project/blocks/sensors/sensors.js')(Blockly.JavaScript);

require('../../project/blocks/show/show.jsx')(Blockly.Blocks);
require('../../project/blocks/show/show.js')(Blockly.JavaScript);

require('../../project/blocks/events/events.jsx')(Blockly.Blocks);
require('../../project/blocks/events/events.js')(Blockly.JavaScript);

// swift
require('../../project/swift/start.js')(Blockly.Swift);
require('../../project/swift/control.js')(Blockly.Swift);
require('../../project/swift/math.js')(Blockly.Swift);
require('../../project/swift/movement.js')(Blockly.Swift);
require('../../project/swift/actions.js')(Blockly.Swift);
require('../../project/swift/sensors.js')(Blockly.Swift);
require('../../project/swift/events.js')(Blockly.Swift);
require('../../project/swift/show.js')(Blockly.Swift);

'use strict';
module.exports = function() {
	
};