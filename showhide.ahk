#Persistent
#NoTrayIcon
#SingleInstance force

#if WinExist("Hotkey Grid")
; Makes sure that CAPS doesn't get stuck on
SetCapsLockState, AlwaysOff

; This part assigns the key that makes the interface appear and disappear.
CapsLock::
WinGetActiveTitle, currentTitle
if (currentTitle == "Hotkey Grid") {
	Send !{Esc}
}
if (currentTitle != "Hotkey Grid") {
	WinActivate, Hotkey Grid
}
Return