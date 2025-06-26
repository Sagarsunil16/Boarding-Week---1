// Rotate Array by K Elements (Right Rotation)
const arr =  [1, 2, 3, 4, 5]

function rotateArrayRight(arr,k){
    k = k % arr.length; // Handle k > len
    let rightArr = arr.slice(arr.length-k)
    let newArr = arr.slice(0,arr.length-k)
    return [...rightArr,...newArr]
}

console.log(rotateArrayRight(arr,2))