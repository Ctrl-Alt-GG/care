---
title: "Hálózati alapfogalmak"
date: 2026-02-27T10:00:00+01:00
description: "IP, DHCP, DNS - mit jelentenek és miért fontosak a LAN-on."
draft: false
---

Ha a [Hogyan működik a hálózat](/network/how-the-network-works/) túl technikai volt, ez a gyorstalpaló segít megérteni a legfontosabb kifejezéseket.

## IP-cím (IP Address)

A géped lakcíme a hálózaton. Ezzel azonosítunk téged. A LAN-on ez dinamikusan változhat, de mindig egyedinek kell lennie. Ha két eszköznek ugyanaz az IP-címe, egyik sem fog működni (ez az IP-ütközés).

## MAC-cím (Fizikai cím)

A hálózati kártyádba égetett egyedi azonosító. Ez sosem változik. A rendszerünk ez alapján ismeri fel a gépedet, és ehhez rendeli hozzá az IP-címet.

## DHCP (Dynamic Host Configuration Protocol)

A protokoll, ami automatikusan kiosztja az IP-címeket.

**Ezért fontos:** Ha a gépedet "Automatikus" (DHCP) módra állítod, a szerverünk megmondja neki, mi az IP-címe, hol a kijárat (Gateway) és ki fordítja a neveket (DNS). Ha kézzel állítasz be valamit, azzal csak galibát okozol. Lásd: [IP beállítás alapok](/network/ip-setup-basics/).

## DNS (Domain Name System)

A telefonkönyv. Ez fordítja le az emberi neveket (pl. `servers.ctrl-alt-gg.hu`) gépi IP-címekre.

**Tipp:** Használd az automatikus DNS beállítást, hogy elérd a helyi cache szervereket és a belső szolgáltatásokat.

## Gateway (Átjáró)

A kapu az internet felé. A géped ide küld minden olyan adatot, ami nem a helyi hálózaton belüli eszköznek szól.

## NAT (Network Address Translation)

Otthoni routerek használják, hogy egyetlen publikus IP-címet osszanak meg sok eszköz között.

**LAN-on:** Nincs rá szükség a géped és a fali aljzat között. Ne hozz saját routert, mert a dupla NAT csak gondot okoz a játékokban.
