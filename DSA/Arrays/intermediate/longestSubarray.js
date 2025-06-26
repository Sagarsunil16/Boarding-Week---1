//Longest subArray with K Sum
const arr = [1,2,3,1,1,1,4,2,3]
function longestSubArray(arr,k){
    let maxLength = 0
    for(let i=0;i<arr.length;i++){
       let sum = 0
        for(let j=i;j<arr.length;j++){
            sum+= arr[j]
            if(sum===k){
                maxLength = Math.max(maxLength,j-i+1)
            }
        }
    }

    return maxLength
}

console.log(longestSubArray(arr,3))