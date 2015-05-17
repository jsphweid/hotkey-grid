; Makes sure that CAPS doesn't get stuck on
SetCapsLockState, AlwaysOff

#if ((WinExist("Hotkey-Grid") or (WinExist("Hotkey Grid"))))
	; This part assigns the key that makes the interface appear and disappear.
CapsLock::
{
WinGetActiveTitle, currentTitle
if ((currentTitle != "Hotkey Grid") and (currentTitle != "Hotkey-Grid")) {
		WinActivate, Hotkey Grid
	if ((currentTitle != "Hotkey Grid") and (currentTitle != "Hotkey-Grid")) {
		WinActivate, Hotkey-Grid
	}
}
if ((currentTitle == "Hotkey Grid") or (currentTitle == "Hotkey-Grid")) {
	Send !{Esc}
}
; MsgBox, "new previous title is" %previousTitle%
}
Return

#If ;-------------------------------------------------------------------
