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

    append(value){
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

    display(){
        let result = ''
        let curr = this.head
        while(curr){
            result+=`${curr.value}->`
            curr = curr.next
        }
        result+= "null"
        return result
    }

    reverse(){
        if(!this.head) return
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    findMiddleNode(){
        let slow = this.head;
        let fast = this.head
        while(fast.next){
            fast  = fast.next.next
            slow = slow.next
        }
        return slow.value
    }
}


const list = new Linkedlist()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
console.log(list.display())
list.reverse()
console.log(list.display())
console.log(list.findMiddleNode())