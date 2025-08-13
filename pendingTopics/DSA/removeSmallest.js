function removeSmallest(arr){
    let min = Math.min(...arr)
    return arr.filter((a)=>a!==min)
}

console.log(removeSmallest([1,2,3,4,5,6]))