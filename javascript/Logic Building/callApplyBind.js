//call
// 📞 1. call() — Call the function NOW with this and arguments separated by commas
// ✅ Use when: You want to call the function immediately with a specific this.
const person1 = {name:"sagar"}
const person2 = {name:"Pavithra"}
function greet(greeting,punctuation){
    console.log(`${greeting} ${this.name} ${punctuation}`)
}
greet.call(person1,'Hello','!')
greet.call(person2,'Welcome','!')



//apply
// 📜 2. apply() — Just like call, but you give the arguments in an array
// ✅ Use when: You already have arguments as an array.
greet.apply(person1,["Hey","!!"])


//bind
// 📦 3. bind() — Don't call it now, just bind it to a new function
// ✅ Use when: You want to save a function with this already fixed, and call it later.
const greetSagar = greet.bind(person1,"Hello","!")
const greetPavithra =  greet.bind(person2,"Hey","!")

greetSagar()
greetPavithra()


 