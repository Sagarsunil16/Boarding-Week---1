function longestConsecutiveRepeatingCharacter(str){
    if (str.length === 0) return -1;
    let longest = 1
    let count = 1
    let char = ""
    for(let i=1;i<str.length;i++){
        if(str[i] === str[i-1]){
            count++
            if(count> longest){
                longest = count
                char = str[i]
            }
        }else{
            count = 1
        }
    }
    return char.length!==0 ? char: -1
}

console.log(longestConsecutiveRepeatingCharacter("bbeeepppp"))