// console.log(module);
var url = 'http://wylogger.io/log';
function log(message) {
  console.log(message);
}

console.log(__dirname);
setInterval(() => console.log('interval seted'), 1000);
let i = 0;
for (i = 0; i < 10; i++) {
  console.log('hello world');
}
// while (1) {
//   setTimeout(() => console.log('timeout'), 1000);
// }
