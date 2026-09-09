---
title: "File Sharing on the LAN"
date: 2026-02-27T10:00:00+01:00
description: "Share game files, not viruses. The rules."
draft: false
---

Sharing large files over the LAN is fast and saves internet bandwidth.

## Ctrl-Alt-GG Filehost

The event's file-sharing service is available in a browser and over SMB at [filehost.ctrl-alt-gg.hu](https://filehost.ctrl-alt-gg.hu/).

**Login details:**

- **Username:** `lanshare`
- **Password:** `lanshare`

### In a browser

Open [filehost.ctrl-alt-gg.hu](https://filehost.ctrl-alt-gg.hu/) and sign in with the details above.

### Over SMB

In Windows, enter this in the File Explorer address bar:

```text
\\filehost.ctrl-alt-gg.hu
```

When prompted, enter the `lanshare` username and password. To use it as a mapped drive, choose **This PC > Map network drive** and enter the same SMB address.

Do not reuse these credentials for another service, and do not upload personal or confidential files to a shared location.

## Allowed Tools

- **DC++ (Direct Connect):** If we run a hub, use it.
- **Windows File Sharing (SMB):** Great for small groups.
- **USB Drives:** The classic "Sneakernet". Reliable.

## The Rules

1. **No Piracy:** Do not share cracked games, movies, or software.
2. **Scan for Viruses:** Don't be the person who infects the whole row.
3. **Respect Bandwidth:** Don't saturate the switch uplink with 10 simultaneous transfers.

## How to use Windows Sharing

1. Right-click folder > Properties > Sharing.
2. Click **Share...**
3. Select **Everyone** > Add > Read (or Read/Write).
4. Click **Share**.
5. Tell your friend your PC name or IP address (`\\YourPCName`).
