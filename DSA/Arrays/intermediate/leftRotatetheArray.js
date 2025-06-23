//Left rotate the array by one place
const arr = [1,12,12,33,44,55,55]  
function leftRotate(arr){
    let temp = arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp
    return arr
}

console.log(leftRotate(arr))