const person = {
  name: "Priya",
  age: 28,
  address: {
    city: "Chennai",
    pin: 600001
  }
};

// Use object destructuring to extract name and city (from address) into standalone variables
const name = person.name
const address = person.address

// Create a shallow copy of person and change only the name property in the copy (do not change the original!).
// Add a new key email to the copy using the spread operator.

const copy = {...person, name:"Pavithra",email:"Pavi@gmail.com"}
console.log(person)
console.log(copy)