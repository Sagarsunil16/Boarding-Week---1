// find the kth max and minimun element in the array 

const arr = [1,2,3,4,5]

function kthMinAndMax(arr,k){
    let n = arr.length
    if(k>n) return "K is Beyond Limit"
    arr.sort((a,b)=>a-b)
    let max = arr[n-k]
    let min = arr[k-1]
   return {max,min}

}

console.log(kthMinAndMax(arr,2))