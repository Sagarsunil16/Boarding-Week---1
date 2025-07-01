// ## **ASYNC AWAIT**

// **`async` and `await`** are keywords in JavaScript that simplify working with asynchronous code, allowing you to write code that is easier to read and maintain. They are built on top of **Promises**, enabling a more synchronous-like style of handling asynchronous operations.

// ### Overview

// 1. **`async` Function**:
//     - An `async` function is a function that is declared with the `async` keyword. This function always returns a **Promise**.
//     - If the function returns a value, that value is automatically wrapped in a resolved Promise. If it throws an error, the Promise is rejected.
// 2. **`await` Keyword**:
//     - The `await` keyword can only be used inside an `async` function. It pauses the execution of the function until the Promise is resolved or rejected.
//     - When you `await` a Promise, the execution of the async function is paused, and the resolved value of the Promise is returned. If the Promise is rejected, it throws an error that can be caught with `try/catch`.


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched")
        },3000)
    })
}



async function getData(){
    try {
        console.log("fethching data")
        const response = await fetchData()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


getData()