#!/bin/bash
DIFF=$(git diff --diff-filter=ACM --name-only origin/master | grep '.css$' | xargs | sed 's/ *$//g')

if [[ $DIFF == '' ]]; then
  exit 0
fi
npx stylelint -- $DIFF
