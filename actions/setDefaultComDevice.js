const soundvolumeview = require('soundvolumeview-node')

module.exports = (deviceManufacturer, deviceName, deviceType) => {
// manufacturer (Name in parenthesis of getdevices), audioDevice (device name before parenthesis of get devices)
// direction capture or render (capture = recording device, render = playback device)
// Reference SoundVolumeView.exe for explaination of direction
return soundvolumeview('/setDefault "'+deviceManufacturer+'\\Device\\'+deviceName+'\\'+deviceType+'" 2')
}
