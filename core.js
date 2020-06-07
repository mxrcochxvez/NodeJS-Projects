const { basename } = require('path');
const { log } = require('util');
const { getHeapStatistics } = require('v8');

log(basename(__filename) );
log(" ^ the name of the current file.");

log(getHeapStatistics());