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
        if(this.isEmpty()) return
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        console.log('TOP')
        for(let i=this.items.length-1;i>=0;i--){
            console.log(this.items[i])
        }
    }

    
}


const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
stack.pop()
console.log(stack.peek())