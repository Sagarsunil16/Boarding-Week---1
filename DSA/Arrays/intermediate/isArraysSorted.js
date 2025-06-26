const arr = [1,2,3,4,5,1]
function isArraySorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
            return false
        }
    }
    return true
}

console.log(isArraySorted(arr))