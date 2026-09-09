---
title: "Record match results and close a tournament"
description: "Save scores, correct results, manage rounds, and archive a tournament in Bracket."
weight: 130
---

You need to be logged in with management access to this tournament. If you do not yet have a tournament or draw, start with the [setup guide]({{< relref "create-tournament.md" >}}).

## Save a result

1. On the [Bracket](https://bracket.ctrl-alt-gg.hu) home page, open the tournament with **Open workspace**.
2. Choose **Stages**. Expand the relevant stage, stage item, round, and match. **Results is a score summary, not the score-entry screen.**
3. Check both teams. **Score 1** belongs to the first team displayed; **Score 2** belongs to the second. Enter the final score required by the tournament rules without swapping the sides.
4. Leave **Round id**, **Court id**, **Custom duration minutes**, and **Custom margin minutes** unchanged unless you are deliberately changing the schedule as well.
5. Click **Save match** and wait for the success message.
6. Check both teams and the score on **Results**, then review the bracket or standings too. Only then announce the next match.

## Correct a score

Reopen the same match under **Stages**, correct the scores, and click **Save match**. **Delete match** removes a match; it is not the way to correct a result.

If a team has already advanced or played based on the incorrect result, pause the affected upcoming matches and consult the tournament lead first. After saving, check the subsequent pairings too; do not assume every later match that has already been played will repair itself.

## Advance a round or stage

- **Round robin and Single elimination:** rounds are created with the stage item. After checking results and pairings, follow the existing schedule.
- **Swiss:** **Start next round** under the stage item's **Round flow** creates new pairings. Create courts and check previous results first. Use **Adjust to time before advancing** if a timing adjustment is needed. If an existing draft round causes an error, inspect it; do not delete it blindly just to make the button work.
- **A new stage:** **Activate next stage** activates the next tournament stage, not just the next match. Check qualifiers and destination slots first. **Activate previous stage** is not a simple undo button either: coordinate with the other organizers before going back.

## Close the tournament

1. Verify that all required results are saved and the final outcome communicated to participants is correct.
2. Under **Settings > Status and sharing**, click **Switch to ARCHIVED**. Archive the tournament rather than removing it with **Delete tournament**.
3. For a later correction, log in and find it using the home page's **archived** or **all** filter. If needed, reopen it with **Switch to OPEN**, correct and verify the result, then archive it again.

If you lack editing access, do not create a duplicate or ask for someone else's password. Ask the tournament lead for access.