const os = require('os');
const user = os.userInfo();
console.log(user);
// method returns the system uptime seconds
console.log('log system Uptimes is ');
console.log(os.uptime() / 3600);
// setInterval(
//   () => console.log(Math.floor(Date.now() / (3600 * 24 * 365))),
//   1000
// );
const currentos = {
  name: os.type(),
  realease: os.release(),
  totalMem: os.arch(),
};
