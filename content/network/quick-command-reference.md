---
title: "Gyors parancsok"
date: 2026-02-27T10:00:00+01:00
description: "Másolható parancsok Windows, Linux és macOS rendszerekhez."
draft: false
---

Ha a technikai support kér tőled egy parancsot, innen másold ki.

## Windows

Nyisd meg a parancssort (Start menü > cmd > Enter).

**IP cím megújítása (ha nincs net):**
```cmd
ipconfig /release
ipconfig /renew
```

**DNS gyorsítótár ürítése:**
```cmd
ipconfig /flushdns
```

**Hálózati adatok kiírása (IP, MAC cím):**
```cmd
ipconfig /all
```

**Ping teszt (Google DNS):**
```cmd
ping -n 10 8.8.8.8
```

**Ping teszt (Helyi átjáró - Gateway):**
```cmd
ping -n 10 10.0.0.1
```
*(Megjegyzés: A 10.0.0.1 csak példa, a saját átjáródat az ipconfig parancs "Default Gateway" sorában találod.)*

## Linux

Nyiss egy terminált.

**IP cím megújítása (DHCP):**
```bash
sudo dhclient -r && sudo dhclient -v
```

**Hálózati adatok kiírása:**
```bash
ip addr show
```
vagy
```bash
ifconfig
```

**Ping teszt:**
```bash
ping -c 10 8.8.8.8
```

## macOS

Nyisd meg a Terminalt (Command + Space > Terminal).

**IP cím megújítása:**
```bash
sudo ipconfig set en0 DHCP
```
*(Az en0 az Ethernet csatoló, ha Wi-Fi-n vagy, akkor en1 lehet.)*

**DNS gyorsítótár ürítése:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Ping teszt:**
```bash
ping -c 10 8.8.8.8
```
