---
title: "Nem indul a gép"
date: 2026-02-27T10:00:00+01:00
description: "PSU LED, GPU/RAM újracsatlakoztatás, monitor 'no signal' javítása."
draft: false
still_stuck: true
---


A szállítás rázkódása gyakran kilazít dolgokat. Ne pánikolj, valószínűleg csak egy kábel csúszott ki.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

**Mit látsz?** Keresd meg a tünetedet, és ugorj a megfelelő részhez.

| Tünet | Legvalószínűbb ok | Ugrás |
|---|---|---|
| Semmi — nincs fény, nincs ventilátor | Táp ki van kapcsolva vagy kihúzva | [Áramellátás](#1-aramellatas-psu) |
| Alaplapi LED világít, de nem indul | Előlapi bekapcsológomb csatlakozó | [Áramellátás](#1-aramellatas-psu) |
| Ventilátorok forognak, kép nincs / "no signal" | Monitor az alaplapba van dugva a GPU helyett | [Monitor](#2-monitor-no-signal) |
| Ventilátorok rövid ideig forognak, majd leáll (loop) | RAM nincs rendesen bedugva | [Újracsatlakoztatás](#3-alkatreszek-ujracsatlakoztatasa-reseating) |
| Sípolás indításkor | RAM (folyamatos) vagy GPU (1 hosszú + 2 rövid) | [Újracsatlakoztatás](#3-alkatreszek-ujracsatlakoztatasa-reseating) |
| BIOS bejön, Windows nem indul | Boot sorrend vagy kilazult meghajtó kábel | [Áramellátás](#1-aramellatas-psu) 3. pont |

## 1. Áramellátás (PSU)

- **Kapcsoló:** Nézd meg a tápegységed hátulján a kapcsolót. "I" állásban van?
- **Kábel:** Dugd be rendesen. Próbálj ki egy másik konnektort (vagy a szomszéd elosztóját, ha engedi).
- **LED:** Ha az alaplapi LED világít, kap áramot. Ha nem, akkor a táp vagy a kábel a ludas.

## 2. Monitor "No Signal"

A gép zúg, de a kép sötét?

1. **Bemenet:** Nyomkodd meg a monitoron a "Source" vagy "Input" gombot. Lehet, hogy HDMI-n várja a jelet, de te DisplayPorton küldöd.
2. **Kábel:** Húzd ki és dugd vissza mindkét végét.
3. **GPU:** Biztos, hogy a videókártyába dugtad a monitort, és nem az alaplapba? (Klasszikus hiba.)

## 3. Alkatrészek újracsatlakoztatása (Reseating)

Ha a gép sípol, vagy elindul-leáll ciklusban ragad:

1. **Áramtalaníts.** Húzd ki a tápkábelt.
2. **RAM:** Vedd ki a memóriamodulokat, és pattintsd vissza őket határozottan. Hallanod kell a kattanást.
3. **GPU:** Vedd ki a videókártyát, és tedd vissza. Ellenőrizd a PCIe tápkábeleket is.

## 4. Ha semmi sem segít

Kérj meg egy szomszédot, hogy teszteljétek le az ő tápkábelével vagy monitorával. Ha így sem megy, keress meg egy szervezőt. Van néhány tartalék alkatrészünk tesztelésre, de nem ígérünk csodát.
