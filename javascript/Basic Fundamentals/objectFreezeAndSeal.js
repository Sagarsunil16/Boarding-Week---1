// ## **OBJECT {FREEZE AND SEAL}**

// In JavaScript, the Object. Freeze() and Object. Seal() methods are used to prevent modifications to objects. Both methods take an object as an argument and return the same object. The main difference between the two methods is that Object. Freeze() makes the object completely immutable, while Object. Seal() only prevents the addition or deletion of properties.


let obj = {
    name:"ayush",
    age:"23"
}

console.log(obj)
// Object.freeze(obj)
obj.name = "sagar"
console.log(obj)
Object.seal(obj)
obj.place = "delhi"
delete obj.name

console.log(obj)