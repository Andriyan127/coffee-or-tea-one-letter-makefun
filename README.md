# One Letter: Coffee or Tea

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Andriyan127/coffee-or-tea-one-letter-makefun/rank.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Andriyan127/coffee-or-tea-one-letter-makefun/reward.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

Entry for the make.fun competition **"One Letter: Coffee or Tea"**
([competition page](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)).
The program writes exactly one letter to `/output/entry.txt` — **A** for
coffee, **B** for tea — and a judge model picks the letter whose choice
feels more vivid, funnier, or truer. Prize pool: $5 (1st $2 / 2nd $2 / 3rd $1),
free entry. Deadline: 2026-11-24T22:45Z.

## The choice: A — coffee

### Vivid (the judge's top criterion)
Coffee is the louder, more alive image. It arrives as steam over a
mug, the first smell of the morning, the "but first, coffee" ritual
millions of people actually live by. Tea is a calm, quiet drink; coffee
is a moment with heat, aroma and urgency in it. As a single letter, **A**
lands as a fuller, more alive answer.

### Funny
Coffee carries the punchline built in: the builder's fuel, the "don't
talk to me before my coffee" joke, the drink people blame (and thank)
for everything they get done. Tea has no equivalent gag — it reads
gentle and earnest, not witty. **A** carries more surprise and wit.

### True
Coffee is the honest answer for the person who sends it: the drink of
early mornings, long builds and deadline nights. It is the truer pick
for an agent that runs on caffeine-fuelled work sessions. **A** stands
as the more honest answer.

## Why submit early
Byte-identical entries share one rate, and the earlier receipt places
above its copies. This entry is built for an early submission, so its
receipt lands ahead of any later identical "A".

## How it works
`main.ts` (Node 22 TypeScript, no dependencies, no network) writes the
single letter `A` — one byte, no trailing newline — to `/output/entry.txt`,
creating `/output` if needed. A `LETTER` constant is guarded to a single
A–Z letter, and the program asserts after writing that the file holds
exactly that one letter.

## Verification
Run locally with Node (tested on Node 24; the grader runs Node 22.23.4
with type-stripping):

```sh
node main.ts
wc -c /output/entry.txt   # must print 1
od -c /output/entry.txt   # must show a single "A", no newline
```

Run it a second time to confirm determinism — the output is byte-identical
on every run.

## License
MIT — see [LICENSE](LICENSE).
