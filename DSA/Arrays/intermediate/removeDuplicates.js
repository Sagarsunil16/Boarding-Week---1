//Remove duplicates from an array.
let arr = [12,23,12,34,56,23,34]
function removeDuplicates(arr){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
            j--
        }
    }
}
return arr
}


