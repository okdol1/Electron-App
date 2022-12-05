const { app, BrowserWindow, ipcMain } = require("electron");
const ipc = ipcMain;

const remote = require("@electron/remote/main");
remote.initialize();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 960,
    height: 630,
    minWidth: 960,
    minHeight: 630,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  remote.enable(mainWindow.webContents);

  ipc.on("minimizeApp", () => {
    mainWindow.minimize();
  });

  ipc.on("maximizeApp", () => {
    mainWindow.maximize();
  });

  ipc.on("restoreApp", () => {
    mainWindow.unmaximize();
  });

  ipc.on("closeApp", () => {
    mainWindow.close();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
