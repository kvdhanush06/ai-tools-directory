import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const dist = path.resolve('dist');
if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter(f => f.endsWith('.html'));
let broken = 0;

for (const f of htmlFiles) {
  const s = fs.readFileSync(f, 'utf8');
  if (s.includes('undefined')) {
    console.error('Found "undefined" in', f);
    broken++;
  }
}
if (broken) process.exit(1);
console.log('Sanity checks passed:', htmlFiles.length, 'HTML files scanned.');
