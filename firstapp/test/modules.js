// why whould we use modules actually
// required files : secret.js sausecretfunction.js

// the nomrmal way to import
const names = require('./secret');
const sayHi = require('./saysecretfunction');

// the ES6 notation

console.log(names.peter);
sayHi(names.jhon);

// console.log(names.secret); this is imposible cuz we didn't ixport secret
// sayHi('susan');
// sayHi(names.jhon);

// sayHi(names.peter);
// in this example we will write alote of code so we have to use the modules
//  mocules encapsulat ed code only share minimum
// we will create a new file : named secret.js
