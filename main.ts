// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The whole job is to hand the house the address of the X post that carries
// the meme: read POST.json out of the repository and write the very same bytes
// into the output directory, where the gate picks it up. The meme itself, the
// post's text and picture, are judged straight from X — nothing written here
// is part of the judgement, so this program does nothing else.
//
// Where the files live:
//   - the repository root comes from MAKEFUN_BOT_DIR, falling back to /bot
//     (the path the grader mounts the repo at);
//   - the output directory comes from MAKEFUN_OUTPUT_DIR, falling back to
//     /output (the path the grader reads the result from).
// Both fallbacks match the grader's container; the environment variables let
// the same program be run outside it for a local check.
//
// Deterministic by construction: the output is a byte-for-byte copy of the
// input file, so two runs always produce identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Resolve the two directories, honouring the grader's overrides first.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the destination exists before writing into it.
mkdirSync(outDir, { recursive: true });

// Read the post address file, then write those exact bytes out again.
// Any failure (missing file, unreadable directory) is fatal: report it on
// stderr and exit non-zero so the grader knows the entry did not run.
let postBytes: Buffer;
try {
  postBytes = readFileSync(join(repoDir, 'POST.json'));
} catch (err) {
  console.error(`Could not read POST.json in ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  writeFileSync(join(outDir, 'POST.json'), postBytes);
} catch (err) {
  console.error(`Could not write POST.json into ${outDir}: ${(err as Error).message}`);
  process.exit(1);
}
