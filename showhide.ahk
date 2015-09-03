#Persistent
#NoTrayIcon
#SingleInstance force
; DetectHiddenWindows, On

; Makes sure that CAPS doesn't get stuck on
SetCapsLockState, AlwaysOff

; CapsLock::
; IfWinNotActive, Hotkey Grid
; 	WinActivate, Hotkey Grid
; Else
; 	WinHide, Hotkey Grid
; Return

CapsLock::
IfWinNotActive, Hotkey Grid
{
	WinShow, Hotkey Grid
	WinActivate, Hotkey Grid
}
Else
	WinHide, Hotkey Grid
Return