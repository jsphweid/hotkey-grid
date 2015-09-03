#Persistent
#NoTrayIcon
#SingleInstance force

; Makes sure that CAPS doesn't get stuck on
SetCapsLockState, AlwaysOff

CapsLock::
IfWinNotActive, Hotkey Grid
	WinActivate, Hotkey Grid
Else
	WinMinimize, Hotkey Grid
Return
