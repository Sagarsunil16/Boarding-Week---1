function myFilter(arr,callback){
    let result = []
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
             result.push(arr[i])
        }
       
    }
    return result
}

const nums = [1, 2, 3, 4];
console.log(myFilter(nums,(num)=>num%2==0))