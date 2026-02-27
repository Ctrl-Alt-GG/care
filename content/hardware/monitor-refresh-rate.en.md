---
title: "Monitor Refresh Rate Checks"
date: 2026-02-27T10:00:00+01:00
description: "You paid for 144Hz. Make sure you're using it."
draft: false
---

It happens every LAN. Someone plays all weekend on 60Hz without realizing it.

## Check your settings

1. Right-click Desktop > **Display settings**.
2. Scroll down to **Advanced display settings**.
3. Check the **Refresh rate** dropdown.
4. Set it to the highest available number (144Hz, 240Hz, etc.).

## Monitor goes black when game starts?

If the game launches but the screen says "Out of Range" or goes black:
1. **Unsupported Resolution:** The game is trying to run at a resolution or refresh rate your monitor can't handle.
2. **Fix:** Press `Alt + Enter` to force windowed mode.
3. **Launch Options:** Add `-windowed -w 1920 -h 1080` to the game's launch options.
4. **Stuck?** Press `Ctrl + Alt + Del`, open Task Manager, and kill the game process.

## Troubleshooting

- **Option missing?** Check your cable. HDMI often limits refresh rates. Use DisplayPort if possible.
- **Game feels slow?** Check in-game video settings. V-Sync or frame caps might be locking you to 60fps.
- **Nvidia/AMD Panel:** Sometimes you need to set the resolution to "PC" instead of "TV/Ultra HD" to unlock higher refresh rates.
