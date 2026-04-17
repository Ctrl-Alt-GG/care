---
title: "Portok és játék kapcsolatok"
date: 2026-02-27T10:00:00+01:00
description: "Melyik portot ellenőrizd, NAT alapok, és miért nem csatlakozik a játék."
draft: false
still_stuck: true
---


Ha a játék nem csatlakozik, vagy "Strict NAT" hibát dob, itt a megoldás.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

## Mi az a NAT?

A NAT (Network Address Translation) fordítja le a belső IP-címedet a külvilág felé. Néhány játék (főleg régebbi P2P alapúak) nagyon érzékeny a NAT típusra.

| NAT típus | Csatlakozhatsz máshoz | Mások csatlakozhatnak hozzád | Megjegyzés |
|-----------|:--------------------:|:----------------------------:|------------|
| **Open** | ✅ | ✅ | Legjobb |
| **Moderate** | ✅ | ⚠️ Hostolás megakadhat | Általános |
| **Strict** | ⚠️ Csak Open NAT-hoz | ❌ | Szinte mindig tűzfal hiba |

A rendezvény hálózata vállalati szintű NAT-ot használ. **A hálózati NAT-ot te nem változtathatod meg.** Ha Strict NAT-ot látsz, az szinte mindig a saját géped **tűzfala** miatt van.

## Melyik portokat ellenőrizd?

Ha egy játék nem látja a szervert, ellenőrizd, hogy a tűzfal engedi-e a forgalmat ezeken a portokon.

| Szolgáltatás / Játék | Port(ok) | Protokoll |
|---|---|---|
| Web / HTTP | 80, 443 | TCP |
| DNS | 53 | UDP |
| Steam | 27015–27030 | UDP + TCP |
| Counter-Strike 2 | 27015 | UDP + TCP |
| Call of Duty | 3074 | UDP + TCP |
| Minecraft (Java) | 25565 | TCP |

## Hogyan javítsd a kapcsolatot?

1. **Tűzfal ellenőrzés:**
   Kapcsold ki a Windows tűzfalat egy percre. Ha a játék megjavul, akkor a tűzfal volt a gond. Kapcsold vissza, és add hozzá a játékot a kivételekhez (Private és Public is!).

2. **UPnP:**
   A hálózatunkon az UPnP le van tiltva biztonsági okokból. Ne próbáld bekapcsolni a gépeden, nem fog segíteni.

3. **VPN:**
   Kapcsold ki a VPN-t. A VPN bezavar a helyi hálózati felderítésbe (LAN discovery), így nem fogod látni a helyi szervereket.

4. **IPv6:**
   Néhány játék (pl. régebbi címek) megzavarodhat, ha az IPv6 be van kapcsolva, de nincs IPv6 internet. Próbáld meg kikapcsolni az adapter beállításaiban.
