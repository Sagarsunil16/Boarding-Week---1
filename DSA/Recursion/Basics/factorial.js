// Factorial of a number

function Factorial(n){
    if(n<=1){
        return 1
    }
   return n * Factorial(n-1)
}

console.log(Factorial(5))