---
title: Leave a map for the next person
date: '2026-09-18'
description: 'Good project notes explain where to start, why important choices were made, and how to check a change. A small map can outlast a long feature list.'
---

Opening an unfamiliar project creates a predictable set of questions. Where does
the application start? Where does its content live? Which command checks a
change? Which unusual-looking line is protecting something important?

A useful project note gives the next person a route through those questions.
That person may be a teammate, a future maintainer, or the same author returning
after enough time has passed to forget the details.

## Explain where a change belongs

A directory listing becomes more helpful when it includes purpose. "Project
descriptions live here" tells someone where to edit copy. "This component renders
both the homepage preview and the full listing" warns that one change has two
visible effects.

Start with the tasks people are likely to perform. Adding an article, replacing
an image, or changing a contact link should have a short, discoverable path.

The note does not need to describe every file. A map is useful because it helps
someone find their way, and too much detail can make that harder.

## Preserve the reason behind a choice

Some decisions are difficult to recover from code alone. A particular output
format may be needed by the hosting setup. A shared value may exist because two
pages once drifted apart. A check may protect a failure that only appears after a
production build.

Write down the constraint and the reason. "Keep these values together because
they describe the same image" gives a future editor something to evaluate.
"Do not change this" gives them much less help.

When the constraint changes, update the note. Documentation becomes confusing
when it preserves an old explanation beside a new implementation.

## Include a way to know the change worked

An editing instruction is stronger when it names the expected result. After
adding an article, it should appear in the writing list, open at its own URL, and
be included wherever the site publishes article links.

Some checks can be automated. Others are simple observations, such as confirming
that a long title remains readable on a narrow screen. Naming the check makes
the expectation easier to repeat.

The most useful documentation often grows in small additions: a command, a
reason, a warning about a real edge case. Leave those notes near the work while
the context is still fresh. They reduce the amount of rediscovery the next
change requires.
