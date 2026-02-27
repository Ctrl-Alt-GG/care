---
title: "Portok és játék kapcsolatok"
date: 2026-02-27T10:00:00+01:00
description: "Melyik portot ellenőrizd, NAT alapok, és miért nem csatlakozik a játék."
draft: false
---

Ha a játék nem csatlakozik, vagy "Strict NAT" hibát dob, itt a megoldás.

## Mi az a NAT?

A NAT (Network Address Translation) fordítja le a belső IP-címedet a külvilág felé. LAN-on ez általában nem gond, de egyes játékok (főleg a régebbi P2P alapúak) érzékenyek rá.

- **Open NAT:** Minden működik, bárki csatlakozhat hozzád.
- **Moderate NAT:** Csatlakozhatsz másokhoz, de hozzád nem biztos.
- **Strict NAT:** Csak Open NAT-os játékosokhoz tudsz csatlakozni.

A rendezvényen a hálózatunk vállalati szintű NAT-ot használ. Ezt te nem tudod megváltoztatni. Ha Strict NAT-ot látsz, az általában a te gépeden lévő tűzfal miatt van.

## Melyik portokat ellenőrizd?

Ha egy játék nem látja a szervert, ellenőrizd, hogy a tűzfalad engedi-e a kommunikációt ezeken a portokon.

**Általános:**
- **Web / HTTP:** 80, 443 (TCP)
- **DNS:** 53 (UDP)
- **Steam:** 27015-27030 (UDP/TCP)

**Játék specifikus példák:**
- **Minecraft:** 25565 (TCP)
- **Call of Duty:** 3074 (UDP/TCP)
- **Counter-Strike 2:** 27015 (UDP/TCP)

## Hogyan javítsd a kapcsolatot?

1. **Tűzfal ellenőrzés:**
   Kapcsold ki a Windows tűzfalat egy percre. Ha a játék megjavul, akkor a tűzfal volt a gond. Kapcsold vissza, és add hozzá a játékot a kivételekhez (Private és Public is!).

2. **UPnP:**
   A hálózatunkon az UPnP le van tiltva biztonsági okokból. Ne próbáld bekapcsolni a gépeden, nem fog segíteni.

3. **VPN:**
   Kapcsold ki a VPN-t. A VPN bezavar a helyi hálózati felderítésbe (LAN discovery), így nem fogod látni a helyi szervereket.

4. **IPv6:**
   Néhány játék (pl. régebbi címek) megzavarodhat, ha az IPv6 be van kapcsolva, de nincs IPv6 internet. Próbáld meg kikapcsolni az adapter beállításaiban.

## Ha semmi sem segít

Írd be a parancssorba: `netstat -an | findstr "ESTABLISHED"`.
Ha látsz kapcsolatokat a játék szerverének IP-címével, de a játék mégis hibát dob, akkor a probléma valószínűleg a játékszerver oldalon van. Szólj a staffnak.

## Gyors ellenőrzőlista segítségkérés előtt
- Verzió egyezés: nézd meg a játék verzióját vs a szerverét (főmenü sarka)
- Szerver állapot: [servers.ctrl-alt-gg.hu](https://servers.ctrl-alt-gg.hu)
- Indítsd újra a játékot, miután csatlakoztál a LAN-hoz
- Csatold a hibaüzenetet és egy képernyőképet a jelentéshez
