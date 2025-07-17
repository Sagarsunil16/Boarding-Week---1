const arr = [23,121,4,231,1,224,1,23311,112]

function quickSort(arr){
    if(arr.length<2){
        return arr
    }

    let length =  arr.length
    let left = []
    let right = []
    let pivot = arr[Math.floor(length/2)]

    for(let i=0;i<length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))