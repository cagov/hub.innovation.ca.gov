import esbuild from 'esbuild';
import { transform as lcssTransform } from 'lightningcss';
import * as sass from 'sass';
import chalk from 'chalk';
import fs from 'node:fs';
import markdown from './docs/src/11ty/markdown.js';

/**
 * Log an output from a build process in the 11ty style.
 * @param {string} srcPath The source of the build process.
 * @param {string} distPath The output of the build process.
 * @param {string} assetType The type of build: CSS, JS, etc.
 * @returns {void}
 */
const buildLog = (srcPath, distPath, assetType) => {
  const projectLabel = chalk.blue('[innovation-hub]');
  const distLabel = `Writing ./${distPath}`;
  const srcLabel = chalk.gray(`from ./${srcPath} (${assetType})`);

  console.log(`${projectLabel} ${distLabel} ${srcLabel}`);
};

/**
 * Compile Sass, then minify with lightningcss.
 * @returns {Promise<void>}
 */
const buildCSS = async () => {
  const srcPath = 'docs/src/css/sass/index.scss';
  const distPath = '_site_dist/index.css';

  const compiled = sass.compile(srcPath, {
    loadPaths: ['docs/src/css/sass'],
    quietDeps: true,
    silenceDeprecations: ['import', 'global-builtin'],
  });

  // @cagov/ds-feature-card ships an invalid declaration, `min-width: calc(30% - var(0px))`,
  // which browsers ignore but lightningcss rejects. Drop it to match browser behavior.
  const css = compiled.css.replace(/^\s*min-width: calc\(30% - var\(0px\)\);$/m, '');

  const { code } = lcssTransform({
    filename: distPath,
    code: Buffer.from(css),
    minify: true,
  });

  buildLog(srcPath, distPath, 'CSS');

  await fs.promises.mkdir('_site_dist', { recursive: true });
  await fs.promises.writeFile(distPath, code);
};

/**
 * Build and bundle JavaScript.
 * @returns {Promise<void>}
 */
const buildJS = async () => {
  const srcPath = 'docs/src/js/index.js';
  const distPath = '_site_dist/built.js';

  buildLog(srcPath, distPath, 'JavaScript');

  await esbuild.build({
    entryPoints: [srcPath],
    bundle: true,
    minify: true,
    outfile: distPath,
  });
};

let firstBuild = true;

export default function (eleventyConfig) {
  eleventyConfig.setLibrary('md', markdown);

  eleventyConfig.on('eleventy.before', async ({ runMode }) => {
    // Only build all of the bundle files during first run, not on every change.
    if (firstBuild || runMode !== 'serve') {
      await buildCSS();
      await buildJS();
      firstBuild = false;
    }
  });

  eleventyConfig.on('eleventy.beforeWatch', async (changedFiles) => {
    // During development changes, only reload the bundles that need reloading.
    if (changedFiles.some((file) => file.includes('docs/src/css/'))) {
      await buildCSS();
    }
    if (changedFiles.some((file) => file.includes('docs/src/js/'))) {
      await buildJS();
    }
  });

  eleventyConfig.addWatchTarget('docs/src/css/');
  eleventyConfig.addWatchTarget('docs/src/js/');

  eleventyConfig.addFilter('calculateReadabilityGrade', (value) => {
    // This readability score grading scale was created with these thresholds intentionally by the ODI content team. These score display values represent the desired values corresponding to the ARI analysis. Using these round numbers is preferable to an equation that returns any integer because it matches hemingwayapp's scoring where grade levels are only returned as whole numbers.
    let readabilityScore = 100;
    if(value >= 16) { readabilityScore = 0; }
    if(value < 16) { readabilityScore = 10; }
    if(value < 15) { readabilityScore = 20; }
    if(value < 14) { readabilityScore = 30; }
    if(value < 13) { readabilityScore = 40; }
    if(value < 12) { readabilityScore = 50; }
    // there is no slot for a score of 60
    if(value < 11) { readabilityScore = 70; }
    if(value < 10) { readabilityScore = 80; }
    if(value < 9) { readabilityScore = 90; }
    if(value < 8) { readabilityScore = 95; }
    if(value < 7) { readabilityScore = 100; }
    return readabilityScore;
  })

  eleventyConfig.addFilter('roundNumber', (value) => {
    return Math.round(parseFloat(value));
  })

  eleventyConfig.addFilter('getScoreColor', (value) => {
    if(parseInt(value) > 89) {
      return 'speedlify-score-good';
    }
    if(value > 49) {
      return 'speedlify-score-ok';
    }
    return 'speedlify-score-bad'
  })

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({
    'docs/src/assets/illustrations': 'illustrations',
  });
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/img': 'img' });
 //  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/article-content': 'content/img' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/papers': 'papers' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/docs': 'docs' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/css/fonts': 'fonts' });
  eleventyConfig.addPassthroughCopy({ '_site_dist/*': '/' });
  eleventyConfig.addPassthroughCopy({ 'docs/src/assets/papers/bobra-water-1': 'papers/bobra-water-1' });


  eleventyConfig.on("eleventy.after", async ({ results }) => {
    // Generate map of all HTML files for tests.
    const files = results.map((r) => {
      const { content, ...paths } = r;
      return paths;
    });

    const htmlFiles = files.filter((p) => p?.outputPath?.endsWith(".html"));
    const htmlFileJson = JSON.stringify(htmlFiles, null, 2);

    fs.writeFileSync("./_site_dist/allFiles.json", htmlFileJson, "utf8");
  });

  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', '11ty.js', 'md'],
    dir: {
      input: '.',
      output: '_site',
      includes: 'docs/site/_includes',
      layouts: 'docs/site/_includes/layouts',
      data: 'docs/site/_data',
    },
  };
};
