// Write a function that takes an array and returns true if it contains any duplicate values, or false otherwise.

const arr = [12,33,1,121,1,21]
function duplicateExistsUsingArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                return true
            }
        }
    }
    return false
}


function duplicatesExistsUsingHash(arr){
    let unique = new Set(arr)
        console.log([...unique])
    return [...unique].length !== arr.length

}

console.log(duplicateExistsUsingArray(arr))
console.log(duplicatesExistsUsingHash(arr))
