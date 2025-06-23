//check is the given array is sorted or not
function checkIsArraySorted(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]>arr[i+1]){
         return false
    }
}
    return true
}
let arr = [1,2,3,4,5]
console.log(checkIsArraySorted(arr))