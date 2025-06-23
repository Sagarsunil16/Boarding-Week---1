// Q: Write a function that accepts a callback and executes it after printing "Processing..."
functionWithCallback(() => console.log("Done!"));


function functionWithCallback(callback){
    console.log("Processigg")
    callback()
}
