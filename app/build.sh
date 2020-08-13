#!/bin/bash
echo "app build package"
echo "start ........"
npm run agile-build
cp ./logo.ico ../output/win-ia32-unpacked/resources/
echo "client build success!!!"
cd ..
echo "build web js"
npm run client-build
echo "js build success"
mv ./dist ./output/win-ia32-unpacked/resources/
echo "build complete"


