const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'tmp-app');
const dest = __dirname;

const files = fs.readdirSync(src);
for (const file of files) {
    fs.renameSync(path.join(src, file), path.join(dest, file));
}
fs.rmdirSync(src);
console.log('Moved successfully!');