//Find the largest among 3 numbers.

function largest(...values){
    let largest = -Infinity
    for(let value of values){
        if(value>largest){
            largest = value
        }
    }
    return largest
}


console.log(largest(487,58,54))