function kthLargest(nums,k){
    nums.sort((a,b)=>a-b)
    return nums[k-1]
}