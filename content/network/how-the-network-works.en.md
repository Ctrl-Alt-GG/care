---
title: "How the Network Works"
date: 2026-02-27T10:00:00+01:00
description: "A short, practical overview for the curious."
draft: false
---

This is the "enthusiast" version. If you just want to get online, start with [Network Troubleshooting](/network/network-troubleshooting/).

## High-level layout

- Internet -> Juniper SRX340 (firewall) -> Arista DCS-7050SX (L3 core) -> Juniper EX3300 (access switches)
- Inter-switch links are simple routed point-to-point (/31), so we're not depending on spanning tree between switches
- Access switches are edge only; routing decisions happen at the core

## Segmentation (VLANs)

- **Access VLANs (140-150):** guest devices on the same switch share a LAN segment  
  - DHCP only, internet + LAN services  
  - Don't expose services you don't want other people to see
- **Services VLAN (130):** game servers, file host, DNS (Unbound), DHCP (Kea)
- **Management VLAN (128):** network devices only
- **Wireless VLAN (132):** same policy as access VLANs
- **IoT VLAN (131):** currently similar to access; future plan is "internet-only, isolated"

## Traffic flow

- Clients -> access switch -> core gateway -> firewall -> internet
- LAN services stay inside the core (no hairpinning through the firewall)

## Design intent

- Keep L2 complexity low
- Make failures predictable and easy to isolate (is it access / core / firewall?)
- Keep troubleshooting fast using the portal, server status page, and basic ping tests
