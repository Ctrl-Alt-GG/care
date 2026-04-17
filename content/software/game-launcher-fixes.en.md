---
title: "Game Launcher Fixes"
date: 2026-02-27T10:00:00+01:00
description: "Steam/EGS/GOG: clear cache, verify files, offline install."
draft: false
still_stuck: true
---


Steam won't start? Battle.net stuck? Try these.

First, check **[Known Issues](/help/known-issues/)**.

| Launcher | Problem | Jump to |
|----------|---------|---------|
| Steam | Won't start | [Steam — Won't start](#steam) |
| Steam | Game won't update/verify | [Steam — Update/verify](#steam) |
| Epic Games Store | Won't start | [Epic — Won't start](#epic-games-store) |
| Epic Games Store | Game won't verify | [Epic — Verify](#epic-games-store) |
| Battle.net | Won't start | [Battle.net — Won't start](#battlenet) |
| Battle.net | Game won't scan/repair | [Battle.net — Scan and repair](#battlenet) |
| GOG Galaxy | Verify/repair | [GOG Galaxy](#gog-galaxy) |
| Any launcher | Game crashes on launch | [Game crashes on launch](#game-crashes-on-launch) |

## Steam

### Won't start
1. Kill all `steam.exe` processes in Task Manager.
2. Relaunch.
3. If still broken: delete `%localappdata%\Steam\htmlcache` and `%localappdata%\Steam\browser` folders.

### Game won't update/verify
**Clear Download Cache:**
1. Steam > Settings > Downloads.
2. Click **Clear Download Cache**.
3. Steam will restart, and you will need to log in again.

### Clear cache/repair
**Verify Integrity:**
1. Right-click the game in your Library > Properties.
2. Installed Files tab.
3. Click **Verify integrity of game files**.

**Repair Library:**
1. Steam > Settings > Storage.
2. Select the drive, click the three dots (...) > Repair Library.

## Epic Games Store

### Won't start
1. Kill `EpicGamesLauncher.exe` and `EpicWebHelper.exe` in Task Manager.
2. Press `Win + R`, type: `%localappdata%`.
3. Delete the `EpicGamesLauncher\Saved\webcache` folder.
4. Relaunch.

### Game won't update/verify
**Verify Files:**
1. Library.
2. Click the three dots under the game.
3. Manage > **Verify**.

## Battle.net

### Won't start
1. Kill `Agent.exe` and `Battle.net.exe` in Task Manager.
2. Press `Win + R`, type: `%programdata%`.
3. Delete the `Battle.net` and `Blizzard Entertainment` folders.
4. Relaunch.

### Game won't update/verify
**Scan and Repair:**
1. Select the game.
2. Click the gear icon (Options) next to the Play button.
3. Select **Scan and Repair**.

## GOG Galaxy

**Verify / Repair:**
1. Right-click the game > Manage installation > **Verify / Repair**.

## Game crashes on launch

If the game closes immediately:
1. **Verify game files** (see above).
2. **Antivirus:** Check if it quarantined the .exe.
3. **Run as Administrator:** Right-click the .exe > Run as administrator.
4. **Visual C++:** Install the Redistributables (usually in the game folder `_CommonRedist` or download from file server).
5. **Windowed mode:** Add `-windowed` to launch options.
