/*
Gets list of audio devices based on device manufacturer name EX.) TC-Helion, and returns an array of the devices
which can then be used to extract the manufacturer separately using arr.split()
Called at beginning of file and can then be used throughout file
*/
const portAudio = require('naudiodon')

let devicesList = portAudio.getDevices(),
firstmme = true,
firstwdmks = true,
MMEE = 0,
WDMKSE = 0,
MMES,
WDMKSS;

mmeRemove();
wdmksRemove();

function getDeviceNames(manufacturer) {
  const DevicesArr = [];
	for (var device in devicesList) {
		if (devicesList[device].name.includes(manufacturer)){
      const manufacturer = devicesList[device].name.split(/[\(\)]/g)[1]
      const name = devicesList[device].name.split(/[\(\)]/g)[0].trim()
      const deviceData = { name: name, type: devicesList[device].maxInputChannels === 0 ? 'Render' : 'Capture', manufacturer: manufacturer}
      DevicesArr.push(deviceData)
		}
	}
	return DevicesArr
}

function reloadDevices(manufacturer) {
  devicesList = portAudio.getDevices();
  firstmme = true,
  firstwdmks = true,
  MMEE = 0,
  WDMKSE = 0,
  MMES,
  WDMKSS;
  mmeRemove();
  wdmksRemove();
  return getDeviceNames(manufacturer);
}

function wdmksRemove(){
	for (var WDMKS in devicesList){
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

function mmeRemove(){
	for (var MME in devicesList){
		if (devicesList[MME].hostAPIName == "MME" && firstmme == true){
			MMES = MME
			firstmme = false
		}
		if (devicesList[MME].hostAPIName == "MME" && firstmme == false) {
			MMEE = MMEE + 1
		}
	}
	devicesList.splice(MMES,MMEE)
}

module.exports = (manufacturer) => {
  return reloadDevices(manufacturer);
}
