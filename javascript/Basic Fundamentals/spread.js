// Q: Merge two objects using spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };


const mergedObj = {...obj1,...obj2}
console.log(mergedObj)