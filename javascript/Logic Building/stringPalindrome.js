//Check if a string is a palindrome.

function stringPalindrome(str){
    let reverseStr = ''
    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i]
    }
    return str.toLowerCase() === reverseStr.toLowerCase()
}

console.log(stringPalindrome("sagar"))
console.log(stringPalindrome("Malayalam"))