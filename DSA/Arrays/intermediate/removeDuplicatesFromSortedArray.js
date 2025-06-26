const arr = [1,2,2,3,4,4,5,5,5,5]
function removeDuplicates(arr){
    let j = 0
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[j]){
            j++
            arr[j] = arr[i]
         
        }
    }
    arr.length = j + 1
    return arr
}

console.log(removeDuplicates(arr))