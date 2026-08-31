// const { send, encrypt } = require("./request");
// const { read } = require("./internals/response");

const { send, read } = require('./internals');

function makeRequest(url, data) {
    send(url, data);
    return read();
}

makeRequest('www.google.com', 'Node JS');

// (function (exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
//     console.log(module);
// });

/*
console.log(exports);
console.log(require);
console.log(module);

console.log(__filename);
console.log(__dirname);
*/
