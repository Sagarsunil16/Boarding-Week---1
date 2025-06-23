// Count the number of even and odd numbers in an array.
const arr = [12,43,23,124,34,123]
function countEvenAndOddNumber(arr){
    let evenCount = 0
    let oddCount = 0
    for(let num of arr){
        if(num%2==0){
            evenCount++
        }else{
            oddCount++
        }
    }
    return {evenCount,oddCount}
}

console.log(countEvenAndOddNumber(arr))