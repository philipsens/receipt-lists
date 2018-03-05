const { app, BrowserWindow } = require('electron')
const path = require('path')
const URL = require('url')

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL(URL.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }))
}

app.on('ready', createWindow)