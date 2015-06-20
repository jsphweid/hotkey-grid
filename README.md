# hotkey-grid

Hotkey-grid is a speedy way to execute programs, command line scripts, and gui automation. Computer games often have a grid of hotkeys where the location of the icon for an action corresponds to the location of a key on the keyboard. Hotkey-grid enables this same system for executing commands quickly for almost anything you would want to do with a computer.

# Getting Started

```
npm install -g electron-prebuilt
npm install

electron .
```

# Road Map

## Ordered

- show which button is being edited
- default mac/windows config based on platform
- Add/remove/edit tabs
- drag and drop buttons within tab
- script folder directory and configuration file (clay)
- seperate repo for finale stuff (including my default layout with all the lua scripts)

## Unordered

- be able to make button an image (png/jpeg/etc.)
- edit script from gui
- drag and drop buttons between tabs (left click and drag)
- text search for command name (button text)
- find script from file finder
- possibly have a settings tab or file that contains "global variables" that affect functions (in Finale JW lua, for example the person's desired default page height/width for parts that will be used throughout various scripts)
- 

## Needs Discussion

- Should we allow some buttons to be missing
  - add buttons (right click in place where there's no button and click "add" then the edit comes up)
  - remove buttons (right click a current button)

## Lua and Finale
- installation of lua scripts will be option.  They lua scripts will be in my zip but they'll have to manually add them. the basic installation will install lua to a folder named "joseph's plug-ins" or something.  It can't be empty.  The user can then select which of my Lua files they want to add to that menu item later.
