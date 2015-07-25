; #Persistent
#NoTrayIcon
while (WinExist("Hotkey Grid")) {
	Sleep, 1000
}

DetectHiddenWindows On  ; Allows a script's hidden main window to be detected.
SetTitleMatchMode 2  ; Avoids the need to specify the full path of the file below.
WinClose showhide.ahk  ; Update this to reflect the script's name (case sensitive).
Exit