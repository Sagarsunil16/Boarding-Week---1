const arr = [23,121,4,231,1,224,1,23311,112]
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,middle))
    let right =  mergeSort(arr.slice(middle))
    return merge(left,right)
}


function merge(left,right){
    let sorted = []

    while(left.length>0 && right.length>0){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


console.log(mergeSort(arr))