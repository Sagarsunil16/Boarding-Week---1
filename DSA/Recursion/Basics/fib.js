// Fibonacci number at Nth position

function fib(n){
    if(n<2){
        return n
    }
    console.log(`${n}->`)
    return fib(n-1) + fib(n-2)
}

console.log(fib(5))