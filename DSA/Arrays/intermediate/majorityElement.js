//Majority elements in the array appears more than N/2 times

const arr = [1,2,3,1,1,1,2,1]
//better approach
// function MajorityElement(arr){
//     if(arr.length<=1) return arr[0]

//     let majority =  Math.floor(arr.length/2)
//     let map = new Map()

//     for(let num of arr){
//         map.set(num,(map.get(num) || 0)+1)
//         if(map.get(num) > majority){
//             return num
//         }
//     }
// }


//optimal approach with moores voting algo 

function MajorityElement(arr){
    let count = 0 
    let candidate  = null

    for(let num of arr){
       if(count == 0){
        candidate = num
       }

       count+= candidate === num ? 1 : -1
    }
    return candidate
}


console.log(MajorityElement(arr))