//Find the missing number in given array within the N numbers
//brute force apporach
const arr = [1,2,4,5]
// function missingNumber(arr,n){

// for(let i=1;i<=n;i++){
//    let flag = 0
//    for(let j=0;j<arr.length;j++){
//     if(i === arr[j]){
//         flag = 1
//         break;
//     }
//    }
//    if(flag === 0){
//     return i
//    }
// }
// return "No missing number"
// }

//better approach

// function missingNumber(arr){
//    let hash = new Map()
//    for(let num of arr){
//     hash.set(num,true)
//    }
//    for(let i=1;i<=arr.length;i++){
//     if(!hash.has(i)){
//         return i
//     }
//    }
//    console.log(hash)
// }

//optimal approach 

// function missingNumber(arr,n){
//     let sum = n * (n+1) / 2
//     let arrSum =0
//     for(let i=0;i<arr.length;i++){
//         arrSum+= arr[i]
//     }

//     return sum - arrSum
// }


//optimal approach using XOR

function missingNumber(arr,n){
    let xor1 = 0
    let xor2 = 0
    for(let i=0;i<n;i++){
        xor1 = xor1 ^ arr[i]
        xor2 = xor2 ^ i+1
    }
   return xor1 ^ xor2
}

console.log(missingNumber(arr,5))

