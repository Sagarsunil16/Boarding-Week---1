//Linear Search
const arr = [12,34,30,0,0,23,0,2,0,12,34,5]
function linearSearch(arr,num){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === num){
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr,10))    
