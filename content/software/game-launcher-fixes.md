---
title: "Játék indító javítások"
date: 2026-02-27T10:00:00+01:00
description: "Steam/EGS/GOG: gyorsítótár törlés, fájlok ellenőrzése, offline telepítés."
draft: false
---

A Steam nem indul? A Battle.net beragadt? Próbáld ezeket.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

## Steam

### Nem indul
1. Lődd ki az összes `steam.exe` folyamatot a Feladatkezelőben.
2. Indítsd újra.
3. Ha még mindig rossz: töröld a `%localappdata%\Steam\htmlcache` és `%localappdata%\Steam\browser` mappákat.

### Játék nem frissül / sérült
**Letöltési gyorsítótár törlése:**
1. Steam > Settings > Downloads.
2. Kattints a **Clear Download Cache** gombra.
3. A Steam újraindul, és újra be kell jelentkezned.

### Gyorsítótár törlés / javítás
**Fájlok ellenőrzése (Verify Integrity):**
1. Jobb klikk a játékra a könyvtárban > Properties.
2. Installed Files fül.
3. Kattints a **Verify integrity of game files** gombra.

**Könyvtár javítása:**
1. Steam > Settings > Storage.
2. Válaszd ki a meghajtót, kattints a három pontra (...) > Repair Library.

## Epic Games Store

### Nem indul
1. Lődd ki az `EpicGamesLauncher.exe` és `EpicWebHelper.exe` folyamatokat.
2. Nyomd meg a `Win + R` gombot, írd be: `%localappdata%`.
3. Töröld az `EpicGamesLauncher\Saved\webcache` mappát.
4. Indítsd újra.

### Játék nem frissül / sérült
**Fájlok ellenőrzése:**
1. Library.
2. Kattints a három pontra a játék alatt.
3. Manage > **Verify**.

## Battle.net

### Nem indul
1. Lődd ki az `Agent.exe` és `Battle.net.exe` folyamatokat.
2. Nyomd meg a `Win + R` gombot, írd be: `%programdata%`.
3. Töröld a `Battle.net` és `Blizzard Entertainment` mappákat.
4. Indítsd újra.

### Játék nem frissül / sérült
**Scan and Repair:**
1. Válaszd ki a játékot.
2. Kattints a fogaskerék ikonra (Options) a Play gomb mellett.
3. Válaszd a **Scan and Repair** opciót.

## GOG Galaxy

**Verify / Repair:**
1. Jobb klikk a játékra > Manage installation > **Verify / Repair**.

## A játék összeomlik indításkor

Ha azonnal bezáródik:
1. **Fájlok ellenőrzése** (lásd fent).
2. **Antivírus:** Nézd meg, nem tette-e karanténba az .exe-t.
3. **Futtatás rendszergazdaként:** Jobb klikk az .exe-re > Run as administrator.
4. **Visual C++:** Telepítsd a Redistributable csomagokat (általában a játék mappájában `_CommonRedist` alatt, vagy töltsd le a fájlszerverről).
5. **Ablakos mód:** Adj hozzá `-windowed` kapcsolót az indítási opciókhoz.

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
