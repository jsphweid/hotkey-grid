-- Halve Note Lengths
-- version 1.0 on 2015-07-09 in Freund's office
-- This took like 6-10 hours trying to figure out this stupid language...
-- I took the time to make helper files for my sanity. DAMN!
-- #firstRealApplescriptScript

-- load helper file
property Helpers : load script POSIX file "helpers.scpt"

-- set theFinale
tell application id "sevs"
	try
		set theFinale to name of first process whose name begins with "Finale"
	on error number -1719
		display dialog "Finale doesn't appear to be running."
		return
	end try
end tell

----------------ACTUAL SCRIPT----------------

tell Helpers
	activate_window(theFinale)
	menu_click({theFinale, "Utilities", "Change", "Note Durations…"})
	win_wait_active("Change Note Durations", theFinale)
	check_it("Include Tuplets", "Change Note Durations", theFinale)
	check_it("Rebar Music", "Change Note Durations", theFinale)
	basic_dropdown("200%", 1, 1, "Change Note Durations", theFinale)
	click_button("OK", "Change Note Durations", theFinale)
end tell


--tell button "OK" to click
