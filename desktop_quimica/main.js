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
  
  mainWindow = createWindow(1280, 720, './public/views/home.html',(width/8),(height/5))

})

// fecha tudo ao fechar todas as paginas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


//ejse
const ejse = require('ejs-electron')


/*
app.whenReady().then(() => {
  mainWindow.on('blur', () => {
    console.log('a')
  })
})
*/