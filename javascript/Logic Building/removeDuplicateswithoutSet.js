// Q: Write a function to remove duplicates without using Set
const arr = [1, 2, 3, 2, 4, 1];


function removeDuplicates(arr){
    let seen = {}
    let result = []
    for(let num of arr){
        if(!seen[num]){
            seen[num] = true
            result.push(num)
        }
    }
    return result
}

console.log(removeDuplicates(arr))