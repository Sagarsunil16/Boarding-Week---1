class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }


    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
               this.table[index][1] = value
            return
            }
            index = (index+1) % this.size
        }
        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
                return this.table[index][1]
            }
            index = (index + 1) % this.size
        }
        return undefined
    }


    remove(key){
        let index = this.hash(key)
        while(this.table[index]){
            if(this.table[index][0] === key){
                let removeValue = this.table[index]
                this.table[index] = undefined
                index = (index + 1) % this.size
                while(this.table[index]){
                    let [tempKey,tempValue] = this.table[index]
                    this.table[index] = undefined;
                    this.set(tempKey,tempValue);
                    index = (index+1) % this.size
                }
                return removeValue[1]
            }
            index = (index + 1) % this.size
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
        return
    }
}


const Hash = new hashTable(10);

Hash.set("name", "Habil");
Hash.set("mane", "Gokul");
Hash.set("age", 143);
Hash.set("aone","rogit")
Hash.set("enam","maniyan")
Hash.display();
Hash.remove("mane")
Hash.display()

