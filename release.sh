#!/bin/bash
echo "execute webpack packing......"
npm run build
if [ $? != 0 ]; then
  exit 1
fi
echo "webpack done ! "
#echo "move iconfont"
#mkdir -p dist/assets/demo/iconfont
#cp -rf src/components/iconfont/iconfont.* dist/assets/demo/iconfont
cd dist
tar -czvf demo.tar.gz ./assets ./template
rm -rf ./assets ./template
cd ..
echo "build to dist done ! "