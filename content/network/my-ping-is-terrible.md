---
title: "Nagyon rossz a pingem"
date: 2026-02-27T10:00:00+01:00
description: "Lag spike vagy magas késleltetés? Először a háttérben futó appokat nézd meg."
draft: false
still_stuck: true
---


A magas ping általában azt jelenti, hogy valami a gépeden éppen sávszélességet eszik.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

{{< callout type="tip" >}}
**Gyors ellenőrzőlista — először ezeket csináld:**

1. **Wifin vagy?** Csatlakozz az Ethernet kábelre a helyednél.
2. **Állíts le minden letöltést:** Steam / Epic / Battle.net, Windows Update, böngésző tabok (YouTube, Twitch), torrent kliensek.
3. **Nyisd meg a Resource Monitort** (`Win+R` → `resmon` → Network fül), és öld meg a nagy forgalmat okozó folyamatot.
4. **Az egész sor laggol?** Szólj a staffnak — ellenőrizni fogjuk a switch uplinket.
{{< /callout >}}

## 1. Letöltések leállítása

Keress aktív letöltéseket és szüneteltess mindent:
- Steam / Epic / Battle.net (auto frissítések)
- Windows Update
- Böngésző tabok (YouTube, Twitch)
- Fájlmegosztó kliensek (torrent, DC++)

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
