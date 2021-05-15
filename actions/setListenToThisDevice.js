const soundvolumeview = require('soundvolumeview-node')

module.exports = (deviceName, boolean) => {
// manufacturer (Name in parenthesis of getdevices), audioDevice (device name before parenthesis of get devices)
// direction capture or render (capture = recording device, render = playback device)
// Reference SoundVolumeView.exe for explaination of direction
return soundvolumeview('/setListenToThisDevice '+ deviceName + ' ' + boolean)
}