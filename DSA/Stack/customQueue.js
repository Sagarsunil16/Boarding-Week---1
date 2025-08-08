class Queue{
    constructor(){
        this.items = []
    }
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        if(this.isEmpty()) return 'queue is empty'
        return this.items.shift()
    }
    peek(){
         return this.isEmpty() ? 'Queue is empty' : this.items[0];
    }
    print(){
        for(let i=0;i<this.items.length;i++){
            if(this.items[i]){
                console.log(`${this.items[i]}`)
            }
        }
        return
    }
}