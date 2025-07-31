class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
    }
    
    insert(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
            return
        }
    }
    
    delete(value){
        if(this.head.value === value ){
            let removeNode = this.head
            this.head = removeNode.next
            return
        }

        let curr = this.head
        while(curr && curr.next.value!==value){
            curr = curr.next
        }
        let removeNode =  curr.next
        curr.next = removeNode.next
        return
    }

    print(){
        let curr = this.head
        let result = ""
        while(curr){
            result+=`${curr.value}->`
            curr = curr.next
        }
        return result
    }
}



let list = new Linkedlist()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)

console.log(list.print())

list.delete(1)
console.log(list.print())