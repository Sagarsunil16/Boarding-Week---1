// find the maximum Subarray kadanes algo and also print it

const arr = [4,-1,0]


function maxSubArray(arr){
    let currentSum = arr[0]
    let maxSum = arr[0]
    let start=0,end=0,tempStart=0

    for(let i=1;i<arr.length;i++){
        if(arr[i]>currentSum+arr[i]){
            currentSum = arr[i]
            tempStart = i
        }else{
            currentSum+=arr[i]
        }

        if(currentSum>maxSum){
            maxSum = currentSum
            start = tempStart,
            end = i
        }
    }
    console.log("SubArray:",arr.splice(start,end+1))
    return maxSum
}

console.log(maxSubArray(arr))