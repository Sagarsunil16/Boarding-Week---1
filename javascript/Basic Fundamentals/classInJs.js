//class

class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    printMe(){
        console.log(`My name is ${this.name} and am ${this.age} years old`)
    }
}


let p1 = new person("sagar",28)
p1.printMe()