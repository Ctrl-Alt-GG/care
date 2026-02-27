---
title: "Firewall and Antivirus Checks"
date: 2026-02-27T10:00:00+01:00
description: "If you can ping it but can't join it, it's probably your firewall."
draft: false
---

Windows Firewall loves to block LAN games on "Public" networks.

## The symptoms

- You can see the server list but can't join.
- You can't host a local lobby.
- You can't see other players in LAN browsers.

## Quick fix

1. **Network Profile:** Make sure your network is set to **Private** (if you trust the LAN) or manually allow the game.
   - Settings > Network & Internet > Ethernet > Network profile type.
2. **Allow an app:**
   - Search "Allow an app through Windows Firewall".
   - Click **Change settings**.
   - Find your game.
   - Check both **Private** and **Public** boxes.
   - Click OK.

## Third-party Antivirus

If you use Norton, McAfee, Bitdefender, etc.:
- They often override Windows settings.
- Look for "Game Mode" or temporarily pause the firewall to test.
- **Remember to turn it back on.**
