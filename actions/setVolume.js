const nircmd = require('nircmd')

module.exports = (audioDevice, volume) => {
	//65535 = 100% in Windows sounds
  return nircmd('setsysvolume '+((volume/100)*65535)+' "'+audioDevice+'"')
}