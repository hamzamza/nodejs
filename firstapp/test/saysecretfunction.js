const sayHi = (name) => {
  console.log(`hello there ${name}`);
};

// ES6 module
// export default { sayHi };
// the normale way

module.exports = sayHi; // export as default means that you
// can use it directely wihout making the .this
