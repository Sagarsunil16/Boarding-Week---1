//find the largest element in the array
const arr = [12,34,2,31,14,4,124]
function largest(arr){
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }   

    return largest
}

console.log(largest(arr))