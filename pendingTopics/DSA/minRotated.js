function minRotated(arr){
    let left = 0;
    let right = arr.length-1
    while(left<right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle] > arr[right]) left = middle+1
        else right = middle
    }
    return arr[left]
}

console.log(minRotated([4,5,6,7,0,1,2]));