const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mianWindow;
function createWindow() {
  mianWindow = new BrowserWindow({
    height: 800,
    width: 800,
  });

  // 根据不同的环境设置文件指向
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file',
    slashes: true
  })
  mianWindow.loadURL(startUrl);

  // 打开控制台
  // mianWindow.webContents.openDevTools();
  
  mianWindow.on('closed', () => {
    mianWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  console.log('2323');
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  console.log(111);
  if (mianWindow === null) {
    createWindow();
  }
})

