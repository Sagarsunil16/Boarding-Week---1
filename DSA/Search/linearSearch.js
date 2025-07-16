const arr = [1,2,3,4,5,6]

function linearSearch(arr,searchElem){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === searchElem){
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr,7))