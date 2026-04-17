---
title: "Network Troubleshooting (Start Here)"
date: 2026-02-27T10:00:00+01:00
description: "A quick checklist for getting online and reaching LAN services."
draft: false
still_stuck: true
---


Most issues are either **cable/port**, **DHCP**, or **something on your PC**. Work through the sections below in order.

First, check **[Known Issues](/help/known-issues/)**. If it's a global outage, you can't fix it locally.

## Basics

- Ethernet cable plugged in firmly (both ends), link light visible on your NIC
- VPNs and "network tools" disabled

{{< callout type="warning" >}}
**Please don't bring your own network hardware:**
- No personal switches, routers, or Wi-Fi access points
- No internet sharing from your device
- No DHCP servers or network scanners
{{< /callout >}}

## Diagnose connectivity

Open the LAN portal: [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu)

| Portal loads? | What it means | Next step |
|---|---|---|
| ✅ Yes | You have LAN access | Check [server status](https://servers.ctrl-alt-gg.hu) |
| ❌ No | IP / cable issue | Follow IP fix below |
| Server green, game broken | Firewall / port issue | See Firewall guide |
| Server red / down | Global outage | Tell staff |

If everything is broken for many people simultaneously, tell staff first — don't spend time fixing locally.

## Renew your IP address

If the portal doesn't load after replugging the cable:

**Windows:**
```cmd
ipconfig /release
ipconfig /renew
```

**Linux:**
```bash
sudo dhclient -r && sudo dhclient -v
```

Make sure your adapter is set to **Automatic IP (DHCP)** — static IPs will not work on our network.

If your port goes dead after working for a while, you may have connected too many devices. Ask staff to re-enable it.
