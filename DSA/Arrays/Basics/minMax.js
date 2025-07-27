const arr = [1,2,4,5,12,2]

function maxMin(arr){
    let max = -Infinity
    let min = Infinity

    for(let num of arr){
        if(num>max){
            max = num
        }
        if(num<min){
            min = num
        }
    }

    return {max,min}
}

console.log(maxMin(arr))