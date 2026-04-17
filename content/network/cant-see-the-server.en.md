---
title: "I Can't See the Server"
date: 2026-02-27T10:00:00+01:00
description: "Cable check, portal check, and what to do when nothing loads."
draft: false
still_stuck: true
---


If you can't see a game server or the LAN portal, start here.

First, check **[Known Issues](/help/known-issues/)**.

## 1. Check network first

Run through [Network Troubleshooting](/network/network-troubleshooting/) if you haven't already (cable, link light, portal).

## 2. IP configuration

Make sure your network adapter is set to **Obtain an IP address automatically (DHCP)**.

1. Press `Win + R`, type `ncpa.cpl`, press Enter.
2. Right-click Ethernet > Properties.
3. Select **Internet Protocol Version 4 (TCP/IPv4)** > Properties.
4. Select **Obtain an IP address automatically**.

**Static IPs are not allowed** and will not work.

## 3. Server status

Check [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu).

- If the server is red/down there, it's down for everyone.
- If it's green but you can't see it, check your firewall.

## 4. Firewall

Temporarily disable your Windows Firewall or third-party antivirus firewall to test.

- If the server appears, re-enable the firewall and add an exception for the game executable.
- Do not leave your firewall disabled for the entire event.
