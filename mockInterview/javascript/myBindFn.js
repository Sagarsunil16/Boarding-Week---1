Function.prototype.myBind = function(context,...args){
    const fn  = this
    return function(...newArgs){
        return fn.apply(context,[...args,...newArgs])
    };
}

const person = {
    name:"Sagar"
}

function greet(greetings){
    console.log(`${greetings}, ${this.name}`)
}


const bindedGreet = greet.myBind(person,"Hello")
bindedGreet()