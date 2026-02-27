---
title: "Hogyan működik a hálózat"
date: 2026-02-27T10:00:00+01:00
categories: ["network"]
description: "Rövid, gyakorlatias áttekintés azoknak, akiket érdekel."
draft: false
---

Ez a „haladó" verzió. Ha csak online akarsz kerülni, kezdd itt: [Hálózati hibakeresés](/posts/network-troubleshooting/).

## Magas szintű felépítés

- Internet -> Juniper SRX340 (tűzfal) -> Arista DCS-7050SX (L3 core) -> Juniper EX3300 (access switchek)
- A switch közötti linkek egyszerű route-olt point-to-point (/31) kapcsolatok, így nem függünk spanning tree-től a switchek között
- Az access switchek csak perem szerepet kapnak; a routing döntések a core-ban történnek

## Szegmentáció (VLAN)

- **Access VLAN-ok (140-150):** vendég eszközök, azonos switchen közös LAN szegmens
  - csak DHCP, internet + helyi szolgáltatások
  - ne tegyél elérhetővé olyan szolgáltatást, amit nem szeretnél nyilvánosan
- **Services VLAN (130):** játékszerverek, fájlhoszt, DNS (Unbound), DHCP (Kea)
- **Management VLAN (128):** csak hálózati eszközök
- **Wireless VLAN (132):** policy szinten hasonló az access VLAN-okhoz
- **IoT VLAN (131):** jelenleg hasonló az accesshez; a terv később internet-only izoláció

## Forgalom útja

- Kliensek -> access switch -> core gateway -> tűzfal -> internet
- A helyi LAN szolgáltatások a core-on belül maradnak (nem mennek ki-vissza a tűzfalon)

## Tervezési cél

- Alacsony L2 komplexitás
- Könnyen elkülöníthető hibahelyek (access / core / tűzfal)
- Gyors hibakeresés portál, szerverstátusz oldal és alap ping tesztek segítségével
