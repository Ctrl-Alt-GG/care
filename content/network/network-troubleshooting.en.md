---
title: "Network Troubleshooting (Start Here)"
date: 2026-02-27T10:00:00+01:00
description: "A quick checklist for getting online and reaching LAN services."
draft: false
still_stuck: true
---


Most issues are either **cable/port**, **DHCP**, or **something on your PC**. Do these in order.

First, check **[Known Issues](/help/known-issues/)**. If it's a global outage, you can't fix it locally.

{{< mermaid >}}
flowchart TD
    A([No internet]) --> B[Check Known Issues page]
    B --> C{Global outage listed?}
    C -->|Yes| D([Wait for staff fix])
    C -->|No| E[Cable plugged in + link light on?]
    E -->|No| F[Plug cable in firmly, try a different port]
    E -->|Yes| G[Does LAN portal load?\nspawn.ctrl-alt-gg.hu]
    G -->|Yes| H[Check server status page]
    H --> I{Server down for everyone?}
    I -->|Yes| J([Tell staff])
    I -->|No| K([Check firewall / game settings])
    G -->|No| L[Renew IP\nipconfig /release + /renew\nSet to DHCP]
    L --> M{Fixed?}
    F --> M
    M -->|Yes| N([You are online!])
    M -->|No| O([Post in #support on Discord])
{{< /mermaid >}}

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
