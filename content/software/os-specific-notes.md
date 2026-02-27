---
title: "Operációs rendszer szerinti megjegyzések"
date: 2026-02-27T10:00:00+01:00
description: "Windows furcsaságok, Linux tippek, és működő beállítások."
draft: false
---

Különböző rendszerek, ugyanaz a hálózat.

## Windows 10/11

- **Hálózati profil:** állítsd **Privát** módra, hogy láthass más gépeket és hostolhass LAN játékot.
- **Tűzfal:** játék indításakor mindkét pipát jelöld be (Private és Public).
- **Frissítések:** a rendezvény előtt futtasd a Windows Update-et. Cache-eljük, de egy nagy feature update így is sok idő lehet.

## Linux

- **Network Manager:** a vezetékes kapcsolat legyen DHCP-re állítva.
- **Samba:** ha Windows userekkel osztanál meg fájlokat, telepíts és állíts be Samba-t (`smb`).
- **Wine/Proton:** teszteld a játékokat előre. Ne az első 4 órában állítsd a Lutrist.

## macOS

- **Adapterek:** hozz USB-C -> Ethernet adaptert.
- **Játékok:** nézz utána a kompatibilitásnak, sok LAN klasszikus csak Windows-on fut.
- **Fájlmegosztás:** kapcsold be a "File Sharing" opciót a System Settings > General > Sharing részben a Windows SMB megosztásokhoz.
