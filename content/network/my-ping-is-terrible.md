---
title: "Nagyon rossz a pingem"
date: 2026-02-27T10:00:00+01:00
description: "Lag spike vagy magas késleltetés? Először a háttérben futó appokat nézd meg."
draft: false
still_stuck: true
---


A magas ping általában azt jelenti, hogy valami a gépeden éppen sávszélességet eszik.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

{{< mermaid >}}
flowchart LR
    A([Magas ping / lag]) --> B[Állíts le minden letöltést\nSteam, Windows Update, böngésző, torrent]
    B --> C{Wifi-n vagy?}
    C -->|Igen| D[Csatlakozz Ethernet kábellel]
    C -->|Nem| E[Nyisd meg a Resource Monitort\nWin+R > resmon > Network fül]
    D --> E
    E --> F{Magas hálózati\nhasználat a háttérben?}
    F -->|Igen| G[Öld meg a folyamatot]
    F -->|Nem| H{Az egész sor laggol?}
    H -->|Igen| I([Szólj a staffnak - switch uplink gond])
    H -->|Nem| J[Indítsd újra\na hálózati adaptert]
    G --> K{Megoldódott?}
    J --> K
    K -->|Igen| L([Kész!])
    K -->|Nem| M([Írj a #support csatornára])
{{< /mermaid >}}

Nézd meg:
- Steam / Epic / Battle.net (auto frissítések)
- Windows Update
- Böngésző tabok (YouTube, Twitch)
- Fájlmegosztó kliensek (torrent, DC++)

Mindent szüneteltess.

## 2. Vezetékes vagy wifi

Wifin vagy?

- **Válts kábelre.** A wifi mobilhoz és böngészéshez jó, kompetitív játékhoz nem.
- Minden helyhez adunk hálózati kábelt. Használd azt.

## 3. Helyi forgalom ellenőrzése

Nyisd meg a Task Managert (Ctrl+Shift+Esc) > Performance > Ethernet.

Vagy használd a Resource Monitort a részletekért:
1. Nyomd meg: `Win + R`, írd be: `resmon`, majd Enter.
2. Menj a **Network** fülre.
3. A "Network Activity" alatt látod, pontosan melyik program eszi a sávszélességet.

- Ha állandóan magas Mbps forgalmat látsz úgy, hogy semmit nem csinálsz, keresd meg a folyamatot és állítsd le.

## 4. Hálózati túlterhelés

Ha az egész sor laggol:
- Kérdezd meg a szomszédokat, fut-e náluk nagy letöltés.
- Ha mindenki laggol és senki sem tölt, **szólj a staffnak**. Ellenőrizni tudjuk a switch uplinket.
