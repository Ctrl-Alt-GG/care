---
title: "IP Setup Basics"
date: 2026-02-27T10:00:00+01:00
description: "DHCP is mandatory. Static IPs will break your connection."
draft: false
---

Our network uses dynamic addressing.

## The Rule

**Set everything to Automatic (DHCP).**

- Do not set a static IP.
- Do not use your home DNS settings if they are local (like Pi-hole).
- Do not set a custom gateway.

## How to check (Windows)

1. Press `Win + R`, type `ncpa.cpl`, press Enter.
2. Right-click your Ethernet adapter > Properties.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** > Properties.
4. Make sure both are selected:
   - **Obtain an IP address automatically**
   - **Obtain DNS server address automatically**

## Troubleshooting

If you have "Unidentified Network" or "No Internet":
1. Open Command Prompt (`cmd`).
2. Type `ipconfig /release` and press Enter.
3. Type `ipconfig /renew` and press Enter.

If you get an error or it times out, check your cable or ask staff.
