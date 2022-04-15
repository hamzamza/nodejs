const { readFile, writeFile } = require('fs');
// in this case the readFile funciton don't wait antel the reading is finished so we gotte use call funcitons to solve this problem
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `this is first ${first}
      and second ${second}
       `,
      { flag: 'a' },

      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});
console.log('printed first');
// in this case printed first wel echo out before the funciton that we put inside  the readFile functions as a call back function
