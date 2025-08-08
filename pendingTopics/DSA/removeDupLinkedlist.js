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
        const newNode = new Node(value)
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

    removeDuplicates(){
        let seen = new Set()
        let prev = null
        let curr = this.head
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next
            }else{
                seen.add(curr.value)
                prev = curr
            }
            curr = curr.next
        }
    }

    removeDuplciatesSorted(){
        let curr = this.head
        while(curr && curr.next){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next
            }else{
                curr = curr.next
            }
        }
    }

    display(){
        if(!this.head) return "List is empty"
        let result = ""
        let curr = this.head
        while(curr){
            result+=`${curr.value}->`
            curr = curr.next
        }
        return result
    }
}

const list = new Linkedlist()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(2)

console.log(list.display())
list.removeDuplicates()
console.log(list.display())