---
title: "Anti-Cheat problémák"
date: 2026-02-27T10:00:00+01:00
description: "Easy Anti-Cheat, BattlEye és Vanguard gondok LAN partyn."
draft: false
---

Az anti-cheat szoftverek LAN eseményeken sokszor okoznak gondot. Így javíthatod a leggyakoribb problémákat.

Először nézd meg az **[Ismert hibák](/help/known-issues/)** listát.

## Miért hibázik az anti-cheat LAN-on?

- A kernel szintű anti-cheat (Vanguard, EAC) telepítés vagy frissítés után teljes újraindítást igényel.
- Egyes anti-cheat szolgáltatások le lehetnek tiltva, ha Csökkentett módban voltál, vagy ha egy "játékoptimalizáló" leállította a folyamatot.
- Megosztott hálózati környezetekben (NAT, VLAN) hamis pozitívok vagy csatlakozási hibák fordulhatnak elő.

## Easy Anti-Cheat (EAC)

Játékok: Fortnite, Rust, Dead by Daylight, Hunt: Showdown, és sok más.

### "EasyAntiCheat not found" vagy a játék nem indul
1. Nyisd meg a játék mappáját (Steamben: jobb klikk a játékra > Browse local files).
2. Nyisd meg az `EasyAntiCheat` almappát.
3. Futtasd az `EasyAntiCheat_Setup.exe` fájlt, és kattints az **Install** gombra.
4. Indítsd újra a játékot.

### "EasyAntiCheat failed to initialize"
1. Futtasd a játékot **rendszergazdaként** (jobb klikk az indítón > Run as administrator).
2. Ellenőrizd, hogy az EAC-szolgáltatás fut-e:
   - Nyomd meg a `Win + R` gombot, írd be: `services.msc`, nyomj Entert.
   - Keresd az **EasyAntiCheat** bejegyzést a listában.
   - Jobb klikk > Start.
3. Ellenőrizd a játékfájlokat (Steamben: jobb klikk a játékra > Properties > Installed Files > Verify).

## BattlEye

Játékok: PUBG, DayZ, Arma 3, Rainbow Six Siege és mások.

### "BattlEye initialization failed"
1. Nyisd meg a játék mappáját.
2. Nyisd meg a `BattlEye` almappát.
3. Futtasd az `Install_BattlEye.bat` fájlt.
4. Indítsd újra a játékot.

### A szolgáltatás nem fut
1. Nyomd meg a `Win + R` gombot, írd be: `services.msc`, nyomj Entert.
2. Keresd a **BattlEye Service** bejegyzést.
3. Jobb klikk > Start.
4. Ha az Indítási típus Manuális, állítsd **Automatikusra**.

## Riot Vanguard (Valorant, League of Legends 2FA)

A Vanguard egy kernel szintű anti-cheat, amely rendszerindítással fut.

### "Vanguard not initialized" vagy a Valorant nem indul
1. Indítsd újra a gépet. A Vanguard teljes újraindítást igényel telepítés vagy frissítés után.
2. Ellenőrizd, hogy a Vanguard fut-e:
   - Jobb klikk a tálcán > Feladatkezelő > Services fül.
   - Keresd a **vgc** (Vanguard) bejegyzést.
   - Ha Stopped, jobb klikk > Start.
3. Ha még mindig nem működik, telepítsd újra a Vanguardot:
   - Távolítsd el a **Riot Vanguard** szoftvert az Alkalmazások és funkciók menüből.
   - Indítsd újra a Valorantot vagy a Riot klienst.
   - A Vanguard automatikusan újratelepül.

### "Your PC does not meet the requirements" (TPM / Secure Boot)
A Vanguard TPM 2.0-t és Secure Boot-ot igényel. A legtöbb modern gépen ezek alapból engedélyezve vannak.
- Ellenőrizd a BIOS-ban: Security > TPM és Secure Boot.
- Ha bármilyen okból kikapcsoltad, kapcsold vissza, és indítsd újra a gépet.

## Általános tippek

- **Kapcsolj ki harmadik féltől származó eszközöket:** A memóriatakarítók, FPS boosterek és OC segédprogramok hamis pozitívokat válthatnak ki. Zárd be őket a játék előtt.
- **Tiltsd le az overlay-eket:** Az egymással ütköző overlay-ek (MSI Afterburner + RivaTuner, Discord, GeForce Experience) néha anti-cheat kirúgást okoznak. Kapcsold ki egyenként, hogy megtaláld a hibást.
- **Kernel anti-cheat és dual boot:** Ha Windows és Linux rendszert is használsz, a kernel szintű anti-cheat Linux rendszerindítás után hibázhat. Egy tiszta Windows-os újraindítás megoldja.

## Még mindig nem megy?

1. Nézd meg az [Ismert hibák](/help/known-issues/) listát -- ha ott van, már dolgozunk rajta.
2. Írj a `#support` csatornára Discordon ezzel az infóval:
   - Ülésed helye (pl. 4. sor, 12. szék)
   - Mi a baj (egy mondatban)
   - Mit próbáltál eddig
   - Képernyőkép vagy hibaüzenet
3. Ha 15 percig nincs válasz, gyere a szervezői pulthoz.
