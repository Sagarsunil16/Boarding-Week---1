//Find the maximum and minimum element in the array

const arr= [1,2,3,4,5]

function maxAndMin(nums){
    let max = -Infinity
    let min = Infinity

    for(let num of nums){
        if(num>max){
            max = num
        }
        if(num<min){
            min = num
        }
    }
    return {max,min}
}

console.log(maxAndMin(arr))