//? Asynchronous -> mostly preferable

console.log("Hello world");
setTimeout(()=>{
    console.log("Performing some time consuming Task");
},4000);
console.log("Next task please");


//! This is synchronous -> meaning this is going to take lot of time to execute
//! and in the mean time it will not let the another statement execute

console.time()
for (let i = 0; i < 20; ++i) {
    console.log("Performing some time conssuming task");
}
console.log("Next task");
console.timeEnd();
