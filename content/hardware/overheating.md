---
title: "Túlmelegedés: tünetek és gyors javítások"
date: 2026-02-27T10:00:00+01:00
description: "Itt meleg lesz. Tartsd hűvösen a gépedet."
draft: false
still_stuck: true
---


Egy teremben sok játékos PC sok hőt termel. Ha a géped furcsán viselkedik, nézd meg a hőmérsékleteket.

## Tünetek

{{< callout type="warning" >}}
**Magas hőmérséklet ezeket okozhatja:**

- Hirtelen FPS esés (throttling).
- Váratlan leállás vagy újraindulás.
- Ventilátorok állandó 100%-on pörögnek.
- Képhibák a kijelzőn (GPU túlmelegedés).
{{< /callout >}}

## Hőmérséklet ellenőrzés

| Komponens | Throttling kezdete | Veszélyzóna |
|-----------|-------------------|-------------|
| CPU (modern) | ~90 °C | 100 °C+ |
| GPU (legtöbb modell) | ~83 °C | 90 °C+ |

**Eszközök:**
- **Windows 11:** Feladatkezelő (Ctrl+Shift+Esc) > Teljesítmény > GPU mutatja a hőfokot.
- **Szoftver:** Töltsd le a **HWiNFO64** vagy **HWMonitor** programot a helyi fájlszerverről.
- **Linux:** Használd a `sensors` parancsot.

## Gyors javítások

{{< callout type="tip" >}}
**Próbáld ezeket először:**

1. **Légáramlás:** a ház ventijeit ne takarják táskák, fal vagy más gépek. Legyen helye lélegezni.
2. **Por:** ha a szűrők eldugultak, tisztítsd ki őket. Kérj sűrített levegőt a stafftól (ha van).
3. **Oldallap levétel:** nem szép, de szükségmegoldásként működik.
4. **Fan curve ellenőrzés:** MSI Afterburnerben vagy BIOS-ban állíts agresszívebb ventilátor görbét.
{{< /callout >}}
