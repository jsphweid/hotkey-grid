; #NoTrayIcon
#SingleInstance force
#Persistent

Sleep, 5000

while (WinExist("Hotkey Grid")) {
	Sleep, 1000
}

If ProcessExist("AutoHotkey.exe") {
	for process in ComObjGet("winmgmts:").ExecQuery("Select * from Win32_Process  where name = 'Autohotkey.exe' ") 
	process, close, % process.ProcessId
}

ProcessExist(Name){
	Process,Exist,%Name%
	return Errorlevel
}