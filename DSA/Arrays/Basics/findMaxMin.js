function findMin(arr){
    let min = Infinity
    for(let num of arr){
        if(num<min){
            min = num
        }
    }
    return min
}


function findMax(arr){
    let max = -Infinity
    for(let num of arr){
        if(num>max){
            max = num
        }
    }
    return max
}



const arr =[21,4,32,2,441,1]
console.log(findMin(arr))
console.log(findMax(arr))