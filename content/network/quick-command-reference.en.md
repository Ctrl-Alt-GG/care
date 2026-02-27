---
title: "Quick Command Reference"
date: 2026-02-27T10:00:00+01:00
description: "Copy-paste commands for Windows, Linux, and macOS."
draft: false
---

If tech support asks you to run a command, copy it from here.

## Windows

Open Command Prompt (Start > cmd > Enter).

**Renew IP address (if internet is broken):**
```cmd
ipconfig /release
ipconfig /renew
```

**Flush DNS cache:**
```cmd
ipconfig /flushdns
```

**Show network details (IP, MAC address):**
```cmd
ipconfig /all
```

**Ping test (Google DNS):**
```cmd
ping -n 10 8.8.8.8
```

**Ping test (Local Gateway):**
```cmd
ping -n 10 10.0.0.1
```
*(Note: 10.0.0.1 is an example. Find your actual gateway in the "Default Gateway" line of ipconfig.)*

## Linux

Open a terminal.

**Renew IP address (DHCP):**
```bash
sudo dhclient -r && sudo dhclient -v
```

**Show network details:**
```bash
ip addr show
```
or
```bash
ifconfig
```

**Ping test:**
```bash
ping -c 10 8.8.8.8
```

## macOS

Open Terminal (Command + Space > Terminal).

**Renew IP address:**
```bash
sudo ipconfig set en0 DHCP
```
*(en0 is usually Ethernet. If you are on Wi-Fi, try en1.)*

**Flush DNS cache:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Ping test:**
```bash
ping -c 10 8.8.8.8
```
