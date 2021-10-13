#!/bin/bash
# Build project vue pages from src/projects/*.md

set -e

# Delete previous project files
find src/pages/projects -type f ! -name 'index.vue' -delete

PROJECTS=()
pushd src/projects > /dev/null
# List all filenames under src/projects (except index.json)
PROJECTS=$(find . -type f ! -name 'index.json' | sed -r "s/\.\/([^.]+).json/\1/")
popd > /dev/null


for PROJECT in $PROJECTS; do
  cp scripts/project_page_base.vue src/pages/projects/$PROJECT.vue
  sed -i "s/##PROJECT_ID##/$PROJECT/" src/pages/projects/$PROJECT.vue
done