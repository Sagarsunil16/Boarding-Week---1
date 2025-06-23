// Write a function that returns frequency of elements in array
const arr = [1,12,12,33,44,55,55]
function frequency(arr){
    let freq = new Map()
    for(let num of arr){
       freq.set(num,(freq.get(num) || 0)+1)
    }
    return freq
}

console.log([...frequency(arr)])