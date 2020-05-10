# audio-devices

get and set the current audio device on windows.

## Example Usage
Set the current device to "Speakers"

```js
const audioDevices = require('audio-devices');

audioDevices.setDefaultDevice('Speakers')
.then(() => {
  console.log('done!')
})
.catch((err) => {
  console.log('error', error)
})

```
