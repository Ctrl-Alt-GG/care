---
title: "Nem látom a szervert"
date: 2026-02-27T10:00:00+01:00
description: "Kábel ellenőrzés, portál teszt, és mit tegyél, ha semmi nem tölt be."
draft: false
---

Ha nem látod a játékszervert vagy a LAN portált, itt kezdd.

## 1. Fizikai ellenőrzés

- Be van dugva a hálózati kábel mindkét oldalon?
- Van linkfény (zöld/sárga LED) a hálózati porton?
- A tőlünk kapott kábelt használod? (Saját kábel csak engedéllyel.)

## 2. Portál ellenőrzés

Nyisd meg a böngészőt, és menj ide: [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu).

- **Ha betölt:** A kapcsolat rendben van. A gond valószínűleg a konkrét játékszerver vagy a tűzfal.
- **Ha nem tölt be:** Kapcsolati probléma van.

## 3. IP beállítás

A hálózati adapter legyen **IP-cím automatikus lekérése (DHCP)** módban.

- **Windows:** Beállítások > Hálózat és internet > Ethernet > IP-cím hozzárendelés > Szerkesztés > Automatikus (DHCP)
- **Statikus IP nem engedélyezett** és nem fog működni.

## 4. Szerver állapot

Csekkold itt: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu).

- Ha ott piros/down, akkor mindenkinek áll.
- Ha zöld, de te nem látod, nézd meg a tűzfalat.

## 5. Tűzfal

Tesztként ideiglenesen kapcsold ki a Windows Tűzfalat vagy a külső antivírus tűzfalat.

- Ha megjelenik a szerver, kapcsold vissza a tűzfalat, és adj kivételt a játék futtatható fájljára.
- Ne hagyd kikapcsolva az esemény teljes idejére.

## Még mindig semmi?

Ha van linkfény, DHCP be van kapcsolva, és a portál sem tölt be: **kérj segítséget**.
