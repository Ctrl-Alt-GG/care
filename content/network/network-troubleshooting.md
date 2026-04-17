---
title: "Hálózati hibakeresés (itt kezdd)"
date: 2026-02-27T10:00:00+01:00
description: "Gyors ellenőrző lista az online kapcsolathoz és a LAN szolgáltatásokhoz."
draft: false
still_stuck: true
---


A legtöbb gond **kábel/port**, **DHCP** vagy **helyi gépes beállítás**. Menj sorban.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát. Ha globális a hiba, feleslegesen szerelsz.

{{< mermaid >}}
flowchart TD
    A([Nincs internet]) --> B[Nézd meg az Ismert hibák listát]
    B --> C{Globális hiba van?}
    C -->|Igen| D([Várd meg a staff javítását])
    C -->|Nem| E[Kábel bedugva + van linkfény?]
    E -->|Nem| F[Dugd be rendesen, próbálj másik portot]
    E -->|Igen| G[Betölt a LAN portál?\nspawn.ctrl-alt-gg.hu]
    G -->|Igen| H[Ellenőrizd a szerver állapotot]
    H --> I{Mindenkinél le van?}
    I -->|Igen| J([Szólj a staffnak])
    I -->|Nem| K([Tűzfal / játék beállítások])
    G -->|Nem| L[IP-megújítás\nipconfig /release + /renew\nDHCP legyen beállítva]
    L --> M{Megoldódott?}
    F --> M
    M -->|Igen| N([Csatlakozva!])
    M -->|Nem| O([Írj a #support csatornára])
{{< /mermaid >}}

## 1. lépés: alapok ellenőrzése

- Ethernet kábel stabilan bedugva (mindkét oldalon)
- Van linkfény a PC-n/laptopon
- VPN-ek és "hálózati eszközök" kikapcsolva

Amit ne tegyél:
- Ne dugj be saját switchet/routert/AP-t
- Ne oszd meg saját interneted
- Ne futtass DHCP szervert vagy LAN-t spamelő "scanner" eszközöket

## 2. lépés: online vagy-e

Nyisd meg a LAN portált: [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu)

- **Betölt:** Online vagy. Nézd meg a szerver állapotot: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu). Menj a 3. lépésre.
- **Nem tölt be:**
  - Húzd ki és dugd vissza a kábelt.
  - Próbálj másik portot (vagy kérj segítséget).
  - Átmenetileg próbáld a wifi-t.
  - Menj a 4. lépésre.

Haladó felhasználóknak: ha tudod hogyan, pingeld a gateway-t. Ha az megy, a helyi link valószínűleg jó.

## 3. lépés: eléred-e a LAN szolgáltatásokat

- Csak egy játékszerver nem elérhető? Lehet, hogy újraindul vagy tele van.
- Neked rossz, másoknak jó? Valószínűleg helyi gond (PC/tűzfal/DNS).
- Sok embernek rossz? Szólj a staffnak.

## 4. lépés: gyors helyi javítások

- Indítsd újra a hálózati adaptert (vagy a gépet)
- Újítsd meg az IP-címed:

**Windows:**
```cmd
ipconfig /release
ipconfig /renew
```

**Linux:**
```bash
sudo dhclient -r && sudo dhclient -v
```

- Legyen **Automatikus IP (DHCP)** beállítva
- Ha egy idő után meghal a port, lehet, hogy túl sok eszközt kötöttél rá - kérd a staffot újraengedélyezésre
