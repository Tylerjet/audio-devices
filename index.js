const setDefaultDevice = require('./actions/setDefaultDevice'),
setDefaultComDevice = require('./actions/setDefaultComDevice'),
getDevices = require('./actions/getDevices'),
setVolume = require('./actions/setVolume'),
setMute = require('./actions/setMute'),
setUnMute = require('./actions/setUnMute'),
getAllDevices = require('./actions/getAllDevices')


module.exports = {
  setDefaultDevice: setDefaultDevice,
  setDefaultComDevice: setDefaultComDevice,
  setVolume: setVolume,
  setMute: setMute,
  setUnMute: setUnMute,
  getDevices: getDevices,
  getAllDevices: getAllDevices
}
