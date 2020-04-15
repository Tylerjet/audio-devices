const setDefaultDevice = require('./actions/setDefaultDevice')
const setDefaultComDevice = require('./actions/setDefaultComDevice')
const getDevices = require('./actions/getDevices')
const setVolume = require('./actions/setVolume')
const setMute = require('./actions/setMute')
const setMute = require('./actions/setUnMute')

module.exports = {
  setDefaultDevice: setDefaultDevice,
  setDefaultComDevice: setDefaultComDevice,
  setVolume: setVolume,
  setMute: setMute,
  setUnMute: setUnMute,
  getDevices: getDevices
}
