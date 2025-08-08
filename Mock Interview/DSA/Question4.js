class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Linkedlst{
    constructor(){
        this.head = null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let curr = this.head 
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
        return
    }

    searchByValue(value){
        if(!this.head) return "Not found"
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value){
                return `Found at Index ${i}`
            }
            curr = curr.next
            i++
        }
        return "Not found"
    }
}

const list = new Linkedlst()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)

console.log(list.searchByValue(4))
console.log(list.searchByValue(8))