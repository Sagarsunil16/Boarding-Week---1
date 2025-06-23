//Find the second largest number in an array

const arr = [10, 5, 8, 20, 15]; 
// Expected output: 15

function secondLargest(arr){
    let largest = -Infinity
    let sLargest = -Infinity
    for(let num of arr){
        if(num>largest){
            sLargest = largest
            largest = num
        }else if(num>sLargest && num<largest){
            sLargest = num
        }
    }
    return sLargest
}

console.log(secondLargest(arr))