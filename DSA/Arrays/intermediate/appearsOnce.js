// Find the number that appears once and the others twice

const arr = [1,1,2,3,3,4,4]

//Better Apporach
// function appearsOnce(arr){
//     let hash = new Map()
//     for(let num of arr){
//         hash.set(num,hash.get(num)?hash.get(num)+1 : 1)
//     }

//     for( let [key,value] of hash){
//         if(hash.get(key) == 1){
//             return key
//         }
//     }

// }

//optimal approach

function appearsOnce(arr){
    let xor = 0
    for(let i=0;i<arr.length;i++){
        xor = xor ^ arr[i]
    }
    return xor
}

console.log(appearsOnce(arr))