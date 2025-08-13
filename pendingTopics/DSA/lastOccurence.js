function lastOccurence(arr,target){
    let left = 0;
    let right = arr.length-1
    let result = -1
    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle] === target){
            result = middle
            left = middle + 1
        }
        else if(arr[middle] < target){
            left = middle + 1
        }else{
            right - middle - 1
        }
    }
    return result
}

console.log(lastOccurence([1,2,2,2,3], 2))