const { readFileSync, writeFileSync } = require('fs');

// how to read from the file system
// lets go
// fread file sync waiting antel the file readed then go trogh the other line .

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
writeFileSync(
  './content/result-sync.txt',
  `Here is the results : ${first}
   and second : ${second}`
);
// here we open a file even if it's not existe
// we can pass another  parrametere to the writeFileSync function /
writeFileSync(
  './content/result-sync-withaparameter.txt',
  `Here is the results : ${first}
     and second : ${second}`,
  { flag: 'a' }
  //   the a here means : add to the current text don't uppdate it all
);
