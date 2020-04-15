const nircmd = require('nircmd')

module.exports = (audioDevice) => {
	//0 = Unmute, 1 = Mute, 2 = toggle opposite
  return nircmd('mutesysvolume 0 "'+audioDevice+'"')
}