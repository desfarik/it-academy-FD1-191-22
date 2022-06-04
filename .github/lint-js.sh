#!/bin/bash
DIFF=$(git diff --diff-filter=ACM --name-only origin/master | grep -E "(html|js)$" | xargs | sed 's/ *$//g')
echo $DIFF
if [[ $DIFF == '' ]]; then
  exit 0
fi
eslint -- $DIFF


