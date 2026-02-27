---
title: "Game Launcher Fixes"
date: 2026-02-27T10:00:00+01:00
description: "Steam/EGS/GOG: clear cache, verify files, offline install."
draft: false
---

Steam won't start? Battle.net stuck? Try these.

## Steam

**Clear Download Cache:**
1. Steam > Settings > Downloads.
2. Click **Clear Download Cache**.
3. Steam will restart, and you will need to log in again.

**Verify Integrity:**
1. Right-click the game in your Library > Properties.
2. Installed Files tab.
3. Click **Verify integrity of game files**.

**Repair Library:**
1. Steam > Settings > Storage.
2. Select the drive, click the three dots (...) > Repair Library.

## Epic Games Store

**Verify Files:**
1. Library.
2. Click the three dots under the game.
3. Manage > **Verify**.

**Clear Cache:**
1. Close the Epic Games Launcher (check the system tray!).
2. Press `Win + R`, type: `%localappdata%`.
3. Open `EpicGamesLauncher` > `Saved`.
4. Delete the `webcache` folder.

## Battle.net

**Scan and Repair:**
1. Select the game.
2. Click the gear icon (Options) next to the Play button.
3. Select **Scan and Repair**.

**Clear Launcher Cache:**
1. Close Battle.net and Agent.exe in Task Manager.
2. `Win + R`, type: `%programdata%`.
3. Delete the `Battle.net` and `Blizzard Entertainment` folders. (This does not delete your games, only launcher settings.)

## GOG Galaxy

**Verify / Repair:**
1. Right-click the game > Manage installation > **Verify / Repair**.

## If this didn't work

1. Check **[Known Issues](/help/known-issues/)** - it might be a global problem.
2. Post in `#support` on Discord using the **[ticket template](/help/how-to-get-help/)**.
3. Include: error message, screenshot, what you already tried.
