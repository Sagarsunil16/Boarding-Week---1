//find the missing number in a given integer array of 1 to 100

const arr = [9,8,1,4,2]

function findTheMixingNumber(arr){
    let n = arr.length+1
    let actualSum = 0
    let expectedSum = (n*(n+1))/2
    for(let i=0;i<arr.length;i++){
    actualSum+= arr[i] 

    }
    return expectedSum - actualSum
}

console.log(findTheMixingNumber(arr))


