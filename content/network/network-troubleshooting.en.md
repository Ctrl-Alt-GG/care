---
title: "Network Troubleshooting (Start Here)"
date: 2026-02-27T10:00:00+01:00
description: "A quick checklist for getting online and reaching LAN services."
draft: false
---

Most issues are either **cable/port**, **DHCP**, or **something on your PC**. Do these in order.

First, check **[Known Issues](/help/known-issues/)**. If it's a global outage, you can't fix it locally.

## Step 1: Check the basics

- Ethernet cable plugged in firmly (both ends)
- Link light on your PC/laptop
- Disable VPNs and "network tools"

Please don't:
- Plug in your own switches/routers/access points
- Share internet from your device
- Run DHCP servers or network "scanners" that spam the LAN

## Step 2: Check if you're online

Open the LAN portal: [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu)

- **It loads:** You are online. Check server status: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu). Go to Step 3.
- **It doesn't load:**
  - Unplug/replug the cable.
  - Try a different port (or ask staff).
  - Try Wi‑Fi as a temporary fallback.
  - Go to Step 4.

Advanced users: if you know how, ping your gateway. If that works, your local link is fine.

## Step 3: Can you reach LAN services?

- One game server unreachable? It may be restarting or full.
- Everything broken for you but not for others? It's likely local (PC/firewall/DNS).
- Everything broken for many people? Tell staff.

## Step 4: Quick local fixes

- Restart your network adapter (or reboot)
- Renew your IP address:

**Windows:**
```cmd
ipconfig /release
ipconfig /renew
```

**Linux:**
```bash
sudo dhclient -r && sudo dhclient -v
```

- Make sure your device is set to **Automatic IP (DHCP)**
- If your port goes dead after working, you may have connected too many devices - ask staff to re-enable it

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
