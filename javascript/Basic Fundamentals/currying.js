// ## **CURRYING**

// **Currying** is a technique in functional programming where a function with multiple arguments is transformed into a series of functions, each taking a single argument. Instead of calling the function with all its arguments at once, you call a series of functions that each take one argument and return another function until all arguments are provided. Currying enables partial application of functions, allowing you to create new functions by fixing some of the original function’s arguments.


function result(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const sum = result(1)
const sum2 = sum(2)
const sum4 = sum2(3)
console.log(sum4)