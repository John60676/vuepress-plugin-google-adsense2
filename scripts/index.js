const fs = require('fs');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(distPath, './src');

fs.readdir(srcPath, (err, files) => {
  if (!files) return;
  files.forEach(fileName => {
    const sourceFile = path.join(srcPath, fileName);
    const destPath = path.join(distPath, fileName);
    fs.renameSync(sourceFile, destPath);
  });
  fs.unlinkSync(path.join(distPath, 'tsconfig-cjs.tsbuildinfo'));
  fs.unlinkSync(path.join(distPath, 'tsconfig-esm.tsbuildinfo'));
  fs.rmdirSync(srcPath);
});
