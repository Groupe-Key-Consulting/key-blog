export default {
  '*.{sh,js,jsx,ts,tsx,css,scss,md,html,xml,sql,sh,json,package.json,astro,mdx}':
    ['prettier --write', 'eslint src', 'git add'],
};
