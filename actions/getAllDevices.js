/*
Gets list of All audio devices and returns an array of the devices
Called at beginning of file and can then be used throughout file
*/
const portAudio = require('naudiodon')

let devicesList = portAudio.getDevices();

function getAllDevices() {
  mmeRemove();
  wdmksRemove();
  return getDeviceNames();
}

function getDeviceNames() {
  const DevicesArr = [];
	for (device in devicesList) {
    const manufacturer = devicesList[device].name.split(/[\(\)]/g)[1];
    const name = devicesList[device].name.split(/[\(\)]/g)[0].trim()
    const deviceData = { name: name, type: devicesList[device].maxInputChannels === 0 ? 'Render' : 'Capture', manufacturer: manufacturer}
    DevicesArr.push(deviceData)
	}
	return DevicesArr;
}

function wdmksRemove() {
  let firstwdmks = true, /* Default to false until the first WDMKS device is found in the array */
  WDMKSE = 0, /* Number of WDMKS devices found which will be spliced out at the end */
  WDMKSS; /* Starting Point of the first found WDMKS Device used to set the start point when deleting the array */
	for (WDMKS in devicesList){
		if (devicesList[WDMKS].hostAPIName == "Windows WDM-KS" && firstwdmks == true){
			WDMKSS = WDMKS
			firstwdmks = false
		}
		if (devicesList[WDMKS].hostAPIName == "Windows WDM-KS" && firstwdmks == false) {
			WDMKSE = WDMKSE + 1
		}
	}
	devicesList.splice(WDMKSS,WDMKSE);
}

function mmeRemove() {
  let firstmme = false, /* Default to false until the first MME device is found in the array */
  MMEE = 0, /* Number of MME devices found which will be spliced out at the end */
  MMES; /* Starting Point of the first found MME Device used to set the start point when deleting the array */
	for (MME in devicesList){
		if (devicesList[MME].hostAPIName == "MME" && firstmme == false){
			MMES = MME
			firstmme = true
		}
		if (devicesList[MME].hostAPIName == "MME" && firstmme == true) {
			MMEE = MMEE + 1
		}
	}
	devicesList.splice(MMES,MMEE);
}

module.exports = () => {
  return getAllDevices();
}
