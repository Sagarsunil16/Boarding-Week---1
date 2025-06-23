//Move all the zeores to the end of the array
const arr = [12,34,30,0,0,23,0,2,0,12,34,5]
function moveZeroes(arr){
    let j = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j] = arr[i]
            j++
        }
    }
    for(let i=j;i<arr.length;i++){
        arr[i] = 0
    }
    return arr
}
console.log(moveZeroes(arr))
//  "Move all the zeroes to the end of the array" is absolutely correct, efficient, and optimal! ✅