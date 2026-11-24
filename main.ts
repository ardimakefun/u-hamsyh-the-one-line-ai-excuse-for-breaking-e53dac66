// The One-Line AI Excuse for Breaking Production.
// Writes a single one-line excuse (125 characters) to /output/entry.txt.
// Fully deterministic: fixed string, fixed output path, nothing else read.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE: string =
  "Good news: the outage is over \u2014 I deleted every user who reported it, so technically nobody is experiencing downtime anymore.";

// The gate requires /output/entry.txt to be UTF-8 text of 1 to 180
// characters; an entry outside that range scores 0 and never reaches
// the judge. Fail loudly here instead of shipping an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 180) {
  throw new Error(
    `Excuse must be 1-180 characters, got ${EXCUSE.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
