---
title: "Audio Setup & No Sound Fixes"
date: 2026-02-27T10:00:00+01:00
description: "Headset connection types, no-sound troubleshooting, and audio hardware tips."
draft: false
---

No sound? Wrong output? This guide covers the hardware side.
For voice chat software setup, see [Voice Chat Setup](/software/voice-chat-setup/).

## Headset Connection Types

### 3.5mm Analog (Single Jack)
A combined headset/mic jack. Common on laptops.
- Plug into the headset combo jack (usually labeled with a headset icon or colored green+pink).
- If your headset has two separate plugs (headphones + mic), you need a **Y-splitter** (TRRS to dual TRS) to use both on a single combo jack.

### 3.5mm Analog (Dual Jack)
Two separate plugs — green for headphones, pink for microphone.
- Green plug → green/headphone output port.
- Pink plug → pink/microphone input port.
- These are usually on the **rear panel** of a desktop PC for best signal quality.
- The front panel connectors work too, but may have more interference.

### USB
Plug into any USB port. The headset registers as its own audio device.
- After plugging in, Windows may not switch automatically. Set it as default: right-click the speaker icon > Sound settings > choose your headset.
- Some USB headsets need their own driver or software app.

### Wireless (USB Dongle)
- Plug the dongle into a USB port.
- Power on the headset.
- Pair if needed (follow headset instructions).
- Same as USB: set as default output in Sound settings.

## No Sound After Plugging In

1. **Check the physical connection.** Unplug and replug firmly.
2. **Check the volume:** Headset volume wheel (if it has one), Windows volume mixer.
3. **Set as default device:**
   - Right-click the speaker icon in the system tray > Sound settings.
   - Under **Output**, select your headset.
   - Under **Input**, select your headset microphone.
4. **Advanced:** Press `Win + R`, type `mmsys.cpl`. In the **Playback** tab, find your headset, right-click > **Set as Default Device**.

## Mic Not Working

1. **Check Input device:** Sound settings > Input > select your headset mic.
2. **Microphone permissions:** Settings > Privacy & Security > Microphone > allow apps to access microphone.
3. **Test it:** In Sound settings > Input, speak and check the input level meter moves.
4. **Mute switch:** Check your headset's physical mute button or inline mute on the cable.

## Front vs Rear Panel

- **Rear panel (back of PC):** Directly connected to the audio chip. Best quality, least interference.
- **Front panel:** Routed through the case header. Convenient but sometimes has static or lower volume.
- If you hear noise or buzzing on the front panel, try the rear.

## Common Issues

| Problem | Likely Cause | Fix |
|---|---|---|
| Sound from speakers, not headset | Wrong default device | Set headset as default in Sound settings |
| Mic not picked up in game | In-game audio settings | Check the input device in the game's audio options |
| Buzzing / static | Ground loop or interference | Try rear panel; try a different USB port |
| Low volume even at 100% | Headset volume wheel | Turn up the wheel; some headsets need a boost in Equalizer APO |
| No sound after sleep | USB suspend | Unplug and replug the headset |

## Still stuck?

1. Check [Known Issues](/help/known-issues/) first -- if it's listed, we already know.
2. Post in `#support` on Discord with this info:
   - Seat number (e.g. Row 4, Seat 12)
   - What's broken, one sentence
   - What you already tried
   - Screenshot or error message
3. If no reply in 15 minutes, come to the organizer desk.
