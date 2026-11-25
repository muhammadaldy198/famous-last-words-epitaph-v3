import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// The epitaph counts down 3-2-1: three regrets, this stone is number two, the reader is number one.
const LINE =
  "Here lies a man who counted his regrets. Three. This stone is number two. Number one was you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, LINE + "\n", "utf8");
chmodSync(target, 0o644);
