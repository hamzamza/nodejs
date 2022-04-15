const os = require('os');
// info about current user
console.log(`the system utimes is ${os.uptime} seconds`);
const currentOs = {
  name: os.type,
  relese: os.release,
  totalMem: os.totalmem,
  freeMem: os.freemem,
};
console.log(currentOs.name);
