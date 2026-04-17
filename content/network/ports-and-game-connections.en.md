---
title: "Ports & Game Connections"
date: 2026-02-27T10:00:00+01:00
description: "Which ports to check, NAT basics, why a game won't connect."
draft: false
still_stuck: true
---


If your game won't connect or screams "Strict NAT", read this.

First, check **[Known Issues](/help/known-issues/)**.

## What is NAT?

NAT (Network Address Translation) maps your internal IP to the outside world. Some games (especially older P2P titles) care a lot about your NAT type.

| NAT Type | Can join others | Others can join you | Notes |
|----------|:--------------:|:-------------------:|-------|
| **Open** | ✅ | ✅ | Best |
| **Moderate** | ✅ | ⚠️ Hosting may fail | Common |
| **Strict** | ⚠️ Open NAT only | ❌ | Almost always your firewall |

Our event network uses enterprise-grade NAT. **You cannot change the network NAT.** If you see Strict NAT, it is almost always your **local firewall** blocking traffic.

## Which ports to check?

If a game can't find the server, make sure your firewall allows traffic on these ports.

| Service / Game | Port(s) | Protocol |
|---|---|---|
| Web / HTTP | 80, 443 | TCP |
| DNS | 53 | UDP |
| Steam | 27015–27030 | UDP + TCP |
| Counter-Strike 2 | 27015 | UDP + TCP |
| Call of Duty | 3074 | UDP + TCP |
| Minecraft (Java) | 25565 | TCP |

## How to fix connection issues?

1. **Check your Firewall:**
   Disable Windows Firewall for one minute. If the game works, the firewall was the culprit. Turn it back on and add the game executable to the exceptions list (check both Private and Public!).

2. **UPnP:**
   UPnP is disabled on our network for security reasons. Enabling it on your PC won't do anything.

3. **VPN:**
   Turn off your VPN. VPNs break local LAN discovery, so you won't see local servers.

4. **IPv6:**
   Some older games get confused if IPv6 is enabled but there is no IPv6 internet connectivity. Try disabling IPv6 in your adapter settings.
