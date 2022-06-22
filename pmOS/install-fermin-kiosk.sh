#! /usr/bin/env sh

set -e

sudo nmcli radio wifi on
sudo nmcli dev wifi connect --ask

sudo setup-xorg-base
sudo apk add \
	git \
	nodejs yarn \
	firefox font-noto-emoji
# It may need a WM
#	matchbox-window-manager unclutter

git clone https://github.com/redradix/ris-pantalla-interactiva.git $HOME/fermin
cd $HOME/fermin/app
yarnpkg install
cd -

cp fermin-kiosk-xsession $HOME/.xinitrc
chmod u+x $HOME/.xinitrc
rm fermin-kiosk-xsession

cat start-on-login >> $HOME/.profile
rm start-on-login

rm install-fermin-kiosk.sh
