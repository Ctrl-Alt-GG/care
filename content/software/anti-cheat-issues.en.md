---
title: "Anti-Cheat Issues"
date: 2026-02-27T10:00:00+01:00
description: "Easy Anti-Cheat, BattlEye, and Vanguard problems at a LAN."
draft: false
---

Anti-cheat software often causes trouble at LAN events. Here is how to fix the most common problems.

First, check **[Known Issues](/help/known-issues/)**.

## Why anti-cheat fails at a LAN

- Kernel-level anti-cheat (Vanguard, EAC) requires a full reboot after install or update.
- Some anti-cheat services are disabled if you are in Safe Mode, or if a "game optimizer" killed the service.
- Shared network environments (NAT, VLANs) can cause false positives or connectivity errors.

## Easy Anti-Cheat (EAC)

Games: Fortnite, Rust, Dead by Daylight, Hunt: Showdown, and many others.

### "EasyAntiCheat not found" or game won't launch
1. Navigate to the game folder (right-click in Steam > Browse local files).
2. Open the `EasyAntiCheat` subfolder.
3. Run `EasyAntiCheat_Setup.exe` and click **Install**.
4. Restart the game.

### "EasyAntiCheat failed to initialize"
1. Run the game **as Administrator** (right-click the launcher > Run as administrator).
2. Make sure the EAC service is running:
   - Press `Win + R`, type `services.msc`, press Enter.
   - Find **EasyAntiCheat** in the list.
   - Right-click > Start.
3. Verify game files (Steam: right-click game > Properties > Installed Files > Verify).

## BattlEye

Games: PUBG, DayZ, Arma 3, Rainbow Six Siege, and others.

### "BattlEye initialization failed"
1. Navigate to the game folder.
2. Open the `BattlEye` subfolder.
3. Run `Install_BattlEye.bat`.
4. Relaunch the game.

### Service not running
1. Press `Win + R`, type `services.msc`, press Enter.
2. Find **BattlEye Service** in the list.
3. Right-click > Start.
4. Set Startup Type to **Automatic** if it is Manual.

## Riot Vanguard (Valorant, League of Legends 2FA)

Vanguard is a kernel-level anti-cheat that runs on boot.

### "Vanguard not initialized" or Valorant won't launch
1. Restart your PC. Vanguard requires a full reboot if it was just installed or updated.
2. Check that Vanguard is running:
   - Right-click the taskbar > Task Manager > Services tab.
   - Find **vgc** (Vanguard).
   - If it says Stopped, right-click > Start.
3. If it still fails, reinstall Vanguard:
   - Uninstall **Riot Vanguard** from Apps & Features.
   - Relaunch Valorant or the Riot client.
   - Vanguard will reinstall automatically.

### "Your PC does not meet the requirements" (TPM / Secure Boot)
Vanguard requires TPM 2.0 and Secure Boot. These should already be enabled on most modern PCs.
- Check BIOS > Security > TPM and Secure Boot.
- If you disabled these settings for any reason, re-enable them and reboot.

## General Tips

- **Disable third-party tools:** Memory cleaners, FPS boosters, and OC utilities can trigger anti-cheat false positives. Close them before launching the game.
- **Disable overlays:** Conflicting overlays (MSI Afterburner + RivaTuner, Discord, GeForce Experience) sometimes trigger anti-cheat kicks. Disable one at a time to find the culprit.
- **Kernel anti-cheat and dual boot:** If you dual-boot Windows and Linux, kernel anti-cheat may fail after booting Linux first. A clean Windows reboot fixes this.

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
