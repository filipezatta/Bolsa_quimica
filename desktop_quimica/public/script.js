
const ipcRenderer = require('electron').ipcRenderer;

const elementsJSON = require('./elementos.json')
//import elementsJson from './elementos.json' assert {type: 'json'}

function openWindow (element) {
    ipcRenderer.send('asynchronous-message', ['createNewWindow', elementsJSON[element]]);
}

