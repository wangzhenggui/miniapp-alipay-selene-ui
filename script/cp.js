// scripts/cp.js
const fs = require('fs-extra');
const path = require('path');

// const ingores = [
//   'app.js',
//   'app.acss',
//   'app.json',
// ]

fs.copySync(path.join(__dirname, '../src'), path.join(__dirname, '../demo/components'), {
  filter(src, des){
    return !src.endsWith('.js')
  }
});
// copy file
fs.copySync(path.join(__dirname, '../src'), path.join(__dirname, '../es'), {
  filter(src, des){
    return !src.endsWith('.js');
  }
});


// function isIngore(filePath) {
//   return ingores.find(item => filePath.endsWith(item))
// }