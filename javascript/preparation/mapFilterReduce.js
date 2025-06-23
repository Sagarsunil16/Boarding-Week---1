//  Q3: Use map(), filter(), and reduce() on this array:
// Get an array of even numbers
// Multiply all numbers by 2
// Find the sum of all numbers

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumberArrays = numbers.filter((num)=>num%2==0);
const sum = numbers.reduce((acc,curr)=>acc+curr,0)
const newArr = numbers.map((num)=>num*2);

console.log(evenNumberArrays)
console.log(sum)
console.log(newArr)