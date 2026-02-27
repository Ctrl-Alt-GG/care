---
title: "Tűzfal és antivírus ellenőrzés"
date: 2026-02-27T10:00:00+01:00
description: "Ha pingelhető, de nem tudsz csatlakozni, valószínűleg a tűzfal az ok."
draft: false
---

A Windows Tűzfal gyakran blokkolja a LAN-játékokat, főleg ha a hálózat „Nyilvános" profilra van állítva.

## Tünetek

- Látod a szerverlistát, de nem tudsz csatlakozni.
- Nem tudsz helyi lobbyt hostolni.
- Nem látod a többi játékost LAN böngészőben.

## Gyors javítás

1. **Hálózati profil:** Legyen **Privát** (ha megbízol a LAN-ban), vagy kézzel engedélyezd a játékot.
   - Beállítások > Hálózat és internet > Ethernet > Hálózati profil típusa.
2. **Alkalmazás engedélyezése:**
   - Keresd: "Allow an app through Windows Firewall".
   - Kattints: **Change settings**.
   - Keresd ki a játékot.
   - Pipáld be a **Private** és **Public** oszlopot is.
   - OK.

## Külső antivírus

Ha Norton, McAfee, Bitdefender stb. fut:
- Gyakran felülírják a Windows beállításokat.
- Keresd a "Game Mode" opciót, vagy teszthez ideiglenesen állítsd le a tűzfalat.
- **Ne felejtsd visszakapcsolni.**
