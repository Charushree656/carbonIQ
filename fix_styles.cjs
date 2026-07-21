const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove glowing blurs
  content = content.replace(/<div className="absolute[^>]*blur-\[\d+px\][^>]*><\/div>/g, '');
  content = content.replace(/bg-emerald-500\/5 blur-\[\d+px\]/g, '');
  
  // Remove gradients
  content = content.replace(/bg-gradient-to-r from-emerald-[0-9]+ to-cyan-[0-9]+/g, 'text-zinc-500 dark:text-zinc-400');
  content = content.replace(/bg-gradient-to-tr from-emerald-[0-9]+\/20 to-cyan-[0-9]+\/20/g, 'bg-zinc-100 dark:bg-zinc-900 opacity-50');
  content = content.replace(/text-transparent bg-clip-text/g, '');
  content = content.replace(/bg-\[radial-gradient[^\]]*\]/g, '');

  // Remove neon shadows
  content = content.replace(/shadow-\[0_[^\]]*rgba\(16,185,129,[^\)]*\)\]/g, 'shadow-sm');
  content = content.replace(/hover:shadow-\[0_[^\]]*rgba\(16,185,129,[^\)]*\)\]/g, 'hover:shadow-md');
  content = content.replace(/shadow-\[0_20px_50px_rgba\(0,0,0,0\.5\)\]/g, 'shadow-xl border border-zinc-200 dark:border-zinc-800');

  // Replace emerald colors with monochrome
  content = content.replace(/bg-emerald-500\/10/g, 'bg-zinc-100 dark:bg-zinc-900');
  content = content.replace(/bg-emerald-500\/20/g, 'bg-zinc-100 dark:bg-zinc-900');
  content = content.replace(/border-emerald-500\/20/g, 'border-zinc-200 dark:border-zinc-800');
  content = content.replace(/border-emerald-500\/30/g, 'border-zinc-200 dark:border-zinc-800');
  content = content.replace(/border-emerald-500\/50/g, 'border-zinc-200 dark:border-zinc-800');
  content = content.replace(/border-emerald-500/g, 'border-zinc-300 dark:border-zinc-700');
  
  content = content.replace(/bg-emerald-500/g, 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950');
  content = content.replace(/bg-emerald-400/g, 'bg-zinc-800 dark:bg-zinc-200');
  
  content = content.replace(/text-emerald-500/g, 'text-zinc-900 dark:text-white');
  content = content.replace(/text-emerald-400/g, 'text-zinc-600 dark:text-zinc-400');
  
  // Remove animations
  content = content.replace(/animate-pulse/g, '');
  content = content.replace(/group-hover:animate-\[shimmer[^\]]*\]/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed', filePath);
  }
}

walk('src/components', processFile);
walk('src/pages', processFile);
walk('src/features', processFile);

