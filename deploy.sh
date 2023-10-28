#!/usr/bin/env sh
yarn run build
cd docs/.vuepress/dist
git init	
git branch -M main
git add -A
git commit -m 'deploy'
git push -f git@github.com:ppntai/vscode-ide-docs.git main:gh-pages