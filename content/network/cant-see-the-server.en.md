---
title: "I Can't See the Server"
date: 2026-02-27T10:00:00+01:00
description: "Cable check, portal check, and what to do when nothing loads."
draft: false
---

If you can't see a game server or the LAN portal, start here.

## 1. Physical check

- Is your network cable plugged in at both ends?
- Do you see a link light (green/amber LED) on your network port?
- Are you using the cable provided by us? (Do not use your own cable unless authorized).

## 2. Portal check

Open your browser and go to [spawn.ctrl-alt-gg.hu](https://spawn.ctrl-alt-gg.hu).

- **If it loads:** Your connection is fine. The issue is likely the specific game server or your firewall.
- **If it doesn't load:** You have a connection problem.

## 3. IP configuration

Make sure your network adapter is set to **Obtain an IP address automatically (DHCP)**.

- **Windows:** Settings > Network & Internet > Ethernet > IP assignment > Edit > Automatic (DHCP).
- **Static IPs are not allowed** and will not work.

## 4. Server status

Check [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu).

- If the server is red/down there, it's down for everyone.
- If it's green but you can't see it, check your firewall.

## 5. Firewall

Temporarily disable your Windows Firewall or third-party antivirus firewall to test.

- If the server appears, re-enable the firewall and add an exception for the game executable.
- Do not leave your firewall disabled for the entire event.

## Still nothing?

If you have a link light, DHCP is on, and you can't load the portal: **ask for help**.
