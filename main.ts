// One Letter: Coffee or Tea — make.fun competition
// https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The entry program writes exactly one letter to /output/entry.txt.
// Letter A = coffee, letter B = tea. A judge model picks the letter
// whose choice feels more vivid, funnier, or truer.
//
// This entry chooses A — coffee. Coffee is the louder, more vivid
// cultural pick: the "but first, coffee" morning ritual, the builder's
// fuel, the drink with a punchline built in. Tea reads calmer and
// flatter against the judge's rubric (vivid > funny > true), so A is
// the stronger single-letter answer.
//
// The output is exactly one byte, "A", with no trailing newline,
// no punctuation and no explanation — the gate requires UTF-8 text
// of exactly 1 character.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The chosen letter: "A" for coffee.
const LETTER = "A";

// Guard: the entry must be exactly one A–Z letter, nothing else.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`LETTER must be a single A-Z letter, got: ${JSON.stringify(LETTER)}`);
}

const OUTPUT_PATH = join("/output", "entry.txt");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Post-write assertion: the gate requires exactly 1 character.
// "A" is a single ASCII byte, so this also guarantees a 1-byte file.
import { readFileSync } from "node:fs";
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written.length !== 1 || written !== LETTER) {
  throw new Error(`entry.txt must hold exactly one letter, got: ${JSON.stringify(written)}`);
}
