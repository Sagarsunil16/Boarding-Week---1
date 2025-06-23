// Q: Write a function that accepts any number of arguments and returns their sum using rest parameters
console.log(sumAll(1, 2, 3, 4)); // → 10

function sumAll(...nums){
    let sum = 0
    for(let num of nums){
        sum+=num
    }
    return sum
}

