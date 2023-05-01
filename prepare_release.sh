#!/bin/sh

version=$1

cd dist

rm *.zip

zip -r KontrolSystem2-${version}.zip BepInEx

gh release upload v${version} KontrolSystem2-${version}.zip
gh release upload v${version} ../Tools/vscode/to2-syntax/to2-syntax-0.0.1.vsix
gh release upload v${version} ../Tools/vscode/to2-syntax/to2-syntax-0.0.2.vsix
mv ./Tools/vscode/to2-syntax/out/server.js ../Tools/vscode/to2-syntax/out/lsp-server.js 
gh release upload v${version} ../Tools/vscode/to2-syntax/lsp-server.js
