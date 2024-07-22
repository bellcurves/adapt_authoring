// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
const OutputPlugin = require('../../../lib/outputmanager').OutputPlugin;
const util = require('util');

/**
 * Adapt Output plugin
 */
function BellCurvesOutput() {
}
util.inherits(BellCurvesOutput, OutputPlugin);

BellCurvesOutput.prototype.publish = require('./publish');

exports = module.exports = BellCurvesOutput;
