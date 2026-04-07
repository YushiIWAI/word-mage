// Auto-generated outcome converter: MD -> TS
// Usage: npx tsx scripts/convert-outcomes.ts

import * as fs from 'node:fs';
import * as path from 'node:path';

// ---------------------------------------------------------------------------
// Types (matching src/game/engine/types.ts)
// ---------------------------------------------------------------------------

interface ParsedReward {
  name: string;
  description: string;
  sellPrice: number;
}

interface ParsedOutcome {
  id: string;
  conditions: string; // raw JS object literal string e.g. "{ s1: 'mod_small', s2: 'subj_kitten' }"
  resultText: string;
  damage: number;
  quill: number;
  reward: ParsedReward | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert node key to camelCase variable name: 'a' -> 'nodeAOutcomes', 'p06' -> 'nodeP06Outcomes' */
function toVarName(key: string): string {
  if (key.startsWith('p')) {
    // e.g. 'p06' -> 'nodeP06Outcomes'
    return `node${key.charAt(0).toUpperCase()}${key.slice(1)}Outcomes`;
  }
  return `node${key.toUpperCase()}Outcomes`;
}

/** Convert node key to output filename: 'a' -> 'node-a-outcomes.ts', 'p06' -> 'node-p06-outcomes.ts' */
function toOutputFilename(key: string): string {
  return `node-${key}-outcomes.ts`;
}

/** Compute relative import path from generated dir to engine/types.ts */
function typesImportPath(): string {
  return '../../../engine/types';
}

/**
 * Parse a reward object string like:
 *   { name: '名前', description: '説明', sellPrice: 10 }
 * Returns null for 'なし'.
 */
function parseReward(raw: string): ParsedReward | null {
  const trimmed = raw.trim();
  if (trimmed === 'なし') return null;

  // Extract fields using regex to handle single-quoted values
  const nameMatch = trimmed.match(/name:\s*'([^']*)'/);
  const descMatch = trimmed.match(/description:\s*'([^']*)'/);
  const priceMatch = trimmed.match(/sellPrice:\s*(\d+)/);

  if (!nameMatch || !descMatch || !priceMatch) {
    return null; // will be caught by caller
  }

  return {
    name: nameMatch[1],
    description: descMatch[1],
    sellPrice: parseInt(priceMatch[1], 10),
  };
}

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

function parseOutcomesFromMd(
  filePath: string,
  content: string,
): ParsedOutcome[] {
  const lines = content.split('\n');
  const outcomes: ParsedOutcome[] = [];

  let current: Partial<ParsedOutcome> | null = null;
  let inDistortionSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNum = i + 1; // 1-based for error messages

    // --- Distortion detection ---

    // '# 歪みパターン' -> ignore everything after
    if (/^# 歪みパターン/.test(line)) {
      // Flush any in-progress outcome
      if (current && current.id) {
        finishOutcome(current, outcomes, filePath, lineNum);
        current = null;
      }
      inDistortionSection = true;
      continue;
    }

    // '## ...' containing '歪み' -> distortion subsection, skip until next '## ' without '歪み' or '### '
    if (/^## /.test(line) && /歪み/.test(line)) {
      if (current && current.id) {
        finishOutcome(current, outcomes, filePath, lineNum);
        current = null;
      }
      inDistortionSection = true;
      continue;
    }

    // Exit distortion subsection when we hit a new ## without 歪み or a ###
    if (inDistortionSection) {
      if (/^## /.test(line) && !/歪み/.test(line)) {
        inDistortionSection = false;
        // fall through to normal processing
      } else if (/^### /.test(line)) {
        inDistortionSection = false;
        // fall through to normal processing
      } else {
        continue; // skip distortion lines
      }
    }

    // --- Outcome parsing ---

    // '### ' -> new outcome
    if (/^### /.test(line)) {
      if (current && current.id) {
        finishOutcome(current, outcomes, filePath, lineNum);
      }
      current = {};
      continue;
    }

    if (!current) continue;

    // '- **ID**: '
    const idMatch = line.match(/^- \*\*ID\*\*:\s*(.+)$/);
    if (idMatch) {
      current.id = idMatch[1].trim();
      continue;
    }

    // '- **conditions**: '
    const condMatch = line.match(/^- \*\*conditions\*\*:\s*(.+)$/);
    if (condMatch) {
      current.conditions = condMatch[1].trim();
      continue;
    }

    // '- **text**: '
    const textMatch = line.match(/^- \*\*text\*\*:\s*(.+)$/);
    if (textMatch) {
      current.resultText = textMatch[1].trim();
      continue;
    }

    // '- **damage**: '
    const dmgMatch = line.match(/^- \*\*damage\*\*:\s*(.+)$/);
    if (dmgMatch) {
      const val = parseInt(dmgMatch[1].trim(), 10);
      if (isNaN(val)) {
        console.error(
          `[ERROR] ${filePath}:${lineNum} - Invalid damage value: "${dmgMatch[1].trim()}"`,
        );
      }
      current.damage = val;
      continue;
    }

    // '- **quill**: '
    const quillMatch = line.match(/^- \*\*quill\*\*:\s*(.+)$/);
    if (quillMatch) {
      const val = parseInt(quillMatch[1].trim(), 10);
      if (isNaN(val)) {
        console.error(
          `[ERROR] ${filePath}:${lineNum} - Invalid quill value: "${quillMatch[1].trim()}"`,
        );
      }
      current.quill = val;
      continue;
    }

    // '- **reward**: '
    const rewardMatch = line.match(/^- \*\*reward\*\*:\s*(.+)$/);
    if (rewardMatch) {
      const rawReward = rewardMatch[1].trim();
      if (rawReward === 'なし') {
        current.reward = null;
      } else {
        const parsed = parseReward(rawReward);
        if (!parsed) {
          console.error(
            `[ERROR] ${filePath}:${lineNum} - Failed to parse reward: "${rawReward}"`,
          );
          current.reward = null;
        } else {
          current.reward = parsed;
        }
      }
      continue;
    }
  }

  // Flush last outcome
  if (current && current.id) {
    finishOutcome(current, outcomes, filePath, lines.length);
  }

  return outcomes;
}

function finishOutcome(
  current: Partial<ParsedOutcome>,
  outcomes: ParsedOutcome[],
  filePath: string,
  lineNum: number,
): void {
  const missing: string[] = [];
  if (!current.id) missing.push('ID');
  if (!current.conditions) missing.push('conditions');
  if (current.resultText === undefined) missing.push('text');
  if (current.damage === undefined) missing.push('damage');
  if (current.quill === undefined) missing.push('quill');
  // reward can be null (なし), but must have been parsed; check if field was set at all
  if (current.reward === undefined) missing.push('reward');

  if (missing.length > 0) {
    console.error(
      `[ERROR] ${filePath}:${lineNum} - Incomplete outcome "${current.id ?? '???'}": missing ${missing.join(', ')}`,
    );
    return;
  }

  outcomes.push(current as ParsedOutcome);
}

// ---------------------------------------------------------------------------
// Code generator
// ---------------------------------------------------------------------------

function escapeString(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function generateTs(
  letter: string,
  mdFilename: string,
  outcomes: ParsedOutcome[],
): string {
  const varName = toVarName(letter);
  const lines: string[] = [];

  lines.push(`// Auto-generated from ${mdFilename}`);
  lines.push(`import type { Outcome } from '${typesImportPath()}';`);
  lines.push('');
  lines.push(`export const ${varName}: Outcome[] = [`);

  for (const o of outcomes) {
    const parts: string[] = [];
    parts.push(`    id: '${escapeString(o.id)}'`);
    parts.push(`    conditions: ${o.conditions}`);
    parts.push(`    resultText: '${escapeString(o.resultText)}'`);
    parts.push(`    damage: ${o.damage}`);
    parts.push(`    quill: ${o.quill}`);

    if (o.reward) {
      const itemId = `item_${o.id}`;
      parts.push(
        `    rewardItems: [{ id: '${escapeString(itemId)}', name: '${escapeString(o.reward.name)}', description: '${escapeString(o.reward.description)}', sellPrice: ${o.reward.sellPrice} }]`,
      );
    }

    lines.push(`  {`);
    lines.push(parts.join(',\n'));
    lines.push(`  },`);
  }

  lines.push('];');
  lines.push('');

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main(): void {
  const projectRoot = path.resolve(import.meta.dirname ?? '.', '..');
  const inputDir = path.join(
    projectRoot,
    'src',
    'game',
    'data',
    'outcomes',
  );
  const outputDir = path.join(
    projectRoot,
    'src',
    'game',
    'data',
    'expanded-nodes',
    'generated',
  );

  // Ensure output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  const keys = [
    'a', 'b', 'c', 'd', 'e',
    'p06', 'p07', 'p08', 'p09', 'p10',
    'p11', 'p12', 'p13', 'p14', 'p15',
    'p16', 'p17', 'p18', 'p19', 'p20',
    'p21', 'p22', 'p23', 'p24', 'p25', 'p26',
  ];
  let totalOutcomes = 0;
  let totalRewards = 0;

  for (const key of keys) {
    const mdFilename = `node-${key}-outcomes.md`;
    const mdPath = path.join(inputDir, mdFilename);

    if (!fs.existsSync(mdPath)) {
      console.error(`[ERROR] Input file not found: ${mdPath}`);
      continue;
    }

    const content = fs.readFileSync(mdPath, 'utf-8');
    const outcomes = parseOutcomesFromMd(mdPath, content);

    const rewardCount = outcomes.filter((o) => o.reward !== null).length;

    // Generate TS
    const tsContent = generateTs(key, mdFilename, outcomes);
    const tsFilename = toOutputFilename(key);
    const tsPath = path.join(outputDir, tsFilename);
    fs.writeFileSync(tsPath, tsContent, 'utf-8');

    console.log(
      `${mdFilename} -> ${tsFilename}: ${outcomes.length} outcomes (${rewardCount} with rewardItems)`,
    );

    totalOutcomes += outcomes.length;
    totalRewards += rewardCount;
  }

  console.log('---');
  console.log(
    `Total: ${totalOutcomes} outcomes (${totalRewards} with rewardItems)`,
  );
}

main();
