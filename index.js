const electron = require('electron')
const path = require('path')
const url = require('url')
const { app, BrowserWindow, Menu } = electron

let mainWindow
let addWindow
let lastWindow

app.on('ready', function () {
  mainWindow = new BrowserWindow({})
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'assets/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
  const main = Menu.buildFromTemplate(mainMenuTemplate)
  Menu.setApplicationMenu(main)
})

//   Handle createAddWindow
function createAddWindow () {
  addWindow = new BrowserWindow({})
  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'assets/index2.html'),
      protocol: 'file:',
      slashes: true
    })
  )
}
// lastWindow
function lastAddWindow () {
  lastWindow = new BrowserWindow({})
  lastWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'assets/index3.html'),
      protocol: 'file:',
      slashes: true
    })
  )
}

//  CREATE MENU TEMPLATE
const mainMenuTemplate = [
  {
    label: 'file'
  },
  {
    label: 'popup',
    click () {
      createAddWindow()
    }
  },
  {
    label: 'info',
    click () {
      lastAddWindow()
    }
  }
]