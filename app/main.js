var app = require('app');                       // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// from electron shell repo
// require('crash-reporter').start();

// from electron_boilerplate
var env = require('./vendor/electron_boilerplate/env_config');
var devHelper = require('./vendor/electron_boilerplate/dev_helper');
var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');

// Keep a global reference of the window object, so it's not GC'ed.
var mainWindow = null;

// Preserver of the window size and position between app launches.
var mainWindowState = windowStateKeeper('main', {
    width: 1000,
    height: 800,
    title: "Hotkey Grid"
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height
  });

  if (mainWindowState.isMaximized) {
      mainWindow.maximize();
  }

  // if (env.name === 'development') {
  //     devHelper.setDevMenu();
  //     mainWindow.openDevTools();
  // }

  mainWindow.loadUrl('file://' + __dirname + '/app.html');

  mainWindow.on('close', function() {
    mainWindowState.saveState(mainWindow);
  });
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});
