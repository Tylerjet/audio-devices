const soundvolumeview = require('soundvolumeview-node')

module.exports = (manufacturer, audioDevice, direction, volume) => {
// manufacturer (Name in parenthesis of getdevices), audioDevice (device name before parenthesis of get devices)
// direction capture or render (capture = recording device, render = playback device)
// Reference SoundVolumeView.exe for explaination of direction
// Volume (level from 0 to 100)
return soundvolumeview('/SetVolume "'+manufacturer+'\\Device\\'+audioDevice+'\\'+direction+'" '+ volume)
}