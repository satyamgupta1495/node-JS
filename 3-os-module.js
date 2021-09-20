const os = require('os');

//! info abt user
const user = os.userInfo();
// console.log(user);

//! system uptime
// console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    free: os.freemem()
}
console.log(currentOs);