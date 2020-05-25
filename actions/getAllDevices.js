/*
Gets list of All audio devices and returns an array of the devices
Called at beginning of file and can then be used throughout file
*/
const portAudio = require('naudiodon')

var devicesList = portAudio.getDevices(),
firstmme = true,
firstwdmks = true,
MMEE = 0,
WDMKSE = 0,
MMES,
WDMKSS,
DevicesArr = [];

//Remove MME and WDMKS Devices as they seem to have issues returning the full name string at times so they are not useful
mmeRemove();
wdmksRemove();

function getDeviceNames() {
	for (var device in devicesList) {
		DevicesArr.push(devicesList[device].name)
	}
	return DevicesArr
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

module.exports = () => {
	return getDeviceNames();
}
