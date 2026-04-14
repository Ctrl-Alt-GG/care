---
title: "Meghajtó-frissítések érkezés előtt"
date: 2026-02-27T10:00:00+01:00
description: "Frissítsd a GPU, hang és hálózati meghajtókat az esemény előtt, hogy elkerüld a fejfájást."
draft: false
---

Az elavult meghajtók néma gyilkosok a LAN partykon. Frissítsd őket otthon, ahol van időd rá, ne a helyszínen.

## GPU meghajtók

Az elavult GPU meghajtók összeomlásokat, hiányzó funkciókat és fekete képernyőt okoznak játékokban.

### Nvidia
1. Töltsd le a **GeForce Experience** szoftvert vagy a standalone meghajtót a [nvidia.com/drivers](https://www.nvidia.com/drivers/) oldalról.
2. Válaszd ki a GPU modelled és az operációs rendszered.
3. Töltsd le és telepítsd a **Game Ready Driver** verziót.
4. Indítsd újra a gépet.

### AMD
1. Nyisd meg az **AMD Software: Adrenalin Edition** szoftvert (ha telepítve van), vagy töltsd le az [amd.com/support](https://www.amd.com/support/) oldalról.
2. Ellenőrizd a frissítéseket a szoftverben, vagy töltsd le a legújabb **Radeon Software** telepítőt.
3. Telepítsd, és indítsd újra a gépet.

### Intel Arc
1. Töltsd le az **Intel Arc & Iris Xe Graphics** meghajtót az [intel.com/content/www/us/en/download-center/home.html](https://www.intel.com/content/www/us/en/download-center/home.html) oldalról.
2. Telepítsd, és indítsd újra a gépet.

## Hangmeghajtók

A hiányzó vagy helytelen hangmeghajtók "nincs hang" vagy "fejhallgató nem érzékelhető" problémákat okoznak.

- **Realtek (legtöbb alaplap):** Töltsd le a legújabb Realtek HD Audio meghajtót az alaplapgyártó támogatási oldaláról.
- **USB DAC / külső hangkártya:** Telepítsd a gyártó weboldaláról vagy a Windows Update-ről elérhető meghajtót.
- **Saját szoftverrel rendelkező fejhallgató (SteelSeries, HyperX, Corsair, Razer):** Az esemény előtt telepítsd a kísérő alkalmazást, hogy minden profil és EQ-beállítás készen legyen.

## Hálózati adapter meghajtók

A sérült vagy elavult hálózati meghajtó kapcsolati kimaradásokat, DHCP-hibákat és véletlenszerű leválásokat okoz.

1. Nyomd meg a `Win + X` gombot > Eszközkezelő.
2. Bontsd ki a **Hálózati adapterek** részt.
3. Jobb klikk az Ethernet adapterre > **Illesztőprogram frissítése** > Automatikus keresés.
4. Alternatív megoldásként töltsd le a meghajtót az alaplap- vagy laptopgyártó weboldaláról (megbízhatóbb a Windows Update-nél).

## Meghajtó telepítése után

- **Mindig indítsd újra** a gépet GPU meghajtó telepítése után. Az újraindítás a leggyakoribb javítás a látszólag nem működő meghajtókra.
- **DDU (Display Driver Uninstaller):** Ha GPU-gyártót váltasz (pl. Nvidia → AMD), vagy makacs összeomlást hibakeresed, használd a DDU-t Csökkentett módban a régi meghajtó eltávolítására, mielőtt az újat telepíted.

## Gyors ellenőrzés a helyszínen

Ha meghajtó-problémát gyanítasz érkezés után:

1. Nyomd meg a `Win + X` gombot > Eszközkezelő.
2. Keress sárga figyelmeztető ikonokat (!) -- ezek problémát jeleznek.
3. Jobb klikk az eszközre > Illesztőprogram frissítése, vagy Properties > Driver fül > ellenőrizd a verzió dátumát.

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
