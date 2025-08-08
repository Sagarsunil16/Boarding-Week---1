function monotonicStack(nums){
    let stack = [] //store indices
    let result =  Array(nums.length).fill(-1)

    for(let i=0;i<nums.length;i++){
        while(stack.length && nums[i] > nums[stack[stack.length-1]]){
            let index = stack.pop()
            result[index] = nums[i]
        }
        stack.push(i)
    }
    return result
}


const arr = [55,856,8,45,2,78,9,1]
console.log(monotonicStack(arr))