// ## **FACTORY FUNCTION**

// A factory function in JavaScript is a function that creates and returns an object. It is a way of creating and returning objects in a more controlled and customizable manner. Factory functions are a form of design pattern that enables the creation of objects with specific properties and behaviors.


function factory(name,place){
    return {
        name,
        place,
        printMe(){
            return `My name is ${this.name} and from ${this.place}`
        }
    }
}

const fn = factory("Sagar","Kollam")
console.log(fn.printMe())