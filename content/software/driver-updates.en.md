---
title: "Driver Updates Before You Arrive"
date: 2026-02-27T10:00:00+01:00
description: "Update your GPU, audio, and network drivers before the event to avoid headaches."
draft: false
---

Outdated drivers are a silent killer at LAN parties. Update them at home where you have time, not on-site where you don't.

## GPU Drivers

Outdated GPU drivers cause crashes, missing features, and black screens in games.

### Nvidia
1. Download **GeForce Experience** or the standalone driver from [nvidia.com/drivers](https://www.nvidia.com/drivers/).
2. Select your GPU model and OS.
3. Download and install **Game Ready Driver**.
4. Reboot.

### AMD
1. Open **AMD Software: Adrenalin Edition** (if installed), or download from [amd.com/support](https://www.amd.com/support/).
2. Check for updates in the software, or download the latest **Radeon Software** installer.
3. Install and reboot.

### Intel Arc
1. Download **Intel Arc & Iris Xe Graphics** drivers from [intel.com/content/www/us/en/download-center/home.html](https://www.intel.com/content/www/us/en/download-center/home.html).
2. Install and reboot.

## Audio Drivers

Missing or incorrect audio drivers lead to "no sound" or headset-not-detected problems.

- **Realtek (most motherboards):** Download the latest Realtek HD Audio driver from your motherboard manufacturer's support page.
- **USB DAC / External sound card:** Install the driver from the manufacturer's website or from Windows Update.
- **Headset with its own software (SteelSeries, HyperX, Corsair, Razer):** Install the companion app before the event so all profiles and EQ settings are ready.

## Network Adapter Drivers

A corrupt or outdated network driver causes link drops, DHCP failures, and random disconnects.

1. Press `Win + X` > Device Manager.
2. Expand **Network Adapters**.
3. Right-click your Ethernet adapter > **Update driver** > Search automatically.
4. Alternatively, download the driver from your motherboard or laptop manufacturer's website (more reliable than Windows Update).

## After Installing Drivers

- **Always reboot** after installing a GPU driver. A reboot is the most common fix for a driver that doesn't seem to work.
- **DDU (Display Driver Uninstaller):** If you are switching GPU vendors (e.g., Nvidia → AMD) or troubleshooting a stubborn crash, use DDU in Safe Mode to wipe the old driver before installing the new one.

## Quick check on-site

If you suspect a driver issue after arriving:

1. Press `Win + X` > Device Manager.
2. Look for any yellow warning icons (!) — these indicate a problem.
3. Right-click the device > Update driver or Properties > Driver tab > check the version date.

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
