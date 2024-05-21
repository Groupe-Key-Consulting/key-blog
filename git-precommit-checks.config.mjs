export default {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: 'You’ve got leftover conflict markers',
      regex: /^[<>|=]{4,}/m,
      nonBlocking: false,
    },
    {
      filter: /\.([j|t]s)?(astro)?(mdx)?$/,
      message: 'console.log() found',
      nonBlocking: false,
      regex: /console.log\(/,
    },
  ],
};
