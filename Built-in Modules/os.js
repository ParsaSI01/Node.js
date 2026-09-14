const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let hostName = os.hostname();
let userInfo = os.userInfo();
let architecture = os.arch();
let upTime = os.uptime();

console.log(totalMemory); // Returns The Total Memory In Bytes As Integer.
console.log(freeMemory); // Returns The Total Free Memory In Bytes As Integer.
console.log(hostName);
console.log(userInfo);
console.log(architecture);
console.log(upTime);
