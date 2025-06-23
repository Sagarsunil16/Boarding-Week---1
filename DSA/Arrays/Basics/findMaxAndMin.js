//Find the maximum and minimum element in an array.

const arr = [12,43,23,124,34,123]

function findMaxAndMin(arr){
    let max = -Infinity
    let min = Infinity
    for(let num of arr){
        if(num>max){
            max = num
        }
        if(num < min){
            min = num
        }
    }

    return {max,min}
}

console.log(findMaxAndMin(arr))