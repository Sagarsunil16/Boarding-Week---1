// Two sum

//brute force 
const arr = [1,2,3,4,5]
// function twoSum(arr,target){
//    for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i===j) continue
//         if(arr[i] + arr[j]  === target){
//             return [i,j]
//         }
//     }
// }
// }

//better and optimal apporach
// function twoSum(arr,target){
//     let map = new Map()

//     for(let i=0;i<arr.length;i++){
//         let complement = target - arr[i]
//         if(map.has(complement)){
//             return [map.get(complement),i]
//         }
//         map.set(arr[i],i)
//     }

//     return []
// }


 

console.log(twoSum(arr,10))