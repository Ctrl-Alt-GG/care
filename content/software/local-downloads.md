---
title: "Honnan jönnek a letöltések"
date: 2026-02-27T10:00:00+01:00
description: "Játékfrissítések és telepítők helyben, akár 1Gbps sebességgel."
draft: false
---

Mi értelme 50 Mbps-sel internetezni, ha a helyi cache-ről 1000 Mbps-sel is mehet?

## A cache

Helyi cache szervert üzemeltetünk ezekhez:
- Steam
- Battle.net
- Epic Games
- Origin / EA App
- Windows frissítések

## Hogyan használd

**Nem kell semmit állítanod.**

- Indítsd el a letöltést a launcherben.
- A DNS automatikusan a helyi cache-re irányítja a kérést.
- Ha a fájl már cache-ben van, nagyon gyors lesz. Ha nincs, internetről jön, majd eltárolódik a következő embernek.

## Hibakeresés

- **0%-on áll a letöltés?** Indítsd újra a launchert.
- **Lassú?** Lehet, hogy a fájl még nincs cache-ben. Te lehetsz az, aki először behúzza.
- **DNS hiba?** DNS legyen Automatikus (DHCP). Ne használj 8.8.8.8-et vagy 1.1.1.1-et, mert akkor kikerülöd a cache-t.

## Helyi tükörszerver (Mirror)

Néhány open-source játékhoz (pl. Minetest, Xonotic, OpenArena) teljes telepítőket is tárolunk a helyi fájlszerveren: [files.ctrl-alt-gg.hu](https://files.ctrl-alt-gg.hu).

**Ellenőrzőösszeg (Checksum):**
Ha letöltesz egy nagy telepítőt, ellenőrizd, hogy nem sérült-e.

Windows PowerShell:
```powershell
Get-FileHash -Algorithm SHA256 game_installer.zip
```
Hasonlítsd össze a kapott kódot a weboldalon lévővel. Ha nem egyezik, töltsd le újra.
