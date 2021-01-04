const soundvolumeview = require('soundvolumeview-node')

module.exports = (manufacturer, audioDevice, direction, application) => {
// manufacturer (Name in parenthesis of getdevices), audioDevice (device name before parenthesis of get devices)
// direction capture or render (capture = recording device, render = playback device)
// Reference SoundVolumeView.exe for explaination of direction
return soundvolumeview('/setAppDefault "' + manufacturer + '\\Device\\' + audioDevice + '\\' + direction + '" all focused')
}
