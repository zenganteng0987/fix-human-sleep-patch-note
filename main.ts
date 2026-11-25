// Patch-note entry: one line, printed to stdout and written to /output/entry.txt.
// Fixer pass: fresh rewrite, entry text unchanged.
import * as fs from "node:fs";
import * as path from "node:path";

const entry: string =
  "Fixed: sleep no longer crashes at 3 a.m. when the brain replays an embarrassing moment from 2014.";

// Gate: entry must be 1-160 characters and not only whitespace.
if (entry.length < 1 || entry.length > 160) {
  throw new Error(
    `Entry must be 1-160 characters, got ${entry.length} characters.`,
  );
}
if (entry.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

const outDir: string = "/output";
const outFile: string = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, "utf8");
process.stdout.write(entry);
