class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.head){
            newNode.next = this.head;
            this.head.prev = newNode
            this.head  = newNode
        }else{
            this.tail = newNode
            this.head = newNode
        }
    }

    insertAt(value,index){
        if (index < 0) return;
        if(index===0){
            return this.prepend(value)
        }
        let newNode = new Node(value)
        let curr = this.head
        let i = 0;
        

        while(curr && i<index-1){
            curr = curr.next;
            i++
        }

        if(!curr) return  // out of bound
        newNode.next = curr.next
        newNode.prev = curr

        if(curr.next){
            curr.next.prev = newNode
        }else{
            this.tail = newNode
        }

        curr.next = newNode;
    }

    delete(value){
        let curr = this.head
        if(!curr) return 'List is empty'
        if(curr.value === value){
           if(!curr.next){
            this.head = null
            this.tail = null
           }else{
            this.head = curr.next
            this.head.prev = null
           }
        return
        }
        
        while(curr && curr.value!==value){
            curr =curr.next
        }
        if(!curr) return "Value not found"

        curr.prev.next = curr.next
        if(curr.next){
            curr.next.prev = curr.prev
        }else{
            this.tail = curr.prev
        }
    }

    deleteAt(pos){
        if(pos === 0){
            if(this.head){
                this.head = this.head.next;
                if(this.head) this.head.prev = null
                if(!this.head) this.tail = null
            }
        return
        }

        let curr = this.head
        let i = 0
        while(curr && i<pos-1){
            curr = curr.next
            i++
        }
        if (!curr || !curr.next) return;
        let toDelete = curr.next
        curr.next = toDelete.next
        if(toDelete.next){
            toDelete.next.prev = curr
        }
        if(!curr.next){
            this.tail = curr
        }
    }

    findMiddle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow ? slow.value : null
    }


}