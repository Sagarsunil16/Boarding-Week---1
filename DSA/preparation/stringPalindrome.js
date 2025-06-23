//  Q7: Check if a string is a palindrome

function stringPalindrome(str){
    str = str.toLowerCase();  
    let rev = ''
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev === str
}

console.log(stringPalindrome("sagar"))
console.log(stringPalindrome("malayalam"))