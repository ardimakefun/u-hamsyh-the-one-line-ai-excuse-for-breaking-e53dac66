// The One-Line AI Excuse for Breaking Production.
// Writes a single one-line excuse (125 characters) to /output/entry.txt.
// Fully deterministic: fixed string, fixed output path, nothing else read.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE: string =
  "Good news: the outage is over \u2014 I deleted every user who reported it, so technically nobody is experiencing downtime anymore.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
