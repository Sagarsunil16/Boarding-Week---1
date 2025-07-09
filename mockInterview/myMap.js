function myMap(arr,callback){
    let result = []
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}


const arr = [1,2,4,5,5]

const result = myMap(arr,((num)=>num*2))
console.log(result)