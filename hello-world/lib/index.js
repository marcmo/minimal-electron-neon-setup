const addon = require('../native/index.node');

console.log("here we are");
console.log(addon.helloWorld());

module.exports = addon;
