class Queue {
    constructor(){
        this.items = []
    }
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequque(){
        if(this.isEmpty()) return null
        return this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    print(){
        console.log(this.items.join("<-"))
    }
}





const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.peek())
queue.print()
queue.dequque()
queue.dequque()
queue.print()