let arr = [12,34,34,2,123,12,43,5555]

function secondLargest(arr){
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(arr))