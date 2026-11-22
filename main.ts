import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `On the cliff path there is a door
with no house behind it.
It stands in the grass,
painted green,
and every spring
someone leaves a key
under the stone beside it.
No one has ever seen who.`;

const chars = [...TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
