const path = require('path');
console.log(path.sep);
path.sep = '/';
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log('this is base path  ' + base);
const dd = path.join('content', 'subfolder', 'test.txt');
const absolute = path.resolve(dd);
console.log('this is absolute path  ' + absolute);
