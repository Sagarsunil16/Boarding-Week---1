// Check if a string is a palindrome using recursion

function palindrome(str,left=0,right=str.length-1){
    if(left>=right){
        return true
    }

    if(str[left]!==str[right]){
        return false
    }

    return palindrome(str,left+1,right-1)
}


console.log(palindrome("malayalam"))
console.log(palindrome("sagar"))