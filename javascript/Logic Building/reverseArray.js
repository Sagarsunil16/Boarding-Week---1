// Write function to reverse array without using reverse()

function reverse(arr){
    let result = []
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result
}

const nums = [1, 2, 3, 4];
console.log(nums)
console.log(reverse(nums))