---
title: "IP beállítás alapok"
date: 2026-02-27T10:00:00+01:00
description: "A DHCP kötelező. A statikus IP tönkreteszi a kapcsolatot."
draft: false
---

A hálózatunk dinamikus címzést használ.

## Szabály

**Minden legyen Automatikus (DHCP).**

- Ne állíts be statikus IP-címet.
- Ne használd az otthoni helyi DNS beállítást (pl. Pi-hole).
- Ne állíts be egyedi gateway-t.

## Ellenőrzés (Windows)

1. Nyomd meg: `Win + R`, írd be: `ncpa.cpl`, majd Enter.
2. Jobb klikk az Ethernet adapteren > Tulajdonságok.
3. Válaszd: **Internet Protocol Version 4 (TCP/IPv4)** > Tulajdonságok.
4. Mindkettő legyen kijelölve:
   - **Obtain an IP address automatically**
   - **Obtain DNS server address automatically**

## Hibakeresés

Ha "Unidentified Network" vagy "No Internet" látszik:
1. Nyiss egy Command Promptot (`cmd`).
2. Futtasd: `ipconfig /release`
3. Futtasd: `ipconfig /renew`

Ha hibát ad vagy timeoutol, nézd meg a kábelt, vagy kérj segítséget a stafftól.
