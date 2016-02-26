# hotkey-grid

hotkey-grid is a speedy way to execute programs, command line scripts, and gui automation. Some computer games (Starcraft 2 / Warcraft 3) employ a "grid": an intuitive hotkey arrangement where the location of the icon for an action corresponds to the location of a key on the keyboard. hotkey-grid enables this same system for executing commands quickly for almost anything you would want to do with a computer. Caps Lock toggles the grid between front-most and invisible.

# Getting Started

This version of hotkey-grid with my default arrangement currently only works for Mac OSX.

## Mac OSX Installation Instructions

This is a little complicated but it is mostly a lot of SIMPLE steps.

hotkey-grid is toggled with CAPS. This is difficult to do on a Mac but I think I have it figured out. Seil is a small open-source program that rebinds CAPS. FastScripts is a program that links the script that performs the toggle to the newly re-bound key. It is also significantly faster than OSX's Automator. Here's a step by step.

- [Download and install Hotkey Grid](https://github.com/jsphweid/hotkey-grid/raw/finale-mac/hotkey-grid_0.1.0.dmg) as you would any other application.
- [Download and install Seil](https://pqrs.org/osx/karabiner/seil.html.en), the tool that will rebind CAPS LOCK.
	- Type "seil" in Spotlight and hit enter to bring up its configuration.
	- Expand the "Change the caps lock key"
	- Change the keycode to "105" (which is F13)
	- Follow their instructions in the colored box to disable normal CAPS functionality.
- [Download my toggle script here](https://github.com/jsphweid/hotkey-grid/raw/finale-mac/scripts/osxCapsToggle/toggleGridAsScript.scpt) and place it in /Library/Scripts (it requires special permission)
- [Download and install FastScripts](https://red-sweater.com/fastscripts/) You don't need the paid version. Move the zip to /Applications then unzip and run.
	- Click on the FastScripts icon on Mac's top menu bar and go to FastSripts > Preferences...
	- Go to the "Script Shortcuts" tab. Expand /Library/Scripts. Find toggleGridAsScript and change the shortcut by hitting CAPS. If you've done everything up to this point, it will ask you to confim the assignment and then F13 will appear as the assignment.

Holy crap! We're done. Hit CAPS and you're off to the races!

### Update Scripts
All of my scripts are located in the Application's content folder here:
```/Applications/Hotkey Grid.app/Contents/Resources/scripts/finale-macros```

Over time, I will add more scripts and update existing ones if there are bugs / room for improvement. I made this shell script that you simply copy and paste in the terminal that sync's my latest version to the folder listed directly above.
```curl -s https://raw.githubusercontent.com/jsphweid/finale-macros/master/update | bash```


# Future Development

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

## TODO

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

## Finale-Mac configuration change before release
Copy contents of file at ~/Library/Application Support/Hotkey Grid Dev/config.hkg to "var config = HERE;" within hotkey-grid/app/app.html

# Thanks to
Electron
Electron Boilerplate
