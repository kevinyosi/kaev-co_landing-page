import { existsSync, readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('style.css', 'utf8');
const assetRefs = new Set();

for (const match of html.matchAll(/(?:src|href)="\.\/images\/([^"]+)"/g)) {
    assetRefs.add(`images/${match[1]}`);
}

for (const match of css.matchAll(/url\(["']?\.\/images\/([^"')]+)["']?\)/g)) {
    assetRefs.add(`images/${match[1]}`);
}

const missingAssets = [...assetRefs].filter((asset) => !existsSync(asset));

const checks = [
    {
        name: 'positions the brand as a software house',
        pass: /software house/i.test(html),
    },
    {
        name: 'includes a keyboard skip link',
        pass: /class="skip-link"/.test(html) && /#main-content/.test(html),
    },
    {
        name: 'does not use inline style attributes',
        pass: !/\sstyle="/.test(html),
    },
    {
        name: 'has no empty image alt text',
        pass: !/<img\b[^>]*alt=""/.test(html),
    },
    {
        name: 'defines responsive mobile rules',
        pass: /@media\s*\(max-width:\s*768px\)/.test(css),
    },
    {
        name: 'defines visible focus states',
        pass: /:focus-visible/.test(css),
    },
    {
        name: 'references existing local image assets',
        pass: missingAssets.length === 0,
    },
    {
        name: 'uses UX-led redesign layout sections',
        pass: /class="[^"]*\bworkflow-panel\b[^"]*"/.test(html) && /class="[^"]*\bux-path\b[^"]*"/.test(html) && /class="[^"]*\bservice-matrix\b[^"]*"/.test(html) && /class="[^"]*\bcase-studies\b[^"]*"/.test(html),
    },
    {
        name: 'avoids generic equal-card service grid',
        pass: !/class="capability-grid"/.test(html) && !/\.capability-grid/.test(css) && !/class="service-grid"/.test(html) && !/\.service-grid/.test(css),
    },
    {
        name: 'adds CSS-only reveal motion',
        pass: /@keyframes\s+revealUp/.test(css) && /\.reveal/.test(css),
    },
];

const failures = checks.filter((check) => !check.pass);

if (failures.length > 0) {
    console.error('Design checks failed:');
    for (const failure of failures) {
        console.error(`- ${failure.name}`);
    }
    if (missingAssets.length > 0) {
        console.error(`Missing assets:\n${missingAssets.join('\n')}`);
    }
    process.exit(1);
}

console.log(`Design checks passed (${checks.length}/${checks.length}).`);
