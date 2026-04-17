---
title: "PC Won't Start"
date: 2026-02-27T10:00:00+01:00
description: "PSU LED check, reseat GPU/RAM, monitor 'no signal' fixes."
draft: false
still_stuck: true
---


Transport vibration often loosens components. Don't panic, it's probably just a loose cable.

First, check **[Known Issues](/help/known-issues/)**.

**What do you see?** Find your symptom and jump to the relevant section.

| Symptom | Most likely cause | Go to |
|---|---|---|
| Nothing at all — no lights, no fans | PSU off or unplugged | [PSU](#1-power-supply-psu) |
| Motherboard LED on, but no fans spin | Front-panel power button header | [PSU](#1-power-supply-psu) |
| Fans spin, screen black / no signal | Monitor plugged into motherboard instead of GPU | [Monitor](#2-monitor-no-signal) |
| Fans spin briefly, then stop (loop) | RAM not seated | [Reseating](#3-reseating-components) |
| Beeps on startup | RAM (continuous) or GPU (1 long + 2 short) | [Reseating](#3-reseating-components) |
| BIOS loads, Windows won't boot | Boot order or loose drive cable | [Power Supply](#1-power-supply-psu) section 3 |

## 1. Power Supply (PSU)

- **Switch:** Check the switch on the back of your PSU. Is it set to "I"?
- **Cable:** Push it in firmly. Try a different outlet (or ask your neighbor to test theirs).
- **LED:** If the motherboard LED is on, it has power. If not, check the PSU or the cable.

## 2. Monitor "No Signal"

Fans are spinning, but the screen is black?

1. **Input:** Press the "Source" or "Input" button on your monitor. It might be waiting for HDMI while you are using DisplayPort.
2. **Cable:** Unplug and replug both ends.
3. **GPU:** Did you plug the monitor into the graphics card, or the motherboard? (Classic mistake.)

## 3. Reseating Components

If the PC beeps or loops on startup:

1. **Power off.** Unplug the power cable.
2. **RAM:** Remove the memory sticks and snap them back in firmly. You must hear the click.
3. **GPU:** Remove the graphics card and put it back. Check the PCIe power cables too.

## 4. If nothing works

Ask a neighbor to test with their power cable or monitor. If it still fails, find an organizer. We have some spare parts for testing, but we can't promise miracles.
