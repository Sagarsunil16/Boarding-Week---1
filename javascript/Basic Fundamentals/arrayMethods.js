const arr = [1,2,3,4,5,6,6,7]

// Write a function that takes an array of numbers and returns a new array with each number doubled using .map.

const mappedArray =  arr.map((num)=>num*2)
console.log("2,4,6,8...")
// Write a function that returns only the even numbers from an input array using .filter.

const filteredArray = arr.filter((num)=>num%2==0)
console.log("2,4,6,8...")
//Write a function that sums all the numbers in an array using .reduce.

const reducedArray = arr.reduce((acc,curr)=>acc+curr,0)

console.log(mappedArray,filteredArray,reducedArray)


const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 17 }
];
// Filters out users under 18.

const userUnder18 = users.filter((user)=>user.age<18)
console.log(userUnder18)
// Maps the remaining users to only their names in uppercase.
const upperCaseNames = userUnder18.map((user)=>user.name.toUpperCase())
console.log(upperCaseNames)
// Reduces the list of names into a single string separated by commas.
const onlyNames = upperCaseNames.join(",")
console.log(onlyNames)