Go to the directory where you have downloaded Norman:
sudo cp xorg/norman /etc/X11/xkb/symbols/norman
(for ubuntu 10.04) Type: sudo cp norman /usr/share/X11/xkb/symbols/norman

Type: setxkbmap -v norman && xset r 66 

You should get something similar to this:
Warning! Multiple definitions of keyboard layout
         Using command line, ignoring X server
Trying to build keymap using the following components:
keycodes:   xfree86+aliases(qwerty)
types:      complete
compat:     complete
symbols:    pc(pc105)+norman+level3(ralt_switch)
geometry:   pc(pc105)
To switch back to QWERTY type: 
setxkbmap us; xset -r 66
