---
title: "Firewall and Antivirus Checks"
date: 2026-02-27T10:00:00+01:00
description: "If you can ping it but can't join it, it's probably your firewall."
draft: false
---

Windows Firewall loves to block LAN games on "Public" networks.

First, check **[Known Issues](/help/known-issues/)**.

## The symptoms

- You can see the server list but can't join.
- You can't host a local lobby.
- You can't see other players in LAN browsers.

## Quick fix

1. **Network Profile:** Make sure your network is set to **Private** (if you trust the LAN) or manually allow the game.
   - Settings > Network & Internet > Ethernet > Network profile type.
   - **PowerShell (Admin):**
     ```powershell
     Get-NetConnectionProfile
     Set-NetConnectionProfile -InterfaceAlias "Ethernet" -NetworkCategory Private
     ```
2. **Allow an app:**
   - Press `Win + R`, type `firewall.cpl`, press Enter.
   - Click **Allow an app or feature through Windows Defender Firewall** (left side).
   - Click **Change settings**.
   - Find your game.
   - Check both **Private** and **Public** boxes.
   - Click OK.

## Third-party Antivirus

If you use Norton, McAfee, Bitdefender, etc.:
- They often override Windows settings.
- Look for "Game Mode" or temporarily pause the firewall to test.
- **Remember to turn it back on.**

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.

**Important:** Before asking for help, **disable your VPN!**
