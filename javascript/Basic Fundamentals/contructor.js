function Person(name,age){
    this.name = name,
    this.age = age
}


Person.prototype.greet =  function(){
    return `Hello, ${this.name}, as per my knowledge you are ${this.age} years old. right?`
}

const person1 = new Person("sagar",24)
const person2 = new Person("pavithra",23)

console.log(person1.greet())
console.log(person2.greet())