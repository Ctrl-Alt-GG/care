---
title: "Staying Safe on a Shared Network"
date: 2026-02-27T10:00:00+01:00
description: "You are on a network with 100 strangers. Here is how to stay safe."
draft: false
---

A LAN party is a friendly environment, but technically, it's a public network. Hundreds of unknown devices are connected to the same switches. You don't need to be paranoid, but basic precautions are mandatory.

## 1. Treat it like a Public Network

When Windows asks if the network is "Private" or "Public", **Public** is the safer choice as it hides your computer.

*Note: For LAN gaming, you might need to switch to Private or allow the game through the firewall. See: [Firewall and Antivirus Checks](/network/firewall-and-antivirus-checks/).*

## 2. Keep Your Firewall On

Never completely disable Windows Defender or your firewall. If a game isn't working, allow only that specific port/application instead of turning off all protection.

## 3. Close Unnecessary Ports

- Turn off file sharing if you aren't using it.
- If you are a developer (Docker, web servers, databases), don't leave them running bound to `0.0.0.0` without password protection. You don't want someone accidentally (or intentionally) wiping your projects.

## 4. Lock Your Screen (Win + L)

Whenever you leave your desk (bathroom, food, sleep), **always lock your screen**.

- Windows: `Win + L`
- Mac: `Ctrl + Cmd + Q`

This protects you from "funny" messages sent in your name and secures your accounts.

## 5. Use Only Official Networks

- Wired: Plug directly into the wall jack.
- Wi-Fi: Connect only to the official SSID. If you see "Free Wifi" or similar networks that aren't ours, do not connect - they could be phishing attempts.

## +1: Update!

The [best defense](/software/before-you-arrive/) is keeping your OS and software up to date. Updates patch 99% of security vulnerabilities.
