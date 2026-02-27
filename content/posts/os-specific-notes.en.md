---
title: "OS-Specific Notes"
date: 2026-02-27T10:00:00+01:00
categories: ["software"]
description: "Windows quirks, Linux tips, and making things work."
draft: false
---

Different operating systems, same network.

## Windows 10/11

- **Network Profile:** Set to **Private** to see other PCs and host LAN games.
- **Firewall:** When launching a game, check BOTH boxes (Private & Public) in the firewall prompt.
- **Updates:** Run Windows Update *before* the event. We cache updates, but a major feature update can still take time to install.

## Linux

- **Network Manager:** Make sure your wired connection is set to DHCP.
- **Samba:** If you want to share files with Windows users, install and configure Samba (`smb`).
- **Wine/Proton:** Test your games beforehand. Don't spend the first 4 hours configuring Lutris.

## macOS

- **Dongles:** Bring your USB-C to Ethernet adapter.
- **Games:** Check compatibility. Many LAN classics are Windows-only.
- **File Sharing:** Enable "File Sharing" in System Settings > General > Sharing to work with Windows SMB shares.
