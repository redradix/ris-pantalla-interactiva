#! /usr/bin/env sh

set -e

sudo apt update
sudo apt install --no-install-recommends \
	git \
	nodejs yarnpkg \
	xserver-xorg xinit x11-xserver-utils \
	matchbox-window-manager unclutter \
	chromium-browser fonts-noto-color-emoji

git clone https://github.com/redradix/ris-pantalla-interactiva.git $HOME/fermin
cd $HOME/fermin/app
yarnpkg install
cd -

sudo mkdir -p /usr/local/lib/systemd/system/
sudo cp fermin-server.service /usr/local/lib/systemd/system/
sudo systemctl enable fermin-server
rm fermin-server.service

cp fermin-kiosk-xsession $HOME/.xinitrc
chmod u+x $HOME/.xinitrc
rm fermin-kiosk-xsession

cat start-on-login >> $HOME/.profile
rm start-on-login

rm install-fermin-kiosk.sh
