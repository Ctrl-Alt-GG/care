---
title: "My Ping is Terrible"
date: 2026-02-27T10:00:00+01:00
description: "Lag spikes? High latency? Check your background apps first."
draft: false
still_stuck: true
---


High ping usually means something on your machine is eating bandwidth.

First, check **[Known Issues](/help/known-issues/)**.

{{< callout type="tip" >}}
**Quick checklist — do these first:**

1. **On Wi-Fi?** Switch to the Ethernet cable at your seat.
2. **Pause all downloads:** Steam / Epic / Battle.net, Windows Update, browser tabs (YouTube, Twitch), torrent clients.
3. **Open Resource Monitor** (`Win+R` → `resmon` → Network tab) and kill any process with unexpectedly high throughput.
4. **Whole row lagging?** Tell staff — we'll check the switch uplink.
{{< /callout >}}

## 1. Stop downloads

Check for active downloads and pause everything:
- Steam / Epic / Battle.net (auto-updates)
- Windows Update
- Browser tabs (YouTube, Twitch)
- File sharing clients (torrent, DC++)

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
