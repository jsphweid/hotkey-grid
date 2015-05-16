; Makes sure that CAPS doesn't get stuck on
SetCapsLockState, AlwaysOff

; #if ((WinActive("Finale") or WinActive("WIN TITLELFJSDIFJOXICJVCI"));---------------------------------------
	; This part assigns the key that makes the interface appear and disappear.
CapsLock::
IfWinNotActive, Hotkey-Grid
{
	MsgBox, test
	WinActivate, Hotkey-Grid
	Return
}
IfWinActive, Hotkey-Grid
{
	WinMinimize, Hotkey-Grid
	Return
}
Return
; #If ;-------------------------------------------------------------------
