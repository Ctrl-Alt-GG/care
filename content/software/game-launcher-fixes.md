---
title: "Játék indító javítások"
date: 2026-02-27T10:00:00+01:00
description: "Steam/EGS/GOG: gyorsítótár törlés, fájlok ellenőrzése, offline telepítés."
draft: false
---

A Steam nem indul? A Battle.net beragadt? Próbáld ezeket.

## Steam

**Letöltési gyorsítótár törlése:**
1. Steam > Settings > Downloads.
2. Kattints a **Clear Download Cache** gombra.
3. A Steam újraindul, és újra be kell jelentkezned.

**Fájlok ellenőrzése (Verify Integrity):**
1. Jobb klikk a játékra a könyvtárban > Properties.
2. Installed Files fül.
3. Kattints a **Verify integrity of game files** gombra.

**Könyvtár javítása:**
1. Steam > Settings > Storage.
2. Válaszd ki a meghajtót, kattints a három pontra (...) > Repair Library.

## Epic Games Store

**Fájlok ellenőrzése:**
1. Library.
2. Kattints a három pontra a játék alatt.
3. Manage > **Verify**.

**Gyorsítótár törlése:**
1. Zárd be az Epic Games Launchert (a tálcáról is!).
2. Nyomd meg a `Win + R` gombot, írd be: `%localappdata%`.
3. Nyisd meg az `EpicGamesLauncher` > `Saved` mappát.
4. Töröld a `webcache` mappát.

## Battle.net

**Scan and Repair:**
1. Válaszd ki a játékot.
2. Kattints a fogaskerék ikonra (Options) a Play gomb mellett.
3. Válaszd a **Scan and Repair** opciót.

**Launcher gyorsítótár törlése:**
1. Zárd be a Battle.net-et és az Agent.exe-t a Feladatkezelőben.
2. `Win + R`, írd be: `%programdata%`.
3. Töröld a `Battle.net` és `Blizzard Entertainment` mappákat. (Ez nem törli a játékaidat, csak a launcher beállításait.)

## GOG Galaxy

**Verify / Repair:**
1. Jobb klikk a játékra > Manage installation > **Verify / Repair**.

## Ha ez nem segített

1. Nézd meg az **[Ismert hibák](/help/known-issues/)** listát (lehet, hogy globális gond).
2. Írj a `#support` csatornára Discordon a **[hibajegy sablon](/help/how-to-get-help/)** használatával.
3. Csatolj: hibaüzenetet, képernyőképet, és hogy mit próbáltál eddig.
