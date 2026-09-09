---
title: "Játékmenet közvetítése a Streamsbe"
description: "OBS beállítása, biztonságos csatlakozás és az élő adás ellenőrzése a rendezvény belső Streams szolgáltatásában."
weight: 90
---

## Amire szükséged lesz

- OBS Studio és egy működő játék- vagy ablakrögzítési forrás.
- Hozzáférés a rendezvény hálózatához és a szervezőktől kapott Streams cím.
- A szervezőktől külön kapott közvetítési felhasználónév és jelszó. Ezeket a Streams útmutatója nem jeleníti meg.

A Streams megtekintéséhez nem kell fiók, de az adás beküldéséhez hitelesítés szükséges. A Bracket-fiókod nem közvetítési hozzáférés.

## OBS beállítása

1. Nyisd meg a Streams **Közvetítés / Publish** menüpontját, vagy a kezdőlap alján az **Útmutató megnyitása / Open guide** gombot.
2. Az OBS-ben nyisd meg a **Beállítások > Közvetítés / Settings > Stream** oldalt, és válaszd az **Egyéni / Custom** szolgáltatást.
3. A **Szerver / Server** mezőbe másold a Streams útmutatójában megjelenő szervercímet. Kizárólag a TLS-sel védett, `rtmps://` kezdetű címet használd. A katalógus böngészős címe nem azonos a közvetítési szerver címével.
4. A **Közvetítési kulcs / Stream key** mezőbe írj egy egyedi nevet `live/SOMETHING` formában, például `live/csapat7`. A `SOMETHING` helyére csak betű, szám, kötőjel vagy aláhúzás kerüljön. A puszta `live/` értéket a kiszolgáló elutasítja.
5. Kapcsold be a hitelesítést, és add meg a szervezőktől kapott közvetítési adatokat. A szervercím és a streamkulcs külön mezőbe kerül, ne másold a `live/` előtagot mindkettőbe.
6. Ellenőrizd az OBS előnézetét és a hangkeverő jelszintjeit, majd kattints a **Közvetítés indítása / Start Streaming** gombra.

Ne közvetíts jelszót, privát üzenetet vagy mások személyes adatait. Teljes képernyő rögzítése helyett lehetőleg csak a játékot rögzítsd. A közvetítési nevet és a hitelesítő adatokat ne oszd meg nyilvánosan.

![A Streams magyar közvetítési útmutatója az OBS szervercímével, a live/SOMETHING kulcsmintával és az FFmpeg részével.](/screenshots/streams-publishing-hu.png "A Streams közvetítési útmutatója 2026-09-09-én, nem az OBS beállítási ablaka. A szervercímet mindig az aktuális oldalról másold; a SOMETHING csak helykitöltő.")

[Képernyőkép megnyitása teljes méretben](/screenshots/streams-publishing-hu.png)

## Ellenőrizd, hogy mások is látják-e

1. Várd meg, hogy a katalógus frissüljön, majd töltsd újra a Streams kezdőlapját.
2. Nyisd meg a saját csatornádat. Ellenőrizd a képet és a hangot a [lejátszási útmutató]({{< relref "watch-stream.md" >}}) szerint.
3. Némítsd a helyi visszahallgatást, hogy az OBS ne vegye fel újra a saját adásodat.
4. A nézőknek a csatorna böngészős oldalát küldd el, ne az RTMPS-címet vagy a közvetítési adatokat. Nekik is szükségük van hálózati hozzáférésre.
5. Ha végeztél, az OBS-ben kattints a **Közvetítés leállítása / Stop Streaming** gombra. A böngésző bezárása nem állítja le az adást.

## Nem sikerül csatlakozni

- **Hitelesítési hiba:** ellenőrizd a közvetítési felhasználónevet és jelszót. Ne a Bracket belépési adatait használd.
- **Elutasított streamkulcs:** ellenőrizd a `live/` előtagot, az utána álló nevet és a megengedett karaktereket. Ha a név már használatban van, egyeztess a szervezőkkel.
- **Kapcsolati hiba:** másold újra az aktuális szervercímet a Streams útmutatójából, és ellenőrizd a hálózati hozzáférést. Tanúsítványhibát ne kerülj meg a TLS kikapcsolásával.
- **Az OBS ad, de nincs csatorna:** várj a katalógus következő frissítésére. Ha forráshibáról szóló figyelmeztetés marad az oldalon, szólj a szervezőknek.
- **Akadozó kép:** nézd meg az OBS statisztikáját. Ha túlterhelt a gép vagy a hálózat, csökkentsd a felbontást, képkockaszámot vagy bitrátát, és próbálj vezetékes kapcsolatot.

## Ha FFmpeg-et használsz

A Streams közvetítési útmutatójának **FFmpeg** részében az aktuális szervercímmel készült parancsmintát találod. Az `INPUT` helyére a bemenetet, a `SOMETHING` helyére a saját közvetítési nevedet írd. A minta H.264 videót és AAC hangot küld FLV konténerben.

A minta nem tartalmaz hitelesítő adatokat, ezért önmagában nem biztosít hozzáférést. A hitelesítés módját egyeztesd a szervezőkkel, és ne tegyél jelszót megosztott parancsba, képernyőképbe vagy hibajegybe.