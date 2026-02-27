---
title: "Where Downloads are Hosted"
date: 2026-02-27T10:00:00+01:00
description: "Get game updates and installers locally at 1Gbps."
draft: false
---

Why download from the internet at 50Mbps when you can pull from our local cache at 1000Mbps?

## The Cache

We run a local caching server for:
- Steam
- Battle.net
- Epic Games
- Origin / EA App
- Windows Updates

## How to use it

**You don't have to do anything.**

- Just start the download in your launcher.
- Our DNS redirects the request to the local cache automatically.
- If the file is cached, it flies. If not, it downloads from the internet (and caches it for the next person).

## Troubleshooting

- **Download stuck at 0%?** Restart the launcher.
- **Slow speeds?** The file might not be cached yet. Be the hero who caches it.
- **DNS errors?** Make sure your DNS is set to Automatic (DHCP). Do not use 8.8.8.8 or 1.1.1.1, or you will bypass the cache.

## Local Mirror

For some open-source games (e.g., Minetest, Xonotic, OpenArena), we host full installers on the local file server: [files.ctrl-alt-gg.hu](https://files.ctrl-alt-gg.hu).

**Checksum Verification:**
If you download a large installer, check if it's corrupted.

Windows PowerShell:
```powershell
Get-FileHash -Algorithm SHA256 game_installer.zip
```
Compare the output with the code on the website. If they don't match, download it again.
