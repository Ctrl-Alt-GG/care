---
title: "My Ping is Terrible"
date: 2026-02-27T10:00:00+01:00
description: "Lag spikes? High latency? Check your background apps first."
draft: false
still_stuck: true
---


High ping usually means something on your machine is eating bandwidth.

First, check **[Known Issues](/help/known-issues/)**.

{{< mermaid >}}
flowchart LR
    A([High ping / lag]) --> B[Pause all downloads\nSteam, Windows Update, browser, torrents]
    B --> C{On Wi-Fi?}
    C -->|Yes| D[Switch to Ethernet cable]
    C -->|No| E[Open Resource Monitor\nWin+R > resmon > Network tab]
    D --> E
    E --> F{High background\nnetwork usage?}
    F -->|Yes| G[Kill the process causing it]
    F -->|No| H{Whole row lagging?}
    H -->|Yes| I([Tell staff - switch uplink issue])
    H -->|No| J[Reboot your\nnetwork adapter]
    G --> K{Fixed?}
    J --> K
    K -->|Yes| L([Done!])
    K -->|No| M([Post in #support on Discord])
{{< /mermaid >}}

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
