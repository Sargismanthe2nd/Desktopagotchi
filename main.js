const { app, BrowserWindow, screen } = require('electron');

let petWindow;

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  petWindow = new BrowserWindow({
    width: width,
    height: height, // full screen
    x: 0,
    y: 0,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: 'Mokke.ico'
  });

  petWindow.loadFile('pet.html');
  petWindow.setIgnoreMouseEvents(true, { forward: true });
});
