class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class singleLinkedlist {
    constructor(){
        this.head = null
    }

    append(value){
        const newNode = new Node(value)
        if(this.head == null){
            this.head = newNode
            return 
        }else{
            let curr = this.head
            while(curr.next){
                curr =  curr.next
            }
            curr.next = newNode
            return
        }
    }

    prepend(value){
        let newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
            return
        }
        else{
            newNode.next = this.head
            this.head = newNode
            return
        }
    }

    find(value){
        if(this.head == null){
            return 'List is empty'
        }

        let curr = this.head
        while(curr){
            if(curr.value == value){
                return true
            }
            curr = curr.next
        }
        return false
    }

    delete(value){
        if(this.head == null){
            return 'List is empty'
        }
        if(this.head.value === value){
            this.head = this.head.next
            return
        }
        let curr = this.head
        while(curr.next && curr.next.value!==value){
            curr = curr.next
        }
       if(!curr.next) return 'value not found'

       curr.next = curr.next.next
    }

    getMiddle(){
        let count = 0
        let curr = this.head
        while(curr){
            count++
            curr = curr.next
        }
        curr = this.head
        let middle =  Math.floor(count/2)
        let i=0
        while(i!==middle){
            curr = curr.next
            i++
        }

        return curr.value
    }

    print(){
        let str = ''
        let curr = this.head
        while(curr){
            str+= `${curr.value}->`
            curr = curr.next
        }
        console.log(str)
        return
    }

    // reverse(){
    //    let prev = null 
    //    let curr = this.head
    //    while(curr){
    //     let nextNode = curr.next
    //     curr.next = prev
    //     prev = curr
    //     curr = nextNode
    //    }
    //    this.head = prev
    // }

    hasCycle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast =  fast.next.next
            if(slow===fast){
            return true    
        }
    }
    return false   
    }

    removeDuplicates(){
        let seen = new Set()
        let curr = this.head
        let prev = null
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
            }
            else{
                seen.add(curr.value)
                prev =  curr
            }
            curr = curr.next
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        }
        this.head = prev
    }
}


const sigle = new singleLinkedlist()
sigle.append(1)
sigle.append(2)
sigle.append(3)
sigle.append(4)
sigle.append(5)
sigle.print()
sigle.prepend(0)
sigle.print()
console.log(sigle.find(8))
console.log(sigle.find(4))
sigle.delete(0)
sigle.print()
console.log(sigle.getMiddle())
sigle.reverse()
sigle.print()