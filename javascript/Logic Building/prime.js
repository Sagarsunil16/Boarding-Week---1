// Check if a number is prime.

function isPrime(num){
   if(num<2){
    return false
   }
   for(let i=2;i<num;i++){
    if(num%i === 0){
        return false
    }
   }
   return true
}

console.log(isPrime(7))
console.log(isPrime(9))
console.log(isPrime(11))