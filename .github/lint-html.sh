#!/bin/bash
DIFF=$(git diff --diff-filter=ACM --name-only origin/master | grep '.html$' | xargs | sed 's/ *$//g')

if [[ $DIFF == '' ]]; then
  exit 0
fi
html-validate -- $DIFF
