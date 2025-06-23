// Search for an element in an array.
const arr = [12,43,23,124,34,123]
function search(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(elem === arr[i]){
            return true
        }
    }
    return false
}

console.log(search(arr,124))