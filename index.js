const setDefaultDevice = require('./actions/setDefaultDevice');
const setDefaultComDevice = require('./actions/setDefaultComDevice');
const getDevices = require('./actions/getDevices');
const setVolume = require('./actions/setVolume');
const setMute = require('./actions/setMute');
const setUnMute = require('./actions/setUnMute');
const getAllDevices = require('./actions/getAllDevices');
const setFocusedDevice = require('./actions/setFocusedDevice');
const setListenToThisDevice = require('./actions/setListenToThisDevice');

module.exports = {
  setDefaultDevice: setDefaultDevice,
  setDefaultComDevice: setDefaultComDevice,
  setVolume: setVolume,
  setMute: setMute,
  setUnMute: setUnMute,
  getDevices: getDevices,
  getAllDevices: getAllDevices,
  setFocusedDevice: setFocusedDevice,
  setListenToThisDevice: setListenToThisDevice,
};
