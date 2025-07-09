class Stack{
    constructor(){
        this.items = new Array()
    }

    isEmpty(){
        return this.items.length===0
    }

    push(element){
        this.items.push(element)
        return
    }

    pop(){
        if(this.isEmpty()) return 
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        let result = ""
        for(let i=this.items.length-1;i>=0;i--){
           result+=`${this.items[i]}->`
        }
        return result + "TOP"
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.print())
console.log(stack.peek())
console.log(stack.pop());
console.log(stack.print())


