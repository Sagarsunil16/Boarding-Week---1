//Remove duplicates from sorted array

const arr = [1,12,12,33,44,55,55]
function removeDuplicates(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    } 
    arr.length = i+1
    return arr

}

//removes the duplicate if the array is sorted
// function removeDuplicates(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==arr[i+1]){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr.length
// }
console.log(removeDuplicates(arr))