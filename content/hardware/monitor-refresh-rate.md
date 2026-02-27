---
title: "Monitor frissítési frekvencia ellenőrzés"
date: 2026-02-27T10:00:00+01:00
description: "Fizettél 144Hz-ért, használd is ki."
draft: false
---

Minden LAN-on előfordul: valaki végig 60Hz-en játszik és észre sem veszi.

## Így állítsd be

1. Jobb klikk az asztalon > **Display settings**.
2. Görgess le az **Advanced display settings** részhez.
3. Nézd meg a **Refresh rate** listát.
4. Állítsd a lehető legmagasabb értékre (144Hz, 240Hz stb.).

## Fekete képernyő játék indításakor?

Ha a játék elindul, de a monitor "Out of Range" hibát ír vagy elsötétül:
1. **Rossz felbontás:** A játék olyan felbontást vagy frissítést erőltet, amit a monitorod nem bír.
2. **Javítás:** Nyomj `Alt + Enter`-t az ablakos mód kényszerítéséhez.
3. **Indítási opciók:** Adj hozzá `-windowed -w 1920 -h 1080` kapcsolót.
4. **Beragadt?** Nyomj `Ctrl + Alt + Del`-t, nyisd meg a Feladatkezelőt, és lődd ki a játékot.

## Hibakeresés

- **Nincs opció?** Nézd meg a kábelt. A HDMI gyakran korlátoz. Ha lehet, használj DisplayPortot.
- **Lassúnak érződik a játék?** Nézd meg a játékon belüli videó beállításokat. A V-Sync vagy FPS limit 60fps-re zárhat.
- **Nvidia/AMD panel:** Néha a "PC" felbontást kell választani "TV/Ultra HD" helyett, hogy feloldja a magasabb frissítést.
