//Check whether the given string is a palindrome or not

function checkPalindrome(str){
    str = str.toLowerCase()
    let check =''
    for(let i=str.length-1;i>=0;i--){
        check+=str[i]
    }
    console.log(str,check)
    return str === check
}

console.log(checkPalindrome("Malayalam"))
console.log(checkPalindrome("Sagar"))
console.log(checkPalindrome("Pavithra"))