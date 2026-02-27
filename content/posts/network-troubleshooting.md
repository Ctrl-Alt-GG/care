---
title: "Hálózati hibakeresés (itt kezdd)"
date: 2026-02-27T10:00:00+01:00
categories: ["network"]
description: "Gyors ellenőrző lista az online kapcsolathoz és a LAN szolgáltatásokhoz."
draft: false
---

A legtöbb gond **kábel/port**, **DHCP** vagy **helyi gépes beállítás**. Menj sorban.

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

- **Ha betölt:** online vagy. Nézd meg a szerver állapotot: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu)
- **Ha nem tölt be:**
  - Húzd ki és dugd vissza a kábelt
  - Próbálj másik portot (vagy kérj segítséget)
  - Átmenetileg próbáld a wifi-t

Haladó felhasználóknak: ha tudod hogyan, pingeld a gateway-t. Ha az megy, a helyi link valószínűleg jó.

## 3. lépés: eléred-e a LAN szolgáltatásokat

- Csak egy játékszerver nem elérhető? Lehet, hogy újraindul vagy tele van.
- Neked rossz, másoknak jó? Valószínűleg helyi gond (PC/tűzfal/DNS).
- Sok embernek rossz? Szólj a staffnak.

## 4. lépés: gyors helyi javítások

- Indítsd újra a hálózati adaptert (vagy a gépet)
- Újítsd meg az IP-címed
- Legyen **Automatikus IP (DHCP)** beállítva
- Ha egy idő után meghal a port, lehet, hogy túl sok eszközt kötöttél rá - kérd a staffot újraengedélyezésre

## 5. lépés: segítségkéréskor ezt mondd

- Vezetékes vagy wifi
- Mi működik / mi nem (portál, Discord, Steam, konkrét szerver)
- Milyen eszköz + OS (PC/laptop/konzol, Windows/Linux/macOS)
- Hol ülsz

A gyakori okokhoz nézd meg: [IP beállítás alapok](/posts/ip-setup-basics/), [Tűzfal és antivírus ellenőrzés](/posts/firewall-and-antivirus-checks/), [Hálózati hibák jelentése](/posts/reporting-network-issues/).
