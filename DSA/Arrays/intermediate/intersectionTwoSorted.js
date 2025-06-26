// Intersection of two sorted arrays
//Brute force approach
const arr1 = [1,2,2,3,3,4,5,6]
const arr2 = [2,3,3,5,6,6,7]
// function intersection(arr1,arr2){
//     let visited = new Array(arr2.length).fill(0)
//     let result = []
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i] === arr2[j] && visited[j]==0){
//                 result.push(arr1[i])
//                 visited[j] = 1
//                 break;
//             }
//         }
//     }
//     return result
// }


//optimal approac using two pointers as it is already sorted

function intersection(arr1,arr2){
    let i = 0;
    let j = 0;
    let result = [] 
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i])
            i++
            j++
        }else if(arr1[i]<arr2[j]){
            i++
        }else{
            j++
        }
    }
    return result
}

console.log(intersection(arr1,arr2))