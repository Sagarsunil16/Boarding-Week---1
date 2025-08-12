
function isPrime(num){
    if(num<2) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

function primeInArr(arr){
    let result = []
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])) result.push(arr[i])
    }
    return result
}

console.log(primeInArr([1,2,3,4,5,6,7,8,9,11,13,151,171,17]))

