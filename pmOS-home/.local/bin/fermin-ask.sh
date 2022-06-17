#! /usr/bin/env sh

# Indicate the display as required by xset
DISPLAY=:0

# Tell the current xsession not to blank out the screensaver
xset s noblank
# Disable the screensaver altogether
xset s off
# Disables the entire "display power management system"
# meaning that the desktop interface should never blank out the screen.
xset -dpms

TARGET_URL=$(
	/usr/bin/yad \
		--title="Fermin" \
		--text="Introduce la URL del servidor:" \
		--entry \
		--entry-text="http://192.168.0.58:3003" \
		--center \
		--width=450
)

if [ ! -z "$TARGET_URL" ]
then
	/usr/lib/firefox/firefox \
		-kiosk \
		-private-window \
		$TARGET_URL
else
	/usr/bin/yad \
		--title="Fermin" \
		--text="Debes introducir una URL" \
		--no-buttons
fi
