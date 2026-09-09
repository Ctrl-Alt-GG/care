---
title: "Verseny létrehozása és beosztása"
description: "Szervezői útmutató esemény, játékoslista, csapatok, versenyforma és nyilvános Bracket-nézet létrehozásához."
weight: 120
---

Ez az útmutató szervezőknek szól, egy egyszerű körmérkőzéses vagy egyenes kieséses versenyhez. A meglévő verseny módosításához annak kezelési joga szükséges. Ha játszani szeretnél, a [nevezési útmutatót]({{< relref "join-tournament.md" >}}) kövesd.

## Esemény és verseny létrehozása

1. Jelentkezz be a [Bracketbe](https://bracket.ctrl-alt-gg.hu), és nézd meg, létezik-e már a verseny. Ha igen, használd az **Open workspace** gombot, ne készíts másolatot.
2. Új versenyhez a kezdőlap **New tournament** űrlapján válaszd ki az **Owning event** értékét. Ha még nincs eseményed, az **Open event manager** hivatkozással nyisd meg az eseménykezelőt, add meg az **Event name** mezőt, majd kattints a **Create event** gombra.
3. A **New tournament** űrlapon add meg a verseny nevét és kezdési idejét. A **Duration minutes** egy meccs hossza, a **Margin minutes** a meccsek közötti ráhagyás, nem a teljes verseny időtartama.
4. Ha automatikus pályabeosztást szeretnél, jelöld be az **Auto-assign courts during scheduling** lehetőséget. Az **Allow players in multiple teams** csak akkor legyen bekapcsolva, ha ezt a versenyszabályok megengedik.
5. Kattints a **Create tournament**, majd a létrejött versenynél az **Open workspace** gombra.

## Játékosok és csapatok felvétele

1. A **Players** lapon add meg a játékos nevét, hagyd bekapcsolva a **Player is active** jelölést, majd válaszd az **Add player** gombot. Több névhez a **Bulk import names** mezőben soronként egy játékost adj meg, majd kattints a **Bulk import** gombra.
2. A **Teams** lapon a **Single team** űrlapon add meg a csapat nevét, jelöld ki a tagokat, ellenőrizd a **Team is active** jelölést, és kattints a **Create team** gombra.
3. A **Create from list** több csapatnevet vesz fel, de a játékosokat utána rendeld a csapatokhoz. A csapat sorát lenyitva módosíthatod a tagságot, majd a **Save team** gombbal menthetsz.
4. Egyéni versenyhez is csapatbejegyzésekkel dolgozik a sorsolás: játékosonként hozz létre egy egyszemélyes csapatot.

A játékoslista nem a felhasználói fiókok listája. Egy játékos felvétele nem hoz létre számára bejelentkezést.

## Versenyforma és sorsolás

1. Nyisd meg a **Stages** lapot, és válaszd az **Add stage** gombot. Nevezd el a szakaszt, majd ments a **Save stage** gombbal.
2. A szakaszon belül add meg a versenyrész nevét és a **Team count** mezőben a részt vevő csapatok számát. A **Type** legyen **Round robin**, ha mindenki mindenkivel játszik, vagy **Single elimination**, ha egy vereség kiesést jelent.
3. Ha egyedi pontozás kell, előbb a **Rankings** lapon hozz létre szabályt a győzelem, döntetlen és vereség pontértékével. Az ott kapott azonosítót add meg a **Ranking id** mezőben; ne találj ki azonosítót. A mező egyébként opcionális.
4. Kattints a **Create stage item** gombra. Ennél a két formátumnál a fordulók és meccsek automatikusan létrejönnek, nem kell hozzájuk külön **Create round** vagy **Start next round**.
5. Nyisd le a versenyrészt, és a **Seeding and winners** alatt minden **Slot** helyhez válassz csapatot, majd kattints az **Assign** gombra. Ellenőrizd az üres vagy már foglalt, **taken** jelölésű helyeket.
6. Nézd át az elkészült párosításokat. A csapatok felvétele önmagában nem tölti ki a sorsolás helyeit.

Többszakaszos versenynél egy későbbi hely korábbi körmérkőzéses vagy Swiss versenyrész helyezettjére is hivatkozhat. Ezt és a továbbjutási szabályokat még a verseny kezdete előtt egyeztesd a többi szervezővel.

## Pályák és időpontok

1. A **Schedule** lapon a **Create court** gombbal hozz létre minden használni kívánt pályát vagy játékállomást. Adj nekik a helyszínen is felismerhető nevet.
2. Ellenőrizd a kezdési időt, a meccshosszt és a ráhagyást a **Settings** lapon. Az automatikus kiosztáshoz legyen bekapcsolva az **Auto-assign courts when scheduling**, majd ments a **Save tournament** gombbal.
3. A **Schedule** lapon kattints a **Schedule all matches** gombra, és ellenőrizd a pályánkénti időbeosztást. A **Waiting room** alatt maradó meccseknek nincs kiosztott pályájuk.

Az újraütemezés előtt egyeztess a játékosokkal, ha már kihirdetted a kezdéseket.

## Megosztás a résztvevőkkel

A **Settings** lapon adj meg egy egyedi **Dashboard endpoint** nevet, például `esti-kupa`, kapcsold be a **Public dashboard enabled** jelölést, és ments. A **Status and sharing** részben található nyilvános hivatkozást nyisd meg kijelentkezve is, mielőtt megosztod.

A résztvevőknek küldd el a [menetrend és eredmények útmutatóját]({{< relref "follow-tournament.md" >}}). A lebonyolításhoz folytasd az [eredményrögzítési útmutatóval]({{< relref "record-tournament-results.md" >}}).