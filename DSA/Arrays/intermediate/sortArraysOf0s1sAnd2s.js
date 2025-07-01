// sort an array of 0s , 1s and 2s

const arr = [0,1,2,0,1,2,1,2,0,0,0,1]

function sortArray(arr){
    let n = arr.length -1
    let low = 0
    let mid = 0 
    let high = n 

    while(mid<=high){
        if(arr[mid] === 0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++
            mid++
        }
        else if(arr[mid] === 1){
            mid++
        }
        else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--
        }
    }
    return arr
}

console.log(sortArray(arr))