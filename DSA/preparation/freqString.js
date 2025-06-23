//  Q9: Find frequency of characters in a string

function freqCharString(str){
    let freq = new Map()
    for(let char of str){
       freq.set(char,freq.get(char) ? freq.get(char) + 1 : 1)
    }
    return [...freq]
}

console.log(freqCharString("sagar"))
console.log(freqCharString("pavithra"))