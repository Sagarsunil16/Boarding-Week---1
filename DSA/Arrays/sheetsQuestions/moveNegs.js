//Move all the negative numbers to one side of an array

const arr = [1,2,3,4,-1,2,-2,-5,2,-1]

function moveNegative(arr){
    let i = 0

    for(let j=0;j<arr.length;j++){
        if(arr[j]<0){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++
        }
    }
    return arr
}

console.log(moveNegative(arr))