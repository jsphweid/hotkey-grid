var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  BrowserWindow.setTitle("Hotkey-Grid")
  // mainWindow.openDevTools();
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// var exec = require('child_process').exec;
// var cl = console.log;
// cl('starting to execute');
// exec('osascript newtab.ascript', console.log);
// cl('finishing');

// https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md
// var globalShortcut = require('global-shortcut');

// // Register a 'ctrl+x' shortcut listener.
// var ret = globalShortcut.register('ctrl+x', function() { console.log('ctrl+x is pressed'); })
// if (!ret)
//   console.log('registerion fails');