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

- key parentheses
- pro mode ( show/hides hotkeys)
- save automatically
  - backup as

- find script with file browser AND/OR type stuff in
  - file/name
  - find - $('#asdf')[0].files[0].path
  - edit
- set default executor
- BUG: replace css keyName with id computed
- edit script from gui -> open in favorite text editor
  - set default script editor
- show error message if script cannot execute

- package up electron as exe
- zip up electron + finale for finale people

- click in empty keyspace makes a new key right there

## Lua and Finale

- installation of lua scripts will be option.  They lua scripts will be in my zip but they'll have to manually add them. the basic installation will install lua to a folder named "joseph's plug-ins" or something.  It can't be empty.  The user can then select which of my Lua files they want to add to that menu item later.

## Someday/Maybe

- send data - 
- import config (tabs and keys)
  - possibly export just certain tabs / keys
  - possibly import just certain tabs / keys
  - worry about too many loose keys (... to see more)
- text search for command name (button text)
- switch keys when dragging one on top of another ??? is this even desirable?
- possibly have a settings tab or file that contains "global variables" that affect functions (in Finale JW lua, for example the person's desired default page height/width for parts that will be used throughout various scripts)
- have whatever's in the copy buffer modify the command -> like passing an arg to a script
