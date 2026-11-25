// Have You Tried Turning It Off? — entry program.
// Writes one funny tech-support line to /output/entry.txt,
// then self-checks the competition gate: UTF-8 text of 1 to 199
// characters, not only whitespace, on a single line.
//
// The joke twists the classic reboot line instead of repeating it: the
// agent confesses the classic is his whole plan and he has nothing after
// it. The customer's panic is felt ("I hear the panic"), the agent stays
// cheerful and useless, and the customer is never the butt of the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hear the panic, sir — have you tried turning it off and on again? That is genuinely my entire plan. I have nothing after that.";

const MAX_CHARS = 199;

function main(): void {
  const text = ENTRY.trim();
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
