---
title: "Hang beállítása és nincs hang javítások"
date: 2026-02-27T10:00:00+01:00
description: "Fejhallgató csatlakozási típusok, nincs hang hibaelhárítás és hangeszközök tippjei."
draft: false
---

Nincs hang? Rossz kimenet? Ez az útmutató a hardveres oldalt fedi le.
A hangrögzítő szoftver beállításához lásd a [Hangrögzítő beállítása](/software/voice-chat-setup/) cikket.

## Fejhallgató csatlakozási típusok

### 3,5 mm-es analóg (egyes jack)
Kombinált fejhallgató/mikrofon jack. Laptopokra jellemző.
- Csatlakoztasd a kombinált fejhallgató-jackbe (általában fejhallgató ikonnal jelölt vagy zöld+rózsaszín színű).
- Ha a fejhallgatódnak két külön dugója van (fejhallgató + mikrofon), **Y-osztóra** (TRRS két TRS-re) van szükséged, hogy mindkettőt egyetlen kombinált jeckbe dugd.

### 3,5 mm-es analóg (kettős jack)
Két külön dugó — zöld a fejhallgatóhoz, rózsaszín a mikrofonhoz.
- Zöld dugó → zöld/fejhallgató kimeneti port.
- Rózsaszín dugó → rózsaszín/mikrofon bemeneti port.
- Ezek általában az asztali PC **hátsó paneljén** találhatók a legjobb jelminőség érdekében.
- Az elülső panel csatlakozói is működnek, de több interferenciát okozhatnak.

### USB
Csatlakoztasd bármely USB-portba. A fejhallgató saját hangeszközként regisztrál.
- Csatlakoztatás után Windows lehet, hogy nem vált automatikusan. Állítsd be alapértelmezettnek: jobb klikk a hangszóró ikonra > Hangbeállítások > válaszd ki a fejhallgatódat.
- Néhány USB fejhallgató saját meghajtót vagy szoftvert igényel.

### Vezeték nélküli (USB dongle)
- Csatlakoztasd a donglet egy USB-portba.
- Kapcsold be a fejhallgatót.
- Párosítsd, ha szükséges (kövesd a fejhallgató utasításait).
- Ugyanaz mint USB esetén: állítsd be alapértelmezett kimenetként a Hangbeállításokban.

## Nincs hang csatlakoztatás után

1. **Ellenőrizd a fizikai kapcsolatot.** Húzd ki és dugd vissza határozottan.
2. **Ellenőrizd a hangerőt:** Fejhallgató hangerőszabályzó (ha van), Windows hangerő-keverő.
3. **Állítsd be alapértelmezett eszközként:**
   - Jobb klikk a tálcán lévő hangszóró ikonra > Hangbeállítások.
   - A **Kimenet** alatt válaszd ki a fejhallgatódat.
   - A **Bemenet** alatt válaszd ki a fejhallgató mikrofonját.
4. **Haladó:** Nyomd meg a `Win + R` gombot, írd be: `mmsys.cpl`. A **Lejátszás** fülön keresd meg a fejhallgatódat, jobb klikk > **Beállítás alapértelmezett eszközként**.

## A mikrofon nem működik

1. **Ellenőrizd a bemeneti eszközt:** Hangbeállítások > Bemenet > válaszd ki a fejhallgató mikrofonját.
2. **Mikrofon engedélyek:** Beállítások > Adatvédelem és biztonság > Mikrofon > engedélyezd az alkalmazásoknak a mikrofonhoz való hozzáférést.
3. **Teszteld:** A Hangbeállításokban > Bemenet szólj bele, és nézd, mozog-e a bemeneti szintmérő.
4. **Némítás kapcsoló:** Ellenőrizd a fejhallgató fizikai némítógombját vagy a kábelen lévő inline némítót.

## Elülső vs hátsó panel

- **Hátsó panel (PC hátulja):** Közvetlenül az audiochiphez csatlakozik. Legjobb minőség, legkevesebb interferencia.
- **Elülső panel:** A házon keresztül van vezetve. Kényelmes, de néha statikus zajt vagy alacsonyabb hangerőt okoz.
- Ha az elülső panelen zajt vagy zümmögést hallasz, próbáld a hátsót.

## Gyakori problémák

| Probléma | Valószínű ok | Megoldás |
|---|---|---|
| Hangszóróból szól, nem fejhallgatóból | Rossz alapértelmezett eszköz | Állítsd be a fejhallgatót alapértelmezettként a Hangbeállításokban |
| Mikrofon nem érzékelhető a játékban | Játékon belüli hangbeállítások | Ellenőrizd a bemeneti eszközt a játék hangbeállításaiban |
| Zümmögés / statikus zaj | Földhurok vagy interferencia | Próbáld a hátsó panelt; próbálj más USB-portot |
| Alacsony hangerő 100%-on is | Fejhallgató hangerőszabályzó | Forgasd fel a szabályzót; néhány fejhallgatóhoz Equalizer APO boost kell |
| Nincs hang alvás után | USB felfüggesztés | Húzd ki és dugd vissza a fejhallgatót |

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
