---
title: "Nem látom a szervert"
date: 2026-02-27T10:00:00+01:00
description: "Kábel ellenőrzés, portál teszt, és mit tegyél, ha semmi nem tölt be."
draft: false
---

Ha nem látod a játékszervert vagy a LAN portált, itt kezdd.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

## 1. Alapok ellenőrzése

Először fuss át a [Hálózati hibakeresés](/network/network-troubleshooting/) lépésein.

- **Kábel bedugva?**
- **Linkfény világít?**
- **Portál betölt?**

Ha a portál betölt, de a játékszerver nem, folytasd itt.

## 2. IP beállítás

A hálózati adapter legyen **IP-cím automatikus lekérése (DHCP)** módban.

1. Nyomd meg: `Win + R`, írd be: `ncpa.cpl`, majd Enter.
2. Jobb klikk az Ethernet adapteren > Tulajdonságok.
3. Válaszd: **Internet Protocol Version 4 (TCP/IPv4)** > Tulajdonságok.
4. Válaszd: **IP-cím automatikus lekérése**.

**Statikus IP nem engedélyezett** és nem fog működni.

## 3. Szerver állapot

Csekkold itt: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu).

- Ha ott piros/down, akkor mindenkinek áll.
- Ha zöld, de te nem látod, nézd meg a tűzfalat.

## 4. Tűzfal

Tesztként ideiglenesen kapcsold ki a Windows Tűzfalat vagy a külső antivírus tűzfalat.

- Ha megjelenik a szerver, kapcsold vissza a tűzfalat, és adj kivételt a játék futtatható fájljára.
- Ne hagyd kikapcsolva az esemény teljes idejére.

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
