const arr = [1,2,3,4,5,6,7,8,9]


function linearSearch(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === elem){
            return `Found at index ${i}`
        }
    }
    return 'Not Found'
}



function binarySearch(arr,elem){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]===elem){
            return middle;
        }else if(arr[middle]<elem){
            left = middle+1;
        }else{
            right = middle-1
        }
    }
    return -1
}


console.log(linearSearch(arr,8))
console.log(binarySearch(arr,8))