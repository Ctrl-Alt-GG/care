---
title: "Networking Glossary"
date: 2026-02-27T10:00:00+01:00
categories: ["network"]
description: "IP, DHCP, DNS – what they mean and why they matter at a LAN."
draft: false
---

If [How the Network Works](/posts/how-the-network-works/) was too technical, this crash course covers the essential terms you need to know.

## IP Address

Your computer's address on the network. This identifies you. On the LAN, this might change dynamically, but it must always be unique. If two devices have the same IP, neither will work (IP conflict).

## MAC Address (Physical Address)

A unique identifier burned into your network card hardware. This never changes. Our system identifies your device by its MAC address and assigns an IP address to it.

## DHCP (Dynamic Host Configuration Protocol)

The protocol that automatically hands out IP addresses.

**Why it matters:** When you set your PC to "Automatic" (DHCP), our server tells it what IP to use, where the exit is (Gateway), and who translates names (DNS). Setting static IPs manually only causes trouble. See: [IP Setup Basics](/posts/ip-setup-basics/).

## DNS (Domain Name System)

The phonebook. It translates human-readable names (like `servers.ctrl-alt-gg.hu`) into machine-readable IP addresses.

**Tip:** Use automatic DNS settings to ensure you can access local cache servers and internal services.

## Gateway

The door to the internet. Your computer sends all data here that isn't meant for another device on the local network.

## NAT (Network Address Translation)

Used by home routers to share a single public IP among many devices.

**At the LAN:** You don't need this between your PC and the wall jack. Do not bring your own router, as double NAT causes issues in games.
