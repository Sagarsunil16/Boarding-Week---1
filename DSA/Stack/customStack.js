class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()) return "Stack is empty"
        return this.items[this.items.length-1]
    }

    print(){
        if(this.isEmpty()) return "Stack is empty"

        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                console.log(`${this.items[i]} at index ${i}`)
            }
        }
    }

}


const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
stack.pop()
console.log(stack.peek())
stack.print()

