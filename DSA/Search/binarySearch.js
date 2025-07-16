const arr = [1,2,3,4,5,6]
function binarySearh(arr,value){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let middle =  Math.floor((left + right)/2)
        if(arr[middle] === value){
            return middle
        }else if(arr[middle] < value){
            left = middle+1
        }else{
            right = middle -1
        }
    }
    return -1
}


console.log(binarySearh(arr,1))