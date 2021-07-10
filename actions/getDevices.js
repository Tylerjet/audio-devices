/*
Gets list of audio devices based on device manufacturer name EX.) TC-Helion, and returns an array of the devices
which can then be used to extract the manufacturer separately using arr.split()
Called at beginning of file and can then be used throughout file
*/
const portAudio = require('naudiodon')

let devicesList = portAudio.getDevices();

function getDeviceNames(manufacturer) {
  const DevicesArr = [];
	for (device in devicesList) {
		if ((devicesList[device].name.toLowerCase()).includes(manufacturer)){
      const manufacturer = devicesList[device].name.split(/[\(\)]/g)[1]
      const name = devicesList[device].name.split(/[\(\)]/g)[0].trim()
      const deviceData = { name: name, type: devicesList[device].maxInputChannels === 0 ? 'Render' : 'Capture', manufacturer: manufacturer}
      DevicesArr.push(deviceData)
		}
	}
	return DevicesArr
}

function getDevices(manufacturer) {
  mmeRemove();
  wdmksRemove();
  return getDeviceNames(manufacturer);
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
	devicesList.splice(WDMKSS,WDMKSE)
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
	devicesList.splice(MMES,MMEE)
}

module.exports = (manufacturer) => {
  return getDevices(manufacturer.toLowerCase());
}
