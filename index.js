'use strict';

const electron = require('electron');
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

let willQuitApp = false;
let mainWindow;

app.on('window-all-closed', function() {
  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', function(){
    mainWindow.show();
});

app.on('before-quit', function(){
    willQuitApp = true;
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(
    {
      width: 650,
      height: 300,
      titleBarStyle: 'hidden-inset',
      // icon: path.join(__dirname, 'assets/icons/mac/todoist.icns')
    }
  );
  mainWindow.loadURL('https://deleonn.github.io/ticketroll_deadline/');

  mainWindow.on('close', function(e) {
    if (willQuitApp) {
     /* the user tried to quit the app */
     mainWindow = null;
   } else {
     /* the user only tried to close the window */
     e.preventDefault();
     mainWindow.hide();
   }
  });

});
