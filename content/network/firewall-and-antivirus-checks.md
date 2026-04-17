---
title: "Tűzfal és antivírus ellenőrzés"
date: 2026-02-27T10:00:00+01:00
description: "Ha pingelhető, de nem tudsz csatlakozni, valószínűleg a tűzfal az ok."
draft: false
still_stuck: true
---


A Windows Tűzfal gyakran blokkolja a LAN-játékokat, főleg ha a hálózat „Nyilvános" profilra van állítva.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

## Tünetek

{{< callout type="warning" >}}
**Valószínűleg a tűzfal az ok, ha:**

- Látod a szerverlistát, de nem tudsz csatlakozni.
- Nem tudsz helyi lobbyt hostolni.
- Nem látod a többi játékost LAN böngészőben.
{{< /callout >}}

## Gyors javítás

1. **Hálózati profil:** Legyen **Privát** (ha megbízol a LAN-ban), vagy kézzel engedélyezd a játékot.
   - Beállítások > Hálózat és internet > Ethernet > Hálózati profil típusa.
   - **PowerShell (Admin):**
     ```powershell
     Get-NetConnectionProfile
     Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private
     ```
2. **Alkalmazás engedélyezése:**
   - Nyomd meg: `Win + R`, írd be: `firewall.cpl`, majd Enter.
   - Kattints a bal oldalon: **Allow an app or feature through Windows Defender Firewall** (Alkalmazás átengedése).
   - Kattints: **Change settings** (Beállítások módosítása).
   - Keresd ki a játékot.
   - Pipáld be a **Private** és **Public** oszlopot is.
   - OK.

## Külső antivírus

Ha Norton, McAfee, Bitdefender stb. fut:
- Gyakran felülírják a Windows beállításokat.
- Keresd a "Game Mode" opciót, vagy teszthez ideiglenesen állítsd le a tűzfalat.
- **Ne felejtsd visszakapcsolni.**
