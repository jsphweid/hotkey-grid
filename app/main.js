var app = require('app');                       // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// from electron shell repo
// require('crash-reporter').start();

// from electron_boilerplate
var env = require('./vendor/electron_boilerplate/env_config');
var devHelper = require('./vendor/electron_boilerplate/dev_helper');
var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');

// Global Hotkey to activate Hotkey-Grid
var os = require('os');
var exec = require('child_process').exec;
var osSlash;
var os = require('os');
  switch (os.platform()) {
      case 'darwin':
          // amend path so I can use most commandline tools
          process.env.PATH += ':/usr/local/bin'
          osSlash = '/';
          break;
      case 'linux':
          osSlash = '/';
          break;
      case 'win32':
          osSlash = '\\';
          break;
  }

var dirnameArray = __dirname.split(osSlash);
dirnameArray.splice(-1);
var resourceDir = dirnameArray.join(osSlash);
process.chdir(resourceDir);
switch (os.platform()) {
  case 'darwin':
      break;
  case 'linux':
      break;
  case 'win32':
      exec('AutoHotkey.exe showhide.ahk', function(e, stdout, stderr) {
        if (stderr) { console.log(stderr); }
        console.log(stdout);
      });
      exec('AutoHotkey.exe exitapp.ahk', function(e, stdout, stderr) {
        if (stderr) { console.log(stderr); }
        console.log(stdout);
      });
      break;
}


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

  // Read and Write config file (done in browser thread b/c needs access to userDataDir b/c that's the only place installed windows apps will allow you to write app specific data)
  var userDataDir = app.getPath('userData');
  var ipc = require('ipc');
  var fs = require('fs');
  var filePath;
  ipc.on('readConfig', function(event, filename) {
    filePath = userDataDir + osSlash + filename;
    console.log(filePath);
    if (fs.existsSync(filePath)) {
      var configJson = fs.readFileSync(filePath);
      fs.writeFile(filePath + '.bak', configJson, function(err) {}); // save backup file
      event.returnValue = JSON.parse(configJson);
    } else {
      event.returnValue = false;
    }
  });
  ipc.on('writeConfig', function(event, configJson) {
    fs.writeFile(filePath, configJson, function(err) {});
    event.returnValue = false;
  });

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
