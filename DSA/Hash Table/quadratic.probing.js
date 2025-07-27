class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        let i=0
        while(this.table[(index + i * i) % this.size] && i<this.size){
            if(this.table[(index + i * i) % this.size][0] === key){
                this.table[(index + i * i) % this.size][1] = value
                return;
            }
            i++
        }
        if(i<this.size){
            this.table[(index + i * i) % this.size] = [key,value]
        }else{
            return "The table is full"
        }
    }

    get(key){
        let index =  this.hash(key)
        let i = 0
        while(this.table[(index + i * i) % this.size] && i<this.size){
            if(this.table[(index + i * i) % this.size][0] === key){
                return this.table[(index + i * i) % this.size][1]
            }
            i++
        }
        return undefined
    }

    remove(key){
    let index = this.hash(key);
    let i = 0;

    while(this.table[(index + i * i) % this.size] && i < this.size){
        if(this.table[(index + i * i) % this.size][0] === key){
            let removeValue = this.table[(index + i * i) % this.size][1];
            this.table[(index + i * i) % this.size] = undefined;

            // rehashing
            let j = i + 1;
            while(this.table[(index + j * j) % this.size]){
                let [tempKey, tempValue] = this.table[(index + j * j) % this.size];
                this.table[(index + j * j) % this.size] = undefined;
                this.set(tempKey, tempValue);
                j++;
            }

            return removeValue;
        }
        i++;
    }

    return undefined;
}


    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const Hash = new hashTable(10);

Hash.set("name", "Habil");
Hash.set("mane", "Gokul");
Hash.set("age", 143);
Hash.set("aone", "rogit");
Hash.set("mane", "rahul");

Hash.display();
console.log(Hash.get("age"));
Hash.remove("mane");
Hash.display();