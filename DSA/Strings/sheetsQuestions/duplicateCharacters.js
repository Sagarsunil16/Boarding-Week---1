//find duplicate characters in a string

function findDuplicateCharachters(str){
    const map = new Map()
    const duplicates = []
    for(let char of str){
        map.set(char,(map.get(char) || 0)+1)
    }

    for(let [char,count] of map){
        if(count>1){
            duplicates.push(char)
        }
    }
    return duplicates
}

console.log( findDuplicateCharachters("Sagarr"))