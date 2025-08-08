function thirdLargestElement(arr){
    let largest = -Infinity
    let secondLargest = -Infinity
    let thirdLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            thirdLargest =  secondLargest
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            thirdLargest = secondLargest
            secondLargest = arr[i]
        }else if(arr[i]<secondLargest && arr[i]>thirdLargest){
            thirdLargest = arr[i]
        }
    }
    return thirdLargest
}


const arr = [1,2,4,5,6,7]
console.log(thirdLargestElement(arr))