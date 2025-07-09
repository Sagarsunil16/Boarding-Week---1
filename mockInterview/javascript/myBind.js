Function.prototype.myBind = function(context,...bindargs){
    // Store reference to the function on which myBind is called
    const originalFunction = this

    return function(...callargs){
        return originalFunction.apply(context,[...bindargs,...callargs]);
    }
}

function greet(greeting,name){
    console.log(`${greeting}, ${name}!, I am ${this.role}`)
}
const person = {role:"developer"}

const greetDeveloper = greet.myBind(person,"hello")
greetDeveloper("sagar")