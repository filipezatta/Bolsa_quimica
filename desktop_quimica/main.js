const { app, BrowserWindow } = require('electron')

var mainWindow;
var detalhe;

const createWindow = (winWidth, winHeight, Pagefile, x, y) => {
  const win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: x,
    y: y,
    icon: './public/app_icon.png',
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true
    }
  })
  win.loadFile(Pagefile)
  return win
}



//faz algo qnd o load do app ta pronto

app.whenReady().then(() => {
  var { screen } = require('electron')
  var primaryDisplay = screen.getPrimaryDisplay()
  var { width, height } = primaryDisplay.workAreaSize
  
  mainWindow = createWindow(1280, 720, './public/index.html',(width/8),(height/5))

})

// fecha tudo ao fechar todas as paginas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


//ejse
const ejse = require('ejs-electron')


//recebe a mensagem do script.js pra criar outra pagina
var ipcMain = require('electron').ipcMain;
ipcMain.on('asynchronous-message', function (evt, message) {
  ejse.data(message[1])

  if (message[0] == 'createNewWindow') {
    if (detalhe instanceof BrowserWindow){
      console.log(typeof detalhe)
      detalhe.destroy()
    }
    detalhe = createWindow(mainWindow.getSize()[0]/2.5,mainWindow.getSize()[1], './public/elemento.ejs',mainWindow.getPosition()[0]+mainWindow.getSize()[0], mainWindow.getPosition()[1])
  }
  detalhe.setAlwaysOnTop(true)
});

/*
app.whenReady().then(() => {
  mainWindow.on('blur', () => {
    console.log('a')
  })
})
*/