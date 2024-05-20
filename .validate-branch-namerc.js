module.exports = {
  pattern: '^(main)$|^(perf|refactor|bump|feat|fix|rel(?:ease)?)/.+$',
  errorMsg:
    '🤨 The branch that you are trying to push does match our conventions, ' +
    'rename it with `git branch -m <current-name> <new-name>`',
};
