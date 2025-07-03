// Question 2: Shallow vs Deep Copy
// Write a function that performs a deep clone of an object.
// Test it with a nested object and show that changes in the clone don't affect the original.

const obj = {
    name:"sagar",
    age:22,
    address: {
        city: "Kochi",
        pin: 682001
    }
}

function deepCloning(obj){
    const newObj = structuredClone(obj)
    newObj.name = "Pavithra"
    newObj.address.city = "New Delhi"
    console.log("Original object",obj)
    console.log("Copy Object",newObj)
}


deepCloning(obj)