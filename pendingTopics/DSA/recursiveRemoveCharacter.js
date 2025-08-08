function removeCharacter(str,charToRemove){
    if(str.length === 0) return ""

    const firstChar = str[0]
    const restResult =  removeCharacter(str.slice(1),charToRemove)

    if(firstChar === charToRemove){
        return restResult
    }else{
        return firstChar + restResult
    }
}


console.log(removeCharacter("banana","a"))
console.log(removeCharacter("apple","a"))
