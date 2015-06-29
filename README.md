# hotkey-grid

Hotkey-grid is a speedy way to execute programs, command line scripts, and gui automation. Computer games often have a grid of hotkeys where the location of the icon for an action corresponds to the location of a key on the keyboard. Hotkey-grid enables this same system for executing commands quickly for almost anything you would want to do with a computer.

# Getting Started

```
git clone https://github.com/jsphweid/hotkey-grid.git
npm install -g electron-prebuilt
npm install

electron .
```

# Road Map

## Ready to work on 

- new key too big, keyspacing not perfect
- find script with file browser AND/OR type stuff in
- set default executor
- BUG: replace css keyName with id computed
- edit script from gui -> open in favorite text editor
  - set default script editor
- show error message if script cannot execute
- pro mode

## Needs Discussion

- Directory Structure
  - default mac/windows config based on platform
  - script folder directory and configuration file (clay)
    - different directory name for each tab? Can just use the same directory name ~ scripts/
  - seperate repo for finale stuff (including my default layout with all the lua scripts)
- set persistance format in stone
- switch keys when dragging one on top of another ??? is this even desirable?
- click in empty keyspace makes a new key right there
- possibly have a settings tab or file that contains "global variables" that affect functions (in Finale JW lua, for example the person's desired default page height/width for parts that will be used throughout various scripts)

## Lua and Finale

- installation of lua scripts will be option.  They lua scripts will be in my zip but they'll have to manually add them. the basic installation will install lua to a folder named "joseph's plug-ins" or something.  It can't be empty.  The user can then select which of my Lua files they want to add to that menu item later.

## Someday/Maybe

- import config (tabs and keys)
  - possibly export just certain tabs / keys
  - possibly import just certain tabs / keys
  - worry about too many loose keys (... to see more)
- text search for command name (button text)

