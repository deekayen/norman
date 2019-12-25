# Linux VT Norman Layout

```
loadkeys /path/to/repo/linux_vt/norman.map.gz
```

To load the map as the current terminal session's keymap.  



To set it permanently, you will need to install the `gz` file which is distro-specific - see the documentation for your distribution and whether it wants a `map.gz` or `kmap.gz` suffix.

Once installed, either modify to [`/etc/vconsole.conf`](https://www.freedesktop.org/software/systemd/man/vconsole.conf.html)

```
KEYMAP=norman
```

Or if your system uses `systemd` you can use `localectl set-keymap --no-convert norman`