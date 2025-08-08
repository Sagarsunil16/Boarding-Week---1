function nextGreaterElement(nums){
    let stack = []
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



const nums = [12,1,2,4,21,2,4,211]
console.log(nextGreaterElement(nums))