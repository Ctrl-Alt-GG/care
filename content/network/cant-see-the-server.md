---
title: "Nem látom a szervert"
date: 2026-02-27T10:00:00+01:00
description: "Kábel ellenőrzés, portál teszt, és mit tegyél, ha semmi nem tölt be."
draft: false
still_stuck: true
---


Ha nem látod a játékszervert vagy a LAN portált, itt kezdd.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

{{< mermaid >}}
flowchart TD
    A([Nem látom a szervert]) --> B[Fuss át a hálózati hibakeresés lépésein]
    B --> C{Betölt a LAN portál?}
    C -->|Nem| D([Először a hálózatot javítsd])
    C -->|Igen| E[Ellenőrizd a servers.ctrl-alt-gg.hu oldalt]
    E --> F{Szerver állapota?}
    F -->|Piros - le van| G([Mindenkinél le van\nSzólj a staffnak])
    F -->|Zöld| H[Ideiglenesen tiltsd le a Windows tűzfalat]
    H --> I{Így látod a szervert?}
    I -->|Igen| J[Add hozzá a játék .exe-t kivételként\nEngedélyezd újra a tűzfalat]
    I -->|Nem| K[Ellenőrizd az IP beállítást: DHCP\nncpa.cpl > IPv4 > Automatikus]
    J --> L{Megoldódott?}
    K --> L
    L -->|Igen| M([Kész!])
    L -->|Nem| N([Írj a #support csatornára])
{{< /mermaid >}}

## 1. Hálózat ellenőrzése

Fuss át a [Hálózati hibakeresés](/network/network-troubleshooting/) lépésein, ha még nem tetted (kábel, linkfény, portál).

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
