//  Task: Write a function that keeps track of a counter using closure.

function createCounter(){
    let counter = 0
    return function(){
        counter++
        console.log(counter)
    }
}

const counter = createCounter()
counter()
counter()
counter()