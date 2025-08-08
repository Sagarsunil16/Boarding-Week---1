function nthLargestNumber(arr,n){
    if(n>arr.length) return "N is beyond limit"
    arr.sort((a,b)=>b-a)
    return arr[n-1]
}

const arr = [1,2,3,4,4,5,6]
console.log(nthLargestNumber(arr,6))