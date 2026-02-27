---
title: "Ports & Game Connections"
date: 2026-02-27T10:00:00+01:00
description: "Which ports to check, NAT basics, why a game won't connect."
draft: false
---

If your game won't connect or screams "Strict NAT", read this.

First, check **[Known Issues](/help/known-issues/)**.

## What is NAT?

NAT (Network Address Translation) translates your internal IP to the outside world. On a LAN, this is usually fine, but some games (especially older P2P ones) hate it.

- **Open NAT:** Everything works, anyone can join you.
- **Moderate NAT:** You can join others, but hosting might fail.
- **Strict NAT:** You can only join players with Open NAT.

Our event network uses enterprise-grade NAT. You cannot change this. If you see Strict NAT, it is almost always your local firewall blocking the traffic.

## Which ports to check?

If a game can't find the server, check if your firewall allows traffic on these ports.

**General:**
- **Web / HTTP:** 80, 443 (TCP)
- **DNS:** 53 (UDP)
- **Steam:** 27015-27030 (UDP/TCP)

**Game specific examples:**
- **Minecraft:** 25565 (TCP)
- **Call of Duty:** 3074 (UDP/TCP)
- **Counter-Strike 2:** 27015 (UDP/TCP)

## How to fix connection issues?

1. **Check your Firewall:**
   Disable Windows Firewall for one minute. If the game works, the firewall was the culprit. Turn it back on and add the game executable to the exceptions list (check both Private and Public!).

2. **UPnP:**
   UPnP is disabled on our network for security reasons. Enabling it on your PC won't do anything.

3. **VPN:**
   Turn off your VPN. VPNs break local LAN discovery, so you won't see local servers.

4. **IPv6:**
   Some older games get confused if IPv6 is enabled but there is no IPv6 internet connectivity. Try disabling IPv6 in your adapter settings.

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
