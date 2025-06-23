//  Q10: Remove duplicates from an array
// Implement it using:

// A Set

// Manual loop & includes
const nums = [1, 2, 2, 3, 4, 4, 5]; 
// Expected output: [1, 2, 3, 4, 5]


function removeDuplicates(nums){
    // let newSet = new Set(nums)
    // return Array.from(newSet)
    let result = []
    for(let num of nums ){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    return result
}

console.log(removeDuplicates(nums))