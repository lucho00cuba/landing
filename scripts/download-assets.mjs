import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const CONFIG_PATH = path.join(ROOT, 'src', 'config.ts');
const OUTPUT_DIR = path.join(ROOT, 'public', 'portfolio');

function extractPortfolioProjects(source) {
  const projectsBlockMatch = source.match(/projects\s*:\s*\[(?<body>[\s\S]*?)\]\s*,/m);
  if (!projectsBlockMatch?.groups?.body) {
    throw new Error('Could not find profile.portfolio.projects in src/config.ts');
  }

  const body = projectsBlockMatch.groups.body;
  const objectMatches = body.match(/\{[\s\S]*?\}/g) ?? [];

  return objectMatches
    .map((objText) => {
      const title = objText.match(/title\s*:\s*"([^"]+)"/)?.[1] ?? null;
      const image = objText.match(/image\s*:\s*"([^"]+)"/)?.[1] ?? null;
      const link = objText.match(/link\s*:\s*"([^"]+)"/)?.[1] ?? null;
      return { title, image, link };
    })
    .filter((item) => item.image && item.link);
}

function githubRepoPath(repoUrl) {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== 'github.com') return null;

    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;

    return `${parts[0]}/${parts[1]}`;
  } catch {
    return null;
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function downloadToFile(url, filePath) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'portfolio-assets-downloader',
      Accept: 'image/*',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('image/')) {
    throw new Error(`Response is not an image (${contentType || 'no content-type'})`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
}

async function main() {
  const configSource = await fs.readFile(CONFIG_PATH, 'utf8');
  const projects = extractPortfolioProjects(configSource);

  if (!projects.length) {
    console.log('No projects found to download assets for.');
    return;
  }

  await ensureDir(OUTPUT_DIR);

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const project of projects) {
    const imagePath = project.image;
    const link = project.link;

    if (!imagePath?.startsWith('/portfolio/')) {
      skipped += 1;
      console.log(`SKIP ${project.title ?? 'untitled'}: image outside /portfolio (${imagePath})`);
      continue;
    }

    const repoPath = githubRepoPath(link);
    if (!repoPath) {
      skipped += 1;
      console.log(`SKIP ${project.title ?? 'untitled'}: link is not a GitHub repo (${link})`);
      continue;
    }

    const filename = imagePath.replace('/portfolio/', '');
    const outputPath = path.join(OUTPUT_DIR, filename);

    const nonce = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const ogUrl = `https://opengraph.githubassets.com/${nonce}/${repoPath}`;

    try {
      await downloadToFile(ogUrl, outputPath);
      success += 1;
      console.log(`OK   ${project.title ?? repoPath} -> public/portfolio/${filename}`);
    } catch (error) {
      failed += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`FAIL ${project.title ?? repoPath}: ${message}`);
    }
  }

  console.log(`\nSummary: ${success} OK, ${skipped} skipped, ${failed} failed.`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  console.error(message);
  process.exit(1);
});
