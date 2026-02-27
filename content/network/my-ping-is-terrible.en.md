---
title: "My Ping is Terrible"
date: 2026-02-27T10:00:00+01:00
description: "Lag spikes? High latency? Check your background apps first."
draft: false
---

High ping usually means something on your machine is eating bandwidth.

First, check **[Known Issues](/help/known-issues/)**.

## 1. Stop downloads

Check:
- Steam / Epic / Battle.net (auto-updates)
- Windows Update
- Browser tabs (YouTube, Twitch)
- File sharing clients (torrent, DC++)

Pause everything.

## 2. Wired vs Wireless

Are you on Wi-Fi?

- **Switch to cable.** Wi-Fi is for mobile devices and browsing, not competitive gaming.
- We provide a network cable for every seat. Use it.

## 3. Check local traffic

Open Task Manager (Ctrl+Shift+Esc) > Performance > Ethernet.

Or use Resource Monitor for more detail:
1. Press `Win + R`, type `resmon`, press Enter.
2. Go to the **Network** tab.
3. Look at "Network Activity" to see exactly which program is using bandwidth.

- If you see constant high throughput (Mbps) when you aren't doing anything, find the process responsible and kill it.

## 4. Network congestion

If your whole row is lagging:
- Ask your neighbors if they are running heavy downloads.
- If everyone is lagging and nobody is downloading, **tell staff**. We can check the switch uplink.

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
