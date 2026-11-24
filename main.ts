// The Houseplant Out-of-Office — u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if a houseplant sent it, to /output/entry.txt.
// Gate: UTF-8 text of 1 to 120 characters, not only whitespace, a single line.
// Node.js 22, standard library only, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. You didn't water me for months, so I'm returning the favour: your email stays unread.";

// Gate pre-checks, before anything is written.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file must match the line byte for byte,
// and the re-checked char count must still sit inside the 1-120 gate.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}
if (back.length < 1 || back.length > 120 || back.trim().length === 0) {
  throw new Error(`read-back failed the gate: ${back.length} characters`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("read-back contains a newline");
}

console.log(
  `verified: read-back matches, ${back.length} characters, single line, no trailing newline`,
);
console.log(
  `wrote ${LINE.length} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`,
);
