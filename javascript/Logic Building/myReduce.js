function myReduce(arr,callback,initialValue){
    let acc = initialValue
    for(let i=0;i<arr.length;i++){
        acc = callback(acc,arr[i],i,arr)
    }
    return acc
}
const nums = [1, 2, 3, 4];
console.log(myReduce(nums,(acc,curr)=>acc+curr,0))