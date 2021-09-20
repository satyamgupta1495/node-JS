// const fs = require('fs')
// fs.readFileSync()

//! OR

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/result.txt', `here is the result ${first}, ${second}`)

//! appending

writeFileSync('./content/result.txt', `here is the result ${first}, ${second}`, {flag:'a'})