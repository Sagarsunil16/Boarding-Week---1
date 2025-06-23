//Count the number of vowels in a string.

function countVowels(str){
    let vowels = 'aeiou'
    let count = 0
    for(let word of str.toLowerCase()){
        if(vowels.includes(word)){
            count++
        }
    }
    return count
}

console.log(countVowels("ramcharanie"))