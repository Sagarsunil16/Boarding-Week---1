function myMap(arr,callback){
    result = []
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}


const nums = [1, 2, 3, 4];

console.log(myMap(nums,(num)=>num*2))