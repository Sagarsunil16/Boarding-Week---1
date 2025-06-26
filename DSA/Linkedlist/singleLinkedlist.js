class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singleLinkedlist{
    constructor(){
        this.head = null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    print(){
        let current = this.head
        let result = ''
        while(current){
            result+= `${current.value}->`
            current = current.next
        }
        console.log(result)
    }
    insertBegininng(value){
         let newNode = new Node(value)
        if(!this.head){
            this.head = newNode 
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    deleteByValue(value){
        if(!this.head) return
        let current = this.head
        while(current.next.value !== value){
           current = current.next
        }
        let next = current.next
        current.next = next.next
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
        this.head = prev;
    }

    // findMiddle(){  // My apporach
    //     let count  = 0 
    //     let curr = this.head
    //     while(curr){
    //         curr = curr.next
    //         count++
    //     }
      
    //     let middle = Math.floor(count/2)
    //     let i = 0
    //     curr = this.head
    //     while(i!==middle){
    //         curr = curr.next
    //         i++
    //     }
    //     return curr.value
    // }

    findMiddle(){
        let fast = this.head
        let slow = this.head

        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        return slow.value
    }

    isPlaindrome(){
       let stack = []

        let curr = this.head
        while(curr){
            stack.push(curr.value)
            curr =curr.next
        }
        curr = this.head
        while(curr){
           if(curr.value !== stack.pop()){
            return false
           }
            curr =curr.next
        }
        return true
    }

    hasCycle(){
        let slow = this.head
        let fast = this.head
        while(fast & fast.next){
            slow = slow.next 
            fast = fast.next.next
            if(fast === slow) return true
        }
        return false
    }
}

const linkedlist = new singleLinkedlist()
linkedlist.insert(1)
linkedlist.insert(2)
linkedlist.insert(3)
linkedlist.insert(4)
linkedlist.print()
linkedlist.insertBegininng(5)
linkedlist.print()
linkedlist.deleteByValue(3)
// linkedlist.deleteByValue(1)
// linkedlist.print()
// linkedlist.reverse()
linkedlist.print()
console.log(linkedlist.isPlaindrome())
console.log(linkedlist.hasCycle())
// console.log(linkedlist.findMiddle())