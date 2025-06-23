const arr = [23,2,3,1,7,21,12,44,33]

function isPrime(num){
    console.log(Math.sqrt(num))
    if(num<=1) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false
        }
    }
    return true
}

const primeNumber = arr.filter(isPrime)
console.log(primeNumber)