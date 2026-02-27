---
title: "Biztonság a közös hálózaton"
date: 2026-02-27T10:00:00+01:00
description: "100 idegen eszközzel vagy egy hálózaton. Így védd magad."
draft: false
---

A LAN party barátságos környezet, de technikailag egy nyilvános hálózatnak számít. Több száz ismeretlen eszköz csatlakozik ugyanahhoz a switch-hez. Nem kell paranoiásnak lenni, de az alapvető óvintézkedések kötelezőek.

## 1. Kezeld nyilvános hálózatként

Amikor a Windows megkérdezi, hogy a hálózat "Private" (Otthoni) vagy "Public" (Nyilvános), a **Public** a biztonságosabb választás, mert elrejti a gépedet.

*Megjegyzés: Ha LAN játékhoz kell csatlakoznod, lehet, hogy át kell állítanod Private-ra, vagy engedélyezned kell a tűzfalon. Lásd: [Tűzfal és antivírus ellenőrzés](/network/firewall-and-antivirus-checks/).*

## 2. Kapcsold be a tűzfalat

Soha ne kapcsold ki teljesen a Windows Defendert vagy a tűzfaladat. Ha egy játék nem működik, csak azt az egy portot/alkalmazást engedélyezd, ne az egész védelmet kapcsold le.

## 3. Zárd be a felesleges kapukat

- Kapcsold ki a fájlmegosztást, ha nem használod.
- Ha fejlesztő vagy (Docker, webszerverek, adatbázisok), ne hagyd őket `0.0.0.0` bindeléssel futni, vagy védd jelszóval. Nem akarod, hogy valaki véletlenül (vagy szándékosan) letörölje a projektjeidet.

## 4. Zárold a géped (Win + L)

Ha felállsz az asztaltól (mosdó, büfé, alvás), **mindig zárold a képernyőt**.

- Windows: `Win + L`
- Mac: `Ctrl + Cmd + Q`

Ez megvéd a "vicces" üzenetektől, amit a nevedben küldenének, és a fiókod biztonságát is garantálja.

## 5. Csak a hivatalos hálózatot használd

- Kábelen: Csak a fali aljzatba dugd a géped.
- Wifin: Csak a hivatalos SSID-hez csatlakozz. Ha látsz egy "Free Wifi" vagy hasonló nevű hálózatot, ami nem a miénk, ne csatlakozz rá - lehet, hogy adathalász kísérlet.

## +1: Frissíts!

A [legjobb védekezés](/software/before-you-arrive/), ha az operációs rendszered és a szoftvereid naprakészek. A biztonsági rések 99%-át a frissítések javítják.
