#!/bin/bash
# Build project vue pages from src/projects/*.md

set -e

# Delete previous project files
find src/pages/projects -type f ! -name 'index.vue' -delete

PROJECTS=()
pushd src/projects > /dev/null
# for MD in $(ls *.md); do
#   echo $MD
# done
PROJECTS=$(ls *.md | sed s/.md//)
popd > /dev/null


for PROJECT in $PROJECTS; do
  cp scripts/project_page.vue src/pages/projects/$PROJECT.vue
  sed -i "s/##PROJECT_ID##/$PROJECT/" src/pages/projects/$PROJECT.vue
done