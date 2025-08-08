function binarySearch(arr,searchValue){
    let left = 0
    let right = arr.length-1
  
    while(left<right){
        let middle =  Math.floor((left+right)/2)
        if(arr[middle] === searchValue) return middle
        else if(arr[middle] < searchValue){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    return -1
}

const arr = [1,2,3,4,5,6]
console.log(binarySearch(arr,5))