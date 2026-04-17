---
title: "PC Won't Start"
date: 2026-02-27T10:00:00+01:00
description: "PSU LED check, reseat GPU/RAM, monitor 'no signal' fixes."
draft: false
still_stuck: true
---


Transport vibration often loosens components. Don't panic, it's probably just a loose cable.

First, check **[Known Issues](/help/known-issues/)**.

{{< mermaid >}}
flowchart TD
    A([PC won't start]) --> B{What do you see?}
    B -->|Nothing at all| C[Check PSU switch: I = On\nTry different cable and outlet]
    B -->|Motherboard LED on, no fans| D[Check front panel header\nShort power pins with a screwdriver]
    B -->|Fans spin, no display| E[Cable in the GPU, not motherboard?\nTry different video output\nReseat GPU]
    B -->|Boot loop or beeps| F[Reseat RAM\nTry one stick at a time]
    B -->|BIOS loads, no OS| G[Check Boot Priority in BIOS\nCheck boot drive cable]
    C & D & E & F & G --> H{Fixed?}
    H -->|Yes| I([Done!])
    H -->|No| J([Find an organizer])
{{< /mermaid >}}

- **No lights, no fans, nothing:** PSU switch, PSU cable, or dead PSU. Check the switch on the back (I = on). Try a different power cable. Try a different outlet.
- **Motherboard LED on, but no fans spin:** Check the front panel power button connector. Try shorting the power pins with a screwdriver (staff can help).
- **Fans spin, but no display:** GPU cable (make sure it's in the GPU, not motherboard). Try a different video output. Reseat the GPU.
- **Fans spin briefly then stop (boot loop):** RAM not seated. Remove and reseat all sticks. Try one stick at a time.
- **Beeps on startup:** 1 long + 2 short = GPU. Continuous = RAM. Refer to your motherboard manual for other codes.
- **Gets to BIOS but won't boot OS:** Boot drive cable loose, or boot order changed. Check BIOS > Boot Priority.

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
