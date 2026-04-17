---
title: "Hálózati hibakeresés (itt kezdd)"
date: 2026-02-27T10:00:00+01:00
description: "Gyors ellenőrző lista az online kapcsolathoz és a LAN szolgáltatásokhoz."
draft: false
still_stuck: true
---


A legtöbb gond **kábel/port**, **DHCP** vagy **helyi gépes beállítás**. A fenti ábra mutatja az utat — a részletek lent.

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

## Alapok

- Ethernet kábel stabilan bedugva (mindkét oldalon), linkfény látható
- VPN-ek és "hálózati eszközök" kikapcsolva

{{< callout type="warning" >}}
**Ne hozz saját hálózati eszközt:**
- Sem switchet, routert, sem Wi-Fi AP-t
- Ne oszd meg saját interneted
- Ne futtass DHCP szervert vagy hálózati scannert
{{< /callout >}}

## Kapcsolat diagnosztika

Nyisd meg a LAN portált: [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu)

| Portál betölt? | Mit jelent | Következő lépés |
|---|---|---|
| ✅ Igen | Van LAN hozzáférésed | Ellenőrizd a [szerver állapotot](https://servers.ctrl-alt-gg.hu) |
| ❌ Nem | IP / kábel hiba | Lásd az IP-megújítást lent |
| Szerver zöld, játék nem megy | Tűzfal / port gond | Lásd a Tűzfal útmutatót |
| Szerver piros / le van | Globális hiba | Szólj a staffnak |

Ha egyszerre sok embernek rossz, először szólj a staffnak — ne pazarolj időt helyi javítgatásra.

## IP-cím megújítása

Ha a portál nem tölt be a kábel újradugása után:

**Windows:**
```cmd
ipconfig /release
ipconfig /renew
```

**Linux:**
```bash
sudo dhclient -r && sudo dhclient -v
```

Az adapter legyen **Automatikus IP (DHCP)** módban — statikus IP nem fog működni a hálózatunkon.

Ha egy idő után meghal a port, lehet, hogy túl sok eszközt kötöttél rá. Kérd a staffot újraengedélyezésre.
