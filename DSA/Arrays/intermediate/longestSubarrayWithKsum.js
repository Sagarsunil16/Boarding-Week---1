// Longest subArray with sum K
const arr = [1,2,1,1,1,2,2,3,1,1]
console.log(longestSubArray(arr,4))
//Brute force approach

// function longestSubArray(arr,k){
//     let maximum = 0
//     for(let i=0;i<arr.length;i++){
//         let sum = 0
//         for(let j=i;j<arr.length;j++){
//             sum+= arr[j]
//             if(sum === k){
//                 maximum = Math.max(maximum, j-i+1)
//             }
//         }
//     }
//     return maximum
// }




//optimal apppraoch using prefix sum and hashMap

// function longestSubArray(arr,k){
//     let map = new Map()
//     let sum = 0
//     let maxlength = 0

//     for(let i=0;i<arr.length;i++){
//         sum+= arr[i]

//         // Case 1: Entire subarray from 0 to i sums to k
//         if(sum === k){
//             maxlength = i+1
//         }
//         // Case 2: There exists a prefix sum we can subtract to get k
//         if(map.has(sum-k)){
//             const prevIndex = map.get(sum-k)
//             maxlength = Math.max(maxlength,i-prevIndex)
//         }

//          // Only store the first occurrence of each prefix sum
//          if(!map.has(sum)){
//             map.set(sum,i)
//          }
//     }

//     return maxlength
// }







// if the elements are non negative we can use two pinter approach with sliding window for optimal solution
function longestSubArray(arr,k){
    let sum = 0;
    let maxlength = 0;
    let left =0;

    for(let right =0;right<arr.length;right++){
        sum+= arr[right]

        while(sum>k && left<=right){
            sum-= arr[left];
            left++
        }

        if(sum===k){
            maxlength = Math.max(maxlength,right-left+1)
        }
    }
    return maxlength
}