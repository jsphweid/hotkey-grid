# hotkey-grid

Hotkey-grid is a speedy way to execute programs, command line scripts, and gui automation. Computer games often have a grid of hotkeys where the location of the icon for an action corresponds to the location of a key on the keyboard. Hotkey-grid enables this same system for executing commands quickly for almost anything you would want to do with a computer.

# Getting Started

```
git clone https://github.com/jsphweid/hotkey-grid.git
npm install       # downloads dependencies
npm start         # starts app in debug mode, like `electron .`
npm run release	  # makes installer for OS it is run on, see below for special windows packaging instructions
```

## Windows - Special Packaging instructions
As installer [NSIS](http://nsis.sourceforge.net/Main_Page) is used. You have to install it (version 3.0), and add NSIS folder to PATH in Environment Variables, so it is reachable to scripts in this project (path should look something like `C:/Program Files (x86)/NSIS`).

## Mac - Special Global hotkey instructions
To take control of CAPS on MAC, Use Seil. Redirect it to keycode 105, which is F13, which doesn't really exist on a typical keyboard. Do not use Automater or Services as the bridge between the hotkey and the script because there is too much overhead and it is not reactive enough. Instead use FastScripts.

# Road Map

## Ready to work on 

- load up layout and export layout (config.hkg, just copy it from a selected file, don't use it)
- a better way to switch back to first tab every time (faster, maybe as soon as any button is pressed?)
- does it modify a .scpt file when it is run? If you are editing the script at the same time while using Grid and running it to test, osx starts to complain
- 
- package up electron as exe
  - https://github.com/atom/electron/blob/master/docs/tutorial/application-distribution.md
  - https://github.com/atom/electron/blob/master/docs/tutorial/application-packaging.md
  - https://github.com/maxogden/electron-packager
  - https://github.com/szwacz/electron-boilerplate
  - exec('open /usr/local/bin/sublime', function(error, stdout, stderr) { console.log(error); console.log(stdout); console.log(stderr); });
- windows version crashes after a while...?

- menu items on Windows version still results in error
- confirmation prompts required when deleting a tab or a button
- sublime as default editor doesn't work (default should probably be notepad)
- windows, linux, mac tabs all not necessary on the windows version...
- config should remember use mode / hide hotkeys...
- button colors

## Lua and Finale
-- a custom folder can be installed externally that is ~/.finale-macros. Everything involving finale scripts (for mac, win, lua, and maybe my default config file can live in there)

## Someday/Maybe

- send data - 
  - possibly export just certain tabs / keys
  - possibly import just certain tabs / keys
  - worry about too many loose keys (... to see more)
- text search for command name (button text)
- switch keys when dragging one on top of another ??? is this even desirable?
- possibly have a settings tab or file that contains "global variables" that affect functions (in Finale JW lua, for example the person's desired default page height/width for parts that will be used throughout various scripts)
- have whatever's in the copy buffer modify the command -> like passing an arg to a script

- right-click delete button or delete tab


## Packaging

### Mac
process.cwd()
"/"
__dirname
"/Applications/Hotkey Grid.app/Contents/Resources/app.asar"

### Windows
process.cwd();
"C:\Program Files (x86)\Hotkey Grid"
__dirname
"C:\Program Files (x86)\Hotkey Grid\resources\app.asar"


### npm start
process.cwd()
"/Users/clayweidinger/clay/git/hotkey-grid"
__dirname
"/Users/clayweidinger/clay/git/hotkey-grid/build"

# Finale-Mac configuration change before release
Copy contents of file at ~/Library/Application Support/Hotkey Grid Dev/config.hkg to "var config = HERE;" within hotkey-grid/app/app.html

# Thanks to
Electron
Electron Boilerplate
