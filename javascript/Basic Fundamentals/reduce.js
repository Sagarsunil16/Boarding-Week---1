// Q: Find the sum of all numbers in an array using reduce
const arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc,curr)=>acc+curr,0)
console.log(sum)