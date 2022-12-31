import * as path from 'path'

import { app, BrowserWindow } from 'electron'

const staticPath = path.join(__dirname, '..', 'static')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile(path.join(staticPath, 'html', 'template.html'))
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  app.quit()
})

// Magic hot-reload
try {
  require('electron-reloader')(module)
} catch (_) {}
