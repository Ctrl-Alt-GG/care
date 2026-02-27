---
title: "Network Troubleshooting (Start Here)"
date: 2026-02-27T10:00:00+01:00
description: "A quick checklist for getting online and reaching LAN services."
draft: false
---

Most issues are either **cable/port**, **DHCP**, or **something on your PC**. Do these in order.

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

- **If it loads:** you're online. Check server status: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu)
- **If it doesn't load:**
  - Unplug/replug the cable
  - Try a different port (or ask staff)
  - Try Wi‑Fi as a temporary fallback

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

## Step 5: When asking for help, say

- Wired or Wi‑Fi
- What works / what doesn't (portal, Discord/TeamSpeak, Steam, specific server)
- Your device + OS (PC/laptop/console, Windows/Linux/macOS)
- Where you are sitting

For the common culprits, see: [IP Setup Basics](/network/ip-setup-basics/), [Firewall and Antivirus Checks](/network/firewall-and-antivirus-checks/), and [Reporting Network Issues](/network/reporting-network-issues/).
