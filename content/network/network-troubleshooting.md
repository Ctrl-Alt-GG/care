---
title: "Hálózati hibakeresés (itt kezdd)"
date: 2026-02-27T10:00:00+01:00
description: "Gyors ellenőrző lista az online kapcsolathoz és a LAN szolgáltatásokhoz."
draft: false
---

A legtöbb gond **kábel/port**, **DHCP** vagy **helyi gépes beállítás**. Menj sorban.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát. Ha globális a hiba, feleslegesen szerelsz.

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

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
