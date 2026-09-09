---
title: "Create and schedule a tournament"
description: "Organizer guide to creating an event, players, teams, a tournament format, and a public Bracket view."
weight: 120
---

This guide is for organizers setting up a simple round-robin or single-elimination tournament. Editing an existing tournament requires management access to it. If you want to play, use the [entry guide]({{< relref "join-tournament.md" >}}).

## Create the event and tournament

1. Log in to [Bracket](https://bracket.ctrl-alt-gg.hu) and check whether the tournament already exists. If it does, use **Open workspace** instead of creating a duplicate.
2. For a new tournament, select **Owning event** in the home page's **New tournament** form. If you have no event yet, follow **Open event manager**, fill in **Event name**, and click **Create event**.
3. In **New tournament**, enter the tournament name and start time. **Duration minutes** is the length of one match; **Margin minutes** is the gap between matches, not the duration of the whole tournament.
4. Enable **Auto-assign courts during scheduling** if you want automatic court assignments. Enable **Allow players in multiple teams** only if the tournament rules permit it.
5. Click **Create tournament**, then **Open workspace** on the new tournament.

## Add players and teams

1. On **Players**, enter a player's name, leave **Player is active** checked, and click **Add player**. To add several names, enter one player per line in **Bulk import names**, then click **Bulk import**.
2. On **Teams**, use **Single team** to enter the team name, select its players, check **Team is active**, and click **Create team**.
3. **Create from list** adds several team names, but you must assign their players afterwards. Expand a team's row to change its membership, then click **Save team**.
4. Individual tournaments also use team entries in the draw: create a one-person team for each player.

The player roster is not the user account list. Adding a player does not create a login for them.

## Set the format and draw

1. Open **Stages** and click **Add stage**. Name the stage, then click **Save stage**.
2. Within the stage, name the stage item and set **Team count** to the number of participating teams. Choose **Round robin** under **Type** for everyone to play everyone, or **Single elimination** for elimination after one loss.
3. If you need custom scoring, first create a rule on **Rankings** with the points for wins, draws, and losses. Use the resulting identifier in **Ranking id**; do not invent an ID. This field is otherwise optional.
4. Click **Create stage item**. These two formats create their rounds and matches automatically; you do not need **Create round** or **Start next round** for them.
5. Expand the stage item. Under **Seeding and winners**, choose a team for each **Slot** and click **Assign**. Check empty slots and entries marked **taken**.
6. Review the pairings. Adding teams to the roster alone does not fill the draw's slots.

In a multi-stage tournament, a later slot can also refer to a placing from an earlier round-robin or Swiss stage item. Agree on these assignments and qualification rules with the other organizers before play begins.

## Assign courts and times

1. On **Schedule**, use **Create court** for each playing area or station. Give them names players can recognize at the venue.
2. Check the start time, match duration, and margin on **Settings**. For automatic assignments, enable **Auto-assign courts when scheduling**, then click **Save tournament**.
3. On **Schedule**, click **Schedule all matches** and review the times for each court. Matches remaining in **Waiting room** have no court assigned.

Coordinate with players before rescheduling if you have already announced their start times.

## Share with participants

On **Settings**, enter a unique **Dashboard endpoint**, such as `evening-cup`, enable **Public dashboard enabled**, and save. Open the public link under **Status and sharing** while logged out before sharing it.

Send participants the [schedule and results guide]({{< relref "follow-tournament.md" >}}). To run the tournament, continue with the [score-entry guide]({{< relref "record-tournament-results.md" >}}).