#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New desploy"
git push -f git@github.com:jhjacoz96/portafolio.git master:gh-pages

cd .