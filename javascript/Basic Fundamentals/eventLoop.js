//4. ✅ Event Loop, Promises, Async/Await
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Predict the output
//start -> end -> promise-> timeout