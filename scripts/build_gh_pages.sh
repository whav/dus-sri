!#/bin/sh
cd ..
mkdir -p gh-pages
cp index.html gh-pages/
cp -R content/ gh-pages/
NODE_ENV=production node_modules/.bin/webpack -p --config webpack.config.prod.js
