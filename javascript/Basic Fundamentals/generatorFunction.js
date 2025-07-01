// ## **GENERATOR FUNCTION**

// A generator function is a special type of function in JavaScript that can be used to create iterators. It is defined using the function* keyword, and it uses the yield keyword to pause the function's execution and produce a value. When a generator function is called, it returns an iterator object, which can be used to control the function's execution.


function* display(){
    yield a = 10;
    yield b = 20;
    yield sum = a+b
}

const fn = display()
console.log(fn.next())
console.log(fn.next())
console.log(fn.next())
