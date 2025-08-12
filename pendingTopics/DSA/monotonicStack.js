function nextGreaterElement(nums){
    let stack = [] //to store indexes
    let result = new Array(nums.length).fill(-1)

    for(let i=0;i<nums.length;i++){
        while(stack.length && nums[i] > nums[stack[stack.length-1]]){
            let index = stack.pop()
            result[index] = nums[i]
        }
        stack.push(i)
    }
    return result
}

console.log(nextGreaterElement([2, 1, 2, 4, 3]));
// Output: [4, 2, 4, -1, -1]